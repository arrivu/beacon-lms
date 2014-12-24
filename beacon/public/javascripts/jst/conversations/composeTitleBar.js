define('jst/conversations/composeTitleBar', ["compiled/handlebars_helpers","i18n!conversations.compose_title_bar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/composeTitleBar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<i class=\"icon-x\"></i>\n<span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.compose_title_bar")
  },data:data},helper ? helper.call(depth0, "buttons.close", "close", options) : helperMissing.call(depth0, "t", "buttons.close", "close", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>";
  return buffer;
  });
  
      
  return templates['conversations/composeTitleBar'];
});
