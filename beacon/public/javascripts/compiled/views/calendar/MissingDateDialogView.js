(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone', 'i18n!calendar.edit', 'jst/calendar/missingDueDateDialog', 'jqueryui/dialog', 'compiled/jquery/fixDialogButtons'], function($, _, _arg, I18n, template) {
    var MissingDateDialogView, View, _ref;

    View = _arg.View;
    return MissingDateDialogView = (function(_super) {
      __extends(MissingDateDialogView, _super);

      function MissingDateDialogView() {
        this.cancel = __bind(this.cancel, this);
        this.onAction = __bind(this.onAction, this);        _ref = MissingDateDialogView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MissingDateDialogView.prototype.dialogTitle = "<span>\n  <i class=\"icon-warning\"></i>\n  " + (I18n.t('titles.warning', 'Warning')) + "\n</span>";

      MissingDateDialogView.prototype.initialize = function(options) {
        MissingDateDialogView.__super__.initialize.apply(this, arguments);
        this.validationFn = options.validationFn;
        this.labelFn = options.labelFn || this.defaultLabelFn;
        this.success = options.success;
        return this.da_enabled = options.da_enabled;
      };

      MissingDateDialogView.prototype.defaultLabelFn = function(input) {
        return $("label[for=" + ($(input).attr('id')) + "]").text();
      };

      MissingDateDialogView.prototype.render = function() {
        this.invalidFields = this.validationFn();
        if (this.invalidFields === true) {
          return false;
        } else {
          this.invalidSectionNames = _.map(this.invalidFields, this.labelFn);
          this.showDialog();
          return this;
        }
      };

      MissingDateDialogView.prototype.getInvalidFields = function() {
        var invalidDates, sectionNames;

        invalidDates = _.select(this.$dateFields, function(date) {
          return $(date).val() === '';
        });
        sectionNames = _.map(invalidDates, this.labelFn);
        if (sectionNames.length > 0) {
          return [invalidDates, sectionNames];
        } else {
          return false;
        }
      };

      MissingDateDialogView.prototype.showDialog = function() {
        var description, tpl;

        description = I18n.t('missingDueDate', {
          one: '%{sections} does not have a due date assigned.',
          other: '%{sections} do not have a due date assigned.'
        }, {
          sections: '',
          count: this.invalidSectionNames.length
        });
        tpl = template({
          description: description,
          da_enabled: this.da_enabled,
          sections: this.invalidSectionNames
        });
        this.$dialog = $(tpl).dialog({
          dialogClass: 'dialog-warning',
          draggable: false,
          modal: true,
          resizable: false,
          title: $(this.dialogTitle)
        }).fixDialogButtons().on('click', '.btn', this.onAction);
        return this.$dialog.parents('.ui-dialog:first').focus();
      };

      MissingDateDialogView.prototype.onAction = function(e) {
        if ($(e.currentTarget).hasClass('btn-primary')) {
          return this.success(this.$dialog);
        } else {
          return this.cancel(this.invalidFields, this.sectionNames);
        }
      };

      MissingDateDialogView.prototype.cancel = function(e) {
        this.$dialog.dialog('close').remove();
        return this.invalidFields[0].focus();
      };

      return MissingDateDialogView;

    })(View);
  });

}).call(this);
