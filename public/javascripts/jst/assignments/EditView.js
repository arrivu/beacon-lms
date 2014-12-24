define('jst/assignments/EditView', ["compiled/handlebars_helpers","i18n!assignments.edit_view","jst/assignments/_submission_types_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/EditView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"alert alert-info\">\n    <i class=\"icon-warning\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "warnings.assignment_is_frozen", "Some settings have been administratively locked.", options) : helperMissing.call(depth0, "t", "warnings.assignment_is_frozen", "Some settings have been administratively locked.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <div class=\"frozen-description user_content\">\n      "
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.description), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.description), options)))
    + "\n    </div>\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div style=\"float: right;\">\n      <a href=\"#\" class=\"rte_switch_views_link\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_html", "HTML Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_html", "HTML Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n      <a href=\"#\" class=\"rte_switch_views_link\" style=\"display:none;\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_rich_text", "Rich Content Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_rich_text", "Rich Content Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </div>\n    <div style=\"clear:both;\"></div>\n    <textarea id=\"assignment_description\"\n      name=\"description\"\n      aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "description", "Description", options) : helperMissing.call(depth0, "t", "description", "Description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      style=\"width: 100%; min-height: 300px;\"\n      "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "description", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "description", options)))
    + ">\n      "
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{
    'forEditing': (1)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.description), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.description), options)))
    + "\n    </textarea>\n  ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"form-column-left\"></div>\n<div class=\"form-column-right\">\n    <fieldset>\n        <label class=\"checkbox\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_post_to_sis"),
    'name': ("post_to_sis")
  },data:data},helper ? helper.call(depth0, "postToSIS", options) : helperMissing.call(depth0, "checkbox", "postToSIS", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "post_to_sis", "Post to SIS", options) : helperMissing.call(depth0, "t", "post_to_sis", "Post to SIS", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n    </fieldset>\n</div>\n";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <fieldset id=\"group_category_selector\"\n      class=\"control-group\"\n      style=\""
    + escapeExpression((helper = helpers.hiddenIf || (depth0 && depth0.hiddenIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isExternalTool), options) : helperMissing.call(depth0, "hiddenIf", (depth0 && depth0.isExternalTool), options)))
    + "\">\n    </fieldset>\n  ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    <fieldset id=\"assignment_peer_reviews_fields\"\n      class=\"control-group\"\n      style=\""
    + escapeExpression((helper = helpers.hiddenIf || (depth0 && depth0.hiddenIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isExternalTool), options) : helperMissing.call(depth0, "hiddenIf", (depth0 && depth0.isExternalTool), options)))
    + "\">\n    </fieldset>\n  ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"form-column-left\"></div>\n  <div class=\"form-column-right\">\n    <fieldset>\n      <label class=\"checkbox\" for=\"assignment_freeze_on_copy\">\n        "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_freeze_on_copy"),
    'name': ("freeze_on_copy")
  },data:data},helper ? helper.call(depth0, "freezeOnCopy", options) : helperMissing.call(depth0, "checkbox", "freezeOnCopy", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "freeze_properties", "Lock assignment properties when copied", options) : helperMissing.call(depth0, "t", "freeze_properties", "Lock assignment properties when copied", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </fieldset>\n  </div>\n";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"text-center pad-box-mini\" style=\"margin-bottom:10px\">\n    <span>\n      <em>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "only_visible_to_overrides_note", "Note: This assignment is *only* visible to the section(s) specified below:", options) : helperMissing.call(depth0, "t", "only_visible_to_overrides_note", "Note: This assignment is *only* visible to the section(s) specified below:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </em>\n    </span>\n  </div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.frozen), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"control-group\">\n  <div>\n    <input id=\"assignment_name\"\n      name=\"name\"\n      placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "assignment_name", "Assignment Name", options) : helperMissing.call(depth0, "t", "assignment_name", "Assignment Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "assignment_name", "Assignment Name", options) : helperMissing.call(depth0, "t", "assignment_name", "Assignment Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n      value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n      type=\"text\"\n      maxlength=\"254\"\n      class=\"input-block-level\"\n      "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "title", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "title", options)))
    + "/>\n  </div>\n</div>\n\n<div class=\"control-group\">\n  ";
  stack1 = (helper = helpers.ifIncludes || (depth0 && depth0.ifIncludes),options={hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "description", options) : helperMissing.call(depth0, "ifIncludes", (depth0 && depth0.frozenAttributes), "description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n\n<div class=\"control-group\">\n\n  <div class=\"form-column-left no-group\">\n    <label for=\"assignment_points_possible\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "points_possible", "Points", options) : helperMissing.call(depth0, "t", "points_possible", "Points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n\n  <div class=\"form-column-right\">\n    <input id=\"assignment_points_possible\"\n      name=\"points_possible\"\n      value=\"";
  if (helper = helpers.pointsPossible) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pointsPossible); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n      type=\"text\"\n      "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "points_possible", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "points_possible", options)))
    + "/>\n  </div>\n</div>\n\n\n<fieldset id=\"assignment_group_selector\" class=\"control-group\">\n</fieldset>\n\n<div id=\"grading_type_selector\"></div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.postToSISEnabled), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div id=\"graded_assignment_fields\"\n  aria-expanded=\""
    + escapeExpression((helper = helpers.not || (depth0 && depth0.not),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isNotGraded), options) : helperMissing.call(depth0, "not", (depth0 && depth0.isNotGraded), options)))
    + "\"\n  style=\""
    + escapeExpression((helper = helpers.hiddenIf || (depth0 && depth0.hiddenIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.isNotGraded), options) : helperMissing.call(depth0, "hiddenIf", (depth0 && depth0.isNotGraded), options)))
    + "\">\n\n  ";
  stack1 = self.invokePartial(partials['assignments/submission_types_form'], 'assignments/submission_types_form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isLargeRoster), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isLargeRoster), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canFreeze), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<hr>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.differentiatedAssignmentsEnabled), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class='js-assignment-overrides'></div>\n\n<div class=\"form-actions flush\" style=\"padding-left: 10px;\">\n\n  <div style=\"float: left; min-width: 300px;\">\n    <label class=\"checkbox\" style=\"text-align:left;\" for=\"assignment_notify_of_update\">\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ("assignment_notify_of_update"),
    'name': ("notify_of_update")
  },data:data},helper ? helper.call(depth0, "notifyOfUpdate", options) : helperMissing.call(depth0, "checkbox", "notifyOfUpdate", options)))
    + "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "notify_content_change", "Notify users that this content has changed", options) : helperMissing.call(depth0, "t", "notify_content_change", "Notify users that this content has changed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  </div>\n\n  <button type=\"button\" class=\"btn cancel_button\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "#buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "#buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n  <button type=\"submit\" class=\"btn btn-primary\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.edit_view")
  },data:data},helper ? helper.call(depth0, "buttons.update", "Update Assignment", options) : helperMissing.call(depth0, "t", "buttons.update", "Update Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </button>\n\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/EditView'];
});
