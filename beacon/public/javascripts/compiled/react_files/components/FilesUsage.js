(function() {
  define(['i18n!react_files', 'react', 'compiled/util/friendlyBytes', 'compiled/react/shared/utils/withReactDOM', './ProgressBar', '../modules/customPropTypes'], function(I18n, React, friendlyBytes, withReactDOM, ProgressBar, customPropTypes) {
    var FilesUsage;

    return FilesUsage = React.createClass({
      displayName: 'FilesUsage',
      propTypes: {
        contextType: customPropTypes.contextType.isRequired,
        contextId: customPropTypes.contextId.isRequired
      },
      update: function() {
        var _this = this;

        return $.get("/api/v1/" + this.props.contextType + "/" + this.props.contextId + "/files/quota", function(data) {
          return _this.setState(data);
        });
      },
      componentDidMount: function() {
        this.update();
        return this.interval = setInterval(this.update, 1000 * 60 * 5);
      },
      componentWillUnmount: function() {
        return clearInterval(this.interval);
      },
      render: withReactDOM(function() {
        var _ref, _ref1;

        return this.transferPropsTo(div({}, this.state ? div({
          className: 'grid-row ef-quota-usage'
        }, div({
          className: 'col-xs'
        }, ProgressBar({
          progress: this.state.quota_used / this.state.quota * 100
        })), div({
          className: 'col-xs'
        }, I18n.t('usage_details', '%{quota_used} of %{quota}', {
          quota_used: friendlyBytes((_ref = this.state) != null ? _ref.quota_used : void 0),
          quota: friendlyBytes((_ref1 = this.state) != null ? _ref1.quota : void 0)
        }))) : void 0));
      })
    });
  });

}).call(this);
