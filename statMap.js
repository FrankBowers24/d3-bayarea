var d3;
var LabeledPie;
var topojson;
var annyang;
var window;

var incomePie = new LabeledPie(".tip-info");

var statLabels = {
  main: ["Income", "Race/Ethnicity"],
  race: ["All", "Latino", "White", "African American", "Native American", "Asian",
    "Pacific Islander", "Other Race", "Mixed Race"
  ],
  asian: ["All", "Asian Indian", "Bangladeshi", "Cambodian", "Mainland Chinese", "Filipino", "Hmong",
    "Japanese", "Korean", "Laotian", "Pakistani", "Taiwanese", "Thai", "Vietnamese"
  ],
  birth: ["All", "California", "USA, not California", "Foreign"],
  foreign: ["All", "Europe", "Asia", "Africa", "Oceania", "Latin America", "Canada"],
  age: ["All", "Under 18", "18 to 24", "25 to 34", "35 to 44", "45 to 64", "65 and over"],
  housing: ["Single Family Homes", "Condominiums"]
};

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
  },
  birth: {
    labels: statLabels.birth.slice(1),
    domain: [0, 1, 2],
    range: ["#1b9e77", "#d95f02", "#7570b3"]
  },
  foreign: {
    labels: statLabels.foreign.slice(1),
    domain: [1, 2, 3, 4, 5, 6],
    range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d"]
  },
  age: {
    labels: statLabels.age.slice(1),
    domain: [0, 1, 2, 3, 4, 5],
    range: ["#a50026", "#f46d43", "#fee08b", "#d9ef8b", "#66bd63", "#006837"]
  }
};


var setPieLabels = function (labelConfig, key) {
  // reset income pie
  d3.select(".tip-info").select("svg").remove();
  incomePie = new LabeledPie(".tip-info");

  var color = d3.scale.ordinal()
    .domain(labelConfig[key].domain)
    .range(labelConfig[key].range);

  incomePie.setLabels(labelConfig[key].labels);
  incomePie.setColorScale(color);
  d3.select(".tooltip-overlay").classed("hidden", true);
};

var setLegendDescription = function (statType, statIndex) {
  var mapLegends = {
    income: "Percentage of income tax returns with AGI greater than $200,000",
    race: "Percentage of # race/ethnicity",
    asian: "Percentage of Asians listed as #",
    birth: "Percentage of # Born",
    foreign: "Percentage of Foreign Born from #",
    age: "Percentage of population age #",
    sfr: "Median Price of Single Family Homes ($1,000,000's)",
    condo: "Median Price of Condominiums ($1,000,000's)"
  };

  var pieLegends = {
    income: "IRS Data: AGI reported on 2012 income tax returns",
    race: "2010 Census: Race/Ethnicity",
    asian: "2013 ACS: National origin of Asians",
    birth: "2013 ACS: Place of birth",
    foreign: "2013 ACS:Regional origin of Foreign Born Population",
    age: "2013 American Community Survey: Age",
    sfr: "Zillow: January, 2015",
    condo: "Zillow: January, 2015"
  };

  var overlayDescription = {
    sfr: "Median Price of Single Family Homes",
    condo: "Median Price of Condominiums"
  }

  var description = mapLegends[statType];
  if (description.indexOf('#') >= 0) {
    description = description.replace('#', statLabels[statType][statIndex]);
  }
  d3.select(".legend-description").text(description);
  d3.select(".tip-description").text(pieLegends[statType]);
  if (statType in overlayDescription) {
    d3.select(".tooltip-overlay-label").text(overlayDescription[statType]);
  }
};

var createComboBoxes = function () {
  var raceList = statLabels.race.slice(1);
  var races = d3.select("#race-list").selectAll('option')
    .data(raceList);

  races.enter().append('option')
    .attr('value', function (d, i) {
      return i + 1;
    })
    .text(function (d) {
      return d;
    });

  var asians = d3.select("#asian-list").selectAll('option')
    .data(statLabels.asian);

  asians.enter().append('option')
    .attr('value', function (d, i) {
      return i;
    })
    .text(function (d) {
      return d;
    });

  var birth = d3.select("#birth-list").selectAll('option')
    .data(statLabels.birth.slice(1));

  birth.enter().append('option')
    .attr('value', function (d, i) {
      return i + 1;
    })
    .text(function (d) {
      return d;
    });

  var foreign = d3.select("#foreign-list").selectAll('option')
    .data(statLabels.foreign);

  foreign.enter().append('option')
    .attr('value', function (d, i) {
      return i;
    })
    .text(function (d) {
      return d;
    });

  var age = d3.select("#age-list").selectAll('option')
    .data(statLabels.age.slice(1));

  age.enter().append('option')
    .attr('value', function (d, i) {
      return i + 1;
    })
    .text(function (d) {
      return d;
    });

  var housing = d3.select("#housing-list").selectAll('option')
    .data(statLabels.housing);

  housing.enter().append('option')
    .attr('value', function (d, i) {
      return i + 1;
    })
    .text(function (d) {
      return d;
    });

};

createComboBoxes();

var createLegend = function (colors, statType, statIndex) {
  var formats = {
    percent: d3.format('%'),
    percentPointOne: d3.format('2.1%'), 
    price: d3.format('1.1')
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
    .text(function (d) {
      var r = colors.invertExtent(d);
      var str;
      if (statType === "sfr" || statType === "condo") {
        str = (r[0]/1000000).toFixed(2); 
      } else {
        str = needMorePrecision ?
        formats.percentPointOne(r[0]) : formats.percent(r[0]);
      }
      return str;
    });
  setLegendDescription(statType, statIndex);
};


var zipCodeMap = (function (createLegend, setPieLabels) {
  var width = 650;
  var height = 1000;
  var minZoom = 0.6 * (1 << 16);
  var maxZoom = 0.7 * (1 << 17);

  var projection = d3.geo.albersUsa()
    .scale(0.6 * (1 << 16))
    .translate([width / 2, height / 2]);

  var path = d3.geo.path()
    .projection(projection);

  var zoom = d3.behavior.zoom()
    .translate(projection.translate())
    .scale(projection.scale())
    .scaleExtent([minZoom, maxZoom])
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

  var getPropertyValues = function () {
    var key;
    var valueMap = {};
    var zips = topojson.feature(geometry, geometry.objects.Bay_Area);
    zips.features.forEach(function (d) {
      for (key in d.properties) {
        valueMap[d.properties[key]] = true;
      }
    });
    return Object.keys(valueMap);
  };

  var setStatType = function (newStatType) {
    statType = newStatType;
  };

  var setStatIndex = function (newStatIndex) {
    statIndex = newStatIndex;
  };

  function getStatValue(d, stats) {
    var zip = d.properties.GEOID10;
    var counts = stats[zip][statType];
    if (counts) {
      if (statIndex === -1) return +counts[0];
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
    if (statIndex === -1) {
      d3.select(".tooltip-overlay").classed("hidden", false);
      d3.select(".tip-description").classed("hidden", false);
      var value = values[0] ? "$" + values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : values[0];
      d3.select(".tooltip-overlay-text").text(value ? value : "No Data");
    } else if (+values[0] > 0) {
      d3.select(".tip-info").classed("hidden", false);
      d3.select(".tip-description").classed("hidden", false);
      incomePie.change(counts);
    } else {
      d3.select(".tip-info").classed("hidden", true);
      d3.select(".tip-description").classed("hidden", false);
    }
  }

  var updateColorDomain = function () {
    var zips = topojson.feature(geometry, geometry.objects.Bay_Area);

    color.domain(
      d3.extent(zips.features, function (d) {
        return getStatValue(d, statData);
      })
    );

    createLegend(color, statType, statIndex);
  };

  var doFill = function (d) {
    var value = getStatValue(d, statData);

    if (value) {
      //If value exists…
      return color(value);
    } else {
      //If value is undefined…
      return "#ccc";
    }
  };

  var updateStats = function () {
    updateColorDomain();

    svg.selectAll("path")
      .transition().duration(1000)
      .attr("fill", function (d) {
        return doFill(d);
      });
  };

  var selectByData = function (field, fieldValue) {
    var matches = [];
    var aggregate = [];
    var title;
    var zip;
    var values;
    var i;
    var dataCount = 0;  // number of matches which have non-zero data

    var zips = topojson.feature(geometry, geometry.objects.Bay_Area);
    zips.features.forEach(function (d) {
      if (d.properties[field] === fieldValue) {
        matches.push(d);
      }
    });
    if (matches.length > 0) {
      d3.selectAll(".selected").classed("selected", false);
      matches.forEach(function (d) {
        zip = d.properties.GEOID10;
        values = statData[zip][statType];
        dataCount = (+values[0] > 0) ? dataCount + 1 : dataCount;
        for (i = 0; i < values.length; i++) {
          aggregate[i] = aggregate[i] || 0;
          aggregate[i] += +values[i];
        }
      });
      title = (matches.length > 1) ? fieldValue : getTitle(matches[0]);
      d3.select(".tip-location").text(title);
      if (statIndex === -1  && dataCount > 0) {
        aggregate[0] = (+aggregate[0]/dataCount).toFixed(0);
      }
      setToolTip(null, statData, aggregate);
    }

    svg.selectAll("path")[0].forEach(function (path) {
      path = d3.select(path);
      if (path.datum().properties[field] === fieldValue) {
        path.classed("selected", true);
      }
    });

    if (matches.length > 0) {
      aggregate = matches[0];

      center(aggregate, true);
    }
  };

  function centerZip(ba) {

    var zips = topojson.feature(ba, ba.objects.Bay_Area),
      zip = zips.features.filter(function (d) {

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

  function formatLocation(p, k) {
    var format = d3.format("." + Math.floor(Math.log(k) / 2 - 2) + "f");
    return (p[1] < 0 ? format(-p[1]) + "°S" : format(p[1]) + "°N") + " " + (p[0] < 0 ? format(-p[0]) + "°W" : format(p[0]) + "°E");
  }

  function mousemoved() {
    // console.log("mouse: " + d3.mouse(this));
    // console.log("lat/long: " + formatLocation(projection.invert(d3.mouse(this)), zoom.scale()));
  }

  function zoomed() {
    projection.translate(d3.event.translate).scale(d3.event.scale);
    svg.selectAll("path").attr("d", path);
  }

  function location(p, translate, scale) {
    return [(p[0] - translate[0]) / scale, (p[1] - translate[1]) / scale];
  }

  function translateTo(p, l) {
    l = point(l);
    translate[0] += p[0] - l[0];
    translate[1] += p[1] - l[1];
  }

  function zoomOut() {

    var test = d3.select(".selected");

    var d = d3.select(".selected").datum();


    var bounds = path.bounds(d),
      dx = bounds[1][0] - bounds[0][0],
      dy = bounds[1][1] - bounds[0][1],
      x = (bounds[0][0] + bounds[1][0]) / 2,
      y = (bounds[0][1] + bounds[1][1]) / 2,
      scale = maxZoom, //.9 / Math.max(dx / width, dy / height),
      translate = [width / 2 - scale * x, height / 2 - scale * y];

    svg.transition()
      .duration(750)
      .call(zoom.translate(translate).scale(scale).event);
  }

  d3.json("data/allStats.json", function (stats) {
    statData = stats;

    d3.json("Bay_Area_Cities_topo.json", function (json) {
      geometry = json;
      var lastZipClick = [];
      updateColorDomain();

      svg.selectAll("path")
        .data(topojson.feature(json, json.objects.Bay_Area).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke", "black")
        .attr("fill", function (d) {
          return doFill(d);
        })
        .on("click", function (d) {
          // Find previously selected, unselect
          d3.selectAll(".selected").classed("selected", false);

          // Select current item
          d3.select(this).classed("selected", true);
          d3.select(".tip-location").text(getTitle(d));
          setToolTip(d, statData);
          lastZipClick = [d3.event.x, d3.event.y];
        })
        .on("mousemove", mousemoved)
        .append("svg:title")
        .text(function (d) {
          return getTitle(d);
        });

      centerZip(json);

      d3.select(".right-side").on("click", function () {
        if (d3.event.x !== lastZipClick[0] && d3.event.y !== lastZipClick[1]) {
          d3.selectAll(".selected").classed("selected", false);
          d3.select(".tip-info").classed("hidden", true);
          d3.select(".tip-description").classed("hidden", true);
          d3.select(".tip-location").text('');
          d3.select(".tooltip-overlay").classed("hidden", true);
        }
        lastZipClick = [];
      });
    });
  });

  setPieLabels(pieLabelConfig, "income");

  return {
    getPropertyValues: getPropertyValues,
    setStatType: setStatType,
    setStatIndex: setStatIndex,
    updateStats: updateStats,
    selectByData: selectByData,
    zoomOut: zoomOut
  };
})(createLegend, setPieLabels);

var getSelectionTitle = function () {
  var retVal = d3.select(".tip-location").text().split(':')[0];
  return retVal;
};

var selectByData = function (value) {
  var key = value.match(/[0-9]/) ? "GEOID10" : "city";
  zipCodeMap.selectByData(key, value);
};

d3.select("#zoom-out")
  .on("click", function () {
    window.event.stopPropagation();
    zipCodeMap.zoomOut();
  });

var gotoVoiceCommand = function (place) {
  $('#select-input').val(place);
  selectByData(place);
};

var showMeVoiceCommand = function (stat) {
  var statIndex = 0;
  if (stat === "income") {
    statIndex = 0;
  } else if (stat === "race") {
    statIndex = 1;
  }
  $("#stat-list").val(statIndex);
  $("#stat-list").trigger("change");
};

var enableVoiceCommands = function () {
  var commands = {
    'go to *place': gotoVoiceCommand,
    'show me *stat': showMeVoiceCommand
  };
  if (annyang) {
    console.log(annyang);
    annyang.start();
    annyang.debug();
    annyang.addCommands(commands);
  }
};

enableVoiceCommands();

$("#stat-list")
  .on("change", function () {
    var statIndex = +d3.select("#stat-list").node().value;
    var raceIndex = +d3.select("#race-list").node().value;
    var birthIndex = +d3.select("#birth-list").node().value;
    var foreignIndex = +d3.select("#foreign-list").node().value;
    var ageIndex = +d3.select("#age-list").node().value;
    var housingIndex = +d3.select("#housing-list").node().value;
    d3.select("#race-list").classed("hidden", statIndex !== 1);
    d3.select("#asian-list").classed("hidden", statIndex !== 1 || raceIndex !== 5);
    d3.select("#birth-list").classed("hidden", statIndex !== 2);
    d3.select("#foreign-list").classed("hidden", statIndex !== 2 || birthIndex !== 3);
    d3.select("#age-list").classed("hidden", statIndex !== 3);
    d3.select("#housing-list").classed("hidden", statIndex !== 4);
    if (statIndex === 0) {
      zipCodeMap.setStatType("income");
      zipCodeMap.setStatIndex(6);
      setPieLabels(pieLabelConfig, "income");
      selectByData(getSelectionTitle());
    } else if (statIndex === 1) {
      if (raceIndex === 5) {
        selectAsian();
      } else {
        zipCodeMap.setStatType("race");
        zipCodeMap.setStatIndex(raceIndex);
        setPieLabels(pieLabelConfig, "race");
        selectByData(getSelectionTitle());
      }
    } else if (statIndex === 2) {
      if (birthIndex === 3) {
        selectForeign();
      } else {
        zipCodeMap.setStatType("birth");
        zipCodeMap.setStatIndex(birthIndex);
        setPieLabels(pieLabelConfig, "birth");
        selectByData(getSelectionTitle());
      }
    } else if (statIndex === 3) {
      zipCodeMap.setStatType("age");
      zipCodeMap.setStatIndex(ageIndex);
      setPieLabels(pieLabelConfig, "age");
      selectByData(getSelectionTitle());
    } else if (statIndex === 4) {
      d3.select(".tooltip-overlay").classed("hidden", false);
      zipCodeMap.setStatType((housingIndex === 1) ? "sfr" : "condo");
      zipCodeMap.setStatIndex(-1);
      //setPieLabels(pieLabelConfig, "age");
      selectByData(getSelectionTitle());  
    }
    zipCodeMap.updateStats();
  });

d3.select("#race-list")
  .on("change", function () {
    var raceIndex = +d3.select("#race-list").node().value;
    d3.select("#asian-list").classed("hidden", raceIndex !== 5);
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

var selectAsian = function () {
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
};

d3.select("#asian-list")
  .on("change", function () {
    selectAsian();
    zipCodeMap.updateStats();
  });

var selectForeign = function () {
  var foreignIndex = +d3.select("#foreign-list").node().value;
  if (foreignIndex === 0) {
    zipCodeMap.setStatType("birth");
    zipCodeMap.setStatIndex(3);
    setPieLabels(pieLabelConfig, "birth");
    selectByData(getSelectionTitle());
  } else {
    zipCodeMap.setStatType("foreign");
    zipCodeMap.setStatIndex(foreignIndex);
    setPieLabels(pieLabelConfig, "foreign");
    selectByData(getSelectionTitle());
  }
};

d3.select("#foreign-list")
  .on("change", function () {
    selectForeign();
    zipCodeMap.updateStats();
  });

d3.select("#birth-list")
  .on("change", function () {
    var birthIndex = +d3.select("#birth-list").node().value;
    d3.select("#foreign-list").classed("hidden", birthIndex !== 3);
    if (birthIndex === 3) {
      selectForeign();
    } else {
      zipCodeMap.setStatType("birth");
      zipCodeMap.setStatIndex(birthIndex);
      setPieLabels(pieLabelConfig, "birth");
      selectByData(getSelectionTitle());
    }
    zipCodeMap.updateStats();
  });

d3.select("#age-list")
  .on("change", function () {
    var ageIndex = +d3.select("#age-list").node().value;

    zipCodeMap.setStatType("age");
    zipCodeMap.setStatIndex(ageIndex);
    setPieLabels(pieLabelConfig, "age");
    selectByData(getSelectionTitle());
    zipCodeMap.updateStats();
  });

d3.select("#housing-list")
  .on("change", function () {
    var housingIndex = +d3.select("#housing-list").node().value;
    zipCodeMap.setStatType((housingIndex === 1) ? "sfr" : "condo");
    zipCodeMap.setStatIndex(-1);
    //setPieLabels(pieLabelConfig, "age");
    selectByData(getSelectionTitle());
    zipCodeMap.updateStats();
  });

d3.select("#select-button")
  .on("click", function () {
    window.event.stopPropagation();
    var value = d3.select("#select-input").node().value;
    var key = value.match(/[0-9]/) ? "GEOID10" : "city";
    zipCodeMap.selectByData(key, value);
  });

$("#select-input")
  .on("propertychange", function () {
    window.event.stopPropagation();
    window.event.preventDefault();
    var value = d3.select("#select-input").node().value;
    var key = value.match(/[0-9]/) ? "GEOID10" : "city";
    zipCodeMap.selectByData(key, value);
    return false;
  });

$("#select-input").bind('input propertychange', function (event) {
  event.stopPropagation();
  window.event.preventDefault();
  var value = d3.select("#select-input").node().value;
  var key = value.match(/[0-9]/) ? "GEOID10" : "city";
  zipCodeMap.selectByData(key, value);
  return false;
});

$("#select-input").on('val.changed', function (event) {
  event.stopPropagation();
  var value = d3.select("#select-input").node().value;
  var key = value.match(/[0-9]/) ? "GEOID10" : "city";
  zipCodeMap.selectByData(key, value);
});

$(document).ready(function () {
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

/*
// hack to get auto-complete programmatic change to #select-input noticed
(function ($) {
  var originalVal = $.fn.val;
  $.fn.val = function () {
    var result = originalVal.apply(this, arguments);
    if (arguments.length > 0) {
      $(this).trigger('val.changed');
    }
    return result;
  };
})(jQuery);*/

$("#select-input").autoComplete({
  minChars: 1,
  source: function (term, suggest) {
    term = term.toLowerCase();
    var i;
    var choices = zipCodeMap.getPropertyValues();
    var matches = [];
    for (i = 0; i < choices.length; i++) {
      if (~choices[i].toLowerCase().indexOf(term)) {
        matches.push(choices[i]);
      }
    }
    suggest(matches);
  }
});