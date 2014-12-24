(function() {
  define(['underscore', 'i18n!assignments'], function(_, I18n) {
    return {
      keyBindings: [
        {
          keyCode: 74,
          handler: 'goToNextItem',
          key: I18n.t('keycodes.next', 'j'),
          desc: I18n.t('keyboard_next_item', 'Focus on the next assignment or group')
        }, {
          keyCode: 75,
          handler: 'goToPrevItem',
          key: I18n.t('keycodes.previous', 'k'),
          desc: I18n.t('keyboard_prev_item', 'Focus on the previous assignment or group')
        }, {
          keyCode: 69,
          handler: 'editItem',
          key: I18n.t('keycodes.edit_item', 'e'),
          desc: I18n.t('keyboard_edit_item', 'Edit the current assignment or group')
        }, {
          keyCode: 68,
          handler: 'deleteItem',
          key: I18n.t('keycodes.del_item', 'd'),
          desc: I18n.t('keyboard_del_item', 'Delete the current assignment or group')
        }, {
          keyCode: 65,
          handler: 'addItem',
          key: I18n.t('keycodes.add_item', 'a'),
          desc: I18n.t('keyboard_add_item', 'Add an assignment to selected group')
        }, {
          keyCode: 70,
          handler: 'showAssignment',
          key: I18n.t('keycodes.show_assign', 'f'),
          desc: I18n.t('keyboard_show_assign', 'Show full preview of the selected assignment')
        }, {
          keyCode: null,
          key: I18n.t('keycodes.close_menu', 'esc'),
          desc: I18n.t('keyboard_close_menu', 'Close the active dialog')
        }
      ],
      handleKeys: function(e) {
        var b, mod, modifiers, _name;

        modifiers = ['shiftKey', 'altKey', 'ctrlKey'];
        if (_.any((function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = modifiers.length; _i < _len; _i++) {
            mod = modifiers[_i];
            _results.push(e[mod]);
          }
          return _results;
        })())) {
          return;
        }
        b = _.find(this.keyBindings, function(binding) {
          return binding.keyCode === e.keyCode;
        });
        if (b != null ? b.handler : void 0) {
          if (typeof this[_name = b.handler] === "function") {
            this[_name](e);
          }
          return e.stopPropagation();
        }
      }
    };
  });

}).call(this);
