define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['new_group'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<p>\n");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.new_group.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "group_explanation", "Groups are a good place to collaborate on projects or to figure out schedules for study sessions and the like. Every group gets a calendar, a wiki, discussions, and a little bit of space to store files. Groups can collaborate on documents, or even schedule web conferences. It's really like a mini-course where you can work with a smaller number of students on a more focused project.", options) : helperMissing.call(depth0, "t", "group_explanation", "Groups are a good place to collaborate on projects or to figure out schedules for study sessions and the like. Every group gets a calendar, a wiki, discussions, and a little bit of space to store files. Groups can collaborate on documents, or even schedule web conferences. It's really like a mini-course where you can work with a smaller number of students on a more focused project.", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</p>\n<table class=\"formtable\">\n<tr>\n  <td><label for=\"group_name\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.new_group.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "name", "Group Name", options) : helperMissing.call(depth0, "t", "name", "Group Name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label></td>\n  <td>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'id': ("group_name"),
    'value': ("name"),
    'onEvent': ("keyPress"),
    'type': ("search"),
    'action': ("validate")
  },hashTypes:{'id': "STRING",'value': "ID",'onEvent': "STRING",'type': "STRING",'action': "STRING"},hashContexts:{'id': depth0,'value': depth0,'onEvent': depth0,'type': depth0,'action': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "nameError", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </td>\n</tr>\n<tr>\n  <td><label for=\"\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.new_group.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "joining", "Joining", options) : helperMissing.call(depth0, "t", "joining", "Joining", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label></td>\n  <td>\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'id': ("group_join_level"),
    'content': ("selectOptions"),
    'value': ("joinLevel"),
    'optionLabelPath': ("content.desc"),
    'optionValuePath': ("content.value"),
    'aria-label': ("Group Join Options")
  },hashTypes:{'id': "STRING",'content': "ID",'value': "ID",'optionLabelPath': "STRING",'optionValuePath': "STRING",'aria-label': "STRING"},hashContexts:{'id': depth0,'content': depth0,'value': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'aria-label': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </td>\n</tr>\n<tr>\n  <td>\n    <label for=\"\">Invite</label>\n  </td>\n  <td>\n    <ul class=\"unstyled_list\">\n    ");
  stack1 = helpers.view.call(depth0, {hash:{
    'controller': ("controllers.users")
  },hashTypes:{'controller': "ID"},hashContexts:{'controller': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </td>\n</tr>\n</table>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <span class=\"text-error\">\n        ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("student_groups.templates.new_group.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "name_error", "Group name is required", options) : helperMissing.call(depth0, "t", "name_error", "Group name is required", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </span>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  stack1 = (helper = helpers['ic-lazy-list'] || (depth0 && depth0['ic-lazy-list']),options={hash:{
    'data': ("content"),
    'href': ("usersPath")
  },hashTypes:{'data': "ID",'href': "ID"},hashContexts:{'data': depth0,'href': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-lazy-list", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers.unless.call(depth0, "isCurrentUser", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <li><label class=\"checkbox\">");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("invite"),
    'id': ("idString")
  },hashTypes:{'type': "STRING",'checked': "ID",'id': "ID"},hashContexts:{'type': depth0,'checked': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label></li>\n          ");
  return buffer;
  }

  stack1 = (helper = helpers['form-dialog'] || (depth0 && depth0['form-dialog']),options={hash:{
    'id': ("add_group_form"),
    'title': ("New Student Group"),
    'on-submit': ("createGroup"),
    'height': (500),
    'width': (700),
    'fix-dialog-buttons': (false),
    'submit-disabled': ("nameError")
  },hashTypes:{'id': "STRING",'title': "STRING",'on-submit': "STRING",'height': "INTEGER",'width': "INTEGER",'fix-dialog-buttons': "BOOLEAN",'submit-disabled': "ID"},hashContexts:{'id': depth0,'title': depth0,'on-submit': depth0,'height': depth0,'width': depth0,'fix-dialog-buttons': depth0,'submit-disabled': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "form-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});
});
