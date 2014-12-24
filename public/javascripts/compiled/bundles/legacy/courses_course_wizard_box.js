(function() {
  require(["jquery", "jquery.instructure_misc_plugins"], function($, _miscPlugins) {
    return $(document).ready(function() {
      $("#wizard_box").bind("wizard_opened", function() {
        return $(this).find(".option.intro").click();
      });
      $("#wizard_box").click(function(event) {
        if ($(event.target).closest("a,li,input,.wizard_details").length === 0) {
          return $(this).find(".option.intro").click();
        }
      });
      $(".change_home_page_layout_indicate").mouseover(function() {
        return $(".edit_course_home_content_link").indicate();
      });
      return $(".wizard_options_list .option .header").mouseover(function(event) {
        return $(this).parents(".option").click();
      });
    });
  });

}).call(this);
