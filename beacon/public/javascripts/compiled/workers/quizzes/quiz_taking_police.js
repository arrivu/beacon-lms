(function() {
  var stopwatch;

  stopwatch = null;

  self.addEventListener('message', function(e) {
    var message;

    message = e.data || {};
    switch (message.code) {
      case 'startStopwatch':
        return stopwatch = setInterval(function() {
          return self.postMessage('stopwatchTick');
        }, message.frequency || 1000);
      case 'stop':
        return clearInterval(stopwatch);
    }
  }, false);

}).call(this);
