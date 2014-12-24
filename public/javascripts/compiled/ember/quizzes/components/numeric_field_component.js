(function() {
  define(['ember'], function(Ember) {
    var NumericFieldComponent;

    return NumericFieldComponent = Ember.TextField.extend({
      type: 'text',
      classNameBindings: 'isValid:valid:invalid',
      min: 0,
      max: 1440,
      allowDecimal: true,
      allowNegative: true,
      isValid: (function() {
        var intValue, rawValue;

        if (!(rawValue = this.get('value'))) {
          return true;
        }
        intValue = parseInt(rawValue);
        return rawValue && intValue >= this.get('min') && intValue <= this.get('max');
      }).property('value'),
      keyPress: function(evt) {
        var code, controlKeys, validDecimal, validNegative, validNumber;

        code = evt.which !== void 0 ? evt.which : evt.keyCode;
        controlKeys = Ember.A([0, 8, 9, 35, 36, 37, 39]);
        if (controlKeys.contains(code)) {
          return true;
        }
        validDecimal = this.get("allowDecimal") && code === 46;
        validNegative = this.get("allowNegative") && code === 45;
        validNumber = code > 47 && code < 58;
        if (!validDecimal && !validNegative && !validNumber) {
          return false;
        }
      }
    });
  });

}).call(this);
