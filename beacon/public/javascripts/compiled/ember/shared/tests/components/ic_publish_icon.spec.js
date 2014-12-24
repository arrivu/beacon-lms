(function() {
  define(['ember', 'underscore', '../../components/ic_publish_icon_component', '../shared_ajax_fixtures'], function(Ember, _, PublishIcon, fixtures) {
    var buildComponent, run;

    run = Ember.run;
    fixtures.create();
    buildComponent = function(props) {
      props = _.extend(props, {});
      return PublishIcon.create(props);
    };
    return module('status');
  });

}).call(this);
