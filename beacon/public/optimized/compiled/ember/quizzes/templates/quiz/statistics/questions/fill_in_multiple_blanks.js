define(["ember","compiled/ember/shared/helpers/common"],function(s){s.TEMPLATES["quiz/statistics/questions/fill_in_multiple_blanks"]=s.Handlebars.template(function(e,t,a,n,h){function r(s,e){var t,n="";return e.buffer.push("\n      "),t=a["with"].call(s,"set",{hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(2,i,e),contexts:[s],types:["ID"],data:e}),(t||0===t)&&e.buffer.push(t),e.buffer.push("\n    "),n}function i(s,e){var t="";return e.buffer.push("\n        <button "),e.buffer.push(o(a["bind-attr"].call(s,{hash:{"class":"active:active"},hashTypes:{"class":"STRING"},hashContexts:{"class":s},contexts:[],types:[],data:e}))),e.buffer.push(" "),e.buffer.push(o(a.action.call(s,"activateAnswer","id",{hash:{},hashTypes:{},hashContexts:{},contexts:[s,s],types:["STRING","ID"],data:e}))),e.buffer.push(">\n          "),e.buffer.push(o(a._triageMustache.call(s,"text",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:s},contexts:[s],types:["ID"],data:e}))),e.buffer.push("\n        </button>\n      "),t}function u(s,e){var t,n,h="";return e.buffer.push('\n      <section class="correct-answer-ratio-section">\n        '),e.buffer.push(o((t=a.render||s&&s.render,n={hash:{},hashTypes:{},hashContexts:{},contexts:[s,s],types:["STRING","ID"],data:e},t?t.call(s,"quiz/statistics/questions/fill_in_multiple_blanks/correct_pie","controller",n):b.call(s,"render","quiz/statistics/questions/fill_in_multiple_blanks/correct_pie","controller",n)))),e.buffer.push('\n      </section>\n\n      <section class="answer-distribution-section">\n        '),e.buffer.push(o((t=a.render||s&&s.render,n={hash:{},hashTypes:{},hashContexts:{},contexts:[s,s],types:["STRING","ID"],data:e},t?t.call(s,"quiz/statistics/questions/fill_in_multiple_blanks/answer_bars","controller",n):b.call(s,"render","quiz/statistics/questions/fill_in_multiple_blanks/answer_bars","controller",n)))),e.buffer.push("\n      </section>\n    "),h}function l(s,e){var t,n,h="";return e.buffer.push("\n  "),e.buffer.push(o((t=a.partial||s&&s.partial,n={hash:{},hashTypes:{},hashContexts:{},contexts:[s],types:["STRING"],data:e},t?t.call(s,"quiz/statistics/questions/multiple_choice/answers",n):b.call(s,"partial","quiz/statistics/questions/multiple_choice/answers",n)))),e.buffer.push("\n"),h}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,s.Handlebars.helpers),h=h||{};var c,p="",o=this.escapeExpression,f=this,b=a.helperMissing;return h.buffer.push('<header>\n  <span class="question-attempts">'),c=a._triageMustache.call(t,"attemptsLabel",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:h}),(c||0===c)&&h.buffer.push(c),h.buffer.push('</span>\n  <aside class="pull-right">\n    <button '),h.buffer.push(o(a.action.call(t,"showDetails",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:h}))),h.buffer.push(' class="btn">\n      <i '),h.buffer.push(o(a["bind-attr"].call(t,{hash:{"class":"detailsVisible:icon-collapse:icon-expand"},hashTypes:{"class":"STRING"},hashContexts:{"class":t},contexts:[],types:[],data:h}))),h.buffer.push('></i>\n    </button>\n  </aside>\n\n  <div class="question-text">\n    '),h.buffer.push(o(a._triageMustache.call(t,"questionText",{hash:{unescaped:"true"},hashTypes:{unescaped:"STRING"},hashContexts:{unescaped:t},contexts:[t],types:["ID"],data:h}))),h.buffer.push('\n  </div>\n</header>\n\n<div>\n  <nav class="row-fluid answer-set-tabs">\n    '),c=a.each.call(t,"set","in","answerSets",{hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(1,r,h),contexts:[t,t,t],types:["ID","ID","ID"],data:h}),(c||0===c)&&h.buffer.push(c),h.buffer.push('\n  </nav>\n\n  <div class="row-fluid">\n    '),c=a["if"].call(t,"activeAnswer",{hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(4,u,h),contexts:[t],types:["ID"],data:h}),(c||0===c)&&h.buffer.push(c),h.buffer.push("\n  </div>\n</div>\n\n"),c=a["if"].call(t,"activeAnswer",{hash:{},hashTypes:{},hashContexts:{},inverse:f.noop,fn:f.program(6,l,h),contexts:[t],types:["ID"],data:h}),(c||0===c)&&h.buffer.push(c),p})});