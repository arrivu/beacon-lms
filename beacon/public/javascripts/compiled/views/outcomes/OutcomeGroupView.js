(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'compiled/views/outcomes/OutcomeContentBase', 'jst/outcomes/outcomeGroup', 'jst/outcomes/outcomeGroupForm'], function($, _, OutcomeContentBase, outcomeGroupTemplate, outcomeGroupFormTemplate) {
    var OutcomeGroupView, _ref;

    return OutcomeGroupView = (function(_super) {
      __extends(OutcomeGroupView, _super);

      function OutcomeGroupView() {
        _ref = OutcomeGroupView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      OutcomeGroupView.prototype.render = function() {
        var data;

        data = this.model.toJSON();
        switch (this.state) {
          case 'edit':
          case 'add':
            this.$el.html(outcomeGroupFormTemplate(data));
            this.readyForm();
            break;
          case 'loading':
            this.$el.empty();
            break;
          default:
            this.$el.html(outcomeGroupTemplate(_.extend(data, {
              readOnly: this.readOnly()
            })));
        }
        this.$('input:first').focus();
        return this;
      };

      return OutcomeGroupView;

    })(OutcomeContentBase);
  });

}).call(this);
