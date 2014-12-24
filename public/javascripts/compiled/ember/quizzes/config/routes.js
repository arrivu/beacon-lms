(function() {
  define(function() {
    var route;

    return route = function() {
      this.route('quizzes', {
        path: '/'
      }, function() {
        return this.route('index', {
          path: '/'
        });
      });
      return this.resource('quiz', {
        path: '/:quiz_id'
      }, function() {
        this.route('show', {
          path: '/'
        });
        this.route('preview', {
          path: '/preview'
        });
        this.route('moderate', {
          path: '/moderate'
        });
        return this.route('statistics', {
          path: '/statistics'
        });
      });
    };
  });

}).call(this);
