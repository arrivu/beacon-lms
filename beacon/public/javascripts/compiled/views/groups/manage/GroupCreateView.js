(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!groups', 'underscore', 'compiled/views/groups/manage/GroupEditView'], function(I18n, _, GroupEditView) {
    var GroupCreateView, _ref;

    return GroupCreateView = (function(_super) {
      __extends(GroupCreateView, _super);

      function GroupCreateView() {
        _ref = GroupCreateView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCreateView.prototype.defaults = _.extend({}, GroupEditView.prototype.defaults, {
        title: I18n.t("add_group", "Add Group")
      });

      return GroupCreateView;

    })(GroupEditView);
  });

}).call(this);
