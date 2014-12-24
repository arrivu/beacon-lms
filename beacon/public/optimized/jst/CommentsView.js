define('jst/CommentsView', ["compiled/handlebars_helpers","jst/_avatar"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['CommentsView'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entries)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Comments\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n      No Comments\n    ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <div class=\"image-block comment\">\n      <div class=\"image-block-image\">\n        ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', (depth0 && depth0.author), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <div class=\"image-block-content\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.canDelete), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <h5><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.author)),stack1 == null || stack1 === false ? stack1 : stack1.display_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> said:</h4>\n        <div class=\"not-important\">"
    + escapeExpression((helper = helpers.friendlyDatetime || (depth0 && depth0.friendlyDatetime),options={hash:{
    'pubdate': (true)
  },data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "friendlyDatetime", (depth0 && depth0.created_at), options)))
    + "</div>\n        <p>";
  if (helper = helpers.message) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.message); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n      </div>\n    </div>\n  ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<a href=\"#\" data-delete-comment=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"close\">&times;</a>";
  return buffer;
  }

  buffer += "<div class=\"CommentsView\">\n  <h3>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.entries)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h3>\n  <hr>\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.entries), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"image-block\">\n    <div class=\"image-block-image\">\n      ";
  stack1 = self.invokePartial(partials.avatar, 'avatar', (depth0 && depth0.currentUser), helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    <div class=\"image-block-content\">\n      <form>\n        <textarea name=\"message\" placeholder=\"Add a comment...\"></textarea>\n        <div>\n          <button class=\"btn btn-small\" type=\"submit\">Post</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
  
      
  return templates['CommentsView'];
});
