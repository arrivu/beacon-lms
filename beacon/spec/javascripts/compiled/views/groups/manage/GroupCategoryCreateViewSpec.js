(function() {
  define(['jquery', 'compiled/models/GroupCategory', 'compiled/views/groups/manage/GroupCategoryCreateView', 'helpers/fakeENV'], function($, GroupCategory, GroupCategoryCreateView, fakeENV) {
    var groupCategory, view;

    view = null;
    groupCategory = null;
    module('GroupCategoryCreateView', {
      setup: function() {
        fakeENV.setup({
          allow_self_signup: true
        });
        groupCategory = new GroupCategory();
        view = new GroupCategoryCreateView({
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
    test('toggling auto group leader enables and disables accompanying controls', function() {
      $('.auto-group-leader-toggle').prop("checked", true);
      $(".auto-group-leader-toggle").trigger('click');
      view.$autoGroupLeaderControls.find('label.radio').each(function() {
        return equal($(this).css('opacity'), "1");
      });
      $('.auto-group-leader-toggle').prop("checked", false);
      $(".auto-group-leader-toggle").trigger('click');
      return view.$autoGroupLeaderControls.find('label.radio').each(function() {
        return equal($(this).css('opacity'), "0.5");
      });
    });
    return test('auto group leader controls are hidden if we arent splitting groups automatically', function() {
      view.$autoGroupSplitControl.prop("checked", true);
      view.$autoGroupSplitControl.trigger('click');
      ok(view.$autoGroupLeaderControls.is(":visible"));
      view.$autoGroupSplitControl.prop("checked", false);
      view.$autoGroupSplitControl.trigger('click');
      return ok(view.$autoGroupLeaderControls.is(":hidden"));
    });
  });

}).call(this);
