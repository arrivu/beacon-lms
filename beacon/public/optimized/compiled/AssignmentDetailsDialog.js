(function(){var t=function(t,n){return function(){return t.apply(n,arguments)}};define(["i18n!assignment_details","jquery","jst/AssignmentDetailsDialog","jqueryui/dialog","compiled/jquery/fixDialogButtons"],function(n,s,i){var e;return e=function(){function e(n){var e,o,a,r,u,m;this.assignment=n.assignment,this.students=n.students,this.nonNumericGuard=t(this.nonNumericGuard,this),this.compute=t(this.compute,this),m=this.compute(),o=m.scores,e=m.locals,a=0,u=0,r=100,s.extend(e,{showDistribution:e.average&&this.assignment.points_possible,noneLeftWidth:u=r*(e.min/this.assignment.points_possible),noneLeftLeft:(a+=u)-u,someLeftWidth:u=r*((e.average-e.min)/this.assignment.points_possible),someLeftLeft:(a+=u)-u,someRightWidth:u=r*((e.max-e.average)/this.assignment.points_possible),someRightLeft:(a+=u)-u,noneRightWidth:u=r*((this.assignment.points_possible-e.max)/this.assignment.points_possible),noneRightLeft:(a+=u)-u}),s(i(e)).dialog({width:500,close:function(){return s(this).remove()}})}return e.prototype.compute=function(t){var n,s,i,e,o,a,r=this;return null==t&&(t={students:this.students,assignment:this.assignment}),a=t.students,n=t.assignment,e=function(){var t,i;i=[];for(s in a)o=a[s],null!=(null!=(t=o["assignment_"+n.id])?t.score:void 0)&&i.push(o["assignment_"+n.id].score);return i}(),i={assignment:n,cnt:e.length,max:this.nonNumericGuard(Math.max.apply(Math,e)),min:this.nonNumericGuard(Math.min.apply(Math,e)),average:function(t){var n,s,i,e;for(s=0,i=0,e=t.length;e>i;i++)n=t[i],s+=n;return r.nonNumericGuard(Math.round(s/t.length))}(e)},{scores:e,locals:i}},e.prototype.nonNumericGuard=function(t){return isFinite(t)&&!isNaN(t)?t:n.t("no_graded_submissions","No graded submissions")},e}()})}).call(this);