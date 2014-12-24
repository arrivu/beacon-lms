(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'compiled/views/CollectionView', 'compiled/views/grade_summary/GroupView', 'jst/grade_summary/section'], function(_arg, _, CollectionView, GroupView, template) {
    var Collection, SectionView, View, _ref;

    View = _arg.View, Collection = _arg.Collection;
    return SectionView = (function(_super) {
      __extends(SectionView, _super);

      function SectionView() {
        _ref = SectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SectionView.prototype.tagName = 'li';

      SectionView.prototype.className = 'section';

      SectionView.prototype.els = {
        '.groups': '$groups'
      };

      SectionView.prototype.template = template;

      SectionView.prototype.render = function() {
        var groupsView;

        SectionView.__super__.render.apply(this, arguments);
        groupsView = new CollectionView({
          el: this.$groups,
          collection: this.model.get('groups'),
          itemView: GroupView
        });
        return groupsView.render();
      };

      return SectionView;

    })(View);
  });

}).call(this);
