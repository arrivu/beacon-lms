(function() {
  define(['jquery', 'i18n!media_comments'], function($, I18n) {
    /*
    # Loads html partial for display within the uploader
    */

    var CommentUiLoader;

    return CommentUiLoader = (function() {
      function CommentUiLoader() {}

      CommentUiLoader.prototype.loadTabs = function(readyFunction) {
        return $.get("/partials/_media_comments.html", function(html) {
          readyFunction(html);
          return $("#media_comment_dialog");
        });
      };

      return CommentUiLoader;

    })();
  });

}).call(this);
