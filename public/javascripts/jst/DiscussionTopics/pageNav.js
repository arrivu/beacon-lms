define('jst/DiscussionTopics/pageNav', ["compiled/handlebars_helpers","i18n!discussion_topics.page_nav"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['DiscussionTopics/pageNav'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li><a href=\"#page-1\" data-pushstate title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.page_nav")
  },data:data},helper ? helper.call(depth0, "first_page", "First", options) : helperMissing.call(depth0, "t", "first_page", "First", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>&lt;&lt;</a></li>\n    ";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, depth0, (depth1 && depth1.current), options) : helperMissing.call(depth0, "ifEqual", depth0, (depth1 && depth1.current), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <li><span class=\"item\" title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.page_nav")
  },data:data},helper ? helper.call(depth0, "current_page", "Current", options) : helperMissing.call(depth0, "t", "current_page", "Current", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span></li>\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "";
  buffer += "\n        <li><a class=\"item\" href=\"#page-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" data-pushstate title=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</a></li>\n      ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      <li><a class=\"item\" href=\"#page-";
  if (helper = helpers.lastPage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.lastPage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-pushstate title='";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.page_nav")
  },data:data},helper ? helper.call(depth0, "last_page", "Last", options) : helperMissing.call(depth0, "t", "last_page", "Last", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "'>&gt;&gt;</a></li>\n    ";
  return buffer;
  }

  buffer += "<div class=\"discussion-page-nav\">\n  <span class=\"hidden-readable\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussion_topics.page_nav")
  },data:data},helper ? helper.call(depth0, "Page", "Page", options) : helperMissing.call(depth0, "t", "Page", "Page", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  <ul>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showFirst), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.pages), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.lastPage), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>\n\n";
  return buffer;
  });
  
      
  return templates['DiscussionTopics/pageNav'];
});
