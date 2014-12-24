(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/collections/PaginatedCollection', 'underscore', 'compiled/models/File'], function(PaginatedCollection, _, File) {
    var FilesCollection, _ref;

    return FilesCollection = (function(_super) {
      __extends(FilesCollection, _super);

      function FilesCollection() {
        _ref = FilesCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FilesCollection.optionProperty('parentFolder');

      FilesCollection.prototype.model = File;

      FilesCollection.prototype.initialize = function() {
        this.on('change:sort change:order', this.setQueryStringParams);
        return FilesCollection.__super__.initialize.apply(this, arguments);
      };

      FilesCollection.prototype.fetch = function(options) {
        var res, _ref1;

        if (options == null) {
          options = {};
        }
        options.data = _.extend({
          content_types: (_ref1 = this.parentFolder) != null ? _ref1.contentTypes : void 0
        }, options.data || {});
        return res = FilesCollection.__super__.fetch.call(this, options);
      };

      FilesCollection.prototype.parse = function(response) {
        var previewUrl;

        if (response && this.parentFolder) {
          previewUrl = this.parentFolder.previewUrl();
          _.each(response, function(file) {
            return file.preview_url = previewUrl ? previewUrl.replace('{{id}}', file.id.toString()) : file.url;
          });
        }
        return FilesCollection.__super__.parse.apply(this, arguments);
      };

      FilesCollection.prototype.setQueryStringParams = function() {
        var newParams, params, url;

        newParams = {
          include: ['user'],
          per_page: 20,
          sort: this.get('sort'),
          order: this.get('order')
        };
        if (this.loadedAll) {
          return;
        }
        url = new URL(this.url);
        params = deparam(url.search);
        url.search = $.param(_.extend(params, newParams));
        this.url = url.toString();
        return this.reset();
      };

      return FilesCollection;

    })(PaginatedCollection);
  });

}).call(this);
