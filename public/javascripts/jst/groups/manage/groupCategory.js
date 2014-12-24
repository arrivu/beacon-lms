define('jst/groups/manage/groupCategory', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!groups.manage.group_category"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['groups/manage/groupCategory'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <p>\n      <input\n        type=\"text\"\n        class=\"filterable search-query\"\n        placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category")
  },data:data},helper ? helper.call(depth0, "search_groups", "Search groups", options) : helperMissing.call(depth0, "t", "search_groups", "Search groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n        aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category")
  },data:data},helper ? helper.call(depth0, "search_groups", "Search groups", options) : helperMissing.call(depth0, "t", "search_groups", "Search groups", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n        role=\"search\"\n      >\n    </p>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "group-category-contents-condensed";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"progress-container\">\n      <h5 class=\"progress-title\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category")
  },data:data},helper ? helper.call(depth0, "randomly_assigning_students", "Randomly Assigning Students", options) : helperMissing.call(depth0, "t", "randomly_assigning_students", "Randomly Assigning Students", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\n      <div class=\"progressbar ui-progressbar ui-widget ui-widget-content ui-corner-all\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.progress)),stack1 == null || stack1 === false ? stack1 : stack1.completion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          <div class=\"ui-progressbar-value ui-widget-header ui-corner-left\" style=\"width: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.progress)),stack1 == null || stack1 === false ? stack1 : stack1.completion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%;\"></div>\n      </div>\n    </div>\n  ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.IS_LARGE_ROSTER), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "\n      <div class=\"groups\" data-view=\"groups\"></div>\n    ";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n\n      <div class=\"row-fluid\">\n        <div class=\"span3 unassigned-students\">\n          <h2 class=\"unassigned-users-heading group-heading\"></h2>\n          <input\n            type=\"text\"\n            class=\"filterable-unassigned-users search-query\"\n            placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category")
  },data:data},helper ? helper.call(depth0, "search_users", "Search users", options) : helperMissing.call(depth0, "t", "search_users", "Search users", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("groups.manage.group_category")
  },data:data},helper ? helper.call(depth0, "search_users", "Search users", options) : helperMissing.call(depth0, "t", "search_users", "Search users", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            role=\"search\"\n          >\n          <div data-view=\"unassignedUsers\"></div>\n        </div>\n        <div class=\"span9 groups\">\n          <h2 class=\"group-heading groups-with-count\"></h2>\n          <div data-view=\"groups\"></div>\n        </div>\n      </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"group-category-summary\">\n  <div data-view=\"groupCategoryDetail\"></div>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.groupsAreSearchable), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<span class=\"accessibility-warning\" tabindex=\"0\"> Warning: for improved accessibility assigning students to groups, please use the Move To Dialog option found in the menu. </span>\n\n<div class=\"group-category-contents ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.ENV)),stack1 == null || stack1 === false ? stack1 : stack1.IS_LARGE_ROSTER), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.randomlyAssignStudentsInProgress), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n\n";
  return buffer;
  });
  
      
arguments[1]('groups/manage/groupCategory', ".accessibility-warning{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;color:#fff;background-color:#DC3F3F;border:1px dashed #fff;font-size:12px;padding:1px;}.accessibility-warning:focus{left:0;top:36px;width:auto;height:auto;z-index:1;}.progress-title{text-align:center;font-weight:bold;}.progressbar{margin-left:auto;margin-right:auto;width:60%;}.group-category-contents{background:#e8ecef;border-color:#d3dbe0;border-style:solid;border-width:1px 0px;padding:1em 1.5em;min-height:350px;}.group-category-contents-condensed{padding:0;}.group-category-contents-condensed .groups>p{margin:1em;}.group-category-contents-condensed .groups>.paginatedLoadingIndicator{margin-top:1em;}.groups>.collectionViewItems{margin:-1px 0 0;}.groups>h2{border-bottom:1px solid #c2c8d0;}.groups>p{margin:1em 0;}.group-category-summary{min-height:32px;margin:0 1em 1em;background:#fff;}.group-category-summary .group-category-actions{margin-left:1em;}.group-category-summary .student-organized-groups{overflow:hidden;}.group-heading{padding:10px 8px;line-height:1.5;font-weight:bold;font-size:1.1em;color:#555;margin:0;}.group-heading.unassigned-users-heading{padding:10px 0;}a.group-heading:hover{color:inherit;text-decoration:none;}.unassigned-students.droppable-hover{background-color:#dde0e4;}.unassigned-students input[type=text]{-moz-box-sizing:border-box;box-sizing:border-box;height:28px;width:100%;margin:8px 0;}.unassigned-students .no-results{background:transparent;border:0;margin:8px;padding:0;width:80;}");

  return templates['groups/manage/groupCategory'];
});
