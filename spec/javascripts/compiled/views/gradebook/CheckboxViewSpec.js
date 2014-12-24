(function() {
  define(['jquery', 'underscore', 'compiled/views/gradebook/CheckboxView'], function($, _, CheckboxView) {
    module('gradebook/CheckboxView', {
      setup: function() {
        this.view = new CheckboxView({
          color: 'red',
          label: 'test label'
        });
        this.view.render();
        this.view.$el.appendTo('#fixtures');
        return this.checkbox = this.view.$el.find('.checkbox');
      },
      teardown: function() {
        return $('#fixtures').empty();
      }
    });
    test('displays checkbox and label', function() {
      ok(this.view.$el.html().match(/test label/), 'should display label');
      return ok(this.view.$el.find('.checkbox').length, 'should display checkbox');
    });
    test('toggles active state', function() {
      ok(this.view.checked, 'should default to checked');
      this.view.$el.click();
      ok(!this.view.checked, 'should uncheck when clicked');
      this.view.$el.click();
      return ok(this.view.checked, 'should check when clicked');
    });
    return test('visually indicates state', function() {
      var checkedColor, uncheckedColor;

      checkedColor = this.view.$el.find('.checkbox').css('background-color');
      ok(_.include(['rgb(255, 0, 0)', 'red'], checkedColor), 'displays checked state');
      this.view.$el.click();
      uncheckedColor = this.view.$el.find('.checkbox').css('background-color');
      return ok(_.include(['rgba(0, 0, 0, 0)', 'transparent'], uncheckedColor), 'displays unchecked state');
    });
  });

}).call(this);
