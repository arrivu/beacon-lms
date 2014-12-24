define('jst/wiki/WikiPageEdit', ["compiled/handlebars_helpers","i18n!wiki.wiki_page_edit"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageEdit'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <label for=\"title\" class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "title_label", "Page Title", options) : helperMissing.call(depth0, "t", "title_label", "Page Title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <input id=\"title\" name=\"title\" type=\"text\" class=\"span4 title\" value=\"";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" maxlength=\"255\" autofocus>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <h2>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return " autofocus";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"control-group options\">\n      <label class=\"control-label\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "options_label", "Options", options) : helperMissing.call(depth0, "t", "options_label", "Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></label>\n      <div class=\"controls\">\n        <select name=\"editing_roles\">\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.SHOW)),stack1 == null || stack1 === false ? stack1 : stack1.COURSE_ROLES), {hash:{},inverse:self.program(11, program11, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "editing_roles.can_edit_page", "can edit this page", options) : helperMissing.call(depth0, "t", "editing_roles.can_edit_page", "can edit this page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <option value=\"teachers\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.TEACHER_ROLE), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "course_editing_roles.only_teachers", "Only teachers", options) : helperMissing.call(depth0, "t", "course_editing_roles.only_teachers", "Only teachers", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n            <option value=\"teachers,students\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.STUDENT_ROLE), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "course_editing_roles.teachers_and_students", "Teachers and students", options) : helperMissing.call(depth0, "t", "course_editing_roles.teachers_and_students", "Teachers and students", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n            <option value=\"teachers,students,public\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.ANYONE_ROLE), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "course_editing_roles.anyone", "Anyone", options) : helperMissing.call(depth0, "t", "course_editing_roles.anyone", "Anyone", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n          ";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return " selected";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <option value=\"members\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.MEMBER_ROLE), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "editing_roles.only_members", "Only members", options) : helperMissing.call(depth0, "t", "editing_roles.only_members", "Only members", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n            <option value=\"members,public\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.ANYONE_ROLE), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "editing_roles.anyone", "Anyone", options) : helperMissing.call(depth0, "t", "editing_roles.anyone", "Anyone", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n          ";
  return buffer;
  }

  buffer += "<div class=\"edit-content\">\n  <div class=\"edit-header\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT_TITLE), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div>\n      <a href=\"#\" class=\"switch_views\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_html", "HTML Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_html", "HTML Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n      <a href=\"#\" class=\"switch_views\" style=\"display:none;\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "#editor.switch_editor_rich_text", "Rich Content Editor", options) : helperMissing.call(depth0, "t", "#editor.switch_editor_rich_text", "Rich Content Editor", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </div>\n  </div>\n\n  <textarea rows=\"20\" cols=\"40\" name=\"body\" class=\"body\" aria-hidden=\"true\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.PAGE_RIGHTS)),stack1 == null || stack1 === false ? stack1 : stack1.update), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">"
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{
    'forEditing': (1)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.body), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.body), options)))
    + "</textarea>\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.EDIT_ROLES), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"form-actions clearfix\">\n  <div style=\"height:30px\">\n    <label for=\"notify_of_update\" class=\"checkbox clearfix pull-left\" style=\"margin-top:5px\">\n      "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{},data:data},helper ? helper.call(depth0, "notify_of_update", options) : helperMissing.call(depth0, "checkbox", "notify_of_update", options)))
    + "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "notify_users_text", "Notify users that this content has changed", options) : helperMissing.call(depth0, "t", "notify_users_text", "Notify users that this content has changed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </label>\n    <a class=\"btn cancel\" tabindex=\"0\" role=\"button\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "buttons.cancel", "Cancel", options) : helperMissing.call(depth0, "t", "buttons.cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    <button class=\"btn btn-primary submit\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_edit")
  },data:data},helper ? helper.call(depth0, "buttons.save", "Save", options) : helperMissing.call(depth0, "t", "buttons.save", "Save", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['wiki/WikiPageEdit'];
});
