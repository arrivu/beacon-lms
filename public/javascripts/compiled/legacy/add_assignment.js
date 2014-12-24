(function() {
  define(['i18n!shared.add_assignment', 'jquery', 'jqueryui/dialog', 'jquery.instructure_misc_plugins'], function(I18n, $) {
    return function($select, url, selector, default_name) {
      var $group;

      $group = $select;
      url = url || $("#add_assignment_inline_form").attr("action");
      $group.change(function(event) {
        $group = $(this);
        if ($(this).val() === "new") {
          return $("#add_assignment_inline").show().dialog({
            title: I18n.t("titles.add_assignment", "Add Assignment"),
            width: 300,
            height: "auto",
            autoSize: true,
            modal: true,
            autoOpen: false,
            overlay: {
              backgroundColor: "#000",
              opacity: 0.5
            },
            open: function() {
              var name;

              if (default_name && $.isFunction(default_name)) {
                name = default_name.call($group);
                $("#add_assignment_inline_form :text:first").val(name);
              }
              $("#add_assignment_inline_form :text:first").focus().select();
              $("#add_assignment_inline_form").find(".weight_assignment_groups").showIf($group.hasClass("weight"));
              return $("#add_assignment_inline_form").data("group_select", $group).data("group_selector", selector || "").attr("action", url);
            },
            close: function() {
              if ($group.val() === "new") {
                return $group[0].selectedIndex = 0;
              }
            }
          }).dialog("open").fixDialogButtons();
        }
      });
      if ($group.val() === "new") {
        return $group[0].selectedIndex = 0;
      }
    };
  });

}).call(this);
