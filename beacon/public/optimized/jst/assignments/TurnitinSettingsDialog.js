define('jst/assignments/TurnitinSettingsDialog', ["compiled/handlebars_helpers","i18n!assignments.turnitin_settings_dialog"], function (Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['assignments/TurnitinSettingsDialog'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "\n<form id=\"assignment_turnitin_settings\">\n  <div class=\"control-group\">\n    <div class=\"controls\">\n      <label for=\"settings_originality_report_visibility\"\n      class=\"control-label\">\n        ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.originality_report_visibility", "Students Can See the Originality Report", options) : helperMissing.call(depth0, "t", "turnitin_settings.originality_report_visibility", "Students Can See the Originality Report", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </label>\n      <br/>\n      <select id=\"settings_originality_report_visibility\"\n        name=\"originality_report_visibility\">\n        <option value=\"immediate\"\n        "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.originalityReportVisibility), "immediate", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.originalityReportVisibility), "immediate", options)))
    + " >\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.originality_report_visible_immediately", "Immediately", options) : helperMissing.call(depth0, "t", "turnitin_settings.originality_report_visible_immediately", "Immediately", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"after_grading\"\n        "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.originalityReportVisibility), "after_grading", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.originalityReportVisibility), "after_grading", options)))
    + " >\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.originality_report_visible_after_grading", "After the assignment is graded", options) : helperMissing.call(depth0, "t", "turnitin_settings.originality_report_visible_after_grading", "After the assignment is graded", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"after_due_date\"\n        "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.originalityReportVisibility), "after_due_date", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.originalityReportVisibility), "after_due_date", options)))
    + " >\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.originality_report_visible_after_due_date", "After the Due Date", options) : helperMissing.call(depth0, "t", "turnitin_settings.originality_report_visible_after_due_date", "After the Due Date", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n        <option value=\"never\"\n        "
    + escapeExpression((helper = helpers.selectedIf || (depth0 && depth0.selectedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.originalityReportVisibility), "never", options) : helperMissing.call(depth0, "selectedIf", (depth0 && depth0.originalityReportVisibility), "never", options)))
    + " >\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.originality_report_never", "Never", options) : helperMissing.call(depth0, "t", "turnitin_settings.originality_report_never", "Never", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <fieldset>\n    <h5>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.compare_against", "Compare Against", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.compare_against", "Compare Against", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h5>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"s_paper_check\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.sPaperCheck))
  },data:data},helper ? helper.call(depth0, "s_paper_check", options) : helperMissing.call(depth0, "checkbox", "s_paper_check", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.student_paper_check", "Other Student Papers", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.student_paper_check", "Other Student Papers", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"internet_check\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.internetCheck))
  },data:data},helper ? helper.call(depth0, "internet_check", options) : helperMissing.call(depth0, "checkbox", "internet_check", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.internet_check", "Internet Database", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.internet_check", "Internet Database", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"journal_check\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.journalCheck))
  },data:data},helper ? helper.call(depth0, "journal_check", options) : helperMissing.call(depth0, "checkbox", "journal_check", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.journal_check", "Journals, Periodicals, and Publications", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.journal_check", "Journals, Periodicals, and Publications", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <h5>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.do_not_consider", "Do Not Consider", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.do_not_consider", "Do Not Consider", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h5>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"exclude_biblio\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.excludeBiblio))
  },data:data},helper ? helper.call(depth0, "exclude_biblio", options) : helperMissing.call(depth0, "checkbox", "exclude_biblio", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.exclude_biblio", "Bibliographic Material", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.exclude_biblio", "Bibliographic Material", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"exclude_quoted\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.excludeQuoted))
  },data:data},helper ? helper.call(depth0, "exclude_quoted", options) : helperMissing.call(depth0, "checkbox", "exclude_quoted", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.exclude_quoted", "Quoted Material", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.exclude_quoted", "Quoted Material", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"exclude_small_matches\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.excludesSmallMatches))
  },data:data},helper ? helper.call(depth0, "exclude_small_matches", options) : helperMissing.call(depth0, "checkbox", "exclude_small_matches", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "assignments.turnitin_settings.labels.exclude_small_matches", "Small Matches", options) : helperMissing.call(depth0, "t", "assignments.turnitin_settings.labels.exclude_small_matches", "Small Matches", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n        <div class=\"controls js-exclude-small-matches-options\"\n          style=\""
    + escapeExpression((helper = helpers.hiddenUnless || (depth0 && depth0.hiddenUnless),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.excludesSmallMatches), options) : helperMissing.call(depth0, "hiddenUnless", (depth0 && depth0.excludesSmallMatches), options)))
    + "\">\n\n          <label class=\"control-label radio\" style=\"display: block;\">\n            <input id=\"exclude_small_matches_type_r1\"\n              name=\"exclude_small_matches_type\"\n              type=\"radio\"\n              "
    + escapeExpression((helper = helpers.checkedIf || (depth0 && depth0.checkedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.excludeSmallMatchesType), "words", options) : helperMissing.call(depth0, "checkedIf", (depth0 && depth0.excludeSmallMatchesType), "words", options)))
    + "\n              value=\"words\"/>\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.settings_exclude_fewer_than_count", "Fewer than %h{wordsInput} words", options) : helperMissing.call(depth0, "t", "turnitin_settings.settings_exclude_fewer_than_count", "Fewer than %h{wordsInput} words", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n\n          <label class=\"control-label radio\">\n            <input id=\"exclude_small_matches_type_r2\"\n              type=\"radio\"\n              name=\"exclude_small_matches_type\"\n              "
    + escapeExpression((helper = helpers.checkedIf || (depth0 && depth0.checkedIf),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.excludeSmallMatchesType), "percent", options) : helperMissing.call(depth0, "checkedIf", (depth0 && depth0.excludeSmallMatchesType), "percent", options)))
    + "\n              value=\"percent\"/>\n              ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.settings_exclude_less_than_percent", "Less than %h{percentInput} of the document", options) : helperMissing.call(depth0, "t", "turnitin_settings.settings_exclude_less_than_percent", "Less than %h{percentInput} of the document", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <h5>\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.turnitin_repository", "Turnitin Repository", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.turnitin_repository", "Turnitin Repository", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h5>\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <label class=\"checkbox\" for=\"submit_papers_to\">\n          "
    + escapeExpression((helper = helpers.checkbox || (depth0 && depth0.checkbox),options={hash:{
    'checked': ((depth0 && depth0.submitPapersTo))
  },data:data},helper ? helper.call(depth0, "submit_papers_to", options) : helperMissing.call(depth0, "checkbox", "submit_papers_to", options)))
    + "\n          ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "turnitin_settings.labels.submit_papers_to", "Include in Repository", options) : helperMissing.call(depth0, "t", "turnitin_settings.labels.submit_papers_to", "Include in Repository", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </label>\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"button-container\">\n    <button type=\"submit\" class=\"btn btn-primary\">\n      ";
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'scope': ("assignments.turnitin_settings_dialog")
  },data:data},helper ? helper.call(depth0, "buttons.update_settings", "Update Settings", options) : helperMissing.call(depth0, "t", "buttons.update_settings", "Update Settings", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </button>\n  </div>\n\n</form>\n";
  return buffer;
  });
  
      
  return templates['assignments/TurnitinSettingsDialog'];
});
