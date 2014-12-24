(function() {
  define(['i18n!student_groups', 'ember', 'ic-ajax', 'jquery', 'compiled/jquery.rails_flash_notifications'], function(I18n, Ember, ajax, $) {
    var GroupController;

    return GroupController = Ember.ObjectController.extend({
      currentUser: {},
      groupUrl: (function() {
        return "/groups/" + (this.get('id'));
      }).property('id'),
      usersUrl: (function() {
        return "/api/v1/groups/" + (this.get('id')) + "/memberships";
      }).property('id'),
      i18nStudentsCount: (function() {
        return I18n.t('students_count', 'student', {
          count: this.get('memberCount')
        });
      }).property('memberCount'),
      showWhileSearching: (function() {
        if (this.get('parentController.filterText').length > 0) {
          return this.set('showBody', true);
        } else {
          return this.set('showBody', false);
        }
      }).observes('parentController.filterText').on('init'),
      memberCount: Ember.computed.alias('users.length'),
      isExpanded: (function() {
        return '' + this.get('showBody');
      }).property('showBody'),
      groupName: (function() {
        return I18n.t('group_name', "%{group_name} in %{group_category}", {
          group_name: this.get('name'),
          group_category: this.get('group_category.name')
        });
      }).property('name', 'group_category.name'),
      sgid: (function() {
        return "student-group-" + (this.get('id'));
      }).property('id'),
      hasMultipleMembers: Ember.computed.not('memberCount', 1),
      actions: {
        visitGroup: function() {
          if (this.get('isMember')) {
            return window.location.href = this.get('groupUrl');
          }
        },
        toggleBody: function() {
          var focusedElement;

          if (this.get('memberCount') > 0) {
            focusedElement = "#" + (this.get('sgid')) + " ul.student-group-list";
            this.toggleProperty('showBody');
            if (!this.get('showBody')) {
              focusedElement = "#" + (this.get('sgid')) + " .student-group-title";
            }
            return Ember.run.scheduleOnce('afterRender', function() {
              return Ember.$(focusedElement).focus();
            });
          } else {
            return this.set('showBody', false);
          }
        },
        join: function(group) {
          var controller, membership;

          membership = this.store.createRecord('membership', {
            user_id: ENV.current_user_id,
            group_id: this.get('id')
          });
          controller = this;
          return membership.save().then(function(membership) {
            if (!controller.get('isStudentGroup')) {
              controller.parentController.removeFromCategory(controller.get('group_category_id'));
            }
            controller.get('users').addObject(ENV.current_user);
            return $.flashMessage(I18n.t('group_join', "Joined Group %{group_name}", {
              group_name: group.name
            }));
          });
        },
        leave: function(group) {
          var controller,
            _this = this;

          controller = this;
          return Ember.run(function() {
            return ajax.request("" + (_this.get('usersUrl')) + "/self", {
              type: "DELETE"
            }).then(function(response) {
              var user;

              user = controller.get('users').findBy('id', ENV.current_user_id);
              controller.get('users').removeObject(user);
              $.flashMessage(I18n.t('group_leave', "Left Group %{group_name}", {
                group_name: group.name
              }));
              if (controller.get('memberCount') === 0) {
                return controller.set('showBody', false);
              }
            });
          });
        }
      },
      isMember: (function() {
        return this.get('model').users.findBy('id', ENV.current_user_id) != null;
      }).property('users.@each.id'),
      canSignup: (function() {
        return this.get('group_category.self_signup') === "enabled" || this.get('join_level') === "parent_context_auto_join";
      }).property('group_category.self_signup', 'join_level'),
      isFull: (function() {
        return (this.get('max_membership') != null) && this.get('memberCount') >= this.get('max_membership');
      }).property('memberCount'),
      isMemberOfCategory: (function() {
        return this.parentController.isMemberOfCategory(this.get('group_category_id'));
      }).property('users.@each.id'),
      isStudentGroup: (function() {
        return this.get('group_category.role') === 'student_organized';
      }).property('group_category.role'),
      shouldSwitch: (function() {
        return this.get('isMemberOfCategory') && !this.get('isStudentGroup');
      }).property('isMemberOfCategory', 'isStudentGroup')
    });
  });

}).call(this);
