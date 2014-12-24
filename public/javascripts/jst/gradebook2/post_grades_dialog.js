define('jst/gradebook2/post_grades_dialog', ["compiled/handlebars_helpers"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['gradebook2/post_grades_dialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n           <div class=\"row\">\n               <div id=\"assignment-error-";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                   <form class=\"passback-form form-inline\" data-assignment-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                       <div class=";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.not_unique), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " style=\"width: 4px\"></div>\n                       <div class=\"span4 input-container\">\n                           <input type=\"text\" class=\"input-xlarge assignment-name\" style=\"padding-right: 100px\" placeholder=\"No Assignment Name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                       </div>\n\n                       ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.due_at), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                       </div>\n                       <button style=\"left: 0px;\" class=\"btn ignore-assignment assignment-info\">X</button>\n                   </form>\n               </div>\n           </div>\n       ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\"span1 data-circle-error\"";
  }

function program4(depth0,data) {
  
  
  return "\"span1 data-circle-clean\"";
  }

function program6(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n                           <div class=\"span1 data-circle-clean\" style=\"width: 4px\"></div>\n                           <div class=\"span2 date_field_container input-container\">\n                           <input type=\"text\" class=\"input-medium date_field assignment-info\" value=\""
    + escapeExpression((helper = helpers.datetimeFormatted || (depth0 && depth0.datetimeFormatted),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.due_at), options) : helperMissing.call(depth0, "datetimeFormatted", (depth0 && depth0.due_at), options)))
    + "\">\n                       ";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n                           <div class=\"span1 data-circle-error\" style=\"width: 4px\"></div>\n                           <div class=\"span2 date_field_container input-container\">\n                           <input type=\"text\" class=\"input-medium date_field assignment-info\" placeholder=\"No Due Date\">\n                       ";
  }

  buffer += "<style>\n    .passback-form {\n        margin:0;\n        margin-bottom: 25px;\n        padding: 0;\n    }\n\n    .passback-form .assignment-info {\n        padding-right: 3px;\n        padding-right: 4px \\9;\n        padding-left: 3px;\n        padding-left: 4px \\9;\n        /* IE7-8 doesn't have border-radius, so don't indent the padding */\n\n        /*margin-bottom: 20px;*/\n        -webkit-border-radius: 3px;\n        -moz-border-radius: 3px;\n        border-radius: 3px;\n    }\n\n    .passback-form button {\n        border: 0;\n        background: none;\n        /** belows styles are working good */\n        padding: 2px 5px;\n        margin-top: 2px;\n        position: relative;\n        left: -28px;\n        /* IE7-8 doesn't have border-radius, so don't indent the padding */\n        margin-bottom: 0;\n        -webkit-border-radius: 3px;\n        -moz-border-radius: 3px;\n        border-radius: 3px;\n    }\n\n    .assignment-info:focus + button {\n        z-index: 3;\n    }\n\n    .data-circle-error{\n        margin-top: 12px;\n        margin-right: -20px;\n        border-radius: 50%;\n        width: 4px;\n        height: 4px;\n        background: #f00;\n        border: 1px solid #f00;\n    }\n    .data-circle-clean{\n        margin-top: 12px;\n        margin-right: -20px;\n        border-radius: 50%;\n        width: 4px;\n        height: 4px;\n        background: transparent;\n        border: 1px solid transparent;\n    }\n    .data-circle-success{\n        margin-top: 12px;\n        margin-right: -20px;\n        border-radius: 50%;\n        width: 4px;\n        height: 4px;\n        background: transparent;\n        border: 1px solid transparent;\n    }\n    .lead{\n        margin-bottom: 20px;\n        /*font-size: 21px;*/\n        font-weight: 200;\n        line-height: 30px;\n    }\n    @media (min-width: 0 ) {\n    .row {\n        margin-left: -30px;\n        overflow: hidden;\n        *zoom: 1; }\n\n    [class*=\"span\"] {\n        float: left;\n        min-height: 1px;\n        margin-left: 30px; }\n\n    #post-grades-container .span4 {\n        width: 370px; }\n\n    #post-grades-container .span3 {\n        width: 270px; }\n\n    #post-grades-container .span2 {\n        width: 170px; }\n\n    #post-grades-container .span1 {\n        width: 70px; }\n</style>\n\n<div id=\"assignment-errors\">\n   <legend class=\"lead\" style><span class=\"assignment-error-count\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.missing_not_unique)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> Assignments with Errors</legend>\n   <div class=\"assignment-errors-list\">\n       <div class=\"row\">\n           <h5 class=\"muted span4\" style=\"margin-left: 50px\">Assignment Name</h5>\n           <span class=\"span1\"></span>\n           <h5 class=\"muted span2\" style=\"margin-left: -60px;\">Due Date</h5>\n       </div>\n       ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.missing_not_unique), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n   </div>\n</div>";
  return buffer;
  });
  
      
  return templates['gradebook2/post_grades_dialog'];
});
