(function() {
  define(['react', 'jquery', 'compiled/react_files/components/PublishCloud', 'compiled/models/FilesystemObject'], function(React, $, PublishCloud, FilesystemObject) {
    var Simulate;

    Simulate = React.addons.TestUtils.Simulate;
    module('PublishCloud', {
      setup: function() {
        var props;

        this.model = new FilesystemObject({
          locked: true,
          hidden: false,
          id: 42
        });
        this.model.url = function() {
          return "/api/v1/folders/" + this.id;
        };
        props = {
          model: this.model,
          userCanManageFilesForContext: true
        };
        return this.publishCloud = React.renderComponent(PublishCloud(props), $('#fixtures')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.publishCloud.getDOMNode().parentNode);
      }
    });
    test("model change event updates components state", function() {
      equal(this.publishCloud.state.published, false, "published starts off as false");
      this.model.set('locked', false);
      return equal(this.publishCloud.state.published, true, "changing models locked changes it to true");
    });
    test("clicking a published cloud opens restricted dialog", function() {
      sinon.stub(React, 'renderComponent');
      Simulate.click(this.publishCloud.refs.publishCloud.getDOMNode());
      ok(React.renderComponent.calledOnce, 'renders a component inside the dialog');
      return React.renderComponent.restore();
    });
    module('PublishCloud Student View', {
      setup: function() {
        var props;

        this.model = new FilesystemObject({
          locked: false,
          hidden: true,
          lock_at: '123',
          unlock_at: '123',
          id: 42
        });
        this.model.url = function() {
          return "/api/v1/folders/" + this.id;
        };
        props = {
          model: this.model,
          userCanManageFilesForContext: false
        };
        return this.publishCloud = React.renderComponent(PublishCloud(props), $('#fixtures')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.publishCloud.getDOMNode().parentNode);
      }
    });
    test('should display a non clickable restricted dates icon', function() {
      equal(this.publishCloud.refs.publishCloud.props.onClick, void 0, 'does not have a click event');
      return equal(this.publishCloud.refs.publishCloud.props.title, "Available from Jan 1, 1970 at 12:00am until Jan 1, 1970 at 12:00am", "has a available from hoverover");
    });
    module('PublishCloud#togglePublishedState', {
      setup: function() {
        var props;

        props = {
          model: new FilesystemObject({
            hidden: false,
            id: 42
          }),
          userCanManageFilesForContext: true
        };
        return this.publishCloud = React.renderComponent(PublishCloud(props), $('#fixtures')[0]);
      },
      teardown: function() {
        return React.unmountComponentAtNode(this.publishCloud.getDOMNode().parentNode);
      }
    });
    test("when published is true, toggles it to false", function() {
      this.publishCloud.setState({
        published: true
      });
      this.publishCloud.togglePublishedState();
      return equal(this.publishCloud.state.published, false, "published state should be false");
    });
    test("when published is false, toggles publish to true and clears restricted state", function() {
      this.publishCloud.setState({
        published: false,
        restricted: true
      });
      this.publishCloud.togglePublishedState();
      equal(this.publishCloud.state.published, true, "published state should be true");
      return equal(this.publishCloud.state.restricted, false, "published state should be true");
    });
    test("when published is false, toggles publish to true and sets hidden to false", function() {
      this.publishCloud.setState({
        published: false,
        restricted: true
      });
      this.publishCloud.togglePublishedState();
      equal(this.publishCloud.state.published, true, "published state should be true");
      return equal(this.publishCloud.state.hidden, false, "hidden is false");
    });
    module('PublishCloud#getInitialState');
    test("sets published initial state based on params model hidden property", function() {
      var model, props;

      model = new FilesystemObject({
        locked: false,
        id: 42
      });
      props = {
        model: model,
        userCanManageFilesForContext: true
      };
      this.publishCloud = React.renderComponent(PublishCloud(props), $('#fixtures')[0]);
      equal(this.publishCloud.state.published, !model.get('locked'), "not locked is published");
      equal(this.publishCloud.state.restricted, false, "restricted should be false");
      equal(this.publishCloud.state.hidden, false, "hidden should be false");
      return React.unmountComponentAtNode(this.publishCloud.getDOMNode().parentNode);
    });
    test("restricted is true when lock_at/unlock_at is set", function() {
      var model, props;

      model = new FilesystemObject({
        hidden: false,
        lock_at: '123',
        unlock_at: '123',
        id: 42
      });
      props = {
        model: model
      };
      this.publishCloud = React.renderComponent(PublishCloud(props), $('#fixtures')[0]);
      equal(this.publishCloud.state.restricted, true, "restricted is true when lock_at/ulock_at is set");
      return React.unmountComponentAtNode(this.publishCloud.getDOMNode().parentNode);
    });
    module('PublishCloud#extractStateFromModel');
    return test("returns object that can be used to set state", function() {
      var model, newModel, props;

      model = new FilesystemObject({
        locked: true,
        hidden: true,
        lock_at: '123',
        unlock_at: '123',
        id: 42
      });
      props = {
        model: model
      };
      this.publishCloud = React.renderComponent(PublishCloud(props), $('#fixtures')[0]);
      newModel = new FilesystemObject({
        locked: false,
        hidden: true,
        lock_at: null,
        unlock_at: null
      });
      deepEqual(this.publishCloud.extractStateFromModel(newModel), {
        hidden: true,
        published: true,
        restricted: false
      }, "returns object to set state with");
      return React.unmountComponentAtNode(this.publishCloud.getDOMNode().parentNode);
    });
  });

}).call(this);
