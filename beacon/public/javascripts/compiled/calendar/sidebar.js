(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['jquery', 'underscore', 'compiled/userSettings', 'jst/calendar/contextList', 'jst/calendar/undatedEvents', 'compiled/calendar/commonEventFactory', 'compiled/calendar/EditEventDetailsDialog', 'compiled/calendar/EventDataSource', 'compiled/jquery.kylemenu', 'jquery.instructure_misc_helpers', 'vendor/jquery.ba-tinypubsub'], function($, _, userSettings, contextListTemplate, undatedEventsTemplate, commonEventFactory, EditEventDetailsDialog, EventDataSource) {
    var VisibleContextManager, sidebar;

    VisibleContextManager = (function() {
      function VisibleContextManager(contexts, selectedContexts, $holder) {
        var availableContexts, c, e, fragmentData;

        this.$holder = $holder;
        this.restoreList = __bind(this.restoreList, this);
        this.saveAndClear = __bind(this.saveAndClear, this);
        fragmentData = (function() {
          try {
            return $.parseJSON($.decodeFromHex(location.hash.substring(1))) || {};
          } catch (_error) {
            e = _error;
            return {};
          }
        })();
        availableContexts = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = contexts.length; _i < _len; _i++) {
            c = contexts[_i];
            _results.push(c.asset_string);
          }
          return _results;
        })();
        if (fragmentData.show) {
          this.contexts = fragmentData.show.split(',');
        }
        this.contexts || (this.contexts = selectedContexts);
        this.contexts || (this.contexts = userSettings.get('checked_calendar_codes'));
        this.contexts || (this.contexts = availableContexts);
        this.contexts = _.intersection(this.contexts, availableContexts);
        this.contexts = this.contexts.slice(0, 10);
        this.notify();
        $.subscribe('Calendar/saveVisibleContextListAndClear', this.saveAndClear);
        $.subscribe('Calendar/restoreVisibleContextList', this.restoreList);
      }

      VisibleContextManager.prototype.saveAndClear = function() {
        if (!this.savedContexts) {
          this.savedContexts = this.contexts;
          this.contexts = [];
          return this.notify();
        }
      };

      VisibleContextManager.prototype.restoreList = function() {
        if (this.savedContexts) {
          this.contexts = this.savedContexts;
          this.savedContexts = null;
          return this.notify();
        }
      };

      VisibleContextManager.prototype.toggle = function(context) {
        var index;

        index = $.inArray(context, this.contexts);
        if (index >= 0) {
          this.contexts.splice(index, 1);
        } else {
          this.contexts.push(context);
          if (this.contexts.length > 10) {
            this.contexts.shift();
          }
        }
        return this.notify();
      };

      VisibleContextManager.prototype.notify = function() {
        var _this = this;

        $.publish('Calendar/visibleContextListChanged', [this.contexts]);
        return this.$holder.find('.context_list_context').each(function(i, li) {
          var $li, visible, _ref;

          $li = $(li);
          visible = (_ref = $li.data('context'), __indexOf.call(_this.contexts, _ref) >= 0);
          return $li.toggleClass('checked', visible).toggleClass('not-checked', !visible).find('.context-list-toggle-box').attr('aria-checked', visible);
        });
      };

      return VisibleContextManager;

    })();
    return sidebar = function(contexts, selectedContexts, dataSource) {
      var $holder, $skipLink, visibleContexts;

      $holder = $('#context-list-holder');
      $skipLink = $('.skip-to-calendar');
      $holder.html(contextListTemplate({
        contexts: contexts
      }));
      visibleContexts = new VisibleContextManager(contexts, selectedContexts, $holder);
      $holder.on('click keyclick', '.context_list_context', function(event) {
        visibleContexts.toggle($(this).data('context'));
        return userSettings.set('checked_calendar_codes', _.map($(this).parent().children('.checked'), function(c) {
          return $(c).data('context');
        }));
      });
      return $skipLink.on('click', function(e) {
        e.preventDefault();
        return $('#content').attr('tabindex', -1).focus();
      });
    };
  });

}).call(this);
