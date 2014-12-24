(function() {
  define(['ember', 'underscore', '../shared/query_parameters'], function(Ember, _, QueryParameters) {
    var extend;

    extend = _.extend;
    return Ember.Mixin.create({
      reload: function(queryParams) {
        var baseUrl, originalParams, originalUrl, params,
          _this = this;

        originalUrl = this.get('url');
        originalParams = QueryParameters.extractParameters(originalUrl);
        baseUrl = QueryParameters.extractUrl(originalUrl);
        params = extend({}, originalParams, queryParams);
        this.set('url', QueryParameters.composeUrl(baseUrl, params));
        return this._super()["finally"](function() {
          return _this.set('url', originalUrl);
        });
      }
    });
  });

}).call(this);
