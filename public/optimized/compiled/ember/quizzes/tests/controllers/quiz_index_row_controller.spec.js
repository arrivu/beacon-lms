(function(){define(["../start_app","ember","../../controllers/quiz_index_row_controller","ember-qunit","../environment_setup"],function(e,t,s,n){var i,o;return o=t.run,i=e(),n.setResolver(t.DefaultResolver.create({namespace:i})),n.moduleFor("controller:quiz_index_row","QuizIndexRowController",{needs:["controller:quizzes"],setup:function(){return i=e(),n.setResolver(t.DefaultResolver.create({namespace:i})),this.model=t.Object.create({pointsPossible:1,title:"Assignment test",htmlURL:"foo/bar"}),this.qc=this.subject(),this.qc.set("model",this.model)},teardown:function(){return o(i,"destroy")}}),n.test("sanity",function(){return ok(this.qc)}),n.test("display singular points possible",function(){return equal(this.qc.get("pointsPossible"),"1 pt")}),n.test("display mulitple points possible",function(){var e=this;return o(function(){return e.model.set("pointsPossible",2)}),equal(this.qc.get("pointsPossible"),"2 pts")}),n.test("doesnt display when zero points possible",function(){var e=this;return o(function(){return e.model.set("pointsPossible",0)}),equal(this.qc.get("pointsPossible"),"")}),n.test("doesnt display when undefined points possible",function(){var e=this;return o(function(){return e.model.set("pointsPossible",void 0)}),equal(this.qc.get("pointsPossible"),"")}),n.test("correctly creates edit url for quiz",function(){return equal(this.qc.get("editUrl"),"foo/bar/edit")})})}).call(this);