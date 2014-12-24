(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/content_migrations/subviews/OverwriteAssessmentContent'], function(Backbone, template) {
    var OverwriteAssessmentContentView, _ref;

    return OverwriteAssessmentContentView = (function(_super) {
      __extends(OverwriteAssessmentContentView, _super);

      function OverwriteAssessmentContentView() {
        this.setAttribute = __bind(this.setAttribute, this);        _ref = OverwriteAssessmentContentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OverwriteAssessmentContentView.prototype.template = template;

      OverwriteAssessmentContentView.prototype.events = {
        "change #overwriteAssessmentContent": "setAttribute"
      };

      OverwriteAssessmentContentView.prototype.setAttribute = function() {
        var settings;

        settings = this.model.get('settings') || {};
        settings.overwrite_quizzes = !!this.$el.find('#overwriteAssessmentContent').is(":checked");
        return this.model.set('settings', settings);
      };

      return OverwriteAssessmentContentView;

    })(Backbone.View);
  });

}).call(this);
