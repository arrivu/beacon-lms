define('jst/quizzes/QuizItemGroupView', ["compiled/handlebars_helpers","i18n!quizzes.quiz_item_group_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/QuizItemGroupView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.quiz_item_group_view")
  },data:data},helper ? helper.call(depth0, "no_surveys", "No surveys found", options) : helperMissing.call(depth0, "t", "no_surveys", "No surveys found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.quiz_item_group_view")
  },data:data},helper ? helper.call(depth0, "no_quizzes", "No quizzes found", options) : helperMissing.call(depth0, "t", "no_quizzes", "No quizzes found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

  buffer += "<div class=\"ig-header\">\n  <h2 class=\"ig-header-title element_toggler\"\n     aria-controls=\"";
  if (helper = helpers.listId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.listId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     aria-expanded=\"true\"\n     aria-label=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.toggleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.toggleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     tabindex=\"0\"\n     role=\"button\">\n    <i class=\"icon-mini-arrow-down\"></i> ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </h2>\n</div>\n\n<ul id=\"";
  if (helper = helpers.listId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.listId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"ig-list collectionViewItems\"></ul>\n\n<ul class=\"ig-list no_content\">\n  <li>\n    <div class=\"ig-row ig-row-empty\">\n      <div class=\"ig-empty-msg\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isSurvey), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  </li>\n</ul>\n";
  return buffer;
  });
  
      
  return templates['quizzes/QuizItemGroupView'];
});
