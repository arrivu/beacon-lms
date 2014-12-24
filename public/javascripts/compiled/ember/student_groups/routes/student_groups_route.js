(function() {
  define(['ember'], function(Ember) {
    var StudentGroupsRoute;

    return StudentGroupsRoute = Ember.Route.extend({
      actions: {
        _destroyModal: function() {
          return this.disconnectOutlet({
            outlet: 'modal',
            parentView: 'application'
          });
        },
        newGroup: function() {
          return this.render('new_group', {
            into: 'application',
            outlet: 'modal',
            theParent: this.controller
          });
        }
      }
    });
  });

}).call(this);
