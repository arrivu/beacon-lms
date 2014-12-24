(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!filebrowserview', 'Backbone', 'underscore', 'jst/FileBrowserView', 'compiled/views/FolderTreeView', 'compiled/models/Folder', 'compiled/str/splitAssetString'], function(I18n, Backbone, _, template, FolderTreeView, Folder, splitAssetString) {
    var FileBrowserView, _ref;

    return FileBrowserView = (function(_super) {
      __extends(FileBrowserView, _super);

      function FileBrowserView() {
        _ref = FileBrowserView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FileBrowserView.prototype.template = template;

      FileBrowserView.optionProperty('contentTypes');

      FileBrowserView.optionProperty('onlyShowFolders');

      FileBrowserView.optionProperty('rootFoldersToShow');

      FileBrowserView.optionProperty('onClick');

      FileBrowserView.optionProperty('dndOptions');

      FileBrowserView.optionProperty('href');

      FileBrowserView.prototype.events = {
        'keydown .folderTree[role=tree]': function(event) {
          var $focused, focusedId, key;

          switch (event.which) {
            case 35:
              key = 'end';
              break;
            case 36:
              key = 'home';
              break;
            case 37:
              key = 'left';
              break;
            case 38:
              key = 'up';
              break;
            case 39:
              key = 'right';
              break;
            case 40:
              key = 'down';
              break;
            case 13:
            case 32:
              key = 'enter';
              break;
            default:
              return true;
          }
          event.preventDefault();
          event.stopPropagation();
          focusedId = this.$folderTree.attr('aria-activedescendant');
          if (!focusedId) {
            return this.focusFirst();
          } else {
            $focused = this.$folderTree.find("#" + focusedId);
            switch (key) {
              case 'up':
                return this.focusPrev($focused);
              case 'down':
                return this.focusNext($focused);
              case 'left':
                return this.collapseCurrent($focused);
              case 'right':
                return this.expandCurrent($focused);
              case 'home':
                return this.focusFirst();
              case 'end':
                return this.focusLast($focused);
              case 'enter':
                return this.activateCurrent($focused);
            }
          }
        }
      };

      FileBrowserView.prototype.rootFolders = function() {
        var _this = this;

        if (this.rootFoldersToShow) {
          return this.rootFoldersToShow;
        }
        return FileBrowserView.rootFolders || (FileBrowserView.rootFolders = (function() {
          var contextFiles, contextTypeAndId, myFiles, result;

          contextFiles = null;
          contextTypeAndId = splitAssetString(ENV.context_asset_string || '');
          if (contextTypeAndId && contextTypeAndId.length === 2 && (contextTypeAndId[0] === 'courses' || contextTypeAndId[0] === 'groups')) {
            contextFiles = new Folder({
              contentTypes: _this.contentTypes
            });
            contextFiles.set('custom_name', contextTypeAndId[0] === 'courses' ? I18n.t('course_files', 'Course files') : I18n.t('group_files', 'Group files'));
            contextFiles.url = "/api/v1/" + contextTypeAndId[0] + "/" + contextTypeAndId[1] + "/folders/root";
            contextFiles.fetch();
          }
          myFiles = new Folder({
            contentTypes: _this.contentTypes
          });
          myFiles.set('custom_name', I18n.t('my_files', 'My files'));
          myFiles.url = '/api/v1/users/self/folders/root';
          myFiles.fetch();
          result = [];
          if (contextFiles) {
            result.push(contextFiles);
          }
          result.push(myFiles);
          return result;
        })());
      };

      FileBrowserView.prototype.afterRender = function() {
        var folder, _i, _len, _ref1;

        this.$folderTree = this.$el.children('.folderTree');
        _ref1 = this.rootFolders();
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          folder = _ref1[_i];
          new FolderTreeView({
            model: folder,
            onlyShowFolders: this.onlyShowFolders,
            onClick: this.onClick,
            dndOptions: this.dndOptions,
            href: this.href
          }).$el.appendTo(this.$folderTree);
        }
        return FileBrowserView.__super__.afterRender.apply(this, arguments);
      };

      FileBrowserView.prototype.setFocus = function($to, $from) {
        var toId;

        if (!($to != null ? $to.length : void 0) || ($from != null ? typeof $from.is === "function" ? $from.is($to) : void 0 : void 0)) {
          return;
        }
        this.$folderTree.find('[role=treeitem]').not($to).attr('aria-selected', false);
        $to.attr('aria-selected', true);
        toId = $to.attr('id');
        if (!toId) {
          toId = _.uniqueId('treenode-');
          $to.attr('id', toId);
        }
        return this.$folderTree.attr('aria-activedescendant', toId);
      };

      FileBrowserView.prototype.focusFirst = function() {
        return this.setFocus(this.$folderTree.find('[role=treeitem]:first'));
      };

      FileBrowserView.prototype.focusLast = function($from) {
        var $to, level;

        $to = $folderTree.find('[role=treeitem][aria-level=1]');
        level = 1;
        while (this.ariaPropIsTrue($to, 'aria-expanded') && $to.find('[role=treeitem]:first').length) {
          level++;
          $to = $to.find("[role=treeitem][aria-level=" + level + "]:last");
        }
        this.setFocus($to, $from);
        return this.setFocus(this.$folderTree.find('[role=treeitem]:first'));
      };

      FileBrowserView.prototype.focusNext = function($from) {
        var $cur, $to, level, nodeSelector;

        if (this.ariaPropIsTrue($from, 'aria-expanded')) {
          $to = $from.find('[role=treeitem]:first');
          if ($to.length) {
            return this.setFocus($to, $from);
          }
        }
        $to = null;
        $cur = $from;
        level = parseInt($from.attr('aria-level'), 10);
        while (level > 0) {
          nodeSelector = "[role=treeitem][aria-level=" + level + "]";
          $to = $cur.parentsUntil('[role=treeitem],[role=tree]').andSelf().nextAll().find(nodeSelector).andSelf().filter(nodeSelector).first();
          if ($to != null ? $to.length : void 0) {
            return this.setFocus($to, $from);
          }
          level--;
          $cur = $cur.parent().closest("[role=treeitem][aria-level=" + level + "]");
        }
      };

      FileBrowserView.prototype.focusPrev = function($from) {
        var $to, level, nodeSelector;

        level = parseInt($from.attr('aria-level'), 10);
        nodeSelector = "[role=treeitem][aria-level=" + level + "]";
        $to = $from.parentsUntil('[role=treeitem],[role=tree]').andSelf().prevAll().find(nodeSelector).andSelf().filter(nodeSelector).last();
        if (!$to.length) {
          $to = $from.parent().closest('[role=treeitem]');
          return this.setFocus($to, $from);
        }
        while (this.ariaPropIsTrue($to, 'aria-expanded') && $to.find('[role=treeitem]:first').length) {
          level++;
          $to = $to.find("[role=treeitem][aria-level=" + level + "]:last");
        }
        return this.setFocus($to, $from);
      };

      FileBrowserView.prototype.expandCurrent = function($current) {
        if (this.ariaPropIsTrue($current, 'aria-expanded')) {
          return this.setFocus($current.find('[role=treeitem]:first'), $current);
        } else {
          $current.find('.folderLabel:first').click();
          return this.$folderTree.focus();
        }
      };

      FileBrowserView.prototype.collapseCurrent = function($current) {
        if (this.ariaPropIsTrue($current, 'aria-expanded')) {
          $current.find('.folderLabel:first').click();
          return this.$folderTree.focus();
        } else {
          return this.setFocus($current.parent().closest('[role=treeitem]'), $current);
        }
      };

      FileBrowserView.prototype.activateCurrent = function($current) {
        return $current.find('a:first').click();
      };

      FileBrowserView.prototype.ariaPropIsTrue = function($e, attrib) {
        var _ref1;

        return ((_ref1 = $e.attr(attrib)) != null ? typeof _ref1.toLowerCase === "function" ? _ref1.toLowerCase() : void 0 : void 0) === 'true';
      };

      return FileBrowserView;

    })(Backbone.View);
  });

}).call(this);
