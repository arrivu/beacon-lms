(function() {
  define(['ember-data', '../shared/environment', 'ic-ajax'], function(DS, env, ajax) {
    return DS.ActiveModelAdapter.extend({
      ajax: function(url, type, options) {
        options = this.ajaxOptions(url, type, options);
        return ajax.request(options);
      },
      headers: {
        'Accept': 'application/vnd.api+json'
      },
      namespace: "api/v1/courses/" + (env.get('courseId')),
      ajaxOptions: function(url, type, hash) {
        hash = this._super.apply(this, arguments);
        hash.converters = {
          "text json": function(string) {
            var payload;

            string = string.replace(/^while\(1\);/, '');
            payload = Ember.$.parseJSON(string);
            return payload;
          }
        };
        return hash;
      }
    });
  });

}).call(this);
