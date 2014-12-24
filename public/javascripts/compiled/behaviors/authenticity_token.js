(function() {
  define(['jquery', 'vendor/jquery.cookie'], function($) {
    var authenticity_token;

    authenticity_token = function() {
      return $.cookie('_csrf_token');
    };
    $(document).on("submit", "form", function() {
      return $(this).find("input[name='authenticity_token']").val(authenticity_token());
    });
    return authenticity_token;
  });

}).call(this);
