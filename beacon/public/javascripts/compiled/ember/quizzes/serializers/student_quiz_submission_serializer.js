(function() {
  define(['ember-data'], function(DS) {
    return DS.ActiveModelSerializer.extend({
      extractArray: function(store, type, payload) {
        payload['student_quiz_submissions'] = payload['quiz_submissions'];
        if (!payload.student_quiz_submissions) {
          payload.student_quiz_submissions = [];
        }
        delete payload['quiz_submissions'];
        return this._super(store, type, payload);
      }
    });
  });

}).call(this);
