(function() {
  define(['i18n!react_files', 'jquery', 'react', 'compiled/react/shared/utils/withReactDOM', 'compiled/fn/preventDefault', 'compiled/views/FileBrowserView', '../modules/customPropTypes', '../utils/moveStuff'], function(I18n, $, React, withReactDOM, preventDefault, FileBrowserView, customPropTypes, moveStuff) {
    var MoveDialog;

    return MoveDialog = React.createClass({
      displayName: 'MoveDialog',
      propTypes: {
        rootFoldersToShow: React.PropTypes.arrayOf(customPropTypes.folder).isRequired,
        thingsToMove: React.PropTypes.arrayOf(customPropTypes.filesystemObject).isRequired,
        closeDialog: React.PropTypes.func.isRequired
      },
      getInitialState: function() {
        return {
          destinationFolder: null
        };
      },
      componentDidMount: function() {
        var _ref;

        this.props.setTitle(I18n.t('move_question', {
          one: "Where would you like to move %{item}?",
          other: "Where would you like to move these %{count} items?"
        }, {
          count: this.props.thingsToMove.length,
          item: (_ref = this.props.thingsToMove[0]) != null ? _ref.displayName() : void 0
        }));
        return new FileBrowserView({
          onlyShowFolders: true,
          rootFoldersToShow: this.props.rootFoldersToShow,
          onClick: this.onSelectFolder
        }).render().$el.appendTo(this.refs.FolderTreeHolder.getDOMNode()).find(':tabbable:first').focus();
      },
      onSelectFolder: function(event, folder) {
        event.preventDefault();
        return this.setState({
          destinationFolder: folder
        });
      },
      submit: function() {
        var promise;

        promise = moveStuff(this.props.thingsToMove, this.state.destinationFolder);
        promise.then(this.props.closeDialog);
        return $(this.refs.form.getDOMNode()).disableWhileLoading(promise);
      },
      render: withReactDOM(function() {
        return form({
          ref: 'form',
          className: 'form-dialog',
          onSubmit: preventDefault(this.submit)
        }, div({
          className: 'form-dialog-content'
        }, div({
          ref: 'FolderTreeHolder'
        })), div({
          className: 'form-controls'
        }, button({
          type: 'button',
          className: 'btn',
          onClick: this.props.closeDialog
        }, I18n.t('cancel', 'Cancel')), button({
          type: 'submit',
          disabled: !this.state.destinationFolder,
          className: 'btn btn-primary',
          'data-text-while-loading': I18n.t('moving', 'Moving...')
        }, I18n.t('move', 'Move'))));
      })
    });
  });

}).call(this);
