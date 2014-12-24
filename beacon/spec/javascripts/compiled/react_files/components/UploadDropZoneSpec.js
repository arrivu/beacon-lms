(function() {
  define(['react', 'compiled/react_files/components/UploadDropZone'], function(React, UploadDropZone) {
    var Simulate, node;

    Simulate = React.addons.TestUtils.Simulate;
    node = document.querySelector('#fixtures');
    module('UploadDropZone', {
      setup: function() {
        return this.uploadZone = React.renderComponent(UploadDropZone({}), node);
      },
      teardown: function() {
        return React.unmountComponentAtNode(node);
      }
    });
    test('displays nothing by default', function() {
      var displayText;

      displayText = this.uploadZone.getDOMNode().innerHTML.trim();
      return equal(displayText, '');
    });
    test('displays dropzone when active', function() {
      this.uploadZone.setState({
        active: true
      });
      return ok(this.uploadZone.getDOMNode().querySelector('.UploadDropZone__instructions'));
    });
    return test('handles drop event on target', function() {
      var dataTransfer, n;

      sinon.stub(this.uploadZone, 'onDrop');
      this.uploadZone.setState({
        active: true
      });
      dataTransfer = {
        types: ['Files']
      };
      n = this.uploadZone.getDOMNode();
      Simulate.dragEnter(n, {
        dataTransfer: dataTransfer
      });
      Simulate.dragOver(n, {
        dataTransfer: dataTransfer
      });
      Simulate.drop(n);
      ok(this.uploadZone.onDrop.calledOnce, 'handles file drops');
      return this.uploadZone.onDrop.restore();
    });
  });

}).call(this);
