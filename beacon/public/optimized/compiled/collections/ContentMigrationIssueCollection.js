(function(){var t={}.hasOwnProperty,o=function(o,n){function r(){this.constructor=o}for(var i in n)t.call(n,i)&&(o[i]=n[i]);return r.prototype=n.prototype,o.prototype=new r,o.__super__=n.prototype,o};define(["compiled/collections/PaginatedCollection"],function(t){var n,r;return n=function(t){function n(){return r=n.__super__.constructor.apply(this,arguments)}return o(n,t),n.optionProperty("course_id"),n.optionProperty("content_migration_id"),n.prototype.url=function(){return"/api/v1/courses/"+this.course_id+"/content_migrations/"+this.content_migration_id+"/migration_issues"},n}(t)})}).call(this);