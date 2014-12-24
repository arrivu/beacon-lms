(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['Backbone', 'i18n!external_tools', 'jquery', 'underscore', 'jst/ExternalTools/AddAppView', 'jquery.disableWhileLoading'], function(Backbone, I18n, $, _, template, disableWhileLoading) {
    var AddAppView, _ref;

    return AddAppView = (function(_super) {
      __extends(AddAppView, _super);

      function AddAppView() {
        this.onSaveSuccess = __bind(this.onSaveSuccess, this);
        this.onSaveFail = __bind(this.onSaveFail, this);
        this.toJSON = __bind(this.toJSON, this);        _ref = AddAppView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AddAppView.prototype.template = template;

      AddAppView.prototype.tagName = 'form';

      AddAppView.prototype.id = 'add_app_form';

      AddAppView.prototype.className = 'validated-form-view form-horizontal bootstrap-form';

      AddAppView.prototype.initialize = function() {
        AddAppView.__super__.initialize.apply(this, arguments);
        this.app = this.options.app;
        this.model.set('name', this.app.get('name'));
        this.model.set('config_url', this.app.get('config_xml_url'));
        this.model.set('description', this.app.get('description'));
        this.model.set('config_type', 'by_url');
        this.model.on('error', this.onSaveFail, this);
        this.model.on('sync', this.onSaveSuccess, this);
        this.configOptions = this.app.get('config_options') || [];
        if (this.app.get('requires_secret')) {
          return this.configOptions = this.keySecretConfigOptions().concat(this.configOptions);
        } else {
          this.model.set('consumer_key', 'N/A');
          return this.model.set('shared_secret', 'N/A');
        }
      };

      AddAppView.prototype.afterRender = function() {
        var _this = this;

        this.$el.dialog({
          title: I18n.t('dialog_title_add_app', 'Add App'),
          width: 520,
          height: "auto",
          resizable: true,
          close: function() {
            return _this.$el.remove();
          },
          buttons: [
            {
              "class": "btn-primary",
              text: I18n.t('submit', 'Submit'),
              'data-text-while-loading': I18n.t('saving', 'Saving...'),
              click: function() {
                return _this.submit();
              }
            }
          ]
        });
        this.$el.submit(function(e) {
          _this.submit();
          return false;
        });
        if (this.configOptions.length === 0 && !this.app.get('is_installed')) {
          this.submit();
        }
        return this;
      };

      AddAppView.prototype.toJSON = function() {
        var json;

        json = AddAppView.__super__.toJSON.apply(this, arguments);
        json.requiresSecret = this.app.get('requires_secret');
        json.configOptions = [];
        _.each(this.configOptions, function(option) {
          if (option.param_type === 'checkbox') {
            option.isCheckbox = true;
          }
          if (option.param_type === 'text') {
            option.isText = true;
          }
          return json.configOptions.push(option);
        });
        return json;
      };

      AddAppView.prototype.submit = function() {
        var disablingDfd, formData;

        formData = this.$el.getFormData();
        if (this.validate(formData)) {
          if (formData['canvas_app_name']) {
            this.model.set('name', formData['canvas_app_name']);
          }
          if (formData['consumer_key']) {
            this.model.set('consumer_key', formData['consumer_key']);
          }
          if (formData['shared_secret']) {
            this.model.set('shared_secret', formData['shared_secret']);
          }
          this.updateConfigUrl(formData);
          disablingDfd = new $.Deferred();
          this.model.save({
            error: function() {
              return disablingDfd.reject();
            },
            success: function() {
              return disablingDfd.resolve();
            }
          });
          return this.$el.disableWhileLoading(disablingDfd);
        }
      };

      AddAppView.prototype.updateConfigUrl = function(formData) {
        var configUrl, newConfigUrl, option, queryParams, _i, _len, _ref1;

        configUrl = this.model.get('config_url');
        queryParams = {};
        _ref1 = this.configOptions;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          option = _ref1[_i];
          if (formData[option['name']]) {
            queryParams[option['name']] = formData[option['name']];
          }
        }
        delete queryParams['consumer_key'];
        delete queryParams['shared_secret'];
        newConfigUrl = this.model.get('config_url') + (configUrl.indexOf('?') !== -1 ? '&' : '?') + $.param(queryParams);
        return this.model.set('config_url', newConfigUrl);
      };

      AddAppView.prototype.validate = function(formData) {
        var error, errors, option, _i, _len;

        this.removeErrors();
        errors = (function() {
          var _i, _len, _ref1, _results;

          _ref1 = this.configOptions;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            option = _ref1[_i];
            if (!formData[option['name']] && option['is_required']) {
              _results.push(option);
            }
          }
          return _results;
        }).call(this);
        for (_i = 0, _len = errors.length; _i < _len; _i++) {
          error = errors[_i];
          this.addError("input[name='" + error['name'] + "']", 'Required');
        }
        return errors.length === 0;
      };

      AddAppView.prototype.removeErrors = function() {
        this.$('.error .help-inline').remove();
        this.$('.control-group').removeClass('error');
        return this.$('.alert.alert-error').remove();
      };

      AddAppView.prototype.addError = function(input, message) {
        input = this.$(input);
        input.parents('.control-group').addClass('error');
        input.after("<span class='help-inline'>" + message + "</span>");
        return input.one('keypress', function() {
          $(this).parents('.control-group').removeClass('error');
          return $(this).parents('.control-group').find('.help-inline').remove();
        });
      };

      AddAppView.prototype.onSaveFail = function(model) {
        var message;

        message = I18n.t('generic_error', 'There was an error in processing your request');
        return this.$el.prepend("<div class='alert alert-error'>" + message + "</span>");
      };

      AddAppView.prototype.onSaveSuccess = function(model) {
        this.app.set('is_installed', true);
        return model.off('sync', this.onSaveSuccess);
      };

      AddAppView.prototype.keySecretConfigOptions = function() {
        return [
          {
            param_type: 'text',
            name: 'consumer_key',
            description: I18n.t('consumer_key', 'Consumer Key'),
            is_required: true
          }, {
            param_type: 'text',
            name: 'shared_secret',
            description: I18n.t('shared_secret', 'Shared Secret'),
            is_required: true
          }
        ];
      };

      return AddAppView;

    })(Backbone.View);
  });

}).call(this);
