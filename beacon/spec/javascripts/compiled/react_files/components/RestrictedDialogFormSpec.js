(function() {
  define(['react', 'jquery', 'compiled/react_files/components/RestrictedDialogForm', 'compiled/models/Folder'], function(React, $, RestrictedDialogForm, Folder) {
    var Simulate;

    Simulate = React.addons.TestUtils.Simulate;
    module('RestrictedDialogForm', {
      setup: function() {
        var props;

        props = {
          models: [
            new Folder({
              id: 999
            })
          ]
        };
        return this.restrictedDialogForm = React.renderComponent(RestrictedDialogForm(props), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.restrictedDialogForm.getDOMNode().parentNode);
      }
    });
    test('renders a publish input field', function() {
      return ok(this.restrictedDialogForm.refs.publishInput, "should have a publish input field");
    });
    test('renders an unpublish input field', function() {
      return ok(this.restrictedDialogForm.refs.unpublishInput, "should have an unpublish input field");
    });
    test('renders a permissions input field', function() {
      Simulate.change(this.restrictedDialogForm.refs.permissionsInput.getDOMNode());
      return ok(this.restrictedDialogForm.refs.permissionsInput, "should have an permissions input field");
    });
    test('renders a calendar option input field', function() {
      Simulate.change(this.restrictedDialogForm.refs.permissionsInput.getDOMNode());
      return ok(this.restrictedDialogForm.refs.dateRange, "should have a dateRange input field");
    });
    module('RestrictedDialogForm Multiple Selected Items', {
      setup: function() {
        var props;

        props = {
          models: [
            new Folder({
              id: 1000,
              hidden: false
            }), new Folder({
              id: 999,
              hidden: true
            })
          ]
        };
        return this.restrictedDialogForm = React.renderComponent(RestrictedDialogForm(props), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.restrictedDialogForm.getDOMNode().parentNode);
      }
    });
    test('defaults to having nothing selected when non common items are selected', function() {
      equal(this.restrictedDialogForm.refs.publishInput.getDOMNode().checked, false, 'not selected');
      equal(this.restrictedDialogForm.refs.unpublishInput.getDOMNode().checked, false, 'not selected');
      return equal(this.restrictedDialogForm.refs.dateRange.getDOMNode().checked, false, 'not selected');
    });
    test('button is disabled but becomes enabled when you select an item', function() {
      equal(this.restrictedDialogForm.refs.updateBtn.props.disabled, true, 'starts off as disabled');
      this.restrictedDialogForm.refs.publishInput.getDOMNode().checked = true;
      Simulate.change(this.restrictedDialogForm.refs.publishInput.getDOMNode());
      return equal(this.restrictedDialogForm.refs.updateBtn.props.disabled, false, 'is enabled after an option is selected');
    });
    test('selecting the restricted access option default checks the hiddenInput option', function() {
      this.restrictedDialogForm.refs.permissionsInput.getDOMNode().checked = true;
      Simulate.change(this.restrictedDialogForm.refs.permissionsInput.getDOMNode());
      return equal(this.restrictedDialogForm.refs.link_only.props.checked, true, 'default checks hiddenInput');
    });
    module('RestrictedDialogForm#extractFormValues', {
      setup: function() {
        var props;

        props = {
          models: [
            new Folder({
              id: 999
            })
          ]
        };
        return this.restrictedDialogForm = React.renderComponent(RestrictedDialogForm(props), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.restrictedDialogForm.getDOMNode().parentNode);
      }
    });
    test('returns the correct object to publish an item', function() {
      var expectedObject;

      this.restrictedDialogForm.refs.publishInput.getDOMNode().checked = true;
      Simulate.change(this.restrictedDialogForm.refs.publishInput.getDOMNode());
      expectedObject = {
        'hidden': false,
        'unlock_at': '',
        'lock_at': '',
        'locked': false
      };
      return deepEqual(this.restrictedDialogForm.extractFormValues(), expectedObject, "returns the correct object");
    });
    test('returns the correct object to unpublish an item', function() {
      var expectedObject;

      this.restrictedDialogForm.refs.unpublishInput.getDOMNode().checked = true;
      Simulate.change(this.restrictedDialogForm.refs.unpublishInput.getDOMNode());
      expectedObject = {
        'hidden': false,
        'unlock_at': '',
        'lock_at': '',
        'locked': true
      };
      return deepEqual(this.restrictedDialogForm.extractFormValues(), expectedObject, "returns the correct object");
    });
    test('returns the correct object to hide an item', function() {
      var expectedObject;

      this.restrictedDialogForm.refs.permissionsInput.getDOMNode().checked = true;
      Simulate.change(this.restrictedDialogForm.refs.permissionsInput.getDOMNode());
      expectedObject = {
        'hidden': true,
        'unlock_at': '',
        'lock_at': '',
        'locked': false
      };
      return deepEqual(this.restrictedDialogForm.extractFormValues(), expectedObject, "returns the correct object");
    });
    test('returns the correct object to restrict an item based on dates', function() {
      var expectedObject;

      Simulate.change(this.restrictedDialogForm.refs.permissionsInput.getDOMNode());
      Simulate.change(this.restrictedDialogForm.refs.dateRange.getDOMNode());
      this.restrictedDialogForm.refs.dateRange.getDOMNode().checked = true;
      this.restrictedDialogForm.refs.unlock_at.getDOMNode().value = "something else";
      this.restrictedDialogForm.refs.lock_at.getDOMNode().value = "something";
      expectedObject = {
        'hidden': false,
        'unlock_at': 'something else',
        'lock_at': 'something',
        'locked': false
      };
      return deepEqual(this.restrictedDialogForm.extractFormValues(), expectedObject, "returns the correct object");
    });
    module('RestrictedDialogForm#initialCalendarOption', {
      setup: function() {},
      teardown: function() {}
    });
    module('RestrictedDialogForm#handleSubmit', {
      setup: function() {
        var props;

        props = {
          models: [
            new Folder({
              id: 999,
              hidden: true,
              lock_at: void 0,
              unlock_at: void 0
            })
          ]
        };
        return this.restrictedDialogForm = React.renderComponent(RestrictedDialogForm(props), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.restrictedDialogForm.getDOMNode().parentNode);
      }
    });
    test('calls save on the model with only hidden if calendarOption is false', function() {
      sinon.spy(this.restrictedDialogForm.props.models[0], 'save');
      Simulate.submit(this.restrictedDialogForm.refs.dialogForm.getDOMNode());
      ok(this.restrictedDialogForm.props.models[0].save.calledWithMatch({}, {
        attrs: {
          hidden: true
        }
      }), 'Called save with single hidden true attribute');
      return this.restrictedDialogForm.props.models[0].save.restore();
    });
    test('calls save on the model with calendar should update hidden, unlock_at, lock_at and locked', 1, function() {
      var refs, stubbedSave;

      refs = this.restrictedDialogForm.refs;
      Simulate.change(refs.permissionsInput.getDOMNode());
      this.restrictedDialogForm.setState({
        selectedOption: 'date_range'
      });
      refs.unlock_at.getDOMNode().value = '123';
      refs.lock_at.getDOMNode().value = '123';
      stubbedSave = sinon.spy(this.restrictedDialogForm.props.models[0], 'save');
      Simulate.submit(refs.dialogForm.getDOMNode());
      ok(this.restrictedDialogForm.props.models[0].save.calledWithMatch({}, {
        attrs: {
          hidden: false,
          lock_at: '123',
          unlock_at: '123',
          locked: false
        }
      }), 'Called save with single hidden true attribute');
      return stubbedSave.restore();
    });
    module('RestrictedDialogForm Multiple Items', {
      setup: function() {
        var props;

        props = {
          models: [
            new Folder({
              id: 999,
              hidden: true,
              lock_at: void 0,
              unlock_at: void 0
            }), new Folder({
              id: 1000,
              hidden: true,
              lock_at: void 0,
              unlock_at: void 0
            })
          ]
        };
        return this.restrictedDialogForm = React.renderComponent(RestrictedDialogForm(props), $('<div>').appendTo('body')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.restrictedDialogForm.getDOMNode().parentNode);
      }
    });
    return test('commonly selected items will open the same defaulted options', function() {
      equal(this.restrictedDialogForm.refs.permissionsInput.props.checked, true, 'permissionsInput is checked for all of the selected items');
      return equal(this.restrictedDialogForm.refs.link_only.props.checked, true, 'link_only is checked for all of the selected items');
    });
  });

}).call(this);
