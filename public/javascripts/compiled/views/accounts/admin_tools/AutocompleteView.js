(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'jquery', 'jst/accounts/admin_tools/autocomplete'], function(_, Backbone, $, template) {
    var AutocompleteView;

    return AutocompleteView = (function(_super) {
      __extends(AutocompleteView, _super);

      AutocompleteView.prototype.template = template;

      AutocompleteView.prototype.els = {
        '[data-name=autocomplete_search_term]': '$searchTerm',
        '[data-name=autocomplete_search_value]': '$searchValue'
      };

      function AutocompleteView(options) {
        var _base, _base1, _base2, _base3, _base4, _base5;

        this.options = options;
        this.collection = this.options.collection;
        AutocompleteView.__super__.constructor.apply(this, arguments);
        (_base = this.options).minLength || (_base.minLength = 3);
        (_base1 = this.options).labelProperty || (_base1.labelProperty = 'name');
        (_base2 = this.options).valueProperty || (_base2.valueProperty = 'id');
        (_base3 = this.options).fieldName || (_base3.fieldName = this.options.valueProperty);
        (_base4 = this.options).placeholder || (_base4.placeholder = this.options.fieldName);
        (_base5 = this.options).sourceParameters || (_base5.sourceParameters = {});
      }

      AutocompleteView.prototype.toJSON = function() {
        return this.options;
      };

      AutocompleteView.prototype.afterRender = function() {
        return this.$searchTerm.autocomplete({
          minLength: this.options.minLength,
          select: $.proxy(this.autocompleteSelect, this),
          source: $.proxy(this.autocompleteSource, this),
          change: $.proxy(this.autocompleteSelect, this)
        });
      };

      AutocompleteView.prototype.autocompleteSource = function(request, response) {
        var labelProperty, params, success;

        this.$searchTerm.addClass("loading");
        params = {
          data: this.options.sourceParameters
        };
        params.data.search_term = request.term;
        labelProperty = this.options.labelProperty;
        success = function() {
          var items;

          items = this.collection.map(function(item) {
            var label;

            if ($.isFunction(labelProperty)) {
              label = labelProperty(item);
            }
            label || (label = item.get(labelProperty));
            return {
              model: item,
              label: label
            };
          });
          this.$searchTerm.removeClass("loading");
          return response(items);
        };
        return this.collection.fetch(params).success($.proxy(success, this));
      };

      AutocompleteView.prototype.autocompleteSelect = function(event, ui) {
        if (ui.item && ui.item.value) {
          return this.$searchValue.val(ui.item.model.id);
        } else {
          return this.$searchValue.val(null);
        }
      };

      return AutocompleteView;

    })(Backbone.View);
  });

}).call(this);
