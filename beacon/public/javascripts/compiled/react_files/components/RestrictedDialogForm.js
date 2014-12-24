(function() {
  define(['jquery', 'react', 'compiled/react/shared/utils/withReactDOM', 'i18n!restrict_student_access', '../modules/customPropTypes', 'jquery.instructure_date_and_time', 'jquery.instructure_forms'], function($, React, withReactDOM, I18n, customPropTypes) {
    var RestrictedDialogForm;

    return RestrictedDialogForm = React.createClass({
      displayName: 'RestrictedDialogForm',
      propTypes: {
        closeDialog: React.PropTypes.func.isRequired,
        models: React.PropTypes.arrayOf(customPropTypes.filesystemObject)
      },
      getInitialState: function() {
        var allAreEqual, initialState, permissionAttributes,
          _this = this;

        permissionAttributes = ['hidden', 'locked', 'lock_at', 'unlock_at'];
        initialState = {};
        allAreEqual = this.props.models.every(function(model) {
          return permissionAttributes.every(function(attribute) {
            return _this.props.models[0].get(attribute) === model.get(attribute) || (!_this.props.models[0].get(attribute) && !model.get(attribute));
          });
        });
        if (allAreEqual) {
          initialState = this.props.models[0].pick(permissionAttributes);
          initialState.selectedOption = initialState.locked ? 'unpublished' : initialState.hidden ? 'link_only' : initialState.lock_at || initialState.unlock_at ? 'date_range' : 'published';
        }
        return initialState;
      },
      componentDidMount: function() {
        $([this.refs.unlock_at.getDOMNode(), this.refs.lock_at.getDOMNode()]).datetime_field();
        return $(this.getDOMNode()).find(':tabbable:first').focus();
      },
      extractFormValues: function() {
        return {
          hidden: this.state.selectedOption === 'link_only',
          unlock_at: this.state.selectedOption === 'date_range' && this.refs.unlock_at.getDOMNode().value || '',
          lock_at: this.state.selectedOption === 'date_range' && this.refs.lock_at.getDOMNode().value || '',
          locked: this.state.selectedOption === 'unpublished'
        };
      },
      handleSubmit: function(event) {
        var attributes, dfd, promises,
          _this = this;

        event.preventDefault();
        attributes = this.extractFormValues();
        promises = this.props.models.map(function(item) {
          return item.save({}, {
            attrs: attributes
          });
        });
        dfd = $.when.apply($, promises);
        dfd.done(function() {
          return _this.props.closeDialog();
        });
        return $(this.refs.dialogForm.getDOMNode()).disableWhileLoading(dfd);
      },
      render: withReactDOM(function() {
        var _ref, _ref1,
          _this = this;

        return form({
          ref: 'dialogForm',
          onSubmit: this.handleSubmit,
          className: 'form-horizontal form-dialog permissions-dialog-form',
          title: I18n.t("title.limit_student_access", "Permissions")
        }, div({
          className: "radio"
        }, label({}, input({
          ref: 'publishInput',
          type: 'radio',
          name: 'permissions',
          checked: this.state.selectedOption === 'published',
          onChange: function(event) {
            return _this.setState({
              selectedOption: 'published'
            });
          }
        }, I18n.t("options.publish.description", "Publish")))), div({
          className: "radio"
        }, label({}, input({
          ref: 'unpublishInput',
          type: 'radio',
          name: 'permissions',
          checked: this.state.selectedOption === 'unpublished',
          onChange: function(event) {
            return _this.setState({
              selectedOption: 'unpublished'
            });
          }
        }, I18n.t("options.unpublish.description", "Unpublish")))), div({
          className: "radio"
        }, label({}, input({
          ref: 'permissionsInput',
          type: 'radio',
          name: 'permissions',
          checked: (_ref = this.state.selectedOption) === 'link_only' || _ref === 'date_range',
          onChange: function(event) {
            return _this.setState({
              selectedOption: _this.state.unlock_at ? 'date_range' : 'link_only'
            });
          }
        }, I18n.t("options.restrictedAccess.description", "Restricted Access")))), div({
          style: {
            'margin-left': '20px',
            display: ((_ref1 = this.state.selectedOption) === 'link_only' || _ref1 === 'date_range' ? 'block' : 'none')
          }
        }, div({
          className: "radio"
        }, label({}, input({
          ref: 'link_only',
          type: 'radio',
          name: 'restrict_options',
          checked: this.state.selectedOption === 'link_only',
          onChange: function(event) {
            return _this.setState({
              selectedOption: 'link_only'
            });
          }
        }, I18n.t("options.hiddenInput.description", "Only available to students with link. Not visible in student files.")))), div({
          className: "radio"
        }, label({}, input({
          ref: 'dateRange',
          type: 'radio',
          name: 'restrict_options',
          checked: this.state.selectedOption === 'date_range',
          onChange: function(event) {
            return _this.setState({
              selectedOption: 'date_range'
            });
          }
        }), I18n.t("options_2.description", "Schedule student availability"))), div({
          className: 'control-group',
          style: {
            display: (this.state.selectedOption === 'date_range' ? 'block' : 'none')
          }
        }, label({
          className: 'control-label dialog-adapter-form-calendar-label'
        }, I18n.t('label.availableFrom', 'Lock From')), div({
          className: 'controls dateSelectInputContainer'
        }, input({
          ref: 'unlock_at',
          defaultValue: this.state.unlock_at ? $.datetimeString(this.state.unlock_at) : void 0,
          className: 'form-control dateSelectInput',
          type: 'text',
          'aria-label': I18n.t('aria_label.availableFrom', 'From')
        })), div({
          className: 'control-group'
        }, label({
          className: 'control-label dialog-adapter-form-calendar-label'
        }, I18n.t('label.availableUntil', 'Lock Until')), div({
          className: 'controls dateSelectInputContainer'
        }, input({
          ref: 'lock_at',
          defaultValue: this.state.lock_at ? $.datetimeString(this.state.lock_at) : void 0,
          className: 'form-control dateSelectInput',
          type: 'text',
          'aria-label': I18n.t('aria_label.availableUntil', 'Until')
        }))))), div({
          className: "form-controls"
        }, button({
          type: 'button',
          onClick: this.props.closeDialog,
          className: "btn"
        }, I18n.t("button_text.cancel", "Cancel")), button({
          ref: 'updateBtn',
          type: "submit",
          className: "btn btn-primary",
          disabled: !this.state.selectedOption
        }, I18n.t("button_text.update", "Update"))));
      })
    });
  });

}).call(this);
