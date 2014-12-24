(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!outcomes', 'underscore', 'Backbone', 'compiled/views/grade_summary/ProgressBarView', 'jst/grade_summary/outcome'], function(I18n, _, Backbone, ProgressBarView, template) {
    var OutcomeView, _ref;

    return OutcomeView = (function(_super) {
      __extends(OutcomeView, _super);

      function OutcomeView() {
        _ref = OutcomeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OutcomeView.prototype.tagName = 'li';

      OutcomeView.prototype.className = 'outcome';

      OutcomeView.prototype.template = template;

      OutcomeView.prototype.initialize = function() {
        OutcomeView.__super__.initialize.apply(this, arguments);
        return this.progress = new ProgressBarView({
          model: this.model
        });
      };

      OutcomeView.prototype.statusTooltip = function() {
        switch (this.model.status()) {
          case 'undefined':
            return I18n.t('undefined', 'Unstarted');
          case 'remedial':
            return I18n.t('remedial', 'Remedial');
          case 'near':
            return I18n.t('near', 'Near mastery');
          case 'mastery':
            return I18n.t('mastery', 'Mastery');
        }
      };

      OutcomeView.prototype.toJSON = function() {
        var json;

        json = OutcomeView.__super__.toJSON.apply(this, arguments);
        return _.extend(json, {
          statusTooltip: this.statusTooltip(),
          progress: this.progress
        });
      };

      return OutcomeView;

    })(Backbone.View);
  });

}).call(this);
