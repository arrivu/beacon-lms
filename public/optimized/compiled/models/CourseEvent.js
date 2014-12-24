(function(){var e={}.hasOwnProperty,t=function(t,l){function r(){this.constructor=t}for(var n in l)e.call(l,n)&&(t[n]=l[n]);return r.prototype=l.prototype,t.prototype=new r,t.__super__=l.prototype,t};define(["underscore","Backbone","i18n!course_logging"],function(e,l,r){var n,a;return n=function(n){function s(){return a=s.__super__.constructor.apply(this,arguments)}return t(s,n),s.prototype.present=function(){var t,n,a,s=this;switch(a=l.Model.prototype.toJSON.call(this),t={},n=function(e,l){return l=s.presentLabel(l),t[l]=s.presentField(e)},a.event_type){case"created":a.event_type_present=r.t("event_type.created","Created"),n=function(l,r){return r=s.presentLabel(r),t[r]=s.presentField(e.last(l))};break;case"updated":a.event_type_present=r.t("event_type.updated","Updated"),n=function(l,r){return r=s.presentLabel(r),t[r]=e.object(["from","to"],s.presentField(l))};break;case"concluded":a.event_type_present=r.t("event_type.concluded","Concluded");break;case"unconcluded":a.event_type_present=r.t("event_type.unconcluded","Unconcluded");break;case"restored":a.event_type_present=r.t("event_type.restored","Restored");break;case"deleted":a.event_type_present=r.t("event_type.deleted","Deleted");break;case"published":a.event_type_present=r.t("event_type.published","Published");break;case"copied_from":a.event_type_present=r.t("event_type.copied_from","Copied From");break;case"copied_to":a.event_type_present=r.t("event_type.copied_to","Copied To");break;case"reset_from":a.event_type_present=r.t("event_type.reset_from","Reset From");break;case"reset_to":a.event_type_present=r.t("event_type.reset_to","Reset To");break;case"corrupted":a.event_type_present=r.t("event_type.corrupted","Details Not Available");break;default:a.event_type_present=a.event_type}switch(a.event_source){case"manual":a.event_source_present=r.t("event_source.manual","Manual");break;case"api":a.event_source_present=r.t("event_source.api","Api");break;case"sis":a.event_source_present=r.t("event_source.sis","SIS");break;default:a.event_source_present=a.event_source||r.t("blank_placeholder","-")}return e.each(a.event_data,n),e.isEmpty(t)||(a.event_data=t),a},s.prototype.presentField=function(t){var l;if(l=r.t("blank_placeholder","-"),e.isNull(t))return l;if(e.isBoolean(t))return t.toString();if(e.isArray(t))return e.map(t,this.presentField,this);if(e.isString(t)){if(!t.length)return l;if(t.match(/^\d{4}-\d{2}-\d{2}(T| )\d{2}:\d{2}:\d{2}(.\d+)?Z$/))return r.l("#date.formats.medium",t)+" "+r.l("#time.formats.tiny",t)}return t},s.prototype.presentLabel=function(e){switch(e.toLowerCase()){case"name":return r.t("field_label.name","Name");case"account_id":return r.t("field_label.account_id","Account Id");case"group_weighting_scheme":return r.t("field_label.group_weighting_scheme","Group Weighting Scheme");case"old_account_id":return r.t("field_label.old_account_id","Old Account Id");case"workflow_state":return r.t("field_label.workflow_state","Workflow State");case"uuid":return r.t("field_label.uuid","UUID");case"start_at":return r.t("field_label.start_at","Start At");case"conclude_at":return r.t("field_label.conclude_at","Concluded At");case"grading_standard_id":return r.t("field_label.grading_standard_id","Grading Standard Id");case"is_public":return r.t("field_label.is_public","Is Public");case"allow_student_wiki_edits":return r.t("field_label.allow_student_wiki_edits","Allow Student Wiki Edit");case"created_at":return r.t("field_label.created_at","Created At");case"updated_at":return r.t("field_label.updated_at","Updated At");case"show_public_context_messages":return r.t("field_label.show_public_context_messages","Show Public Context Message");case"syllabus_body":return r.t("field_label.syllabus_body","syllabus_body");case"allow_student_forum_attachments":return r.t("field_label.allow_student_forum_attachments","Allow Student Forum Attachments");case"default_wiki_editing_roles":return r.t("field_label.default_wiki_editing_roles","Default Wiki Editing Roles");case"wiki_id":return r.t("field_label.wiki_id","Wiki Id");case"allow_student_organized_groups":return r.t("field_label.allow_student_organized_groups","Allow Student Organized Groups");case"course_code":return r.t("field_label.course_code","Course Code");case"default_view":return r.t("field_label.default_view","Default View");case"abstract_course_id":return r.t("field_label.abstract_course_id","Abstract Course Id");case"root_account_id":return r.t("field_label.root_account_id","Root Account Id");case"enrollment_term_id":return r.t("field_label.enrollment_term_id","Enrollment Term Id");case"sis_source_id":return r.t("field_label.sis_source_id","SIS Source Id");case"sis_batch_id":return r.t("field_label.sis_batch_id","SIS Batch Id");case"show_all_discussion_entries":return r.t("field_label.show_all_discussion_entries","Show All Discussion Entries");case"open_enrollment":return r.t("field_label.open_enrollment","Open Enrollment");case"storage_quota":return r.t("field_label.storage_quota","Storage Quota");case"tab_configuration":return r.t("field_label.tab_configuration","Tab Configuration");case"allow_wiki_comments":return r.t("field_label.allow_wiki_comments","Allow Wiki Comments");case"turnitin_comments":return r.t("field_label.turnitin_comments","Turnitin Comments");case"self_enrollment":return r.t("field_label.self_enrollment","Self Enrollment");case"license":return r.t("field_label.license","License");case"indexed":return r.t("field_label.indexed","Indexed");case"restrict_enrollments_to_course_dates":return r.t("field_label.restrict_enrollments_to_course_dates","Restrict Enrollments To Course Dates");case"template_course_id":return r.t("field_label.template_course_id","Template Course Id");case"locale":return r.t("field_label.locale","Locale");case"replacement_course_id":return r.t("field_label.replacement_course_id","Replacement Course Id");case"public_description":return r.t("field_label.public_description","Public Description");case"self_enrollment_code":return r.t("field_label.self_enrollment_code","Self Enrollment Code");case"self_enrollment_limit":return r.t("field_label.self_enrollment_limit","Self Enrollment Limit");case"integration_id":return r.t("field_label.integration_id","Integration Id");case"hide_final_grade":return r.t("field_label.hide_final_grade","Hide Final Grade");case"hide_distribution_graphs":return r.t("field_label.hide_distribution_graphs","Hide Distribution Graphs");case"allow_student_discussion_topics":return r.t("field_label.allow_student_discussion_topics","Allow Student Discussion Topics");case"allow_student_discussion_editing":return r.t("field_label.allow_student_discussion_editing","Allow Student Discussion Editing");case"lock_all_announcements":return r.t("field_label.lock_all_announcements","Lock All Announcements");case"large_roster":return r.t("field_label.large_roster","Large Roster");case"public_syllabus":return r.t("field_label.public_syllabus","Public Syllabus");default:return e}},s}(l.Model)})}).call(this);