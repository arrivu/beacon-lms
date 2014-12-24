define('jst/wiki/WikiPageRevisions', ["compiled/handlebars_helpers","i18n!wiki.wiki_page_revisions"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageRevisions'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"revision-nav-buttons\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.FETCH_PREV), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.FETCH_NEXT), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n        <a class=\"prev-button\"><i class=\"icon-mini-arrow-left\"></i> Previous</a>\n      ";
  }

function program4(depth0,data) {
  
  
  return "\n        <a class=\"next-button\">Next <i class=\"icon-mini-arrow-right\"></i></a>\n      ";
  }

  buffer += "<aside>\n  <div class=\"revision-history\">\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_revisions")
  },data:data},helper ? helper.call(depth0, "revision_history", "Revision History", options) : helperMissing.call(depth0, "t", "revision_history", "Revision History", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <a href=\"#\" class=\"close-button\"><i class=\"icon-x\"></i></a>\n  </div>\n  <ul class=\"collectionViewItems revisions-list\">\n  </ul>\n  ";
  stack1 = (helper = helpers.ifAny || (depth0 && depth0.ifAny),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.FETCH_PREV), ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.FETCH_NEXT), options) : helperMissing.call(depth0, "ifAny", ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.FETCH_PREV), ((stack1 = (depth0 && depth0.CAN)),stack1 == null || stack1 === false ? stack1 : stack1.FETCH_NEXT), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</aside>\n";
  return buffer;
  });
  
      
  return templates['wiki/WikiPageRevisions'];
});
