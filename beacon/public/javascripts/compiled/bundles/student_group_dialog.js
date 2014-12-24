(function() {
  require(['compiled/models/Group', 'compiled/models/GroupCategory', 'compiled/views/groups/manage/GroupEditView'], function(Group, GroupCategory, GroupEditView) {
    var group, groupCategory;

    group = new Group(ENV.group);
    groupCategory = new GroupCategory(ENV.group_category);
    this.editView = new GroupEditView({
      model: group,
      groupCategory: groupCategory,
      nameOnly: true
    });
    return this.editView.setTrigger($('#edit_group'));
  });

}).call(this);
