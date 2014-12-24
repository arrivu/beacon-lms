(function() {
  define(['jquery', 'compiled/collections/PaginatedCollection'], function($, PaginatedCollection) {
    var loadQuizOverrides, setQuizOverrides;

    setQuizOverrides = function(pool, quizId, overrides) {
      var quiz;

      quiz = pool.filter(function(quiz) {
        return quiz.get('id') === quizId;
      }).pop();
      if (!quiz) {
        console.warn("Unable to set assignment overrides;\nquiz with id %s could not be found", '' + quizId);
        return false;
      }
      quiz.set({
        base: overrides.due_dates[0].base,
        due_at: overrides.due_dates[0].due_at,
        lock_at: overrides.due_dates[0].lock_at,
        unlock_at: overrides.due_dates[0].unlock_at,
        all_dates: overrides.all_dates
      }, {
        silent: true
      });
      quiz.initAllDates();
      return quiz.set('loadingOverrides', false);
    };
    return loadQuizOverrides = function(quizModels, fetchEndpoint, perPage) {
      var fetchAll, overrideCollection, process;

      if (perPage == null) {
        perPage = 20;
      }
      overrideCollection = new PaginatedCollection();
      overrideCollection._defaultUrl = function() {
        return fetchEndpoint;
      };
      overrideCollection.parse = function(resp) {
        return resp.quiz_assignment_overrides;
      };
      process = setQuizOverrides.bind(null, quizModels);
      fetchAll = function(page, service) {
        if (page == null) {
          page = void 0;
        }
        if (service == null) {
          service = $.Deferred();
        }
        overrideCollection.fetch({
          page: page,
          reset: true,
          data: {
            per_page: perPage
          }
        }).then(function(resp) {
          overrideCollection.forEach(function(override) {
            return process(override.get('quiz_id'), {
              due_dates: override.get('due_dates'),
              all_dates: override.get('all_dates')
            });
          });
          if (overrideCollection.canFetch('next')) {
            return fetchAll('next', service);
          } else {
            return service.resolve();
          }
        });
        return service;
      };
      quizModels.forEach(function(quiz) {
        return quiz.set('loadingOverrides', true);
      });
      return fetchAll().then(function() {
        overrideCollection.reset([], {
          silent: true
        });
        return overrideCollection = null;
      });
    };
  });

}).call(this);
