(function(){define(["ember","../shared/environment","../mixins/views/submission_arrows_view","quiz_rubric","compiled/jquery/ModuleSequenceFooter"],function(e,r,t,n){var i;return i=e.View.extend(t,{addBreadCrumb:function(){var e,r,t;return t=this.controller.get("htmlURL"),r=$("<div />").text(this.controller.get("title")).html(),e=$('<li><a href="'+t+'"><span class="ellipsible">'+r+"</span></a></li>"),$("#breadcrumbs ul").append(e)}.on("didInsertElement"),removeBreadcrumb:function(){return $("#breadcrumbs li").last().remove()}.on("willDestroyElement"),setupViewAddOns:function(){return this.setupControllerListeners(),this.addModuleSequenceFooter()}.on("didInsertElement"),addModuleSequenceFooter:function(){return this.$("#module_sequence_footer").moduleSequenceFooter({courseID:r.get("courseId"),assetType:"Quiz",assetID:this.controller.get("id")})},setupControllerListeners:function(){return this.get("controller").on("rubricDisplayRequest",this,this.displayRubric)},teardownControllerListeners:function(){return this.get("controller").off("rubricDisplayRequest",this,this.displayRubric)}.on("willDestroyElement"),displayRubric:function(){var e;return e=this.get("controller.rubricUrl"),n(e)}})})}).call(this);