(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/util/natcompare'], function(_, _arg, natcompare) {
    var Collection, Model, Section, _ref;

    Model = _arg.Model, Collection = _arg.Collection;
    return Section = (function(_super) {
      __extends(Section, _super);

      function Section() {
        _ref = Section.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Section.prototype.initialize = function() {
        return this.set('groups', new Collection([], {
          comparator: natcompare.byGet('title')
        }));
      };

      return Section;

    })(Model);
  });

}).call(this);
