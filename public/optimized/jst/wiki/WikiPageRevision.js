define('jst/wiki/WikiPageRevision', ["compiled/handlebars_helpers","i18n!wiki.wiki_page_revision"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['wiki/WikiPageRevision'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_revision"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "revision_summary", "*%{updated_at}* by %{edited_by}", options) : helperMissing.call(depth0, "t", "revision_summary", "*%{updated_at}* by %{edited_by}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <strong>";
  if (helper = helpers.updated_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.updated_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</strong>\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"revision-actions\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_revision")
  },data:data},helper ? helper.call(depth0, "latest_revision", "Latest Revision", options) : helperMissing.call(depth0, "t", "latest_revision", "Latest Revision", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n  ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.ifAll || (depth0 && depth0.ifAll),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.SELECTED), ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.LOADED), options) : helperMissing.call(depth0, "ifAll", ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.SELECTED), ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.LOADED), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"revision-actions\">\n        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.SAME_AS_LATEST), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_revision"),
    'w0': ("<strong>$1</strong>")
  },data:data},helper ? helper.call(depth0, "same_as_latest", "Same as *Latest*", options) : helperMissing.call(depth0, "t", "same_as_latest", "Same as *Latest*", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n          <a class=\"restore-link\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("wiki.wiki_page_revision")
  },data:data},helper ? helper.call(depth0, "restore_revision", "Restore this revision", options) : helperMissing.call(depth0, "t", "restore_revision", "Restore this revision", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        ";
  return buffer;
  }

  buffer += "<div class=\"revision-content\">\n  <div class=\"revision-details\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.edited_by), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.IS)),stack1 == null || stack1 === false ? stack1 : stack1.LATEST), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
  
      
  return templates['wiki/WikiPageRevision'];
});
