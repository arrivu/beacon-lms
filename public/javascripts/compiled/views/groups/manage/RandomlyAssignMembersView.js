(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!groups', 'compiled/views/DialogFormView', 'jst/groups/manage/randomlyAssignMembers', 'jst/EmptyDialogFormWrapper'], function(I18n, DialogFormView, template, wrapper) {
    var RandomlyAssignMembersView, _ref;

    return RandomlyAssignMembersView = (function(_super) {
      __extends(RandomlyAssignMembersView, _super);

      function RandomlyAssignMembersView() {
        _ref = RandomlyAssignMembersView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      RandomlyAssignMembersView.prototype.defaults = {
        title: I18n.t("randomly_assigning_members", "Randomly Assigning Students"),
        width: 450,
        height: 200
      };

      RandomlyAssignMembersView.prototype.template = template;

      RandomlyAssignMembersView.prototype.wrapperTemplate = wrapper;

      RandomlyAssignMembersView.prototype.className = 'form-dialog';

      RandomlyAssignMembersView.prototype.events = {
        'click .dialog_closer': 'close',
        'click .randomly-assign-members-confirm': 'randomlyAssignMembers'
      };

      RandomlyAssignMembersView.prototype.randomlyAssignMembers = function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.model.assignUnassignedMembers();
        return this.close();
      };

      return RandomlyAssignMembersView;

    })(DialogFormView);
  });

}).call(this);
