(function(){define(["../start_app","ember","ember-qunit"],function(e,t,r){var u,n,s,i,o,a;return a=t.run,u=e(),r.setResolver(t.DefaultResolver.create({namespace:u})),r.moduleFor("route:quiz_moderate","Quiz moderate route"),r.test("sanity",function(){var e;return e=this.subject(),ok(this.subject)}),n=function(e,r){return t.Object.create({other:r,user:{id:e}})},s=function(){return t.Object.create({id:1})},i=function(){var e,t,r;return e=n(1,"one"),r=n(2,"two"),t=n(3,"three"),[e,r,t]},o=function(){var e,t,r,u;return t=s(1),u=s(2),r=s(3),e=s(4),[t,u,r,e]},r.test("createSubHash: builds hash with user ids as keys",function(){var e,t,r;return t=i(),r=this.subject(),e=r.createSubHash(t),equal(e[1].other,t[0].other)}),r.test("combineModels: ensures a submission, or standin for each user",function(){var e,t,r,u;return u=o(),e=i(),t=this.subject(),r=t.combineModels(u,e),ok(r[3].quizSubmission)})})}).call(this);