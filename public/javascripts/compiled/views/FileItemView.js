(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'compiled/fn/preventDefault', 'compiled/models/Folder', 'jst/FolderTreeItem'], function(Backbone, _, preventDefault, Folder, template) {
    var FileItemView, _ref;

    return FileItemView = (function(_super) {
      __extends(FileItemView, _super);

      function FileItemView() {
        _ref = FileItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FileItemView.prototype.tagName = 'li';

      FileItemView.prototype.template = template;

      FileItemView.optionProperty('nestingLevel');

      FileItemView.prototype.attributes = function() {
        return {
          role: 'treeitem',
          id: _.uniqueId('treenode-')
        };
      };

      FileItemView.prototype.afterRender = function() {
        return this.$el.attr('aria-level', this.nestingLevel);
      };

      return FileItemView;

    })(Backbone.View);
  });

}).call(this);
