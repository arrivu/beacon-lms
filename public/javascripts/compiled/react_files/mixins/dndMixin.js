(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['i18n!react_files', 'react', '../components/DragFeedback', '../utils/moveStuff', 'compiled/models/Folder', 'jquery'], function(I18n, React, DragFeedback, moveStuff, Folder, $) {
    var dndMixin;

    return dndMixin = {
      itemsToDrag: function() {
        return this.state.selectedItems;
      },
      renderDragFeedback: function(_arg) {
        var pageX, pageY;

        pageX = _arg.pageX, pageY = _arg.pageY;
        this.dragHolder || (this.dragHolder = $('<div>').appendTo(document.body));
        return React.renderComponent(DragFeedback({
          pageX: pageX,
          pageY: pageY,
          itemsToDrag: this.itemsToDrag()
        }), this.dragHolder[0]);
      },
      removeDragFeedback: function() {
        $(document).off('.MultiDraggableMixin');
        if (this.dragHolder) {
          React.unmountComponentAtNode(this.dragHolder[0]);
        }
        return this.dragHolder = null;
      },
      onItemDragStart: function(event) {
        var img, itemsToDrag,
          _this = this;

        itemsToDrag = this.itemsToDrag();
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('canvaslms/custom-dnd-move', true);
        event.dataTransfer.setData('text/uri-list', itemsToDrag.map(function(item) {
          return item.get('url');
        }).join('\n'));
        img = new Image;
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        event.dataTransfer.setDragImage(img, 150, 150);
        this.renderDragFeedback(event);
        return $(document).on({
          'dragover.MultiDraggableMixin': function(event) {
            return _this.renderDragFeedback(event.originalEvent);
          },
          'dragend.MultiDraggableMixin': this.removeDragFeedback
        });
      },
      onItemDragEnterOrOver: function(event, callback) {
        if (__indexOf.call(event.dataTransfer.types, 'canvaslms/custom-dnd-move') < 0) {
          return;
        }
        event.preventDefault();
        if (callback) {
          return callback(event);
        }
      },
      onItemDragLeaveOrEnd: function(event, callback) {
        if (__indexOf.call(event.dataTransfer.types, 'canvaslms/custom-dnd-move') < 0) {
          return;
        }
        if (callback) {
          return callback(event);
        }
      },
      onItemDrop: function(event, destinationFolder, callback) {
        if (__indexOf.call(event.dataTransfer.types, 'canvaslms/custom-dnd-move') < 0) {
          return;
        }
        event.preventDefault();
        moveStuff(this.itemsToDrag(), destinationFolder);
        this.clearSelectedItems();
        if (callback) {
          return callback(event);
        }
      }
    };
  });

}).call(this);
