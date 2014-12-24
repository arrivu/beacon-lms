(function(){var t={}.hasOwnProperty,e=function(e,o){function i(){this.constructor=e}for(var r in o)t.call(o,r)&&(e[r]=o[r]);return i.prototype=o.prototype,e.prototype=new i,e.__super__=o.prototype,e};define(["jquery","Backbone","jst/wiki/WikiPageContent"],function(t,o,i){var r,n;return r=function(o){function r(){return n=r.__super__.constructor.apply(this,arguments)}return e(r,o),r.prototype.tagName="article",r.prototype.className="show-content user_content",r.prototype.template=i,r.optionProperty("modules_path"),r.optionProperty("wiki_pages_path"),r.optionProperty("wiki_page_edit_path"),r.optionProperty("wiki_page_history_path"),r.optionProperty("WIKI_RIGHTS"),r.optionProperty("PAGE_RIGHTS"),r.optionProperty("course_id"),r.optionProperty("course_home"),r.optionProperty("course_title"),r.prototype.initialize=function(){return r.__super__.initialize.apply(this,arguments),this.WIKI_RIGHTS||(this.WIKI_RIGHTS={}),this.PAGE_RIGHTS||(this.PAGE_RIGHTS={}),this.setModel(this.model)},r.prototype.afterRender=function(){return r.__super__.afterRender.apply(this,arguments),t.publish("userContent/change"),this.trigger("render")},r.prototype.setModel=function(t){var e,o,i,r=this;return null!=(e=this.model)&&e.off(null,null,this),this.model=t,null!=(o=this.model)&&o.on("change:title",function(){return r.render()},this),null!=(i=this.model)&&i.on("change:body",function(){return r.render()},this),this.render()},r.prototype.toJSON=function(){var e,o;return e=r.__super__.toJSON.apply(this,arguments),e.modules_path=this.modules_path,e.wiki_pages_path=this.wiki_pages_path,e.wiki_page_edit_path=this.wiki_page_edit_path,e.wiki_page_history_path=this.wiki_page_history_path,e.course_home=this.course_home,e.course_title=this.course_title,e.CAN={VIEW_PAGES:!!this.WIKI_RIGHTS.read,PUBLISH:!!this.WIKI_RIGHTS.manage&&"courses"===e.contextName,UPDATE_CONTENT:!!this.PAGE_RIGHTS.update||!!this.PAGE_RIGHTS.update_content,DELETE:!!this.PAGE_RIGHTS["delete"]&&!this.course_home,READ_REVISIONS:!!this.PAGE_RIGHTS.read_revisions},e.CAN.ACCESS_GEAR_MENU=e.CAN.DELETE||e.CAN.READ_REVISIONS,e.CAN.VIEW_TOOLBAR=e.CAN.VIEW_PAGES||e.CAN.PUBLISH||e.CAN.UPDATE_CONTENT||e.CAN.ACCESS_GEAR_MENU,e.lock_info&&(e.lock_info=_.clone(e.lock_info)),(null!=(o=e.lock_info)?o.unlock_at:void 0)&&(e.lock_info.unlock_at=Date.parse(e.lock_info.unlock_at)<Date.now()?null:t.datetimeString(e.lock_info.unlock_at)),e},r}(o.View)})}).call(this);