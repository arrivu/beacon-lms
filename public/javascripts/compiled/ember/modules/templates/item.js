define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":ig-row published:ig-published indentClassName")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <div class=\"ig-title ellipses\">\n      <span draggable=\"true\" class=\"draggable-handle\" title=\"Drag to reorder or move item to another module\"><i class=\"icon-drag-handle\"></i></span>\n      ");
  data.buffer.push(escapeExpression((helper = helpers['modules-item-icon'] || (depth0 && depth0['modules-item-icon']),options={hash:{
    'type': ("type")
  },hashTypes:{'type': "ID"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "modules-item-icon", options))));
  data.buffer.push("\n      <span class=\"item_name\">\n        ");
  stack1 = helpers['if'].call(depth0, "module.locked", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <span class=\"completion_requirement\" style=\"display: none;\">&nbsp;</span>\n        <span class=\"position\" style=\"display: none;\">1</span>\n        <span class=\"url\" style=\"display: none;\"></span>\n        <span class=\"new_tab\" style=\"display: none;\">0</span>\n      </span>\n    </div>\n\n    <div class=\"ig-details row-fluid\">\n      <div class=\"span4\">\n        ");
  stack1 = helpers['if'].call(depth0, "completion_requirement.completed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "completionRequirement", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div class=\"span4 due_date_display\" style=\"text-align: right\">\n        ");
  stack1 = helpers['if'].call(depth0, "due", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n      <div class=\"span4 points_possible_display\">\n        ");
  stack1 = helpers['if'].call(depth0, "pointsPossible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n\n      <div class=\"ig-admin\">\n        <span class=\"publish-icon\" role=\"button\" aria-label=\"Published. Click to unpublish.\"><i class=\"icon-publish\"></i><span class=\"publish-text\" tabindex=\"-1\">&nbsp;Published</span><span class=\"screenreader-only accessible_label\">Published. Click to unpublish.</span></span>\n\n        ");
  stack1 = (helper = helpers['ic-actions'] || (depth0 && depth0['ic-actions']),options={hash:{
    'id': ("actionsId")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-actions", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      </div>\n  </div>\n\n  ");
  stack1 = helpers['if'].call(depth0, "modalIsOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <span class=\"title locked_title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "isSaving", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <span class=\"title saving\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "saving", "saving...", options) : helperMissing.call(depth0, "t", "saving", "saving...", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <a class=\"title\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("html_url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("<i class=\"icon-check\"></i>");
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","STRING"],data:data},helper ? helper.call(depth0, "due", "%b %d, %Y", options) : helperMissing.call(depth0, "format-date", "due", "%b %d, %Y", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "pointsPossible", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "points_possible", "pts", options) : helperMissing.call(depth0, "t", "points_possible", "pts", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "showIncreaseIndent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "showDecreaseIndent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("edit")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(22, program22, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("remove")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(24, program24, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("increaseIndent")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program17(depth0,data) {
  
  
  data.buffer.push("Increase indent");
  }

function program19(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item']),options={hash:{
    'on-select': ("decreaseIndent")
  },hashTypes:{'on-select': "STRING"},hashContexts:{'on-select': depth0},inverse:self.noop,fn:self.program(20, program20, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }
function program20(depth0,data) {
  
  
  data.buffer.push("Decrease indent");
  }

function program22(depth0,data) {
  
  
  data.buffer.push("Edit");
  }

function program24(depth0,data) {
  
  
  data.buffer.push("Remove");
  }

function program26(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    \n    ");
  stack1 = (helper = helpers['c-modal-form'] || (depth0 && depth0['c-modal-form']),options={hash:{
    'id': ("modalId"),
    'on-submit': ("saveEdits"),
    'return-focus-to': ("actionsId")
  },hashTypes:{'id': "ID",'on-submit': "STRING",'return-focus-to': "ID"},hashContexts:{'id': depth0,'on-submit': depth0,'return-focus-to': depth0},inverse:self.noop,fn:self.program(27, program27, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-modal-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[],types:[],data:data}
  if (helper = helpers['ic-modal-title']) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0['ic-modal-title']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers['ic-modal-title']) { stack1 = blockHelperMissing.call(depth0, 'ic-modal-title', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[],types:[],data:data}); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <div class=\"control-group\">\n        <label class=\"control-label\" for=\"edit-item-name\">\n          ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "item_title", "Module Item Title", options) : helperMissing.call(depth0, "t", "item_title", "Module Item Title", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </label>\n        <div class=\"controls\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("copy.title"),
    'id': ("edit-item-name")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"form-actions\">\n        ");
  stack1 = (helper = helpers['ic-modal-trigger'] || (depth0 && depth0['ic-modal-trigger']),options={hash:{
    'class': ("btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(30, program30, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ic-modal-trigger", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <button type=\"submit\" class=\"btn btn-primary\">");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "save", "Save", options) : helperMissing.call(depth0, "t", "save", "Save", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n      </div>\n    ");
  return buffer;
  }
function program28(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "edit_item", "Edit Module Item", options) : helperMissing.call(depth0, "t", "edit_item", "Edit Module Item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program30(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.item.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  stack1 = (helper = helpers['mm-sortable-module-item'] || (depth0 && depth0['mm-sortable-module-item']),options={hash:{
    'item': ("model"),
    'on-receive-item-from-other-module': ("moveItem"),
    'on-reorder-item': ("reorderItem")
  },hashTypes:{'item': "ID",'on-receive-item-from-other-module': "STRING",'on-reorder-item': "STRING"},hashContexts:{'item': depth0,'on-receive-item-from-other-module': depth0,'on-reorder-item': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "mm-sortable-module-item", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  
});
});
