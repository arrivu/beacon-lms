(function() {
  define(['ember', 'ember-data', 'ic-ajax'], function(Ember, DS, ajax) {
    var MembershipAdapter;

    return MembershipAdapter = DS.RESTAdapter.extend({
      namespace: 'api/v1',
      urlFor: function(record) {
        return "/" + this.namespace + "/groups/" + (record.get('group_id')) + "/memberships";
      },
      createRecord: function(store, type, record) {
        return this.ajax(this.urlFor(record), "POST", {
          data: {
            user_id: record.get('user_id')
          }
        });
      }
    });
  });

}).call(this);
