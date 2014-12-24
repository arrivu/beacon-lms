define('jst/publish_grades/AssignmentGroupList', ["compiled/handlebars_helpers","i18n!publish_grades.assignment_group_list"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/AssignmentGroupList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n  <ul class=\"collectionViewItems ig-list\"></ul>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.firstResetLanded), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <ul class=\"collectionViewItems ig-list\">\n      <li>\n        <div class=\"ig-row ig-row-empty\">\n          <div class=\"ig-empty-msg\">\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.assignment_group_list")
  },data:data},helper ? helper.call(depth0, "no_assignment_groups", "No Assignment Groups found", options) : helperMissing.call(depth0, "t", "no_assignment_groups", "No Assignment Groups found", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </div>\n        </div>\n      </li>\n    </ul>\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n    <div class=\"loadingIndicator\"></div>\n  ";
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['publish_grades/AssignmentGroupList'];
});
