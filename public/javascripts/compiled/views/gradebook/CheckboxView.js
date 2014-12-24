(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jst/gradebook2/checkbox_view'], function(_arg, template) {
    var CheckboxView, View, _ref;

    View = _arg.View;
    return CheckboxView = (function(_super) {
      __extends(CheckboxView, _super);

      function CheckboxView() {
        _ref = CheckboxView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CheckboxView.prototype.tagName = 'label';

      CheckboxView.prototype.className = 'checkbox-view';

      CheckboxView.optionProperty('color');

      CheckboxView.optionProperty('label');

      CheckboxView.prototype.checked = true;

      CheckboxView.prototype.template = template;

      CheckboxView.prototype.events = {
        'click': 'onClick'
      };

      CheckboxView.prototype.onClick = function(e) {
        e.preventDefault();
        return this.toggleState();
      };

      CheckboxView.prototype.toggleState = function() {
        this.checked = !this.checked;
        this.trigger('togglestate', this.checked);
        return this.render();
      };

      CheckboxView.prototype.toJSON = function() {
        var json;

        return json = {
          checked: this.checked.toString(),
          color: this.checked ? this.options.color : 'none',
          label: this.options.label
        };
      };

      return CheckboxView;

    })(View);
  });

}).call(this);
