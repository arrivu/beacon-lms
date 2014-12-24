(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'i18n!EditGroupAssignmentView', 'compiled/views/DialogFormView', 'compiled/collections/GroupCollection', 'jst/groups/manage/editGroupAssignment', 'jst/EmptyDialogFormWrapper'], function($, _, I18n, DialogFormView, GroupCollection, template, wrapper) {
    var EditGroupAssignmentView, _ref;

    return EditGroupAssignmentView = (function(_super) {
      __extends(EditGroupAssignmentView, _super);

      function EditGroupAssignmentView() {
        this.setGroup = __bind(this.setGroup, this);        _ref = EditGroupAssignmentView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EditGroupAssignmentView.optionProperty('group');

      EditGroupAssignmentView.prototype.els = {
        '.single-select': '$singleSelectList'
      };

      EditGroupAssignmentView.prototype.defaults = {
        title: I18n.t("move_to", "Move To"),
        width: 450,
        height: 350
      };

      EditGroupAssignmentView.prototype.template = template;

      EditGroupAssignmentView.prototype.wrapperTemplate = wrapper;

      EditGroupAssignmentView.prototype.className = 'form-dialog';

      EditGroupAssignmentView.prototype.events = {
        'click .dialog_closer': 'close',
        'click .set-group': 'setGroup'
      };

      EditGroupAssignmentView.prototype.openAgain = function() {
        EditGroupAssignmentView.__super__.openAgain.apply(this, arguments);
        this.render();
        return this.$singleSelectList.focus();
      };

      EditGroupAssignmentView.prototype.setGroup = function(e) {
        var targetGroup, _ref1;

        e.preventDefault();
        e.stopPropagation();
        targetGroup = this.$('option:selected').val();
        if (targetGroup) {
          this.group.collection.category.reassignUser(this.model, this.group.collection.get(targetGroup));
        }
        this.close();
        return (_ref1 = $("[data-id='" + targetGroup + "'] .group-heading")) != null ? _ref1.focus() : void 0;
      };

      EditGroupAssignmentView.prototype.getFilteredGroups = function() {
        var _this = this;

        return new GroupCollection(this.group.collection.filter(function(g) {
          return g !== _this.group;
        }));
      };

      EditGroupAssignmentView.prototype.toJSON = function() {
        var groupCollection, hasGroups;

        groupCollection = this.getFilteredGroups();
        hasGroups = groupCollection.length > 0;
        return {
          allFull: hasGroups && groupCollection.models.every(function(g) {
            return g.isFull();
          }),
          groupId: this.group.id,
          userName: this.model.get('name'),
          groups: groupCollection.toJSON()
        };
      };

      return EditGroupAssignmentView;

    })(DialogFormView);
  });

}).call(this);
