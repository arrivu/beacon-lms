define('jst/ExternalTools/RateToolView', ["compiled/handlebars_helpers","i18n!external_tools.rate_tool_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalTools/RateToolView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<fieldset class=\"rate_app_wrapper\">\n  <div class=\"row-fluid\">\n    <h5 class=\"span12\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_tools.rate_tool_view")
  },data:data},helper ? helper.call(depth0, "rate_tool", "How do you rate this tool?", options) : helperMissing.call(depth0, "t", "rate_tool", "How do you rate this tool?", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <div id=\"rate-app-star\" class=\"pull-right\"></div>\n    </h5>\n  </div>\n  <div class=\"row-fluid\">\n    <textarea name=\"review_text\" class=\"span12\" rows=\"6\"></textarea>\n  </div>\n</fieldset>";
  return buffer;
  });
  
      
  return templates['ExternalTools/RateToolView'];
});
