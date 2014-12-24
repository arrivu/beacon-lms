(function() {
  define(['select_content_dialog'], function(SelectContentDialog) {
    module("SelectContentDialog: Dialog options", {
      setup: function() {
        sinon.spy($.fn, 'dialog');
        return $("#fixtures").html("<div id='select_context_content_dialog'></div>");
      },
      teardown: function() {
        $("#fixtures").html("");
        return $.fn.dialog.restore();
      }
    });
    test("opens a dialog with the width option", function() {
      var width;

      width = 500;
      INST.selectContentDialog({
        width: width
      });
      return equal($.fn.dialog.getCall(0).args[0].width, width);
    });
    test("opens a dialog with the height option", function() {
      var height;

      height = 100;
      INST.selectContentDialog({
        height: height
      });
      return equal($.fn.dialog.getCall(0).args[0].height, height);
    });
    return test("opens a dialog with the dialog_title option", function() {
      var dialogTitle;

      dialogTitle = "To be, or not to be?";
      INST.selectContentDialog({
        dialog_title: dialogTitle
      });
      return equal($.fn.dialog.getCall(0).args[0].title, dialogTitle);
    });
  });

}).call(this);
