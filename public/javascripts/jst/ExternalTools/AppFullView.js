define('jst/ExternalTools/AppFullView', ["compiled/handlebars_helpers","i18n!external_tools.app_full_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/AppFullView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <div class=\"gray-box-centered\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "app_already_installed", "This app has already been installed", options) : helperMissing.call(depth0, "t", "app_already_installed", "This app has already been installed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                  <li>"
    + escapeExpression((helper = helpers.titleize || (depth0 && depth0.titleize),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "titleize", depth0, options)))
    + "</li>\n                ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <tr class=\"data-row\">\n                <td valign=\"top\" class=\"data-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "help_link", "Help Link", options) : helperMissing.call(depth0, "t", "help_link", "Help Link", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n                <td valign=\"top\" class=\"data-value\"><a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.support_link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.support_link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n              </tr>\n            ";
  return buffer;
  }

  buffer += "<table class=\"individual-app\">\n  <tbody>\n    <tr>\n      <td class=\"individual-app-left\" valign=\"top\">\n        <img class=\"img-polaroid\" src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.banner_image_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.is_installed), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <a class=\"btn btn-primary btn-block add_app icon-add\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "add_tool", "Add Tool", options) : helperMissing.call(depth0, "t", "add_tool", "Add Tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n        <a href=\"#\" class=\"app_cancel\">&laquo; ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "back_to_app_center", "Back to App Center", options) : helperMissing.call(depth0, "t", "back_to_app_center", "Back to App Center", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n      </td>\n      <td class=\"individual-app-right\" valign=\"top\">\n        <h2>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n        <table class=\"star-table\">\n          <tbody>\n            <td><div class=\"app-star\"></div></td>\n            <td><small>("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.total_ratings)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</small></td>\n          </tbody>\n        </table>\n        <p>";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n        <table>\n          <tbody>\n            </tr>\n            <tr class=\"data-row\">\n              <td valign=\"top\" class=\"data-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "extensions", "Extensions", options) : helperMissing.call(depth0, "t", "extensions", "Extensions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n              <td valign=\"top\" class=\"data-value\">\n                <ul>\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.extensions), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n              </td>\n            </tr>\n            <tr class=\"data-row\">\n              <td valign=\"top\" class=\"data-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "average_rating", "Average Rating", options) : helperMissing.call(depth0, "t", "average_rating", "Average Rating", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n              <td valign=\"top\" class=\"data-value\">"
    + escapeExpression((helper = helpers.toPrecision || (depth0 && depth0.toPrecision),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.average_rating), 2, options) : helperMissing.call(depth0, "toPrecision", ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.average_rating), 2, options)))
    + "</td>\n            </tr>\n            <tr class=\"data-row\">\n              <td valign=\"top\" class=\"data-label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "education_levels", "Education Level(s)", options) : helperMissing.call(depth0, "t", "education_levels", "Education Level(s)", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n              <td valign=\"top\" class=\"data-value\">\n                <ul>\n                ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.levels), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n              </td>\n            </tr>\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.support_link), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </tbody>\n        </table>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div class=\"add-review\">\n  <a href=\"#\" class=\"rate_app\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "rate_tool", "Rate this tool", options) : helperMissing.call(depth0, "t", "rate_tool", "Rate this tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.app_full_view")
  },data:data},helper ? helper.call(depth0, "rate_tool", "Rate this tool", options) : helperMissing.call(depth0, "t", "rate_tool", "Rate this tool", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <img src=\"/images/ajax-loader-linear.gif\" style=\"display: none;\" id=\"rate_app_loader\" />\n</div>\n\n<div class=\"reviews collectionViewItems clearfix\"></div>\n<div class=\"paginatedLoadingIndicator\"></div>\n\n";
  return buffer;
  });
  
      
  return templates['ExternalTools/AppFullView'];
});
