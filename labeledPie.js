var d3;

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.LabeledPie = factory();
  }
}(this, function () {

  var LabeledPie = function (parent, config) {

    var svg = d3.select(parent)
      .append("svg")
      .append("g");

    this.svg = svg;

    this.svgWidth = config.svgWidth;
    this.svgHeight = config.svgHeight;

    d3.select(parent).select("svg").attr("width", this.svgWidth).attr("height", this.svgHeight);

    this.svg.append("g")
      .attr("class", "slices");
    this.svg.append("g")
      .attr("class", "labels");
    this.svg.append("g")
      .attr("class", "innerLabels");
    this.svg.append("g")
      .attr("class", "lines");

    this.radius = config.pieRadius;

    this.pie = d3.layout.pie()
      .sort(null);

    // pie slices
    this.arc = d3.svg.arc()
      .outerRadius(this.radius * config.outerRadiusFactor)
      .innerRadius(this.radius * config.innerRadiusFactor);

    // edge arc and outer arc are for lines to labels
    this.outerArc = d3.svg.arc()
      .innerRadius(this.radius * config.outerArcFactor)
      .outerRadius(this.radius * config.outerArcFactor);

    this.edgeArc = d3.svg.arc()
      .innerRadius(this.radius * config.outerRadiusFactor)
      .outerRadius(this.radius * config.outerRadiusFactor);

    this.minimumDisplayedPercentage = config.minimumDisplayedPercentage;

    this.svg.attr("transform", "translate(" + this.svgWidth / 2 + "," + this.svgHeight / 2 + ")");

    this.minimumDisplayedLabel = config.minimumDisplayedLabel;

    function pointToArray(point) {
      return [point.x, point.y];
    }

    function transitionLine(index, oldY, newY) {
      var delta = newY - oldY;
      var points;
      var pt0;
      var pt1;
      var pt2;
      var lineElement;
      svg.select(".lines").selectAll("polyline").each(function (d, i) {
        if (i === index) {
          lineElement = this;
        }
      });
      points = lineElement.points;
      pt0 = pointToArray(points.getItem(0));
      pt1 = pointToArray(points.getItem(1));
      pt2 = pointToArray(points.getItem(2));

      d3.select(lineElement)
        .transition().duration(500)
        .attrTween("points", function (d) {
          return function (t) {
            pt1[1] = oldY + t * delta;
            pt2[1] = oldY + t * delta;
            return [pt0, pt1, pt2];
          };
        });
    }

    function transitionOverlappingLabel(textElement, newY) {
      var matrix = textElement.transform.baseVal.getItem(0).matrix;
      var oldY = matrix.f;
      var pos = [matrix.e, matrix.f];
      var delta = newY - oldY;

      d3.select(textElement)
        .transition().duration(500)
        .attrTween("transform", function (d) {
          return function (t) {
            pos[1] = oldY + t * delta;
            return "translate(" + pos + ")";
          };
        });
    }

    function adjustOverlappingLabels(labels) {
      var lastY = Infinity; // matrix.f is y
      var matrix;
      var currentY;
      var height;
      var i;
      for (i = 0; i < labels.length; i++) {
        matrix = labels[i].transform.baseVal.getItem(0).matrix;
        currentY = matrix.f;
        height = labels[i].getBBox().height;
        if (currentY > (lastY - height)) {
          currentY = lastY - height;
          transitionOverlappingLabel(labels[i], currentY);
          transitionLine(+labels[i].dataset.index, matrix.f, currentY);
        }
        lastY = currentY;
      }
    }

    function getOverlappingLabels() {
      var leftLabels = [];
      var rightLabels = [];

      svg.select(".labels").selectAll("text").each(function (d, index) {
        var str = this.style.cssText;
        if (str && !str.match("opacity: 0")) { // only look at visible labels
          this.dataset.index = index;
          if (str.match("text-anchor: end")) {
            leftLabels.push(this);
          } else {
            rightLabels.push(this);
          }
        }
      });
      try {
        adjustOverlappingLabels(leftLabels);
        adjustOverlappingLabels(rightLabels.reverse());
      } catch (e) {
        console.log(e);
      }
      return true; // return true to stop timer from firing again
    }

    LabeledPie.prototype.setLabels = function (labels) {
      this.labels = labels;
    };

    LabeledPie.prototype.setColorScale = function (color) {
      this.color = color;
    };

    LabeledPie.prototype.change = function (data) {

      var radius = this.radius;
      var labels = this.labels;
      var minimumDisplayedPercentage = this.minimumDisplayedPercentage;
      var arc = this.arc;
      var outerArc = this.outerArc;
      var svg = this.svg;
      var pie = this.pie;
      var color = this.color;
      var minimumDisplayedLabel = this.minimumDisplayedLabel;

      var sum = d3.sum(data);

      function getPercentage(d) {
        return Math.round(d.value / sum * 100);
      }

      /* ------- PIE SLICES -------*/
      var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data));

      slice.enter()
        .insert("path")
        .style("fill", function (d, i) {
          return color(i);
        })
        .attr("class", "slice");

      slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            return arc(interpolate(t));
          };
        })

      slice.exit()
        .remove();

      /* ------- TEXT LABELS -------*/

      var text = svg.select(".labels").selectAll("text")
        .data(pie(data));

      text.enter()
        .append("text")
        .attr("dy", ".35em")
        .text(function (d, i) {
          return labels[i];
        });

      function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
      }

      text.transition().duration(1000)
        .style("opacity", function (d) {
          return getPercentage(d) < minimumDisplayedLabel ? 0 : 1;
        })
        .attrTween("transform", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            var d2 = interpolate(t);
            var pos = outerArc.centroid(d2);
            pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
          };
        })
        .styleTween("text-anchor", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            var d2 = interpolate(t);
            return midAngle(d2) < Math.PI ? "start" : "end";
          };
        });

      text.exit()
        .remove();

      d3.timer(getOverlappingLabels, 1000);


      /* ------- SLICE TO TEXT POLYLINES -------*/

      var polyline = svg.select(".lines").selectAll("polyline")
        .data(pie(data));

      polyline.enter()
        .append("polyline");

      var edgeArc = this.edgeArc
      polyline.transition().duration(1000)
        .style("opacity", function (d) {
          return getPercentage(d) < minimumDisplayedLabel ? 0 : 0.3;
        })
        .attrTween("points", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            var d2 = interpolate(t);
            var pos = outerArc.centroid(d2);
            pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
            return [edgeArc.centroid(d2), outerArc.centroid(d2), pos];
          };
        });

      polyline.exit()
        .remove();

      /* ------- PERCENTAGE LABELS -------*/

      var percent = svg.select(".innerLabels").selectAll("text")
        .data(pie(data));

      percent.enter()
        .insert("text")
        .attr("dy", ".35em");

      percent.transition().duration(1000)
        /*
              .tween("text", function(d) {
                  this._current = this._current || d;
                  var interpolate = d3.interpolate(this._current, d);
                  this._current = interpolate(0);
                  return function(t) {
                      var d2 = interpolate(t);
                      var percent = getPercentage(d2);
                      this.textContent = percent > minimumDisplayedPercentage ? Math.round(percent) + "%" : "";

                  };
              })
*/
        .text(function (d) {
          var percent = getPercentage(d);
          return percent > minimumDisplayedPercentage ? Math.round(percent) + "%" : "";
        })
        .style("opacity", function (d) {
          return d.value / sum * 100 > minimumDisplayedPercentage ? 1 : 0;
        })
        .attrTween("transform", function (d, i) {
          var bbox = this.getBBox();
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            var d2 = interpolate(t);
            var pos = arc.centroid(d2);
            pos[0] = pos[0] - bbox.width / 2;
            return "translate(" + pos + ")";
          };
        });

      percent.exit()
        .remove();

    };
  };

  return LabeledPie;
}));