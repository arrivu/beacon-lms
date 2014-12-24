define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/statistics/questions/calculated'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<header>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/essay/header_contents", options) : helperMissing.call(depth0, "partial", "quiz/statistics/questions/essay/header_contents", options))));
  data.buffer.push("\n</header>\n\n<div>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/essay/charts", options) : helperMissing.call(depth0, "partial", "quiz/statistics/questions/essay/charts", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});
});
