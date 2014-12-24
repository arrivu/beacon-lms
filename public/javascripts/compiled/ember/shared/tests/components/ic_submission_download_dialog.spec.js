(function() {
  define(['ember', 'underscore', '../../components/ic_submission_download_dialog_component', '../shared_ajax_fixtures'], function(Ember, _, DownloadDialog, fixtures) {
    var buildComponent, run;

    run = Ember.run;
    fixtures.create();
    buildComponent = function(props) {
      props = _.extend(props, {
        'assignmentUrl': '/courses/1/assignments/1'
      });
      return DownloadDialog.create(props);
    };
    module('status');
    test('is "finished" if file ready', function() {
      var component;

      component = buildComponent({
        'attachment': {
          workflow_state: 'available'
        }
      });
      return equal(component.get('status'), 'finished');
    });
    test('is "zipping" if percent complete is > 95', function() {
      var component;

      component = buildComponent({
        'percentComplete': 95
      });
      return equal(component.get('status'), 'zipping');
    });
    test('is "starting" otherwise', function() {
      var component;

      component = buildComponent();
      return equal(component.get('status'), 'starting');
    });
    module('progress:');
    test('percentComplete is 100 if file ready', function() {
      var component;

      component = buildComponent({
        'attachment': {
          workflow_state: 'available'
        },
        'percentComplete': 100
      });
      component.progress();
      return equal(component.get('percentComplete'), 100);
    });
    test('percentComplete is 0 if file_state is a string', function() {
      var component;

      component = buildComponent({
        'attachment': {
          file_state: 'ready_to_download'
        }
      });
      component.progress();
      return equal(component.get('percentComplete'), 0);
    });
    module('keepChecking');
    test('is true if open', function() {
      var component;

      component = buildComponent({
        'isOpened': true
      });
      return equal(component.get('keepChecking'), true);
    });
    test('is undefined if closed', function() {
      var component;

      component = buildComponent();
      return equal(component.get('keepChecking'), void 0);
    });
    return test('is undefined if percentComplete is 100', function() {
      var component;

      component = buildComponent({
        'percentComplete': 100
      });
      return equal(component.get('keepChecking'), void 0);
    });
  });

}).call(this);
