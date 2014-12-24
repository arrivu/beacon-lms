define('jst/calendar/messageParticipants', ["compiled/handlebars_helpers","i18n!calendar.message_participants"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/messageParticipants'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "message_groups", "Message Groups", options) : helperMissing.call(depth0, "t", "message_groups", "Message Groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "message_students", "Message Students", options) : helperMissing.call(depth0, "t", "message_students", "Message Students", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <option value=\"all\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "all_groups", "All groups", options) : helperMissing.call(depth0, "t", "all_groups", "All groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"unregistered\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "unregistered_groups", "Groups who haven't signed up yet", options) : helperMissing.call(depth0, "t", "unregistered_groups", "Groups who haven't signed up yet", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"registered\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "registered_groups", "Groups who have already signed up", options) : helperMissing.call(depth0, "t", "registered_groups", "Groups who have already signed up", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <option value=\"all\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "all_users", "All users", options) : helperMissing.call(depth0, "t", "all_users", "All users", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"unregistered\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "unregistered_users", "Users who haven't signed up yet", options) : helperMissing.call(depth0, "t", "unregistered_users", "Users who haven't signed up yet", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"registered\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "registered_users", "Users who have already signed up", options) : helperMissing.call(depth0, "t", "registered_users", "Users who have already signed up", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      ";
  return buffer;
  }

  buffer += "<form title=\"";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.participant_type), "Group", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.participant_type), "Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" action='#' id='message_participants_form'>\n  <h2>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "send_message_to", "Send a message to...", options) : helperMissing.call(depth0, "t", "send_message_to", "Send a message to...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n  <div>\n    <select class=\"message_groups\">\n      ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.participant_type), "Group", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.participant_type), "Group", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n  </div>\n  <ul class=\"participant_list\"></ul>\n  <div class=\"clear\"></div>\n  <div>\n    <label for=\"body\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.message_participants")
  },data:data},helper ? helper.call(depth0, "message_label", "Message:", options) : helperMissing.call(depth0, "t", "message_label", "Message:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label><br />\n    <textarea id=\"body\" name=\"body\"></textarea>\n  </div>\n  <div class=\"error\"></div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['calendar/messageParticipants'];
});
