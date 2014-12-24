(function() {
  define(['jquery', 'compiled/models/File', 'Backbone'], function($, File, _arg) {
    var Model, model, server;

    Model = _arg.Model;
    server = null;
    model = null;
    module('File', {
      setup: function() {
        var $el;

        server = sinon.fakeServer.create();
        $el = $('<input type="file">');
        model = new File(null, {
          preflightUrl: '/preflight'
        });
        return model.set({
          file: $el[0]
        });
      },
      teardown: function() {
        return server.restore();
      }
    });
    test('hits the preflight and then does a saveFrd', function() {
      var stub;

      server.respondWith("POST", "/preflight", [
        200, {
          "Content-Type": "application/json"
        }, '{"upload_params": {}, "file_param": "file", "upload_url": "/upload"}'
      ]);
      stub = sinon.stub(Model.prototype, 'save');
      model.save();
      ok(!stub.called);
      server.respond();
      ok(stub.called);
      return stub.restore();
    });
    test('returns a useful deferred', function() {
      var dfrd;

      server.respondWith("POST", "/preflight", [500, {}, ""]);
      dfrd = model.save();
      equal(dfrd.state(), "pending");
      server.respond();
      return equal(dfrd.state(), "rejected");
    });
    return test('saveFrd handles attachments wrapped in array per JSON API style', function() {
      var stub;

      server.respondWith("POST", "/preflight", [
        200, {
          "Content-Type": "application/json"
        }, '{"attachments": [{"upload_url": "/upload", "upload_params": {"Policy": "TEST"}, "file_param": "file"}]}'
      ]);
      stub = sinon.stub(Model.prototype, 'save');
      model.save();
      server.respond();
      strictEqual(model.get("Policy"), "TEST");
      return stub.restore();
    });
  });

}).call(this);
