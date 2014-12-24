(function(){require(["jquery","i18n!context.new_roster_user","jquery.ajaxJSON","jquery.instructure_misc_plugins","jquery.loadingImg","compiled/jquery.rails_flash_notifications","link_enrollment"],function(e,n){return e(document).ready(function(){return e(".show_user_services_checkbox").change(function(){return e.ajaxJSON(e(".profile_url").attr("href"),"PUT",{"user[show_user_services]":e(this).prop("checked")},function(){},function(){})}),e(".link_enrollment_link").click(function(n){var t,r,l,i;return n.preventDefault(),t=e(this),i=e("#name_and_email .name").text(),l=t.attr("data-id"),r=t.attr("data-associated-id"),link_enrollment.choose(i,l,r,function(e){return t.attr("data-id",e.id),t.attr("data-associated-id",e.associated_user_id),t.parents(".enrollment").find(".associated_user_name").text(e.associated_user_name),t.parents(".enrollment").find(".associated_user").showIf(e.associated_user_id)})}),e(".unconclude_enrollment_link").click(function(n){var t;return n.preventDefault(),t=e(this).parents(".enrollment"),e.ajaxJSON(e(this).attr("href"),"POST",{},function(){return t.find(".conclude_enrollment_link_holder").slideDown(),t.find(".unconclude_enrollment_link_holder").slideUp(),t.find(".completed_at_holder").slideUp()})}),e(".conclude_enrollment_link").click(function(t){return t.preventDefault(),e(this).parents(".enrollment").confirmDelete({message:n.t("confirm.conclude_student","Are you sure you want to conclude this student's enrollment?"),url:e(this).attr("href"),success:function(){return e(this).undim(),e(this).find(".conclude_enrollment_link_holder").slideUp(),e(this).find(".unconclude_enrollment_link_holder").slideDown()}})}),e(".elevate_enrollment_link,.restrict_enrollment_link").click(function(t){var r,l;return l=e(this).hasClass("restrict_enrollment_link")?"1":"0",r=e(this).parents(".tr"),r.loadingImage(),e.ajaxJSON(e(this).attr("href"),"POST",{limit:l},function(){return r.loadingImage("remove"),e(".elevate_enrollment_link_holder,.restrict_enrollment_link_holder").slideToggle()},function(){}),e.flashError(n.t("error.enrollment_change_failed","Enrollment privilege change failed, please try again")),r.loadingImage("remove"),t.preventDefault()}),e(".delete_enrollment_link").click(function(t){return t.preventDefault(),e(this).parents(".enrollment").confirmDelete({message:n.t("confirm.delete_enrollment","Are you sure you want to delete this student's enrollment?"),url:e(this).attr("href"),success:function(){return e(this).closest(".enrollment").hide()}})})})})}).call(this);