(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!gradebook2', 'underscore', 'Backbone', 'compiled/util/Popover', 'vendor/d3.v3', 'jst/gradebook2/outcome_popover'], function(I18n, _, _arg, Popover, d3, popover_template) {
    var OutcomeColumnView, View, _ref;

    View = _arg.View;
    return OutcomeColumnView = (function(_super) {
      __extends(OutcomeColumnView, _super);

      function OutcomeColumnView() {
        this.mouseleave = __bind(this.mouseleave, this);
        this.mouseenter = __bind(this.mouseenter, this);        _ref = OutcomeColumnView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OutcomeColumnView.prototype.popover_template = popover_template;

      OutcomeColumnView.optionProperty('totalsFn');

      OutcomeColumnView.prototype.inside = false;

      OutcomeColumnView.prototype.TIMEOUT_LENGTH = 50;

      OutcomeColumnView.prototype.events = {
        mouseenter: 'mouseenter',
        mouseleave: 'mouseleave'
      };

      OutcomeColumnView.prototype.createPopover = function(e) {
        var popover;

        this.totalsFn();
        this.pickColors();
        popover = new Popover(e, this.popover_template(this.attributes), {
          verticalSide: 'bottom'
        });
        popover.el.on('mouseenter', this.mouseenter);
        popover.el.on('mouseleave', this.mouseleave);
        this.renderChart();
        popover.show(e);
        return popover;
      };

      OutcomeColumnView.prototype.mouseenter = function(e) {
        if (!this.popover) {
          this.popover = this.createPopover(e);
        }
        return this.inside = true;
      };

      OutcomeColumnView.prototype.mouseleave = function(e) {
        var _this = this;

        this.inside = false;
        return setTimeout(function() {
          if (_this.inside || !_this.popover) {
            return;
          }
          _this.popover.hide();
          return delete _this.popover;
        }, this.TIMEOUT_LENGTH);
      };

      OutcomeColumnView.prototype.pickColors = function() {
        var color, data, last, mastery, mastery_pos;

        data = this.attributes.ratings;
        last = data.length - 1;
        mastery = this.attributes.mastery_points;
        mastery_pos = data.indexOf(_.find(data, function(x) {
          return x.points === mastery;
        }));
        color = d3.scale.linear().domain([0, mastery_pos, (mastery_pos + last) / 2, last]).range(["#416929", "#8bab58", "#e0d670", "#dd5c5c"]);
        return _.each(data, function(rating, i) {
          return rating.color = color(i);
        });
      };

      OutcomeColumnView.prototype.renderChart = function() {
        this.data = _.filter(this.attributes.ratings, function(rating) {
          return rating.percent;
        });
        this.r = 50;
        this.arc = d3.svg.arc().outerRadius(this.r);
        this.arcs = this.renderArcs();
        this.renderArcFills();
        this.renderLabels();
        return this.renderLabelLines();
      };

      OutcomeColumnView.prototype.renderArcs = function() {
        var arcs, h, pie, vis, w;

        w = 160;
        h = 150;
        vis = d3.select(".outcome-details .chart-image").append("svg:svg").data([this.data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + (w / 2) + ", " + (h / 2) + ")");
        pie = d3.layout.pie().value(function(d) {
          return d.percent;
        });
        arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
        return arcs;
      };

      OutcomeColumnView.prototype.renderArcFills = function() {
        var arc, initialRadius, k, radiusTween,
          _this = this;

        initialRadius = 10;
        k = d3.interpolate(initialRadius, this.r);
        arc = this.arc;
        radiusTween = function(a) {
          return function(t) {
            return arc.outerRadius(k(t))(a);
          };
        };
        this.arc.outerRadius(initialRadius);
        this.arcs.append("svg:path").attr("fill", function(d, i) {
          return _this.data[i].color;
        }).attr("d", this.arc).transition().duration(400).attrTween("d", radiusTween);
        return this.arc.outerRadius(this.r);
      };

      OutcomeColumnView.prototype.renderLabels = function() {
        var _this = this;

        return this.arcs.append("svg:text").attr("fill", "#4F5F6E").attr("transform", function(d) {
          var c;

          c = _this.getCentroid(d);
          c = _.map(c, function(x) {
            return x * 2.3;
          });
          return "translate(" + c + ")";
        }).attr("text-anchor", function(d) {
          var angle, distanceToPi, _ref1;

          _ref1 = _this.getAngleInfo(d), angle = _ref1.angle, distanceToPi = _ref1.distanceToPi;
          if (distanceToPi < Math.PI / 6) {
            return "middle";
          }
          if (angle > Math.PI) {
            return "end";
          } else {
            return "start";
          }
        }).attr("dominant-baseline", function(d) {
          var angle, distanceToPi, sideways, _ref1;

          _ref1 = _this.getAngleInfo(d, sideways = true), angle = _ref1.angle, distanceToPi = _ref1.distanceToPi;
          if (distanceToPi < Math.PI / 6) {
            return "middle";
          }
          if (angle > Math.PI) {
            return "hanging";
          } else {
            return "auto";
          }
        }).text(function(d, i) {
          return _this.data[i].percent + '%';
        });
      };

      OutcomeColumnView.prototype.getAngleInfo = function(d, sideways) {
        var angle, distanceToPi;

        angle = (d.endAngle + d.startAngle) / 2;
        if (sideways) {
          angle = (angle + Math.PI / 2) % (2 * Math.PI);
        }
        distanceToPi = Math.abs((angle + Math.PI / 2) % Math.PI - Math.PI / 2);
        return {
          angle: angle,
          distanceToPi: distanceToPi
        };
      };

      OutcomeColumnView.prototype.renderLabelLines = function() {
        var _this = this;

        return this.arcs.append("svg:path").attr("stroke", "#000").attr("d", function(d) {
          var c, c1, c2;

          c = _this.getCentroid(d);
          c1 = _.map(c, function(x) {
            return x * 1.4;
          });
          c2 = _.map(c, function(x) {
            return x * 2.2;
          });
          return "M" + c1[0] + " " + c1[1] + " L" + c2[0] + " " + c2[1];
        });
      };

      OutcomeColumnView.prototype.getCentroid = function(d) {
        d.innerRadius = 0;
        d.outerRadius = this.r;
        return this.arc.centroid(d);
      };

      return OutcomeColumnView;

    })(View);
  });

}).call(this);
