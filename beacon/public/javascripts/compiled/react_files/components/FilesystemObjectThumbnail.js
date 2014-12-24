(function() {
  define(['react', '../mixins/BackboneMixin', 'compiled/models/Folder', '../modules/customPropTypes', 'compiled/util/mimeClass'], function(React, BackboneMixin, Folder, customPropTypes, mimeClass) {
    var DOM, FilesystemObjectThumbnail;

    DOM = React.DOM;
    return FilesystemObjectThumbnail = React.createClass({
      displayName: 'FilesystemObjectThumbnail',
      propTypes: {
        model: customPropTypes.filesystemObject
      },
      mixins: [BackboneMixin('model')],
      render: function() {
        var className;

        return this.transferPropsTo(this.props.model.get('thumbnail_url') ? DOM.span({
          className: 'media-object ef-thumbnail FilesystemObjectThumbnail',
          style: {
            backgroundImage: "url('" + (this.props.model.get('thumbnail_url')) + "')"
          }
        }) : (className = this.props.model instanceof Folder ? 'folder' : mimeClass(this.props.model.get('content-type')), DOM.i({
          className: 'media-object ef-big-icon FilesystemObjectThumbnail mimeClass-' + className
        })));
      }
    });
  });

}).call(this);
