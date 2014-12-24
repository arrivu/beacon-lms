(function() {
  define(['jquery', 'react', 'compiled/react/shared/utils/withReactDOM', 'i18n!broccoli_cloud', 'compiled/models/FilesystemObject', './RestrictedDialogForm', '../modules/customPropTypes', 'compiled/jquery.rails_flash_notifications'], function($, React, withReactDOM, I18n, FilesystemObject, RestrictedDialogForm, customPropTypes) {
    var PublishCloud;

    return PublishCloud = React.createClass({
      displayName: 'PublishCloud',
      propTypes: {
        model: customPropTypes.filesystemObject,
        userCanManageFilesForContext: React.PropTypes.bool.isRequired
      },
      getInitialState: function() {
        return this.extractStateFromModel(this.props.model);
      },
      componentWillMount: function() {
        var setState,
          _this = this;

        setState = function(model) {
          return _this.setState(_this.extractStateFromModel(model));
        };
        return this.props.model.on('change', setState, this);
      },
      componentWillUnmount: function() {
        return this.props.model.off(null, null, this);
      },
      extractStateFromModel: function(model) {
        return {
          published: !model.get('locked'),
          restricted: !!model.get('lock_at') || !!model.get('unlock_at'),
          hidden: !!model.get('hidden')
        };
      },
      togglePublishedState: function() {
        return this.setState({
          published: !this.state.published,
          restricted: false,
          hidden: false
        });
      },
      openRestrictedDialog: function() {
        var $dialog;

        $dialog = $('<div>').dialog({
          title: I18n.t("title.permissions", "Editing permissions for: %{name}", {
            name: this.props.model.displayName()
          }),
          width: 400,
          close: function() {
            React.unmountComponentAtNode(this);
            return $(this).remove();
          }
        });
        return React.renderComponent(RestrictedDialogForm({
          models: [this.props.model],
          closeDialog: function() {
            return $dialog.dialog('close');
          }
        }), $dialog[0]);
      },
      handleClick: function(event) {
        event.preventDefault();
        return this.openRestrictedDialog();
      },
      render: withReactDOM(function() {
        if (this.props.userCanManageFilesForContext) {
          if (this.state.published && this.state.restricted) {
            return button({
              'data-tooltip': 'left',
              onClick: this.handleClick,
              ref: "publishCloud",
              className: 'btn-link published-status restricted',
              title: I18n.t('restricted_title', "Available from %{from_date} until %{until_date}", {
                from_date: $.datetimeString(this.props.model.get('unlock_at')),
                until_date: $.datetimeString(this.props.model.get('lock_at'))
              }),
              'aria-label': I18n.t('restricted_title', "Available from %{from_date} until %{until_date}", {
                from_date: $.datetimeString(this.props.model.get('unlock_at')),
                until_date: $.datetimeString(this.props.model.get('lock_at'))
              })
            }, i({
              className: 'icon-calendar-day'
            }));
          } else if (this.state.published && this.state.hidden) {
            return button({
              'data-tooltip': 'left',
              onClick: this.handleClick,
              ref: "publishCloud",
              className: 'btn-link published-status hiddenState',
              title: I18n.t('hidden_title', 'Hidden. Available with a link'),
              'aria-label': I18n.t('label.hidden', 'Hidden. Available with a link')
            }, i({
              className: 'icon-paperclip'
            }));
          } else if (this.state.published) {
            return button({
              'data-tooltip': 'left',
              onClick: this.handleClick,
              ref: "publishCloud",
              className: 'btn-link published-status published',
              title: I18n.t('published_title', 'Published'),
              'aria-label': I18n.t('label.published', 'Published')
            }, i({
              className: 'icon-publish'
            }));
          } else {
            return button({
              'data-tooltip': 'left',
              onClick: this.handleClick,
              ref: "publishCloud",
              className: 'btn-link published-status unpublished',
              title: I18n.t('unpublished_title', 'Unpublished'),
              'aria-label': I18n.t('label.unpublished', 'Unpublished')
            }, i({
              className: 'icon-unpublish'
            }));
          }
        } else {
          if (this.state.published && this.state.restricted) {
            return div({
              'style': {
                'margin-right': '12px'
              },
              'data-tooltip': 'left',
              ref: "publishCloud",
              className: 'published-status restricted',
              title: I18n.t('restricted_title', "Available from %{from_date} until %{until_date}", {
                from_date: $.datetimeString(this.props.model.get('unlock_at')),
                until_date: $.datetimeString(this.props.model.get('lock_at'))
              }),
              'aria-label': I18n.t('restricted_title', "Available from %{from_date} until %{until_date}", {
                from_date: $.datetimeString(this.props.model.get('unlock_at')),
                until_date: $.datetimeString(this.props.model.get('lock_at'))
              })
            }, i({
              className: 'icon-calendar-day'
            }));
          } else {
            return div({
              'style': {
                width: 28,
                height: 36
              }
            });
          }
        }
      })
    });
  });

}).call(this);
