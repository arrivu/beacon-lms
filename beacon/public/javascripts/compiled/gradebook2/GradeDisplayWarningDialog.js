(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!gradebook2', 'jquery', 'jst/GradeDisplayWarningDialog', 'jqueryui/dialog'], function(I18n, $, gradeDisplayWarningDialogTemplate) {
    var GradeDisplayWarningDialog;

    return GradeDisplayWarningDialog = (function() {
      function GradeDisplayWarningDialog(options) {
        this.cancel = __bind(this.cancel, this);
        this.save = __bind(this.save, this);
        var locals, percent_warning, points_warning;

        this.options = options;
        points_warning = I18n.t("grade_display_warning.points_text", "Students will also see their final grade as points. Are you sure you want to continue?");
        percent_warning = I18n.t("grade_display_warning.percent_text", "Students will also see their final grade as a percentage. Are you sure you want to continue?");
        locals = {
          warning_text: this.options.showing_points ? percent_warning : points_warning
        };
        this.$dialog = $(gradeDisplayWarningDialogTemplate(locals));
        this.$dialog.dialog({
          resizable: false,
          width: 350,
          buttons: [
            {
              text: I18n.t("grade_display_warning.cancel", "Cancel"),
              click: this.cancel
            }, {
              text: I18n.t("grade_display_warning.continue", "Continue"),
              click: this.save
            }
          ]
        });
      }

      GradeDisplayWarningDialog.prototype.save = function() {
        if (this.$dialog.find('#hide_warning').prop('checked')) {
          this.options.checked_save();
        } else {
          this.options.unchecked_save();
        }
        return this.$dialog.remove();
      };

      GradeDisplayWarningDialog.prototype.cancel = function() {
        return this.$dialog.remove();
      };

      return GradeDisplayWarningDialog;

    })();
  });

}).call(this);
