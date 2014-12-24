(function() {
  define(['react', 'jquery', 'compiled/react_files/components/ProgressBar'], function(React, $, ProgressBar) {
    module('ProgressBar', {
      setup: function() {
        return this.prog = React.renderComponent(ProgressBar({
          progress: 35
        }), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.prog.getDOMNode().parentNode);
      }
    });
    test('createWidthStyle returns object with correct percentage from progress', function() {
      return equal(this.prog.createWidthStyle().width, '35%');
    });
    test('sets width on progress bar', function() {
      return equal(this.prog.refs.bar.getDOMNode().style.width, '35%');
    });
    return test('shows indeterminate loader when progress is 100 but not yet complete', function() {
      var prog;

      prog = React.renderComponent(ProgressBar({
        progress: 100
      }), $('<div>').appendTo('body')[0]);
      ok(prog.refs.container.getDOMNode().className.match(/almost-done/));
      return React.unmountComponentAtNode(prog.getDOMNode().parentNode);
    });
  });

}).call(this);
