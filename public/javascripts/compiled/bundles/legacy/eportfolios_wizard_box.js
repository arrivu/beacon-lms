(function() {
  require(["jquery", "jquery.instructure_misc_plugins"], function($) {
    return $(document).ready(function() {
      $(".sections_list_hover").mouseover(function() {
        return $("#section_list .section:first").indicate();
      });
      $(".pages_list_hover").mouseover(function() {
        return $("#section_pages").indicate();
      });
      $(".organize_sections_hover").mouseover(function() {
        return $(".manage_sections_link").indicate();
      });
      $(".organize_pages_hover").mouseover(function() {
        return $(".manage_pages_link").indicate();
      });
      $(".eportfolio_settings_hover").mouseover(function() {
        return $(".portfolio_settings_link").indicate();
      });
      $(".edit_content_hover").mouseover(function() {
        return $(".edit_content_link").indicate();
      });
      $(".page_settings_hover").mouseover(function() {
        return $("#edit_page_form .form_content").indicate();
      });
      $(".page_buttons_hover").mouseover(function() {
        return $("#edit_page_sidebar .form_content:last").indicate();
      });
      $(".page_add_subsection_hover").mouseover(function() {
        return $("#edit_page_sidebar ul").indicate();
      });
      $("#wizard_box").bind("wizard_opened", function() {
        return $(this).find(".option.information_step").click();
      });
      $(document).bind("submission_dialog_opened", function() {
        if ($(".wizard_options .option.adding_submissions").hasClass("selected")) {
          return $(".wizard_options .option.adding_submissions_dialog").click();
        }
      });
      return $(document).bind("editing_page", function() {
        if ($(".wizard_options .option.edit_step").hasClass("selected")) {
          return $(".wizard_options .option.editing_mode").click();
        }
      });
    });
  });

}).call(this);
