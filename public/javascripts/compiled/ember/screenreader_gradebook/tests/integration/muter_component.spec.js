(function() {
  define(['../start_app', 'ember', '../shared_ajax_fixtures', 'jquery'], function(startApp, Ember, fixtures, $) {
    var App, ariaMuted, ariaUnmuted, checkChecked, checkLabel, closeDialog, dialogTitleMuted, dialogTitleUnmuted, sendSuccess;

    App = null;
    fixtures.create();
    ariaMuted = "Click to unmute.";
    ariaUnmuted = "Click to mute.";
    dialogTitleMuted = "Unmute Assignment";
    dialogTitleUnmuted = "Mute Assignment";
    sendSuccess = function(server, url, state) {
      return server.respond('POST', url, [
        200, {
          'Content-Type': 'application/json'
        }, JSON.stringify({
          assignment: {
            muted: state
          }
        })
      ]);
    };
    checkLabel = function(stateLabel) {
      return equal(find('#assignment_muted_check').attr('aria-label'), stateLabel);
    };
    checkChecked = function(expectedBool) {
      return equal(find('#assignment_muted_check').prop('checked'), expectedBool);
    };
    closeDialog = function(dialog) {
      click(find('a', dialog));
      dialog = find('.ui-dialog:visible', 'body');
      return equal(dialog.length, 0, 'the dialog closes');
    };
    module('screenreader_gradebook assignment_muter_component: muted', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.con = App.__container__.lookup('controller:screenreader_gradebook');
          Ember.run(function() {
            return _this.con.set('selectedAssignment', Ember.copy(fixtures.assignment_groups[0].assignments[1], true));
          });
          return _this.server = sinon.fakeServer.create();
        });
      },
      teardown: function() {
        this.server.restore();
        return Ember.run(App, 'destroy');
      }
    });
    test('dialog opens and closes without changes', function() {
      var _this = this;

      checkLabel(ariaMuted);
      checkChecked(true);
      return click('#assignment_muted_check').then(function() {
        var dialog;

        dialog = find('.ui-dialog:visible', 'body');
        equal(find('button', dialog).text(), dialogTitleMuted);
        closeDialog(dialog);
        checkChecked(true);
        return checkLabel(ariaMuted);
      });
    });
    test('dialog opens and makes changes upon confirmation', function() {
      var server,
        _this = this;

      server = this.server;
      checkLabel(ariaMuted);
      checkChecked(true);
      return click('#assignment_muted_check').then(function() {
        var dialog;

        dialog = find('.ui-dialog:visible', 'body');
        click('button', dialog);
        sendSuccess(server, "" + ENV.GRADEBOOK_OPTIONS.context_url + "/assignments/" + (_this.con.get('selectedAssignment.id')) + "/mute", false);
        return andThen(function() {
          dialog = find('.ui-dialog:visible', 'body');
          equal(dialog.length, 0, 'the dialog is closed WOOOOOO');
          checkChecked(false);
          checkLabel(ariaUnmuted);
          equal(_this.con.get('selectedAssignment.muted'), false);
          return server.restore();
        });
      });
    });
    module('screenreader_gradebook assignment_muter_component: unmuted', {
      setup: function() {
        var _this = this;

        App = startApp();
        return visit('/').then(function() {
          _this.con = App.__container__.lookup('controller:screenreader_gradebook');
          Ember.run(function() {
            return _this.con.set('selectedAssignment', Ember.copy(fixtures.assignment_groups[0].assignments[0], true));
          });
          return _this.server = sinon.fakeServer.create();
        });
      },
      teardown: function() {
        this.server.restore();
        return Ember.run(App, 'destroy');
      }
    });
    test('dialog opens and closes without changes', function() {
      var _this = this;

      checkLabel(ariaUnmuted);
      checkChecked(false);
      return click('#assignment_muted_check').then(function() {
        var dialog;

        dialog = find('.ui-dialog:visible', 'body');
        equal(find('button', dialog).text(), dialogTitleUnmuted);
        closeDialog(dialog);
        checkChecked(false);
        return checkLabel(ariaUnmuted);
      });
    });
    return test('dialog opens and makes changes upon confirmation', function() {
      var server,
        _this = this;

      server = this.server;
      checkLabel(ariaUnmuted);
      checkChecked(false);
      return click('#assignment_muted_check').then(function() {
        var dialog;

        dialog = find('.ui-dialog:visible', 'body');
        click('button', dialog);
        sendSuccess(server, "" + ENV.GRADEBOOK_OPTIONS.context_url + "/assignments/" + (_this.con.get('selectedAssignment.id')) + "/mute", true);
        return andThen(function() {
          dialog = find('.ui-dialog:visible', 'body');
          equal(dialog.length, 0, 'the dialog is closed WOOOOOO');
          checkChecked(true);
          checkLabel(ariaMuted);
          equal(_this.con.get('selectedAssignment.muted'), true);
          return server.restore();
        });
      });
    });
  });

}).call(this);
