(function() {
  require(["i18n!terms.index", "jquery", "jquery.instructure_date_and_time", "jquery.instructure_forms", "jquery.instructure_misc_helpers", "jquery.instructure_misc_plugins", "jquery.templateData"], function(I18n, $) {
    return $(document).ready(function() {
      $(".edit_term_link").click(function(event) {
        event.preventDefault();
        $(this).parents(".term").addClass("editing_term");
        $(this).parents(".term").find(":text:visible:first").focus().select();
        return $(this).parents(".term").find(".date_field").not(".already_has_date_field").addClass("already_has_date_field").date_field();
      });
      $(".term .cancel_button").click(function() {
        $(this).parents(".term").removeClass("editing_term");
        if ($(this).parents(".term").attr("id") === "term_new") {
          return $(this).parents(".term").remove();
        }
      });
      $(".cant_delete_term_link").click(function(event) {
        event.preventDefault();
        return alert(I18n.t("messages.classes_in_term", "You can't delete a term that still has classes in it."));
      });
      $(".delete_term_link").click(function(event) {
        var url;

        event.preventDefault();
        url = $(this).parents(".term").find(".enrollment_term_form").attr("action");
        return $(this).parents(".term").confirmDelete({
          url: url,
          message: I18n.t("prompts.delete", "Are you sure you want to delete this term?"),
          success: function() {
            return $(this).fadeOut(function() {
              return $(this).remove();
            });
          }
        });
      });
      $(".enrollment_term_form").formSubmit({
        processData: function(data) {
          var permissions;

          permissions = $(this).parents("tr").find(".permissions").getFormData({
            object_name: "enrollment_term"
          });
          $.each(permissions, function(key, val) {
            if (key.match(/\[(start)|(end)_at\]/)) {
              return permissions[key] = $.datetime.process(val);
            }
          });
          return $.extend(permissions, data);
        },
        beforeSubmit: function(data) {
          $(this).find("button").attr("disabled", true);
          return $(this).find(".submit_button").text(I18n.t("messages.submitting", "Submitting..."));
        },
        success: function(data) {
          var $tr, idx, override, term, type_string, url;

          term = data.enrollment_term;
          $tr = $(this).parents(".term");
          $(this).find("button").attr("disabled", false);
          $(this).find(".submit_button").text(I18n.t("update_term", "Update Term"));
          url = $.replaceTags($(".term_url").attr("href"), "id", term.id);
          $(this).attr("action", url);
          $(this).attr("method", "PUT");
          for (idx in term.enrollment_dates_overrides) {
            override = term.enrollment_dates_overrides[idx].enrollment_dates_override;
            type_string = $.underscore(override.enrollment_type);
            term[type_string + "_start_at"] = $.dateString(override.start_at) || I18n.t("date.term_start", "term start");
            term[type_string + "_end_at"] = $.dateString(override.end_at) || I18n.t("date.term_end", "term end");
            term["enrollment_term[overrides][" + type_string + "][start_at]"] = $.dateString(override.start_at);
            term["enrollment_term[overrides][" + type_string + "][end_at]"] = $.dateString(override.end_at);
          }
          term.start_at = $.dateString(term.start_at) || I18n.t("date.unspecified", "whenever");
          term.end_at = $.dateString(term.end_at) || I18n.t("date.unspecified", "whenever");
          $tr.fillTemplateData({
            data: term
          });
          $tr.attr("id", "term_" + term.id);
          $tr.fillFormData(data, {
            object_name: "enrollment_term"
          });
          return $tr.removeClass("editing_term");
        },
        error: function(data) {
          $(this).find("button").attr("disabled", false);
          $(this).formErrors(data);
          return $(this).find(".submit_button").text(I18n.t("errors.submit", "Error Submitting"));
        }
      });
      return $(".add_term_link").click(function(event) {
        var $term;

        event.preventDefault();
        if ($("#term_new").length > 0) {
          return;
        }
        $term = $("#term_blank").clone(true).attr("id", "term_new");
        $("#terms").prepend($term.show());
        return $term.find(".edit_term_link").click();
      });
    });
  });

}).call(this);
