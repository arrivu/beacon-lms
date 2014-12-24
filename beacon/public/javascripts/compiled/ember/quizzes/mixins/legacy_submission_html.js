(function() {
  define(['ember', '../shared/ic-ajax-jsonapi'], function(Ember, ajax) {
    var PromiseObject, computed;

    computed = Ember.computed;
    PromiseObject = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);
    return Ember.Mixin.create({
      legacyQuizSubmissionVersionsReady: computed.and('quizSubmissionVersionsHtml', 'didLoadQuizSubmissionVersionsHtml'),
      legacyQuizSubmissionReady: computed.and('quizSubmissionHtml', 'didLoadQuizSubmissionHtml'),
      quizSubmissionHtml: (function() {
        var promise,
          _this = this;

        promise = ajax({
          url: this.get('quizSubmissionHtmlUrl'),
          dataType: 'html',
          contentType: 'text/html',
          headers: {
            Accept: 'text/html'
          },
          data: {
            preview: this.get('isPreview')
          }
        }).then(function(html) {
          _this.set('didLoadQuizSubmissionHtml', true);
          return {
            html: html
          };
        });
        return PromiseObject.create({
          promise: promise
        });
      }).property('quizSubmissionHtmlUrl'),
      quizSubmissionVersionsHtml: (function() {
        var promise,
          _this = this;

        if (!this.get('quizSubmissionVersionsHtmlUrl')) {
          return;
        }
        promise = ajax({
          url: this.get('quizSubmissionVersionsHtmlUrl'),
          dataType: 'html',
          contentType: 'text/html',
          headers: {
            Accept: 'text/html'
          }
        }).then(function(html) {
          _this.set('didLoadQuizSubmissionVersionsHtml', true);
          return {
            html: html
          };
        });
        return PromiseObject.create({
          promise: promise
        });
      }).property('quizSubmissionVersionsHtmlUrl')
    });
  });

}).call(this);
