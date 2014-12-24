(function() {
  define(['ember-data'], function(DS) {
    var AssignmentOverride, attr, belongsTo, hasMany;

    attr = DS.attr, hasMany = DS.hasMany, belongsTo = DS.belongsTo;
    return AssignmentOverride = DS.Model.extend({
      dueAt: attr('date'),
      lockAt: attr('date'),
      sectionID: attr(),
      unlockAt: attr('date'),
      title: attr()
    });
  });

}).call(this);
