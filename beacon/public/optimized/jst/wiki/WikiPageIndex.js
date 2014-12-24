define('jst/wiki/WikiPageIndex', ["compiled/handlebars_helpers","i18n!wiki.wiki_page_index"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageIndex'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"header-bar-outer-container\">\n  <div class=\"header-bar-container sticky-toolbar-with-right-side\" data-sticky>\n    <div class=\"header-bar\">\n      <div class=\"header-bar-right\">\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.CREATE), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <a class=\"btn btn-primary icon-plus new_page\" role=\"button\" tabindex=\"0\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "buttons.new_page_label", "Add a page", options) : helperMissing.call(depth0, "t", "buttons.new_page_label", "Add a page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "buttons.new_page", "Page", options) : helperMissing.call(depth0, "t", "buttons.new_page", "Page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.PUBLISH), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program5(depth0,data) {
  
  
  return "52%";
  }

function program7(depth0,data) {
  
  
  return "56%";
  }

function program9(depth0,data) {
  
  
  return "60%";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.collection)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <tr class=\"no-pages";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.CREATE), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><td class=\"no-pages-cell\" colspan=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.MANAGE), {hash:{},inverse:self.program(20, program20, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "no_pages", "No pages created yet.", options) : helperMissing.call(depth0, "t", "no_pages", "No pages created yet.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.CREATE), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td></tr>\n          ";
  return buffer;
  }
function program13(depth0,data) {
  
  
  return " clickable";
  }

function program15(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.PUBLISH), {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program16(depth0,data) {
  
  
  return "5";
  }

function program18(depth0,data) {
  
  
  return "4";
  }

function program20(depth0,data) {
  
  
  return "3";
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " <a class=\"new_page\" href=\"#\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "add_page", "Add one!", options) : helperMissing.call(depth0, "t", "add_page", "Add one!", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"loading ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.fetched), {hash:{},inverse:self.program(27, program27, data),fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <img src=\"/images/ajax-reload-animated.gif\">\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.fetched), {hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program25(depth0,data) {
  
  
  return "loading";
  }

function program27(depth0,data) {
  
  
  return "loading-more";
  }

function program29(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "loading", "Loading ...", options) : helperMissing.call(depth0, "t", "loading", "Loading ...", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program31(depth0,data) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "loading_more", "Loading more ...", options) : helperMissing.call(depth0, "t", "loading_more", "Loading more ...", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "<h1 class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "pages_title", "Pages", options) : helperMissing.call(depth0, "t", "pages_title", "Pages", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.VIEW_TOOLBAR), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"index-content-container\">\n  <div class=\"index-content\">\n    <table class=\"table\" role=\"grid\">\n      <thead><tr class=\"header-row\" role=\"row\">\n        <th width=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.MANAGE), {hash:{},inverse:self.program(9, program9, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" role=\"columnheader\">\n          <a href=\"#\" data-sort-field=\"title\" tabindex=\"0\" role=\"button\" class=\"sort-field\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "headers.page_title", "Page title", options) : helperMissing.call(depth0, "t", "headers.page_title", "Page title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <i></i></a>\n        </th>\n        <th width=\"20%\" role=\"columnheader\">\n          <a href=\"#\" data-sort-field=\"created_at\" tabindex=\"0\" role=\"button\" class=\"sort-field\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "headers.creation_date", "Creation date", options) : helperMissing.call(depth0, "t", "headers.creation_date", "Creation date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <i></i></a>\n        </th>\n        <th width=\"20%\" role=\"columnheader\">\n          <a href=\"#\" data-sort-field=\"updated_at\" tabindex=\"0\" role=\"button\" class=\"sort-field\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index")
  },data:data},helper ? helper.call(depth0, "headers.last_edit", "Last edit", options) : helperMissing.call(depth0, "t", "headers.last_edit", "Last edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <i></i></a>\n        </th>\n      </tr></thead>\n      <tbody class=\"collectionViewItems\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.fetched), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </tbody>\n    </table>\n    ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.fetchedLast), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['wiki/WikiPageIndex'];
});
