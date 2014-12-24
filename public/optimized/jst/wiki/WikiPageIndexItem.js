define('jst/wiki/WikiPageIndexItem', ["compiled/handlebars_helpers","i18n!wiki.wiki_page_index_item"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageIndexItem'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "published";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "un";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += " <span class=\"front-page label\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_item")
  },data:data},helper ? helper.call(depth0, "labels.front_page", "Front Page", options) : helperMissing.call(depth0, "t", "labels.front_page", "Front Page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " by "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.last_edited_by)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.PUBLISH), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <td role=\"gridcell\">\n    <div class=\"inline-block\">\n      <a class=\"al-trigger\" href=\"#\" role=\"button\">\n        <i class=\"icon-settings\"></i><i class=\"icon-mini-arrow-down\"></i>\n        <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_item")
  },data:data},helper ? helper.call(depth0, "menu.settings", "Settings", options) : helperMissing.call(depth0, "t", "menu.settings", "Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n      </a>\n      <ul class=\"al-options\">\n        <li><a href=\"#\" class=\"icon-edit edit-menu-item\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_item")
  },data:data},helper ? helper.call(depth0, "menu.edit", "Edit", options) : helperMissing.call(depth0, "t", "menu.edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_item")
  },data:data},helper ? helper.call(depth0, "menu.edit", "Edit", options) : helperMissing.call(depth0, "t", "menu.edit", "Edit", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        <li><a href=\"#\" class=\"icon-trash delete-menu-item";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.deletable), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_item")
  },data:data},helper ? helper.call(depth0, "menu.delete", "Delete", options) : helperMissing.call(depth0, "t", "menu.delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.deletable), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_item")
  },data:data},helper ? helper.call(depth0, "menu.delete", "Delete", options) : helperMissing.call(depth0, "t", "menu.delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.front_page), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.wiki_page_menu_tools), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  </td>\n";
  return buffer;
  }
function program9(depth0,data) {
  
  
  return "\n    <td role=\"gridcell\" class=\"publish-cell\"></td>\n  ";
  }

function program11(depth0,data) {
  
  
  return " disabled";
  }

function program13(depth0,data) {
  
  
  return "aria-disabled=\"true\"";
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <li><a href=\"#\" class=\"icon-document use-as-front-page-menu-item";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_item")
  },data:data},helper ? helper.call(depth0, "menu.use_front_page", "Use as Front Page", options) : helperMissing.call(depth0, "t", "menu.use_front_page", "Use as Front Page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.published), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_index_item")
  },data:data},helper ? helper.call(depth0, "menu.use_front_page", "Use as Front Page", options) : helperMissing.call(depth0, "t", "menu.use_front_page", "Use as Front Page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n        ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <li>\n          <a class=\"menu_tool_link\" href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.icon_url), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </a>\n        </li>\n        ";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<img class=\"icon\" src=\"";
  if (helper = helpers.icon_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.icon_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />";
  return buffer;
  }

  buffer += "<td role=\"gridcell\">\n  <a href=\"";
  if (helper = helpers.html_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.html_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"wiki-page-link";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.PUBLISH), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.front_page), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</td>\n<td role=\"gridcell\">"
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), "medium", options) : helperMissing.call(depth0, "tDateToString", (depth0 && depth0.created_at), "medium", options)))
    + "</td>\n<td role=\"gridcell\">"
    + escapeExpression((helper = helpers.tDateToString || (depth0 && depth0.tDateToString),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.updated_at), "medium", options) : helperMissing.call(depth0, "tDateToString", (depth0 && depth0.updated_at), "medium", options)));
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.last_edited_by)),stack1 == null || stack1 === false ? stack1 : stack1.display_name), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.MANAGE), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
  return templates['wiki/WikiPageIndexItem'];
});
