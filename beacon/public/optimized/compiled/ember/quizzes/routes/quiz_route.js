(function(){define(["ember","../mixins/redirect","../shared/environment","i18n!quiz_route","../shared/title_builder"],function(e,t,i,n,r){var o;return o=e.Route.extend(t,{afterModel:function(e){var t;return i.set("quizId",e.id),r([e.get("title")]),e.get("deleted")?(e.unloadRecord(),t=n.t("that_quiz_has_been_deleted","That quiz has been deleted"),this.redirectTo("quizzes",t)):void 0},actions:{error:function(t){var i,r;return i=e.A(["Not Found","Unauthorized","Authorization Required"]),i.contains(t.errorThrown.trim())?(r=n.t("that_quiz_doesnt_exist","That quiz doesn't exist"),this.redirectTo("quizzes",r)):void 0},_destroyModal:function(){return this.disconnectOutlet({outlet:"modal",parentView:"application"})},confirmDeletion:function(){return this.render("confirm_delete",{into:"application",outlet:"modal"})},messageStudents:function(){return this.render("quiz/message_students",{into:"application",outlet:"modal"})}}})})}).call(this);