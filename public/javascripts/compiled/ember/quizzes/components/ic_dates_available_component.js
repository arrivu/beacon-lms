(function() {
  define(['ember', '../shared/status_date', 'i18n!dates_available_component'], function(Ember, StatusDate, I18n) {
    var IcDatesAvailableComponent;

    return IcDatesAvailableComponent = Ember.Component.extend({
      tagName: 'span',
      allDates: [],
      showDueDates: false,
      linkHref: '#',
      multipleDatesTitle: I18n.t('multiple_dates', 'Multiple Dates'),
      multipleDates: Em.computed.gt('allDates.length', 1),
      statusDates: Em.computed.map('allDates', function(item) {
        return StatusDate.create({
          lockAt: item.get('lockAt'),
          unlockAt: item.get('unlockAt'),
          dueAt: item.get('dueAt'),
          base: item.get('base'),
          title: item.get('title')
        });
      }),
      multipleDatesLabel: (function() {
        if (this.get('showDueDates')) {
          return I18n.t('due', 'Due');
        } else {
          return I18n.t('available', 'Available');
        }
      }).property('showDueDates'),
      singleDateLabel: (function() {
        var label;

        if (!this.get('singleDate')) {
          return '';
        }
        label = this.get('showDueDates') ? 'dueLabel' : 'availableLabel';
        return this.get('singleDate').get(label);
      }).property('showDueDates'),
      singleDate: (function() {
        if (!this.get('statusDates') && !this.get('statusDates')[0]) {
          return void 0;
        }
        return this.get('statusDates')[0];
      }).property('statusDates.@each'),
      singleFormat: (function() {
        if (this.get('showDueDates')) {
          return 'date_at_time';
        } else {
          return 'short';
        }
      }).property('showDueDates'),
      singleDateValue: (function() {
        if (this.get('showDueDates')) {
          return this.getStatusDateProp('dueDate');
        } else {
          return this.getStatusDateProp('availableDate');
        }
      }).property('showDueDates'),
      getStatusDateProp: function(prop) {
        if (!this.get('singleDate')) {
          return '';
        }
        return this.get('singleDate').get(prop);
      }
    });
  });

}).call(this);
