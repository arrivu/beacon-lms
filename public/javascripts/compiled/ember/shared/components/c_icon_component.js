(function() {
  define(['ember', '../register', '../templates/components/c-icon'], function(Ember, register) {
    return register('component', 'c-icon', Ember.Component.extend({
      tagName: 'i',
      classNameBindings: ['iconClass'],
      iconClass: (function() {
        return "icon-" + (this.get('type'));
      }).property('type')
    }));
  });

}).call(this);
