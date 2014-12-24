(function(){var s=function(s,t){return function(){return s.apply(t,arguments)}};define(["i18n!gradebook2","jquery","jst/CurveGradesDialog","jquery.disableWhileLoading","jquery.instructure_forms","jqueryui/dialog","jquery.instructure_misc_plugins","compiled/jquery/fixDialogButtons","vendor/jquery.ba-tinypubsub"],function(t,e,i){var n;return n=function(){function n(n){var o,r,u=this;this.assignment=n.assignment,this.students=n.students,o=n.context_url,this.curve=s(this.curve,this),r={assignment:this.assignment,action:""+o+"/gradebook/update_submission",middleScore:parseInt(.6*(this.assignment.points_possible||0)),showOutOf:this.assignment.points_possible>=0},this.$dialog=e(i(r)),this.$dialog.formSubmit({disableWhileLoading:!0,processData:function(s){var e,i,n,o,r,a;if(!u.assignment.points_possible||"0"===u.assignment.points_possible)return n=u.$dialog.errorBox(t.t("errors.no_points_possible","Cannot curve without points possible")),setTimeout(function(){return n.fadeOut(function(){return n.remove()})},3500),!1;e=0,i=u.curve();for(o in i)a="submissions[submission_"+o+"]",s[a+"[assignment_id]"]=s.assignment_id,s[a+"[user_id]"]=o,"gpa_scale"===u.assignment.grading_type?(r=i[o]/u.assignment.points_possible*100,s[a+"[grade]"]=""+r+"%"):s[a+"[grade]"]=i[o],e++;return 0===e?(n=u.$dialog.errorBox(t.t("errors.none_to_update","None to Update")),setTimeout(function(){return n.fadeOut(function(){return n.remove()})},3500),!1):s},success:function(s){var i,n;return u.$dialog.dialog("close"),n=function(){var t,e,n;for(n=[],t=0,e=s.length;e>t;t++)i=s[t],n.push(i.submission);return n}(),e.publish("submissions_updated",[n]),alert(t.t("alerts.scores_updated",{one:"1 Student score updated",other:"%{count} Student scores updated"},{count:s.length}))}}).dialog({width:350,modal:!0,resizable:!1,open:this.curve,close:function(){return u.$dialog.remove()}}).fixDialogButtons(),this.$dialog.find("#middle_score").bind("blur change keyup focus",this.curve),this.$dialog.find("#assign_blanks").change(this.curve)}return n.prototype.curve=function(){var s,t,i,n,o,r,u,a,l,d,p,g,h,c,m,f,b,_,v,y,x,$,j,k,q,w,D,I,B,O;if(p=0,_={},u=this.$dialog.getFormData(),w=[],b=0,c=parseInt(e("#middle_score").val(),10),c/=this.assignment.points_possible,v=e("#assign_blanks").prop("checked"),!isNaN(c)){O=this.students;for(p in O)x=O[p],$=x["assignment_"+this.assignment.id],f=null!=$?$.score:void 0,f>this.assignment.points_possible&&(f=this.assignment.points_possible),(0>f||null==f&&v)&&(f=0),w[parseInt(f,10)]=w[parseInt(f,10)]||[],w[parseInt(f,10)].push([p,f||0]),b++;for(i=[.006,.012,.028,.04,.068,.106,.159,.227,.309,.401,.5,.599,.691,.773,.841,.894,.933,.96,.977,.988,1],g=(1-c)/Math.floor(i.length/2),t=[],s=[],p=0;p<i.length;)s.push(1-g*p),t.push(Math.round((1-g*p)*this.assignment.points_possible)),p++;for(j=0,l={},r=0,e("#results_list").empty(),e("#results_values").empty(),d=[],p=w.length-1;p>=0;){for(q=w[p]||[],f=Math.round(t[r]),I=0,B=q.length;B>I;I++)k=q[I],l[k[0]]=f,0===k[1]&&(l[k[0]]=0),a=l[k[0]],d[a]=d[a]||[],d[a].push(k[0]);for(j+=q.length;j>i[r]*b;)r++;p--}for(h=0,p=d.length-1;p>=0;)n=(d[p]||[]).length,n>h&&(h=n),p--;for(D=15,y=0,p=d.length-1;p>=0;)q=d[p],m=0,n=0,q||y>this.assignment.points_possible/10?(q&&(m=q.length/h,n=q.length),o=0===p?"#a03536":"#007ab8",e("#results_list").prepend("<td style='padding: 1px;'><div title='"+n+" student"+(1===n?"":"s")+" will get "+p+" points' style='border: 1px solid #888; background-color: "+o+"; width: "+D+"px; height: "+100*m+"px; margin-top: "+100*(1-m)+"px;'>&nbsp;</div></td>"),e("#results_values").prepend("<td style='text-align: center;'>"+p+"</td>"),y=0):y++,p--;return e("#results_list").prepend("<td><div style='height: 100px; position: relative; width: 30px; font-size: 0.8em;'><img src='/images/number_of_students.png' alt='# of students'/><div style='position: absolute; top: 0; right: 3px;'>"+h+"</div><div style='position: absolute; bottom: 0; right: 3px;'>0</div></div></td>"),e("#results_values").prepend("<td>&nbsp;</td>"),l}},n}()})}).call(this);