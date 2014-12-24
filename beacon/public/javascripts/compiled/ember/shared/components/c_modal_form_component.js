(function() {
  define(['../register', 'ember', 'ic-modal', 'i18n!c_modal_form', '../templates/components/c-modal-form'], function(register, Ember, Modal, I18n) {
    var ModalComponent, ModalFormComponent, modalCss;

    ModalFormComponent = Modal.ModalFormComponent, ModalComponent = Modal.ModalComponent, modalCss = Modal.modalCss;
    ModalComponent.reopen({
      attributeBindings: ['id'],
      toggleBodyClassOnClose: (function() {
        return $(document.body).addClass('ic-modal-open');
      }).on('willOpen'),
      toggleBodyClassOnOpen: (function() {
        return $(document.body).removeClass('ic-modal-open');
      }).on('willClose')
    });
    Ember.Application.initializer({
      name: 'c-modal-form-component',
      after: 'ic-modal',
      initialize: function(container) {
        return container.register('template:components/c-modal-form-css', modalCss);
      }
    });
    return register('component', 'c-modal-form', ModalFormComponent.extend({
      attributesBindings: ['return-focus-to'],
      classNames: ['form-horizontal', 'bootstrap-form'],
      closeText: I18n.t('close', 'close'),
      maybeMakeDefaultChildren: function() {
        this._super.apply(this, arguments);
        if (this.get('makeTitle')) {
          throw new Error('you must add an {{ic-modal-title}}');
        }
      },
      close: function() {
        var returnFocusTo, target;

        this._super.apply(this, arguments);
        returnFocusTo = this.get('return-focus-to');
        if (returnFocusTo) {
          target = Ember.View.views[returnFocusTo];
          if (target == null) {
            target = document.getElementById("#" + returnFocusTo);
          }
          return target.focus();
        }
      }
    }));
  });

}).call(this);
