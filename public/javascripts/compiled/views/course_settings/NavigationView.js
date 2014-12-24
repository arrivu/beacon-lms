(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'Backbone'], function($, Backbone) {
    var NavigationView, _ref;

    return NavigationView = (function(_super) {
      __extends(NavigationView, _super);

      function NavigationView() {
        this.onKeyDown = __bind(this.onKeyDown, this);        _ref = NavigationView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NavigationView.prototype.keyCodes = {
        32: 'Space',
        38: 'UpArrow',
        40: 'DownArrow'
      };

      NavigationView.prototype.events = {
        'click .disable_nav_item_link': 'disableNavLink',
        'click .move_nav_item_link': 'moveNavLink',
        'click .enable_nav_item_link': 'enableNavLink'
      };

      NavigationView.prototype.els = {
        '#nav_enabled_list': '$enabled_list',
        '#nav_disabled_list': '$disabled_list',
        '#move_nav_item_form': '$move_dialog',
        '.navitem': '$navitems',
        '#move_nav_item_name': '$move_name'
      };

      NavigationView.prototype.disableNavLink = function(e) {
        var $targetItem;

        $targetItem = $(e.currentTarget).closest('.navitem');
        this.$disabled_list.append($targetItem);
        return $(e.currentTarget).attr('class', '').attr('class', 'icon-plus enable_nav_item_link').text("Enable");
      };

      NavigationView.prototype.enableNavLink = function(e) {
        var $targetItem;

        $targetItem = $(e.currentTarget).closest('.navitem');
        this.$enabled_list.append($targetItem);
        return $(e.currentTarget).attr('class', '').attr('class', 'icon-x disable_nav_item_link').text("Disable");
      };

      NavigationView.prototype.moveNavLink = function(e) {
        var $select, dialog, options, which_item, which_list;

        dialog = this.$move_dialog;
        which_list = $(e.currentTarget).closest('.nav_list');
        which_item = $(e.currentTarget).closest('.navitem');
        options = [];
        which_list.children('.navitem').each(function(key, item) {
          if ($(item).attr('aria-label') === which_item.attr('aria-label')) {
            return;
          }
          return options.push('<option value="' + $(item).attr('id') + '">' + $(item).attr('aria-label') + '</option>');
        });
        $select = this.$move_dialog.children().find('#move_nav_item_select');
        $select.empty();
        $select.append(options.join(''));
        this.$move_name.text(which_item.attr('aria-label'));
        this.$move_dialog.data('current_item', which_item);
        return this.$move_dialog.dialog({
          modal: true,
          width: 600,
          height: 300,
          close: function() {
            return dialog.dialog('close');
          }
        });
      };

      NavigationView.prototype.moveSubmit = function(e) {
        var before_or_after, current_item, selected_item;

        e.preventDefault();
        current_item = $('#move_nav_item_form').data('current_item');
        before_or_after = $('[name="move_location"]:checked').val();
        selected_item = $('#' + $('#move_nav_item_select').val());
        if (before_or_after === 'before') {
          selected_item.before(current_item);
        }
        if (before_or_after === 'after') {
          selected_item.after(current_item);
        }
        $('#move_nav_item_form').dialog('close');
        return current_item.focus();
      };

      NavigationView.prototype.cancelMove = function() {
        return $('#move_nav_item_form').dialog('close');
      };

      NavigationView.prototype.focusKeyboardHelp = function(e) {
        return $('.drag_and_drop_warning').removeClass('screenreader-only');
      };

      NavigationView.prototype.hideKeyboardHelp = function(e) {
        return $('.drag_and_drop_warning').addClass('screenreader-only');
      };

      NavigationView.prototype.afterRender = function() {
        this.keyCodes = typeof Object.freeze === "function" ? Object.freeze(this.keyCodes) : void 0;
        $("li.navitem").on('keydown', this.onKeyDown);
        $('#move_nav_item_cancel_btn').on('click', this.cancelMove);
        this.$move_dialog.on('submit', this.moveSubmit);
        $('#navigation_tab').on('blur', this.focusKeyboardHelp);
        return $('.drag_and_drop_warning').on('blur', this.hideKeyboardHelp);
      };

      NavigationView.prototype.onKeyDown = function(e) {
        var $target, fn;

        $target = $(e.target);
        fn = "on" + this.keyCodes[e.keyCode] + "Key";
        if (this[fn]) {
          return this[fn].call(this, e, $target) && e.preventDefault();
        }
      };

      NavigationView.prototype.onUpArrowKey = function(e, $target) {
        var prev;

        prev = $target.prev("li.navitem");
        if (this.empty(prev)) {
          prev = $target.children("li.navitem").first();
        }
        if (this.empty(prev) && this.disabled($target)) {
          prev = this.$enabled_list.children("li.navitem").last();
          if (this.empty(prev)) {
            prev = this.$enabled_list;
            prev.attr('tabindex', 0);
            prev.bind('keydown', this.onKeyDown);
          }
        }
        return prev.focus();
      };

      NavigationView.prototype.onDownArrowKey = function(e, $target) {
        var next;

        next = $target.next("li.navitem");
        if (this.empty(next)) {
          next = $target.children("li.navitem").first();
        }
        if (this.empty(next) && this.enabled($target)) {
          next = this.$disabled_list.children("li.navitem").first();
          if (this.empty(next)) {
            next = this.$disabled_list;
            next.attr('tabindex', -1);
            next.bind('keydown', this.onKeyDown);
          }
        }
        return next.focus();
      };

      NavigationView.prototype.onSpaceKey = function(e, $target) {
        var dragObject;

        if (dragObject = this.$el.data('drag')) {
          if (!$target.is(dragObject)) {
            if ($target.is('li.navitem')) {
              $target.after(dragObject);
            } else {
              $target.append(dragObject);
              $target.attr('tabindex', -1);
              $target.unbind('keydown');
            }
          }
          dragObject.attr('aria-grabbed', false);
          this.$el.data('drag', null);
          return dragObject.focus();
        } else if ($target.is('li.navitem')) {
          $target.attr('aria-grabbed', true);
          dragObject = $target;
          this.$el.data('drag', dragObject);
          dragObject.blur();
          return dragObject.focus();
        }
      };

      NavigationView.prototype.empty = function(selector) {
        return selector.length === 0;
      };

      NavigationView.prototype.enabled = function(el) {
        return el.parent().attr("id") === this.$enabled_list.attr("id");
      };

      NavigationView.prototype.disabled = function(el) {
        return el.parent().attr("id") === this.$disabled_list.attr("id");
      };

      return NavigationView;

    })(Backbone.View);
  });

}).call(this);
