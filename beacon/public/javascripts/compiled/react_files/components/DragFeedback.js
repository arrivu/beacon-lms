(function() {
  define(['react', './FilesystemObjectThumbnail', '../modules/customPropTypes'], function(React, FilesystemObjectThumbnail, customPropTypes) {
    var DragFeedback, MAX_THUMBNAILS_TO_SHOW;

    MAX_THUMBNAILS_TO_SHOW = 10;
    return DragFeedback = React.createClass({
      displayName: 'DragFeedback',
      propTypes: {
        itemsToDrag: React.PropTypes.arrayOf(customPropTypes.filesystemObject).isRequired,
        pageX: React.PropTypes.number.isRequired,
        pageY: React.PropTypes.number.isRequired
      },
      render: function() {
        var _this = this;

        return React.DOM.div({
          className: 'DragFeedback',
          style: {
            transform: "translate(" + (this.props.pageX + 6) + "px, " + (this.props.pageY + 6) + "px)"
          }
        }, this.props.itemsToDrag.slice(0, MAX_THUMBNAILS_TO_SHOW).map(function(model, index) {
          return FilesystemObjectThumbnail({
            model: model,
            key: model.id,
            style: {
              left: 10 + index * 5 - index,
              top: 10 + index * 5 - index
            }
          });
        }), React.DOM.span({
          className: 'badge badge-important'
        }, this.props.itemsToDrag.length));
      }
    });
  });

}).call(this);
