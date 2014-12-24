(function() {
  define(['react', 'compiled/react/shared/utils/withReactDOM'], function(React, withReactDOM) {
    var DialogContent;

    return DialogContent = React.createClass({
      render: withReactDOM(function() {
        return div({}, this.props.children);
      })
    });
  });

}).call(this);
