(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone', 'jst/content_migrations/subviews/SelectContentCheckbox', 'i18n!select_content_checkbox'], function($, Backbone, template, I18n) {
    var SelectContentCheckbox, _ref;

    return SelectContentCheckbox = (function(_super) {
      __extends(SelectContentCheckbox, _super);

      function SelectContentCheckbox() {
        _ref = SelectContentCheckbox.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SelectContentCheckbox.prototype.template = template;

      SelectContentCheckbox.prototype.events = {
        'click [name=selective_import]': 'updateModel'
      };

      SelectContentCheckbox.prototype.updateModel = function(event) {
        return this.model.set('selective_import', $(event.currentTarget).val() === "true");
      };

      SelectContentCheckbox.prototype.validations = function() {
        var errors, selective_import;

        errors = {};
        selective_import = this.model.get('selective_import');
        if (selective_import === null || selective_import === void 0) {
          errors.selective_import = [
            {
              type: "required",
              message: I18n.t('select_content_error', "You must choose a content option")
            }
          ];
        }
        return errors;
      };

      return SelectContentCheckbox;

    })(Backbone.View);
  });

}).call(this);
