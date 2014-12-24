(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/models/Entry', 'compiled/arr/walk'], function(Backbone, Entry, walk) {
    var EntryCollection, _ref;

    return EntryCollection = (function(_super) {
      __extends(EntryCollection, _super);

      function EntryCollection() {
        _ref = EntryCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      EntryCollection.prototype.defaults = {
        perPage: 50,
        initialPage: 0
      };

      EntryCollection.prototype.model = Entry;

      EntryCollection.prototype.totalPages = function() {
        return Math.ceil(this.length / this.options.perPage);
      };

      EntryCollection.prototype.getPage = function(page) {
        var indices;

        if (page === 'next') {
          return this.getPage(this.currentPage + 1);
        }
        this.currentPage = page;
        indices = this.getPageIndicies(page);
        return this.toArray().slice(indices.start, indices.end);
      };

      EntryCollection.prototype.getPageIndicies = function(page) {
        var end, start;

        start = page * this.options.perPage;
        end = start + this.options.perPage;
        return {
          start: start,
          end: end
        };
      };

      EntryCollection.prototype.getPageAsCollection = function(page, options) {
        if (options == null) {
          options = this.options;
        }
        page = new this.constructor(this.getPage(page), options);
        page.fullCollection = this;
        return page;
      };

      EntryCollection.prototype.setAllReadState = function(newReadState) {
        return this.each(function(entry) {
          return entry.set('read_state', newReadState);
        });
      };

      EntryCollection.prototype.getEntryData = function(id) {
        var end, entry, levels, page, rootParent, rootParentIndex, start, _i, _ref1, _ref2,
          _this = this;

        entry = null;
        rootParent = null;
        levels = 0;
        walk(this.toJSON(), 'replies', function(item) {
          var isARootEntry;

          isARootEntry = _this.get(item.id) != null;
          if (entry === null && isARootEntry) {
            rootParent = item;
          }
          if (isARootEntry) {
            levels = 0;
          } else if (entry === null) {
            levels = levels + 1;
          }
          if (item.id + '' === id) {
            return entry = item;
          }
        });
        if (!((rootParent != null) && (entry != null))) {
          return null;
        }
        rootParentIndex = this.indexOf(this.get(rootParent.id));
        for (page = _i = 0, _ref1 = this.totalPages(); 0 <= _ref1 ? _i <= _ref1 : _i >= _ref1; page = 0 <= _ref1 ? ++_i : --_i) {
          _ref2 = this.getPageIndicies(page), start = _ref2.start, end = _ref2.end;
          if (rootParentIndex >= start && rootParentIndex < end) {
            break;
          }
        }
        return {
          entry: entry,
          rootParent: rootParent,
          page: page,
          levels: levels
        };
      };

      return EntryCollection;

    })(Backbone.Collection);
  });

}).call(this);
