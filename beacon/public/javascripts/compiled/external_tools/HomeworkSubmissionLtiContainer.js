(function() {
  define(['Backbone', 'i18n!assignments', 'jquery', 'underscore', 'jst/assignments/homework_submission_tool', 'compiled/views/ExternalTools/ExternalContentReturnView', 'compiled/external_tools/ExternalToolCollection', 'compiled/views/assignments/ExternalContentFileSubmissionView', 'compiled/views/assignments/ExternalContentUrlSubmissionView', 'jquery.disableWhileLoading'], function(Backbone, I18n, $, _, homeworkSubmissionTool, ExternalContentReturnView, ExternalToolCollection, ExternalContentFileSubmissionView, ExternalContentUrlSubmissionView) {
    var HomeworkSubmissionLtiContainer;

    return HomeworkSubmissionLtiContainer = (function() {
      function HomeworkSubmissionLtiContainer(toolsFormSelector) {
        this.renderedViews = {};
        this.toolsForm = $(toolsFormSelector);
        this.externalToolCollection = new ExternalToolCollection;
        this.externalToolCollection.add(ENV.EXTERNAL_TOOLS);
      }

      HomeworkSubmissionLtiContainer.prototype.loadExternalTools = function() {
        var _this = this;

        if (this.externalToolCollection.length > 0) {
          $(".submit_from_external_tool_option").parent().show();
          this.toolsForm.find("ul.tools").empty();
          return this.externalToolCollection.forEach(function(tool) {
            return _this.addToolToMoreList(tool);
          });
        } else {
          return this.toolsForm.find("ul.tools li").text(I18n.t("no_tools_found", "No tools found"));
        }
      };

      HomeworkSubmissionLtiContainer.prototype.embedLtiLaunch = function(toolId) {
        var returnView, tool;

        tool = this.externalToolCollection.findWhere({
          id: toolId.toString(10)
        });
        this.cleanupViewsForTool(tool);
        returnView = this.createReturnView(tool);
        $('#submit_from_external_tool_form_' + toolId).append(returnView.el);
        returnView.render();
        return this.renderedViews[toolId.toString(10)].push(returnView);
      };

      HomeworkSubmissionLtiContainer.prototype.cleanupViewsForTool = function(tool) {
        var views,
          _this = this;

        if (_.has(this.renderedViews, tool.get('id'))) {
          views = this.renderedViews[tool.get('id')];
          views.forEach(function(v) {
            return v.remove();
          });
        }
        return this.renderedViews[tool.get('id')] = [];
      };

      HomeworkSubmissionLtiContainer.prototype.cancelSubmission = function() {
        $('#submit_assignment').hide();
        return $('.submit_assignment_link').show();
      };

      HomeworkSubmissionLtiContainer.prototype.addToolToMoreList = function(tool) {
        var $li, html;

        tool.attributes.display_text = tool.get('homework_submission').label;
        html = homeworkSubmissionTool(tool.attributes);
        $li = $(html).data('tool', tool);
        return this.toolsForm.find("ul.tools").append($li);
      };

      HomeworkSubmissionLtiContainer.prototype.createReturnView = function(tool) {
        var returnView,
          _this = this;

        returnView = new ExternalContentReturnView({
          model: tool,
          launchType: 'homework_submission',
          launchParams: {
            assignment_id: ENV.SUBMIT_ASSIGNMENT.ID
          },
          displayAsModal: false
        });
        returnView.on('ready', function(data) {
          var homeworkSubmissionView;

          tool = this.model;
          homeworkSubmissionView = _this.createHomeworkSubmissionView(tool, data);
          homeworkSubmissionView.parentView = _this;
          this.remove();
          $('#submit_from_external_tool_form_' + tool.get('id')).append(homeworkSubmissionView.el);
          _this.cleanupViewsForTool(tool);
          _this.renderedViews[tool.get('id')].push(homeworkSubmissionView);
          return homeworkSubmissionView.render();
        });
        returnView.on('cancel', function(data) {});
        return returnView;
      };

      HomeworkSubmissionLtiContainer.prototype.createHomeworkSubmissionView = function(tool, data) {
        var homeworkSubmissionView;

        if (data.return_type === 'file') {
          homeworkSubmissionView = new ExternalContentFileSubmissionView({
            externalTool: tool,
            model: new Backbone.Model(data)
          });
        } else {
          homeworkSubmissionView = new ExternalContentUrlSubmissionView({
            externalTool: tool,
            model: new Backbone.Model(data)
          });
        }
        homeworkSubmissionView.on('relaunchTool', function(tool, model) {
          this.remove();
          return this.parentView.embedLtiLaunch(tool.get('id'));
        });
        homeworkSubmissionView.on('cancel', function(tool, model) {
          return this.parentView.cancelSubmission();
        });
        return homeworkSubmissionView;
      };

      return HomeworkSubmissionLtiContainer;

    })();
  });

}).call(this);
