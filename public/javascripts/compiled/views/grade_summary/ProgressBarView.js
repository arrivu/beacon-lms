(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!outcomes', 'underscore', 'Backbone', 'jst/grade_summary/progress_bar'], function(I18n, _, Backbone, template) {
    var ProgressBarView, _ref;

    return ProgressBarView = (function(_super) {
      __extends(ProgressBarView, _super);

      function ProgressBarView() {
        _ref = ProgressBarView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ProgressBarView.prototype.className = 'bar';

      ProgressBarView.prototype.template = template;

      return ProgressBarView;

    })(Backbone.View);
  });

}).call(this);
