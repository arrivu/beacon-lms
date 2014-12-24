(function() {
  define(['ember', 'ember-data'], function(Ember, DS) {
    var Group, attr;

    attr = DS.attr;
    Group = DS.Model.extend({
      name: attr(),
      join_level: attr(),
      users: attr()
    });
    return Group.reopenClass({
      url: function() {
        return "/api/v1";
      }
    });
  });

}).call(this);
