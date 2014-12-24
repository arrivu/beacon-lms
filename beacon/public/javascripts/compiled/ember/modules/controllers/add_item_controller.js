(function() {
  define(['ember', 'ic-ajax', '../models/item'], function(Ember, _arg, Item) {
    var NewModuleItemController, adders, bool, cid, equal, request, _ref;

    request = _arg.request;
    adders = {
      assignment: function(assignments, moduleId) {
        return assignments.map(function(assignment) {
          var item;

          item = Item.createRecord({
            module_id: moduleId,
            content_id: assignment.id,
            title: assignment.name,
            type: 'Assignment'
          });
          item.save();
          return item;
        });
      },
      quiz: function(quizzes, moduleId) {
        return quizzes.map(function(quiz) {
          var item;

          item = Item.createRecord({
            module_id: moduleId,
            content_id: quiz.id,
            title: quiz.title,
            type: 'Quiz'
          });
          item.save();
          return item;
        });
      },
      file: function(files, moduleId) {
        return files.map(function(file) {
          var item;

          item = Item.createRecord({
            module_id: moduleId,
            content_id: file.id,
            title: file.display_name,
            type: 'File'
          });
          item.save();
          return item;
        });
      },
      page: function(pages, moduleId) {
        return pages.map(function(page) {
          var item;

          item = Item.createRecord({
            module_id: moduleId,
            page_url: page.url,
            title: page.title,
            type: 'Page'
          });
          item.save();
          return item;
        });
      },
      discussion: function(topics, moduleId) {
        return topics.map(function(topic) {
          var item;

          item = Item.createRecord({
            module_id: moduleId,
            content_id: topic.id,
            title: topic.title,
            type: 'Discussion'
          });
          item.save();
          return item;
        });
      },
      tool: function() {
        return console.log('tool');
      }
    };
    _ref = Ember.computed, equal = _ref.equal, bool = _ref.bool;
    cid = -1;
    return NewModuleItemController = Ember.ObjectController.extend({
      returnFocus: false,
      createAssignment: equal('createType', 'assignment'),
      createDiscussion: equal('createType', 'discussion'),
      createFile: equal('createType', 'file'),
      createHeader: equal('createType', 'header'),
      createLink: equal('createType', 'link'),
      createPage: equal('createType', 'page'),
      createQuiz: equal('createType', 'quiz'),
      createTool: equal('createType', 'tool'),
      addAssignment: equal('addType', 'assignment'),
      addDiscussion: equal('addType', 'discussion'),
      addFile: equal('addType', 'file'),
      addHeader: equal('addType', 'header'),
      addPage: equal('addType', 'page'),
      addQuiz: equal('addType', 'quiz'),
      addTool: equal('addType', 'tool'),
      editing: bool('createType'),
      modalId: (function() {
        cid++;
        return "add-item-modal-" + cid;
      }).property(),
      addListId: (function() {
        cid++;
        return "add-list-" + cid;
      }).property(),
      actions: {
        quitEditing: function() {
          return this.setProperties({
            returnFocus: true,
            createType: false
          });
        },
        beginCreate: function(item) {
          this.set('newThing', {});
          return this.set('createType', item.get('type'));
        },
        beginAdd: function(item) {
          var modal;

          this.set('newThing', {});
          this.set('addType', item.get('type'));
          modal = Ember.View.views[this.get('modalId')];
          return modal.open();
        },
        addExistingItems: function() {
          var items, stuffToAdd;

          stuffToAdd = this.get('newThing.selected');
          items = adders[this.get('addType')](stuffToAdd, this.get('model.id'));
          return Ember.run.later(this, function() {
            return this.get('items').addObjects(items);
          }, 300);
        }
      }
    });
  });

}).call(this);
