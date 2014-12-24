(function() {
  define(['ember', '../register'], function(Ember, register) {
    return register('component', 'c-file-input', Ember.TextField.extend({
      type: 'file',
      setFiles: (function(event) {
        return this.set('files', [].slice.call(event.target.files, 0));
      }).on('change')
    }));
  });

}).call(this);
