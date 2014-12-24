(function() {
  require(['jquery', 'compiled/views/groups/manage/GroupCategoriesView', 'compiled/collections/GroupCategoryCollection'], function($, GroupCategoriesView, GroupCategoryCollection) {
    var groupCategories;

    groupCategories = new GroupCategoryCollection(ENV.group_categories);
    this.app = new GroupCategoriesView({
      collection: groupCategories
    });
    this.app.render();
    return $('#content').html(this.app.$el);
  });

}).call(this);
