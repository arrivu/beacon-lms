(function() {
  define(['compiled/util/mixin', 'underscore'], function(mixin, _) {
    var Filterable;

    return Filterable = {
      els: {
        '.filterable': '$filter',
        '.no-results': '$noResults'
      },
      defaults: {
        filterColumns: ['name']
      },
      afterRender: function() {
        var _ref, _ref1,
          _this = this;

        if ((_ref = this.$filter) != null) {
          _ref.on('input', function() {
            return _this.setFilter(_this.$filter.val());
          });
        }
        return (_ref1 = this.$filter) != null ? _ref1.trigger('input') : void 0;
      },
      setFilter: function(filter) {
        var model, _i, _len, _ref;

        this.filter = filter.toLowerCase();
        _ref = this.collection.models;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          model = _ref[_i];
          model.trigger('filterOut', this.filterOut(model));
        }
        return this.$noResults.toggleClass('hidden', !(this.filter && !this.collection.fetchingPage && this.collection.length > 0 && this.$list.children(':visible').length === 0));
      },
      attachItemView: function(model, view) {
        var filterView;

        filterView = function(filtered) {
          return view.$el.toggleClass('hidden', filtered);
        };
        model.on('filterOut', filterView);
        return filterView(this.filterOut(model));
      },
      filterOut: function(model) {
        var _this = this;

        if (!this.filter) {
          return false;
        }
        if (!this.options.filterColumns.length) {
          return false;
        }
        if (_.any(this.options.filterColumns, function(col) {
          return model.get(col).toLowerCase().indexOf(_this.filter) >= 0;
        })) {
          return false;
        }
        return true;
      }
    };
  });

}).call(this);
