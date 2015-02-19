var incomePie = new LabeledPie(".tip-info");


var statLabels = {
  race: ["All", "Latino", "White", "African American", "Native American", "Asian",
    "Pacific Islander", "Other Race", "Mixed Race"
  ],
  asian: ["All", "Asian Indian", "Bangladeshi", "Cambodian", "Mainland Chinese", "Filipino", "Hmong",
    "Japanese", "Korean", "Laotian", "Pakistani", "Taiwanese", "Thai", "Vietnamese"
  ]
}

var pieLabelConfig = {
  income: {
    labels: ["< $25K", "$25K - $50K", "$50K - $75K", "$75K - $100K", "$100K - $200K", "> $200K"],
    domain: [0, 1, 2, 3, 4, 5],
    range: ["#a50026", "#f46d43", "#fee08b", "#d9ef8b", "#66bd63", "#006837"]
  },
  race: {
    labels: statLabels.race.slice(1),
    domain: [0, 1, 2, 3, 4, 5, 6, 7],
    range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"]
  },
  asian: {
    labels: statLabels.asian.slice(1),
    domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    range: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928", "#cccccc"]
  }
}


var setPieLabels = function(labelConfig, key) {

  // reset income pie
  d3.select(".tip-info").select("svg").remove();
  incomePie = new LabeledPie(".tip-info");

  var color = d3.scale.ordinal()
    .domain(labelConfig[key]["domain"])
    .range(labelConfig[key]["range"]);

  incomePie.setLabels(labelConfig[key]["labels"]);
  incomePie.setColorScale(color);

};

var setLegendDescription = function(statType, statIndex) {

  var mapLegends = {
    income: "Percentage of income tax returns with AGI greater than $200,000",
    race: "Percentage of # race/ethnicity",
    asian: "Percentage of Asians listed as #"
  }

  var pieLegends = {
    income: "AGI reported on 2012 income tax return",
    race: "Race/Ethnicity",
    asian: "National origin of Asians"
  }

  var description = mapLegends[statType];
  if (description.indexOf('#') >= 0) {
    description = description.replace('#', statLabels[statType][statIndex]);
  }
  d3.select(".legend-description").text(description);
  d3.select(".tip-description").text(pieLegends[statType]);
}

var createComboBoxes = function() {
  raceList = statLabels.race.slice(1);
  var races = d3.select("#race-list").selectAll('option')
    .data(raceList);

  races.enter().append('option')
    .attr('value', function(d, i) {
      return i + 1;
    })
    .text(function(d) {
      return d;
    });

  var asians = d3.select("#asian-list").selectAll('option')
    .data(statLabels.asian);

  asians.enter().append('option')
    .attr('value', function(d, i) {
      return i;
    })
    .text(function(d) {
      return d;
    });

}

createComboBoxes();

var createLegend = function(colors, statType, statIndex) {
  var formats = {
    percent: d3.format('%'),
    percentPointOne: d3.format('2.1%')
  };

  d3.select("#legend ul").remove();
  var legend = d3.select('#legend')
    .append('ul')
    .attr('class', 'list-inline');

  var keys = legend.selectAll('li.key')
    .data(colors.range());

  // do we need more precision?
  var endRange = colors.range()[colors.range().length - 1];
  var maxDomain = colors.invertExtent(endRange);
  var needMorePrecision = maxDomain[0] < 0.1;

  keys.enter().append('li')
    .attr('class', 'key')
    .style('border-top-color', String)
    .text(function(d) {
      var r = colors.invertExtent(d);
      return needMorePrecision ?
        formats.percentPointOne(r[0]) : formats.percent(r[0]);
    });
  setLegendDescription(statType, statIndex);
}


var zipCodeMap = (function(createLegend, setPieLabels) {
  var width = 650;
  var height = 1000;

  var projection = d3.geo.albersUsa()
    .scale(0.6 * (1 << 16))
    .translate([width / 2, height / 2]);

  var path = d3.geo.path()
    .projection(projection);

  var zoom = d3.behavior.zoom()
    .translate(projection.translate())
    .scale(projection.scale())
    .scaleExtent([0.6 * (1 << 16), 0.7 * (1 << 17)])
    .on("zoom", zoomed);

  //Define quantize scale to sort data values into buckets of color
  var color = d3.scale.quantize()
    .range(["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]);

  //Create SVG element
  var svg = d3.select(".right-side")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom);

  var statIndex = 6;

  var statType = "income";

  var statData;

  var geometry;

  var getPropertyValues = function() {
    var key;
    var valueMap = {};
    var zips = topojson.feature(geometry, geometry.objects.Bay_Area);
    zips.features.forEach(function(d) {
      for (key in d.properties) {
        valueMap[d.properties[key]] = true;
      }
    });
    return Object.keys(valueMap);
  }

  var setStatType = function(newStatType) {
    statType = newStatType;
  }

  var setStatIndex = function(newStatIndex) {
    statIndex = newStatIndex;
  };

  function getStatValue(d, stats) {
    var zip = d.properties.GEOID10;
    var counts = stats[zip][statType];
    if (counts) {
      /*  CHANGE THIS FOR EACH RACE/INCOME LEVEL */
      return +counts[statIndex] / +counts[0];

    } else {
      return null;
    }

  }

  function getTitle(d) {
    return d.properties.GEOID10 + ": " + d.properties.city;
  }

  function setToolTip(d, stats, values) {
    values = values || stats[d.properties.GEOID10][statType];
    var counts = values.slice(1);
    if (+values[0] > 0) {
      d3.select(".tip-info").classed("hidden", false);
      d3.select(".tip-description").classed("hidden", false);
      incomePie.change(counts);
    } else {
      d3.select(".tip-info").classed("hidden", true);
      d3.select(".tip-description").classed("hidden", false);
    }
  }

  var updateColorDomain = function() {
    var zips = topojson.feature(geometry, geometry.objects.Bay_Area)

    /*                var min = d3.min(zips.features, function(d) { 
                            return getStatValue(d, statData); //+d.properties.GEOID10; 
                        });
                        var max = d3.max(zips.features, function(d) { 
                            return getStatValue(d, statData); //+d.properties.GEOID10;
                         })


                    color.domain([
                      min, 
                      max
                      ]);  
    */
    color.domain(
      d3.extent(zips.features, function(d) {
        return getStatValue(d, statData);
      })
    );

    createLegend(color, statType, statIndex);

  }

  var updateStats = function() {

    updateColorDomain()

    svg.selectAll("path")
      .transition().duration(1000)
      .attr("fill", function(d) {
        //Get data value
        var value = getStatValue(d, statData);

        if (value) {
          //If value exists…
          return color(value);
        } else {
          //If value is undefined…
          return "#ccc";
        }
      })

  };

  var selectByData = function(field, fieldValue) {
    var matches = [];
    var aggregate = [];
    var title;
    var zip;
    var values;

    var zips = topojson.feature(geometry, geometry.objects.Bay_Area);
    zips.features.forEach(function(d) {
      if (d.properties[field] === fieldValue) {
        matches.push(d);
      }
    });
    if (matches.length > 0) {
      d3.selectAll(".selected").classed("selected", false);
      matches.forEach(function(d) {
        zip = d.properties.GEOID10;
        values = statData[zip][statType];
        for (var i = 0; i < values.length; i++) {
          aggregate[i] = aggregate[i] || 0;
          aggregate[i] += +values[i];
        }
      });
      title = (matches.length > 1) ? fieldValue : getTitle(matches[0]);
      d3.select(".tip-location").text(title);
      setToolTip(null, statData, aggregate);
    }

    svg.selectAll("path")[0].forEach(function(path) {
      var path = d3.select(path);
      if (path.datum().properties[field] === fieldValue) {
        path.classed("selected", true);
      }
    });

    if (matches.length > 0) {
      aggregate = matches[0];

      center(aggregate, true);
    }
  }

  function centerZip(ba) {

    var zips = topojson.feature(ba, ba.objects.Bay_Area),
      zip = zips.features.filter(function(d) {

        return d.properties.GEOID10 === "94560";
      })[0];

    center(zip);
  }


  function center(d, transition) {
    var centroid = path.centroid(d),
      translate = projection.translate();

    projection.translate([
      translate[0] - centroid[0] + width / 2,
      translate[1] - centroid[1] + height / 2
    ]);

    zoom.translate(projection.translate());

    if (transition) {
      svg.selectAll("path").transition()
        .duration(1000)
        .attr("d", path);
    } else {
      svg.selectAll("path")
        .attr("d", path);
    }
  }

  function zoomed() {
    projection.translate(d3.event.translate).scale(d3.event.scale);
    svg.selectAll("path").attr("d", path);
  }

  d3.json("data/allStats.json", function(stats) {
    statData = stats;

    d3.json("Bay_Area_Cities_topo.json", function(json) {
      geometry = json;
      var lastZipClick = [];
      updateColorDomain();

      svg.selectAll("path")
        .data(topojson.feature(json, json.objects.Bay_Area).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke", "black")
        .attr("fill", function(d) {
          //Get data value
          var value = getStatValue(d, statData);

          if (value) {
            //If value exists…
            return color(value);
          } else {
            //If value is undefined…
            return "#ccc";
          }
        })
        .on("click", function(d) {
          // Find previously selected, unselect
          d3.selectAll(".selected").classed("selected", false);

          // Select current item
          d3.select(this).classed("selected", true);
          d3.select(".tip-location").text(getTitle(d));
          setToolTip(d, statData);
          lastZipClick = [d3.event.x, d3.event.y];
        })
        .append("svg:title")
        .text(function(d) {
          return getTitle(d);
        });


      centerZip(json);

      d3.select(".right-side").on("click", function() {
        if (d3.event.x !== lastZipClick[0] && d3.event.y !== lastZipClick[1]) {
          d3.select(".selected").classed("selected", false);
          d3.select(".tip-info").classed("hidden", true);
          d3.select(".tip-description").classed("hidden", true);
          d3.select(".tip-location").text('');
        }
        lastZipClick = [];
      })
    });
  });

  setPieLabels(pieLabelConfig, "income");

  return {
    getPropertyValues: getPropertyValues,
    setStatType: setStatType,
    setStatIndex: setStatIndex,
    updateStats: updateStats,
    selectByData: selectByData
  }
})(createLegend, setPieLabels);








var getSelectionTitle = function() {
  var retVal = d3.select(".tip-location").text().split(':')[0];
  return retVal;
}

var selectByData = function(value) {
  var key = value.match(/[0-9]/) ? "GEOID10" : "city";
  zipCodeMap.selectByData(key, value);
}

d3.select("#stat-list")
  .on("change", function() {
    var statIndex = +d3.select("#stat-list").node().value;
    var raceIndex = +d3.select("#race-list").node().value;
    d3.select("#race-list").classed("hidden", statIndex === 0);
    d3.select("#asian-list").classed("hidden", statIndex === 0 || raceIndex !== 5);
    if (statIndex === 0) {
      zipCodeMap.setStatType("income");
      zipCodeMap.setStatIndex(6);
      setPieLabels(pieLabelConfig, "income");
      selectByData(getSelectionTitle());
    } else if (statIndex === 1) {
      zipCodeMap.setStatType("race");
      zipCodeMap.setStatIndex(raceIndex);
      setPieLabels(pieLabelConfig, "race");
      selectByData(getSelectionTitle());
    }
    zipCodeMap.updateStats();
  });

d3.select("#race-list")
  .on("change", function() {
    var raceIndex = +d3.select("#race-list").node().value;
    d3.select("#asian-list").classed("hidden", raceIndex !== 5);
    var asianIndex = +d3.select("#asian-list").node().value;
    if (raceIndex === 5) {
      selectAsian();
    } else {
      zipCodeMap.setStatType("race");
      zipCodeMap.setStatIndex(raceIndex);
      setPieLabels(pieLabelConfig, "race");
      selectByData(getSelectionTitle());
    }
    zipCodeMap.updateStats();
  });

var selectAsian = function() {
  var asianIndex = +d3.select("#asian-list").node().value;
  if (asianIndex === 0) {
    zipCodeMap.setStatType("race");
    zipCodeMap.setStatIndex(5);
    setPieLabels(pieLabelConfig, "race");
    selectByData(getSelectionTitle());
  } else {
    zipCodeMap.setStatType("asian");
    zipCodeMap.setStatIndex(asianIndex);
    setPieLabels(pieLabelConfig, "asian");
    selectByData(getSelectionTitle());
  }
}

d3.select("#asian-list")
  .on("change", function() {
    selectAsian();
    zipCodeMap.updateStats();
  });

d3.select("#select-button")
  .on("click", function() {
    window.event.stopPropagation();
    var value = d3.select("#select-input").node().value;
    var key = value.match(/[0-9]/) ? "GEOID10" : "city";
    zipCodeMap.selectByData(key, value); //GEOID10
  })

/*d3.select("#select-input")
  .on("keyup", function(){
    window.event.stopPropagation();
    var value = d3.select("#select-input").node().value;
    var key = value.match(/[0-9]/) ? "GEOID10" : "city";
    zipCodeMap.selectByData(key, value); //GEOID10

  });*/

$("#select-input")
  .on("propertychange", function() {
    window.event.stopPropagation();
    var value = d3.select("#select-input").node().value;
    var key = value.match(/[0-9]/) ? "GEOID10" : "city";
    zipCodeMap.selectByData(key, value); //GEOID10

  });


$("#select-input").bind('input propertychange', function(event) {
  event.stopPropagation();
  var value = d3.select("#select-input").node().value;
  var key = value.match(/[0-9]/) ? "GEOID10" : "city";
  zipCodeMap.selectByData(key, value);
});

$("#select-input").on('val.changed', function(event) {
  event.stopPropagation();
  var value = d3.select("#select-input").node().value;
  var key = value.match(/[0-9]/) ? "GEOID10" : "city";
  zipCodeMap.selectByData(key, value);
});


// hack to get auto-complete programmatic change to #select-input noticed
(function($) {
  var originalVal = $.fn.val;
  $.fn.val = function() {
    var result = originalVal.apply(this, arguments);
    if (arguments.length > 0)
      $(this).trigger('val.changed');
    return result;
  };
})(jQuery);

$("#select-input").autoComplete({
  minChars: 1,
  source: function(term, suggest) {
    term = term.toLowerCase();
    var choices = zipCodeMap.getPropertyValues();
    var matches = [];
    for (i = 0; i < choices.length; i++)
      if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
    suggest(matches);
  }
});