(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/arr/walk', 'compiled/models/Topic'], function(walk, MaterializedDiscussionTopic) {
    var SideCommentDiscussionTopic, _ref;

    return SideCommentDiscussionTopic = (function(_super) {
      __extends(SideCommentDiscussionTopic, _super);

      function SideCommentDiscussionTopic() {
        _ref = SideCommentDiscussionTopic.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SideCommentDiscussionTopic.prototype.parse = function() {
        var entry, flat, id, parent, _ref1;

        SideCommentDiscussionTopic.__super__.parse.apply(this, arguments);
        flat = {};
        _ref1 = this.flattened;
        for (id in _ref1) {
          entry = _ref1[id];
          delete entry.replies;
          if (entry.root_entry_id != null) {
            parent = flat[entry.root_entry_id];
            parent.replies.push(entry);
            entry.parent = parent;
            entry.parent_id = parent.id;
          } else {
            flat[entry.id] = entry;
            entry.replies = [];
          }
        }
        this.data.entries = (function() {
          var _results;

          _results = [];
          for (id in flat) {
            entry = flat[id];
            entry.replies.sort(function(a, b) {
              return Date.parse(b.created_at) - Date.parse(a.created_at);
            });
            _results.push(entry);
          }
          return _results;
        })();
        return this.data;
      };

      return SideCommentDiscussionTopic;

    })(MaterializedDiscussionTopic);
  });

}).call(this);
