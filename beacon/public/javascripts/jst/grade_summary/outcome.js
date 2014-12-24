define('jst/grade_summary/outcome', ["compiled/handlebars_helpers","i18n!grade_summary.outcome"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['grade_summary/outcome'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "mastery", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.status), "mastery", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n      "
    + escapeExpression((helper = helpers.addIcon || (depth0 && depth0.addIcon),options={hash:{},data:data},helper ? helper.call(depth0, "complete", options) : helperMissing.call(depth0, "addIcon", "complete", options)))
    + "\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.status), "near", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.status), "near", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        "
    + escapeExpression((helper = helpers.addIcon || (depth0 && depth0.addIcon),options={hash:{},data:data},helper ? helper.call(depth0, "partial", options) : helperMissing.call(depth0, "addIcon", "partial", options)))
    + "\n      ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n        "
    + escapeExpression((helper = helpers.addIcon || (depth0 && depth0.addIcon),options={hash:{},data:data},helper ? helper.call(depth0, "trouble", options) : helperMissing.call(depth0, "addIcon", "trouble", options)))
    + "\n      ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n    <i class=\"icon-empty\"></i>\n  ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  if (helper = helpers.hover_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.hover_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ": ";
  return buffer;
  }

function program13(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.roundedScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.roundedScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program15(depth0,data) {
  
  
  return "-";
  }

  buffer += "<div class=\"outcome-icon ";
  if (helper = helpers.status) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.status); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-tooltip=\"top\" title=\"";
  if (helper = helpers.statusTooltip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.statusTooltip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" aria-label=\"Outcome: ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " has a status of ";
  if (helper = helpers.statusTooltip) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.statusTooltip); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scoreDefined), {hash:{},inverse:self.program(9, program9, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"outcome-properties\">\n  <div class=\"title\" data-tooltip title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hover_name), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <h4>";
  if (helper = helpers.friendly_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.friendly_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n  </div>\n  <div class=\"description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n</div>\n<div class=\"outcome-score outcome-bar-wrapper\">\n  "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.progress), options) : helperMissing.call(depth0, "view", (depth0 && depth0.progress), options)))
    + "\n  <span class=\"score\" aria-label=\"Score: ";
  if (helper = helpers.roundedScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.roundedScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " out of ";
  if (helper = helpers.points_possible) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.points_possible); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " points with mastery at ";
  if (helper = helpers.mastery_points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mastery_points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <strong>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scoreDefined), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>/";
  if (helper = helpers.mastery_points) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.mastery_points); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </span>\n  <a href=\"#tab-outcomes/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" aria-haspopup='true' aria-owns='outcome_detail'>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("grade_summary.outcome"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "alignment_count", "*%{count}* Alignments", options) : helperMissing.call(depth0, "t", "alignment_count", "*%{count}* Alignments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </a>\n</div>\n";
  return buffer;
  });
  
      
  return templates['grade_summary/outcome'];
});
