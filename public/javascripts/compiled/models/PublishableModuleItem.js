(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['compiled/backbone-ext/DefaultUrlMixin', 'Backbone', 'i18n!publishableModuleItem'], function(DefaultUrlMixin, _arg, I18n) {
    var Model, PublishableModuleItem, _ref;

    Model = _arg.Model;
    return PublishableModuleItem = (function(_super) {
      __extends(PublishableModuleItem, _super);

      function PublishableModuleItem() {
        _ref = PublishableModuleItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PublishableModuleItem.prototype.defaults = {
        module_type: null,
        course_id: null,
        module_id: null,
        published: true,
        publishable: true,
        unpublishable: true
      };

      PublishableModuleItem.prototype.branch = function(key) {
        return (this[key][this.get('module_type')] || this[key].generic).call(this);
      };

      PublishableModuleItem.prototype.url = function() {
        return this.branch('urls');
      };

      PublishableModuleItem.prototype.toJSON = function() {
        return this.branch('toJSONs');
      };

      PublishableModuleItem.prototype.disabledMessage = function() {
        return this.branch('disabledMessages');
      };

      PublishableModuleItem.prototype.baseUrl = function() {
        return "/api/v1/courses/" + (this.get('course_id'));
      };

      PublishableModuleItem.prototype.urls = {
        generic: function() {
          return "" + (this.baseUrl()) + "/modules/" + (this.get('module_id')) + "/items/" + (this.get('module_item_id') || this.get('id'));
        },
        wiki_page: function() {
          return "" + (this.baseUrl()) + "/pages/" + (this.get('id'));
        },
        assignment: function() {
          return "" + (this.baseUrl()) + "/assignments/" + (this.get('id'));
        },
        discussion_topic: function() {
          return "" + (this.baseUrl()) + "/discussion_topics/" + (this.get('id'));
        },
        module: function() {
          return "" + (this.baseUrl()) + "/modules/" + (this.get('id'));
        },
        quiz: function() {
          var action;

          action = this.get('published') ? 'publish' : 'unpublish';
          return "/courses/" + (this.get('course_id')) + "/quizzes/" + action;
        }
      };

      PublishableModuleItem.prototype.toJSONs = {
        generic: function() {
          return {
            module_item: this.attributes
          };
        },
        wiki_page: function() {
          return {
            wiki_page: this.attributes
          };
        },
        assignment: function() {
          return {
            assignment: this.attributes
          };
        },
        discussion_topic: function() {
          return this.attributes;
        },
        quiz: function() {
          return {
            quizzes: [this.get('id')]
          };
        },
        module: function() {
          return {
            module: this.attributes
          };
        }
      };

      PublishableModuleItem.prototype.disabledMessages = {
        generic: function() {
          return I18n.t('disabled', 'Publishing is disabled for this item');
        },
        assignment: function() {
          return I18n.t('disabled_assignment', "Can't unpublish if there are student submissions");
        },
        quiz: function() {
          return I18n.t('disabled_quiz', "Can't unpublish if there are student submissions");
        },
        discussion_topic: function() {
          return I18n.t('disabled_discussion_topic', "Can't unpublish if there are student submissions");
        }
      };

      PublishableModuleItem.prototype.publish = function() {
        return this.save('published', true);
      };

      PublishableModuleItem.prototype.unpublish = function() {
        return this.save('published', false);
      };

      return PublishableModuleItem;

    })(Model);
  });

}).call(this);
