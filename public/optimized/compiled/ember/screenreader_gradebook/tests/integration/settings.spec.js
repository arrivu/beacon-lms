(function(){define(["../start_app","underscore","ember","../shared_ajax_fixtures","jquery","vendor/jquery.ba-tinypubsub"],function(e,t,n,r,o){var c;return c=null,r.create(),module("global settings",{setup:function(){var t=this;return c=e(),visit("/").then(function(){return t.controller=c.__container__.lookup("controller:screenreader_gradebook"),t.controller.set("hideStudentNames",!1)})},teardown:function(){return n.run(c,"destroy")}}),test("student names are hidden",function(){var e;return e="#student_select option[value=1]",equal(o(e).text(),"Bob"),click("#hide_names_checkbox").then(function(){return-1!==o(e).text().search("Student"),click("#hide_names_checkbox").then(function(){return equal(o(e).text(),"Bob")})})}),test("secondary id says hidden",function(){var e=this;return n.run(function(){var t;return t=e.controller.get("students.firstObject"),n.setProperties(t,{isLoaded:!0,isLoading:!1}),e.controller.set("selectedStudent",t)}),equal(n.$.trim(find(".secondary_id").text()),""),click("#hide_names_checkbox"),andThen(function(){return equal(o.trim(find(".secondary_id:first").text()),"hidden")})}),test("view concluded enrollments",function(){var e,n=this;return e=this.controller.get("enrollments"),ok(e.content.length>1),t.each(e.content,function(e){return ok(void 0===e.workflow_state)}),click("#concluded_enrollments").then(function(){var t,r;return e=n.controller.get("enrollments"),equal(e.content.length,1),r=e.objectAt(0),ok("completed"===r.workflow_state),t=new Date(r.completed_at),ok(t.getTime()<(new Date).getTime()),click("#concluded_enrollments").then(function(){return e=n.controller.get("enrollments"),ok(e.content.length>1)})})})})}).call(this);