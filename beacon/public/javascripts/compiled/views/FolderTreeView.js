(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'jquery', 'underscore', 'compiled/fn/preventDefault', 'compiled/models/Folder', 'compiled/views/PaginatedCollectionView', 'compiled/views/FileItemView', 'jst/FolderTreeCollection'], function(Backbone, $, _, preventDefault, Folder, PaginatedCollectionView, FileItemView, collectionTemplate) {
    var FolderTreeView, _ref;

    return FolderTreeView = (function(_super) {
      __extends(FolderTreeView, _super);

      function FolderTreeView() {
        _ref = FolderTreeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FolderTreeView.prototype.tagName = 'li';

      FolderTreeView.optionProperty('nestingLevel');

      FolderTreeView.optionProperty('onlyShowFolders');

      FolderTreeView.optionProperty('onClick');

      FolderTreeView.optionProperty('dndOptions');

      FolderTreeView.optionProperty('href');

      FolderTreeView.prototype.defaults = {
        nestingLevel: 1
      };

      FolderTreeView.prototype.attributes = function() {
        return {
          'role': 'treeitem',
          'aria-expanded': "" + (!!this.model.isExpanded),
          'aria-level': this.nestingLevel,
          id: this.tagId
        };
      };

      FolderTreeView.prototype.events = {
        'click .folderLabel': 'toggle'
      };

      FolderTreeView.prototype.initialize = function() {
        var res;

        this.tagId = _.uniqueId('treenode-');
        this.render = _.debounce(this.render);
        this.model.on('all', this.render, this);
        this.model.files.on('all', this.render, this);
        this.model.folders.on('all', this.render, this);
        res = FolderTreeView.__super__.initialize.apply(this, arguments);
        this.render();
        return res;
      };

      FolderTreeView.prototype.render = function() {
        this.renderSelf();
        return this.renderContents();
      };

      FolderTreeView.prototype.toggle = function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.model.toggle({
          onlyShowFolders: this.onlyShowFolders
        });
        return this.$el.attr(this.attributes());
      };

      FolderTreeView.prototype.title_text = function() {
        return this.model.get('custom_name') || this.model.get('name');
      };

      FolderTreeView.prototype.renderSelf = function() {
        var _this = this;

        this.$el.attr(this.attributes());
        this.$label || (this.$label = (function() {
          var $label, toggleActive;

          _this.$labelInner = $('<span>').click(function(event) {
            return typeof _this.onClick === "function" ? _this.onClick(event, _this.model) : void 0;
          });
          $label = $("<a\n  class=\"folderLabel\"\n  role=\"presentation\"\n  tabindex=\"-1\"\n>\n  <i class=\"icon-mini-arrow-right\"></i>\n  <i class=\"icon-folder\"></i>\n</a>").append(_this.$labelInner).prependTo(_this.$el);
          if (_this.dndOptions) {
            toggleActive = function(makeActive) {
              return function() {
                return $label.toggleClass('activeDragTarget', makeActive);
              };
            };
            $label.on({
              'dragenter dragover': function(event) {
                return _this.dndOptions.onItemDragEnterOrOver(event.originalEvent, toggleActive(true));
              },
              'dragleave dragend': function(event) {
                return _this.dndOptions.onItemDragLeaveOrEnd(event.originalEvent, toggleActive(false));
              },
              'drop': function(event) {
                return _this.dndOptions.onItemDrop(event.originalEvent, _this.model, toggleActive(false));
              }
            });
          }
          return $label;
        })());
        this.$labelInner.text(this.title_text());
        return this.$label.attr('href', (typeof this.href === "function" ? this.href(this.model) : void 0) || '#').toggleClass('expanded', !!this.model.isExpanded).toggleClass('loading after', !!this.model.isExpanding);
      };

      FolderTreeView.prototype.renderContents = function() {
        var filesView, foldersView;

        if (this.model.isExpanded) {
          if (!this.$folderContents) {
            this.$folderContents = $("<ul role='group' class='folderContents'/>").appendTo(this.$el);
            foldersView = new PaginatedCollectionView({
              collection: this.model.folders,
              itemView: FolderTreeView,
              itemViewOptions: {
                nestingLevel: this.nestingLevel + 1,
                onlyShowFolders: this.onlyShowFolders,
                onClick: this.onClick,
                dndOptions: this.dndOptions,
                href: this.href
              },
              tagName: 'li',
              className: 'folders',
              template: collectionTemplate,
              scrollContainer: this.$folderContents.closest('ul[role=tabpanel]')
            });
            this.$folderContents.append(foldersView.render().el);
            if (!this.onlyShowFolders) {
              filesView = new PaginatedCollectionView({
                collection: this.model.files,
                itemView: FileItemView,
                itemViewOptions: {
                  nestingLevel: this.nestingLevel + 1
                },
                tagName: 'li',
                className: 'files',
                template: collectionTemplate,
                scrollContainer: this.$folderContents.closest('ul[role=tabpanel]')
              });
              this.$folderContents.append(filesView.render().el);
            }
          }
          return this.$('> .folderContents').removeClass('hidden');
        } else {
          return this.$('> .folderContents').addClass('hidden');
        }
      };

      return FolderTreeView;

    })(Backbone.View);
  });

}).call(this);
