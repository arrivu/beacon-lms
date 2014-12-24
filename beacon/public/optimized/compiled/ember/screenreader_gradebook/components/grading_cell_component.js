(function(){define(["i18n!grading_cell","compiled/gradebook2/GRADEBOOK_TRANSLATIONS","underscore","ember","jquery","jquery.ajaxJSON"],function(s,e,t,i,n){var o;return o=i.Component.extend({value:null,isPoints:i.computed.equal("assignment.grading_type","points"),isPercent:i.computed.equal("assignment.grading_type","percent"),isLetterGrade:i.computed.equal("assignment.grading_type","letter_grade"),isPassFail:i.computed.equal("assignment.grading_type","pass_fail"),nilPointsPossible:i.computed.none("assignment.points_possible"),isGpaScale:i.computed.equal("assignment.grading_type","gpa_scale"),passFailGrades:[{label:s.t("grade_ungraded","Ungraded"),value:"-"},{label:s.t("grade_complete","Complete"),value:"complete"},{label:s.t("grade_incomplete","Incomplete"),value:"incomplete"}],outOfText:function(){return this.get("isGpaScale")?"":this.get("isLetterGrade")||this.get("isPassFail")?s.t("out_of_with_score","(%{score} out of %{points})",{points:this.assignment.points_possible,score:this.get("score")}):this.get("nilPointsPossible")?s.t("out_of_nil","No points possible"):s.t("out_of","(out of %{points})",{points:this.assignment.points_possible})}.property("submission.score","assignment"),changeGradeURL:function(){return ENV.GRADEBOOK_OPTIONS.change_grade_url},saveURL:function(){var s;return s=this.get("submission"),this.changeGradeURL().replace(":assignment",s.assignment_id).replace(":submission",s.user_id)}.property("submission.assignment_id","submission.user_id"),score:function(){return null!=this.submission.score?this.submission.score:" -"}.property("submission.score"),ajax:function(s,e){var t,i;return i=e.type,t=e.data,n.ajaxJSON(s,i,t)},submissionDidChange:function(){var s,e;return s=null!=(null!=(e=this.submission)?e.grade:void 0)?this.submission.grade:"-",this.set("value",s)}.observes("submission").on("init"),onUpdateSuccess:function(s){return this.sendAction("on-submit-grade",s.all_submissions)},onUpdateError:function(){return n.flashError(e.submission_update_error)},focusOut:function(){var s,e,t,i;if((e=this.get("submission"))&&(t=this.get("saveURL"),i=this.$("input, select").val(),this.get("isPassFail")&&"-"===i&&(i=""),i!==e.grade))return s=this.ajax(t,{type:"PUT",data:{"submission[posted_grade]":i}}),s.then(this.boundUpdateSuccess,this.onUpdateError)},bindSave:function(){return this.boundUpdateSuccess=t.bind(this.onUpdateSuccess,this)}.on("init"),click:function(){return this.$("input, select").select()},focus:function(){return this.$("input, select").select()}})})}).call(this);