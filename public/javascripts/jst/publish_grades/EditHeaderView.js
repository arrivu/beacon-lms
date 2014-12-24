define('jst/publish_grades/EditHeaderView', ["compiled/handlebars_helpers","i18n!publish_grades.edit_header_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['publish_grades/EditHeaderView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <span id='assignment-draft-state' class='published-status published'>\n        <i class=\"icon-publish\"></i>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.edit_header_view")
  },data:data},helper ? helper.call(depth0, "buttons.published", "Published", options) : helperMissing.call(depth0, "t", "buttons.published", "Published", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <span id='assignment-draft-state' class='published-status unpublished'>\n        <i class=\"icon-unpublished\"></i>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.edit_header_view")
  },data:data},helper ? helper.call(depth0, "buttons.not_published", "Not Published", options) : helperMissing.call(depth0, "t", "buttons.not_published", "Not Published", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </span>\n    ";
  return buffer;
  }

  buffer += "<div class=\"header-bar-right\">\n  <div class=\"header-group-left\" role=\"heading\" tabindex=\"0\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"header-bar-right\">\n    <div class=\"admin-links\">\n      <a class=\"al-trigger btn\" href=\"#\">\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.edit_header_view")
  },data:data},helper ? helper.call(depth0, "manage", "Manage", options) : helperMissing.call(depth0, "t", "manage", "Manage", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n        <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n      </a>\n      <ul class=\"al-options\">\n        <li>\n          <a href=\"#\" class=\"delete_assignment_link\">\n            <i class=\"icon-trash\"></i>\n            ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("publish_grades.edit_header_view")
  },data:data},helper ? helper.call(depth0, "titles.delete", "Delete", options) : helperMissing.call(depth0, "t", "titles.delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['publish_grades/EditHeaderView'];
});
