(function() {
  define(['react', 'compiled/react/shared/utils/withReactDOM'], function(React, withReactDOM) {
    var ProgressBar;

    return ProgressBar = React.createClass({
      displayName: 'ProgressBar',
      propTypes: {
        progress: React.PropTypes.number.isRequired
      },
      createWidthStyle: function() {
        return {
          width: this.props.progress + '%'
        };
      },
      render: withReactDOM(function() {
        var almostDone;

        almostDone = '';
        if (this.props.progress === 100) {
          almostDone = ' almost-done';
        }
        return div({
          ref: 'container',
          className: 'progress-bar__bar-container' + almostDone
        }, div({
          ref: 'bar',
          className: 'progress-bar__bar' + almostDone,
          role: 'progressbar',
          'aria-valuenow': this.props.progress,
          'aria-valuemin': 0,
          'aria-valuemax': 100,
          style: this.createWidthStyle()
        }));
      })
    });
  });

}).call(this);
