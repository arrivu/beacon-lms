(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'vendor/usher/usher', 'Backbone', 'jquery.ajaxJSON'], function($, Usher, Backbone, template) {
    var TourView, _ref;

    return TourView = (function(_super) {
      __extends(TourView, _super);

      function TourView() {
        this.start = __bind(this.start, this);        _ref = TourView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TourView.prototype.events = {
        'click .usher-close': 'dismissSession',
        'click .dismiss-tour': 'dismissForever'
      };

      TourView.optionProperty('name');

      TourView.prototype.initialize = function() {
        TourView.__super__.initialize.apply(this, arguments);
        this.render();
        this.$el.appendTo($(document.body));
        return this.tour = new Usher(this.$el);
      };

      TourView.prototype.start = function() {
        return this.tour.start();
      };

      TourView.prototype.attach = function() {
        return setTimeout(this.start, 2000);
      };

      TourView.prototype.dismissSession = function() {
        return $.ajaxJSON("/tours/dismiss/session/" + this.name, 'DELETE');
      };

      TourView.prototype.dismissForever = function() {
        $.ajaxJSON("/tours/dismiss/" + this.name, 'DELETE');
        return this.tour.close();
      };

      TourView.prototype.onElementRendered = function(selector, cb, _attempts) {
        var el,
          _this = this;

        el = $(selector);
        _attempts = ++_attempts || 1;
        if (el.length) {
          return cb(el);
        }
        if (_attempts === 60) {
          return;
        }
        return setTimeout((function() {
          return _this.onElementRendered(selector, cb, _attempts);
        }), 250);
      };

      return TourView;

    })(Backbone.View);
  });

}).call(this);
