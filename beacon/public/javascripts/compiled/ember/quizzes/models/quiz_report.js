(function() {
  define(['ember-data', '../mixins/queriable_model'], function(DS, QueriableModel) {
    var attr;

    attr = DS.attr;
    return DS.Model.extend(QueriableModel, {
      quiz: DS.belongsTo('quiz', {
        async: false
      }),
      anonymous: attr(),
      includesAllVersions: attr(),
      reportType: attr(),
      createdAt: attr('date'),
      updatedAt: attr('date'),
      file: attr(),
      progress: attr(),
      progressUrl: attr(),
      url: attr()
    });
  });

}).call(this);
