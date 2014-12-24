define('jst/profiles/notification_preferences', ["compiled/handlebars_helpers","i18n!profiles.notification_preferences"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['profiles/notification_preferences'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <table cellspacing=\"0\"\n         class=\"notification-prefs-table table\n                table-columns-striped table-bordered\">\n    <caption class=\"screenreader-only\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("profiles.notification_preferences")
  },data:data},helper ? helper.call(depth0, "captions.notification_preferences", "%{name} notification events and settings", options) : helperMissing.call(depth0, "t", "captions.notification_preferences", "%{name} notification events and settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </caption>\n\n    <thead>\n      <tr class=\"grouping\">\n        <th scope=\"col\"><h2 class=\"group-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2></th>\n        ";
  stack1 = helpers.each.call(depth0, (depth1 && depth1.channels), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </tr>\n    </thead>\n\n    <tbody>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <th class=\"comm-channel\" scope=\"col\">\n            <div class=\"channel-name\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <div class=\"channel-addr\">";
  if (helper = helpers.address) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.address); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n          </th>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <tr>\n          <th class=\"comm-event\" scope=\"row\">\n            <div class=\"row-title-cell\">\n              <span class=\"category-name show-popover\"\n                    title=\"<div class='popover-title'>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                           <div class='popover-content'>\n                             <p>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                           </div>\">\n                ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n              </span>\n\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checkName), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n          </th>\n\n          ";
  if (helper = helpers.policyCells) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.policyCells); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </tr>\n      ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"user-preference\">\n                  <label class=\"checkbox\" for=\"";
  if (helper = helpers.checkID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.checkID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'id': ((depth0 && depth0.checkID)),
    'class': ("user-pref-check"),
    'checked': ((depth0 && depth0.checkedState))
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.checkName), options) : helperMissing.call(depth0, "checkbox", (depth0 && depth0.checkName), options)))
    + "\n                    ";
  if (helper = helpers.checkLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.checkLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                  </label>\n                </div>\n              ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.eventGroups), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['profiles/notification_preferences'];
});
