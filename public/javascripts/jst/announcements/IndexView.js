define('jst/announcements/IndexView', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss","i18n!announcements.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['announcements/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <h1 class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "announcements_title", "Announcements", options) : helperMissing.call(depth0, "t", "announcements_title", "Announcements", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n  <div class=\"headerBar clearfix\">\n    <div class=\"headerBar-right form-inline\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.atom_feed_url), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <span id=\"actionsForSelectedDiscussions\" class=\"screenreader-only\">\n        <input type=\"checkbox\" id=\"lock\" disabled=\"disabled\"/>\n        <label for=\"lock\" data-tooltip>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "lock_for_comments", "Lock for comments", options) : helperMissing.call(depth0, "t", "lock_for_comments", "Lock for comments", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n        <button id=\"delete\" data-tooltip disabled=\"disabled\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "delete", "Delete", options) : helperMissing.call(depth0, "t", "delete", "Delete", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n      </span>\n\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.create), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"headerBar-left form-inline index_view_filter_form\">\n      <label class=\"hidden-inline-text\" for=\"searchTerm\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "search_title_body_or_author", "Search title, body, or author", options) : helperMissing.call(depth0, "t", "search_title_body_or_author", "Search title, body, or author", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      <input id=\"searchTerm\"\n             placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "search_title_body_or_author", "Search title, body, or author", options) : helperMissing.call(depth0, "t", "search_title_body_or_author", "Search title, body, or author", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n             value=\"";
  if (helper = helpers.searchTerm) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.searchTerm); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n             type=\"search\">\n      <span id=\"discussionsFilter\">\n        <input type=\"checkbox\"\n               id=\"onlyUnread\"\n               ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.onlyUnread), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " /><label for=\"onlyUnread\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "unread", "Unread", options) : helperMissing.call(depth0, "t", "unread", "Unread", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n      </span>\n    </div>\n  </div>\n  <div class=\"nothingMatchedFilter\" style=\"display:none;\">\n    <p>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "your_search_did_not_match_any_announcements", "Your search did not match any announcements.", options) : helperMissing.call(depth0, "t", "your_search_did_not_match_any_announcements", "Your search did not match any announcements.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n    <p>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "suggestions", "Suggestions:", options) : helperMissing.call(depth0, "t", "suggestions", "Suggestions:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <ul>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "make_sure_all_search_terms_are_spelled_correctly", "Make sure all search terms are spelled correctly.", options) : helperMissing.call(depth0, "t", "make_sure_all_search_terms_are_spelled_correctly", "Make sure all search terms are spelled correctly.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "try_different_more_general_or_fewer_keywords", "Try different, more general, or fewer keywords.", options) : helperMissing.call(depth0, "t", "try_different_more_general_or_fewer_keywords", "Try different, more general, or fewer keywords.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      <li>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "try_disabling_the_unread_filters", "Try disabling the \"Unread\" filter.", options) : helperMissing.call(depth0, "t", "try_disabling_the_unread_filters", "Try disabling the \"Unread\" filter.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    </ul>\n  </div>\n  <div class=\"discussionTopicIndexList\"></div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a class=\"btn\"\n           href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.atom_feed_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n           data-tooltip\n           title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "rss_feed", "RSS feed", options) : helperMissing.call(depth0, "t", "rss_feed", "RSS feed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n           <span class=\"screenreader-only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "rss_feed", "RSS feed", options) : helperMissing.call(depth0, "t", "rss_feed", "RSS feed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n           <i class=\"icon-rss\"></i>\n        </a>\n      ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"";
  if (helper = helpers.new_topic_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.new_topic_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-primary\" id=\"new-discussion-btn\">\n          <i class=\"icon-announcement\"></i> \n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "make_an_announcement", "Make an announcement", options) : helperMissing.call(depth0, "t", "make_an_announcement", "Make an announcement", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "checked";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lastPageFetched), {hash:{},inverse:self.program(12, program12, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div style=\"margin:auto; text-align: center; margin-top: 80px\">\n      <h1>\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "there_are_no_announcements_show", "There are no announcements to show", options) : helperMissing.call(depth0, "t", "there_are_no_announcements_show", "There are no announcements to show", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </h1>\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1.permissions)),stack1 == null || stack1 === false ? stack1 : stack1.create), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <a href=\"";
  if (helper = helpers.new_topic_url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.new_topic_url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-large btn-primary\">\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "make_an_announcement_caps", "Make an Announcement", options) : helperMissing.call(depth0, "t", "make_an_announcement_caps", "Make an Announcement", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </a>\n      ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <h1>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("announcements.index_view")
  },data:data},helper ? helper.call(depth0, "loading", "Loading...", options) : helperMissing.call(depth0, "t", "loading", "Loading...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n  ";
  return buffer;
  }

  stack1 = (helper = helpers.ifAll || (depth0 && depth0.ifAll),options={hash:{},inverse:self.program(8, program8, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.atLeastOnePageFetched), (depth0 && depth0.length), options) : helperMissing.call(depth0, "ifAll", (depth0 && depth0.atLeastOnePageFetched), (depth0 && depth0.length), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
  
      
arguments[1]('announcements/IndexView', ".headerBar{margin-bottom:15px;}.headerBar.pinned{position:fixed;top:0;width:1071px;background-color:white;box-shadow:0px 2px 3px rgba(0, 0, 0, 0.5);margin-left:-12px;padding:3px 14px;z-index:100;}.headerBar .headerBar-right{float:right;}#searchTerm{width:225px;}");

  return templates['announcements/IndexView'];
});
