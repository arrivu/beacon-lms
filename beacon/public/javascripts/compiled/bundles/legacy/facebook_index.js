(function() {
  require(["jquery", "jquery.instructure_misc_plugins"], function($) {
    return $(document).ready(function() {
      return $("#messages").delegate(".delete_link", "click", function(event) {
        var $message;

        event.preventDefault();
        $message = $(this).parents(".facebook_message");
        return $message.confirmDelete({
          noMessage: true,
          url: $(this).attr("rel"),
          success: function() {
            return $(this).slideUp(function() {
              return $(this).remove();
            });
          }
        });
      });
    });
  });

}).call(this);
