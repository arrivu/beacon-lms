(function(){define(["../start_app","ember","../shared_ajax_fixtures"],function(e,n,t){var s;return s=null,t.create(),module("grading_cell_component integration test for isPoints",{setup:function(){var r=this;return s=e(),visit("/").then(function(){return r.controller=s.__container__.lookup("controller:screenreader_gradebook"),r.assignment=r.controller.get("assignments").findBy("id","6"),r.student=r.controller.get("students").findBy("id","1"),n.run(function(){return r.controller.setProperties({submissions:n.copy(t.submissions,!0),selectedAssignment:r.assignment,selectedStudent:r.student})})})},teardown:function(){return n.run(s,"destroy")}}),test("fast-select instance is used for grade input",function(){return ok(find("#student_and_assignment_grade").is("select")),equal(find("#student_and_assignment_grade").val(),"incomplete")})})}).call(this);