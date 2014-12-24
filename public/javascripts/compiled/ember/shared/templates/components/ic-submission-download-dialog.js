define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['components/ic-submission-download-dialog'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<button class=\"btn\" id=\"submissions_download_button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openDialog", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  ");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("shared.templates.components.ic_submission_download_dialog.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_submissions", "Download all submissions", options) : helperMissing.call(depth0, "t", "download_submissions", "Download all submissions", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</button>\n<div id=\"submissions_download_dialog\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isOpened::hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\n  <div class=\"ui-dialog ui-widget ui-widget-content ui-corner-all\" role=\"dialog\" tabindex=\"-1\" style=\"position: fixed; z-index: 1002; height: 260px;\">\n    <div class=\"ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix\">\n      <span class=\"ui-dialog-title\" role=\"heading\">Download Assignment Submissions</span>\n      <a href=\"#\" class=\"ui-dialog-titlebar-close ui-corner-all\" role=\"button\" tabindex=\"0\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeDialog", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <span class=\"ui-icon ui-icon-closethick\">close</span>\n      </a>\n    </div>\n    <form class=\"ui-dialog-content ui-widget-content\">\n      <p>\n        <a class=\"icon-download\"></a>\n        <strong>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("shared.templates.components.ic_submission_download_dialog.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_message_intro", "Your student submissions are being gathered.", options) : helperMissing.call(depth0, "t", "download_message_intro", "Your student submissions are being gathered.", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n      </p>\n      <p>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("shared.templates.components.ic_submission_download_dialog.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "download_message", "The submissions will be compressed into a zip file for download. This may take some time, depending on the size and number of submission files.", options) : helperMissing.call(depth0, "t", "download_message", "The submissions will be compressed into a zip file for download. This may take some time, depending on the size and number of submission files.", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div id=\"progressbar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("showFileLink:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" style=\"width: 100%;\"></div>\n      <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":text-center :status_box showFileLink:pad-box")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\n        <div class=\"status\">\n          <div>");
  stack1 = helpers._triageMustache.call(depth0, "statusText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url"),
    'class': ("showFileLink::hidden")
  },hashTypes:{'href': "STRING",'class': "STRING"},hashContexts:{'href': depth0,'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ><strong>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("shared.templates.components.ic_submission_download_dialog.hbs")
  },hashTypes:{'scope': "STRING"},hashContexts:{'scope': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "click_to_download", "Click here to download", options) : helperMissing.call(depth0, "t", "click_to_download", "Click here to download", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "sizeOfFile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong></a>\n        </div>\n        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":loadingIndicator hideIndicator:hidden")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ></div>\n      </div>\n    </form>\n  </div>\n  <div class=\"ui-widget-overlay\" style=\"position: fixed; z-index: 1001;\"></div>\n</div>");
  return buffer;
  
});
});
