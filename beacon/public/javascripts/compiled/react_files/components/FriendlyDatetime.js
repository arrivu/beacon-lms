(function() {
  define(['react', 'timezone', 'underscore', 'jquery', 'jquery.instructure_date_and_time'], function(React, tz, _, $) {
    var FriendlyDatetime, slowRender;

    slowRender = function() {
      var datetime, fudged;

      datetime = this.props.datetime;
      if (datetime == null) {
        return React.DOM.time();
      }
      if (!_.isDate(datetime)) {
        datetime = tz.parse(datetime);
      }
      fudged = $.fudgeDateForProfileTimezone(datetime);
      return this.transferPropsTo(React.DOM.time({
        title: $.datetimeString(datetime),
        dateTime: datetime.toISOString()
      }, React.DOM.span({
        className: 'visible-desktop'
      }, $.friendlyDatetime(fudged)), React.DOM.span({
        className: 'hidden-desktop'
      }, fudged.toLocaleDateString())));
    };
    return FriendlyDatetime = React.createClass({
      displayName: 'FriendlyDatetime',
      propTypes: {
        datetime: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(Date)])
      },
      render: _.memoize(slowRender, function() {
        return this.props.datetime;
      })
    });
  });

}).call(this);
