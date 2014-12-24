(function() {
  define(['jquery', 'react', 'compiled/react/shared/utils/withReactDOM', 'i18n!restrict_student_access', './DialogContent', './DialogButtons', 'jqueryui/dialog'], function($, React, withReactDOM, I18n, DialogContent, DialogButtons) {
    var DialogAdapter;

    return DialogAdapter = React.createClass({
      propTypes: {
        open: React.PropTypes.bool.isRequired,
        title: React.PropTypes.string
      },
      getDefaultProps: function() {
        return {
          open: false,
          modal: true,
          title: I18n.t("title.default_title", "Dialog"),
          onOpen: function() {
            return {};
          },
          onClose: function() {
            return {};
          }
        };
      },
      componentWillReceiveProps: function(newProps) {
        return this.handlePropsChanged(newProps);
      },
      handlePropsChanged: function(props) {
        var _this = this;

        if (props == null) {
          props = this.props;
        }
        this.forceBuildDialog(props);
        if (props.open) {
          this.dialog.open();
          return setTimeout(function() {
            var primary;

            primary = $(_this.node).parent().find('.btn-primary');
            if (primary) {
              return primary.focus();
            } else {
              return $(_this.node).parents('.ui-dialog').find('.ui-dialog-titlebar-close').focus();
            }
          }, 1);
        } else {
          return this.dialog.close();
        }
      },
      forceBuildDialog: function(props) {
        var buttons, content, _ref;

        content = null;
        buttons = null;
        if (React.Children.count(props.children) === 1) {
          content = props.children;
        } else {
          _ref = this.processMultipleChildren(props), content = _ref.content, buttons = _ref.buttons;
        }
        this.addContent(content);
        return this.addButtons(buttons);
      },
      processMultipleChildren: function(props) {
        var buttons, content;

        content = null;
        buttons = null;
        React.Children.forEach(props.children, function(child) {
          if (child.type === DialogContent.type) {
            content = child;
          }
          if (child.type === DialogButtons.type) {
            return buttons = child;
          }
        });
        return {
          content: content,
          buttons: buttons
        };
      },
      addContent: function(content) {
        return React.renderComponent(content, this.node);
      },
      addButtons: function(buttons) {
        var buttonSet;

        if (buttons != null) {
          buttonSet = $(this.node).parent().find('.ui-dialog-buttonset').html('').get(0);
          return React.renderComponent(buttons, buttonSet);
        } else {
          return $(this.node).parent().find('.ui-dialog-buttonpane').hide();
        }
      },
      componentWillUnmount: function() {
        return this.dialog.destroy();
      },
      componentDidMount: function() {
        var options;

        this.node = this.getDOMNode();
        options = {
          modal: this.props.modal,
          close: this.props.onClose,
          open: this.props.onOpen,
          title: this.props.title,
          autoOpen: false,
          buttons: [
            {
              text: ''
            }
          ]
        };
        this.dialog = $(this.node).dialog(options).data('dialog');
        return this.handlePropsChanged();
      },
      render: withReactDOM(function() {
        return div({});
      })
    });
  });

}).call(this);
