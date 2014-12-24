define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['create/quiz'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form class=\"bootstrap-form form-inline modules-create-item-form\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['c-icon'] || (depth0 && depth0['c-icon']),options={hash:{
    'type': ("quiz")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "c-icon", options))));
  data.buffer.push("\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'autofocus': ("true"),
    'type': ("text"),
    'class': ("span4"),
    'value': ("model.title"),
    'placeholder': ("text.quizName"),
    'aria-label': ("text.quizName")
  },hashTypes:{'autofocus': "STRING",'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "ID",'aria-label': "ID"},hashContexts:{'autofocus': depth0,'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0,'aria-label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers['fast-select'] || (depth0 && depth0['fast-select']),options={hash:{
    'value': ("model.quiz_type"),
    'items': ("types")
  },hashTypes:{'value': "ID",'items': "ID"},hashContexts:{'value': depth0,'items': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "fast-select", options))));
  data.buffer.push("\n\n  <button\n    class=\"btn btn-primary\"\n    type=\"submit\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n  >");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.create.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "create_quiz", "Create Quiz", options) : helperMissing.call(depth0, "t", "create_quiz", "Create Quiz", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n\n  <button\n    class=\"btn\"\n    type=\"button\"\n    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n  >");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("modules.templates.create.quiz.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "cancel", "Cancel", options) : helperMissing.call(depth0, "t", "cancel", "Cancel", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n</form>\n\n");
  return buffer;
  
});
});
