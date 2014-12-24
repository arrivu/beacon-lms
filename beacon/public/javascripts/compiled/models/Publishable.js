(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'underscore', 'i18n!publishable'], function(Backbone, _, I18n) {
    var Publishable, _ref;

    return Publishable = (function(_super) {
      __extends(Publishable, _super);

      function Publishable() {
        this.unpublish = __bind(this.unpublish, this);
        this.publish = __bind(this.publish, this);        _ref = Publishable.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Publishable.prototype.initialize = function(attributes, options) {
        this._root = options['root'];
        return this.set('unpublishable', true);
      };

      Publishable.prototype.publish = function() {
        this.set('published', true);
        return this.save();
      };

      Publishable.prototype.unpublish = function() {
        this.set('published', false);
        return this.save();
      };

      Publishable.prototype.disabledMessage = function() {
        return I18n.t('cant_unpublish', "Can't unpublish");
      };

      Publishable.prototype.toJSON = function() {
        var json;

        json = {};
        json[this._root] = _.clone(this.attributes);
        return json;
      };

      return Publishable;

    })(Backbone.Model);
  });

}).call(this);
