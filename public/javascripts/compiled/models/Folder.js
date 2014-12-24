(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['require', 'compiled/models/FilesystemObject', 'underscore', 'vendor/backbone-identity-map', 'compiled/collections/PaginatedCollection', 'compiled/collections/FilesCollection'], function(require, FilesystemObject, _, identityMapMixin, PaginatedCollection, FilesCollection) {
    var Folder, FoldersCollection, __Folder, _ref, _ref1;

    Folder = identityMapMixin(__Folder = (function(_super) {
      var EVERYTHING_BEFORE_THE_FIRST_SLASH, filesEnv, getSortProp;

      __extends(__Folder, _super);

      function __Folder() {
        _ref = __Folder.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      __Folder.prototype.defaults = {
        'name': ''
      };

      __Folder.prototype.initialize = function(options) {
        this.contentTypes || (this.contentTypes = options != null ? options.contentTypes : void 0);
        this.setUpFilesAndFoldersIfNeeded();
        this.on('change:sort change:order', this.setQueryStringParams);
        return __Folder.__super__.initialize.apply(this, arguments);
      };

      __Folder.prototype.url = function() {
        if (this.isNew()) {
          return __Folder.__super__.url.apply(this, arguments);
        } else {
          return "/api/v1/folders/" + this.id;
        }
      };

      __Folder.prototype.parse = function(response) {
        var json;

        json = __Folder.__super__.parse.apply(this, arguments);
        this.contentTypes || (this.contentTypes = response.contentTypes);
        this.setUpFilesAndFoldersIfNeeded();
        this.folders.url = response.folders_url;
        this.files.url = response.files_url;
        return json;
      };

      __Folder.prototype.setUpFilesAndFoldersIfNeeded = function() {
        if (!this.folders) {
          this.folders = new FoldersCollection([], {
            parentFolder: this
          });
        }
        if (!this.files) {
          return this.files = new FilesCollection([], {
            parentFolder: this
          });
        }
      };

      __Folder.prototype.expand = function(force, options) {
        var fetchDfd, selfHasntBeenFetched,
          _this = this;

        if (force == null) {
          force = false;
        }
        if (options == null) {
          options = {};
        }
        this.isExpanded = true;
        this.trigger('expanded');
        if (this.expandDfd || force) {
          return $.when();
        }
        this.isExpanding = true;
        this.trigger('beginexpanding');
        this.expandDfd = $.Deferred().done(function() {
          _this.isExpanding = false;
          return _this.trigger('endexpanding');
        });
        selfHasntBeenFetched = this.folders.url === this.folders.constructor.prototype.url || this.files.url === this.files.constructor.prototype.url;
        if (selfHasntBeenFetched || force) {
          fetchDfd = this.fetch();
        }
        return $.when(fetchDfd).done(function() {
          var filesDfd, foldersDfd;

          if (_this.get('folders_count') !== 0) {
            foldersDfd = _this.folders.fetch();
          }
          if ((_this.get('files_count') !== 0) && !options.onlyShowFolders) {
            filesDfd = _this.files.fetch();
          }
          return $.when(foldersDfd, filesDfd).done(_this.expandDfd.resolve);
        });
      };

      __Folder.prototype.collapse = function() {
        this.isExpanded = false;
        return this.trigger('collapsed');
      };

      __Folder.prototype.toggle = function(options) {
        if (this.isExpanded) {
          return this.collapse();
        } else {
          return this.expand(false, options);
        }
      };

      __Folder.prototype.previewUrl = function() {
        var _ref1;

        if ((_ref1 = this.get('context_type')) === 'Course' || _ref1 === 'Group') {
          return "/" + (this.get('context_type').toLowerCase() + 's') + "/" + (this.get('context_id')) + "/files/{{id}}/preview";
        }
      };

      __Folder.prototype.isEmpty = function() {
        return !!(this.files.loadedAll && (this.files.length === 0)) && (this.folders.loadedAll && (this.folders.length === 0));
      };

      EVERYTHING_BEFORE_THE_FIRST_SLASH = /^[^\/]+\/?/;

      filesEnv = null;

      __Folder.prototype.urlPath = function() {
        var assetString, relativePath;

        relativePath = (this.get('full_name') || '').replace(EVERYTHING_BEFORE_THE_FIRST_SLASH, '');
        filesEnv || (filesEnv = require('compiled/react_files/modules/filesEnv'));
        if (filesEnv.showingAllContexts) {
          assetString = "" + (this.get('context_type').toLowerCase()) + "s_" + (this.get('context_id'));
          relativePath = assetString + '/' + relativePath;
        }
        return relativePath;
      };

      __Folder.resolvePath = function(contextType, contextId, folderPath) {
        var url;

        url = "/api/v1/" + contextType + "/" + contextId + "/folders/by_path" + folderPath;
        return $.get(url).pipe(function(folders) {
          return folders.map(function(folderAttrs) {
            return new Folder(folderAttrs, {
              parse: true
            });
          });
        });
      };

      getSortProp = function(model, sortProp) {
        var _ref1;

        if (sortProp === 'name' && !(model instanceof Folder)) {
          return model.get('display_name');
        } else if (sortProp === 'user') {
          return (_ref1 = model.get('user')) != null ? _ref1.display_name : void 0;
        } else {
          return model.get(sortProp);
        }
      };

      __Folder.prototype.childrenSorter = function(sortProp, sortOrder, a, b) {
        var res;

        if (sortProp == null) {
          sortProp = 'name';
        }
        if (sortOrder == null) {
          sortOrder = 'asc';
        }
        a = getSortProp(a, sortProp);
        b = getSortProp(b, sortProp);
        res = (function() {
          if (a === b) {
            return 0;
          } else if (a > b || a === void 0) {
            return 1;
          } else if (a < b || b === void 0) {
            return -1;
          } else {
            throw new Error("wat? error sorting");
          }
        })();
        if (sortOrder === 'desc') {
          res = 0 - res;
        }
        return res;
      };

      __Folder.prototype.children = function(_arg) {
        var order, sort;

        sort = _arg.sort, order = _arg.order;
        return (this.folders.toArray().concat(this.files.toArray())).sort(this.childrenSorter.bind(null, sort, order));
      };

      return __Folder;

    })(FilesystemObject));
    Folder.FoldersCollection = FoldersCollection = (function(_super) {
      __extends(FoldersCollection, _super);

      function FoldersCollection() {
        _ref1 = FoldersCollection.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      FoldersCollection.optionProperty('parentFolder');

      FoldersCollection.prototype.model = Folder;

      FoldersCollection.prototype.parse = function(response) {
        var _this = this;

        if (response) {
          _.each(response, function(folder) {
            return folder.contentTypes = _this.parentFolder.contentTypes;
          });
        }
        return FoldersCollection.__super__.parse.apply(this, arguments);
      };

      return FoldersCollection;

    })(PaginatedCollection);
    return Folder;
  });

}).call(this);
