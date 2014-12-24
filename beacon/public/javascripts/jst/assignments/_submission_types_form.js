define('jst/assignments/_submission_types_form', ["compiled/handlebars_helpers","i18n!assignments.submission_types_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/_submission_types_form'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <label class=\"checkbox\" for=\"assignment_media_recording\">\n            "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_media_recording"),
    'name': ("online_submission_types[media_recording]"),
    'disabled': ((depth0 && depth0.submissionTypesFrozen))
  },data:data},helper ? helper.call(depth0, "acceptsMediaRecording", options) : helperMissing.call(depth0, "checkbox", "acceptsMediaRecording", options)))
    + "\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "labels.allow_media_recordings", "Media Recordings", options) : helperMissing.call(depth0, "t", "labels.allow_media_recordings", "Media Recordings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n        ";
  return buffer;
  }

  buffer += "<fieldset>\n  <div class=\"form-column-left\">\n    <label for=\"assignment_submission_type\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "submission_type", "Submission Type", options) : helperMissing.call(depth0, "t", "submission_type", "Submission Type", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n  <div class=\"form-column-right\">\n    <div class=\"border border-trbl border-round\">\n\n      \n      <select id=\"assignment_submission_type\"\n        name=\"submission_type\"\n        aria-controls=\"assignment_online_submission_types,assignment_external_tool_settings,assignment_group_selector,assignment_peer_reviews_fields\"\n        "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "submission_types", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "submission_types", options)))
    + ">\n        <option value=\"none\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.submissionType), "none", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.submissionType), "none", options)))
    + ">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "submission_types.no_submission", "No Submission", options) : helperMissing.call(depth0, "t", "submission_types.no_submission", "No Submission", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"online\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.submissionType), "online", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.submissionType), "online", options)))
    + ">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "submission_types.online", "Online", options) : helperMissing.call(depth0, "t", "submission_types.online", "Online", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"on_paper\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.submissionType), "on_paper", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.submissionType), "on_paper", options)))
    + ">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "submission_types.on_paper", "On Paper", options) : helperMissing.call(depth0, "t", "submission_types.on_paper", "On Paper", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"external_tool\" "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.submissionType), "external_tool", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.submissionType), "external_tool", options)))
    + ">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "submission_types.external_tool", "External Tool", options) : helperMissing.call(depth0, "t", "submission_types.external_tool", "External Tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n      </select>\n\n      \n      <div id=\"assignment_online_submission_types\"\n        aria-enabled=\"";
  if (helper = helpers.isOnlineSubmission) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.isOnlineSubmission); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n        style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isOnlineSubmission), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.isOnlineSubmission), options)))
    + "\">\n\n        <div class=\"subtitle\">\n          <strong>\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "online_entry_options", "Online Entry Options", options) : helperMissing.call(depth0, "t", "online_entry_options", "Online Entry Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </strong>\n        </div>\n\n        <label class=\"checkbox\" for=\"assignment_text_entry\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_text_entry"),
    'name': ("online_submission_types[online_text_entry]"),
    'disabled': ((depth0 && depth0.submissionTypesFrozen))
  },data:data},helper ? helper.call(depth0, "acceptsOnlineTextEntries", options) : helperMissing.call(depth0, "checkbox", "acceptsOnlineTextEntries", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "labels.allow_text_entry", "Text Entry", options) : helperMissing.call(depth0, "t", "labels.allow_text_entry", "Text Entry", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n\n        <label class=\"checkbox\" for=\"assignment_online_url\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_online_url"),
    'name': ("online_submission_types[online_url]"),
    'disabled': ((depth0 && depth0.submissionTypesFrozen))
  },data:data},helper ? helper.call(depth0, "acceptsOnlineURL", options) : helperMissing.call(depth0, "checkbox", "acceptsOnlineURL", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "labels.allow_url", "Website URL", options) : helperMissing.call(depth0, "t", "labels.allow_url", "Website URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.kalturaEnabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <label class=\"checkbox\" for=\"assignment_online_upload\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_online_upload"),
    'name': ("online_submission_types[online_upload]"),
    'aria-controls': ("restrict_file_extensions_container"),
    'disabled': ((depth0 && depth0.submissionTypesFrozen))
  },data:data},helper ? helper.call(depth0, "acceptsOnlineUpload", options) : helperMissing.call(depth0, "checkbox", "acceptsOnlineUpload", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "labels.allow_file_uploads", "File Uploads", options) : helperMissing.call(depth0, "t", "labels.allow_file_uploads", "File Uploads", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n\n        \n        <div id=\"restrict_file_extensions_container\"\n          class=\"nested\"\n          aria-expanded=\"";
  if (helper = helpers.acceptsOnlineUpload) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.acceptsOnlineUpload); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n          style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.acceptsOnlineUpload), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.acceptsOnlineUpload), options)))
    + "\">\n\n          <label class=\"checkbox\" for=\"assignment_restrict_file_extensions\">\n            "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_restrict_file_extensions"),
    'name': ("restrict_file_extensions"),
    'aria-controls': ("allowed_extensions_container"),
    'disabled': ((depth0 && depth0.submissionTypesFrozen))
  },data:data},helper ? helper.call(depth0, "restrictFileExtensions", options) : helperMissing.call(depth0, "checkbox", "restrictFileExtensions", options)))
    + "\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "labels.restrict_file_extensions", "Restrict Upload File Types", options) : helperMissing.call(depth0, "t", "labels.restrict_file_extensions", "Restrict Upload File Types", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n\n          \n          <div id=\"allowed_extensions_container\"\n            aria-expanded=\"";
  if (helper = helpers.restrictFileExtensions) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.restrictFileExtensions); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n            style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.restrictFileExtensions), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.restrictFileExtensions), options)))
    + "\"\n            class=\"nested\">\n            <label for=\"assignment_allowed_extensions\" class=\"hidden-readable\">\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "labels.allowed_extensions", "Allowed File Extensions", options) : helperMissing.call(depth0, "t", "labels.allowed_extensions", "Allowed File Extensions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </label>\n\n            <input id=\"assignment_allowed_extensions\"\n              name=\"allowed_extensions\"\n              type=\"text\"\n              maxlength=\"254\"\n              placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "labels.allowed_extensions", "Allowed File Extensions", options) : helperMissing.call(depth0, "t", "labels.allowed_extensions", "Allowed File Extensions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n              value=\""
    + escapeExpression((helper = helpers.join || (depth0 && depth0.join),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.allowedExtensions), ",", options) : helperMissing.call(depth0, "join", (depth0 && depth0.allowedExtensions), ",", options)))
    + "\"\n              "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "submission_types", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "submission_types", options)))
    + "/>\n            <div class=\"explanation nest\">\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "descriptions.allowed_extensions", "Enter a list of accepted extensions, for example: doc,xls,txt", options) : helperMissing.call(depth0, "t", "descriptions.allowed_extensions", "Enter a list of accepted extensions, for example: doc,xls,txt", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n          </div>\n        </div>\n\n        \n        <div style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.turnitinAvailable), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.turnitinAvailable), options)))
    + "\">\n          <label for=\"assignment_turnitin_enabled\" class=\"checkbox\">\n            "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_turnitin_enabled"),
    'name': ("turnitin_enabled"),
    'aria-controls': ("advanced_turnitin_settings_link"),
    'disabled': ((depth0 && depth0.submissionTypesFrozen))
  },data:data},helper ? helper.call(depth0, "turnitinEnabled", options) : helperMissing.call(depth0, "checkbox", "turnitinEnabled", options)))
    + "\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "label.turnitin_enabled", "Enable Turnitin Submissions", options) : helperMissing.call(depth0, "t", "label.turnitin_enabled", "Enable Turnitin Submissions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n\n          <div class=\"nested\">\n            <a href=\"#\"\n              id=\"advanced_turnitin_settings_link\"\n              aria-expanded=\"";
  if (helper = helpers.turnitinEnabled) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.turnitinEnabled); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n              style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.turnitinEnabled), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.turnitinEnabled), options)))
    + "\">\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "advanced_turnitin_settings", "Advanced Turnitin Settings", options) : helperMissing.call(depth0, "t", "advanced_turnitin_settings", "Advanced Turnitin Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </a>\n          </div>\n        </div>\n      </div>\n\n      \n      <div id=\"assignment_external_tool_settings\" style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isExternalTool), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.isExternalTool), options)))
    + "\">\n        <div class=\"subtitle\">\n          <strong>\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "external_tool_options", "External Tool Options", options) : helperMissing.call(depth0, "t", "external_tool_options", "External Tool Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </strong>\n        </div>\n        <label for=\"assignment_external_tool_tag_attributes_url\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "label.external_tool_url", "External Tool URL", options) : helperMissing.call(depth0, "t", "label.external_tool_url", "External Tool URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n        <div class=\"nested\">\n          <input id=\"assignment_external_tool_tag_attributes_url\"\n            name=\"external_tool_tag_attributes[url]\"\n            type=\"text\"\n            value=\"";
  if (helper = helpers.externalToolUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.externalToolUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n            "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "submission_types", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "submission_types", options)))
    + "/>\n        </div>\n        <label for=\"assignment_external_tool_tag_attributes_new_tab\" class=\"checkbox\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_external_tool_tag_attributes_new_tab"),
    'name': ("external_tool_tag_attributes[new_tab]"),
    'disabled': ((depth0 && depth0.submissionTypesFrozen))
  },data:data},helper ? helper.call(depth0, "externalToolNewTab", options) : helperMissing.call(depth0, "checkbox", "externalToolNewTab", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.submission_types_form")
  },data:data},helper ? helper.call(depth0, "label.external_tool_new_tab", "Load This Tool In A New Tab", options) : helperMissing.call(depth0, "t", "label.external_tool_new_tab", "Load This Tool In A New Tab", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n  </div>\n</fieldset>\n";
  return buffer;
  });
  
Handlebars.registerPartial('assignments/submission_types_form', templates['assignments/_submission_types_form']);

      
  return templates['assignments/_submission_types_form'];
});
