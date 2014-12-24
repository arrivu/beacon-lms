(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'Backbone'], function($, _, Backbone) {
    var FeatureFlag, _ref;

    return FeatureFlag = (function(_super) {
      __extends(FeatureFlag, _super);

      function FeatureFlag() {
        this.updateTransitions = __bind(this.updateTransitions, this);        _ref = FeatureFlag.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      FeatureFlag.prototype.LABEL = {
        beta: {
          cssClass: 'info',
          name: 'beta'
        },
        hidden: {
          cssClass: 'default',
          name: 'hidden'
        },
        development: {
          cssClass: 'important',
          name: 'development'
        }
      };

      FeatureFlag.prototype.resourceName = 'features';

      FeatureFlag.prototype.urlRoot = function() {
        return "/api/v1/" + (this.contextType()) + "s/" + (this.contextId()) + "/features/flags";
      };

      FeatureFlag.prototype.flagContext = function() {
        var flag;

        flag = this.get('flag');
        return ("" + flag.context_type + "_" + flag.context_id).toLowerCase();
      };

      FeatureFlag.prototype.hasContext = function() {
        var flag;

        flag = this.get('flag');
        return flag.context_type && flag.context_id;
      };

      FeatureFlag.prototype.isAllowed = function() {
        return this.get('state') === 'allowed';
      };

      FeatureFlag.prototype.isOn = function() {
        return this.get('state') === 'on';
      };

      FeatureFlag.prototype.isOff = function(forDisplay) {
        var cond1, cond2;

        if (forDisplay == null) {
          forDisplay = false;
        }
        cond1 = _.include(['off', 'hidden'], this.get('state'));
        cond2 = !this.currentContextIsAccount() && this.isAllowed();
        if (forDisplay) {
          return cond1 || cond2;
        } else {
          return cond1;
        }
      };

      FeatureFlag.prototype.isHidden = function() {
        return this.get('hidden');
      };

      FeatureFlag.prototype.isSiteAdmin = function() {
        var _ref1;

        return !!((_ref1 = ENV.ACCOUNT) != null ? _ref1.site_admin : void 0);
      };

      FeatureFlag.prototype.contextType = function() {
        return ENV.context_asset_string.split('_')[0];
      };

      FeatureFlag.prototype.contextId = function() {
        return ENV.context_asset_string.split('_')[1];
      };

      FeatureFlag.prototype.isContext = function(type) {
        return this.contextType() === type.toLowerCase();
      };

      FeatureFlag.prototype.currentContextIsAccount = function() {
        return ENV.context_asset_string.split('_')[0] === 'account';
      };

      FeatureFlag.prototype.warningFor = function(action) {
        var settings;

        settings = this.transitions()[action];
        if (settings != null ? settings.message : void 0) {
          return settings;
        } else {
          return false;
        }
      };

      FeatureFlag.prototype.updateTransitions = function() {
        var _this = this;

        return $.getJSON(this.url()).then(function(_arg) {
          var transitions;

          transitions = _arg.transitions;
          return _this.get('feature_flag').transitions = transitions;
        });
      };

      FeatureFlag.prototype.transitions = function() {
        return this.get('feature_flag').transitions;
      };

      FeatureFlag.prototype.transitionLocked = function(action) {
        var settings;

        settings = this.transitions()[action];
        return (settings != null ? settings.locked : void 0) && !settings.message;
      };

      FeatureFlag.prototype.toJSON = function() {
        return _.extend(FeatureFlag.__super__.toJSON.apply(this, arguments), {
          isAllowed: this.isAllowed(),
          isHidden: this.isHidden()
        }, {
          isOff: this.isOff(true),
          isOn: this.isOn(),
          isSiteAdmin: this.isSiteAdmin(),
          currentContextIsAccount: this.isContext('account'),
          disableOn: this.transitionLocked('on'),
          disableAllow: this.transitionLocked('allowed'),
          disableOff: this.transitionLocked('off')
        });
      };

      FeatureFlag.prototype.parse = function(json) {
        var feature, _ref1;

        _.extend(json, this.attributes);
        feature = {
          appliesTo: json.applies_to.toLowerCase(),
          id: json.feature,
          title: json.display_name,
          isLocked: json.feature_flag.locked,
          flag: json.feature_flag,
          releaseOn: json.enable_at ? new Date(json.enable_at) : null,
          releaseNotesUrl: json.release_notes_url,
          state: (_ref1 = json.feature_flag) != null ? _ref1.state : void 0,
          labels: []
        };
        if (json.feature_flag) {
          feature.flag = json.feature_flag;
        }
        if (json.feature_flag) {
          feature.state = json.feature_flag.state;
        }
        if (json.beta) {
          feature.labels.push(FeatureFlag.prototype.LABEL.beta);
        }
        if (json.hidden) {
          feature.labels.push(FeatureFlag.prototype.LABEL.hidden);
        }
        if (json.development) {
          feature.labels.push(FeatureFlag.prototype.LABEL.development);
        }
        return _.extend(json, feature);
      };

      return FeatureFlag;

    })(Backbone.Model);
  });

}).call(this);
