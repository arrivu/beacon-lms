(function(){define(["ember","ember-data"],function(e,a){var s,i,n,o,t,l,m,r,u;return u=e.computed,n=u.alias,m=u.equal,o=u.any,l=a.belongsTo,r=a.hasMany,s=a.Model,t=a.attr,i=s.extend({quizSubmissions:r("quiz_submission",{async:!1}),name:t(),shortName:t(),sortableName:t(),sisUserID:t(),sisLoginID:t(),loginID:t(),email:t(),locale:t(),lastLogin:t("date"),timeZone:t()})})}).call(this);