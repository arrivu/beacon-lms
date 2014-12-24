(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'compiled/models/Comment'], function(Backbone, Comment) {
    var CommentCollection, _ref;

    return CommentCollection = (function(_super) {
      __extends(CommentCollection, _super);

      function CommentCollection() {
        _ref = CommentCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CommentCollection.prototype.model = Comment;

      return CommentCollection;

    })(Backbone.Collection);
  });

}).call(this);
