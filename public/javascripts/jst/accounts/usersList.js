define('jst/accounts/usersList', ["compiled/handlebars_helpers","i18n!accounts.users_list"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['accounts/usersList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n<table class=\"roster table table-hover table-striped table-condensed table-vertically-center\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.users_list")
  },data:data},helper ? helper.call(depth0, "name", "Name", options) : helperMissing.call(depth0, "t", "name", "Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n      <th>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.users_list")
  },data:data},helper ? helper.call(depth0, "login_name_or_sis_id", "Login / SIS ID", options) : helperMissing.call(depth0, "t", "login_name_or_sis_id", "Login / SIS ID", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</th>\n    </tr>\n  </thead>\n  <tbody class=\"collectionViewItems\"></tbody>\n</table>\n<div class=\"paginatedLoadingIndicator\"></div>\n\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.atLeastOnePageFetched), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"alert alert-info\">\n    <p class=\"lead\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.users_list")
  },data:data},helper ? helper.call(depth0, "no_people_found", "No people found", options) : helperMissing.call(depth0, "t", "no_people_found", "No people found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.users_list")
  },data:data},helper ? helper.call(depth0, "you_can_search_by", "You can search by:", options) : helperMissing.call(depth0, "t", "you_can_search_by", "You can search by:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <ul>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.users_list")
  },data:data},helper ? helper.call(depth0, "name", "Name", options) : helperMissing.call(depth0, "t", "name", "Name", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("accounts.users_list")
  },data:data},helper ? helper.call(depth0, "login_name_or_sis_id", "Login / SIS ID", options) : helperMissing.call(depth0, "t", "login_name_or_sis_id", "Login / SIS ID", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    </ul>\n  </div>\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n  <div class=\"paginatedLoadingIndicator\"></div>\n  ";
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['accounts/usersList'];
});
