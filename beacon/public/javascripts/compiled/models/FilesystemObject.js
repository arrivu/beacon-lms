(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone'], function(Backbone) {
    var FilesystemObject, _ref;

    return FilesystemObject = (function(_super) {
      __extends(FilesystemObject, _super);

      function FilesystemObject() {
        _ref = FilesystemObject.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FilesystemObject.prototype.displayName = function() {
        return this.get('display_name') || this.get('name');
      };

      FilesystemObject.prototype.moveTo = function(newFolder) {
        var _this = this;

        return this.save({}, {
          attrs: {
            parent_folder_id: newFolder.id
          }
        }).then(function() {
          var myType, _ref1;

          if ((_ref1 = _this.collection) != null) {
            _ref1.remove(_this);
          }
          myType = _this.saveFrd ? 'file' : 'folder';
          return newFolder[myType + 's'].add(_this, {
            merge: true
          });
        });
      };

      return FilesystemObject;

    })(Backbone.Model);
  });

}).call(this);
