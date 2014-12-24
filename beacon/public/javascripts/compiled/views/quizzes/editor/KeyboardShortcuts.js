(function() {
  define(['underscore', 'i18n!quizzes.editor.keyboard_shortcuts', 'jquery', 'Backbone', 'jst/quizzes/editor/KeyboardShortcuts'], function(_, I18n, $, Backbone, Template) {
    var KeyboardShortcuts, ZERO_KEYCODES;

    ZERO_KEYCODES = [48, 96];
    KeyboardShortcuts = Backbone.View.extend({
      className: 'tinymce-keyboard-shortcuts-toggle',
      tagName: 'a',
      events: {
        'click': 'openDialog'
      },
      keybindings: [
        {
          key: 'ALT+F10 (Windows, Linux)',
          description: I18n.t('keybindings.open_toolbar', 'Open the editor\'s toolbar')
        }, {
          key: 'ALT+FN+F10 (Mac)',
          description: I18n.t('keybindings.open_toolbar', 'Open the editor\'s toolbar')
        }, {
          key: 'ALT+0',
          description: I18n.t('keybindings.open_dialog', 'Open this help dialog')
        }
      ],
      template: Template,
      initialize: function() {
        this.el.href = '#';
        $('<i class="icon-info" />').appendTo(this.el);
        return $('<span class="screenreader-only" />').text(I18n.t('dialog_title', 'Keyboard Shortcuts')).appendTo(this.el);
      },
      render: function() {
        var templateData;

        templateData = {
          keybindings: this.keybindings
        };
        this.$dialog = $(this.template(templateData)).dialog({
          title: I18n.t('dialog_title', 'Keyboard Shortcuts'),
          width: 600,
          resizable: true,
          autoOpen: false
        });
        $(document).on('keyup.tinymce_keyboard_shortcuts', this.openDialogByKeybinding.bind(this));
        return this;
      },
      remove: function() {
        $(document).off('keyup.tinymce_keyboard_shortcuts');
        return this.$dialog.dialog('destroy');
      },
      openDialog: function() {
        if (!this.$dialog.dialog('isOpen')) {
          return this.$dialog.dialog('open');
        }
      },
      openDialogByKeybinding: function(e) {
        if (ZERO_KEYCODES.indexOf(e.keyCode) > -1 && e.altKey) {
          return this.openDialog();
        }
      }
    });
    return KeyboardShortcuts;
  });

}).call(this);
