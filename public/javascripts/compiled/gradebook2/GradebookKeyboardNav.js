(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['i18n!gradebook2', 'compiled/gradebook2/GRADEBOOK_TRANSLATIONS', 'jquery.keycodes'], function(I18n, GRADEBOOK_TRANSLATIONS) {
    var GradebookKeyboardNav;

    return GradebookKeyboardNav = (function() {
      function GradebookKeyboardNav(slickGrid, $grid) {
        this.slickGrid = slickGrid;
        this.$grid = $grid;
        this.showToolTip = __bind(this.showToolTip, this);
        this.showCommentDialog = __bind(this.showCommentDialog, this);
        this.gotoAssignment = __bind(this.gotoAssignment, this);
        this.showAssignmentMenu = __bind(this.showAssignmentMenu, this);
        this.sortOnHeader = __bind(this.sortOnHeader, this);
        this.getHeaderFromActiveCell = __bind(this.getHeaderFromActiveCell, this);
      }

      GradebookKeyboardNav.prototype.init = function() {
        var binding, _i, _len, _ref, _results;

        _ref = this.keyBindings;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          binding = _ref[_i];
          if ((binding.handler != null) && (binding.key != null) && (this[binding.handler] != null)) {
            _results.push(this.$grid.keycodes(binding.key, this[binding.handler]));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      GradebookKeyboardNav.prototype.getHeaderFromActiveCell = function() {
        var coords;

        coords = this.slickGrid.getActiveCell();
        return this.$grid.find('.slick-header-column').eq(coords.cell);
      };

      GradebookKeyboardNav.prototype.sortOnHeader = function() {
        return this.getHeaderFromActiveCell().click();
      };

      GradebookKeyboardNav.prototype.showAssignmentMenu = function() {
        this.getHeaderFromActiveCell().find('.gradebook-header-drop').click();
        return $('.gradebook-header-menu:visible').focus();
      };

      GradebookKeyboardNav.prototype.gotoAssignment = function() {
        var url;

        url = this.getHeaderFromActiveCell().find('.assignment-name').attr('href');
        return window.location = url;
      };

      GradebookKeyboardNav.prototype.showCommentDialog = function() {
        return $(this.slickGrid.getActiveCellNode()).find('.gradebook-cell-comment').click();
      };

      GradebookKeyboardNav.prototype.showToolTip = function() {
        var node;

        node = $(this.slickGrid.getActiveCellNode());
        if (node.parent().css('top') === '0px') {
          node.find('div.gradebook-tooltip').addClass('first-row');
        } else {
          node.find('div.gradebook-tooltip').removeClass('first-row');
        }
        return node.toggleClass("hover");
      };

      GradebookKeyboardNav.prototype.keyBindings = [
        {
          handler: 'sortOnHeader',
          key: I18n.t('keycodes.sort', 's'),
          desc: I18n.t('keyboard_sort_desc', 'Sort the grid on the current active column')
        }, {
          handler: 'showAssignmentMenu',
          key: I18n.t('keycodes.menu', 'm'),
          desc: I18n.t('keyboard_menu_desc', 'Open the menu for active column\'s assignment')
        }, {
          key: I18n.t('keycodes.close_menu', 'esc'),
          desc: I18n.t('keyboard_close_menu', 'Close the currently active assignment menu')
        }, {
          handler: 'gotoAssignment',
          key: I18n.t('keycodes.goto_assignment', 'g'),
          desc: I18n.t('keyboard_assignment_desc', 'Go to the current assignment\'s detail page')
        }, {
          handler: 'showCommentDialog',
          key: I18n.t('keycodes.comment', 'c'),
          desc: I18n.t('keyboard_comment_desc', 'Comment on the active submission')
        }, {
          handler: 'showToolTip',
          key: I18n.t('keycodes.tooltip', 't'),
          desc: I18n.t('keyboard_tooltip_desc', 'Show the submission type of the active submission')
        }
      ];

      return GradebookKeyboardNav;

    })();
  });

}).call(this);
