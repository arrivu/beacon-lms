(function() {
  define(['ember', '../register', 'i18n!ic_actions', 'ic-menu', '../templates/components/ic-actions', '../templates/components/ic-actions-css'], function(Ember, register, I18n) {
    return register('component', 'ic-actions', Ember.Component.extend({
      tagName: 'ic-actions',
      title: I18n.t('manage', 'manage'),
      triggerClass: (function() {
        if (this.get('button')) {
          return 'btn';
        } else {
          return '';
        }
      }).property('button'),
      focus: function() {
        var trigger;

        trigger = this.get('childViews')[0].get('childViews')[0];
        return trigger.focus();
      }
    }));
  });

}).call(this);
