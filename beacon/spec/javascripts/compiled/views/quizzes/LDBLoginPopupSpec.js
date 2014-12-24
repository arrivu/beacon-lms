(function() {
  define(["underscore", "jquery", "compiled/views/quizzes/LDBLoginPopup"], function(_, $, LDBLoginPopup, FormMarkup) {
    var popup, root, server, whnd;

    whnd = void 0;
    popup = void 0;
    server = void 0;
    root = this;
    module("LDBLoginPopup", {
      setup: function() {
        return popup = new LDBLoginPopup({
          sticky: false
        });
      },
      teardown: function() {
        if (whnd && !whnd.closed) {
          whnd.close();
          whnd = null;
        }
        if (server) {
          return server.restore();
        }
      }
    });
    test("it should exec", 1, function() {
      whnd = popup.exec();
      return ok(whnd, "popup window is created");
    });
    test("it should inject styleSheets", 1, function() {
      whnd = popup.exec();
      return strictEqual($(whnd.document).find("link[href]").length, $(root.document).find("link[href]").length);
    });
    test("it should trigger the @open and @close events", function() {
      var onClose, onOpen;

      onOpen = sinon.spy();
      onClose = sinon.spy();
      popup.on("open", onOpen);
      popup.on("close", onClose);
      whnd = popup.exec();
      ok(onOpen.called, "@open handler gets called");
      whnd.close();
      return ok(onClose.called, "@close handler gets called");
    });
    test("it should close after a successful login", 1, function() {
      var onClose;

      onClose = sinon.spy();
      server = sinon.fakeServer.create();
      server.respondWith("POST", /login/, [200, {}, "OK"]);
      popup.on("close", onClose);
      popup.on("open", function(e, document) {
        $(document).find(".btn-primary").click();
        server.respond();
        return ok(onClose.called, "popup should be closed");
      });
      return whnd = popup.exec();
    });
    test("it should trigger the @login_success event", 1, function() {
      var onSuccess;

      onSuccess = sinon.spy();
      server = sinon.fakeServer.create();
      server.respondWith("POST", /login/, [200, {}, "OK"]);
      popup.on("login_success", onSuccess);
      popup.on("open", function(e, document) {
        $(document).find(".btn-primary").click();
        server.respond();
        return ok(onSuccess.called, "@login_success handler gets called");
      });
      return whnd = popup.exec();
    });
    test("it should trigger the @login_failure event", 1, function() {
      var onFailure;

      onFailure = sinon.spy();
      server = sinon.fakeServer.create();
      server.respondWith("POST", /login/, [401, {}, "Bad Request"]);
      popup.on("login_failure", onFailure);
      popup.on("open", function(e, document) {
        $(document).find(".btn-primary").click();
        server.respond();
        return ok(onFailure.called, "@login_failure handler gets called");
      });
      return whnd = popup.exec();
    });
    return asyncTest("it should pop back in if student closes it", 5, function() {
      var latestWindow, onClose, onFailure, onOpen, openStub, originalOpen;

      latestWindow = void 0;
      onFailure = sinon.spy();
      onOpen = sinon.spy();
      onClose = sinon.spy();
      originalOpen = window.open;
      openStub = sinon.stub(window, "open", function() {
        return latestWindow = originalOpen.apply(this, arguments);
      });
      server = sinon.fakeServer.create();
      server.respondWith("POST", /login/, [401, {}, "Bad Request"]);
      popup = new LDBLoginPopup({
        sticky: true
      });
      popup.on("login_failure", onFailure);
      popup.on("open", onOpen);
      popup.on("close", onClose);
      popup.one("open", function(e, document) {
        $(document).find(".btn-primary").click();
        server.respond();
        ok(onFailure.calledOnce, "logged out by passing in bad credentials");
        _.defer(function() {
          return whnd.close();
        });
        return popup.one("close", function() {
          return _.defer(function() {
            start();
            ok(onOpen.calledTwice, "popup popped back in");
            ok(onClose.calledOnce, "popup closed");
            popup.off("close.sticky");
            latestWindow.close();
            ok(onClose.calledTwice, "popup closed for good");
            return openStub.restore();
          });
        });
      });
      whnd = popup.exec();
      return ok(onOpen.called, "popup opened");
    });
  });

}).call(this);
