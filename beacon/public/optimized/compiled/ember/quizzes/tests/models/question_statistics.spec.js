(function(){define(["ember","ember-qunit","../start_app","../environment_setup"],function(t,e,s){var n,r,i;return r=t.run,n=null,i=null,module("QuestionStatistics",{setup:function(){return n=s(),r(function(){var t;return t=n.__container__.lookup("store:main"),i=t.createRecord("question_statistics"),i.set("quizStatistics",t.createRecord("quiz_statistics",{submissionStatistics:{}}))})},teardown:function(){return r(n,"destroy")}}),test("should run",function(){return ok(!0)}),test("#answerSets: it wraps _data.answer_sets as Ember.Objects",function(){return i.set("_data.answer_sets",[{}]),ok(i.get("answerSets.firstObject")instanceof t.Object,"it wraps objects")}),test("#ratioCalculator: it builds the ratio calculator",function(){return equal(i.get("ratioCalculator.ratio"),0)})})}).call(this);