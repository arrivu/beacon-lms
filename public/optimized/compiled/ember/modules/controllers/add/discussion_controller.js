(function(){define(["./base_controller","i18n!add_module_item","../../../shared/xhr/fetch_all_pages","ic-ajax","../../models/item"],function(e,t,o,i){var n,r;return r=i.request,n=e.extend({topics:function(){var e;return(e=this.constructor).topics||(e.topics=o("/api/v1/courses/"+ENV.course_id+"/discussion_topics"))}.property(),title:function(){return t.t("add_topic_to","Add discussion topics to %{module}",{module:this.get("moduleController.name")})}.property("moduleController.name"),actions:{toggleSelected:function(e){var t;return t=this.get("model.selected"),t.contains(e)?t.removeObject(e):t.addObject(e)}}}),n.reopenClass({topics:null})})}).call(this);