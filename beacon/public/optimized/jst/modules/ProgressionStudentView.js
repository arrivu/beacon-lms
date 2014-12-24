define('jst/modules/ProgressionStudentView', ["compiled/handlebars_helpers","i18n!modules.progression_student_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['modules/ProgressionStudentView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"student\">\n  <a id=\"progression_student_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     href=\"#\"\n     role=\"button\"\n     aria-controls=\"progression_modules\"\n     aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.progression_student_view")
  },data:data},helper ? helper.call(depth0, "show_progressions_for_student", "Show progressions for %{name}", options) : helperMissing.call(depth0, "t", "show_progressions_for_student", "Show progressions for %{name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </a>\n</div>";
  return buffer;
  });
  
      
  return templates['modules/ProgressionStudentView'];
});
