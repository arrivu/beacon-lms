define('jst/content_migrations/subviews/OverwriteAssessmentContent', ["compiled/handlebars_helpers","i18n!content_migrations.subviews.overwrite_assessment_content"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['content_migrations/subviews/OverwriteAssessmentContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<label class=\"checkbox\" for=\"overwriteAssessmentContent\">\n  <input type=\"checkbox\" id=\"overwriteAssessmentContent\"/>\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.overwrite_assessment_content")
  },data:data},helper ? helper.call(depth0, "overwrite_assessment_content", "Overwrite assessment content with matching IDs", options) : helperMissing.call(depth0, "t", "overwrite_assessment_content", "Overwrite assessment content with matching IDs", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <a href=\"#\" class=\"element_toggler\" style=\"margin-left: 10px\" aria-controls=\"helpDialog\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.overwrite_assessment_content")
  },data:data},helper ? helper.call(depth0, "assessment_help_label", "Overwrite Assessment Help Icon", options) : helperMissing.call(depth0, "t", "assessment_help_label", "Overwrite Assessment Help Icon", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.overwrite_assessment_content")
  },data:data},helper ? helper.call(depth0, "assessment_help_title_icon", "Overwrite Assessment Help Icon", options) : helperMissing.call(depth0, "t", "assessment_help_title_icon", "Overwrite Assessment Help Icon", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><i class=\"icon-question\"></i></a>\n    <div id=\"helpDialog\" data-read-on-open=\"true\" data-turn-into-dialog='{width\":600,\"modal\":true}' style=\"display:none\" title=";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.overwrite_assessment_content")
  },data:data},helper ? helper.call(depth0, "assessment_help_title", "\"Overwrite Assessment Help\"", options) : helperMissing.call(depth0, "t", "assessment_help_title", "\"Overwrite Assessment Help\"", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("content_migrations.subviews.overwrite_assessment_content")
  },data:data},helper ? helper.call(depth0, "assessment_help_text", "Some systems recycle their IDs for each new export. As a result, if you export two separate question banks they will have the same IDs. To prevent losing assessment data we treat these objects as different despite the IDs. Choosing this option will disable this safety feature and allow assessment data to overwrite existing data with the same IDs.", options) : helperMissing.call(depth0, "t", "assessment_help_text", "Some systems recycle their IDs for each new export. As a result, if you export two separate question banks they will have the same IDs. To prevent losing assessment data we treat these objects as different despite the IDs. Choosing this option will disable this safety feature and allow assessment data to overwrite existing data with the same IDs.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</label>\n";
  return buffer;
  });
  
      
  return templates['content_migrations/subviews/OverwriteAssessmentContent'];
});
