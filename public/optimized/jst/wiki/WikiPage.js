define('jst/wiki/WikiPage', ["compiled/handlebars_helpers","i18n!wiki.wiki_page"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPage'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"header-bar-outer-container\">\n  <div class=\"header-bar-container sticky-toolbar\" data-sticky>\n    <div class=\"header-bar flex-container\">\n      <div class=\"header-bar-left header-left-flex\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course_home), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <div class=\"header-bar-right\">\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.course_home), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.UPDATE_CONTENT), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.ACCESS_GEAR_MENU), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    </div>\n    <div class=\"page-changed-alert\" role=\"alert\" aria-atomic=\"true\" aria-live=\"polite\"></div>\n  </div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <h2 class=\"course-title ellipsis\" title=\"";
  if (helper = helpers.course_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.course_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.course_title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.course_title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.VIEW_PAGES), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <a class=\"btn";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.front_page), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " view_all_pages\" href=\"";
  if (helper = helpers.wiki_pages_path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.wiki_pages_path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "buttons.view_all_pages", "View All Pages", options) : helperMissing.call(depth0, "t", "buttons.view_all_pages", "View All Pages", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n          ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return " btn-primary";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.front_page), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.PUBLISH), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n            <span class=\"front-page label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "labels.front_page", "Front Page", options) : helperMissing.call(depth0, "t", "labels.front_page", "Front Page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n          ";
  return buffer;
  }

function program11(depth0,data) {
  
  
  return "\n            <span class=\"publish-button\"></span>\n          ";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.VIEW_UNPUBLISHED), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <span class='published-status published'>\n                  <i class=\"icon-publish\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "published_indicator", "Published", options) : helperMissing.call(depth0, "t", "published_indicator", "Published", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </span>\n              ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <span class='published-status unpublished'>\n                  <i class=\"icon-unpublished\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "unpublished_indicator", "Not Published", options) : helperMissing.call(depth0, "t", "unpublished_indicator", "Not Published", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </span>\n              ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <a href=\"";
  if (helper = helpers.wiki_page_edit_path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.wiki_page_edit_path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn edit-wiki\"><i class=\"icon-edit\"></i> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "buttons.edit", "Edit", options) : helperMissing.call(depth0, "t", "buttons.edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <div class=\"inline-block\">\n            <a class=\"btn al-trigger\" tabindex=\"0\" role=\"button\" href=\"#\">\n              <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n              <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "toolbar_menu.settings", "Settings", options) : helperMissing.call(depth0, "t", "toolbar_menu.settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n            </a>\n            <ul class=\"al-options\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.DELETE), {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.READ_REVISIONS), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.wiki_page_menu_tools), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </ul>\n          </div>\n        ";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <li><a href=\"#\" class=\"icon-trash delete_page";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.deletable), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.deletable), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "delete_wiki", "Delete", options) : helperMissing.call(depth0, "t", "delete_wiki", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n            ";
  return buffer;
  }
function program23(depth0,data) {
  
  
  return " disabled";
  }

function program25(depth0,data) {
  
  
  return "aria-disabled=\"true\"";
  }

function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <li><a href=\"";
  if (helper = helpers.wiki_page_history_path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.wiki_page_history_path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"icon-clock view_page_history\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "view_page_history_wiki", "View Page History", options) : helperMissing.call(depth0, "t", "view_page_history_wiki", "View Page History", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n            ";
  return buffer;
  }

function program29(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n              <li role=\"presentation\">\n                <a class=\"menu_tool_link\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon_url), {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                  ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                </a>\n              </li>\n              ";
  return buffer;
  }
function program30(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<img class=\"icon\" src=\"";
  if (helper = helpers.icon_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"locked-alert alert alert-warning\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.lock_info)),stack1 == null || stack1 === false ? stack1 : stack1.context_module)),stack1 == null || stack1 === false ? stack1 : stack1.prerequisites), {hash:{},inverse:self.program(45, program45, data),fn:self.programWithDepth(33, program33, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }
function program33(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lock_info)),stack1 == null || stack1 === false ? stack1 : stack1.unlock_at), {hash:{},inverse:self.program(36, program36, data),fn:self.program(34, program34, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <ul>\n          ";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.lock_info)),stack1 == null || stack1 === false ? stack1 : stack1.context_module)),stack1 == null || stack1 === false ? stack1 : stack1.prerequisites), {hash:{},inverse:self.noop,fn:self.programWithDepth(38, program38, data, depth0, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      ";
  return buffer;
  }
function program34(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "page_locked_by_modules_until", "This page will be available on %{lock_info.unlock_at} if you have completed these modules:", options) : helperMissing.call(depth0, "t", "page_locked_by_modules_until", "This page will be available on %{lock_info.unlock_at} if you have completed these modules:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "page_locked_by_modules", "This page will be available once you have completed these modules:", options) : helperMissing.call(depth0, "t", "page_locked_by_modules", "This page will be available once you have completed these modules:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program38(depth0,data,depth1,depth2) {
  
  var stack1, helper, options;
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.noop,fn:self.programWithDepth(39, program39, data, depth1, depth2),data:data},helper ? helper.call(depth0, (depth0 && depth0.type), "context_module", options) : helperMissing.call(depth0, "ifEqual", (depth0 && depth0.type), "context_module", options));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program39(depth0,data,depth2,depth3) {
  
  var buffer = "", stack1;
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.noop,fn:self.programWithDepth(40, program40, data, depth2, depth3),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  return buffer;
  }
function program40(depth0,data,depth3,depth4) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n              <li>\n                ";
  stack1 = (helper = helpers.ifAll || (depth4 && depth4.ifAll),options={hash:{},inverse:self.program(43, program43, data),fn:self.programWithDepth(41, program41, data, depth3),data:data},helper ? helper.call(depth0, (depth4 && depth4.modules_path), (depth0 && depth0.id), options) : helperMissing.call(depth0, "ifAll", (depth4 && depth4.modules_path), (depth0 && depth0.id), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </li>\n            ";
  return buffer;
  }
function program41(depth0,data,depth4) {
  
  var buffer = "", stack1;
  buffer += "\n                  <a href=\""
    + escapeExpression(((stack1 = (depth4 && depth4.modules_path)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n                ";
  return buffer;
  }

function program43(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  "
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                ";
  return buffer;
  }

function program45(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.lock_info)),stack1 == null || stack1 === false ? stack1 : stack1.unlock_at), {hash:{},inverse:self.program(48, program48, data),fn:self.program(46, program46, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program46(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "page_locked_until", "This page will be available on %{lock_info.unlock_at}", options) : helperMissing.call(depth0, "t", "page_locked_until", "This page will be available on %{lock_info.unlock_at}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page")
  },data:data},helper ? helper.call(depth0, "page_locked", "This page is locked", options) : helperMissing.call(depth0, "t", "page_locked", "This page is locked", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program50(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n    "
    + escapeExpression((helper = helpers.convertApiUserContent || (depth0 && depth0.convertApiUserContent),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.body), options) : helperMissing.call(depth0, "convertApiUserContent", (depth0 && depth0.body), options)))
    + "\n  ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.VIEW_TOOLBAR), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"show-content user_content clearfix\">\n  <h2 class=\"page-title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.locked_for_user), {hash:{},inverse:self.program(50, program50, data),fn:self.program(32, program32, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['wiki/WikiPage'];
});
