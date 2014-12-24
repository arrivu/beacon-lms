define('jst/courses/roster/EditSectionsView', ["compiled/handlebars_helpers","i18n!courses.roster.edit_sections_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['courses/roster/EditSectionsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("courses.roster.edit_sections_view")
  },data:data},helper ? helper.call(depth0, "edit_sections_desc", "Sections are an additional way to organize users. This can allow you to teach multiple classes from the same course, so that you can have the course content all in one place. Below you can move a user to a different section, or add/remove section enrollments. Users must be in at least one section at all times.", options) : helperMissing.call(depth0, "t", "edit_sections_desc", "Sections are an additional way to organize users. This can allow you to teach multiple classes from the same course, so that you can have the course content all in one place. Below you can move a user to a different section, or add/remove section enrollments. Users must be in at least one section at all times.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n<input id=\"section_input\" name=\"sections\" data-finder_url=\"";
  if (helper = helpers.sectionsUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sectionsUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" style=\"display:none;\">\n\n<ul id=\"user_sections\"></ul>\n";
  return buffer;
  });
  
      
  return templates['courses/roster/EditSectionsView'];
});
