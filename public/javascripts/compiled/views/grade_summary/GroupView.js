(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!outcomes', 'Backbone', 'underscore', 'compiled/views/CollectionView', 'compiled/views/grade_summary/OutcomeView', 'jst/grade_summary/group'], function(I18n, _arg, _, CollectionView, OutcomeView, template) {
    var Collection, GroupView, View, _ref;

    View = _arg.View, Collection = _arg.Collection;
    return GroupView = (function(_super) {
      __extends(GroupView, _super);

      function GroupView() {
        _ref = GroupView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      GroupView.prototype.tagName = 'li';

      GroupView.prototype.className = 'group';

      GroupView.prototype.els = {
        '.outcomes': '$outcomes'
      };

      GroupView.prototype.events = {
        'click .group-description': 'expand',
        'keyclick .group-description': 'expand'
      };

      GroupView.prototype.template = template;

      GroupView.prototype.render = function() {
        var outcomesView;

        GroupView.__super__.render.apply(this, arguments);
        outcomesView = new CollectionView({
          el: this.$outcomes,
          collection: this.model.get('outcomes'),
          itemView: OutcomeView
        });
        return outcomesView.render();
      };

      GroupView.prototype.expand = function() {
        var $collapseToggle, $expandToggle;

        this.$el.toggleClass('expanded');
        if (this.$el.hasClass("expanded")) {
          this.$el.children("div.group-description").attr("aria-expanded", "true");
        } else {
          this.$el.children("div.group-description").attr("aria-expanded", "false");
        }
        $collapseToggle = $('div.outcome-toggles a.icon-collapse');
        if ($('li.group.expanded').length === 0) {
          $collapseToggle.attr('disabled', 'disabled');
          $collapseToggle.attr('aria-disabled', 'true');
        } else {
          $collapseToggle.removeAttr('disabled');
          $collapseToggle.attr('aria-disabled', 'false');
        }
        $expandToggle = $('div.outcome-toggles a.icon-expand');
        if ($('li.group:not(.expanded)').length === 0) {
          $expandToggle.attr('disabled', 'disabled');
          return $expandToggle.attr('aria-disabled', 'true');
        } else {
          $expandToggle.removeAttr('disabled');
          return $expandToggle.attr('aria-disabled', 'false');
        }
      };

      GroupView.prototype.statusTooltip = function() {
        switch (this.model.status()) {
          case 'undefined':
            return I18n.t('undefined', 'Unstarted');
          case 'remedial':
            return I18n.t('remedial', 'Remedial');
          case 'near':
            return I18n.t('near', 'Near mastery');
          case 'mastery':
            return I18n.t('mastery', 'Mastery');
        }
      };

      GroupView.prototype.toJSON = function() {
        var json;

        json = GroupView.__super__.toJSON.apply(this, arguments);
        return _.extend(json, {
          statusTooltip: this.statusTooltip()
        });
      };

      return GroupView;

    })(View);
  });

}).call(this);
