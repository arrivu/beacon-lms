define('jst/publish_grades/AssignmentGroupListItem', ["compiled/handlebars_helpers","i18n!publish_grades.assignment_group_list_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/AssignmentGroupListItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <ul class=\"pill\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showWeight), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showRules), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "group_weight", "%{groupWeight}% of Total", options) : helperMissing.call(depth0, "t", "group_weight", "%{groupWeight}% of Total", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n          ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li>\n              <a\n                href='#'\n                title='";
  stack1 = (helper = helpers.toSentence || (depth0 && depth0.toSentence),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.displayableRules), options) : helperMissing.call(depth0, "toSentence", (depth0 && depth0.displayableRules), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n                class=\"tooltip_link\"\n                data-tooltip-selector=\"#ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_rules_tooltip\"\n              >";
  if (helper = helpers.rulesText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.rulesText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<i class=\"icon-mini-arrow-down\"></i></a>\n              <div id=\"ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_rules_tooltip\" style=\"display:none;\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.displayableRules), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </div>\n            </li>\n          ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
  }

function program7(depth0,data) {
  
  var buffer = "";
  buffer += "\n                  <span>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span><br/>\n                ";
  return buffer;
  }

  buffer += "<div id=\"assignment_group_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"assignment_group\">\n  <div class=\"ig-header\" style=\"position:relative;\">\n\n    <h2\n      class=\"ig-header-title element_toggler\"\n      aria-controls=\"assignment_group_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignments\"\n      aria-expanded=\"true\"\n      aria-label=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.toggleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.toggleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n      role=\"button\"\n      tabindex=\"0\"\n    >\n      <i class=\"icon-mini-arrow-down\"></i>\n      ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </h2>\n\n    <div class=\"ag-header-controls\" style=\"position: absolute; top: 0; right: 0;\">\n      ";
  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.showWeight), (depth0 && depth0.showRules), options) : helperMissing.call(depth0, "ifAny", (depth0 && depth0.showWeight), (depth0 && depth0.showRules), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <a id=\"ag_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_manage_link\" class=\"al-trigger btn\" href=\"#\" tabindex=\"0\">\n          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_group_list_item")
  },data:data},helper ? helper.call(depth0, "manage", "Manage", options) : helperMissing.call(depth0, "t", "manage", "Manage", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n          <i class=\"icon-publish\"></i>\n        </a>\n    </div>\n\n  </div>\n\n  <div id=\"assignment_group_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "_assignments\" >\n    <ul class=\"collectionViewItems ig-list draggable\"></ul>\n  </div>\n</div>";
  return buffer;
  });
  
      
  return templates['publish_grades/AssignmentGroupListItem'];
});
