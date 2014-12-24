(function() {
  define(['react', 'jquery', 'compiled/react_files/components/ItemCog', 'compiled/models/Folder'], function(React, $, ItemCog, Folder) {
    var Simulate;

    Simulate = React.addons.TestUtils.Simulate;
    module('ItemCog', {
      setup: function() {
        this.sampleProps = function(canManageFiles) {
          if (canManageFiles == null) {
            canManageFiles = false;
          }
          return {
            model: new Folder({
              id: 999
            }),
            startEditingName: function() {
              debugger;
            },
            userCanManageFilesForContext: canManageFiles
          };
        };
        this.buttonsEnabled = function(itemCog, config) {
          var button, prop, valid;

          valid = true;
          for (prop in config) {
            button = typeof itemCog.refs[prop] !== 'undefined' ? $(itemCog.refs[prop].getDOMNode()).length : false;
            if ((config[prop] === true && !!button) || (config[prop] === false && !button)) {
              continue;
            } else {
              valid = false;
            }
          }
          return valid;
        };
        this.readOnlyConfig = {
          'download': true,
          'editName': false,
          'restrictedDialog': false,
          'move': false,
          'deleteLink': false
        };
        this.manageFilesConfig = {
          'download': true,
          'editName': true,
          'restrictedDialog': true,
          'move': true,
          'deleteLink': true
        };
        return this.itemCog = React.renderComponent(ItemCog(this.sampleProps(true)), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.itemCog.getDOMNode().parentNode);
      }
    });
    test('deletes model when delete link is pressed', function() {
      var ajaxSpy;

      ajaxSpy = sinon.spy($, 'ajax');
      sinon.stub(window, 'confirm').returns(true);
      Simulate.click(this.itemCog.refs.deleteLink.getDOMNode());
      ok(window.confirm.calledOnce, 'confirms before deleting');
      ok(ajaxSpy.calledWithMatch({
        url: '/api/v1/folders/999',
        type: 'DELETE',
        data: {
          force: 'true'
        }
      }), 'sends DELETE to right url');
      window.confirm.restore();
      return ajaxSpy.restore();
    });
    test('only shows download button for limited users', function() {
      var readOnlyItemCog;

      readOnlyItemCog = React.renderComponent(ItemCog(this.sampleProps(false)), $('<div>').appendTo('body')[0]);
      return ok(this.buttonsEnabled(readOnlyItemCog, this.readOnlyConfig), 'only download button is shown');
    });
    return test('shows all buttons for users with manage_files permissions', function() {
      return ok(this.buttonsEnabled(this.itemCog, this.manageConfig), 'all buttons are shown');
    });
  });

}).call(this);
