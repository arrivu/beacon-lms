(function() {
  define(['ic-ajax', 'ember', 'ember-data', '../start_app', '../environment_setup', '../../mixins/queriable_model'], function(ajax, _arg, _arg1, startApp, env, QueriableModel) {
    var App, Model, run, subject;

    run = _arg.run;
    Model = _arg1.Model;
    App = null;
    subject = null;
    module("QueriableModel", {
      setup: function() {
        App = startApp();
        App.reopen({
          SpecModel: Model.extend(QueriableModel, {}),
          SpecModelAdapter: App.ApplicationAdapter.extend({
            ajax: function(url, method) {
              return ajax.request({
                url: url,
                type: method
              });
            },
            buildURL: function(type, id) {
              if (!id) {
                return this._super(type, id);
              }
              return this.container.lookup('store:main').getById('specModel', id).get('url');
            }
          })
        });
        return run(function() {
          var container, store;

          container = App.__container__;
          store = container.lookup('store:main');
          return subject = store.createRecord('specModel', {
            id: 1
          });
        });
      },
      teardown: function() {
        return run(App, 'destroy');
      }
    });
    asyncTest('#reload: it uses the query parameters', function() {
      ajax.defineFixture('/api/v1/courses/1/spec_models/1?page=1', {
        textStatus: 'success',
        response: {
          id: 1,
          fruit: 'banana'
        }
      });
      return run(function() {
        var svc, url;

        url = '/api/v1/courses/1/spec_models/1';
        subject.set('url', url);
        svc = subject.reload({
          'page': 1
        });
        svc.then(function() {
          return ok(true, "it appended ?page=1 to the url");
        });
        svc["catch"](function() {
          return ok(false, "it didn't append the query params");
        });
        return svc["finally"](function() {
          return start();
        });
      });
    });
    return asyncTest('#reload: it restores the original url', function() {
      ajax.defineFixture('/api/v1/courses/1/spec_models/1?page=1', {
        textStatus: 'success',
        response: {
          id: 1,
          fruit: 'banana'
        }
      });
      return run(function() {
        var svc, url;

        url = '/api/v1/courses/1/spec_models/1';
        subject.set('url', url);
        svc = subject.reload({
          'page': 1
        });
        svc.then(function() {
          return equal(subject.get('url'), url, "it restores the URL after reloading");
        });
        svc["catch"](function() {
          return ok(false, "it didn't append the query params");
        });
        return svc["finally"](function() {
          return start();
        });
      });
    });
  });

}).call(this);
