(function() {
  define(['i18n!upload_drop_zone', 'react', 'compiled/react/shared/utils/withReactDOM', '../modules/FileOptionsCollection', 'compiled/models/Folder'], function(I18n, React, withReactDOM, FileOptionsCollection, Folder) {
    var UploadDropZone;

    return UploadDropZone = React.createClass({
      displayName: 'UploadDropZone',
      propTypes: {
        currentFolder: React.PropTypes.instanceOf(Folder)
      },
      getInitialState: function() {
        return {
          active: false
        };
      },
      componentDidMount: function() {
        this.getParent().addEventListener('dragenter', this.onParentDragEnter);
        document.addEventListener('dragenter', this.killWindowDropDisplay);
        document.addEventListener('dragover', this.killWindowDropDisplay);
        return document.addEventListener('drop', this.killWindowDrop);
      },
      componentWillUnmount: function() {
        this.getParent().removeEventListener('dragenter', this.onParentDragEnter);
        document.removeEventListener('dragenter', this.killWindowDropDisplay);
        document.removeEventListener('dragover', this.killWindowDropDisplay);
        return document.removeEventListener('drop', this.killWindowDrop);
      },
      onDragEnter: function(e) {
        if (this.shouldAcceptDrop(e.dataTransfer.types)) {
          if (!this.state.active) {
            this.setState({
              active: true
            });
          }
          e.dataTransfer.dropEffect = 'copy';
          e.preventDefault();
          e.stopPropagation();
          return false;
        } else {
          return true;
        }
      },
      onDragLeave: function(e) {
        return this.setState({
          active: false
        });
      },
      onDrop: function(e) {
        FileOptionsCollection.setFolder(this.props.currentFolder);
        FileOptionsCollection.setOptionsFromFiles(e.dataTransfer.files, true);
        this.setState({
          active: false
        });
        e.preventDefault();
        e.stopPropagation();
        return false;
      },
      onParentDragEnter: function(e) {
        if (this.shouldAcceptDrop(e.dataTransfer.types)) {
          if (!this.state.active) {
            return this.setState({
              active: true
            });
          }
        }
      },
      killWindowDropDisplay: function(e) {
        if (e.target !== this.getParent()) {
          return e.preventDefault();
        }
      },
      killWindowDrop: function(e) {
        return e.preventDefault();
      },
      shouldAcceptDrop: function(types) {
        var found, i, type;

        i = 0;
        found = false;
        while (i < types.length) {
          type = types[i];
          found = type === 'Files';
          if (found) {
            break;
          }
          i++;
        }
        return found;
      },
      getParent: function() {
        return this.getDOMNode().parentElement;
      },
      buildNonActiveDropZone: function() {
        return div({
          className: 'UploadDropZone'
        }, '');
      },
      buildInstructions: function() {
        return div({
          className: 'UploadDropZone__instructions'
        }, i({
          className: 'icon-upload UploadDropZone__instructions--icon-upload'
        }), div({}, p({
          className: 'UploadDropZone__instructions--drag'
        }, I18n.t('drop_to_upload', 'Drop items to upload'))));
      },
      buildDropZone: function() {
        return div({
          className: 'UploadDropZone UploadDropZone__active',
          onDrop: this.onDrop,
          onDragLeave: this.onDragLeave,
          onDragOver: this.onDragEnter,
          onDragEnter: this.onDragEnter
        }, this.buildInstructions());
      },
      render: withReactDOM(function() {
        if (this.state.active) {
          return this.buildDropZone();
        } else {
          return this.buildNonActiveDropZone();
        }
      })
    });
  });

}).call(this);
