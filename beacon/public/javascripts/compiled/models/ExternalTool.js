(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['underscore', 'Backbone', 'compiled/backbone-ext/DefaultUrlMixin'], function(_, _arg, DefaultUrlMixin) {
    var ExternalTool, Model, _ref;

    Model = _arg.Model;
    return ExternalTool = (function(_super) {
      __extends(ExternalTool, _super);

      function ExternalTool() {
        _ref = ExternalTool.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalTool.mixin(DefaultUrlMixin);

      ExternalTool.prototype.initialize = function() {
        ExternalTool.__super__.initialize.apply(this, arguments);
        if (_.has(this, 'url')) {
          return delete this.url;
        }
      };

      ExternalTool.prototype.resourceName = 'external_tools';

      ExternalTool.prototype.computedAttributes = [
        {
          name: 'custom_fields_string',
          deps: ['custom_fields']
        }
      ];

      ExternalTool.prototype.urlRoot = function() {
        return this._defaultUrl();
      };

      ExternalTool.prototype.custom_fields_string = function() {
        var k, v;

        return ((function() {
          var _ref1, _results;

          _ref1 = this.get('custom_fields');
          _results = [];
          for (k in _ref1) {
            v = _ref1[k];
            _results.push("" + k + "=" + v);
          }
          return _results;
        }).call(this)).join("\n");
      };

      ExternalTool.prototype.launchUrl = function(launchType, options) {
        var key, params, url, value;

        if (options == null) {
          options = {};
        }
        params = (function() {
          var _results;

          _results = [];
          for (key in options) {
            value = options[key];
            _results.push("" + key + "=" + value);
          }
          return _results;
        })();
        url = "/" + (this._contextPath()) + "/external_tools/" + this.id + "/resource_selection?launch_type=" + launchType;
        if (params.length > 0) {
          url = "" + url + "&" + (params.join('&'));
        }
        return url;
      };

      ExternalTool.prototype.assetString = function() {
        return "context_external_tool_" + this.id;
      };

      return ExternalTool;

    })(Model);
  });

}).call(this);
