define('jst/calendar/eventDetails', ["compiled/handlebars_helpers","i18n!calendar.event_details"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/eventDetails'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <a href=\"";
  if (helper = helpers.fullDetailsURL) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.fullDetailsURL); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"view_event_link\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr>\n          <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "calendar", "Calendar", options) : helperMissing.call(depth0, "t", "calendar", "Calendar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n          <td><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contextInfo)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.contextInfo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.actualContextInfo), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </td>\n        </tr>\n      ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <br><span class=\"event-details-actual-context\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.actualContextInfo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr>\n          <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "location", "Location", options) : helperMissing.call(depth0, "t", "location", "Location", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n          <td>";
  if (helper = helpers.location_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n      ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <tr>\n                <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "location_address", "Address", options) : helperMissing.call(depth0, "t", "location_address", "Address", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n                <td>";
  if (helper = helpers.location_address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location_address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n              </tr>\n            ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr>\n          <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "details", "Details", options) : helperMissing.call(depth0, "t", "details", "Details", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n          <td class=\"user_content\">\n            <div class=\"event-detail-overflow\">"
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.description), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.description), options)))
    + "</div>\n          </td>\n        </tr>\n      ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr>\n          <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "attendees", "Attendees", options) : helperMissing.call(depth0, "t", "attendees", "Attendees", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n          <td>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_edit), {hash:{},inverse:self.program(18, program18, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </td>\n        </tr>\n      ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <ul id=\"attendees\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.reservations), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </ul>\n            ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                  <li data-url=\"";
  if (helper = helpers.event_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.event_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <div class=\"ellipsis\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                    <a href=\"javascript:void(0)\" class=\"cancel_appointment_link\"></a>\n                  </li>\n                ";
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <ul>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.reservations), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </ul>\n            ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                  <li>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n                ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <tr>\n          <th scope=\"row\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "slots_available", "Slots available", options) : helperMissing.call(depth0, "t", "slots_available", "Slots available", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n          <td>";
  if (helper = helpers.availableSlotsText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.availableSlotsText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n      ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <div class=\"available_slots\">\n        ";
  if (helper = helpers.available_slots_text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.available_slots_text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n      </div>\n    ";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"#\" class=\"event_button btn button-secondary btn-small delete_event_link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "links.delete", "Delete", options) : helperMissing.call(depth0, "t", "links.delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      ";
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"#\" class=\"event_button edit_event_link btn btn-primary btn-small\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "links.edit", "Edit", options) : helperMissing.call(depth0, "t", "links.edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      ";
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"#\" class=\"reserve_event_link\"><strong>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "links.reserve", "Reserve", options) : helperMissing.call(depth0, "t", "links.reserve", "Reserve", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong></a>\n      ";
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"#\" class=\"unreserve_event_link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "links.unreserve", "Un-reserve", options) : helperMissing.call(depth0, "t", "links.unreserve", "Un-reserve", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      ";
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"#\" class=\"message_students\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "message_students", "Message students", options) : helperMissing.call(depth0, "t", "message_students", "Message students", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      ";
  return buffer;
  }

  buffer += "<div class=\"event-details carat-bottom\">\n  <a href=\"#\" class=\"popover_close x-close-link close\" role=\"button\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.event_details")
  },data:data},helper ? helper.call(depth0, "close", "Close", options) : helperMissing.call(depth0, "t", "close", "Close", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">×</a>\n  <div class='event-details-header'>\n    <h3 class=\"details_title title\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showEventLink), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h3>\n  </div>\n  <div class=\"event-details-content\">\n    <div class=\"event-details-timestring\">";
  if (helper = helpers.displayTimeString) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayTimeString); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    <table cellspacing=\"0\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.contextInfo), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.location_name), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.location_address), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.reservations), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.availableSlotsText), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n    <div class=\"details_description lock_explanation\">";
  if (helper = helpers.lock_explanation) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lock_explanation); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.available_slots_text), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"popover-links-holder event-details-footer\">\n    <div class=\"pull-right\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_delete), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_edit), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"event-details-links\">\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_reserve), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_unreserve), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.reservations), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['calendar/eventDetails'];
});
