(function() {
  require(["jquery", 'compiled/behaviors/autocomplete'], function($) {
    var $select_name, $selected_name;

    $select_name = $("#select_name");
    $selected_name = $("#selected_name");
    $("#account_select").change(function() {
      $(".account_search").hide();
      return $("#account_search_" + $(this).val()).show();
    }).change();
    return $(".account_search .user_name").each(function() {
      var $input;

      $input = $(this);
      $input.autocomplete({
        minLength: 4,
        source: $input.data("autocompleteSource")
      });
      return $input.bind("autocompleteselect autocompletechange", function(event, ui) {
        if (ui.item) {
          $selected_name.text(ui.item.label);
          return $select_name.show().attr("href", $.replaceTags($("#select_name").attr("rel"), "id", ui.item.id));
        } else {
          return $select_name.hide();
        }
      });
    });
  });

}).call(this);
