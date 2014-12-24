(function() {
  define(['react', 'jquery', 'compiled/react_files/components/UploadButton', 'compiled/react_files/modules/FileOptionsCollection'], function(React, $, UploadButton, FileOptionsCollection) {
    var Simulate;

    Simulate = React.addons.TestUtils.Simulate;
    module('UploadButton', {
      setup: function() {
        var props;

        props = {
          currentFolder: {
            files: {
              models: []
            }
          }
        };
        return this.button = React.renderComponent(UploadButton(props), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.button.getDOMNode().parentNode);
      }
    });
    test('hides actual file input form', function() {
      var form;

      form = this.button.refs.form.getDOMNode();
      return ok($(form).attr('class').match(/hidden/), 'is hidden from user');
    });
    return test('only enques uploads when state.newUploads is true', function() {
      sinon.spy(this.button, 'queueUploads');
      this.button.state.nameCollisions.length = 0;
      this.button.state.resolvedNames.length = 1;
      FileOptionsCollection.state.newOptions = false;
      this.button.componentDidUpdate();
      equal(this.button.queueUploads.callCount, 0);
      FileOptionsCollection.state.newOptions = true;
      this.button.componentDidUpdate();
      equal(this.button.queueUploads.callCount, 1);
      return this.button.queueUploads.restore();
    });
  });

}).call(this);
