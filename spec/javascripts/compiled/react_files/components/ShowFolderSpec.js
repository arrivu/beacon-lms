(function() {
  define(['underscore', 'react', 'react-router', 'compiled/react_files/components/ShowFolder', 'compiled/models/Folder', 'compiled/react_files/components/FolderChild', 'compiled/react_files/routes'], function(_, React, Router, ShowFolder, Folder, FolderChild, routes) {
    module('ShowFolder', {
      setup: function() {
        this.$container = $('<div>').appendTo(document.body);
        return this.renderedRoutes = React.renderComponent(routes, this.$container[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.$container[0]);
      }
    });
    return asyncTest('returns empty div if there is no currentFolder', function() {
      var _this = this;

      expect(1);
      return this.renderedRoutes.dispatch('/courses/999/files', function() {
        equal(_this.$container.find('.ef-directory [role="grid"]').length, 0, "doesn't render the grid");
        return start();
      });
    });
  });

}).call(this);
