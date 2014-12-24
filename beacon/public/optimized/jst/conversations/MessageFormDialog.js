define('jst/conversations/MessageFormDialog', ["compiled/handlebars_helpers","i18n!conversations.message_form_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/MessageFormDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      action=\"/conversations/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.conversation)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/add_message\" class=\"form-horizontal\"\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n      action=\"/conversations\" class=\"form-horizontal new\"\n  ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          ";
  if (helper = helpers.audience) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.audience); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <!--";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "headings.new_message", "New Message", options) : helperMissing.call(depth0, "t", "headings.new_message", "New Message", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n        ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <a href=\"/conversations/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/add_recipients\" class=\"action_add_recipients\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "inbox_actions.add_people", "Add People", options) : helperMissing.call(depth0, "t", "inbox_actions.add_people", "Add People", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.course) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.course); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program13(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "no_course", "No course", options) : helperMissing.call(depth0, "t", "no_course", "No course", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program15(depth0,data) {
  
  var stack1, helper;
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  return escapeExpression(stack1);
  }

function program17(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "no_subject", "No subject", options) : helperMissing.call(depth0, "t", "no_subject", "No subject", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"message-header-row\">\n          <div class=\"message-header-label\"></div>\n          <div class=\"message-header-input\">\n            <input type=\"hidden\" name=\"bulk_message\" value=\"0\" />\n            <label class=\"checkbox\">\n              <input type=\"checkbox\" name=\"bulk_message\" value=\"1\" />\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "send_individual_messages", "Send individual messages", options) : helperMissing.call(depth0, "t", "send_individual_messages", "Send individual messages", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n              <i class=\"icon-question\"\n                 data-tooltip\n                 title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "individual_message_explanation", "This will send an individual message to each of the recipients", options) : helperMissing.call(depth0, "t", "individual_message_explanation", "This will send an individual message to each of the recipients", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></i>\n            </label>\n\n          </div>\n        </div>\n      ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <a class=\"action_media_comment\"\n               href=\"#\"\n               data-track-category=\"Compose Message\"\n               data-track-action=\"Edit\"\n               data-track-label=\"Audio Recording\"\n               title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "titles.record_media_comment", "Record an audio or video comment", options) : helperMissing.call(depth0, "t", "titles.record_media_comment", "Record an audio or video comment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n              <i class=\"icon-media\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "links.media_comment", "Record", options) : helperMissing.call(depth0, "t", "links.media_comment", "Record", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </a>\n          ";
  return buffer;
  }

  buffer += "<form class=\"compose_form\" method=\"post\"\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.conversation), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  >\n  <div class=\"message-header\">\n    <input type=\"hidden\" name=\"from_conversation_id\" value=\"";
  if (helper = helpers.from_conversation_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.from_conversation_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <input type=\"hidden\" name=\"mode\" value=\"async\">\n    <input type=\"hidden\" name=\"scope\" value=\"";
  if (helper = helpers.scope) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.scope); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <input type=\"hidden\" name=\"filter\" value=\"";
  if (helper = helpers.filter) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.filter); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    <input type=\"hidden\" name=\"group_conversation\" value=\"true\">\n\n    <ul class=\"conversations\" style='display:none;'>\n      <li>\n      <span class=\"audience\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.conversation), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.addRecipientsEnabled), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </li>\n    </ul>\n\n    <div class='message-header'>\n      <div class='message-header-row'>\n        <div class='message-header-label'>\n          <label for=\"compose-message-course\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "labels.course", "Course", options) : helperMissing.call(depth0, "t", "labels.course", "Course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <span class=\"screenreader-only\">\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "labels.course_required", "You must select a Course before entering recipients.", options) : helperMissing.call(depth0, "t", "labels.course_required", "You must select a Course before entering recipients.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </span>\n          </label>\n        </div>\n        <div class='message-header-input'>\n          <select id=\"compose-message-course\" name=\"course\"\n                  data-track-category=\"Compose Course\"\n                  data-track-action=\"Edit\"\n                  data-track-label=\"Course\"\n                  class=\"message_course\"\n                  required=\"true\"\n                  value=\"";
  if (helper = helpers.course) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.course); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <option>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "labels.select_course", "Select a course", options) : helperMissing.call(depth0, "t", "labels.select_course", "Select a course", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n          </select>\n          <span class=\"message_course_ro\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n          <input type=\"hidden\" name=\"context_code\" />\n        </div>\n      </div>\n\n      <div class='message-header-row'>\n        <div class='message-header-label'>\n          <label for=\"compose-message-recipients\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "labels.to", "To", options) : helperMissing.call(depth0, "t", "labels.to", "To", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n        </div>\n        <div class='message-header-input'>\n          <div class=\"ac\">\n            <div class=\"ac-row\">\n              <div class=\"ac-input-cell\">\n                <div class=\"ac-input-box\">\n                  <ul class=\"ac-token-list\"></ul>\n                  <input type=\"search\"\n                         class=\"ac-input\"\n                         id=\"compose-message-recipients\"\n                         aria-expanded=\"false\"\n                         aria-activedescendant=\"ac-result-list\"\n                         aria-owns=\"ac-result-list-1\"\n                         aria-autocomplete=\"list\"\n                         aria-describedby=\"ac-input-description\"\n                         autocomplete=\"off\"\n                         role=\"combobox\" />\n                  <span aria-live=\"polite\" class=\"ac-results-status screenreader-only\" id=\"ac-input-description\"></span>\n                  <span aria-live=\"polite\" class=\"ac-selected-name screenreader-only\"></span>\n                </div>\n              </div>\n\n              <div class=\"btn ac-search-btn\"\n                      id=\"recipient-search-btn\"\n                      role=\"button\" tabindex=\"0\">\n                <i class=\"icon-address-book\"></i>\n                <span class=\"screenreader-only\">\n                  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "search_names_groups_courses", "Search names, groups, and courses", options) : helperMissing.call(depth0, "t", "search_names_groups_courses", "Search names, groups, and courses", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </span>\n              </div>\n            </div>\n\n            <div class=\"ac-result-wrapper\" id=\"ac-result-list-1\" aria-hidden=\"true\">\n              <div class=\"ac-result-container\">\n                <div class=\"ac-result-contents\">\n                  <ul class=\"ac-result-list collectionViewItems\"></ul>\n                  <div class=\"paginatedLoadingIndicator\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class='message-header-row'>\n        <div class='message-header-label'>\n          <label for=\"compose-message-subject\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "labels.subject", "Subject", options) : helperMissing.call(depth0, "t", "labels.subject", "Subject", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n        </div>\n        <div class='message-header-input'>\n          <input type=\"text\" id=\"compose-message-subject\" name=\"subject\"\n                 data-track-category=\"Compose Subject\"\n                 data-track-action=\"Edit\"\n                 data-track-label=\"Subject\"\n                 class=\"message_subject\"\n                 value=\"";
  if (helper = helpers.subject) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subject); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n                 placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "no_subject", "No subject", options) : helperMissing.call(depth0, "t", "no_subject", "No subject", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                 maxlength=\"255\">\n          <span class=\"message_subject_ro\">";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subject), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </div>\n      </div>\n\n      ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.conversation), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <div class='message-header-row user_note_info' style=\"display: none\">\n        <div class='message-header-label'></div>\n        <div class='message-header-input'>\n          <input type=\"hidden\" name=\"user_note\" value=\"0\" />\n          <label class=\"checkbox\">\n            <input type=\"checkbox\" name=\"user_note\" class=\"user_note\" value=\"1\" />\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "labels.add_to_faculty_journal", "Add as a Faculty Journal entry", options) : helperMissing.call(depth0, "t", "labels.add_to_faculty_journal", "Add as a Faculty Journal entry", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n        </div>\n      </div>\n\n      <div class=\"message-header-row\">\n        <div class='message-header-label'></div>\n        <div class='message-header-input'>\n          <div class=\"media_comment\" style=\"display: none;\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "titles.media_comment", "Recorded media comment", options) : helperMissing.call(depth0, "t", "titles.media_comment", "Recorded media comment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            <img src=\"/images/messages/media-gray.png\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "media_comment", "Media Comment", options) : helperMissing.call(depth0, "t", "media_comment", "Media Comment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <a href=\"#\" class=\"remove_link black\" style=\"float: right;\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "titles.remove_media_comment", "Remove media comment", options) : helperMissing.call(depth0, "t", "titles.remove_media_comment", "Remove media comment", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-end\"></i> </a>\n            <div class=\"clear\"></div>\n          </div>\n          <input type=\"hidden\" name=\"media_comment_id\">\n          <input type=\"hidden\" name=\"media_comment_type\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.mediaCommentsEnabled), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class='header-separator' />\n\n  <div class='message-body'>\n    <textarea name=\"body\"\n              data-track-category=\"Compose Message\"\n              data-track-action=\"Edit\"\n              data-track-label=\"Body\"\n              aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "body", "Body", options) : helperMissing.call(depth0, "t", "body", "Body", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n              class=\"conversation_body\">";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n    <div class='context_messages'></div>\n  </div>\n\n  <div class='attachments-pane'>\n    <ul class='attachment_list' aria-label='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_form_dialog")
  },data:data},helper ? helper.call(depth0, "labels.attachments", "Attachments", options) : helperMissing.call(depth0, "t", "labels.attachments", "Attachments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "' aria-live='polite'></ul>\n  </div>\n\n</form>\n";
  return buffer;
  });
  
      
  return templates['conversations/MessageFormDialog'];
});
