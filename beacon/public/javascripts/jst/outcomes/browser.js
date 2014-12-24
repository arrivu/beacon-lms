define('jst/outcomes/browser', ["compiled/handlebars_helpers","i18n!outcomes.browser"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['outcomes/browser'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"toolbar\">\n    <a href=\"#\" class=\"go_back ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\" style=\"display:none\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.browser")
  },data:data},helper ? helper.call(depth0, "links.back", "Back", options) : helperMissing.call(depth0, "t", "links.back", "Back", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canManageOutcomes), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <a href=\"#\" class=\"add_outcome_link ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n      <i class=\"icon-add\"></i>\n      <span class=\"ui-button-text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.browser")
  },data:data},helper ? helper.call(depth0, "links.new_outcome", "New Outcome", options) : helperMissing.call(depth0, "t", "links.new_outcome", "New Outcome", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n    <a href=\"#\" class=\"add_outcome_group ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n      <i class=\"icon-add\"></i>\n      <span class=\"ui-button-text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.browser")
  },data:data},helper ? helper.call(depth0, "links.new_group", "New Group", options) : helperMissing.call(depth0, "t", "links.new_group", "New Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n    <a href=\"#\" class=\"find_outcome ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n      <i class=\"icon-search\"></i>\n      <span class=\"ui-button-text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.browser")
  },data:data},helper ? helper.call(depth0, "links.find", "Find", options) : helperMissing.call(depth0, "t", "links.find", "Find", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n    <a href=\"";
  if (helper = helpers.contextUrlRoot) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contextUrlRoot); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/rubrics\" class=\"manage_rubrics ui-button ui-widget ui-state-default ui-corner-all\" role=\"button\">\n      <i class=\"icon-rubric\"></i>\n      <span class=\"ui-button-text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("outcomes.browser")
  },data:data},helper ? helper.call(depth0, "#buttons.manage_rubrics", "Manage Rubrics", options) : helperMissing.call(depth0, "t", "#buttons.manage_rubrics", "Manage Rubrics", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    </a>\n    ";
  return buffer;
  }

  buffer += "<div class=\"outcomes-browser content-box\">\n\n  ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.skipToolbar), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div class=\"outcomes-main border border-rbl\">\n    <div class=\"outcomes-sidebar\" role=\"application\">\n      <div class=\"wrapper\"></div>\n    </div>\n    <div class=\"outcomes-content\">\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['outcomes/browser'];
});
