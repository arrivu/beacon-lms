(function(){define(["../questions_controller","i18n!quiz_statistics"],function(t,e){return t.extend({correctResponseRatioLabel:function(){return e.t("correct_essay_student_ratio","%{ratio}% of your students received full credit for this question.",{ratio:Em.Util.round(100*this.get("correctResponseRatio"),0)})}.property("correctResponseRatio"),correctResponseRatio:function(){var t;return t=this.get("participantCount"),t>0?this.get("fullCredit")/t:0}.property("fullCredit","participantCount")})})}).call(this);