define('jst/UserObservees', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!user_observees"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['UserObservees'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h2>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("user_observees")
  },data:data},helper ? helper.call(depth0, "#observees.observing", "Observing", options) : helperMissing.call(depth0, "t", "#observees.observing", "Observing", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n<form class=\"add-observee-form\">\n  <div class=\"row\">\n    <div class=\"span2\">\n      <label for=\"unique_id\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("user_observees")
  },data:data},helper ? helper.call(depth0, "#observees.new_observee_username", "Username", options) : helperMissing.call(depth0, "t", "#observees.new_observee_username", "Username", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <input type=\"text\" id=\"unique_id\" name=\"unique_id\">\n      </label>\n    </div>\n    <div class=\"span2\">\n      <label for=\"password\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("user_observees")
  },data:data},helper ? helper.call(depth0, "#observees.new_observee_password", "Password", options) : helperMissing.call(depth0, "t", "#observees.new_observee_password", "Password", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <input type=\"password\" id=\"password\" name=\"password\">\n      </label>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("user_observees")
  },data:data},helper ? helper.call(depth0, "#observees.add_observee_button", "Add Student", options) : helperMissing.call(depth0, "t", "#observees.add_observee_button", "Add Student", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n</form>\n\n<h3 id=\"being-observed\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("user_observees")
  },data:data},helper ? helper.call(depth0, "#observees.being_observed", "Students Being Observed", options) : helperMissing.call(depth0, "t", "#observees.being_observed", "Students Being Observed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n<div class=\"observees-list-container\" aria-busy=\"false\">\n  <ul class=\"observees-list collectionViewItems\" aria-labelledby=\"being-observed\"></ul>\n  <div class=\"loading-indicator\">\n    <img src=\"/images/ajax-reload-animated.gif\">&nbsp;\n  </div>\n</div>\n";
  return buffer;
  });
  
      
arguments[1]('UserObservees', ".user-observees.loading .loading-indicator{display:block;}.user-observees h2{margin-top:0;}.user-observees h3{margin-top:55px;}.user-observees .add-observee-form label input{width:inherit;}.user-observees .observees-list-container{min-height:38px;}.user-observees .observees-list{display:block;}.user-observees .observees-list:empty{display:none;}.user-observees .loading-indicator{display:none;padding:8px 0;border-top:1px solid transparent;border-bottom:1px solid transparent;}.user-observees .observees-list{margin:0;}.user-observees .observees-list li{list-style:none;padding:8px 0;border-top:1px solid #efefef;}.user-observees .observees-list li:last-child{border-bottom:1px solid #efefef;}");

  return templates['UserObservees'];
});
