(function() {
  require(["jquery"], function($) {
    return $(document).ready(function() {
      return $(".select_action").change(function() {
        return $(".sub_setting").hide().filter("." + $(this).val()).show();
      }).change();
    });
  });

}).call(this);
