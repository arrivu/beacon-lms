(function() {
  define(['ember', '../start_app', 'i18n!confirm_dialog', 'jquery', 'helpers/jquery.simulate', 'jqueryui/dialog'], function(Ember, startApp, I18n, $) {
    var App, assertDialogClosed, cancelButton, component, confirmButton, containerView, run, stub;

    run = Ember.run;
    component = null;
    containerView = null;
    stub = null;
    App = null;
    confirmButton = null;
    cancelButton = null;
    assertDialogClosed = function() {
      return ok($(component.$()).is(':hidden'), 'hides dialog');
    };
    module("ConfirmDialogComponent", {
      setup: function() {
        var $el;

        App = startApp();
        run(function() {
          containerView = Ember.ContainerView.create({
            container: App.__container__
          });
          component = App.ConfirmDialogComponent.create({
            container: App.__container__,
            layout: Ember.TEMPLATES['components/confirm-dialog'],
            title: 'ohi quiz'
          });
          containerView.pushObject(component);
          containerView.appendTo('#fixtures');
          return stub = sinon.stub(component, 'sendAction');
        });
        $el = component.$().dialog().data('dialog').uiDialog;
        confirmButton = $($el.find('.confirm-dialog-confirm-btn'));
        return cancelButton = $($el.find('.confirm-dialog-cancel-btn'));
      },
      teardown: function() {
        return run(function() {
          component.destroy();
          return App.destroy();
        });
      }
    });
    test("closes when confirm button clicked", function() {
      confirmButton.click();
      ok(stub.calledWith('on-submit'));
      return assertDialogClosed();
    });
    test("closes when cancel button clicked", function() {
      cancelButton.click();
      ok(stub.calledWith('on-cancel'));
      return assertDialogClosed();
    });
    test("closes when cancel button clicked by keyPress", function() {
      cancelButton.simulate('keypress', {
        keyCode: $.ui.keyCode.ENTER
      });
      ok(stub.calledWith('on-cancel'));
      return assertDialogClosed();
    });
    test("closes when confirm button clicked by keyPress", function() {
      confirmButton.simulate('keypress', {
        keyCode: $.ui.keyCode.ENTER
      });
      ok(stub.calledWith('on-submit'));
      return assertDialogClosed();
    });
    test("throws an error unless you provide a title", function() {
      return throws(function() {
        return run(function() {
          var withoutTitle;

          withoutTitle = App.ConfirmDialogComponent.create({
            container: App.__container__,
            layout: Ember.TEMPLATES['components/confirm-dialog']
          });
          return containerView.pushObject(withoutTitle);
        });
      }, /you must provide a title/i);
    });
    test("default texts", function() {
      equal(component.get('confirm-text'), I18n.t('ok', 'Ok'), 'default confirm-text');
      return equal(component.get('cancel-text'), I18n.t('cancel', 'Cancel'), 'default cancel-text');
    });
    return test("default actions", function() {
      equal(component.get('on-submit'), 'submit', 'default on-submit');
      return equal(component.get('on-cancel'), 'cancel', 'dfeault on-cancel');
    });
  });

}).call(this);
