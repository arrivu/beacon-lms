(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!conversations', 'jquery', 'underscore', 'Backbone'], function(I18n, $, _, _arg, CourseSelectionView, SearchView) {
    var SearchableSubmenuView, View, _ref;

    View = _arg.View;
    return SearchableSubmenuView = (function(_super) {
      __extends(SearchableSubmenuView, _super);

      function SearchableSubmenuView() {
        this.handleRightArrow = __bind(this.handleRightArrow, this);
        this.handleUpArrow = __bind(this.handleUpArrow, this);
        this.handleDownArrow = __bind(this.handleDownArrow, this);
        this.search = __bind(this.search, this);        _ref = SearchableSubmenuView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SearchableSubmenuView.prototype.initialize = function() {
        var $labelledField, label;

        SearchableSubmenuView.__super__.initialize.apply(this, arguments);
        this.$field = $('<input />').attr({
          'class': 'dropdown-search',
          type: 'search',
          placeholder: I18n.t('course_name', 'Course name')
        }).keyup(_.debounce(this.search, 100)).keydown(this.handleDownArrow);
        label = this.getMenuRoot().text();
        $labelledField = $('<label>').append(this.$field);
        this.$submenu = this.$el.children('.dropdown-menu').prepend($labelledField).find('.inner').keydown(this.handleUpArrow);
        this.getMenuRoot().keydown(this.handleRightArrow);
        return this.$contents = this.$el.find('li');
      };

      SearchableSubmenuView.prototype.search = function() {
        var val;

        val = this.$field.val().toLowerCase();
        if (!val) {
          this.$contents.show();
          return;
        }
        return this.$contents.each(function() {
          var $abbr, $entry, isMatch, text;

          $entry = $(this);
          $abbr = $entry.find('abbr');
          text = $abbr.length ? $abbr.attr('title') : $entry.find('span').text();
          isMatch = text.toLowerCase().indexOf(val) !== -1;
          return $entry[isMatch ? 'show' : 'hide']();
        });
      };

      SearchableSubmenuView.prototype.clearSearch = function() {
        this.$field.val('');
        return this.search();
      };

      SearchableSubmenuView.prototype.getFirstEntry = function() {
        return this.$submenu.find('li:not(.divider):visible > a').first();
      };

      SearchableSubmenuView.prototype.getMenuRoot = function() {
        return this.$el.children('[role=menuitem]');
      };

      SearchableSubmenuView.prototype.handleDownArrow = function(e) {
        if (e.keyCode !== 40) {
          return;
        }
        e.preventDefault();
        return this.getFirstEntry().focus();
      };

      SearchableSubmenuView.prototype.handleUpArrow = function(e) {
        if (e.keyCode !== 38) {
          return;
        }
        if (e.target !== this.getFirstEntry()[0]) {
          return;
        }
        e.stopPropagation();
        return this.$field.focus();
      };

      SearchableSubmenuView.prototype.handleRightArrow = function(e) {
        if (e.keyCode !== 39) {
          return;
        }
        e.stopPropagation();
        return this.$field.focus();
      };

      return SearchableSubmenuView;

    })(View);
  });

}).call(this);
