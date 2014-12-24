(function() {
  define(['i18n!sr_gradebook', 'ember', 'compiled/AssignmentMuter'], function(I18n, Ember, AssignmentMuter) {
    var AssignmentMuterComponent;

    return AssignmentMuterComponent = Ember.Component.extend({
      click: function(e) {
        e.preventDefault();
        if (this.get('assignment.muted')) {
          return this.unmute();
        } else {
          return this.mute();
        }
      },
      mute: function() {
        return AssignmentMuter.prototype.showDialog.call(this.muter);
      },
      unmute: function() {
        return AssignmentMuter.prototype.confirmUnmute.call(this.muter);
      },
      tagName: 'input',
      type: 'checkbox',
      attributeBindings: ['type', 'checked', 'ariaLabel:aria-label'],
      checked: (function() {
        return this.get('assignment.muted');
      }).property('assignment.muted'),
      ariaLabel: (function() {
        if (this.get('assignment.muted')) {
          return I18n.t("assignment_muted", "Click to unmute.");
        } else {
          return I18n.t("assignment_unmuted", "Click to mute.");
        }
      }).property('assignment.muted'),
      setup: (function() {
        var assignment, url;

        if (assignment = this.get('assignment')) {
          url = "" + ENV.GRADEBOOK_OPTIONS.context_url + "/assignments/" + assignment.id + "/mute";
          return this.muter = new AssignmentMuter(null, assignment, url, Em.set);
        }
      }).observes('assignment').on('init')
    });
  });

}).call(this);
