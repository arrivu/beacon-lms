(function() {
  define(['ember', 'ember-data', 'ic-ajax'], function(Ember, DS, ajax) {
    var GroupAdapter;

    return GroupAdapter = DS.RESTAdapter.extend({
      namespace: 'api/v1',
      urlFor: function(record) {
        if (record.get('course_id')) {
          return "/courses/" + (record.get('course_id')) + "/groups";
        } else {
          return "/" + this.namespace + "/groups";
        }
      },
      createRecord: function(store, type, record) {
        var invites, url;

        url = this.urlFor(record);
        delete record.course_id;
        invites = record.invites;
        delete record.invites;
        return this.ajax(url, "POST", {
          data: {
            group: record,
            invitees: invites
          }
        });
      }
    });
  });

}).call(this);
