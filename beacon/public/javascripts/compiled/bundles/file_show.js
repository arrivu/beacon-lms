(function() {
  require(['jquery', 'jquery.doc_previews', 'jquery.instructure_misc_plugins'], function($) {
    var previewDefaults, previewDiv;

    previewDefaults = {
      height: '100%',
      scribdParams: {
        auto_size: true
      }
    };
    previewDiv = $("#doc_preview");
    previewDiv.fillWindowWithMe();
    return previewDiv.loadDocPreview($.merge(previewDefaults, previewDiv.data()));
  });

}).call(this);
