(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/views/content_migrations/MigrationConverterView'], function(Backbone, MigrationConverterView) {
    var SomeBackboneView, _ref;

    SomeBackboneView = (function(_super) {
      __extends(SomeBackboneView, _super);

      function SomeBackboneView() {
        _ref = SomeBackboneView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SomeBackboneView.prototype.className = 'someViewRendered';

      SomeBackboneView.prototype.template = function() {
        return '<div id="rendered">Rendered</div>';
      };

      return SomeBackboneView;

    })(Backbone.View);
    module('MigrationConverterView', {
      setup: function() {
        this.migrationConverterView = new MigrationConverterView({
          selectOptions: [
            {
              id: 'some_converter',
              label: 'Some Converter'
            }
          ],
          progressView: new Backbone.View
        });
        return $('#fixtures').append(this.migrationConverterView.render().el);
      },
      teardown: function() {
        return this.migrationConverterView.remove();
      }
    });
    return test("renders a backbone view into it's main view container", function() {
      var subView;

      subView = new SomeBackboneView;
      this.migrationConverterView.renderConverter(subView);
      return ok(this.migrationConverterView.$el.find('#converter #rendered').length > 0, "Rendered a sub view");
    });
  });

}).call(this);
