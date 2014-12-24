define('jst/quiz_reports/quizReportGenerator', ["compiled/handlebars_helpers","i18n!quiz_reports.quiz_report_generator"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['quiz_reports/quizReportGenerator'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n  <a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.file)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn button-sidebar-wide \"target=\"_blank\">\n    <i class=\"icon-download\"></i>\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz_reports.quiz_report_generator")
  },data:data},helper ? helper.call(depth0, "download_report_name", "Download %{report_name}", options) : helperMissing.call(depth0, "t", "download_report_name", "Download %{report_name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\n    <small>";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz_reports.quiz_report_generator")
  },data:data},helper ? helper.call(depth0, "generated_at_date_time", "Generated %{dateAndTime}", options) : helperMissing.call(depth0, "t", "generated_at_date_time", "Generated %{dateAndTime}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small>\n  </a>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.progress), {hash:{},inverse:self.program(9, program9, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz_reports.quiz_report_generator")
  },data:data},helper ? helper.call(depth0, "generating_report_name", "Generating %{report_name}...", options) : helperMissing.call(depth0, "t", "generating_report_name", "Generating %{report_name}...", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"progress progress-small progress-striped ";
  stack1 = (helper = helpers.ifEqual || (depth0 && depth0.ifEqual),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, "completed", ((stack1 = (depth0 && depth0.progress)),stack1 == null || stack1 === false ? stack1 : stack1.workflow_state), options) : helperMissing.call(depth0, "ifEqual", "completed", ((stack1 = (depth0 && depth0.progress)),stack1 == null || stack1 === false ? stack1 : stack1.workflow_state), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"margin: 0 0 10px\">\n      <div class=\"bar\" style=\"width:"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.progress)),stack1 == null || stack1 === false ? stack1 : stack1.completion)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%;\"></div>\n    </div>\n  ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "progress-success";
  }

function program7(depth0,data) {
  
  
  return "active";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    <a href=\"javascript:void(0)\" class=\"btn button-sidebar-wide ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.generatable), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.generatable), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n      <i class=\"icon-ms-excel\"></i>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz_reports.quiz_report_generator")
  },data:data},helper ? helper.call(depth0, "generate_report_name", "Generate %{report_name}", options) : helperMissing.call(depth0, "t", "generate_report_name", "Generate %{report_name}", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </a>\n  ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "create-report";
  }

function program12(depth0,data) {
  
  
  return "disabled";
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n         data-tooltip title=\"";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("quiz_reports.quiz_report_generator")
  },data:data},helper ? helper.call(depth0, "item_analysis_not_available", "Item Analysis is not available for Surveys", options) : helperMissing.call(depth0, "t", "item_analysis_not_available", "Item Analysis is not available for Surveys", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"\n       ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.file), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
  
      
  return templates['quiz_reports/quizReportGenerator'];
});
