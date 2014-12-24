(function(){define(["ember","i18n!quiz_submission_arrows"],function(e,s){return e.Mixin.create({addLegacySubmissionArrows:function(){return this.get("controller.quizSubmissionHtml.html")?e.run.next(this,this.buildLegacyArrows):void 0}.observes("controller.quizSubmissionHtml.html"),buildLegacyArrows:function(){var e,r,n,t,o,a,i,u,c,w,_,l,p,d,q,h,y,m,v;if(this.get("controller.quizSubmissionHtml.html"))return w=$("#questions.show_correct_answers:not(.survey_quiz) .selected_answer.correct_answer"),m=$("#questions.show_correct_answers:not(.survey_quiz) .selected_answer.wrong_answer"),e=$("#questions.show_correct_answers:not(.survey_quiz) .question:not(.short_answer_question, #questions.show_correct_answers:not(.survey_quiz) .numerical_question) .correct_answer:not(.selected_answer)"),l=$("#questions.show_correct_answers:not(.survey_quiz):not(.survey_results) .short_answer_question .answers_wrapper, #questions.show_correct_answers:not(.survey_results):not(.survey_quiz) .numerical_question .answers_wrapper, #questions.show_correct_answers:not(.survey_results):not(.survey_quiz) .equation_combinations_holder_holder.calculated_question_answers"),h=$(".question.unanswered .header .question_name"),i=$("#questions.suppress_correct_answers:not(.survey_results) .question.partial_credit .header .question_name"),n=$("#questions.suppress_correct_answers:not(.survey_results) .question.correct .header .question_name"),o=$("#questions.suppress_correct_answers:not(.survey_results) .question.incorrect:not(.unanswered) .header .question_name"),q=$("#questions.survey_results .selected_answer"),_=$("<span />",{"class":"answer_arrow correct"}),v=$("<span />",{"class":"answer_arrow incorrect"}),r=$("<span />",{"class":"answer_arrow info"}),p=$("<span />",{"class":"answer_arrow info"}),y=$("<span />",{"class":"answer_arrow incorrect"}),t=$("<span />",{"class":"answer_arrow correct"}),u=$("<span />",{"class":"answer_arrow incorrect"}),a=$("<span />",{"class":"answer_arrow incorrect"}),d=$("<span />",{"class":"answer_arrow info"}),c=0,$.each([_,v,r,p,d],function(){return this.css({left:-128,top:5})}),$.each([y,t,a,u],function(){return this.css({left:-108,top:9})}),_.text(s.t("answers.correct","Correct!")),v.text(s.t("answers.you_answered","You Answered")),r.text(s.t("answers.right","Correct Answer")),p.text(s.t("answers.correct_answers","Correct Answers")),y.text(s.t("answers.unanswered","Unanswered")),t.text(s.t("answers.correct","Correct!")),u.text(s.t("answers.partial","Partial")),a.text(s.t("answers.incorrect","Incorrect")),d.text(s.t("answers.you_answered","You Answered")),w.prepend(_),m.prepend(v),e.prepend(r),l.prepend(p),h.prepend(y),i.prepend(u),n.prepend(t),o.prepend(a),q.prepend(d),$(".short_answer_question .answer_arrow").css("top",5),$("#questions .answer_arrow").each(function(){var e,s,r,n;return s=$(this),e=s.parent(),r=$(),n=e.prop("id"),n||(n=["user_answer",++c].join("_")),n=[n,"arrow"].join("_"),s.prop("id",n),r=e.find("input:visible"),r.length||(r=e),r.attr("aria-describedby",n)})}})})}).call(this);