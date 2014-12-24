define('jst/assignments/CreateGroup', ["compiled/handlebars_helpers","i18n!assignments.create_group"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/CreateGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "disabled";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <hr/>\n      <fieldset>\n        <legend class=\"drop_rules_section\">Number of scores to ignore for each student</legend>\n\n        <div class=\"control-group\">\n          <label class=\"control-label\" for=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_drop_lowest\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "drop_lowest", "Lowest Scores:", options) : helperMissing.call(depth0, "t", "drop_lowest", "Lowest Scores:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n          <div class=\"controls\">\n            <input\n              type=";
  if (helper = helpers.number_input) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number_input); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n              id=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_drop_lowest\"\n              class=\"span1 field\"\n              name=\"rules[drop_lowest]\"\n              value=\"";
  if (helper = helpers.drop_lowest) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.drop_lowest); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n            />\n          </div>\n        </div>\n        <div class=\"control-group\">\n          <label class=\"control-label\" for=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_drop_highest\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "drop_highest", "Highest Scores:", options) : helperMissing.call(depth0, "t", "drop_highest", "Highest Scores:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n          <div class=\"controls\">\n            <input\n              type=";
  if (helper = helpers.number_input) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number_input); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n              id=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_drop_highest\"\n              class=\"span1 field\"\n              name=\"rules[drop_highest]\"\n              value=\"";
  if (helper = helpers.drop_highest) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.drop_highest); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n            />\n          </div>\n        </div>\n\n        <hr/>\n        <div class=\"control-group\">\n          <label class=\"control-label\" id=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_never_drop\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "never_drop", "Never Drop:", options) : helperMissing.call(depth0, "t", "never_drop", "Never Drop:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n          <div class=\"controls never_drop_rules_group\">\n          </div>\n        </div>\n      </fieldset>\n    ";
  return buffer;
  }

  buffer += "<div class=\"form-dialog-content\">\n  <div class=\"form-horizontal\">\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_name\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "group_name", "Group Name:", options) : helperMissing.call(depth0, "t", "group_name", "Group Name:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <div class=\"controls\">\n        <input\n          type=\"text\"\n          id=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_name\"\n          name=\"name\"\n          value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n          placeholder='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "example_group_name", "e.g., Essay Group 1", options) : helperMissing.call(depth0, "t", "example_group_name", "e.g., Essay Group 1", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n        />\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <input\n          type=\"text\"\n          id=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_group_weight\"\n          class=\"span1 group_weight\"\n          name=\"group_weight\"\n          value=\"";
  if (helper = helpers.group_weight) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.group_weight); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.disable_weight), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        />\n        <label style=\"display:inline-block\" for=\"ag_";
  if (helper = helpers.label_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_group_weight\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "percent_of_total", "% of total grade", options) : helperMissing.call(depth0, "t", "percent_of_total", "% of total grade", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.editable_drop), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n<div class=\"form-controls\">\n  <button\n    class=\"cancel_button btn dialog_closer\"\n    type=\"button\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    class=\"create_group btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "saving", "Saving...", options) : helperMissing.call(depth0, "t", "saving", "Saving...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.create_group")
  },data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  });
  
      
  return templates['assignments/CreateGroup'];
});
