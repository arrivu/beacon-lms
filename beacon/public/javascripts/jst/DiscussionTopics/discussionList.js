define('jst/DiscussionTopics/discussionList', ["compiled/handlebars_helpers","i18n!discussion_topics.discussion_list"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/discussionList'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <span class=\"pull-right title-help\">";
  if (helper = helpers.titleHelp) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.titleHelp); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <b>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion_list")
  },data:data},helper ? helper.call(depth0, "no_pinned_discussions", "You currently have no pinned discussions", options) : helperMissing.call(depth0, "t", "no_pinned_discussions", "You currently have no pinned discussions", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</b>\n      <p>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion_list")
  },data:data},helper ? helper.call(depth0, "pinned_instructions", "To pin a discussion to the top of the page, drag a discussion here, or select Pin from the discussion settings menu.", options) : helperMissing.call(depth0, "t", "pinned_instructions", "To pin a discussion to the top of the page, drag a discussion here, or select Pin from the discussion settings menu.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.discussion_list")
  },data:data},helper ? helper.call(depth0, "there_are_no_discussions_show", "There are no discussions to show in this section.", options) : helperMissing.call(depth0, "t", "there_are_no_discussions_show", "There are no discussions to show in this section.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n    <div class=\"loader\"></div>\n  ";
  }

  buffer += "<div class=\"ig-header\">\n  <h2 class=\"ig-header-title element_toggler\"\n     aria-controls=\"";
  if (helper = helpers.listID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.listID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n     aria-expanded=\"true\"\n     tabindex=\"0\">\n    <i class=\"icon-mini-arrow-down\"></i>\n    ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n    <a href=\"#\" role=\"button\" class=\"screenreader-only\" tabindex=\"-1\">";
  if (helper = helpers.toggleMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.toggleMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n  </h2>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.titleHelp), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div id=\"";
  if (helper = helpers.listID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.listID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n  <ul class=\"collectionViewItems ig-list\"></ul>\n  <div class=\"no-content discussion\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pinned), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showSpinner), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['DiscussionTopics/discussionList'];
});
