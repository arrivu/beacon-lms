define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/statistics/questions/essay/_charts'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"correct-answer-ratio-section\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/multiple_choice/correct_pie", "controller", options) : helperMissing.call(depth0, "render", "quiz/statistics/questions/multiple_choice/correct_pie", "controller", options))));
  data.buffer.push("\n</section>\n\n<section class=\"essay-score-chart-section\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/essay/score_chart", "controller", options) : helperMissing.call(depth0, "render", "quiz/statistics/questions/essay/score_chart", "controller", options))));
  data.buffer.push("\n</section>");
  return buffer;
  
});
});
