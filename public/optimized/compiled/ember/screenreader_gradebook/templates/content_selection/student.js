define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES["content_selection/student"]=e.Handlebars.template(function(t,s,l,a,n){this.compilerInfo=[4,">= 1.0.0"],l=this.merge(l,e.Handlebars.helpers),n=n||{};var c,d,h,u="",i=l.helperMissing,p=this.escapeExpression;return n.buffer.push('<div class="row pad-box bottom-only">\n  <div class="span4 text-right-responsive">\n    <label for="student_select">\n      '),d=l.t||s&&s.t,h={hash:{scope:"screenreader_gradebook.templates.content_selection.student.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:s},contexts:[s,s],types:["STRING","STRING"],data:n},c=d?d.call(s,"select_student","Select a student",h):i.call(s,"t","select_student","Select a student",h),(c||0===c)&&n.buffer.push(c),n.buffer.push('\n    </label>\n  </div>\n  <div class="span8">\n    '),n.buffer.push(p((d=l["fast-select"]||s&&s["fast-select"],h={hash:{id:"student_select","class":"student_select",items:"studentsInSelectedSection",valuePath:"id",labelPath:"displayName",labelDefault:"studentSelectDefaultLabel",selected:"selectedStudent"},hashTypes:{id:"STRING","class":"STRING",items:"ID",valuePath:"STRING",labelPath:"ID",labelDefault:"ID",selected:"ID"},hashContexts:{id:s,"class":s,items:s,valuePath:s,labelPath:s,labelDefault:s,selected:s},contexts:[],types:[],data:n},d?d.call(s,h):i.call(s,"fast-select",h)))),n.buffer.push("\n\n    "),n.buffer.push(p(l.view.call(s,"App.SelectionButtonsView",{hash:{type:"student",selected:"selectedStudent",list:"studentsInSelectedSection"},hashTypes:{type:"STRING",selected:"ID",list:"ID"},hashContexts:{type:s,selected:s,list:s},contexts:[s],types:["ID"],data:n}))),n.buffer.push("\n\n  </div>\n</div>"),u})});