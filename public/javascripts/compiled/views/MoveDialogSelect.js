(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!assignments', 'jquery', 'Backbone', 'jst/MoveDialogSelect'], function(I18n, $, Backbone, template) {
    var MoveDialogSelect, _ref;

    return MoveDialogSelect = (function(_super) {
      __extends(MoveDialogSelect, _super);

      function MoveDialogSelect() {
        _ref = MoveDialogSelect.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MoveDialogSelect.prototype.setViewProperties = false;

      MoveDialogSelect.optionProperty('lastList');

      MoveDialogSelect.optionProperty('excludeModel');

      MoveDialogSelect.optionProperty('labelText');

      MoveDialogSelect.prototype.className = 'move_select';

      MoveDialogSelect.prototype.template = template;

      MoveDialogSelect.prototype.getLabelText = function() {
        return this.labelText || I18n.beforeLabel('label_place_before', "Place before");
      };

      MoveDialogSelect.prototype.initialize = function(options) {
        MoveDialogSelect.__super__.initialize.apply(this, arguments);
        if (this.model && !this.collection) {
          if (this.model.collection) {
            return this.collection = this.model.collection;
          }
        }
      };

      MoveDialogSelect.prototype.setCollection = function(coll) {
        if (!coll) {
          return;
        }
        this.collection = coll;
        return this.renderOptions();
      };

      MoveDialogSelect.prototype.renderOptions = function() {
        var fragment, opts;

        fragment = $(this.template(this.toJSON()));
        opts = fragment.filter('select').find('option');
        return this.$('select').empty().append(opts);
      };

      MoveDialogSelect.prototype.value = function() {
        return this.$('select').val();
      };

      MoveDialogSelect.prototype.toJSON = function() {
        var data, _base,
          _this = this;

        data = (typeof (_base = this.model).toView === "function" ? _base.toView() : void 0) || this.model.toJSON();
        data.lastList = this.lastList;
        data.labelText = this.getLabelText();
        data.items = this.excludeModel ? this.collection.reject(function(m) {
          return _this.model.id === m.id;
        }).map(function(m) {
          return (typeof m.toView === "function" ? m.toView() : void 0) || m.toJSON();
        }) : this.collection.toJSON();
        return data;
      };

      return MoveDialogSelect;

    })(Backbone.View);
  });

}).call(this);
