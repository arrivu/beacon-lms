define('jst/quizzes/editor/KeyboardShortcuts', ["compiled/handlebars_helpers","compiled/util/registerTemplateCss"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quizzes/editor/KeyboardShortcuts'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <li>\n      <code>";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</code>\n      <span>";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </li>\n  ";
  return buffer;
  }

  buffer += "<ul class=\"tinymce-keyboard-shortcuts\">\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.keybindings), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });
  
      
arguments[1]('quizzes/editor/KeyboardShortcuts', ".tinymce-keyboard-shortcuts-toggle{margin-right:5px;}ul.tinymce-keyboard-shortcuts{list-style:none;margin:0;}ul.tinymce-keyboard-shortcuts code{display:inline-block;color:#123583;background:none;border:none;font-weight:bold;font-size:inherit;}");

  return templates['quizzes/editor/KeyboardShortcuts'];
});
