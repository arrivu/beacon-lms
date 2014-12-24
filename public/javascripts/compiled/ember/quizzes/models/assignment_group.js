(function() {
  define(['ember-data'], function(DS) {
    var attr;

    attr = DS.attr;
    return DS.Model.extend({
      groupWeight: attr(),
      name: attr(),
      links: attr(),
      position: attr()
    });
  });

}).call(this);
