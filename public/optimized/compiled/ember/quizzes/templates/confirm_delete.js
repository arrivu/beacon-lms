define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES.confirm_delete=e.Handlebars.template(function(t,o,i,n,s){function l(e,t){var o,n,s,l="";return t.buffer.push("\n\n  "),n=i.t||e&&e.t,s={hash:{scope:"quizzes.templates.confirm_delete.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:e},contexts:[e,e],types:["STRING","STRING"],data:t},o=n?n.call(e,"confirm_deletion_of_quiz","Are you sure you want to delete this quiz?",s):u.call(e,"t","confirm_deletion_of_quiz","Are you sure you want to delete this quiz?",s),(o||0===o)&&t.buffer.push(o),t.buffer.push("\n"),l}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.Handlebars.helpers),s=s||{};var r,a,c,h="",u=i.helperMissing,f=this;return a=i["confirm-dialog"]||o&&o["confirm-dialog"],c={hash:{"on-submit":"delete","confirm-text":"confirmText","cancel-text":"cancelText","fix-dialog-buttons":!0,height:"auto",title:"deleteTitle"},hashTypes:{"on-submit":"STRING","confirm-text":"ID","cancel-text":"ID","fix-dialog-buttons":"BOOLEAN",height:"STRING",title:"ID"},hashContexts:{"on-submit":o,"confirm-text":o,"cancel-text":o,"fix-dialog-buttons":o,height:o,title:o},inverse:f.noop,fn:f.program(1,l,s),contexts:[],types:[],data:s},r=a?a.call(o,c):u.call(o,"confirm-dialog",c),(r||0===r)&&s.buffer.push(r),s.buffer.push("\n"),h})});