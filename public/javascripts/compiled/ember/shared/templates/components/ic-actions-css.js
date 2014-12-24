define(['ember', 'compiled/ember/shared/helpers/common'], function(Ember) {
  Ember.TEMPLATES['components/ic-actions-css'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("ic-actions {\n  position: relative;\n}\n\nic-actions ic-menu-trigger {\n  display: inline-block;\n  padding: 6px;\n  border: 1px solid transparent;\n  border-radius: 3px 3px 0 0;\n  border-bottom: none;\n  z-index: 1;\n  position: relative;\n}\n\nic-actions ic-menu-trigger i:before {\n  color: #bbb;\n}\n\nic-actions ic-menu.is-open ic-menu-trigger {\n  border-color: #aaa;\n  background: #fff;\n  z-index: 3;\n}\n\nic-actions ic-menu-trigger:hover i:before,\nic-actions ic-menu-trigger.btn i:before,\nic-actions ic-menu.is-open ic-menu-trigger i:before {\n  color: #555;\n}\n\nic-actions ic-menu-list {\n  font-family: inherit;\n  z-index: 2;\n  top: 23px;\n  right: 0px;\n  border-radius: 3px 0px 3px 3px;\n}\n\nic-actions.left ic-menu-list {\n  right: auto;\n  left: 0;\n  border-radius: 0px 3px 3px 3px;\n}\n\nic-actions ic-menu-item {\n  font: inherit;\n}\n\nic-actions ic-menu-item:focus {\n  background: #0091DC;\n}\n\n");
  
});
});
