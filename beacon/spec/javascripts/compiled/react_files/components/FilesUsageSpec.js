(function() {
  define(['react', 'jquery', 'compiled/react_files/components/FilesUsage'], function(React, $, FilesUsage) {
    var Simulate, filesUpdateTest;

    Simulate = React.addons.TestUtils.Simulate;
    filesUpdateTest = function(props, test) {
      this.filesUsage = React.renderComponent(FilesUsage(props), $('<div>').appendTo('body')[0]);
      test();
      return React.unmountComponentAtNode(this.filesUsage.getDOMNode().parentNode);
    };
    module('FilesUsage#update', test("makes a get request with contextType and contextId", function() {
      sinon.stub($, 'get');
      filesUpdateTest({
        contextType: 5,
        contextId: 4
      }, function() {
        this.filesUsage.update();
        return ok($.get.calledWith("/api/v1/5/4/files/quota"), "makes get request with correct params");
      });
      return $.get.restore();
    }));
    test("sets state with ajax requests returned data", function() {
      var data, server;

      data = {
        foo: 'bar'
      };
      server = sinon.fakeServer.create();
      server.respondWith("/api/v1/5/4/files/quota", [
        200, {
          'Content-Type': 'application/json'
        }, JSON.stringify(data)
      ]);
      filesUpdateTest({
        contextType: 5,
        contextId: 4
      }, function() {
        sinon.spy(this.filesUsage, 'setState');
        this.filesUsage.update();
        server.respond();
        ok(this.filesUsage.setState.calledWith(data), 'called set state with returned get request data');
        return this.filesUsage.setState.restore();
      });
      return server.restore();
    });
    return test('update called after component mounted', function() {
      return filesUpdateTest({
        contextType: 5,
        contextId: 4
      }, function() {
        sinon.stub(this.filesUsage, 'update');
        this.filesUsage.componentDidMount();
        ok(this.filesUsage.update.calledOnce, "called update after it mounted");
        return this.filesUsage.update.restore();
      });
    });
  });

}).call(this);
