(function() {
  define(['ember', 'ic-lazy-list', 'ic-sortable', '../../shared/components/ic_actions_component', '../../shared/components/c_modal_form_component', '../../shared/components/c_datepicker_component', '../../shared/components/c_icon_component', '../../shared/components/fast_select_component', '../../shared/components/c_file_input_component'], function(Ember) {
    var App;

    Ember.TextSupport.reopen({
      attributeBindings: ['aria-label', 'autofocus']
    });
    return App = Ember.Application.extend({
      rootElement: '#content',
      Router: Ember.Router.extend({
        location: 'none'
      })
    });
  });

}).call(this);
