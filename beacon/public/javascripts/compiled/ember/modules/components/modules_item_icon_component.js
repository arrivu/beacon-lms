(function() {
  define(['ember'], function(Ember) {
    var ModulesItemIconComponent, map;

    map = {
      Assignment: 'assignment',
      Discussion: 'discussion',
      ExternalTool: 'link',
      ExternalUrl: 'link',
      File: 'download',
      Page: 'document',
      Quiz: 'quiz'
    };
    return ModulesItemIconComponent = Ember.Component.extend({
      tagName: 'i',
      classNameBindings: ['iconClass'],
      type: 'Page',
      iconClass: (function() {
        return "icon-" + (map[this.get('type')] || 'page');
      }).property('type')
    });
  });

}).call(this);
