define(["ember","compiled/ember/shared/helpers/common"],function(e){e.TEMPLATES["create/link"]=e.Handlebars.template(function(t,a,s,l,n){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,e.Handlebars.helpers),n=n||{};var h,p,c,r="",u=s.helperMissing,o=this.escapeExpression;return n.buffer.push('<form class="bootstrap-form form-inline modules-create-item-form">\n  '),n.buffer.push(o((p=s["c-icon"]||a&&a["c-icon"],c={hash:{type:"link"},hashTypes:{type:"STRING"},hashContexts:{type:a},contexts:[],types:[],data:n},p?p.call(a,c):u.call(a,"c-icon",c)))),n.buffer.push("\n\n  "),n.buffer.push(o((p=s.input||a&&a.input,c={hash:{type:"text","class":"span3",value:"model.title",placeholder:"text.title","aria-label":"text.title"},hashTypes:{type:"STRING","class":"STRING",value:"ID",placeholder:"ID","aria-label":"ID"},hashContexts:{type:a,"class":a,value:a,placeholder:a,"aria-label":a},contexts:[],types:[],data:n},p?p.call(a,c):u.call(a,"input",c)))),n.buffer.push("\n\n  "),n.buffer.push(o((p=s.input||a&&a.input,c={hash:{type:"text","class":"span3",value:"model.url",placeholder:"text.url","aria-label":"text.url"},hashTypes:{type:"STRING","class":"STRING",value:"ID",placeholder:"ID","aria-label":"ID"},hashContexts:{type:a,"class":a,value:a,placeholder:a,"aria-label":a},contexts:[],types:[],data:n},p?p.call(a,c):u.call(a,"input",c)))),n.buffer.push('\n\n  <button\n    class="btn btn-primary"\n    type="submit"\n    '),n.buffer.push(o(s.action.call(a,"create",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["STRING"],data:n}))),n.buffer.push("\n  >"),p=s.t||a&&a.t,c={hash:{scope:"modules.templates.create.link.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:a},contexts:[a,a],types:["STRING","STRING"],data:n},h=p?p.call(a,"add_link","Add Link",c):u.call(a,"t","add_link","Add Link",c),(h||0===h)&&n.buffer.push(h),n.buffer.push('</button>\n\n  <button\n    class="btn"\n    type="button"\n    '),n.buffer.push(o(s.action.call(a,"cancel",{hash:{},hashTypes:{},hashContexts:{},contexts:[a],types:["STRING"],data:n}))),n.buffer.push("\n  >"),p=s.t||a&&a.t,c={hash:{scope:"modules.templates.create.link.hbs"},hashTypes:{scope:"STRING"},hashContexts:{scope:a},contexts:[a,a],types:["STRING","STRING"],data:n},h=p?p.call(a,"cancel","Cancel",c):u.call(a,"t","cancel","Cancel",c),(h||0===h)&&n.buffer.push(h),n.buffer.push("</button>\n</form>\n\n"),r})});