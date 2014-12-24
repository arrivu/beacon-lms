define('jst/calendar/editAssignmentOverride', ["compiled/handlebars_helpers","i18n!calendar.edit_assignment_override"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['calendar/editAssignmentOverride'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.can_create_assignments), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <option value=\"";
  if (helper = helpers.asset_string) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.asset_string); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n              ";
  return buffer;
  }

  buffer += "<form action='#' id='edit_assignment_form' style='padding: 5px; width: 400px'>\n  <div class=\"event-details-content\">\n    <table class=\"formtable\" style=\"width: 100%;\">\n      <tr>\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_assignment_override")
  },data:data},helper ? helper.call(depth0, "due", "Due:", options) : helperMissing.call(depth0, "t", "due", "Due:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>\n          <input class=\"datetime_field\" id=\"assignment_override_due_at\" name=\"assignment_override[due_at]\" size=\"30\" style=\"width: 150px;\" type=\"text\" />\n        </td>\n      </tr>\n      <tr class=\"context_select\">\n        <td>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_assignment_override")
  },data:data},helper ? helper.call(depth0, "calendar", "Calendar:", options) : helperMissing.call(depth0, "t", "calendar", "Calendar:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n        <td>\n          <select class=\"context_id\">\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.contexts), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </select>\n        </td>\n      </tr>\n    </table>\n    <div class=\"popover-links-holder event-details-footer pull-right\">\n      <a href=\"#\" class=\"event_button btn btn-secondary more_options_link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_assignment_override")
  },data:data},helper ? helper.call(depth0, "links.more_options", "More Options", options) : helperMissing.call(depth0, "t", "links.more_options", "More Options", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      <button type=\"submit\" class=\"event_button btn btn-primary\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("calendar.edit_assignment_override")
  },data:data},helper ? helper.call(depth0, "#buttons.submit", "Submit", options) : helperMissing.call(depth0, "t", "#buttons.submit", "Submit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n    </div>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['calendar/editAssignmentOverride'];
});
