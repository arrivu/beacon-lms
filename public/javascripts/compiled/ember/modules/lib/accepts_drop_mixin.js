(function() {
  define(['ember'], function(Ember) {
    return Ember.Mixin.create({
      accepts: [],
      validateDragEvent: function(event) {
        var accepts, transfer, type, _i, _len;

        accepts = this.get('accepts');
        transfer = event.dataTransfer.types;
        for (_i = 0, _len = accepts.length; _i < _len; _i++) {
          type = accepts[_i];
          if (transfer.contains(type)) {
            this.set('accept-type', type);
            return true;
          }
        }
        return false;
      },
      resetAcceptType: (function() {
        return this.set('accept-type', null);
      }).on('dragLeave'),
      acceptDrop: function() {
        var type;

        type = this.get('accept-type');
        this["accept:" + type](event, event.dataTransfer.getData(type));
        return this.set('accept-type', null);
      }
    });
  });

}).call(this);
