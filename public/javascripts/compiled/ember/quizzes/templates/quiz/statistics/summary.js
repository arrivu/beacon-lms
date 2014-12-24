define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/statistics/summary'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "quiz/statistics/summary/report_generator", "quizReport", options) : helperMissing.call(depth0, "render", "quiz/statistics/summary/report_generator", "quizReport", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<div id=\"summary-statistics\">\n  <header class=\"padded\">\n    <h3 class=\"section-title inline\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "quiz_summary", "Quiz Summary", options) : helperMissing.call(depth0, "t", "quiz_summary", "Quiz Summary", options))));
  data.buffer.push("</h3>\n\n    <aside class=\"pull-right\">\n      ");
  stack1 = helpers.each.call(depth0, "quizReport", "in", "quiz.quizReports", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </aside>\n  </header>\n\n  <table class=\"text-left\">\n    <thead>\n      <tr>\n        <th>\n          <i class=\"icon-quiz-stats-avg\"></i>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "stats_mean", "Avg Score", options) : helperMissing.call(depth0, "t", "stats_mean", "Avg Score", options))));
  data.buffer.push("\n        </th>\n        <th>\n          <i class=\"icon-quiz-stats-high\"></i>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "stats_high", "High Score", options) : helperMissing.call(depth0, "t", "stats_high", "High Score", options))));
  data.buffer.push("\n        </th>\n        <th>\n          <i class=\"icon-quiz-stats-low\"></i>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "stats_low", "Low Score", options) : helperMissing.call(depth0, "t", "stats_low", "Low Score", options))));
  data.buffer.push("\n        </th>\n        <th>\n          <i class=\"icon-quiz-stats-deviation\"></i>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "stats_stdev", "Std. Deviation", options) : helperMissing.call(depth0, "t", "stats_stdev", "Std. Deviation", options))));
  data.buffer.push("\n        </th>\n        <th>\n          <i class=\"icon-quiz-stats-time\"></i>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "stats_avg_time", "Avg Time", options) : helperMissing.call(depth0, "t", "stats_avg_time", "Avg Time", options))));
  data.buffer.push("\n        </th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr>\n        <td class=\"emphasized\">");
  stack1 = helpers._triageMustache.call(depth0, "avgScoreRatio", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "highScoreRatio", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "lowScoreRatio", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("%</td>\n        <td>");
  data.buffer.push(escapeExpression((helper = helpers.forcePrecision || (depth0 && depth0.forcePrecision),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "scoreStdev", options) : helperMissing.call(depth0, "forcePrecision", "scoreStdev", options))));
  data.buffer.push("</td>\n        <td>");
  stack1 = helpers._triageMustache.call(depth0, "formattedAvgDuration", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <svg class=\"chart\"></svg>\n</div>");
  return buffer;
  
});
});
