(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!gradebook2', 'Backbone', 'compiled/gradebook2/OutcomeGradebookGrid', 'jst/gradebook2/header_filter'], function(I18n, _arg, Grid, template) {
    var HeaderFilterView, View, _ref;

    View = _arg.View;
    return HeaderFilterView = (function(_super) {
      __extends(HeaderFilterView, _super);

      function HeaderFilterView() {
        _ref = HeaderFilterView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      HeaderFilterView.prototype.className = 'text-right';

      HeaderFilterView.prototype.template = template;

      HeaderFilterView.prototype.labels = {
        average: I18n.t('course_average', 'Course average'),
        median: I18n.t('course_median', 'Course median'),
        mode: I18n.t('course_mode', 'Course mode')
      };

      HeaderFilterView.prototype.events = {
        'click li a': 'onClick'
      };

      HeaderFilterView.optionProperty('grid');

      HeaderFilterView.optionProperty('redrawFn');

      HeaderFilterView.prototype.onClick = function(e) {
        var key;

        e.preventDefault();
        e.stopPropagation();
        key = e.target.getAttribute('data-method');
        this.closeMenu();
        this.updateLabel(key);
        return this.recalculateHeader(key);
      };

      HeaderFilterView.prototype.closeMenu = function() {
        return this.$el.find('.al-trigger').data('kyleMenu').close();
      };

      HeaderFilterView.prototype.updateLabel = function(key) {
        return this.$('.current-label').text(this.labels[key]);
      };

      HeaderFilterView.prototype.recalculateHeader = function(key) {
        if (key === 'average') {
          key = 'mean';
        }
        return this.redrawFn(this.grid, key);
      };

      return HeaderFilterView;

    })(View);
  });

}).call(this);
