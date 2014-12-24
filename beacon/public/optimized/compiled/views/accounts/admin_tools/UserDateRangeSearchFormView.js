(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t={}.hasOwnProperty,r=function(e,r){function s(){this.constructor=e}for(var i in r)t.call(r,i)&&(e[i]=r[i]);return s.prototype=r.prototype,e.prototype=new s,e.__super__=r.prototype,e};define(["Backbone","jquery","i18n!user_date_range_search","jst/accounts/admin_tools/userDateRangeSearchForm","compiled/views/ValidatedMixin","jquery.ajaxJSON","jquery.instructure_date_and_time","compiled/jquery.rails_flash_notifications"],function(t,s,i,n,o){var a,l;return a=function(a){function u(){return this.selectUser=e(this.selectUser,this),this.fetchUsers=e(this.fetchUsers,this),this.resultsFound=e(this.resultsFound,this),l=u.__super__.constructor.apply(this,arguments)}return r(u,a),u.mixin(o),u.child("inputFilterView","[data-view=inputFilter]"),u.child("usersView","[data-view=users]"),u.prototype.tagName="form",u.prototype.template=n,u.prototype.events={submit:"submit"},u.prototype.els={".userIdField":"$userIdField",".dateStartSearchField":"$dateStartSearchField",".dateEndSearchField":"$dateEndSearchField",".search-controls":"$searchControls",".search-people-status":"$searchPeopleStatus"},u.optionProperty("formName"),u.prototype.toJSON=function(){return this.options},u.prototype.initialize=function(e){return this.model=new t.Model,u.__super__.initialize.call(this,e)},u.prototype.afterRender=function(){return this.$dateStartSearchField.datetime_field(),this.$dateEndSearchField.datetime_field(),this.$searchControls.hide()},u.prototype.attach=function(){return this.inputFilterView.collection.on("setParam deleteParam",this.fetchUsers),this.usersView.collection.on("selectedModelChange",this.selectUser),this.usersView.collection.on("sync",this.resultsFound)},u.prototype.resultsFound=function(){return s.screenReaderFlashMessage(i.t("results_found","%{length} results found",{length:this.usersView.collection.length}))},u.prototype.fetchUsers=function(){var e;return this.selectUser(null),null!=(e=this.lastRequest)&&e.abort(),this.lastRequest=this.inputFilterView.collection.fetch()},u.prototype.selectUser=function(e){return this.usersView.$el.find("tr").each(function(){return s(this).removeClass("selected")}),e?(this.model.set(e.attributes),this.$userIdField.val(e.get("id")),this.$searchControls.show()):(this.$userIdField.val(""),this.$searchControls.hide())},u.prototype.validityCheck=function(){var e,t,r;return t=this.$el.toJSON(),r=!0,e={},t.user_id||(r=!1,e.user_id=[{type:"required",message:i.t("cant_be_blank","Canvas User ID can't be blank")}]),t.start_time&&t.end_time&&t.start_time>t.end_time&&(r=!1,e.end_time=[{type:"invalid",message:i.t("cant_come_before_from","'To Date' can't come before 'From Date'")}]),this.showErrors(e),r},u.prototype.submit=function(e){return e.preventDefault(),this.validityCheck()?this.updateCollection():void 0},u.prototype.updateCollection=function(){var e;return e=this.$el.toJSON(),delete e.search_term,e.start_time||(e.start_time=""),e.end_time||(e.end_time=""),this.collection.setParams(e)},u}(t.View)})}).call(this);