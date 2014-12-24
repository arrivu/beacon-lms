define('jst/groups/manage/groups', ["compiled/handlebars_helpers","i18n!groups.manage.groups"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groups'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n  <ul class=\"collectionViewItems unstyled groups-list\"></ul>\n  <div class=\"paginatedLoadingIndicator\"></div>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <div class=\"no-results\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.groups")
  },data:data},helper ? helper.call(depth0, "no_groups", "There are currently no groups in this group set. Add a group to get started.", options) : helperMissing.call(depth0, "t", "no_groups", "There are currently no groups in this group set. Add a group to get started.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }

  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.fetchingPage), options) : helperMissing.call(depth0, "ifAny", ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.fetchingPage), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"no-results hidden\">\n  ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.groups")
  },data:data},helper ? helper.call(depth0, "no_matching_groups", "There are no groups that match your current search term.", options) : helperMissing.call(depth0, "t", "no_matching_groups", "There are no groups that match your current search term.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['groups/manage/groups'];
});
