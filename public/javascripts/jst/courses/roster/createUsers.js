define('jst/courses/roster/createUsers', ["compiled/handlebars_helpers","i18n!courses.roster.create_users"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/createUsers'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"form-dialog-content\" id=\"create-users-step-1\">\n  <p>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "form_instructions", "Type or paste a list of email addresses below:", options) : helperMissing.call(depth0, "t", "form_instructions", "Type or paste a list of email addresses below:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\n  </p>\n  <div class=\"row-fluid content-box\">\n    <textarea\n              id=\"user_list_textarea\"\n              name=\"user_list\"\n              class=\"span12\"\n              rows=7\n              placeholder='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "email_field_place_holder", "\"Example Student\" &lt;student@example.com&gt;, \"Lastname, Firstname\" &lt;firstlast@example.com&gt;, justAnEmailAddress@example.com", options) : helperMissing.call(depth0, "t", "email_field_place_holder", "\"Example Student\" &lt;student@example.com&gt;, \"Lastname, Firstname\" &lt;firstlast@example.com&gt;, justAnEmailAddress@example.com", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n              aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "email_field_label", "Enter the email addresses of the users you would like to add, seperated by commas", options) : helperMissing.call(depth0, "t", "email_field_label", "Enter the email addresses of the users you would like to add, seperated by commas", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n    >";
  if (helper = helpers.user_list) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_list); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n  </div>\n  <div class=\"form-horizontal\">\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"enrollment_type\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "user_role", "Role:", options) : helperMissing.call(depth0, "t", "user_role", "Role:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <select name=\"enrollment_type\" id=\"enrollment_type\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.roles), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </div>\n    </div>\n    <div class=\"control-group\">\n      <label class=\"control-label\" for=\"course_section_id\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "section", "Section", options) : helperMissing.call(depth0, "t", "section", "Section", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <div class=\"controls\">\n        <select name=\"course_section_id\" id=\"course_section_id\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </div>\n    </div>\n    <div class=\"control-group\" id=\"privileges\">\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"limit_privileges_to_course_section\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "limit_privileges_to_course_section", options) : helperMissing.call(depth0, "checkbox", "limit_privileges_to_course_section", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "can_only_grade_students_in_section", "Can grade students in their section only", options) : helperMissing.call(depth0, "t", "can_only_grade_students_in_section", "Can grade students in their section only", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"form-controls\">\n  <button\n    id=\"next-step\"\n    class=\"btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "validating", "Validating...", options) : helperMissing.call(depth0, "t", "validating", "Validating...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "next", "Next", options) : helperMissing.call(depth0, "t", "next", "Next", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.manageable_by_user), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program3(depth0,data,depth2) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <option value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.name), (depth2 && depth2.enrollment_type), options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.name), (depth2 && depth2.enrollment_type), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.label) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.label); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n          ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "selected";
  }

function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.id), (depth1 && depth1.course_section_id), options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.id), (depth1 && depth1.course_section_id), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n          ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"form-dialog-content\" id=\"create-users-step-2\">\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.errored_users)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.users)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"form-controls\">\n  <button\n    type=\"button\"\n    class=\"btn createUsersStartOver ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.users)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "go_back", "Start Over", options) : helperMissing.call(depth0, "t", "go_back", "Start Over", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.users)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div role=\"alert\" tabindex=\"0\" id=\"user_email_errors\" class=\"alert alert-error content-box\">\n      <p>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "will_not_be_added", "These users had errors and will not be added. Please ensure they are formatted correctly.", options) : helperMissing.call(depth0, "t", "will_not_be_added", "These users had errors and will not be added. Please ensure they are formatted correctly.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\n        <small>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "example_formats", "Examples: user@example.com, \"First Last\" &lt;user@example.com&gt;, \"Last, First\" &lt;user@example.com&gt;", options) : helperMissing.call(depth0, "t", "example_formats", "Examples: user@example.com, \"First Last\" &lt;user@example.com&gt;, \"Last, First\" &lt;user@example.com&gt;", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n        <br>\n        ";
  stack1 = (helper = helpers.ifSettingIs || (depth0 && depth0.ifSettingIs),options={hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data},helper ? helper.call(depth0, "open_registration", true, options) : helperMissing.call(depth0, "ifSettingIs", "open_registration", true, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </p>\n      <ul class=\"createUsersErroredUsers\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.errored_users), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "";
  buffer += "\n          \n        ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "user_might_not_exist", "If your format is correct, contact your Canvas Admin to ensure the user has a Canvas account.", options) : helperMissing.call(depth0, "t", "user_might_not_exist", "If your format is correct, contact your Canvas Admin to ensure the user has a Canvas account.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <li>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"alert alert-notify content-box\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "adding_n_users", "Validated and ready to add %{users.length} users:", options) : helperMissing.call(depth0, "t", "adding_n_users", "Validated and ready to add %{users.length} users:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.duplicates)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <table class=\"table table-bordered table-striped table-condensed\" id=\"create-users-verified\">\n      <thead>\n        <tr>\n          <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "name", "Name", options) : helperMissing.call(depth0, "t", "name", "Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n          <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "email", "Email", options) : helperMissing.call(depth0, "t", "email", "Email", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        </tr>\n      </thead>\n      <tbody>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.users), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </tbody>\n    </table>\n  ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "duplicates_removed", "Some duplicates were removed.", options) : helperMissing.call(depth0, "t", "duplicates_removed", "Some duplicates were removed.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <tr>\n          <td>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n        ";
  return buffer;
  }

function program21(depth0,data) {
  
  
  return "btn-primary";
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <button\n    id=\"createUsersAddButton\"\n    class=\"btn btn-primary\"\n    data-text-while-loading='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "adding", "Adding...", options) : helperMissing.call(depth0, "t", "adding", "Adding...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'\n    type=\"submit\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "add_these_users", "Add Users", options) : helperMissing.call(depth0, "t", "add_these_users", "Add Users", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n<div class=\"form-dialog-content\" id=\"create-users-step-3\">\n  <p class=\"content-box alert alert-success\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "have_been_enrolled", "The following users have been enrolled", options) : helperMissing.call(depth0, "t", "have_been_enrolled", "The following users have been enrolled", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  <table class=\"table table-bordered table-striped table-condensed\" id=\"create-users-results\">\n    <thead>\n      <tr>\n        <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "name", "Name", options) : helperMissing.call(depth0, "t", "name", "Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "email", "Email", options) : helperMissing.call(depth0, "t", "email", "Email", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n        <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "section", "Section", options) : helperMissing.call(depth0, "t", "section", "Section", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.enrolledUsers), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n</div>\n<div class=\"form-controls\">\n  <button\n    class=\"btn show-if-step-3 createUsersStartOverFrd\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "add_more_users", "Add More Users", options) : helperMissing.call(depth0, "t", "add_more_users", "Add More Users", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  <button\n    type=\"button\"\n    class=\"btn btn-primary show-if-step-3 dialog_closer\"\n  >";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.create_users")
  },data:data},helper ? helper.call(depth0, "close", "Done", options) : helperMissing.call(depth0, "t", "close", "Done", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</div>\n";
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <tr>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.enrollment)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.enrollment)),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.enrollment)),stack1 == null || stack1 === false ? stack1 : stack1.section)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n      </tr>\n      ";
  return buffer;
  }

  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.step), 1, options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.step), 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.step), 2, options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.step), 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.step), 3, options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.step), 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['courses/roster/createUsers'];
});
