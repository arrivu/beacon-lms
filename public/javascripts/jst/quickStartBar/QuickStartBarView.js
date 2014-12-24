define('jst/quickStartBar/QuickStartBarView', ["compiled/handlebars_helpers","i18n!quick_start_bar.quick_start_bar_view"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quickStartBar/QuickStartBarView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <li><a data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\"><i class=\"icon-";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></i>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"row-fluid pick-an-item border border-b box-shadow\">\n  <div class=\"span1\">\n    <span class=\"new-text\">";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quick_start_bar.quick_start_bar_view")
  },data:data},helper ? helper.call(depth0, "new", "New:", options) : helperMissing.call(depth0, "t", "new", "New:", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n  </div>\n  <div class=span11>\n    <ul class=\"nav nav-tabs\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.formViews), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>\n\n<div class=\"container-fluid v-gutter\">\n\n  <div class=\"image-block control-group\">\n    <div class=\"image-block-image\">\n      <i class=\"item-type-image icon-large-\"></i>\n    </div>\n\n    <div class=\"image-block-content\">\n      <div class=\"newItemFormContainer triangle-box\"></div>\n    </div>\n  </div>\n</div>\n\n";
  return buffer;
  });
  
      
  return templates['quickStartBar/QuickStartBarView'];
});
