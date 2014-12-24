(function() {
  define(['./jsonapi_adapter', '../shared/environment'], function(JSONAPIAdapter, env) {
    return JSONAPIAdapter.extend({
      buildURL: function(type, id) {
        var host, namespace, url;

        host = this.get('host');
        namespace = this.get('namespace');
        url = [];
        if (host) {
          url.push(host);
        }
        if (namespace) {
          url.push(namespace);
        }
        url.push('quizzes');
        url.push(env.get("quizId"));
        url.push('submissions');
        if (id) {
          url.push(id);
        }
        url = url.join('/');
        if (!host) {
          url = "/" + url;
        }
        return url;
      }
    });
  });

}).call(this);
