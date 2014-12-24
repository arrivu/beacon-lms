define('jst/discussions/EntryCollectionView', ["compiled/handlebars_helpers","i18n!discussions.entry_collection_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['discussions/EntryCollectionView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <span class=\"add_root_reply\"><a href=\"*\" class=\"btn btn-primary btn-small icon-arrow-up\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("discussions.entry_collection_view")
  },data:data},helper ? helper.call(depth0, "add_reply_to_topic", "Add Reply to Topic", options) : helperMissing.call(depth0, "t", "add_reply_to_topic", "Add Reply to Topic", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></span>\n";
  return buffer;
  }

  buffer += "<ul class=\"discussion-entries\"></ul>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.showReplyButton), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
  
      
  return templates['discussions/EntryCollectionView'];
});
