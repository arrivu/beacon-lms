(function() {
  define(['i18n!react_files', 'react'], function(I18n, React) {
    var LoadingIndicator;

    return LoadingIndicator = React.createClass({
      displayName: 'LoadingIndicator',
      render: function() {
        var style;

        style = {};
        if (!this.props.isLoading) {
          style.display = 'none';
        }
        return React.DOM.div({
          style: style,
          className: 'paginatedView-loading',
          role: 'status',
          'aria-live': 'polite'
        }, I18n.t('loading_more_results', 'Loading more results...'));
      }
    });
  });

}).call(this);
