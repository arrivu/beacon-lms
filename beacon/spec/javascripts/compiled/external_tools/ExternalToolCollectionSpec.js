(function() {
  define(['compiled/external_tools/ExternalToolCollection'], function(ExternalToolCollection) {
    var data;

    data = [
      {
        "description": "Embed files from Box.net",
        "domain": "localhost",
        "id": "1",
        "name": "Box"
      }, {
        "description": "This example LTI Tool Provider supports LIS Outcome...",
        "domain": "lti-tool-provider.herokuapp.com",
        "id": "2",
        "name": "Brad's Tool"
      }
    ];
    module('ExternalToolCollection', {
      setup: function() {
        this.externalToolCollection = new ExternalToolCollection;
        return this.externalToolCollection.add(data);
      }
    });
    return test('finds a tool by id', function() {
      var tool;

      tool = this.externalToolCollection.findWhere({
        id: '1'
      });
      return equal(tool.get('name'), 'Box');
    });
  });

}).call(this);
