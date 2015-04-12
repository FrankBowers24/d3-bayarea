var d3;
var topojson;

(function () {

  var ZipCodeMap = function (parent, updateLegend, getTitle, select, deselect, config) {
    var width = config.width;
    var height = config.height;
    var minZoom = config.minZoom;
    var maxZoom = config.maxZoom;

    var projection = d3.geo.albersUsa()
      .scale(config.minZoom)
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
      .range(config.range);

    var svg = d3.select(parent)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .call(zoom);

    var statType = config.statType;
    var statIndex = config.statIndex;
    var valueObject = config.valueObject;
    var statData;
    var geometry;

    var getPathObjects = function() {
      return geometry.objects[config.pathKey];
    };

    var forEach = function (callback) {
      var zips = topojson.feature(geometry, getPathObjects());
      zips.features.forEach(function (d) {
        callback(d);
      });
    };

    var getStatValue = function (d, stats) {
      var region = d.properties[config.dataKey];
      var values = stats[region][statType];
      return values ? valueObject.getValue(values, statIndex) : null;
    };

    var setSelection = function (d, stats, values, selCount, fieldValue) {
      values = values || stats[d.properties[config.dataKey]][statType];
      select(valueObject.getValue(values, statIndex), values, valueObject, selCount, d, fieldValue);
    };

    var updateColorDomain = function () {
      var zips = topojson.feature(geometry, getPathObjects());
      color.domain(
        d3.extent(zips.features, function (d) {
          return getStatValue(d, statData);
        })
      );
      updateLegend(color, statType, statIndex);
    };

    var doFill = function (d) {
      var value = getStatValue(d, statData);
      return value ? color(value) : "#ccc";
    };

    var changeData = function (type, index, obj) {
      statType = type;
      statIndex = index;
      valueObject = obj;
    }

    var update = function() {
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
      var zip;
      var value;
      var values;
      var i;
      var dataCount = 0; // number of matches which have non-zero data

      var zips = topojson.feature(geometry, getPathObjects());
      zips.features.forEach(function (d) {
        if (d.properties[field] === fieldValue) { // collect data with matching field values
          matches.push(d);
        }
      });
      if (matches.length > 0) {
        d3.selectAll(".selected").classed("selected", false); // clear the selection if matches
        matches.forEach(function (d) { // get aggregated values
          zip = d.properties[config.dataKey];
          values = statData[zip][statType];
          value = valueObject.getValue(values, statIndex);
          if (value > 0) {
            dataCount++;
          }
          for (i = 0; i < values.length; i++) {
            aggregate[i] = aggregate[i] || 0;
            aggregate[i] += +values[i];
          }
        });
        if (dataCount > 0) {
          for (i = 0; i < values.length; i++) {
            aggregate[i] = (+aggregate[i] / dataCount).toFixed(0);
          }
        }
        setSelection(matches[0], statData, aggregate, matches.length, fieldValue);
      }

      svg.selectAll("path")[0].forEach(function (path) { // set selected on each matching path
        path = d3.select(path);
        if (path.datum().properties[field] === fieldValue) {
          path.classed("selected", true);
        }
      });

      if (matches.length > 0) {
        aggregate = matches[0];

        center(aggregate, true); // animate one matching path to center
      }
    };

    var centerZip = function () {
      var zips = topojson.feature(geometry, getPathObjects()),
        zip = zips.features.filter(function (d) {

          return d.properties[config.dataKey] === config.center;
        })[0];
      center(zip);
    };

    var center = function (d, transition) {
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
    };

    function zoomed () {
      projection.translate(d3.event.translate).scale(d3.event.scale);
      svg.selectAll("path").attr("d", path);
    };

    d3.json(config.dataFilename, function (stats) {
      statData = stats;

      d3.json(config.geoFilename, function (topoData) {
        geometry = topoData;
        var lastZipClick = [];
        updateColorDomain();

        svg.selectAll("path")
          .data(topojson.feature(geometry, getPathObjects()).features)
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
            setSelection(d, statData, null, 1);
            lastZipClick = [d3.event.x, d3.event.y];
          })
          .append("svg:title")
          .text(function (d) {
            return getTitle(d);
          });

        centerZip();

        d3.select(parent).on("click", function () {
          if (d3.event.x !== lastZipClick[0] && d3.event.y !== lastZipClick[1]) {
            d3.selectAll(".selected").classed("selected", false);
            deselect();
          }
          lastZipClick = [];
        });
      });
    });

    return {
      forEach: forEach,
      changeData: changeData,
      update: update,
      selectByData: selectByData
    };
  }

  window.ZipCodeMap = ZipCodeMap;

}());