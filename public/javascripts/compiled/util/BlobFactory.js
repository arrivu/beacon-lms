(function() {
  define(['underscore'], function(_) {
    var BlobFactory;

    return BlobFactory = {
      fromCanvas: function(canvas, type) {
        var binary, codes, data, url;

        if (type == null) {
          type = 'image/jpeg';
        }
        url = canvas.toDataURL(type);
        binary = atob(url.split(',')[1]);
        codes = _.map(binary, function(char) {
          return char.charCodeAt(0);
        });
        data = new Uint8Array(codes);
        return this._newBlob(data, type);
      },
      fromXHR: function(response, type) {
        if (type == null) {
          type = 'image/jpeg';
        }
        return this._newBlob(response, type);
      },
      _newBlob: function(src, type) {
        var builder;

        if (builder = this._blobBuilder()) {
          builder.append(src);
          return builder.getBlob(type);
        } else {
          return new Blob([src], {
            type: type
          });
        }
      },
      _blobBuilder: function() {
        if (typeof window.Blob === 'function') {
          return null;
        }
        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
        if (typeof window.BlobBuilder === 'undefined') {
          return null;
        }
        return new BlobBuilder();
      }
    };
  });

}).call(this);
