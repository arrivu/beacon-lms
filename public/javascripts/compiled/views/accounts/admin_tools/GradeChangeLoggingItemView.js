(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/accounts/admin_tools/gradeChangeLoggingItem'], function(Backbone, template) {
    var GradeChangeLoggingItemView, _ref;

    return GradeChangeLoggingItemView = (function(_super) {
      __extends(GradeChangeLoggingItemView, _super);

      function GradeChangeLoggingItemView() {
        _ref = GradeChangeLoggingItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GradeChangeLoggingItemView.prototype.tagName = 'tr';

      GradeChangeLoggingItemView.prototype.className = 'logitem';

      GradeChangeLoggingItemView.prototype.template = template;

      return GradeChangeLoggingItemView;

    })(Backbone.View);
  });

}).call(this);
