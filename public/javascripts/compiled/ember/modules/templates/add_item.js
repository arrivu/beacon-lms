define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['add_item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "createAssignment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "createDiscussion", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "createFile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "createHeader", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "createLink", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "createPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "createQuiz", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "createTool", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "create/assignment", "newThing", options) : helperMissing.call(depth0, "render", "create/assignment", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "create/discussion", "newThing", options) : helperMissing.call(depth0, "render", "create/discussion", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "create/file", "newThing", options) : helperMissing.call(depth0, "render", "create/file", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "create/header", "newThing", options) : helperMissing.call(depth0, "render", "create/header", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "create/link", "newThing", options) : helperMissing.call(depth0, "render", "create/link", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "create/page", "newThing", options) : helperMissing.call(depth0, "render", "create/page", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "create/quiz", "newThing", options) : helperMissing.call(depth0, "render", "create/quiz", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "create/tool", "newThing", options) : helperMissing.call(depth0, "render", "create/tool", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"modules-add-item-menu-container\">\n      ");
  stack1 = (helper = helpers['ic-menu'] || (depth0 && depth0['ic-menu']),options={hash:{
    'class': ("modules-add-item-menu module-add-new-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    </div><div class=\"modules-add-item-menu-container\">\n      ");
  stack1 = (helper = helpers['ic-menu'] || (depth0 && depth0['ic-menu']),options={hash:{
    'class': ("modules-add-item-menu module-add-existing-item")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(39, program39, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  ");
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[],types:[],data:data}
  if (helper = helpers['ic-menu-trigger']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['ic-menu-trigger']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['ic-menu-trigger']) { stack1 = blockHelperMissing.call(depth0, 'ic-menu-trigger', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[],types:[],data:data}
  if (helper = helpers['ic-menu-list']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['ic-menu-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['ic-menu-list']) { stack1 = blockHelperMissing.call(depth0, 'ic-menu-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("add")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "add_new_item", "Add new item", options) : helperMissing.call(depth0, "t", "add_new_item", "Add new item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginCreate"),
    'type': ("assignment")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(23, program23, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginCreate"),
    'type': ("quiz")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(25, program25, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginCreate"),
    'type': ("file")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginCreate"),
    'type': ("page")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(29, program29, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginCreate"),
    'type': ("discussion")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(31, program31, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginCreate"),
    'type': ("header")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(33, program33, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginCreate"),
    'type': ("link")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(35, program35, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginCreate"),
    'type': ("tool")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(37, program37, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("assignment")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push(" ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "assignment", "Assignment", options) : helperMissing.call(depth0, "t", "assignment", "Assignment", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    ");
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("quiz")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("       ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "quiz", "Quiz", options) : helperMissing.call(depth0, "t", "quiz", "Quiz", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("          ");
  return buffer;
  }

function program27(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("upload")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("     ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "file", "File", options) : helperMissing.call(depth0, "t", "file", "File", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("          ");
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("document")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("   ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "content_page", "Content Page", options) : helperMissing.call(depth0, "t", "content_page", "Content Page", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  ");
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("discussion")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push(" ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "discussion", "Discussion", options) : helperMissing.call(depth0, "t", "discussion", "Discussion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    ");
  return buffer;
  }

function program33(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("     ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("text")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("       ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "text_header", "Text Header", options) : helperMissing.call(depth0, "t", "text_header", "Text Header", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("   ");
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("link")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("       ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "external_url", "External URL", options) : helperMissing.call(depth0, "t", "external_url", "External URL", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  ");
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("tool")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("       ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "external_tool", "External Tool", options) : helperMissing.call(depth0, "t", "external_tool", "External Tool", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program39(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['ic-menu-trigger'] || (depth0 && depth0['ic-menu-trigger']),options={hash:{
    'id': ("addListId")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},inverse:self.noop,fn:self.program(40, program40, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-trigger", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(42, program42, data),contexts:[],types:[],data:data}
  if (helper = helpers['ic-menu-list']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['ic-menu-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['ic-menu-list']) { stack1 = blockHelperMissing.call(depth0, 'ic-menu-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(42, program42, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program40(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("add")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("\n          Add existing item\n        ");
  return buffer;
  }

function program42(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginAdd"),
    'type': ("assignment")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(43, program43, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginAdd"),
    'type': ("quiz")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(45, program45, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginAdd"),
    'type': ("file")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(47, program47, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginAdd"),
    'type': ("page")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(49, program49, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginAdd"),
    'type': ("discussion")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(51, program51, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginAdd"),
    'type': ("header")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(53, program53, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("beginAdd"),
    'type': ("tool")
  },hashTypes:{'on-select': "STRING",'type': "STRING"},hashContexts:{'on-select': depth0,'type': depth0},inverse:self.noop,fn:self.program(55, program55, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program43(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("assignment")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push(" ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "assignment", "Assignment", options) : helperMissing.call(depth0, "t", "assignment", "Assignment", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("     ");
  return buffer;
  }

function program45(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("quiz")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("       ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "quiz", "Quiz", options) : helperMissing.call(depth0, "t", "quiz", "Quiz", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("           ");
  return buffer;
  }

function program47(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("download")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("   ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "file", "File", options) : helperMissing.call(depth0, "t", "file", "File", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("           ");
  return buffer;
  }

function program49(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("document")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("   ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "page", "Content Page", options) : helperMissing.call(depth0, "t", "page", "Content Page", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("   ");
  return buffer;
  }

function program51(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("discussion")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push(" ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "discussion", "Discussion", options) : helperMissing.call(depth0, "t", "discussion", "Discussion", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("     ");
  return buffer;
  }

function program53(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("     ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("text")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("       ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "text_header", "Text Header", options) : helperMissing.call(depth0, "t", "text_header", "Text Header", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    ");
  return buffer;
  }

function program55(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("       ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("text")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("       ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.add_item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "external_tool", "External Tool", options) : helperMissing.call(depth0, "t", "external_tool", "External Tool", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  ");
  return buffer;
  }

function program57(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "addAssignment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(58, program58, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "addDiscussion", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(60, program60, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "addFile", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(62, program62, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "addHeader", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(64, program64, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "addPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(66, program66, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "addQuiz", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(68, program68, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "addTool", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(70, program70, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program58(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "add/assignment", "newThing", options) : helperMissing.call(depth0, "render", "add/assignment", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program60(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "add/discussion", "newThing", options) : helperMissing.call(depth0, "render", "add/discussion", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program62(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "add/file", "newThing", options) : helperMissing.call(depth0, "render", "add/file", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program64(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "add/header", "newThing", options) : helperMissing.call(depth0, "render", "add/header", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program66(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "add/page", "newThing", options) : helperMissing.call(depth0, "render", "add/page", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program68(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "add/quiz", "newThing", options) : helperMissing.call(depth0, "render", "add/quiz", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

function program70(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "add/tool", "newThing", options) : helperMissing.call(depth0, "render", "add/tool", "newThing", options))));
  data.buffer.push(" ");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":modules-add-item editing")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  stack1 = helpers['if'].call(depth0, "createType", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n");
  stack1 = (helper = helpers['c-modal-form'] || (depth0 && depth0['c-modal-form']),options={hash:{
    'id': ("modalId"),
    'return-focus-to': ("addListId"),
    'on-submit': ("addExistingItems")
  },hashTypes:{'id': "ID",'return-focus-to': "ID",'on-submit': "STRING"},hashContexts:{'id': depth0,'return-focus-to': depth0,'on-submit': depth0},inverse:self.noop,fn:self.program(57, program57, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-modal-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});
});
