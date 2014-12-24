define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/statistics/questions/short_answer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/multiple_choice/header", options) : helperMissing.call(depth0, "partial", "quiz/statistics/questions/multiple_choice/header", options))));
  data.buffer.push("\n\n<div>\n  <section class=\"correct-answer-ratio-section\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/multiple_choice/correct_pie", "controller", options) : helperMissing.call(depth0, "render", "quiz/statistics/questions/multiple_choice/correct_pie", "controller", options))));
  data.buffer.push("\n  </section>\n\n  <section class=\"answer-distribution-section\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/multiple_choice/answer_bars", "controller", options) : helperMissing.call(depth0, "render", "quiz/statistics/questions/multiple_choice/answer_bars", "controller", options))));
  data.buffer.push("\n  </section>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/multiple_choice/answers", options) : helperMissing.call(depth0, "partial", "quiz/statistics/questions/multiple_choice/answers", options))));
  return buffer;
  
});
});
