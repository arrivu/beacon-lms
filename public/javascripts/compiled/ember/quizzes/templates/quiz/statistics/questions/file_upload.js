define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['quiz/statistics/questions/file_upload'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<header>\n  <aside class=\"pull-right\">\n    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("quizSubmissionsZipUrl")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" target=\"_blank\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_submissions", "Download All Files", options) : helperMissing.call(depth0, "t", "download_submissions", "Download All Files", options))));
  data.buffer.push("\n    </a>\n  </aside>\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/essay/header_contents", options) : helperMissing.call(depth0, "partial", "quiz/statistics/questions/essay/header_contents", options))));
  data.buffer.push("\n</header>\n\n<div>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "quiz/statistics/questions/essay/charts", options) : helperMissing.call(depth0, "partial", "quiz/statistics/questions/essay/charts", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});
});
