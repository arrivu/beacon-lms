(function(){define(["react","timezone","underscore","jquery","jquery.instructure_date_and_time"],function(e,t,i,r){var n,a;return a=function(){var n,a;return n=this.props.datetime,null==n?e.DOM.time():(i.isDate(n)||(n=t.parse(n)),a=r.fudgeDateForProfileTimezone(n),this.transferPropsTo(e.DOM.time({title:r.datetimeString(n),dateTime:n.toISOString()},e.DOM.span({className:"visible-desktop"},r.friendlyDatetime(a)),e.DOM.span({className:"hidden-desktop"},a.toLocaleDateString()))))},n=e.createClass({displayName:"FriendlyDatetime",propTypes:{datetime:e.PropTypes.oneOfType([e.PropTypes.string,e.PropTypes.instanceOf(Date)])},render:i.memoize(a,function(){return this.props.datetime})})})}).call(this);