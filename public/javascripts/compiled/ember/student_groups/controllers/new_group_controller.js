(function() {
  define(['ember', 'ic-ajax'], function(Ember, ajax) {
    var NewGroupController;

    return NewGroupController = Ember.ObjectController.extend({
      content: [],
      needs: ['student_groups', 'users'],
      joinLevel: 'parent_context_auto_join',
      name: '',
      nameError: (function() {
        var length;

        length = this.get('name').length;
        return length === 0 || length > 255;
      }).property('name.length'),
      selectOptions: [
        {
          value: 'parent_context_auto_join',
          desc: 'Course members are free to join'
        }, {
          value: 'invitation_only',
          desc: 'Membership by invitation only'
        }
      ],
      buildInvites: function() {
        var invites;

        invites = {};
        this.get('controllers.users').forEach(function(user) {
          if (user.get('invite')) {
            return invites[user.get('id')] = 1;
          }
        });
        return invites;
      },
      actions: {
        createGroup: function() {
          var group, invites,
            _this = this;

          if (!this.nameError) {
            invites = this.buildInvites();
            group = this.store.createRecord('group', {
              name: this.get('name'),
              join_level: this.get('joinLevel'),
              course_id: ENV.course_id,
              invites: invites
            });
            return group.save().then(function(group) {
              var json;

              _this.set('name', '');
              json = group.toJSON();
              json.id = group.id;
              return _this.get('controllers.student_groups.groups').pushObject(json);
            });
          }
        }
      }
    });
  });

}).call(this);
