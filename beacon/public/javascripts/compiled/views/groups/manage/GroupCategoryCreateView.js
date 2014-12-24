(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'i18n!groups', 'compiled/views/groups/manage/GroupCategoryEditView', 'jst/groups/manage/groupCategoryCreate'], function(_, I18n, GroupCategoryEditView, template) {
    var GroupCategoryCreateView, _ref;

    return GroupCategoryCreateView = (function(_super) {
      __extends(GroupCategoryCreateView, _super);

      function GroupCategoryCreateView() {
        _ref = GroupCategoryCreateView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupCategoryCreateView.prototype.template = template;

      GroupCategoryCreateView.prototype.className = "form-dialog group-category-create";

      GroupCategoryCreateView.prototype.messages = {
        positive_group_count: I18n.t('positive_group_count', 'Must enter a positive group count')
      };

      GroupCategoryCreateView.prototype.defaults = {
        width: 600,
        height: ENV.allow_self_signup ? 520 : 310,
        title: I18n.t('create_group_set', 'Create Group Set')
      };

      GroupCategoryCreateView.prototype.els = _.extend({}, GroupCategoryEditView.prototype.els, {
        '.admin-signup-controls': '$adminSignupControls',
        '#split_groups': '$splitGroups',
        '.admin-signup-controls input[name=split_groups][value=1]': '$autoGroupSplitControl'
      });

      GroupCategoryCreateView.prototype.events = _.extend({}, GroupCategoryEditView.prototype.events, {
        'click .admin-signup-controls [name=create_group_count]': 'clickSplitGroups',
        'click .auto-group-leader-toggle': 'toggleAutoGroupLeader',
        'click .admin-signup-controls input[name=split_groups]': 'setVisibilityOfGroupLeaderControls'
      });

      GroupCategoryCreateView.prototype.afterRender = function() {
        GroupCategoryCreateView.__super__.afterRender.call(this);
        return this.setVisibilityOfGroupLeaderControls();
      };

      GroupCategoryCreateView.prototype.setVisibilityOfGroupLeaderControls = function() {
        var show, splitGroupsChecked;

        splitGroupsChecked = this.$autoGroupSplitControl.prop("checked");
        show = this.selfSignupIsEnabled() || splitGroupsChecked;
        return this.$autoGroupLeaderControls.toggle(show);
      };

      GroupCategoryCreateView.prototype.toggleSelfSignup = function() {
        var enabled;

        enabled = this.selfSignupIsEnabled();
        this.$el.toggleClass('group-category-self-signup', enabled);
        this.$el.toggleClass('group-category-admin-signup', !enabled);
        this.$selfSignupControls.find(':input').prop('disabled', !enabled);
        this.$adminSignupControls.find(':input').prop('disabled', enabled);
        return this.setVisibilityOfGroupLeaderControls();
      };

      GroupCategoryCreateView.prototype.selfSignupIsEnabled = function() {
        return this.$selfSignupToggle.prop('checked');
      };

      GroupCategoryCreateView.prototype.clickSplitGroups = function(e) {
        e.preventDefault();
        return this.$splitGroups.click();
      };

      GroupCategoryCreateView.prototype.toJSON = function() {
        return _.extend({}, GroupCategoryCreateView.__super__.toJSON.apply(this, arguments), {
          num_groups: '<input name="create_group_count" type="number" min="0" class="input-micro" value="0">',
          ENV: ENV
        });
      };

      GroupCategoryCreateView.prototype.validateFormData = function(data) {
        var create_group_count, errors;

        errors = {};
        if (data.split_groups === '1') {
          create_group_count = parseInt(data.create_group_count);
          if (!(create_group_count > 0)) {
            errors["create_group_count"] = [
              {
                type: 'positive_group_count',
                message: this.messages.positive_group_count
              }
            ];
          }
        }
        return errors;
      };

      return GroupCategoryCreateView;

    })(GroupCategoryEditView);
  });

}).call(this);
