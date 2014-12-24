define('jst/conferences/editConferenceForm', ["compiled/handlebars_helpers","i18n!conferences.edit_conference_form"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conferences/editConferenceForm'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "disabled='disabled'";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <option value=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "selected=\"selected\"";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.has_advanced_settings), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/settings\" target=\"_blank\" class=\"advanced_settings\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "advanced_settings", "Manage Advanced Settings...", options) : helperMissing.call(depth0, "t", "advanced_settings", "Manage Advanced Settings...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <li class=\"member user_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <label class=\"checkbox\" for=\"user_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <input name=\"user[";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "]\" type=\"hidden\" value=\"0\">\n            <input id=\"user_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"user[";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "]\" type=\"checkbox\" value=\"1\">\n            ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </label>\n        </li>\n      ";
  return buffer;
  }

  buffer += "<form action=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"form-dialog form-horizontal\" method=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.http_method)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <input type=\"hidden\" name=\"_method\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.http_method)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  <div style=\"margin:0;padding:0;display:inline\">\n    <input name=\"authenticity_token\" type=\"hidden\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.auth_token)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n  </div>\n\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "name", "Name", options) : helperMissing.call(depth0, "t", "name", "Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <input id=\"web_conference_title\" name=\"web_conference[title]\" type=\"text\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" maxlength=\"255\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_conference_type\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "conference_type", "Type", options) : helperMissing.call(depth0, "t", "conference_type", "Type", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <select id=\"web_conference_conference_type\" name=\"web_conference[conference_type]\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.is_editing), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.conferenceTypes), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </select>\n\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.is_editing), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_duration\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "duration", "Duration", options) : helperMissing.call(depth0, "t", "duration", "Duration", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls form-inline\">\n      <input id=\"web_conference_duration\" name=\"web_conference[duration]\" type=\"text\"\n             data-restore-value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.restore_duration)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n             value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.duration)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n             ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.disable_duration_changes), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "duration_in_minutes", "minutes", options) : helperMissing.call(depth0, "t", "duration_in_minutes", "minutes", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_options\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "options", "Options", options) : helperMissing.call(depth0, "t", "options", "Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <div class=\"web_conference_user_settings\"></div>\n      <label class=\"checkbox\" for=\"web_conference_long_running\">\n        "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': (((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.long_running)),
    'disabled': (((stack1 = (depth0 && depth0.settings)),stack1 == null || stack1 === false ? stack1 : stack1.disable_duration_changes))
  },data:data},helper ? helper.call(depth0, "web_conference.long_running", options) : helperMissing.call(depth0, "checkbox", "web_conference.long_running", options)))
    + "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "long_running", "No time limit (for long-running conferences)", options) : helperMissing.call(depth0, "t", "long_running", "No time limit (for long-running conferences)", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"web_conference_description\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "description", "Description", options) : helperMissing.call(depth0, "t", "description", "Description", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n    <div class=\"controls\">\n      <textarea cols=\"40\" id=\"web_conference_description\" name=\"web_conference[description]\" rows=\"6\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conferenceData)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n    </div>\n  </div>\n  <legend>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "members", "Members", options) : helperMissing.call(depth0, "t", "members", "Members", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</legend>\n  <div class=\"web_conference_member_user_settings\"></div>\n  <label class=\"checkbox\" for=\"user_all\">\n    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'class': ("all_users_checkbox"),
    'checked': ((depth0 && depth0.inviteAll))
  },data:data},helper ? helper.call(depth0, "user.all", options) : helperMissing.call(depth0, "checkbox", "user.all", options)))
    + "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.edit_conference_form")
  },data:data},helper ? helper.call(depth0, "invite_all", "Invite All Course Members", options) : helperMissing.call(depth0, "t", "invite_all", "Invite All Course Members", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <div>\n    <ul id=\"members_list\" style=\"border: 1px solid #333; padding: 10px; overflow-y: auto; max-height: 150px;\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.users), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['conferences/editConferenceForm'];
});
