define('jst/outcomes/outcomeGroup', ["compiled/handlebars_helpers","i18n!outcomes.outcome_group"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/outcomeGroup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<a href=\"#\" style=\"float:right\" class=\"edit_button ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_group")
  },data:data},helper ? helper.call(depth0, "links.edit_outcome_group", "Edit Outcome Group", options) : helperMissing.call(depth0, "t", "links.edit_outcome_group", "Edit Outcome Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n<a href=\"#\" style=\"float:right\" class=\"delete_button ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome_group")
  },data:data},helper ? helper.call(depth0, "links.delete_outcome_group", "Delete Outcome Group", options) : helperMissing.call(depth0, "t", "links.delete_outcome_group", "Delete Outcome Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n";
  return buffer;
  }

  buffer += "<h2 class=\"title\">\n  <i class=\"icon-folder\"></i>\n  ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n</h2>\n<div class=\"description\">\n  ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.readOnly), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['outcomes/outcomeGroup'];
});
