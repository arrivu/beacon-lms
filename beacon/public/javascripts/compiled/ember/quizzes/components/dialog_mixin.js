(function() {
  define(['ember', 'jquery', 'i18n!confirm_dialog', 'jqueryui/dialog', 'compiled/jquery/fixDialogButtons'], function(Ember, $, I18n) {
    var CANCEL_BTN, CONFIRM_BTN, DialogMixin;

    CONFIRM_BTN = '.confirm-dialog-confirm-btn';
    CANCEL_BTN = '.confirm-dialog-cancel-btn';
    return DialogMixin = Ember.Mixin.create({
      headerElement: '#header',
      height: '500',
      width: '550',
      position: {
        my: 'center',
        at: 'center',
        of: window
      },
      'fix-dialog-buttons': true,
      'confirm-text': I18n.t('submit', 'Submit'),
      'cancel-text': I18n.t('cancel', 'Cancel'),
      'on-submit': 'submit',
      '_destroyAction': '_destroyModal',
      turnIntoDialog: (function() {
        var $el, uiDialog,
          _this = this;

        if (!this.get('title')) {
          throw new Em.Error("You must provide a title to a Dialog Component!");
        }
        $el = this.$();
        $el.dialog({
          autoOpen: false,
          title: this.get('title'),
          modal: true,
          height: this.get('height'),
          width: this.get('width'),
          fixDialogButtons: this.get('fix-dialog-buttons'),
          position: this.get('position'),
          close: function() {
            return _this.sendAction('_destroyAction');
          }
        });
        this.set("dialog", $el);
        uiDialog = $el.dialog('open').data('dialog').uiDialog;
        this._moveWithinEmberAppScope($el, uiDialog);
        uiDialog.on('keypress', function(event) {
          return Em.run(_this, 'keyPress', event);
        });
        uiDialog.on('click', CONFIRM_BTN, function(event) {
          return Em.run(_this, 'closeAndConfirm');
        });
        return uiDialog.on('click', CANCEL_BTN, function(event) {
          return Em.run(_this, 'closeAndCancel');
        });
      }).on('didInsertElement'),
      adjustDimensions: (function() {
        this.get('dialog').dialog("option", "height", this.get('height'));
        return this.get('dialog').dialog("option", "width", this.get('width'));
      }).observes('height', 'width'),
      _close: function() {
        return this.$().dialog('close');
      },
      _moveWithinEmberAppScope: function($el, uiDialog) {
        var $content, $overlay, rootElement;

        $overlay = $el.dialog().data('dialog').overlay.$el;
        $overlay.css('position', 'fixed');
        rootElement = Em.get('App.rootElement' || '#content');
        $content = $(rootElement);
        uiDialog.appendTo($content);
        $overlay.appendTo($content);
        uiDialog.position(this.get('position'));
        uiDialog.focus();
        return $('#header').css('z-index', '0');
      },
      closeAndConfirm: function() {
        this._close();
        this.sendAction('on-submit');
        return false;
      },
      closeAndCancel: function() {
        this._close();
        this.sendAction('on-cancel');
        return false;
      },
      destroyDialog: (function() {
        Ember.$('#header').css('z-index', '11');
        this.$().data('dialog').uiDialog.off();
        return this.$().dialog('destroy');
      }).on('willDestroyElement'),
      keyPress: function(event) {
        var $target;

        if (event.keyCode !== $.ui.keyCode.ENTER) {
          return true;
        }
        $target = $(event.target);
        if (!$target.is("button")) {
          return true;
        }
        if ($target.hasClass(CONFIRM_BTN.replace('.', ''))) {
          this.closeAndConfirm();
        } else {
          this.closeAndCancel();
        }
        return false;
      }
    });
  });

}).call(this);
