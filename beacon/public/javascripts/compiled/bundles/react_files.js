(function() {
  require(['react', 'compiled/react_files/routes'], function(React, routes) {
    return React.renderComponent(routes, document.getElementById('content'));
  });

}).call(this);
