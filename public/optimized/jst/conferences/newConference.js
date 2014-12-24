define('jst/conferences/newConference', ["compiled/handlebars_helpers","i18n!conferences.new_conference"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conferences/newConference'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <a class=\"ig-title ellipses element_toggler\"\n        href=\"#\"\n        aria-controls=\"conference-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n        aria-expanded=\"false\"\n        role=\"button\">\n      <i class=\"icon-mini-arrow-right\"></i>\n      ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    </a>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <span class=\"ig-title ellipses\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n      <div class=\"span4 ellipses\">"
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.scheduled_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.scheduled_at), options)))
    + "</div>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "has_actions";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <span class=\"label label-success\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "in_progress", "In Progress", options) : helperMissing.call(depth0, "t", "in_progress", "In Progress", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.multipleRecordings), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"span4 ellipses\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "recordings", "%{recordingCount} Recordings", options) : helperMissing.call(depth0, "t", "recordings", "%{recordingCount} Recordings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n      ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"span4 ellipses\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "recording", "1 Recording", options) : helperMissing.call(depth0, "t", "recording", "1 Recording", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n      ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <a class='btn btn-small close_conference_link' href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/close\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "end_it_now", "End", options) : helperMissing.call(depth0, "t", "end_it_now", "End", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n    ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.join), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"";
  if (helper = helpers.join_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.join_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-small join-button btn-primary\" target=\"_blank\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "join", "Join", options) : helperMissing.call(depth0, "t", "join", "Join", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.initiate), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"";
  if (helper = helpers.join_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.join_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-small start-button\" target=\"_blank\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "start", "Start", options) : helperMissing.call(depth0, "t", "start", "Start", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n       </a>\n      ";
  return buffer;
  }
function program23(depth0,data) {
  
  
  return "disabled=\"disabled\"";
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <div class=\"inline-block\">\n        <a class=\"al-trigger al-trigger-gray ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.id), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" role=\"button\" aria-haspopup=\"true\"\n         aria-owns=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-content-1\" href=\"#\">\n          <i class=\"icon-settings\"></i>\n          <i class=\"icon-mini-arrow-down\"></i>\n          <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "settings", "Settings", options) : helperMissing.call(depth0, "t", "settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        </a>\n        <ul id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-content-1\" class=\"al-options\" role=\"menu\" aria-hidden=\"true\" aria-expanded=\"false\" aria-activedescendant=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-content-2\">\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.update), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.permissions)),stack1 == null || stack1 === false ? stack1 : stack1['delete']), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      </div>\n    ";
  return buffer;
  }
function program26(depth0,data) {
  
  
  return "ui-state-disabled";
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li role=\"presentation\">\n              <a href=\"";
  if (helper = helpers.edit_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.edit_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n                  class=\"icon-edit edit_conference_link\"\n                  id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-content-2\"\n                  role=\"menuitem\"\n                  title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "edit", "Edit", options) : helperMissing.call(depth0, "t", "edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "edit", "Edit", options) : helperMissing.call(depth0, "t", "edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n            </li>\n          ";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li role=\"presentation\">\n              <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n                  class=\"icon-trash  delete_conference_link\"\n                  id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-content-3\"\n                  role=\"menuitem\"\n                  aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n                  title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </a>\n            </li>\n          ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <div class=\"ig-sublist\" id=\"conference-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"display: none;\">\n    <ul>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.recordings), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul\n  </div>\n";
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li>\n          <div class=\"ig-row row-fluid\">\n            <a href=\"";
  if (helper = helpers.playback_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.playback_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\" class=\"ig-title ellipses\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n            <div class=\"ig-details row-fluid\">\n              <div class=\"span4 ellipses\"></div>\n              <div class=\"span4 ellipses\">"
    + escapeExpression((helper = helpers.dateString || (depth0 && depth0.dateString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "dateString", (depth0 && depth0.created_at), options)))
    + "</div>\n              <div class=\"span4 ellipses\">"
    + escapeExpression((helper = helpers.minutesToHM || (depth0 && depth0.minutesToHM),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.duration_minutes), options) : helperMissing.call(depth0, "minutesToHM", (depth0 && depth0.duration_minutes), options)))
    + "</div>\n            </div>\n            <div class=\"ig-button\">\n              <a class=\"btn btn-small\" target=\"_blank\" href=\"";
  if (helper = helpers.playback_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.playback_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conferences.new_conference")
  },data:data},helper ? helper.call(depth0, "view", "View", options) : helperMissing.call(depth0, "t", "view", "View", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </a>\n            </div>\n          </div>\n        </li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"ig-row\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.recording), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"ig-details row-fluid\">\n    <div class=\"span4 ellipses\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.scheduled), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"span4 ellipses ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.has_actions), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.started_at), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.recording), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"ig-admin\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.show_end), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.started_at), {hash:{},inverse:self.program(21, program21, data),fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.has_actions), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.recording), {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['conferences/newConference'];
});
