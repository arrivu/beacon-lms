define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['content_selection/outcome'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row pad-box bottom-only\">\n  <div class=\"span4 text-right-responsive\">\n    <label for=\"outcome_select\">\n      ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("screenreader_gradebook.templates.content_selection.outcome.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "select_outcome", "Select an outcome", options) : helperMissing.call(depth0, "t", "select_outcome", "Select an outcome", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </label>\n  </div>\n  <div class=\"span8\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['fast-select'] || (depth0 && depth0['fast-select']),options={hash:{
    'id': ("outcome_select"),
    'class': ("outcome_select"),
    'items': ("outcomes"),
    'valuePath': ("id"),
    'labelPath': ("title"),
    'labelDefault': ("outcomeSelectDefaultLabel"),
    'selected': ("selectedOutcome")
  },hashTypes:{'id': "STRING",'class': "STRING",'items': "ID",'valuePath': "STRING",'labelPath': "STRING",'labelDefault': "ID",'selected': "ID"},hashContexts:{'id': depth0,'class': depth0,'items': depth0,'valuePath': depth0,'labelPath': depth0,'labelDefault': depth0,'selected': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "fast-select", options))));
  data.buffer.push("\n\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.SelectionButtonsView", {hash:{
    'type': ("outcome"),
    'selected': ("selectedOutcome"),
    'list': ("outcomes")
  },hashTypes:{'type': "STRING",'selected': "ID",'list': "ID"},hashContexts:{'type': depth0,'selected': depth0,'list': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});
});
