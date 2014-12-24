define('jst/quizzes/QuizItemView', ["compiled/handlebars_helpers","i18n!quizzes.quiz_item_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/QuizItemView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    class=\"\n    ig-row\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.publishable), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ig-editable\"\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "ig-publishable";
  }

function program4(depth0,data) {
  
  
  return "ig-published";
  }

function program6(depth0,data) {
  
  
  return "\n    class=\"ig-row\"\n  ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"ig-admin\">\n    <span data-view=\"publish-icon\" class=\"publish-icon\"></span>\n\n    <div class=\"inline-block\">\n      <a class=\"al-trigger al-trigger-gray\" role=\"button\" aria-haspopup=\"true\" aria-owns=\"ui-id-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-1\" href=\"#\">\n        <i class=\"icon-settings\"></i>\n        <i class=\"icon-mini-arrow-down\"></i>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.quiz_item_view")
  },data:data},helper ? helper.call(depth0, "settings", "Settings", options) : helperMissing.call(depth0, "t", "settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n\n      <ul id=\"ui-id-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-1\" class=\"al-options\" role=\"menu\" tabindex=\"0\" aria-hidden=\"true\" aria-expanded=\"false\" aria-activedescendant=\"ui-id-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-2\">\n        <li role=\"presentation\">\n          <a href=\"";
  if (helper = helpers.edit_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.edit_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"ui-id-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-2\" class=\"icon-edit\" tabindex=\"-1\" role=\"menuitem\" title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.quiz_item_view")
  },data:data},helper ? helper.call(depth0, "title_edit", "Edit Quiz", options) : helperMissing.call(depth0, "t", "title_edit", "Edit Quiz", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.quiz_item_view")
  },data:data},helper ? helper.call(depth0, "links.edit", "Edit", options) : helperMissing.call(depth0, "t", "links.edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        </li>\n        <li role=\"presentation\">\n          <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"ui-id-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-3\" class=\"delete-item icon-trash\" tabindex=\"-1\" role=\"menuitem\" title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.quiz_item_view")
  },data:data},helper ? helper.call(depth0, "title_delete", "Delete Quiz", options) : helperMissing.call(depth0, "t", "title_delete", "Delete Quiz", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.quiz_item_view")
  },data:data},helper ? helper.call(depth0, "links.delete", "Delete", options) : helperMissing.call(depth0, "t", "links.delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        </li>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.quiz_menu_tools), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  </div>\n  ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <li role=\"presentation\">\n            <a class=\"menu_tool_link\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon_url), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </a>\n          </li>\n        ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<img class=\"icon\" src=\"";
  if (helper = helpers.icon_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }

  buffer += "<div id=\"summary_quiz_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_update), {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n>\n  <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"ig-title ellipses\">\n    <i class=\"icon-quiz\"></i> ";
  if (helper = helpers.title_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </a>\n\n  <div class=\"ig-details row-fluid\">\n    <div class=\"span4 ellipses date-available\" data-view=\"date-available\"></div>\n    <div class=\"span4 ellipses date-due\" data-view=\"date-due\"></div>\n    <div class=\"span2 ellipses\">";
  if (helper = helpers.possible_points_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.possible_points_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    <div class=\"span2 ellipses\">";
  if (helper = helpers.question_count_label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.question_count_label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  </div>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_update), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['quizzes/QuizItemView'];
});
