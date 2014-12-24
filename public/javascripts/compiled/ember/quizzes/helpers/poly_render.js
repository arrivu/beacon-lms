(function() {
  define(['ember'], function(Ember) {
    return Ember.Handlebars.helper('polyRender', function(path, model, options) {
      var hasModel, params, prefix;

      params = [];
      hasModel = arguments.length === 3;
      if (!hasModel) {
        options = model;
      }
      prefix = options.hash.prefix || '';
      params.push(prefix + path);
      options.types[0] = '';
      if (hasModel) {
        options.contexts[1] = {
          model: model
        };
        params.push('model');
      }
      params.push(options);
      return Ember.Handlebars.helpers.render.apply(this, params);
    });
  });

}).call(this);
