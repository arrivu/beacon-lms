define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/statistics/questions/multiple_choice/discrimination_index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<p>\n  <em ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":index discriminationIndexClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <span class=\"sign\">");
  stack1 = helpers._triageMustache.call(depth0, "sign", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  data.buffer.push(escapeExpression((helper = helpers.forcePrecision || (depth0 && depth0.forcePrecision),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "discriminationIndex", options) : helperMissing.call(depth0, "forcePrecision", "discriminationIndex", options))));
  data.buffer.push("\n  </em>\n\n  <strong>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "discrimination_index", "Discrimination Index", options) : helperMissing.call(depth0, "t", "discrimination_index", "Discrimination Index", options))));
  data.buffer.push("</strong>\n\n  <i ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showDiscriminationIndexHelp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"chart-help-trigger icon-question\"></i>\n</p>\n\n<svg class=\"chart\"></svg>");
  return buffer;
  
});
});
