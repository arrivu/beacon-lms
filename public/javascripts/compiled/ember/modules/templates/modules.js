define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['modules'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Create a module");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"item-group-condensed\">\n            <div class=\"ig-row ig-row-empty\">\n              <div class=\"ig-empty-msg\">Loading...</div>\n            </div>\n          </div>\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "modules.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers.each.call(depth0, "module", "in", "modules", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['mm-sortable-module'] || (depth0 && depth0['mm-sortable-module']),options={hash:{
    'module': ("module"),
    'modules': ("controller.modules"),
    'on-reorder': ("syncModulesOrder")
  },hashTypes:{'module': "ID",'modules': "ID",'on-reorder': "STRING"},hashContexts:{'module': depth0,'modules': depth0,'on-reorder': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "mm-sortable-module", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "module", "module", options) : helperMissing.call(depth0, "render", "module", "module", options))));
  data.buffer.push("\n              ");
  return buffer;
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"item-group-condensed\">\n              <div class=\"ig-row ig-row-empty\">\n                <div class=\"ig-empty-msg\">No modules</div>\n              </div>\n            </div>\n          ");
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "moduleEdit", "newModule", options) : helperMissing.call(depth0, "render", "moduleEdit", "newModule", options))));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<div class=\"item-group-container\">\n\n  <div class=\"header-bar\">\n    <div class=\"header-bar-right\">\n      <a class=\"btn\" href=\"/courses/1/modules/progressions\">View Progress</a>\n      ");
  stack1 = (helper = helpers['ic-modal-trigger'] || (depth0 && depth0['ic-modal-trigger']),options={hash:{
    'controls': ("create-module-modal"),
    'class': ("btn btn-primary")
  },hashTypes:{'controls': "STRING",'class': "STRING"},hashContexts:{'controls': depth0,'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-modal-trigger", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"item-group-container\">\n    <div class=\"ig-list\">\n      ");
  stack1 = (helper = helpers['module-list'] || (depth0 && depth0['module-list']),options={hash:{
    'is-loading': ("isLoading"),
    'data': ("modules")
  },hashTypes:{'is-loading': "ID",'data': "ID"},hashContexts:{'is-loading': depth0,'data': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "module-list", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n\n");
  stack1 = (helper = helpers['c-modal-form'] || (depth0 && depth0['c-modal-form']),options={hash:{
    'id': ("create-module-modal"),
    'on-submit': ("createModule")
  },hashTypes:{'id': "STRING",'on-submit': "STRING"},hashContexts:{'id': depth0,'on-submit': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-modal-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});
});
