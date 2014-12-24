(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['i18n!pseudonym', 'Backbone'], function(I18n, Backbone) {
    var Pseudonym, _ref;

    return Pseudonym = (function(_super) {
      __extends(Pseudonym, _super);

      function Pseudonym() {
        _ref = Pseudonym.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Pseudonym.prototype.errorMap = function(policy) {
        return {
          unique_id: {
            too_short: I18n.t("errors.required", "Required"),
            too_long: I18n.t("errors.too_long", "Can't exceed %{max} characters", {
              max: 100
            }),
            invalid: I18n.t("errors.invalid", "May only contain letters, numbers, or the following: %{characters}", {
              characters: ". + - _ @ ="
            }),
            taken: I18n.t("errors.taken", "Email already in use"),
            bad_credentials: I18n.t("errors.bad_credentials", "Invalid username or password"),
            not_email: I18n.t("errors.not_email", "Not a valid email address")
          },
          sis_user_id: {
            too_long: I18n.t("errors.too_long", "Can't exceed %{max} characters", {
              max: 255
            })
          },
          password: {
            too_short: I18n.t("errors.too_short", "Must be at least %{min} characters", {
              min: policy.min_length
            }),
            sequence: I18n.t("errors.sequence", "Can't incude a run of more than %{max} characters (e.g. abcdef)", {
              max: policy.max_sequence
            }),
            common: I18n.t("errors.common", "Can't use common passwords (e.g. \"password\")"),
            repeated: I18n.t("errors.repeated", "Can't have the same character more than %{max} times in a row", {
              max: policy.max_repeats
            }),
            confirmation: I18n.t("errors.mismatch", "Doesn't match")
          }
        };
      };

      Pseudonym.prototype.normalizeErrors = function(errors, policy) {
        var e, too_short, type, _i, _j, _len, _len1, _ref1, _ref2, _ref3;

        if (errors) {
          _ref1 = ['unique_id', 'password'];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            type = _ref1[_i];
            if (!(((_ref2 = errors[type]) != null ? _ref2.length : void 0) > 1)) {
              continue;
            }
            too_short = null;
            _ref3 = errors[type];
            for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
              e = _ref3[_j];
              if (e.type === 'too_short') {
                too_short = e;
              }
            }
            if (too_short) {
              errors[type] = [too_short];
            }
          }
        }
        return Pseudonym.__super__.normalizeErrors.call(this, errors, policy);
      };

      return Pseudonym;

    })(Backbone.Model);
  });

}).call(this);
