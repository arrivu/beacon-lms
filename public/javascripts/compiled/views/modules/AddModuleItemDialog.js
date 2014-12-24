(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!modules', 'jquery', 'underscore', 'compiled/views/DialogFormView', 'jst/modules/AddModuleItemDialogWrapper', 'jst/modules/AddModuleItemDialog', 'compiled/views/modules/ModuleItemViewRegister'], function(I18n, $, _, DialogFormView, wrapperTemplate, template, ModuleItemViewRegister) {
    var AddModuleItemDialog, _ref;

    return AddModuleItemDialog = (function(_super) {
      __extends(AddModuleItemDialog, _super);

      function AddModuleItemDialog() {
        this.swapView = __bind(this.swapView, this);        _ref = AddModuleItemDialog.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AddModuleItemDialog.prototype.wrapperTemplate = wrapperTemplate;

      AddModuleItemDialog.prototype.template = template;

      AddModuleItemDialog.prototype.className = 'dialogFormView form-horizontal';

      AddModuleItemDialog.optionProperty('moduleName');

      AddModuleItemDialog.optionProperty('moduleItemTypes');

      AddModuleItemDialog.prototype.events = {
        "change [name='module_item[type]']": "insertView"
      };

      AddModuleItemDialog.prototype.els = {
        '#moduleItemOptionsContainer': '$moduleItemOptionsContainer',
        "[name='module_item[type]']": '$select'
      };

      AddModuleItemDialog.prototype.initialize = function(options) {
        var dialogDefaults;

        dialogDefaults = {
          title: I18n.t("dialog_title", "Add item to %{moduleName}", {
            moduleName: options.moduleName
          }),
          width: 600,
          height: 400
        };
        return AddModuleItemDialog.__super__.initialize.call(this, _.extend({}, dialogDefaults, options));
      };

      AddModuleItemDialog.prototype.afterRender = function() {
        return this.swapView(this.$select.val());
      };

      AddModuleItemDialog.prototype.insertView = function(event) {
        return this.swapView($(event.target).val());
      };

      AddModuleItemDialog.prototype.swapView = function(key) {
        var itemView;

        itemView = ModuleItemViewRegister.views[key];
        if (itemView) {
          return this.$moduleItemOptionsContainer.html(itemView.render().el);
        }
      };

      return AddModuleItemDialog;

    })(DialogFormView);
  });

}).call(this);
