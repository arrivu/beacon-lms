(function() {
  define(['ember-data', 'underscore'], function(DS, _) {
    var QuizSerializer, mungeOverrides, mungeQuizSubmissions;

    mungeOverrides = function(payload) {
      var overrides, quizzes;

      quizzes = payload.quizzes;
      overrides = (quizzes || []).reduce(function(memo, quiz) {
        var dates;

        dates = (quiz.all_dates || []).filter(function(date) {
          return !!date.id;
        });
        delete quiz.all_dates;
        quiz.links || (quiz.links = {});
        quiz.assignment_override_ids = dates.mapBy('id');
        return memo.concat(dates);
      }, []);
      return payload.assignment_overrides = overrides;
    };
    mungeQuizSubmissions = function(payload) {
      return (payload.quizzes || []).forEach(function(quiz) {
        quiz.quiz_submission_id = quiz.links.quiz_submission;
        return delete quiz.links.quiz_submission;
      });
    };
    return QuizSerializer = DS.ActiveModelSerializer.extend({
      extractArray: function(store, primaryType, payload) {
        mungeOverrides(payload);
        mungeQuizSubmissions(payload);
        return this._super(store, primaryType, payload);
      },
      extractSingle: function(store, type, payload, id, requestType) {
        mungeOverrides(payload);
        mungeQuizSubmissions(payload);
        return this._super(store, type, payload, id, requestType);
      },
      normalizePayload: function(type, hash, prop) {
        if (hash.quizzes) {
          _(hash.quizzes).each(function(quiz) {
            var submitals;

            if (quiz.links) {
              if (quiz.links.quiz_statistics) {
                quiz.links.quiz_statistics += '?include=quiz_questions';
              }
              if (quiz.links.quiz_reports) {
                quiz.links.quiz_reports += '?includes_all_versions=true';
              }
              if (submitals = quiz.links.submitted_students || quiz.links.unsubmitted_students) {
                quiz.links.users = submitals.replace(/\?submitted=(true|false)/, '');
                quiz.links.users += '?include[]=quiz_submissions';
                return quiz.links.quiz_submissions = quiz.links.users;
              }
            }
          });
        }
        return hash;
      }
    });
  });

}).call(this);
