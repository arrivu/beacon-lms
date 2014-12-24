(function() {
  define(['ember', 'ember-data'], function(Em, DS, ajax) {
    var Model, User, alias, any, attr, belongsTo, equal, hasMany, _ref;

    _ref = Em.computed, alias = _ref.alias, equal = _ref.equal, any = _ref.any;
    belongsTo = DS.belongsTo, hasMany = DS.hasMany, Model = DS.Model, attr = DS.attr;
    return User = Model.extend({
      quizSubmissions: hasMany('quiz_submission', {
        async: false
      }),
      name: attr(),
      shortName: attr(),
      sortableName: attr(),
      sisUserID: attr(),
      sisLoginID: attr(),
      loginID: attr(),
      email: attr(),
      locale: attr(),
      lastLogin: attr('date'),
      timeZone: attr()
    });
  });

}).call(this);
