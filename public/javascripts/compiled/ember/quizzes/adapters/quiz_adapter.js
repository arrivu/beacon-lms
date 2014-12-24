(function() {
  define(['ember', 'ember-data', 'underscore', './jsonapi_adapter', '../shared/ic-ajax-jsonapi', 'ic-ajax'], function(_arg, DS, _, JSONAPIAdapter, ajax) {
    var QuizAdapter, RSVP, urlTemplate;

    RSVP = _arg.RSVP;
    urlTemplate = function(template, page) {
      return template.replace(/\{page\}/, page);
    };
    return QuizAdapter = JSONAPIAdapter.extend({
      loadRemainingPages: function(store) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
          var page, page_count, pagination, template, urls;

          pagination = store.metadataFor('quiz').pagination;
          page = pagination.page, page_count = pagination.page_count, template = pagination.template;
          if (page === page_count) {
            resolve();
            return;
          }
          urls = (function() {
            var _i, _ref, _results;

            _results = [];
            for (page = _i = _ref = page + 1; _ref <= page_count ? _i <= page_count : _i >= page_count; page = _ref <= page_count ? ++_i : --_i) {
              _results.push(urlTemplate(template, page));
            }
            return _results;
          })();
          return RSVP.map(urls, ajax).then(function(pagesOfQuizzes) {
            var quizzes;

            quizzes = [];
            pagesOfQuizzes.forEach(function(result) {
              return quizzes = quizzes.concat(result.quizzes);
            });
            store.pushPayload('quiz', {
              quizzes: quizzes
            });
            return resolve();
          });
        });
      }
    });
  });

}).call(this);
