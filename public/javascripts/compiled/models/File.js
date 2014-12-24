(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(['jquery', 'underscore', 'compiled/models/FilesystemObject', 'jquery.ajaxJSON'], function($, _, FilesystemObject) {
    var File, _ref;

    return File = (function(_super) {
      __extends(File, _super);

      function File() {
        this.saveFrd = __bind(this.saveFrd, this);        _ref = File.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      File.prototype.url = function() {
        if (this.isNew()) {
          return File.__super__.url.apply(this, arguments);
        } else {
          return "/api/v1/files/" + this.id;
        }
      };

      File.prototype.initialize = function(attributes, options) {
        this.preflightUrl = options.preflightUrl;
        return File.__super__.initialize.apply(this, arguments);
      };

      File.prototype.save = function(attrs, options) {
        var dfrd, el, name,
          _this = this;

        if (attrs == null) {
          attrs = {};
        }
        if (options == null) {
          options = {};
        }
        if (!this.get('file')) {
          return File.__super__.save.apply(this, arguments);
        }
        this.set(attrs);
        dfrd = $.Deferred();
        el = this.get('file');
        name = (el.value || el.name).split(/[\/\\]/).pop();
        $.ajaxJSON(this.preflightUrl, 'POST', {
          name: name,
          on_duplicate: 'rename'
        }, function(data) {
          return _this.saveFrd(data, dfrd, el, options);
        }, function(error) {
          dfrd.reject(error);
          return typeof options.error === "function" ? options.error(error) : void 0;
        });
        return dfrd;
      };

      File.prototype.saveFrd = function(data, dfrd, el, options) {
        var _this = this;

        if (data.attachments && data.attachments[0]) {
          data = data.attachments[0];
        }
        this.uploadParams = data.upload_params;
        this.set(this.uploadParams);
        el.name = data.file_param;
        this.url = function() {
          return data.upload_url;
        };
        return FilesystemObject.prototype.save.call(this, null, {
          multipart: true,
          success: function(data) {
            dfrd.resolve(data);
            return typeof options.success === "function" ? options.success(data) : void 0;
          },
          error: function(error) {
            dfrd.reject(error);
            return typeof options.error === "function" ? options.error(error) : void 0;
          }
        });
      };

      File.prototype.toJSON = function() {
        var _ref1;

        if (!this.get('file')) {
          return File.__super__.toJSON.apply(this, arguments);
        }
        return _.pick.apply(_, [this.attributes, 'file'].concat(__slice.call(_.keys((_ref1 = this.uploadParams) != null ? _ref1 : {}))));
      };

      File.prototype.present = function() {
        return _.clone(this.attributes);
      };

      return File;

    })(FilesystemObject);
  });

}).call(this);
