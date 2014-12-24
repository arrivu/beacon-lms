define('jst/outcomes/outcome', ["compiled/handlebars_helpers","i18n!outcomes.outcome"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/outcome'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <a href='";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <td class=\"rating\">\n      <h5>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome")
  },data:data},helper ? helper.call(depth0, "points.rating", "%{points} Points", options) : helperMissing.call(depth0, "t", "points.rating", "%{points} Points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['native']), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<a href=\"#\" style=\"float:right\" class=\"delete_button ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome")
  },data:data},helper ? helper.call(depth0, "links.delete_outcome", "Delete Outcome", options) : helperMissing.call(depth0, "t", "links.delete_outcome", "Delete Outcome", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<a href=\"#\" style=\"float:right\" class=\"edit_button ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome")
  },data:data},helper ? helper.call(depth0, "links.edit_outcome", "Edit Outcome", options) : helperMissing.call(depth0, "t", "links.edit_outcome", "Edit Outcome", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</a>\n";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <label for=\"outcome_mastery_at\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome")
  },data:data},helper ? helper.call(depth0, "mastery_at_label", "Set mastery for any score at or above:", options) : helperMissing.call(depth0, "t", "mastery_at_label", "Set mastery for any score at or above:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <input type=\"text\" name=\"mastery_at\" id=\"outcome_mastery_at\" value=\"60\" />\n    %\n  </label>\n";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.useForScoring), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <label for=\"outcome_use_for_scoring\">\n      <input type=\"checkbox\" id=\"outcome_use_for_scoring\" class=\"criterion_for_scoring\" checked />\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome")
  },data:data},helper ? helper.call(depth0, "use_for_scoring", "Use this criterion for scoring", options) : helperMissing.call(depth0, "t", "use_for_scoring", "Use this criterion for scoring", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n  ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome")
  },data:data},helper ? helper.call(depth0, "point_mastery", "Mastery at %{mastery_points} points", options) : helperMissing.call(depth0, "t", "point_mastery", "Mastery at %{mastery_points} points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  ";
  return buffer;
  }

  buffer += "<h2 class=\"title\">\n  <i class=\"icon-note-light\"></i>\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.isLargeRoster), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</h2>\n<div class=\"description\">\n  ";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<table class=\"criterion\">\n  <tr>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.ratings), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <td class=\"total\">\n      <h5 class=\"total\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome")
  },data:data},helper ? helper.call(depth0, "total_points", "Total Points", options) : helperMissing.call(depth0, "t", "total_points", "Total Points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.outcome")
  },data:data},helper ? helper.call(depth0, "points.total", "%{points_possible} Points", options) : helperMissing.call(depth0, "t", "points.total", "%{points_possible} Points", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </td>\n  </tr>\n</table>\n\n";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.readOnly), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.setQuizMastery), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
  
      
  return templates['outcomes/outcome'];
});
