define('jst/accounts/admin_tools/commMessagesSearchResults', ["compiled/handlebars_helpers","i18n!accounts.admin_tools.comm_messages_search_results"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/admin_tools/commMessagesSearchResults'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n\n  <div class=\"paginatedLoadingIndicator\"></div>\n  <ul class=\"messages collectionViewItems\"></ul>\n  <div class=\"paginatedLoadingIndicator\"></div>\n\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n  <div class=\"alert alert-info\">\n    <p class=\"lead\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.admin_tools.comm_messages_search_results")
  },data:data},helper ? helper.call(depth0, "no_messages_found", "No messages found", options) : helperMissing.call(depth0, "t", "no_messages_found", "No messages found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n  </div>\n  <div class=\"paginatedLoadingIndicator\"></div>\n\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;
  });
  
      
  return templates['accounts/admin_tools/commMessagesSearchResults'];
});
