(function(){define(["ember","i18n!create_item_base"],function(e,t){var r,n;return n=e.computed.alias,r=e.Controller.extend({item:null,moduleController:n("parentController.parentController"),addItemController:n("parentController"),removeOnError:function(){var e,r;return r=this.get("item"),(e=r.get("error"))?(alert(t.t("there_was_an_error",'There was an error saving "%{title}", please try again.',{title:r.get("title")})),this.get("moduleController.items").removeObject(r)):void 0}.observes("item.error"),actions:{create:function(){var e;return e=this.createItem(),e.set("module_id",this.get("moduleController.model.id")),this.get("moduleController.items").addObject(e),this.get("addItemController").send("quitEditing"),this.set("item",e)},cancel:function(){return this.get("parentController").send("quitEditing")}}})})}).call(this);