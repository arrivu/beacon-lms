(function() {
  define(function() {
    var cls, mimeClass, mimeClasses, mimeType, mimeTypes, _i, _len;

    mimeClasses = {
      audio: ['audio/x-mpegurl', 'audio/x-pn-realaudio', 'audio/x-aiff', 'audio/3gpp', 'audio/mid', 'audio/x-wav', 'audio/basic', 'audio/mpeg'],
      code: ['text/xml', 'text/css', 'text/x-yaml', 'application/xml', 'application/javascript', 'text/x-csharp'],
      doc: ['application/x-docx', 'text/rtf', 'application/msword', 'application/rtf', 'application/vnd.oasis.opendocument.text', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      flash: ['application/x-shockwave-flash'],
      html: ['text/html', 'application/xhtml+xml'],
      image: ['image/png', 'image/x-psd', 'image/gif', 'image/pjpeg', 'image/jpeg'],
      ppt: ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-powerpoint'],
      pdf: ['application/pdf'],
      text: ['text', 'text/plain'],
      video: ['video/mp4', 'video/x-ms-asf', 'video/x-msvideo', 'video/x-sgi-movie', 'video/mpeg', 'video/quicktime', 'video/x-la-asf', 'video/3gpp'],
      xls: ['application/vnd.oasis.opendocument.spreadsheet', 'text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'],
      zip: ['application/x-rar-compressed', 'application/x-zip-compressed', 'application/zip', 'application/x-zip', 'application/x-rar']
    };
    mimeClass = function(contentType) {
      return mimeClass.mimeClasses[contentType] || 'file';
    };
    mimeClass.mimeClasses = {};
    for (cls in mimeClasses) {
      mimeTypes = mimeClasses[cls];
      for (_i = 0, _len = mimeTypes.length; _i < _len; _i++) {
        mimeType = mimeTypes[_i];
        mimeClass.mimeClasses[mimeType] = cls;
      }
    }
    return mimeClass;
  });

}).call(this);
