define('jst/quizzes/fileUploadQuestionState', ["compiled/handlebars_helpers","i18n!quizzes.file_upload_question_state"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/fileUploadQuestionState'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<a href=\"#\" role='button' class=\"pull-right icon-end delete-attachment\" aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.file_upload_question_state"),
    'name': ((depth0 && depth0.display_name))
  },data:data},helper ? helper.call(depth0, "#buttons.delete_file", "Delete file %{name}", options) : helperMissing.call(depth0, "t", "#buttons.delete_file", "Delete file %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'></a>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isIE), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n    <input name=file class=\"file-upload\" type=file />\n  ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <button class=\"btn file-upload-btn\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.file_upload_question_state")
  },data:data},helper ? helper.call(depth0, "#buttons.choose_a_file", "Choose a File", options) : helperMissing.call(depth0, "t", "#buttons.choose_a_file", "Choose a File", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.display_name), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['quizzes/fileUploadQuestionState'];
});
