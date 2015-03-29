

(function () {

  var ZipCodeMap = function (createLegend, showDetails) {
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

    var detailCode;

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

    /*
     Detail Codes
     0: statIndex / 0
     1: 0
     2: statIndex
     */

    var setDetailCode = function (newDetailCode) {
      detailCode = newDetailCode;
    };

    function getStatValue(d, stats) {
      var zip = d.properties.GEOID10;
      var counts = stats[zip][statType];
      if (counts) {
        if (detailCode === 2) return +counts[statIndex];
        if (detailCode === 1) return +counts[0];
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
        if (d.properties[field] === fieldValue) {
          matches.push(d);
        }
      });
      if (matches.length > 0) {
        d3.selectAll(".selected").classed("selected", false);
        matches.forEach(function (d) {
          zip = d.properties.GEOID10;
          values = statData[zip][statType];
          if (detailCode === 2) {
            dataCount = (+values[statIndex] > 0) ? dataCount + 1 : dataCount;
          } else {
            dataCount = (+values[0] > 0) ? dataCount + 1 : dataCount;
          }
          for (i = 0; i < values.length; i++) {
            aggregate[i] = aggregate[i] || 0;
            aggregate[i] += +values[i];
          }
        });
        title = (matches.length > 1) ? fieldValue : getTitle(matches[0]);
        d3.select(".tip-location").text(title);
        if (detailCode === 2 && dataCount > 0) {
          aggregate[statIndex] = (+aggregate[statIndex] / dataCount).toFixed(0);
        } else if (detailCode === 1 && dataCount > 0) {
          aggregate[0] = (+aggregate[0] / dataCount).toFixed(0);
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

    // setPieLabels(pieLabelConfig, "income");

    return {
      getPropertyValues: getPropertyValues,
      setStatType: setStatType,
      setStatIndex: setStatIndex,
      setDetailCode: setDetailCode,
      updateStats: updateStats,
      selectByData: selectByData,
      zoomOut: zoomOut
    };
  }

  window.ZipCodeMap = ZipCodeMap;

}());
