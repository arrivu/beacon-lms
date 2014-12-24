(function() {
  define(['Backbone', 'underscore'], function(Backbone, _) {
    var BackboneMixin, collectionBehavior, modelBehavior, subscribe, unsubscribe;

    collectionBehavior = {
      changeOptions: 'add remove reset sort',
      updateScheduler: function(func) {
        return _.debounce(func, 0);
      }
    };
    modelBehavior = {
      changeOptions: 'change',
      updateScheduler: _.identity
    };
    subscribe = function(component, modelOrCollection, customChangeOptions) {
      var behavior, changeOptions, triggerUpdate;

      if (!modelOrCollection) {
        return;
      }
      behavior = (modelOrCollection instanceof Backbone.Collection ? collectionBehavior : modelBehavior);
      triggerUpdate = behavior.updateScheduler(function() {
        if (component.isMounted()) {
          return (component.onModelChange || component.forceUpdate).call(component);
        }
      });
      changeOptions = customChangeOptions || component.changeOptions || behavior.changeOptions;
      return modelOrCollection.on(changeOptions, triggerUpdate, component);
    };
    unsubscribe = function(component, modelOrCollection) {
      if (!modelOrCollection) {
        return;
      }
      return modelOrCollection.off(null, null, component);
    };
    return BackboneMixin = function(optionsOrPropName, customChangeOptions) {
      var modelOrCollection, propName;

      if (typeof optionsOrPropName === 'object') {
        customChangeOptions = optionsOrPropName.renderOn;
        propName = optionsOrPropName.propName;
        modelOrCollection = optionsOrPropName.modelOrCollection;
      } else {
        propName = optionsOrPropName;
      }
      if (!modelOrCollection) {
        modelOrCollection = function(props) {
          return props[propName];
        };
      }
      return {
        componentDidMount: function() {
          return subscribe(this, modelOrCollection(this.props), customChangeOptions);
        },
        componentWillReceiveProps: function(nextProps) {
          if (modelOrCollection(this.props) === modelOrCollection(nextProps)) {
            return;
          }
          unsubscribe(this, modelOrCollection(this.props));
          subscribe(this, modelOrCollection(nextProps), customChangeOptions);
          return typeof this.componentWillChangeModel === "function" ? this.componentWillChangeModel() : void 0;
        },
        componentDidUpdate: function(prevProps, prevState) {
          if (modelOrCollection(this.props) === modelOrCollection(prevProps)) {
            return;
          }
          return typeof this.componentDidChangeModel === "function" ? this.componentDidChangeModel() : void 0;
        },
        componentWillUnmount: function() {
          return unsubscribe(this, modelOrCollection(this.props));
        }
      };
    };
  });

}).call(this);
