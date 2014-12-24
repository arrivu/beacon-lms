(function() {
  define(['ember'], function(Ember) {
    var QuizzesView;

    return QuizzesView = Ember.View.extend({
      ensureGroupVisibility: (function() {
        return Ember.run.scheduleOnce('afterRender', this, function() {
          var $header, $itemGroup, isCollapsed, isEmpty, itemGroup, _i, _len, _ref, _results;

          _ref = this.$('.item-group-condensed');
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            itemGroup = _ref[_i];
            $itemGroup = Ember.$(itemGroup);
            $header = $itemGroup.find('.ig-header-title[aria-expanded="false"]');
            isEmpty = $itemGroup.find('.ig-row-empty').length;
            isCollapsed = $header.length;
            if (!isEmpty && isCollapsed) {
              _results.push($header.click());
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        });
      }).observes('controller.assignments.length', 'controller.practices.length', 'controller.surveys.length')
    });
  });

}).call(this);
