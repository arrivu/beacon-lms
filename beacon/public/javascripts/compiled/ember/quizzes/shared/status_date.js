(function() {
  define(['ember', 'i18n!status_dates'], function(Ember, I18n) {
    var AVAILABLE_STATUS_LABELS;

    AVAILABLE_STATUS_LABELS = {
      available: I18n.t('available', 'Available'),
      availableUntil: I18n.t('available_until', 'Available until'),
      pending: I18n.t('pending', 'Not available until'),
      closed: I18n.t('closed', 'Closed'),
      none: ''
    };
    return Ember.Object.extend({
      now: new Date(),
      setupDate: (function() {
        var _this = this;

        return setInterval(function() {
          return Ember.run.next(function() {
            return _this.set('now', new Date());
          });
        }, 1000);
      }).on('init'),
      availableStatus: (function() {
        var lockNotPassed, lockPassed, unlockPassed;

        lockPassed = this.get('lockAt') && (new Date(this.get('lockAt')) < this.get('now'));
        lockNotPassed = this.get('lockAt') && (new Date(this.get('lockAt')) > this.get('now'));
        unlockPassed = this.get('unlockAt') && (new Date(this.get('unlockAt')) < this.get('now'));
        if (lockPassed) {
          return 'closed';
        } else if (this.get('unlockAt') && (new Date(this.get('unlockAt')) > this.get('now'))) {
          return 'pending';
        } else if ((!this.get('unlockAt') || unlockPassed) && lockNotPassed) {
          return 'availableUntil';
        } else {
          return 'none';
        }
      }).property('unlockAt', 'lockAt', 'now'),
      availableLabel: (function() {
        return AVAILABLE_STATUS_LABELS[this.get('availableStatus')];
      }).property('availableStatus'),
      availableMultiLabel: (function() {
        var lb;

        lb = this.get('availableLabel');
        if (lb === AVAILABLE_STATUS_LABELS['none']) {
          lb = AVAILABLE_STATUS_LABELS['available'];
        } else if (lb === AVAILABLE_STATUS_LABELS['pending']) {
          lb = I18n.t('not_available', 'Available on');
        }
        return lb;
      }).property('availableStatus'),
      availableDate: (function() {
        if (this.get('availableStatus') === 'availableUntil') {
          return this.get('lockAt');
        } else if (this.get('availableStatus') === 'pending') {
          return this.get('unlockAt');
        } else {
          return '';
        }
      }).property('availableStatus'),
      dueLabel: (function() {
        if (this.get('dueAt')) {
          return I18n.t('due', 'Due');
        }
      }).property('dueAt'),
      dueDate: Em.computed.alias('dueAt')
    });
  });

}).call(this);
