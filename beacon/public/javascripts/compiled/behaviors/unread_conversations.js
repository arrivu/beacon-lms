(function() {
  define(['jquery'], function($) {
    var $unread, update;

    $unread = $('#identity .unread-messages-count');
    update = function() {
      if (document.hidden !== false) {
        return;
      }
      return $.get('/api/v1/conversations/unread_count').done(function(response) {
        $unread.text(response.unread_count);
        return $unread.toggle(response.unread_count > 0);
      });
    };
    setInterval(update, 1000 * 30);
    return update;
  });

}).call(this);
