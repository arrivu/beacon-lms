(function() {
  define(['ember', './dialog_mixin', 'i18n!message_dialog_component'], function(Em, DialogMixin, I18n) {
    /*
    # A simple component that displays a message to the user.
    #
    # @param {String} title
    # A title to display as the dialog's header. Required, and must be i18n-aware.
    #
    # @param {String} [accept-label='Ok']
    # Text to use as the Accept button's label.
    #
    # @param {String} [on-accept=undefined]
    # The action to send to your controller when the user acknowledges/reads the
    # message and closes the dialog.
    #
    # Usage example:
    #
    # {{#message-dialog
    #   title=myI18ndTitleProperty
    #   on-accept="shutdownComputer"
    #   accept-text=somePropertyWithI18nForAcknowledgingTheMessage
    # }}
    #
    #   {{#t "some_help_dialog"}}
    #     Make sure not to open the door to strangers, son.
    #   {{/t}}
    #
    # {{/message-dialog}}
    #
    */

    var MessageDialogComponent;

    return MessageDialogComponent = Em.Component.extend(DialogMixin, {
      'accept-text': I18n.t('ok', 'Ok'),
      closeAndCancel: function() {
        return this.accept();
      },
      accept: function() {
        this._close();
        if (this.get('on-accept')) {
          this.sendAction('on-accept');
        }
        return false;
      }
    });
  });

}).call(this);
