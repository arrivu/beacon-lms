(function() {
  define(['ember', 'ember-data'], function(Ember, DS) {
    var Membership;

    return Membership = DS.Model.extend({
      user_id: DS.attr('number'),
      group_id: DS.attr('number')
    });
  });

}).call(this);
