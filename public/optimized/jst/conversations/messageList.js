define('jst/conversations/messageList', ["compiled/handlebars_helpers","i18n!conversations.message_list"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['conversations/messageList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"list-header\">\n  <b class=\"current-context\"></b>\n</div>\n\n<ul class=\"messages unstyled collectionViewItems\"\n  aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("conversations.message_list")
  },data:data},helper ? helper.call(depth0, "messages", "Messages", options) : helperMissing.call(depth0, "t", "messages", "Messages", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n</ul>\n\n<div class=\"paginatedLoadingIndicator\"></div>\n";
  return buffer;
  });
  
      
  return templates['conversations/messageList'];
});
