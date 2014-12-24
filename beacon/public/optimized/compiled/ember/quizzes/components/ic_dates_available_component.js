(function(){define(["ember","../shared/status_date","i18n!dates_available_component"],function(t,e,a){var s;return s=t.Component.extend({tagName:"span",allDates:[],showDueDates:!1,linkHref:"#",multipleDatesTitle:a.t("multiple_dates","Multiple Dates"),multipleDates:Em.computed.gt("allDates.length",1),statusDates:Em.computed.map("allDates",function(t){return e.create({lockAt:t.get("lockAt"),unlockAt:t.get("unlockAt"),dueAt:t.get("dueAt"),base:t.get("base"),title:t.get("title")})}),multipleDatesLabel:function(){return this.get("showDueDates")?a.t("due","Due"):a.t("available","Available")}.property("showDueDates"),singleDateLabel:function(){var t;return this.get("singleDate")?(t=this.get("showDueDates")?"dueLabel":"availableLabel",this.get("singleDate").get(t)):""}.property("showDueDates"),singleDate:function(){return this.get("statusDates")||this.get("statusDates")[0]?this.get("statusDates")[0]:void 0}.property("statusDates.@each"),singleFormat:function(){return this.get("showDueDates")?"date_at_time":"short"}.property("showDueDates"),singleDateValue:function(){return this.getStatusDateProp(this.get("showDueDates")?"dueDate":"availableDate")}.property("showDueDates"),getStatusDateProp:function(t){return this.get("singleDate")?this.get("singleDate").get(t):""}})})}).call(this);