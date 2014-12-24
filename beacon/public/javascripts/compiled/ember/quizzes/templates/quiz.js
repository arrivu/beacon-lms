define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, self=this, escapeExpression=this.escapeExpression, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <div class=\"span4 teacher-action-buttons pull-right\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['ic-publish-icon'] || (depth0 && depth0['ic-publish-icon']),options={hash:{
    'disabled': ("canNotUnpublish"),
    'is-published': ("showAsPublished"),
    'disabled-message': ("disabledMessage"),
    'on-publish': ("publish"),
    'on-unpublish': ("unpublish")
  },hashTypes:{'disabled': "ID",'is-published': "ID",'disabled-message': "ID",'on-publish': "STRING",'on-unpublish': "STRING"},hashContexts:{'disabled': depth0,'is-published': depth0,'disabled-message': depth0,'on-publish': depth0,'on-unpublish': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-publish-icon", options))));
  data.buffer.push("\n\n        <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("editURL")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"btn\">\n          <i class=\"icon-edit\"></i>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "edit", "Edit", options) : helperMissing.call(depth0, "t", "edit", "Edit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </a>\n\n        <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("previewUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "preview", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn\">\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "preview", "Preview", options) : helperMissing.call(depth0, "t", "preview", "Preview", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </a>\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}
  if (helper = helpers['ic-actions']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['ic-actions']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['ic-actions']) { stack1 = blockHelperMissing.call(depth0, 'ic-actions', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("takeQuiz"),
    'classBinding': (":js-take-quiz takeQuizActive::disabled")
  },hashTypes:{'on-select': "STRING",'classBinding': "STRING"},hashContexts:{'on-select': depth0,'classBinding': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("showRubric")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("speedGrader"),
    'classBinding': ("speedGraderActive::disabled")
  },hashTypes:{'on-select': "STRING",'classBinding': "STRING"},hashContexts:{'on-select': depth0,'classBinding': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = helpers.unless.call(depth0, "moderateEnabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("messageStudents"),
    'classBinding': (":js-message-students messageStudentsActive::disabled")
  },hashTypes:{'on-select': "STRING",'classBinding': "STRING"},hashContexts:{'on-select': depth0,'classBinding': depth0},inverse:self.noop,fn:self.program(18, program18, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("downloadFiles"),
    'classBinding': ("downloadActive::disabled")
  },hashTypes:{'on-select': "STRING",'classBinding': "STRING"},hashContexts:{'on-select': depth0,'classBinding': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = helpers['if'].call(depth0, "moderateEnabled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = helpers['if'].call(depth0, "isLocked", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(34, program34, data),fn:self.program(31, program31, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'class': ("js-delete"),
    'on-select': ("confirmDeletion")
  },hashTypes:{'class': "STRING",'on-select': "STRING"},hashContexts:{'class': depth0,'on-select': depth0},inverse:self.noop,fn:self.program(37, program37, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <i class=\"icon-arrow-right\"></i>\n            ");
  stack1 = helpers['if'].call(depth0, "takeQuizActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers._triageMustache.call(depth0, "takeOrResumeMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <span class=\"disabled\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "takeOrResumeMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <span class=\"screenreader-only\">\n                  ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "option_is_disabled", "this option is disabled", options) : helperMissing.call(depth0, "t", "option_is_disabled", "this option is disabled", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </span>\n              </span>\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <i class=\"icon-rubric\"></i>\n            ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "show_rubric", "Show Rubric", options) : helperMissing.call(depth0, "t", "show_rubric", "Show Rubric", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <i class=\"icon-speed-grader\"></i>\n            ");
  stack1 = helpers['if'].call(depth0, "speedGraderActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "speed_grader", "Speed Grader", options) : helperMissing.call(depth0, "t", "speed_grader", "Speed Grader", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <span class=\"disabled\">\n                ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "speed_grader", "Speed Grader", options) : helperMissing.call(depth0, "t", "speed_grader", "Speed Grader", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <span class=\"screenreader-only\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "option_is_disabled", "this option is disabled", options) : helperMissing.call(depth0, "t", "option_is_disabled", "this option is disabled", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n              </span>\n            ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("moderateQuiz")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <i class=\"icon-hour-glass\"></i>\n              ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "moderate", "Moderate", options) : helperMissing.call(depth0, "t", "moderate", "Moderate", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <i class=\"icon-discussion\"></i>\n            ");
  stack1 = helpers['if'].call(depth0, "messageStudentsActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "message_students_who", "Message Students Who...", options) : helperMissing.call(depth0, "t", "message_students_who", "Message Students Who...", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <span class=\"disabled\">\n                ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "message_students_who", "Message Students Who...", options) : helperMissing.call(depth0, "t", "message_students_who", "Message Students Who...", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <span class=\"screenreader-only\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "option_is_disabled", "this option is disabled", options) : helperMissing.call(depth0, "t", "option_is_disabled", "this option is disabled", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n              </span>\n            ");
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <i class=\"icon-download\"></i>\n            ");
  stack1 = helpers['if'].call(depth0, "downloadActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(26, program26, data),fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_all_files", "Download All Files", options) : helperMissing.call(depth0, "t", "download_all_files", "Download All Files", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <span class=\"disabled\">\n                ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_all_files", "Download All Files", options) : helperMissing.call(depth0, "t", "download_all_files", "Download All Files", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <span class=\"screenreader-only\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "option_is_disabled", "this option is disabled", options) : helperMissing.call(depth0, "t", "option_is_disabled", "this option is disabled", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n              </span>\n            ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("showStudentResults")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <i class=\"icon-group\"></i>\n              ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "show_quiz_results", "Show Student Quiz Results", options) : helperMissing.call(depth0, "t", "show_quiz_results", "Show Student Quiz Results", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'class': ("js-due-date-toggler"),
    'on-select': ("unlock")
  },hashTypes:{'class': "STRING",'on-select': "STRING"},hashContexts:{'class': depth0,'on-select': depth0},inverse:self.noop,fn:self.program(32, program32, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <i class=\"icon-unlock\"></i>\n              ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "unlock_this_quiz_now", "Unlock This Quiz Now", options) : helperMissing.call(depth0, "t", "unlock_this_quiz_now", "Unlock This Quiz Now", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'class': ("js-due-date-toggler"),
    'on-select': ("lock")
  },hashTypes:{'class': "STRING",'on-select': "STRING"},hashContexts:{'class': depth0,'on-select': depth0},inverse:self.noop,fn:self.program(35, program35, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program35(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <i class=\"icon-lock\"></i>\n              ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "lock_this_quiz_now", "Lock This Quiz Now", options) : helperMissing.call(depth0, "t", "lock_this_quiz_now", "Lock This Quiz Now", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <i class=\"icon-trash\"></i>\n            ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <div class=\"span4 student-action-buttons pull-right\">\n        ");
  stack1 = helpers['if'].call(depth0, "takeQuizActive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(40, program40, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }
function program40(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("takeQuizUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "takeQuiz", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "takeOrResumeMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </a>\n        ");
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"ui-state-warning ui-corner-all pad-box-micro text-center regraded-warning\">\n      <i class=\"icon-warning\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-label': ("warningText")
  },hashTypes:{'aria-label': "STRING"},hashContexts:{'aria-label': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("></i>\n      <strong>");
  stack1 = helpers._triageMustache.call(depth0, "scoreAffectedByRegradeLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n    </div>\n  ");
  return buffer;
  }

function program44(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quiz/show_teacher", options) : helperMissing.call(depth0, "partial", "quiz/show_teacher", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program46(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quiz/show_student", options) : helperMissing.call(depth0, "partial", "quiz/show_student", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("\n<a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("rubricActionUrl")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"icon-rubric\" id=\"add_rubric_url\" style=\"display:none\">&nbsp;</a>\n\n<div class=\"container-fluid\" id=\"quiz-show\">\n  <div class=\"row-fluid edit-header\">\n    <div class=\"span7\">\n      <label class=\"screenreader-only\">\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.templates.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "quiz_title", "Quiz Title", options) : helperMissing.call(depth0, "t", "quiz_title", "Quiz Title", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </label>\n      <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    </div>\n\n    ");
  stack1 = helpers['if'].call(depth0, "canUpdate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(39, program39, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  ");
  stack1 = helpers['if'].call(depth0, "submissionHasRegrade", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(42, program42, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  stack1 = helpers['if'].call(depth0, "canUpdate", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(46, program46, data),fn:self.program(44, program44, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <div id=\"module_sequence_footer\"></div>\n</div>\n");
  return buffer;
  
});
});
