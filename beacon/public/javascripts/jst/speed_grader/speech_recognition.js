define('jst/speed_grader/speech_recognition', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['speed_grader/speech_recognition'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"dialog_prompt\">\n  <p id=\"dialog_message\" aria-label=\"\" aria-live=\"polite\">\n    ";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </p>\n  <div id=\"text_preview\">\n    <span id=\"final_results\">\n    </span>\n    <span id=\"interim_results\">\n    </span>\n  </div>\n</div>";
  return buffer;
  });
  
      
  return templates['speed_grader/speech_recognition'];
});
