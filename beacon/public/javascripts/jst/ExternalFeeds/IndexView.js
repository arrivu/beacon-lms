define('jst/ExternalFeeds/IndexView', ["compiled/handlebars_helpers","i18n!external_feeds.index_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['ExternalFeeds/IndexView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n  <h2>External Feeds</h2>\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <li class=\"external_feed\">\n      <a class=\"close\" data-delete-feed-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\" role=\"button\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "remove_feed", "Remove %{display_name}", options) : helperMissing.call(depth0, "t", "remove_feed", "Remove %{display_name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">×</a>\n      <a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        <b>\n          ";
  if (helper = helpers.display_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.display_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n        </b>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.header_match), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.external_feed_entries_count), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </a>\n    </li>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <em>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "keyword", "Keyword:", options) : helperMissing.call(depth0, "t", "keyword", "Keyword:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  if (helper = helpers.header_match) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.header_match); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</em>\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <em>";
  if (helper = helpers.external_feed_entries_count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.external_feed_entries_count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "posts_added", "Posts Added", options) : helperMissing.call(depth0, "t", "posts_added", "Posts Added", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</em>\n        ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.length), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<ul class=\"right-side-list\">\n  ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <li>\n    <a href=\"#\" class=\"element_toggler add_external_feed_link\" aria-controls=\"add_external_feed_form\">\n      <i class=\"icon-rss-add\"></i>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "links.add_external_feed", "Add External Feed", options) : helperMissing.call(depth0, "t", "links.add_external_feed", "Add External Feed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  </li>\n</ul>\n\n<form class=\"bootstrap-form\" id=\"add_external_feed_form\" style=\"display: none\">\n  <h2>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "add_a_new_feed", "Add a New Feed", options) : helperMissing.call(depth0, "t", "add_a_new_feed", "Add a New Feed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n  <label for=\"external_feed_url\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "descriptions.add_new_feed", "You can automatically add posts from an RSS or Atom feed as announcements for this course. Just paste the feed URL below and any new entries will be added.", options) : helperMissing.call(depth0, "t", "descriptions.add_new_feed", "You can automatically add posts from an RSS or Atom feed as announcements for this course. Just paste the feed URL below and any new entries will be added.", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <input type=\"text\"\n         id=\"external_feed_url\"\n         name=\"url\"\n         class=\"input-block-level\"\n         aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "feed_url_label", "Feed URL", options) : helperMissing.call(depth0, "t", "feed_url_label", "Feed URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n         placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "feed_url_label", "Feed URL", options) : helperMissing.call(depth0, "t", "feed_url_label", "Feed URL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <div>\n    <select name=\"verbosity\" class=\"input-block-level\" aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "options.content_to_post", "Content to post", options) : helperMissing.call(depth0, "t", "options.content_to_post", "Content to post", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      <option>--";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "options.content_to_post", "Content to post", options) : helperMissing.call(depth0, "t", "options.content_to_post", "Content to post", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "--</option>\n      <option value=\"full\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "options.full_article", "Full article", options) : helperMissing.call(depth0, "t", "options.full_article", "Full article", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"truncate\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "options.truncated", "Truncated", options) : helperMissing.call(depth0, "t", "options.truncated", "Truncated", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n      <option value=\"link_only\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "options.link_only", "Link only", options) : helperMissing.call(depth0, "t", "options.link_only", "Link only", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</option>\n    </select>\n  </div>\n  <label class=\"checkbox\">\n    <input id=\"external_feed_enable_header_match\"\n           class=\"element_toggler\"\n           aria-controls=\"header_match_container\"\n           type=\"checkbox\"> ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "labels.match_phrase_checkbox", "Only add posts with a specific phrase in the title", options) : helperMissing.call(depth0, "t", "labels.match_phrase_checkbox", "Only add posts with a specific phrase in the title", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </label>\n  <div id=\"header_match_container\" style=\"display:none\">\n    <input id=\"external_feed_header_match\"\n           type=\"text\"\n           name=\"header_match\"\n           class=\"input-block-level\"\n           aria-label=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "phrase_to_look_for", "Phrase to look for", options) : helperMissing.call(depth0, "t", "phrase_to_look_for", "Phrase to look for", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n           placeholder=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "phrase_to_look_for", "Phrase to look for", options) : helperMissing.call(depth0, "t", "phrase_to_look_for", "Phrase to look for", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  </div>\n  <div>\n    <button type=\"submit\"\n            data-text-while-loading=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "buttons.adding_feed", "Adding feed...", options) : helperMissing.call(depth0, "t", "buttons.adding_feed", "Adding feed...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n            class=\"btn\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("external_feeds.index_view")
  },data:data},helper ? helper.call(depth0, "buttons.add_feed", "Add Feed", options) : helperMissing.call(depth0, "t", "buttons.add_feed", "Add Feed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n  </div>\n</form>\n";
  return buffer;
  });
  
      
  return templates['ExternalFeeds/IndexView'];
});
