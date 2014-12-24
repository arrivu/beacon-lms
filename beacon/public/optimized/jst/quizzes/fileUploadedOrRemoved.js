define('jst/quizzes/fileUploadedOrRemoved', ["compiled/handlebars_helpers","i18n!quizzes.file_uploaded_or_removed"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/fileUploadedOrRemoved'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n  <div class=\"file-status file-uploaded\">\n    <em>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.file_uploaded_or_removed")
  },data:data},helper ? helper.call(depth0, "quizzes.file_successfully_uploaded", "Your file has been successfully uploaded.", options) : helperMissing.call(depth0, "t", "quizzes.file_successfully_uploaded", "Your file has been successfully uploaded.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </em>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"file-status file-removed\">\n    <em>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quizzes.file_uploaded_or_removed")
  },data:data},helper ? helper.call(depth0, "quizzes.files_removed", "%{display_name} has been removed.", options) : helperMissing.call(depth0, "t", "quizzes.files_removed", "%{display_name} has been removed.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </em>\n  </div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fileUploaded), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['quizzes/fileUploadedOrRemoved'];
});
