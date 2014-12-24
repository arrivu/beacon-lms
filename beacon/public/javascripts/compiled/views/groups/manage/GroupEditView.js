(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!groups', 'underscore', 'compiled/views/DialogFormView', 'jst/groups/manage/groupEdit', 'jst/EmptyDialogFormWrapper'], function(I18n, _, DialogFormView, template, wrapper) {
    var GroupEditView, _ref;

    return GroupEditView = (function(_super) {
      __extends(GroupEditView, _super);

      function GroupEditView() {
        _ref = GroupEditView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupEditView.optionProperty('groupCategory');

      GroupEditView.optionProperty('student');

      GroupEditView.prototype.defaults = {
        width: 550,
        title: I18n.t("edit_group", "Edit Group")
      };

      GroupEditView.prototype.els = {
        '[name=max_membership]': '$maxMembership'
      };

      GroupEditView.prototype.template = template;

      GroupEditView.prototype.wrapperTemplate = wrapper;

      GroupEditView.prototype.className = 'dialogFormView group-edit-dialog form-horizontal form-dialog';

      GroupEditView.prototype.attach = function() {
        if (this.model) {
          return this.model.on('change', this.refreshIfNameOnlyMode, this);
        }
      };

      GroupEditView.prototype.refreshIfNameOnlyMode = function() {
        if (this.options.nameOnly) {
          return window.location.reload();
        }
      };

      GroupEditView.prototype.events = _.extend({}, DialogFormView.prototype.events, {
        'click .dialog_closer': 'close'
      });

      GroupEditView.prototype.translations = {
        too_long: I18n.t("name_too_long", "Name is too long")
      };

      GroupEditView.prototype.validateFormData = function(data, errors) {
        if (this.$maxMembership.length > 0 && !this.$maxMembership[0].validity.valid) {
          return {
            "max_membership": [
              {
                message: I18n.t('max_membership_number', 'Max membership must be a number')
              }
            ]
          };
        }
      };

      GroupEditView.prototype.openAgain = function() {
        GroupEditView.__super__.openAgain.apply(this, arguments);
        this.render();
        return this.$('input:first').focus();
      };

      GroupEditView.prototype.toJSON = function() {
        var json;

        json = _.extend(GroupEditView.__super__.toJSON.apply(this, arguments), {
          role: this.groupCategory.get('role'),
          nameOnly: this.options.nameOnly
        });
        return json;
      };

      return GroupEditView;

    })(DialogFormView);
  });

}).call(this);
