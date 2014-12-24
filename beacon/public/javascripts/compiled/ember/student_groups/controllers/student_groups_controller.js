(function() {
  define(['i18n!student_groups', 'ember'], function(I18n, Ember) {
    var StudentGroupsController;

    return StudentGroupsController = Ember.ObjectController.extend({
      groups: [],
      filterText: "",
      content: Ember.Object.create(),
      searchPlaceholder: (function() {
        return I18n.t('search_groups_placeholder', "Search Groups or People");
      }).property(),
      searchAriaLabel: (function() {
        return I18n.t('student_groups_filter_description', "As you type in this field, the list of groups will be automatically filtered to only include those whose names match your input.");
      }).property(),
      usersPath: "/courses/" + ENV.course_id + "/users",
      groupsUrl: "/api/v1/courses/" + ENV.course_id + "/groups?include[]=users&include[]=group_category",
      sortedGroups: (function() {
        var groups, text;

        groups = this.get('groups') || [];
        text = this.get('filterText').toLowerCase();
        groups = groups.filter(function(group) {
          return text.length === 0 || group.name.toLowerCase().indexOf(text) >= 0 || group.users.find(function(user) {
            return (user.display_name && user.display_name.toLowerCase().indexOf(text) >= 0) || (user.name && user.name.toLowerCase().indexOf(text) >= 0);
          });
        });
        return groups.sortBy('group_category_id');
      }).property('groups.[]', 'filterText'),
      removeFromCategory: function(categoryId) {
        return this.groupsForCategory(categoryId).forEach(function(group) {
          var user;

          user = group.users.findBy('id', ENV.current_user_id);
          if (user) {
            return group.users.removeObject(user);
          }
        });
      },
      groupsForCategory: function(categoryId) {
        return this.get('groups').filterBy('group_category_id', categoryId);
      },
      isMemberOfCategory: function(categoryId) {
        return this.groupsForCategory(categoryId).any(function(group) {
          return group.users.findBy('id', ENV.current_user_id);
        });
      }
    });
  });

}).call(this);
