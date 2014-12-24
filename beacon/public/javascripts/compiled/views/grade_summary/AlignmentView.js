(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!outcomes', 'underscore', 'Backbone', 'compiled/views/grade_summary/ProgressBarView', 'jst/grade_summary/alignment'], function(I18n, _, Backbone, ProgressBarView, template) {
    var AlignmentView, _ref;

    return AlignmentView = (function(_super) {
      __extends(AlignmentView, _super);

      function AlignmentView() {
        _ref = AlignmentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AlignmentView.prototype.tagName = 'li';

      AlignmentView.prototype.className = 'alignment';

      AlignmentView.prototype.template = template;

      AlignmentView.prototype.initialize = function() {
        AlignmentView.__super__.initialize.apply(this, arguments);
        return this.progress = new ProgressBarView({
          model: this.model
        });
      };

      AlignmentView.prototype.toJSON = function() {
        var json;

        json = AlignmentView.__super__.toJSON.apply(this, arguments);
        return _.extend(json, {
          progress: this.progress
        });
      };

      return AlignmentView;

    })(Backbone.View);
  });

}).call(this);
