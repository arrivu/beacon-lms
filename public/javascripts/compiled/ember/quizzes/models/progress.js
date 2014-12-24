(function() {
  define(['ember', 'ember-data'], function(_arg, _arg1) {
    var Deferred, Model, attr;

    Deferred = _arg.Deferred;
    Model = _arg1.Model, attr = _arg1.attr;
    return Model.extend({
      tag: attr('string'),
      completion: attr('number'),
      workflowState: attr('string'),
      message: attr('string'),
      createdAt: attr('date'),
      updatedAt: attr('date'),
      trackCompletion: function(pollingInterval) {
        var service;

        service = new Deferred();
        Ember.run.later(this, function() {
          var poll, timeout,
            _this = this;

          poll = null;
          timeout = null;
          $(window).on('beforeunload', function() {
            return clearTimeout(timeout);
          });
          poll = function() {
            return _this.reload().then(function() {
              if (_this.get('workflowState') === 'failed') {
                return service.reject();
              } else if (_this.get('workflowState') === 'completed') {
                return service.resolve();
              } else {
                return timeout = setTimeout(poll, pollingInterval || 1000);
              }
            });
          };
          return poll();
        });
        return service;
      }
    });
  });

}).call(this);
