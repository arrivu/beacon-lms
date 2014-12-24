(function(){require(["i18n!assignments.peer_reviews","jquery","jquery.ajaxJSON","jquery.instructure_date_and_time","jquery.instructure_forms","jquery.instructure_misc_helpers","jquery.instructure_misc_plugins","jquery.loadingImg","jquery.templateData"],function(e,t){return t(document).ready(function(){return t(".peer_review").hover(function(){return t(".peer_review.submission-hover").removeClass("submission-hover"),t(this).addClass("submission-hover")},function(){return t(this).removeClass("submission-hover")}),t(".peer_review .delete_review_link").click(function(r){return r.preventDefault(),t(this).parents(".peer_review").confirmDelete({url:t(this).attr("href"),message:e.t("messages.cancel_peer_review","Cancel this peer review?")})}),t(".assign_peer_review_link").click(function(e){var r,s,i;return e.preventDefault(),t(this).parents(".student_reviews").find(".form_content form:visible").length?t(this).parents(".student_reviews").find(".form_content form:visible").slideUp():(r=t("#assign_peer_review_form").clone(!0).removeAttr("id"),s=t(".assign_peer_review_url").attr("href"),i=t(this).parents(".student_reviews").getTemplateData({textValues:["student_review_id"]}).student_review_id,s=t.replaceTags(s,"reviewer_id",i),r.find("select option.student_"+i).attr("disabled",!0),t(this).parents(".student_reviews").find(".peer_review").each(function(){return i=t(this).getTemplateData({textValues:["user_id"]}).user_id,r.find("select option.student_"+i).attr("disabled",!0)}),r.attr("action",s),t(this).parents(".student_reviews").find(".form_content").empty().append(r),r.slideDown())}),t("#assign_peer_review_form").formSubmit({beforeSubmit:function(e){return e.reviewee_id?t(this).loadingImage():!1},success:function(r){var s,i,n;return t(this).loadingImage("remove"),t(this).slideUp(function(){return t(this).remove()}),s=t("#review_request_blank").clone(!0).removeAttr("id"),s.fillTemplateData({data:r.assessment_request,hrefValues:["id","user_id"]}),t(this).parents(".student_reviews").find(".no_requests_message").slideUp().end().find(".peer_reviews").append(s),s.slideDown(),i=t(this).parents(".student_reviews").find(".assessor_name").text(),n=t.datetimeString(r.assessment_request.updated_at),s.find(".reminder_peer_review_link").attr("title",e.t("titles.reminder","Remind %{assessor} about Assessment, last notified %{time}",{assessor:i,time:n})),t(this).slideUp(function(){return t(this).remove()})},error:function(e){return t(this).loadingImage("remove"),t(this).formErrors(e)}}),t(".remind_peer_review_link").click(function(r){var s;return r.preventDefault(),s=t(this),s.parents(".peer_review").loadingImage({image_size:"small"}),t.ajaxJSON(s.attr("href"),"POST",{},function(r){var i,n;return s.parents(".peer_review").loadingImage("remove"),i=s.parents(".student_reviews").find(".assessor_name").text(),n=t.datetimeString(r.assessment_request.updated_at),s.attr("title",e.t("titles.remind","Remind %{assessor} about Assessment, last notified %{time}",{assessor:i,time:n}))})}),t(".remind_peer_reviews_link").click(function(e){return e.preventDefault(),t(".peer_review.assigned .remind_peer_review_link").click()})})})}).call(this);