define('jst/wiki/WikiPageContent', ["compiled/handlebars_helpers","i18n!wiki.wiki_page_content"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageContent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"locked-alert alert alert-warning\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.lock_info)),stack1 == null || stack1 === false ? stack1 : stack1.context_module)),stack1 == null || stack1 === false ? stack1 : stack1.prerequisites), {hash:{},inverse:self.program(14, program14, data),fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lock_info)),stack1 == null || stack1 === false ? stack1 : stack1.unlock_at), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <ul>\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.lock_info)),stack1 == null || stack1 === false ? stack1 : stack1.context_module)),stack1 == null || stack1 === false ? stack1 : stack1.prerequisites), {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_content")
  },data:data},helper ? helper.call(depth0, "page_locked_by_modules_until", "This page will be available on %{lock_info.unlock_at} if you have completed these modules:", options) : helperMissing.call(depth0, "t", "page_locked_by_modules_until", "This page will be available on %{lock_info.unlock_at} if you have completed these modules:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_content")
  },data:data},helper ? helper.call(depth0, "page_locked_by_modules", "This page will be available once you have completed these modules:", options) : helperMissing.call(depth0, "t", "page_locked_by_modules", "This page will be available once you have completed these modules:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program7(depth0,data,depth1,depth2) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.programWithDepth(8, program8, data, depth1, depth2),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "context_module", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.type), "context_module", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program8(depth0,data,depth2,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth2, depth3),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program9(depth0,data,depth3,depth4) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <li>\n              ";
  stack1 = (helper = helpers.ifAll || (depth4 && depth4.ifAll),options={hash:{},inverse:self.program(12, program12, data),fn:self.programWithDepth(10, program10, data, depth3),data:data},helper ? helper.call(depth0, (depth4 && depth4.modules_path), (depth0 && depth0.id), options) : helperMissing.call(depth0, "ifAll", (depth4 && depth4.modules_path), (depth0 && depth0.id), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </li>\n          ";
  return buffer;
  }
function program10(depth0,data,depth4) {
  
  var buffer = "", stack1;
  buffer += "\n                <a href=\""
    + escapeExpression(((stack1 = (depth4 && depth4.modules_path)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n              ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                "
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n              ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lock_info)),stack1 == null || stack1 === false ? stack1 : stack1.unlock_at), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_content")
  },data:data},helper ? helper.call(depth0, "page_locked_until", "This page will be available on %{lock_info.unlock_at}", options) : helperMissing.call(depth0, "t", "page_locked_until", "This page will be available on %{lock_info.unlock_at}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_content")
  },data:data},helper ? helper.call(depth0, "page_locked", "This page is locked", options) : helperMissing.call(depth0, "t", "page_locked", "This page is locked", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n  "
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.body), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.body), options)))
    + "\n";
  return buffer;
  }

  buffer += "<header>\n  <h1 class=\"page-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n</header>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked_for_user), {hash:{},inverse:self.program(19, program19, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['wiki/WikiPageContent'];
});
