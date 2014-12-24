(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'jst/jquery/ModuleSequenceFooter', 'underscore', 'i18n!sequence_footer', 'jquery.ajaxJSON'], function(jQuery, template, _, I18n) {
    return (function($, window, document, template) {
      var ModuleSequenceFooter, msfInstanceCounter;

      msfInstanceCounter = 0;
      $.fn.moduleSequenceFooter = function(options) {
        var _this = this;

        if (options == null) {
          options = {};
        }
        if (!(options.assetType && options.assetID)) {
          throw 'Option must be set with assetType and assetID';
          return;
        }
        this.msfAnimation = function(enabled) {
          return _this.find('.module-sequence-padding, .module-sequence-footer').toggleClass('no-animation', !enabled);
        };
        this.msfInstance = new $.fn.moduleSequenceFooter.MSFClass(options);
        this.msfInstance.fetch().done(function() {
          if (_this.msfInstance.hide) {
            _this.hide();
            return;
          }
          _this.html(template({
            instanceNumber: _this.msfInstance.instanceNumber,
            previous: _this.msfInstance.previous,
            next: _this.msfInstance.next
          }));
          if ((options != null ? options.animation : void 0) !== void 0) {
            _this.msfAnimation(options.animation);
          }
          return _this.show();
        });
        return this;
      };
      return $.fn.moduleSequenceFooter.MSFClass = ModuleSequenceFooter = (function() {
        ModuleSequenceFooter.prototype.iconClasses = {
          'ModuleItem': "icon-module",
          'File': "icon-download",
          'Page': "icon-document",
          'Discussion': "icon-discussion",
          'Assignment': "icon-assignment",
          'Quiz': "icon-quiz",
          'ExternalTool': "icon-link"
        };

        function ModuleSequenceFooter(options) {
          this.success = __bind(this.success, this);          this.instanceNumber = msfInstanceCounter++;
          this.courseID = (options != null ? options.courseID : void 0) || (typeof ENV !== "undefined" && ENV !== null ? ENV.course_id : void 0);
          this.assetID = options != null ? options.assetID : void 0;
          this.assetType = options != null ? options.assetType : void 0;
          this.location = (options != null ? options.location : void 0) || document.location;
          this.previous = {};
          this.next = {};
          this.url = "/api/v1/courses/" + this.courseID + "/module_item_sequence";
        }

        ModuleSequenceFooter.prototype.getQueryParams = function(qs) {
          var params, re, tokens;

          qs = qs.split("+").join(" ");
          params = {};
          re = /[?&]?([^=]+)=([^&]*)/g;
          while ((tokens = re.exec(qs))) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
          }
          return params;
        };

        ModuleSequenceFooter.prototype.fetch = function() {
          var params;

          params = this.getQueryParams(this.location.search);
          if (params.module_item_id) {
            return $.ajaxJSON(this.url, 'GET', {
              asset_type: 'ModuleItem',
              asset_id: params.module_item_id,
              frame_external_urls: true
            }, this.success, null, {});
          } else {
            return $.ajaxJSON(this.url, 'GET', {
              asset_type: this.assetType,
              asset_id: this.assetID,
              frame_external_urls: true
            }, this.success, null, {});
          }
        };

        ModuleSequenceFooter.prototype.success = function(data) {
          var _ref;

          this.modules = data.modules;
          if ((data != null ? (_ref = data.items) != null ? _ref.length : void 0 : void 0) !== 1) {
            this.hide = true;
            return;
          }
          this.item = data.items[0];
          if ((this.next.show = this.item.next)) {
            this.buildNextData();
          }
          if ((this.previous.show = this.item.prev)) {
            return this.buildPreviousData();
          }
        };

        ModuleSequenceFooter.prototype.buildPreviousData = function() {
          var module,
            _this = this;

          this.previous.url = this.item.prev.html_url;
          if (this.item.current.module_id === this.item.prev.module_id) {
            this.previous.tooltip = "<i class='" + this.iconClasses[this.item.prev.type] + "'></i> " + this.item.prev.title;
            return this.previous.tooltipText = I18n.t('prev_module_item_desc', 'Previous: *item*', {
              wrapper: this.item.prev.title
            });
          } else {
            module = _.find(this.modules, function(m) {
              return m.id === _this.item.prev.module_id;
            });
            this.previous.tooltip = "<strong style='float:left'>" + (I18n.t('prev_module', 'Previous Module:')) + "</strong> <br> " + module.name;
            return this.previous.tooltipText = I18n.t('prev_module_desc', 'Previous Module: *module*', {
              wrapper: module.name
            });
          }
        };

        ModuleSequenceFooter.prototype.buildNextData = function() {
          var module,
            _this = this;

          this.next.url = this.item.next.html_url;
          if (this.item.current.module_id === this.item.next.module_id) {
            this.next.tooltip = "<i class='" + this.iconClasses[this.item.next.type] + "'></i> " + this.item.next.title;
            return this.next.tooltipText = I18n.t('next_module_item_desc', 'Next: *item*', {
              wrapper: this.item.next.title
            });
          } else {
            module = _.find(this.modules, function(m) {
              return m.id === _this.item.next.module_id;
            });
            this.next.tooltip = "<strong style='float:left'>" + (I18n.t('next_module', 'Next Module:')) + "</strong> <br> " + module.name;
            return this.next.tooltipText = I18n.t('next_module_desc', 'Next Module: *module*', {
              wrapper: module.name
            });
          }
        };

        return ModuleSequenceFooter;

      })();
    })(jQuery, window, document, template);
  });

}).call(this);
