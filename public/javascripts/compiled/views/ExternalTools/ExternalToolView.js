(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'jst/ExternalTools/ExternalToolView', 'i18n!external_tools'], function($, template, I18n) {
    var ExternalToolView, _ref;

    return ExternalToolView = (function(_super) {
      __extends(ExternalToolView, _super);

      function ExternalToolView() {
        _ref = ExternalToolView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ExternalToolView.prototype.template = template;

      ExternalToolView.prototype.tagName = 'tr';

      ExternalToolView.prototype.className = 'external_tool_item';

      ExternalToolView.prototype.afterRender = function() {
        this.$el.attr('id', 'external_tool_' + this.model.get('id'));
        return this;
      };

      ExternalToolView.prototype.toJSON = function() {
        var extra, extras, json;

        extras = [
          {
            extension_type: 'editor_button',
            text: I18n.t('editor_button_configured', 'Editor button configured')
          }, {
            extension_type: 'resource_selection',
            text: I18n.t('resource_selection_configured', 'Resource selection configured')
          }, {
            extension_type: 'course_navigation',
            text: I18n.t('course_navigation_configured', 'Course navigation configured')
          }, {
            extension_type: 'account_navigation',
            text: I18n.t('account_navigation_configured', 'Account navigation configured')
          }, {
            extension_type: 'user_navigation',
            text: I18n.t('user_navigation_configured', 'User navigation configured')
          }, {
            extension_type: 'homework_submission',
            text: I18n.t('homework_submission_configured', 'Homework submission configured')
          }, {
            extension_type: 'migration_selection',
            text: I18n.t('migration_selection_configured', 'Migration selection configured')
          }, {
            extension_type: 'course_home_sub_navigation',
            text: I18n.t('course_home_sub_navigation_configured', 'Course home sub navigation configured')
          }, {
            extension_type: 'course_settings_sub_navigation',
            text: I18n.t('course_settings_sub_navigation_configured', 'Course settings sub navigation configured')
          }, {
            extension_type: 'global_navigation',
            text: I18n.t('global_navigation_configured', 'Global navigation configured')
          }, {
            extension_type: 'assignment_menu',
            text: I18n.t('assignment_menu_configured', 'Assignment menu configured')
          }, {
            extension_type: 'discussion_topic_menu',
            text: I18n.t('discussion_topic_menu_configured', 'Discussion Topic menu configured')
          }, {
            extension_type: 'module_menu',
            text: I18n.t('module_menu_configured', 'Module menu configured')
          }, {
            extension_type: 'quiz_menu',
            text: I18n.t('quiz_menu_configured', 'Quiz menu configured')
          }, {
            extension_type: 'wiki_page_menu',
            text: I18n.t('wiki_page_menu_configured', 'Wiki page menu configured')
          }
        ];
        json = ExternalToolView.__super__.toJSON.apply(this, arguments);
        json.extras = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = extras.length; _i < _len; _i++) {
            extra = extras[_i];
            if (json[extra.extension_type] != null) {
              _results.push(extra);
            }
          }
          return _results;
        })();
        return json;
      };

      return ExternalToolView;

    })(Backbone.View);
  });

}).call(this);
