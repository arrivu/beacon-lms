define('jst/accounts/admin_tools/courseLoggingItem', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.course_logging_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/courseLoggingItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_item")
  },data:data},helper ? helper.call(depth0, "blank_placeholder", "-", options) : helperMissing.call(depth0, "t", "blank_placeholder", "-", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n    &nbsp;\n  ";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <a href=\"#\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.course_logging_item")
  },data:data},helper ? helper.call(depth0, "view_event_details", "View Details", options) : helperMissing.call(depth0, "t", "view_event_details", "View Details", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  ";
  return buffer;
  }

  buffer += "<td>\n  "
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), "medium", options) : helperMissing.call(depth0, "tDateToString", (depth0 && depth0.created_at), "medium", options)))
    + "\n</td>\n<td>\n  "
    + escapeExpression((helper = helpers.tTimeToString || (depth0 && depth0.tTimeToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), "tiny", options) : helperMissing.call(depth0, "tTimeToString", (depth0 && depth0.created_at), "tiny", options)))
    + "\n</td>\n<td>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td>\n  ";
  if (helper = helpers.event_type_present) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.event_type_present); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</td>\n<td>\n  ";
  if (helper = helpers.event_source_present) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.event_source_present); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</td>\n<td class=\"courseLoggingDetails\">\n  ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.event_type), "corrupted", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.event_type), "corrupted", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/courseLoggingItem'];
});
