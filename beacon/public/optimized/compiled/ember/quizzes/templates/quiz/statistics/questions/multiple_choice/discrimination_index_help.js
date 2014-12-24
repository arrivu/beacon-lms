define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES["quiz/statistics/questions/multiple_choice/discrimination_index_help"]=e.Handlebars.template(function(i,t,s,o,n){function a(e,i){var t,o,n,a="";return i.buffer.push("\n\n  "),o=s.t||e&&e.t,n={hash:{scope:"quizzes.templates.quiz.statistics.questions.multiple_choice.discrimination_index_help.hbs",w0:"<p> $1</p>",w1:'<a target="_blank" href="http://guides.instructure.com/m/4152/l/41484-once-i-publish-my-quiz-what-kinds-of-quiz-statistics-are-available">$1</a>'},hashTypes:{scope:"STRING",w0:"STRING",w1:"STRING"},hashContexts:{scope:e,w0:e,w1:e},contexts:[e,e],types:["STRING","STRING"],data:i},t=o?o.call(e,"discrimination_index_help","*This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not. It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly. * <p> More information is available **here**. </p>",n):u.call(e,"t","discrimination_index_help","*This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not. It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly. * <p> More information is available **here**. </p>",n),(t||0===t)&&i.buffer.push(t),i.buffer.push("\n"),a}this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,e.Handlebars.helpers),n=n||{};var h,r,l,d="",u=s.helperMissing,c=this;return r=s["message-dialog"]||t&&t["message-dialog"],l={hash:{"fix-dialog-buttons":!0,height:270,title:"discriminationIndexHelpDialogTitle"},hashTypes:{"fix-dialog-buttons":"BOOLEAN",height:"INTEGER",title:"ID"},hashContexts:{"fix-dialog-buttons":t,height:t,title:t},inverse:c.noop,fn:c.program(1,a,n),contexts:[],types:[],data:n},h=r?r.call(t,l):u.call(t,"message-dialog",l),(h||0===h)&&n.buffer.push(h),n.buffer.push("\n"),d})});