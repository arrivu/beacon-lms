(function() {
  define(['jquery', 'compiled/models/GroupCategory', 'compiled/views/groups/manage/GroupCategoryEditView', 'helpers/fakeENV'], function($, GroupCategory, GroupCategoryEditView, fakeENV) {
    var groupCategory, view;

    view = null;
    groupCategory = null;
    module('GroupCategoryEditView', {
      setup: function() {
        fakeENV.setup({
          allow_self_signup: true
        });
        groupCategory = new GroupCategory();
        view = new GroupCategoryEditView({
          model: groupCategory
        });
        view.render();
        return view.$el.appendTo($(document.body));
      },
      teardown: function() {
        fakeENV.teardown();
        return view.remove();
      }
    });
    test('auto leadership is unset without model state', function() {
      groupCategory.set('auto_leader', null);
      view.setAutoLeadershipFormState();
      return equal(view.$autoGroupLeaderToggle.prop('checked'), false);
    });
    return test('auto leadership corresponds to model state', function() {
      groupCategory.set('auto_leader', 'random');
      view.setAutoLeadershipFormState();
      equal(view.$autoGroupLeaderToggle.prop('checked'), true);
      equal(view.$autoGroupLeaderControls.find("input[value='RANDOM']").prop('checked'), true);
      return equal(view.$autoGroupLeaderControls.find("input[value='FIRST']").prop('checked'), false);
    });
  });

}).call(this);
