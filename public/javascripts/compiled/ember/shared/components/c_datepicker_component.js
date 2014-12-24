(function() {
  define(['ember', 'timezone', '../register', 'jquery.instructure_date_and_time', '../templates/components/c-datepicker'], function(Ember, tz, register) {
    Ember.TextSupport.reopen({
      attributeBindings: ['style']
    });
    return register('component', 'c-datepicker', Ember.Component.extend({
      value: (function(key, val) {
        var input;

        input = this.get('input');
        if (input) {
          return tz.format(tz.parse(input.data('date')), '%b %e, %Y %l:%M %P');
        } else {
          return val;
        }
      }).property('input'),
      createLegacyPicker: (function() {
        var input;

        input = this.$('input');
        this.set('input', input);
        return input.datetime_field();
      }).on('didInsertElement')
    }));
  });

}).call(this);
