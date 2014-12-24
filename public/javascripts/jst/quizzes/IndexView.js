define('jst/quizzes/IndexView', ["compiled/handlebars_helpers","i18n!quizzes.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"header-bar-right form-inline\">\n    <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.urls)),stack1 == null || stack1 === false ? stack1 : stack1.new_quiz_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-primary new-quiz-link icon-plus\" role=\"button\"\n       title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "title_add_quiz", "Add Quiz", options) : helperMissing.call(depth0, "t", "title_add_quiz", "Add Quiz", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n       aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "title_add_quiz", "Add Quiz", options) : helperMissing.call(depth0, "t", "title_add_quiz", "Add Quiz", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "add_quiz", "Quiz", options) : helperMissing.call(depth0, "t", "add_quiz", "Quiz", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n\n    <div class=\"inline-block\">\n      <a class=\"al-trigger btn\" role=\"button\" aria-haspopup=\"true\" aria-owns=\"toolbar-1\" href=\"#\">\n        <i class=\"icon-settings\"></i>\n        <i class=\"icon-mini-arrow-down\"></i>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "links.settings", "Settings", options) : helperMissing.call(depth0, "t", "links.settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n\n      <ul id=\"toolbar-1\" class=\"al-options\" role=\"menu\" tabindex=\"0\" aria-hidden=\"true\" aria-expanded=\"false\">\n        ";
  stack1 = (helper = helpers.ifAll || (depth0 && depth0.ifAll),options={hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.manage), ((stack1 = (depth0 && depth0.flags)),stack1 == null || stack1 === false ? stack1 : stack1.question_banks), options) : helperMissing.call(depth0, "ifAll", ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.manage), ((stack1 = (depth0 && depth0.flags)),stack1 == null || stack1 === false ? stack1 : stack1.question_banks), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = (helper = helpers.ifAll || (depth0 && depth0.ifAll),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.manage), ((stack1 = (depth0 && depth0.flags)),stack1 == null || stack1 === false ? stack1 : stack1.publish_multiple), options) : helperMissing.call(depth0, "ifAll", ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.manage), ((stack1 = (depth0 && depth0.flags)),stack1 == null || stack1 === false ? stack1 : stack1.publish_multiple), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li role=\"presentation\">\n          <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.urls)),stack1 == null || stack1 === false ? stack1 : stack1.question_banks_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"icon-question\" tabindex=\"-1\" role=\"menuitem\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "links.manage_question_banks", "Manage Question Banks", options) : helperMissing.call(depth0, "t", "links.manage_question_banks", "Manage Question Banks", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        </li>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li role=\"presentation\">\n          <a href=\"#\" class=\"publish_multiple_quizzes_link icon-unpublished\" tabindex=\"-1\" role=\"menuitem\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "links.publish_multiple_quizzes", "Publish Multiple Quizzes", options) : helperMissing.call(depth0, "t", "links.publish_multiple_quizzes", "Publish Multiple Quizzes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        </li>\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n  <div data-view=\"no_quizzes\" class=\"item-group-condensed\"></div>\n  ";
  }

function program8(depth0,data) {
  
  
  return "\n  <div data-view=\"assignment\" class=\"item-group-condensed\"></div>\n  ";
  }

function program10(depth0,data) {
  
  
  return "\n  <div data-view=\"open\" class=\"item-group-condensed\"></div>\n  ";
  }

function program12(depth0,data) {
  
  
  return "\n  <div data-view=\"surveys\" class=\"item-group-condensed\"></div>\n  ";
  }

  buffer += "<h1 class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "quizzes_title", "Quizzes", options) : helperMissing.call(depth0, "t", "quizzes_title", "Quizzes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n<div class=\"header-bar\">\n  <div class=\"header-bar-left form-inline\">\n    <label class=\"hidden-inline-text\" for=\"searchTerm\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "search_for_quiz", "Search for Quiz", options) : helperMissing.call(depth0, "t", "search_for_quiz", "Search for Quiz", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <input id=\"searchTerm\" placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.index_view")
  },data:data},helper ? helper.call(depth0, "search_for_quiz", "Search for Quiz", options) : helperMissing.call(depth0, "t", "search_for_quiz", "Search for Quiz", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" value=\"\" type=\"search\" />\n  </div>\n\n  ";
  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.create), ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.manage), options) : helperMissing.call(depth0, "ifAny", ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.create), ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.manage), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"item-group-container\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasNoQuizzes), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasAssignmentQuizzes), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasOpenQuizzes), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.hasSurveys), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['quizzes/IndexView'];
});
