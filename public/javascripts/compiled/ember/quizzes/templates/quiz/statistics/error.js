define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/statistics/error'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"erratic-statistics\">\n  <img\n    src=\"/images/quizzes/quiz_stats_empty.png\"\n    ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'alt': ("imageAltLabel")
  },hashTypes:{'alt': "ID"},hashContexts:{'alt': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n\n  <header>\n    <h3>");
  stack1 = helpers._triageMustache.call(depth0, "errorHeaderLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n  </header>\n\n  <p>");
  stack1 = helpers._triageMustache.call(depth0, "errorInfoLabel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n</div>");
  return buffer;
  
});
});
