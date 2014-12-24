(function() {
  require(['jquery', 'media_comments'], function($) {
    var $preview, data;

    $preview = $("#media_preview");
    data = $preview.data();
    return $preview.mediaComment('show_inline', 'maybe', data.type, data.download_url);
  });

}).call(this);
