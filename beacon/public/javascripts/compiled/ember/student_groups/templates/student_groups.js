define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['student_groups'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers.each.call(depth0, "sortedGroups", {hash:{
    'itemController': ("group")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":accordion :student-groups :content-box showBody isMember")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'id': ("sgid")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <div class=\"student-group-header clearfix\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <i class=\"icon-mini-arrow-right\" aria-hidden=\"true\"></i>\n        <i class=\"icon-mini-arrow-down\" aria-hidden=\"true\"></i>\n        <div class=\"student-group-title\">\n          <h3 ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBody", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-expanded': ("isExpanded")
  },hashTypes:{'aria-expanded': "ID"},hashContexts:{'aria-expanded': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" aria-controls=\"student-group-body\" role=\"button\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-label': ("groupName")
  },hashTypes:{'aria-label': "ID"},hashContexts:{'aria-label': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <small>");
  stack1 = helpers._triageMustache.call(depth0, "group_category.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small>\n          </h3>\n          ");
  stack1 = helpers['if'].call(depth0, "isMember", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "isMember", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <span class=\"student-group-students\">\n          ");
  stack1 = helpers._triageMustache.call(depth0, "i18nStudentsCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n      </div>\n      <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":student-group-body showBody::hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'aria-expanded': ("isExpanded")
  },hashTypes:{'aria-expanded': "ID"},hashContexts:{'aria-expanded': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <ul class=\"student-group-list clearfix\" aria-label=\"group members\" tabindex='0' role='region'>\n          ");
  stack1 = helpers.each.call(depth0, "users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n      </div>\n    </div>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "visitGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" href=\"#\" aria-label=\"visit group page\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "visit", "Visit", options) : helperMissing.call(depth0, "t", "visit", "Visit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "canSignup", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <a href=\"#\" class=\"student-group-join\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "leave", "", {hash:{
    'bubbles': (false)
  },hashTypes:{'bubbles': "BOOLEAN"},hashContexts:{'bubbles': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" aria-label=\"leave group\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "student_groups_leave", "Leave", options) : helperMissing.call(depth0, "t", "student_groups_leave", "Leave", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n          ");
  return buffer;
  }

function program8(depth0,data) {
  
  
  data.buffer.push("\n              <span class=\"student-group-join\">&nbsp</span>\n          ");
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "canSignup", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(19, program19, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "isFull", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <span class=\"student-group-join\" aria-hidden=\"true\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "full", "Full", options) : helperMissing.call(depth0, "t", "full", "Full", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n              <span class=\"screenreader-only\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "group_full", "Group is full", options) : helperMissing.call(depth0, "t", "group_full", "Group is full", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers['if'].call(depth0, "shouldSwitch", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <a href=\"#\" class=\"student-group-join\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "join", "", {hash:{
    'bubbles': (false)
  },hashTypes:{'bubbles': "BOOLEAN"},hashContexts:{'bubbles': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" aria-label=\"switch to group\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "student_groups_switch", "Switch To", options) : helperMissing.call(depth0, "t", "student_groups_switch", "Switch To", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n              ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <a href=\"#\" class=\"student-group-join\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "join", "", {hash:{
    'bubbles': (false)
  },hashTypes:{'bubbles': "BOOLEAN"},hashContexts:{'bubbles': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" aria-label=\"join group\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "student_groups_join", "Join", options) : helperMissing.call(depth0, "t", "student_groups_join", "Join", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n              ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "isFull", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <span class=\"student-group-join\" aria-label=\"group is full\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "full", "Full", options) : helperMissing.call(depth0, "t", "full", "Full", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              <span class=\"student-group-join\" aria-label=\"group is invite only\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "invite_only", "Invite Only", options) : helperMissing.call(depth0, "t", "invite_only", "Invite Only", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li tabindex='0' role='listitem'>\n              ");
  stack1 = helpers['if'].call(depth0, "display_name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(27, program27, data),fn:self.program(25, program25, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </li>\n          ");
  return buffer;
  }
function program25(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "display_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program27(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "short_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class='pull-right group-categories-actions'>\n  <button class=\"btn btn-primary add_group_link\" aria-controls=\"testdialog\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newGroup", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n    <i class='icon-plus' aria-label=\"new\"></i> ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "group", "Group", options) : helperMissing.call(depth0, "t", "group", "Group", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </button>\n</div>\n<div id=\"group_categories_tabs\" class=\"ui-tabs-minimal ui-tabs ui-widget ui-widget-content ui-corner-all\">\n  <ul class='collectionViewItems ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'>\n    <li class=\"ui-state-default ui-corner-top\"><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("usersPath")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "student_groups_tabs_everyone", "Everyone", options) : helperMissing.call(depth0, "t", "student_groups_tabs_everyone", "Everyone", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n    <li class=\"ui-state-default ui-corner-top ui-tabs-active ui-state-active\"><a href=\"#\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.student_groups.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "student_groups_tabs_groups", "Groups", options) : helperMissing.call(depth0, "t", "student_groups_tabs_groups", "Groups", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n  </ul>\n  <div class=\"roster-tab tab-panel\">\n    <div class=\"form-inline clearfix content-box\">\n      <label for=\"search_field\" class=\"screenreader-only\">");
  stack1 = helpers._triageMustache.call(depth0, "searchAriaLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'value': ("filterText"),
    'id': ("search_field"),
    'action': ("filter"),
    'type': ("search"),
    'onEvent': ("keyPress"),
    'placeholder': ("searchPlaceholder"),
    'aria-label': ("searchAriaLabel")
  },hashTypes:{'value': "ID",'id': "STRING",'action': "STRING",'type': "STRING",'onEvent': "STRING",'placeholder': "ID",'aria-label': "ID"},hashContexts:{'value': depth0,'id': depth0,'action': depth0,'type': depth0,'onEvent': depth0,'placeholder': depth0,'aria-label': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n    ");
  stack1 = (helper = helpers['ic-lazy-list'] || (depth0 && depth0['ic-lazy-list']),options={hash:{
    'data': ("groups"),
    'href': ("groupsUrl")
  },hashTypes:{'data': "ID",'href': "ID"},hashContexts:{'data': depth0,'href': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-lazy-list", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});
});
