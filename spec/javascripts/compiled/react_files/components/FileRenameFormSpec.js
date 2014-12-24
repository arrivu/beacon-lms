(function() {
  define(['react', 'jquery', 'compiled/react_files/components/FileRenameForm', 'compiled/models/Folder'], function(React, $, FileRenameForm, Folder) {
    var Simulate;

    Simulate = React.addons.TestUtils.Simulate;
    module('FileRenameForm', {
      setup: function() {
        var props;

        props = {
          fileOptions: {
            file: {
              id: 999,
              name: 'original_name.txt'
            },
            name: 'options_name.txt'
          }
        };
        return this.form = React.renderComponent(FileRenameForm(props), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {}
    });
    test('switches to editing file name state with button click', function() {
      Simulate.click(this.form.refs.renameBtn.getDOMNode());
      ok(this.form.state.isEditing);
      return ok(this.form.refs.newName.getDOMNode());
    });
    test('isEditing displays options name by default', function() {
      Simulate.click(this.form.refs.renameBtn.getDOMNode());
      ok(this.form.state.isEditing);
      return equal(this.form.refs.newName.getDOMNode().value, 'options_name.txt');
    });
    test('isEditing displays file name when no options name exists', function() {
      this.form.setProps({
        fileOptions: {
          file: {
            name: 'file_name.md'
          }
        }
      });
      Simulate.click(this.form.refs.renameBtn.getDOMNode());
      ok(this.form.state.isEditing);
      return equal(this.form.refs.newName.getDOMNode().value, 'file_name.md');
    });
    test('can go back from isEditing to initial view with button click', function() {
      Simulate.click(this.form.refs.renameBtn.getDOMNode());
      ok(this.form.state.isEditing);
      ok(this.form.refs.newName.getDOMNode());
      Simulate.click(this.form.refs.backBtn.getDOMNode());
      ok(!this.form.state.isEditing);
      return ok(this.form.refs.replaceBtn.getDOMNode());
    });
    test('calls passed in props method to resolve conflict', function() {
      expect(2);
      this.form.setProps({
        fileOptions: {
          file: {
            name: 'file_name.md'
          }
        },
        onNameConflictResolved: function(options) {
          return ok(options.name);
        }
      });
      Simulate.click(this.form.refs.renameBtn.getDOMNode());
      ok(this.form.state.isEditing);
      return Simulate.click(this.form.refs.commitChangeBtn.getDOMNode());
    });
    test('onNameConflicResolved preserves expandZip option when renaming', function() {
      expect(2);
      this.form.setProps({
        fileOptions: {
          file: {
            name: 'file_name.md'
          },
          expandZip: 'true'
        },
        onNameConflictResolved: function(options) {
          return equal(options.expandZip, 'true');
        }
      });
      Simulate.click(this.form.refs.renameBtn.getDOMNode());
      ok(this.form.state.isEditing);
      return Simulate.click(this.form.refs.commitChangeBtn.getDOMNode());
    });
    return test('onNameConflicResolved preserves expandZip option when replacing', function() {
      expect(1);
      this.form.setProps({
        fileOptions: {
          file: {
            name: 'file_name.md'
          },
          expandZip: 'true'
        },
        onNameConflictResolved: function(options) {
          return equal(options.expandZip, 'true');
        }
      });
      return Simulate.click(this.form.refs.replaceBtn.getDOMNode());
    });
  });

}).call(this);
