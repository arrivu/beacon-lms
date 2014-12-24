(function() {
  define(['jquery', 'compiled/jquery/fixDialogButtons', 'jquery.disableWhileLoading', 'helpers/jquery.simulate'], function($) {
    module('fixDialogButtons', {
      setup: function() {
        return this.clock = sinon.useFakeTimers();
      },
      teardown: function() {
        return this.clock.restore();
      }
    });
    test('handles buttons', function() {
      var $closer, $dialog, $submitButton, deferred, msg, originalButtonText, submitWasCalled;

      $dialog = $("<form style=\"display:none\">\n  when this gets turned into a dialog, it should\n  turn the buttons in the markup into proper dialog buttons\n  <button class=\"btn\">Should NOT be converted</button>\n  <div class=\"button-container\">\n    <button class=\"btn\" data-text-while-loading=\"while loading\" type=\"submit\">\n      This will Submit the form\n    </button>\n    <a class=\"btn dialog_closer\">\n      This will cause the dialog to close\n    </a>\n  </div>\n</form>").appendTo('body').dialog().fixDialogButtons();
      ok($dialog.is(':ui-dialog:visible'), 'pops up dialog');
      equal($dialog.dialog('option', 'buttons').length, 2, 'converts both buttons in .button-pane only');
      msg = "hides the original .buttons in the .button-container only";
      $dialog.find('.btn').each(function() {
        return equal($(this).is(':hidden'), $(this).text() !== 'Should NOT be converted', msg);
      });
      msg = "make sure clicking on converted ui-dialog-button causes submit handler to be called on form";
      $submitButton = $dialog.dialog('widget').find('.ui-dialog-buttonpane .ui-button:contains("This will Submit the form")');
      originalButtonText = $submitButton.text();
      deferred = new $.Deferred();
      submitWasCalled = false;
      $dialog.submit(function(e) {
        e.preventDefault();
        $dialog.disableWhileLoading(deferred);
        return submitWasCalled = true;
      });
      $submitButton.click();
      ok(submitWasCalled, msg);
      equal($dialog.dialog('isOpen'), true, "doesnt cause dialog to hide");
      this.clock.tick(14);
      equal($submitButton.text(), 'while loading', 'copies over text-while-loading on buttons');
      deferred.resolve();
      equal($submitButton.text(), originalButtonText, 'restores text-while-loading');
      msg = 'make sure clicking on the .dialog_closer causes dialog to close';
      $closer = $dialog.dialog('widget').find('.ui-dialog-buttonpane .ui-button:contains("This will cause the dialog to close")');
      $closer.click();
      equal($dialog.dialog('isOpen'), false, msg);
      return $dialog.remove();
    });
    test("enter key submits form", function() {
      var $dialog, submitCount;

      $dialog = $("<form style='display:none'><input id='box' type='text'></input><div class='button-container'><button type='submit'></button></div></form>").appendTo('body').dialog();
      $dialog.fixDialogButtons();
      submitCount = 0;
      $dialog.submit(function(e) {
        e.preventDefault();
        return ++submitCount;
      });
      $('#box').simulate("keyup", {
        keyCode: $.ui.keyCode.ENTER
      });
      equal(submitCount, 1);
      return $dialog.remove();
    });
    test("enter key does not duplicate submissions if fixDialogButtons invoked more than once", function() {
      var $dialog, submitCount;

      $dialog = $("<form style='display:none'><input id='box' type='text'></input><div class='button-container'><button type='submit'></button></div></form>").appendTo('body').dialog();
      $dialog.fixDialogButtons();
      $dialog.fixDialogButtons();
      submitCount = 0;
      $dialog.submit(function(e) {
        e.preventDefault();
        return ++submitCount;
      });
      $('#box').simulate("keyup", {
        keyCode: $.ui.keyCode.ENTER
      });
      equal(submitCount, 1);
      return $dialog.remove();
    });
    return test("enter key submits form only once without preventDefault", function() {
      var $dialog, submitCount;

      $dialog = $("<form style='display:none' action='#' onsubmit='return false;'><input id='box' type='text'></input><div class='button-container'><button type='submit'></button></div></form>").appendTo('body').dialog();
      $dialog.fixDialogButtons();
      submitCount = 0;
      $dialog.submit(function(e) {
        return ++submitCount;
      });
      $('#box').simulate("keydown", {
        keyCode: $.ui.keyCode.ENTER
      });
      $('#box').simulate("keypress", {
        keyCode: $.ui.keyCode.ENTER
      });
      $('#box').simulate("keyup", {
        keyCode: $.ui.keyCode.ENTER
      });
      equal(submitCount, 1);
      return $dialog.remove();
    });
  });

}).call(this);
