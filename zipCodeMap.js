var d3;
var topojson;

(function () {

  var ZipCodeMap = function (parent, createLegend, showDetails, zipConfig) {
    var width = zipConfig.width;
    var height = zipConfig.height;
    var minZoom = zipConfig.minZoom;
    var maxZoom = zipConfig.maxZoom;

    var projection = d3.geo.albersUsa()
      .scale(zipConfig.minZoom)
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
      .range(zipConfig.range);

    //Create SVG element
    var svg = d3.select(parent)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .call(zoom);

    var statIndex = zipConfig.statIndex;
    var statType = zipConfig.statType;
    var statData;
    var detailCode;
    var geometry;

    var forEach = function(callback) {
      var zips = topojson.feature(geometry, geometry.objects.Bay_Area);
      zips.features.forEach(function (d) {
        callback(d);
      });
    };

    var setStatType = function (newStatType) {
      statType = newStatType;
    };

    var setStatIndex = function (newStatIndex) {
      statIndex = newStatIndex;
    };

    /*
     Detail Codes
     0: counts[statIndex] / counts[0]
     1: counts[0]
     2: counts[statIndex]
     */
    
    var ratioValueObject = {
      getValue: function(values, statIndex) {
        return +values[statIndex] / +values[0];
      },
      singleValue: false
    };

    var singleValueObject = {
      getValue: function(values) {
        return +values[0];
      },
      singleValue: true
    };

    var multiValueObject = {
      getValue: function(values, statIndex) {
        return +values[statIndex];
      },
      singleValue: true
    }

    var setDetailCode = function (newDetailCode) {
      detailCode = newDetailCode;
    };

    function getStatValue(d, stats) {
      var zip = d.properties.GEOID10;
      var counts = stats[zip][statType];
      if (counts) {
        if (detailCode === 2) return +counts[statIndex];  // apt rents
        if (detailCode === 1) return +counts[0];  // house and condo prices
        return +counts[statIndex] / +counts[0];  //  pie data: ratio of count at statIndex to total at counts[0]
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
      showDetails(statIndex, values, counts, detailCode);
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


    // refactor to always keep dataCount
    var selectByData = function (field, fieldValue) {
      var matches = [];
      var aggregate = [];
      var title;
      var zip;
      var values;
      var i;
      var dataCount = 0; // number of matches which have non-zero data

      var zips = topojson.feature(geometry, geometry.objects.Bay_Area);
      zips.features.forEach(function (d) {
        if (d.properties[field] === fieldValue) {              // collect data with matching field values
          matches.push(d);
        }
      });
      if (matches.length > 0) {
        d3.selectAll(".selected").classed("selected", false);  // clear the selection if matches
        matches.forEach(function (d) {                         // get aggregated values
          zip = d.properties.GEOID10;
          values = statData[zip][statType];
          if (detailCode === 2) {                              // apt rents: value at statIndex
            dataCount = (+values[statIndex] > 0) ? dataCount + 1 : dataCount;
          } else {
            dataCount = (+values[0] > 0) ? dataCount + 1 : dataCount;
          }                                                    // add up all the values
          for (i = 0; i < values.length; i++) {
            aggregate[i] = aggregate[i] || 0;
            aggregate[i] += +values[i];
          }
        });
        title = (matches.length > 1) ? fieldValue : getTitle(matches[0]);  // set the title
        d3.select(".tip-location").text(title);
        if (detailCode === 2 && dataCount > 0) {
          aggregate[statIndex] = (+aggregate[statIndex] / dataCount).toFixed(0);
        } else if (detailCode === 1 && dataCount > 0) {            // house and condo prices
          aggregate[0] = (+aggregate[0] / dataCount).toFixed(0);
        }
        setToolTip(null, statData, aggregate);                     // update the details panel
      }

      svg.selectAll("path")[0].forEach(function (path) {        // set selected on each matching path
        path = d3.select(path);
        if (path.datum().properties[field] === fieldValue) {
          path.classed("selected", true);
        }
      });

      if (matches.length > 0) {
        aggregate = matches[0];

        center(aggregate, true);                             // animate one matching path to center
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

    function zoomed() {
      projection.translate(d3.event.translate).scale(d3.event.scale);
      svg.selectAll("path").attr("d", path);
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

    return {
      forEach: forEach,
      setStatType: setStatType,
      setStatIndex: setStatIndex,
      setDetailCode: setDetailCode,
      updateStats: updateStats,
      selectByData: selectByData,
    };
  }

  window.ZipCodeMap = ZipCodeMap;

}());