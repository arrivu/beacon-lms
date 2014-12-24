define('jst/assignments/CreateAssignment', ["compiled/handlebars_helpers","i18n!assignments.create_assignment"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/CreateAssignment'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignment_type\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "assignment_type", "Type:", options) : helperMissing.call(depth0, "t", "assignment_type", "Type:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <div class=\"controls\">\n        <select type=\"text\" id=\"";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignment_type\" name=\"submission_types\">\n          <option value>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "assignment", "Assignment", options) : helperMissing.call(depth0, "t", "assignment", "Assignment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n          <option value=\"discussion_topic\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "discussion_type", "Discussion", options) : helperMissing.call(depth0, "t", "discussion_type", "Discussion", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n          <option value=\"online_quiz\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "quiz_type", "Quiz", options) : helperMissing.call(depth0, "t", "quiz_type", "Quiz", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n          <option value=\"external_tool\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "external_tool_type", "External Tool", options) : helperMissing.call(depth0, "t", "external_tool_type", "External Tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n          <option value=\"not_graded\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "not_graded_type", "Not Graded", options) : helperMissing.call(depth0, "t", "not_graded_type", "Not Graded", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n        </select>\n      </div>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <span class=\"datetime_field multiple_due_dates\" title\n              data-tooltip-selector=\"#vdd_tooltip_";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n              aria-labelledby=\"vdd_tooltip_";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <input\n            class=\"input-medium\"\n            type=\"text\"\n            value=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "multiple_due_dates", "Multiple due dates", options) : helperMissing.call(depth0, "t", "multiple_due_dates", "Multiple due dates", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            disabled=\"disabled\" />\n        </span>\n\n        <div id=\"vdd_tooltip_";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display:none;\">\n          <dl class=\"vdd_tooltip_content dl-horizontal\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.allDates), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </dl>\n        </div>\n\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n              <div class=\"clearfix\">\n                <dt>";
  if (helper = helpers.dueFor) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dueFor); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</dt>\n                <dd>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.dueAt), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</dd>\n              </div>\n            ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += " "
    + escapeExpression((helper = helpers.strftime || (depth0 && depth0.strftime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dueAt), "%b %-d", options) : helperMissing.call(depth0, "strftime", (depth0 && depth0.dueAt), "%b %-d", options)))
    + " ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return " - ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <input\n          id=\"";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignment_due_at\"\n          class=\"datetime_field input-medium\"\n          type=\"text\"\n          name=\"due_at\"\n          value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.dueAt), false, options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.dueAt), false, options)))
    + "\"\n          "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "due_at", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "due_at", options)))
    + "/>\n      ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignment_points\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "assignment_points", "Points:", options) : helperMissing.call(depth0, "t", "assignment_points", "Points:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <div class=\"controls\">\n        <input\n          id=\"";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignment_points\"\n          class=\"input-small\"\n          type=\"text\"\n          name=\"points_possible\"\n          value=\"";
  if (helper = helpers.pointsPossible) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pointsPossible); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n          "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "points_possible", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "points_possible", options)))
    + "/>\n      </div>\n    </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"form-dialog-content create_assignment_dialog\">\n  <div class=\"form-horizontal\">\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canChooseType), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignment_name\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "assignment_name", "Name:", options) : helperMissing.call(depth0, "t", "assignment_name", "Name:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <div class=\"controls\">\n        <input\n          id=\"";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignment_name\"\n          type=\"text\"\n          name=\"name\"\n          value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n          "
    + escapeExpression((helper = helpers.disabledIfIncludes || (depth0 && depth0.disabledIfIncludes),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.frozenAttributes), "title", options) : helperMissing.call(depth0, "disabledIfIncludes", (depth0 && depth0.frozenAttributes), "title", options)))
    + "/>\n      </div>\n    </div>\n\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"";
  if (helper = helpers.uniqLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignment_due_at\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "assignment_due_at", "Due:", options) : helperMissing.call(depth0, "t", "assignment_due_at", "Due:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <div class=\"controls\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.multipleDueDates), {hash:{},inverse:self.program(9, program9, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n\n    ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isQuiz), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n<div class=\"form-controls\">\n  <button\n    class=\"more_options btn pull-left\"\n    type=\"button\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "more", "More Options", options) : helperMissing.call(depth0, "t", "more", "More Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    class=\"cancel_button btn dialog_closer\"\n    type=\"button\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    class=\"create_assignment btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_assignment")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/CreateAssignment'];
});
