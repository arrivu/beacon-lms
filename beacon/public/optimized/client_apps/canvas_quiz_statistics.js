/* canvas_precompiled_asset: amd */
/* canvas_quiz_statistics 1.0.0 */
define('canvas_quiz_statistics/version',[],function() {
  return '1.0.0';
});
define('canvas_quiz_statistics/config/environments/production',[], function() {
  /**
   * @class Config
   * Application-wide configuration.
   *
   * Some parameters are required to be set up correctly before the app is
   * mounted for it to work properly.
   *
   * === Example: configuring the app
   *
   *     require([ 'path/to/app' ], function(app) {
   *       app.configure({
   *         precision: 2,
   *         ajax: $.ajax
   *       });
   *     });
   */
  return {
    /**
     * @cfg {Number} [precision=2]
     *
     * Number of decimals to round to when displaying floats.
     */
    precision: 2,

    /**
     * @cfg {Function} ajax
     * An XHR request processor that has an API compatible with jQuery.ajax.
     */
    ajax: undefined,

    /**
     * @cfg {String} quizStatisticsUrl
     * Canvas API endpoint for querying the current quiz's statistics.
     */
    quizStatisticsUrl: undefined,

    /**
     * @cfg {String} quizReportsUrl
     * Canvas API endpoint for querying the current quiz's statistic reports.
     */
    quizReportsUrl: undefined,

    /**
     * @cfg {Boolean} [includesAllVersions=true]
     * Whether we should get the statistics and quiz reports for all versions
     * of the quiz, instead of the latest.
     */
    includesAllVersions: true,

    /**
     * @cfg {Boolean} [loadOnStartup=true]
     *
     * Whether the app should query all the data it needs as soon as it is
     * mounted.
     *
     * You may disable this behavior if you want to manually inject the app
     * with data.
     */
    loadOnStartup: true,

    /**
     * @cfg {Number} pollingFrequency
     * Milliseconds to wait before polling the completion of progress objects.
     */
    pollingFrequency: 1000,

    /**
     * Error emitter. Default behavior is to log the error message to the
     * console.
     *
     * Override this to handle errors from the app.
     *
     * @param  {String} message
     *         An explanation of the error.
     */
    onError: function(message) {
      console.error(message);
    }
  };
});

define('canvas_quiz_statistics/config',[
  'require',
  'lodash',
  './config/environments/production',
], function(require, _, ProductionConfig) {
  var config = ProductionConfig || {};

  
  return config;
});
define('canvas_quiz_statistics/config/initializers/d3',[ 'd3' ], function() {
  
});
define("rsvp/all",["./promise","exports"],function(__dependency1__,__exports__){var Promise=__dependency1__["default"];__exports__["default"]=function all(array,label){return Promise.all(array,label)}});define("rsvp/all_settled",["./promise","./utils","exports"],function(__dependency1__,__dependency2__,__exports__){var Promise=__dependency1__["default"];var isArray=__dependency2__.isArray;var isNonThenable=__dependency2__.isNonThenable;__exports__["default"]=function allSettled(entries,label){return new Promise(function(resolve,reject){if(!isArray(entries)){throw new TypeError("You must pass an array to allSettled.")}var remaining=entries.length;var entry;if(remaining===0){resolve([]);return}var results=new Array(remaining);function fulfilledResolver(index){return function(value){resolveAll(index,fulfilled(value))}}function rejectedResolver(index){return function(reason){resolveAll(index,rejected(reason))}}function resolveAll(index,value){results[index]=value;if(--remaining===0){resolve(results)}}for(var index=0;index<entries.length;index++){entry=entries[index];if(isNonThenable(entry)){resolveAll(index,fulfilled(entry))}else{Promise.resolve(entry).then(fulfilledResolver(index),rejectedResolver(index))}}},label)};function fulfilled(value){return{state:"fulfilled",value:value}}function rejected(reason){return{state:"rejected",reason:reason}}});define("rsvp/asap",["exports"],function(__exports__){__exports__["default"]=function asap(callback,arg){var length=queue.push([callback,arg]);if(length===1){scheduleFlush()}};var browserGlobal=typeof window!=="undefined"?window:{};var BrowserMutationObserver=browserGlobal.MutationObserver||browserGlobal.WebKitMutationObserver;function useNextTick(){return function(){process.nextTick(flush)}}function useMutationObserver(){var iterations=0;var observer=new BrowserMutationObserver(flush);var node=document.createTextNode("");observer.observe(node,{characterData:true});return function(){node.data=iterations=++iterations%2}}function useSetTimeout(){return function(){setTimeout(flush,1)}}var queue=[];function flush(){for(var i=0;i<queue.length;i++){var tuple=queue[i];var callback=tuple[0],arg=tuple[1];callback(arg)}queue=[]}var scheduleFlush;if(typeof process!=="undefined"&&{}.toString.call(process)==="[object process]"){scheduleFlush=useNextTick()}else if(BrowserMutationObserver){scheduleFlush=useMutationObserver()}else{scheduleFlush=useSetTimeout()}});define("rsvp/config",["./events","exports"],function(__dependency1__,__exports__){var EventTarget=__dependency1__["default"];var config={instrument:false};EventTarget.mixin(config);function configure(name,value){if(name==="onerror"){config.on("error",value);return}if(arguments.length===2){config[name]=value}else{return config[name]}}__exports__.config=config;__exports__.configure=configure});define("rsvp/defer",["./promise","exports"],function(__dependency1__,__exports__){var Promise=__dependency1__["default"];__exports__["default"]=function defer(label){var deferred={};deferred.promise=new Promise(function(resolve,reject){deferred.resolve=resolve;deferred.reject=reject},label);return deferred}});define("rsvp/events",["exports"],function(__exports__){var indexOf=function(callbacks,callback){for(var i=0,l=callbacks.length;i<l;i++){if(callbacks[i]===callback){return i}}return-1};var callbacksFor=function(object){var callbacks=object._promiseCallbacks;if(!callbacks){callbacks=object._promiseCallbacks={}}return callbacks};__exports__["default"]={mixin:function(object){object.on=this.on;object.off=this.off;object.trigger=this.trigger;object._promiseCallbacks=undefined;return object},on:function(eventName,callback){var allCallbacks=callbacksFor(this),callbacks;callbacks=allCallbacks[eventName];if(!callbacks){callbacks=allCallbacks[eventName]=[]}if(indexOf(callbacks,callback)===-1){callbacks.push(callback)}},off:function(eventName,callback){var allCallbacks=callbacksFor(this),callbacks,index;if(!callback){allCallbacks[eventName]=[];return}callbacks=allCallbacks[eventName];index=indexOf(callbacks,callback);if(index!==-1){callbacks.splice(index,1)}},trigger:function(eventName,options){var allCallbacks=callbacksFor(this),callbacks,callbackTuple,callback,binding;if(callbacks=allCallbacks[eventName]){for(var i=0;i<callbacks.length;i++){callback=callbacks[i];callback(options)}}}}});define("rsvp/filter",["./all","./map","./utils","exports"],function(__dependency1__,__dependency2__,__dependency3__,__exports__){var all=__dependency1__["default"];var map=__dependency2__["default"];var isFunction=__dependency3__.isFunction;var isArray=__dependency3__.isArray;function filter(promises,filterFn,label){return all(promises,label).then(function(values){if(!isArray(promises)){throw new TypeError("You must pass an array to filter.")}if(!isFunction(filterFn)){throw new TypeError("You must pass a function to filter's second argument.")}return map(promises,filterFn,label).then(function(filterResults){var i,valuesLen=values.length,filtered=[];for(i=0;i<valuesLen;i++){if(filterResults[i])filtered.push(values[i])}return filtered})})}__exports__["default"]=filter});define("rsvp/hash",["./promise","./utils","exports"],function(__dependency1__,__dependency2__,__exports__){var Promise=__dependency1__["default"];var isNonThenable=__dependency2__.isNonThenable;var keysOf=__dependency2__.keysOf;__exports__["default"]=function hash(object,label){return new Promise(function(resolve,reject){var results={};var keys=keysOf(object);var remaining=keys.length;var entry,property;if(remaining===0){resolve(results);return}function fulfilledTo(property){return function(value){results[property]=value;if(--remaining===0){resolve(results)}}}function onRejection(reason){remaining=0;reject(reason)}for(var i=0;i<keys.length;i++){property=keys[i];entry=object[property];if(isNonThenable(entry)){results[property]=entry;if(--remaining===0){resolve(results)}}else{Promise.resolve(entry).then(fulfilledTo(property),onRejection)}}})}});define("rsvp/hash_settled",["./promise","./utils","exports"],function(__dependency1__,__dependency2__,__exports__){var Promise=__dependency1__["default"];var isNonThenable=__dependency2__.isNonThenable;var keysOf=__dependency2__.keysOf;__exports__["default"]=function hashSettled(object,label){return new Promise(function(resolve,reject){var results={};var keys=keysOf(object);var remaining=keys.length;var entry,property;if(remaining===0){resolve(results);return}function fulfilledResolver(property){return function(value){resolveAll(property,fulfilled(value))}}function rejectedResolver(property){return function(reason){resolveAll(property,rejected(reason))}}function resolveAll(property,value){results[property]=value;if(--remaining===0){resolve(results)}}for(var i=0;i<keys.length;i++){property=keys[i];entry=object[property];if(isNonThenable(entry)){resolveAll(property,fulfilled(entry))}else{Promise.resolve(entry).then(fulfilledResolver(property),rejectedResolver(property))}}})};function fulfilled(value){return{state:"fulfilled",value:value}}function rejected(reason){return{state:"rejected",reason:reason}}});define("rsvp/instrument",["./config","./utils","exports"],function(__dependency1__,__dependency2__,__exports__){var config=__dependency1__.config;var now=__dependency2__.now;__exports__["default"]=function instrument(eventName,promise,child){try{config.trigger(eventName,{guid:promise._guidKey+promise._id,eventName:eventName,detail:promise._detail,childGuid:child&&promise._guidKey+child._id,label:promise._label,timeStamp:now(),stack:new Error(promise._label).stack})}catch(error){setTimeout(function(){throw error},0)}}});define("rsvp/map",["./promise","./utils","exports"],function(__dependency1__,__dependency2__,__exports__){var Promise=__dependency1__["default"];var isArray=__dependency2__.isArray;var isFunction=__dependency2__.isFunction;__exports__["default"]=function map(promises,mapFn,label){return Promise.all(promises,label).then(function(results){if(!isArray(promises)){throw new TypeError("You must pass an array to map.")}if(!isFunction(mapFn)){throw new TypeError("You must pass a function to map's second argument.")}var resultLen=results.length,mappedResults=[],i;for(i=0;i<resultLen;i++){mappedResults.push(mapFn(results[i]))}return Promise.all(mappedResults,label)})}});define("rsvp/node",["./promise","./utils","exports"],function(__dependency1__,__dependency2__,__exports__){var Promise=__dependency1__["default"];var isArray=__dependency2__.isArray;__exports__["default"]=function denodeify(nodeFunc,argumentNames){return function(){var length=arguments.length;var nodeArgs=new Array(length);for(var i=0;i<length;i++){nodeArgs[i]=arguments[i]}var asArray=argumentNames===true;var asHash=isArray(argumentNames);var thisArg;if(!asArray&&!asHash&&argumentNames){console.warn("Deprecation: RSVP.denodeify() doesn't allow setting the "+'"this" binding anymore. Use yourFunction.bind(yourThis) instead.');thisArg=argumentNames}else{thisArg=this}return Promise.all(nodeArgs).then(function(nodeArgs$2){return new Promise(resolver);function resolver(resolve,reject){function callback(){var length$2=arguments.length;var args=new Array(length$2);for(var i$2=0;i$2<length$2;i$2++){args[i$2]=arguments[i$2]}var error=args[0];var value=args[1];if(error){reject(error)}else if(asArray){resolve(args.slice(1))}else if(asHash){var obj={};var successArguments=args.slice(1);var name;var i$3;for(i$3=0;i$3<argumentNames.length;i$3++){name=argumentNames[i$3];obj[name]=successArguments[i$3]}resolve(obj)}else{resolve(value)}}nodeArgs$2.push(callback);nodeFunc.apply(thisArg,nodeArgs$2)}})}}});define("rsvp/promise",["./config","./events","./instrument","./utils","./promise/cast","./promise/all","./promise/race","./promise/resolve","./promise/reject","exports"],function(__dependency1__,__dependency2__,__dependency3__,__dependency4__,__dependency5__,__dependency6__,__dependency7__,__dependency8__,__dependency9__,__exports__){var config=__dependency1__.config;var EventTarget=__dependency2__["default"];var instrument=__dependency3__["default"];var objectOrFunction=__dependency4__.objectOrFunction;var isFunction=__dependency4__.isFunction;var now=__dependency4__.now;var cast=__dependency5__["default"];var all=__dependency6__["default"];var race=__dependency7__["default"];var Resolve=__dependency8__["default"];var Reject=__dependency9__["default"];var guidKey="rsvp_"+now()+"-";var counter=0;function noop(){}__exports__["default"]=Promise;function Promise(resolver,label){if(!isFunction(resolver)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}if(!(this instanceof Promise)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}this._id=counter++;this._label=label;this._subscribers=[];if(config.instrument){instrument("created",this)}if(noop!==resolver){invokeResolver(resolver,this)}}function invokeResolver(resolver,promise){function resolvePromise(value){resolve(promise,value)}function rejectPromise(reason){reject(promise,reason)}try{resolver(resolvePromise,rejectPromise)}catch(e){rejectPromise(e)}}Promise.cast=cast;Promise.all=all;Promise.race=race;Promise.resolve=Resolve;Promise.reject=Reject;var PENDING=void 0;var SEALED=0;var FULFILLED=1;var REJECTED=2;function subscribe(parent,child,onFulfillment,onRejection){var subscribers=parent._subscribers;var length=subscribers.length;subscribers[length]=child;subscribers[length+FULFILLED]=onFulfillment;subscribers[length+REJECTED]=onRejection}function publish(promise,settled){var child,callback,subscribers=promise._subscribers,detail=promise._detail;if(config.instrument){instrument(settled===FULFILLED?"fulfilled":"rejected",promise)}for(var i=0;i<subscribers.length;i+=3){child=subscribers[i];callback=subscribers[i+settled];invokeCallback(settled,child,callback,detail)}promise._subscribers=null}Promise.prototype={constructor:Promise,_id:undefined,_guidKey:guidKey,_label:undefined,_state:undefined,_detail:undefined,_subscribers:undefined,_onerror:function(reason){config.trigger("error",reason)},then:function(onFulfillment,onRejection,label){var promise=this;this._onerror=null;var thenPromise=new this.constructor(noop,label);if(this._state){var callbacks=arguments;config.async(function invokePromiseCallback(){invokeCallback(promise._state,thenPromise,callbacks[promise._state-1],promise._detail)})}else{subscribe(this,thenPromise,onFulfillment,onRejection)}if(config.instrument){instrument("chained",promise,thenPromise)}return thenPromise},"catch":function(onRejection,label){return this.then(null,onRejection,label)},"finally":function(callback,label){var constructor=this.constructor;return this.then(function(value){return constructor.cast(callback()).then(function(){return value})},function(reason){return constructor.cast(callback()).then(function(){throw reason})},label)}};function invokeCallback(settled,promise,callback,detail){var hasCallback=isFunction(callback),value,error,succeeded,failed;if(hasCallback){try{value=callback(detail);succeeded=true}catch(e){failed=true;error=e}}else{value=detail;succeeded=true}if(handleThenable(promise,value)){return}else if(hasCallback&&succeeded){resolve(promise,value)}else if(failed){reject(promise,error)}else if(settled===FULFILLED){resolve(promise,value)}else if(settled===REJECTED){reject(promise,value)}}function handleThenable(promise,value){var then=null,resolved;try{if(promise===value){throw new TypeError("A promises callback cannot return that same promise.")}if(objectOrFunction(value)){then=value.then;if(isFunction(then)){then.call(value,function(val){if(resolved){return true}resolved=true;if(value!==val){resolve(promise,val)}else{fulfill(promise,val)}},function(val){if(resolved){return true}resolved=true;reject(promise,val)},"Settle: "+(promise._label||" unknown promise"));return true}}}catch(error){if(resolved){return true}reject(promise,error);return true}return false}function resolve(promise,value){if(promise===value){fulfill(promise,value)}else if(!handleThenable(promise,value)){fulfill(promise,value)}}function fulfill(promise,value){if(promise._state!==PENDING){return}promise._state=SEALED;promise._detail=value;config.async(publishFulfillment,promise)}function reject(promise,reason){if(promise._state!==PENDING){return}promise._state=SEALED;promise._detail=reason;config.async(publishRejection,promise)}function publishFulfillment(promise){publish(promise,promise._state=FULFILLED)}function publishRejection(promise){if(promise._onerror){promise._onerror(promise._detail)}publish(promise,promise._state=REJECTED)}});define("rsvp/promise/all",["../utils","exports"],function(__dependency1__,__exports__){var isArray=__dependency1__.isArray;var isNonThenable=__dependency1__.isNonThenable;__exports__["default"]=function all(entries,label){var Constructor=this;return new Constructor(function(resolve,reject){if(!isArray(entries)){throw new TypeError("You must pass an array to all.")}var remaining=entries.length;var results=new Array(remaining);var entry,pending=true;if(remaining===0){resolve(results);return}function fulfillmentAt(index){return function(value){results[index]=value;if(--remaining===0){resolve(results)}}}function onRejection(reason){remaining=0;reject(reason)}for(var index=0;index<entries.length;index++){entry=entries[index];if(isNonThenable(entry)){results[index]=entry;if(--remaining===0){resolve(results)}}else{Constructor.resolve(entry).then(fulfillmentAt(index),onRejection)}}},label)}});define("rsvp/promise/cast",["exports"],function(__exports__){__exports__["default"]=function cast(object,label){var Constructor=this;if(object&&typeof object==="object"&&object.constructor===Constructor){return object}return new Constructor(function(resolve){resolve(object)},label)}});define("rsvp/promise/race",["../utils","exports"],function(__dependency1__,__exports__){var isArray=__dependency1__.isArray;var isFunction=__dependency1__.isFunction;var isNonThenable=__dependency1__.isNonThenable;__exports__["default"]=function race(entries,label){var Constructor=this,entry;return new Constructor(function(resolve,reject){if(!isArray(entries)){throw new TypeError("You must pass an array to race.")}var pending=true;function onFulfillment(value){if(pending){pending=false;resolve(value)}}function onRejection(reason){if(pending){pending=false;reject(reason)}}for(var i=0;i<entries.length;i++){entry=entries[i];if(isNonThenable(entry)){pending=false;resolve(entry);return}else{Constructor.resolve(entry).then(onFulfillment,onRejection)}}},label)}});define("rsvp/promise/reject",["exports"],function(__exports__){__exports__["default"]=function reject(reason,label){var Constructor=this;return new Constructor(function(resolve,reject$2){reject$2(reason)},label)}});define("rsvp/promise/resolve",["exports"],function(__exports__){__exports__["default"]=function resolve(object,label){var Constructor=this;if(object&&typeof object==="object"&&object.constructor===Constructor){return object}return new Constructor(function(resolve$2){resolve$2(object)},label)}});define("rsvp/race",["./promise","exports"],function(__dependency1__,__exports__){var Promise=__dependency1__["default"];__exports__["default"]=function race(array,label){return Promise.race(array,label)}});define("rsvp/reject",["./promise","exports"],function(__dependency1__,__exports__){var Promise=__dependency1__["default"];__exports__["default"]=function reject(reason,label){return Promise.reject(reason,label)}});define("rsvp/resolve",["./promise","exports"],function(__dependency1__,__exports__){var Promise=__dependency1__["default"];__exports__["default"]=function resolve(value,label){return Promise.resolve(value,label)}});define("rsvp/rethrow",["exports"],function(__exports__){__exports__["default"]=function rethrow(reason){setTimeout(function(){throw reason});throw reason}});define("rsvp/utils",["exports"],function(__exports__){function objectOrFunction(x){return typeof x==="function"||typeof x==="object"&&x!==null}__exports__.objectOrFunction=objectOrFunction;function isFunction(x){return typeof x==="function"}__exports__.isFunction=isFunction;function isNonThenable(x){return!objectOrFunction(x)}__exports__.isNonThenable=isNonThenable;var _isArray;if(!Array.isArray){_isArray=function(x){return Object.prototype.toString.call(x)==="[object Array]"}}else{_isArray=Array.isArray}var isArray=_isArray;__exports__.isArray=isArray;var now=Date.now||function(){return(new Date).getTime()};__exports__.now=now;var keysOf=Object.keys||function(object){var result=[];for(var prop in object){result.push(prop)}return result};__exports__.keysOf=keysOf});define("rsvp",["./rsvp/promise","./rsvp/events","./rsvp/node","./rsvp/all","./rsvp/all_settled","./rsvp/race","./rsvp/hash","./rsvp/hash_settled","./rsvp/rethrow","./rsvp/defer","./rsvp/config","./rsvp/map","./rsvp/resolve","./rsvp/reject","./rsvp/filter","./rsvp/asap","exports"],function(__dependency1__,__dependency2__,__dependency3__,__dependency4__,__dependency5__,__dependency6__,__dependency7__,__dependency8__,__dependency9__,__dependency10__,__dependency11__,__dependency12__,__dependency13__,__dependency14__,__dependency15__,__dependency16__,__exports__){var Promise=__dependency1__["default"];var EventTarget=__dependency2__["default"];var denodeify=__dependency3__["default"];var all=__dependency4__["default"];var allSettled=__dependency5__["default"];var race=__dependency6__["default"];var hash=__dependency7__["default"];var hashSettled=__dependency8__["default"];var rethrow=__dependency9__["default"];var defer=__dependency10__["default"];var config=__dependency11__.config;var configure=__dependency11__.configure;var map=__dependency12__["default"];var resolve=__dependency13__["default"];var reject=__dependency14__["default"];var filter=__dependency15__["default"];var asap=__dependency16__["default"];config.async=asap;function async(callback,arg){config.async(callback,arg)}function on(){config.on.apply(config,arguments)}function off(){config.off.apply(config,arguments)}if(typeof window!=="undefined"&&typeof window.__PROMISE_INSTRUMENTATION__==="object"){var callbacks=window.__PROMISE_INSTRUMENTATION__;configure("instrument",true);for(var eventName in callbacks){if(callbacks.hasOwnProperty(eventName)){on(eventName,callbacks[eventName])}}}__exports__.Promise=Promise;__exports__.EventTarget=EventTarget;__exports__.all=all;__exports__.allSettled=allSettled;__exports__.race=race;__exports__.hash=hash;__exports__.hashSettled=hashSettled;__exports__.rethrow=rethrow;__exports__.defer=defer;__exports__.denodeify=denodeify;__exports__.configure=configure;__exports__.on=on;__exports__.off=off;__exports__.resolve=resolve;__exports__.reject=reject;__exports__.async=async;__exports__.map=map;__exports__.filter=filter});
define('canvas_quiz_statistics/config/initializers/rsvp',[ 'rsvp' ], function(RSVP) {
  RSVP.on('error', function(e) {
    console.error('RSVP error:', JSON.stringify(e));

    if (e && e.message) {
      console.error(e.message);
    }
    if (e && e.stack) {
      console.error(e.stack);
    }
  });

  return RSVP;
});
define('canvas_quiz_statistics/util/xhr_request',['rsvp'],function(RSVP) {

  var successCodes = [ 200, 204 ];

  var parse = function(xhr) {
    var payload;

    if (xhr.responseJSON) {
      return xhr.responseJSON;
    }
    else if ((xhr.responseText || '').length) {
      payload = (xhr.responseText || '').replace('while(1);', '');

      try {
        payload = JSON.parse(payload);
      } catch(e) {
        payload = xhr.responseText;
      }
    }
    else {
      payload = undefined;
    }

    return payload;
  };

  return function xhrRequest(options) {
    var url = options.url;
    var method = options.type || 'GET';
    var async = options.async === undefined ? true : !!options.async;
    var data = options.data;

    return new RSVP.Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        // all is well
        if (xhr.readyState === 4) {
          if (successCodes.indexOf(xhr.status) > -1) {
            resolve(parse(xhr), xhr.status, xhr);
          }
          else {
            reject(parse(xhr), xhr.status, xhr);
          }
        }
      };

      xhr.open(method, url, async);

      if (options.headers) {
        Object.keys(options.headers).forEach(function(header) {
          xhr.setRequestHeader(header, options.headers[header]);
        });
      }

      xhr.send(JSON.stringify(data));
    });
  };
});

define('canvas_quiz_statistics/core/adapter',['../util/xhr_request','../config','rsvp'],function(rawAjax,config,RSVP) {




  var Adapter = {
    request: function(options) {
      var ajax = config.ajax || rawAjax;

      options.headers = options.headers || {};
      options.headers['Content-Type'] = 'application/json';
      options.headers.Accept = 'application/vnd.api+json';

      if (config.apiToken) {
        options.headers.Authorization = 'Bearer ' + config.apiToken;
      }

      if (options.type !== 'GET' && options.data) {
        options.data = JSON.stringify(options.data);
      }

      return RSVP.Promise.cast(ajax(options));
    }
  };

  return Adapter;
});
define('canvas_quiz_statistics/config/initializers/backbone',['../../core/adapter','backbone'],function(Adapter,Backbone) {



  Backbone.ajax = Adapter.request;
});
define('canvas_quiz_statistics/config/initializer',['./initializers/d3','./initializers/rsvp','./initializers/backbone'],function(d3,RSVP,Backbone) {




  return function initializeApp() {
    return RSVP.resolve();
  };
});

define('canvas_quiz_statistics/mixins/chart',['react'],function(React) {


  var getChartNode = function(component) {
    var ref = (component.refs || {}).chart || component;
    return ref.getDOMNode();
  };

  var ChartMixin = {
    defaults: {
      updateChart: function(props) {
        this.removeChart();
        this.__svg = this.createChart(getChartNode(this), props);
      },

      render: function() {
        return React.DOM.svg({ className: "chart" });
      },

      removeChart: function() {
        if (this.__svg) {
          this.__svg.remove();
          delete this.__svg;
        }
      }
    },

    addTitle: function(svg, title) {
      svg.append('title').text(title);
    },

    addDescription: function(svg, description) {
      svg.append('text')
        .attr('fill', 'transparent')
        .attr('font-size', '0px')
        .text(description);
    },

    mixin: {
      componentWillMount: function() {
        if (typeof this.createChart !== 'function') {
          throw "ChartMixin: you must define a createChart() method that returns a d3 element";
        }

        if (!this.updateChart) {
          this.updateChart = ChartMixin.defaults.updateChart;
        }

        if (!this.removeChart) {
          this.removeChart = ChartMixin.defaults.removeChart;
        }
      },

      componentDidMount: function() {
        this.__svg = this.createChart(getChartNode(this), this.props);
      },

      shouldComponentUpdate: function(nextProps/*, nextState*/) {
        this.updateChart(nextProps);
        return false;
      },

      componentWillUnmount: function() {
        this.removeChart();
      },

    }
  };

  return ChartMixin;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/summary/score_percentile_chart',['react','../../mixins/chart','d3','i18n!quiz_statistics.summary'],function(React,ChartMixin,d3,I18n) {




  var max = d3.max;
  var sum = d3.sum;

  var MARGIN_T = 0;
  var MARGIN_R = 0;
  var MARGIN_B = 40;
  var MARGIN_L = -40;
  var WIDTH = 960;
  var HEIGHT = 220;
  var BAR_WIDTH = 10;
  var BAR_MARGIN = 0.25;

  var ScorePercentileChart = React.createClass({displayName: 'ScorePercentileChart',
    mixins: [ ChartMixin.mixin ],

    propTypes: {
      scores: React.PropTypes.object.isRequired,
      scoreAverage: React.PropTypes.number.isRequired,
      pointsPossible: React.PropTypes.number.isRequired,
    },

    getDefaultProps: function() {
      return {
        scores: {}
      };
    },

    createChart: function(node, props) {
      var svg, width, height, x, y, xAxis;
      var highest;
      var visibilityThreshold;
      var data = this.chartData(props);
      var avgScore = props.scoreAverage / props.pointsPossible * 100.0;
      var labelOptions = this.calculateStudentStatistics(avgScore, data);

      width = WIDTH - MARGIN_L - MARGIN_R;
      height = HEIGHT - MARGIN_T - MARGIN_B;
      highest = max(data);

      x = d3.scale.ordinal().rangeRoundBands([0, BAR_WIDTH * data.length], BAR_MARGIN);
      y = d3.scale.linear().range([0, highest]).rangeRound([height, 0]);

      x.domain(data.map(function(d, i) {
        return i;
      }));

      y.domain([0, highest]);

      xAxis = d3.svg.axis().scale(x).orient("bottom").tickValues(d3.range(0, 101, 10)).tickFormat(function(d) {
        return d + '%';
      });

      svg = d3.select(node)
        .attr('role', 'document')
        .attr('aria-role', 'document')
        .attr('width', width + MARGIN_L + MARGIN_R)
        .attr('height', height + MARGIN_T + MARGIN_B)
        .attr('viewBox', "0 0 " + (width + MARGIN_L + MARGIN_R) + " " + (height + MARGIN_T + MARGIN_B))
        .attr('preserveAspectRatio', 'xMinYMax')
          .append('g')
          .attr('transform', "translate(" + MARGIN_L + "," + MARGIN_T + ")")

      ChartMixin.addTitle(svg, I18n.t('chart_title', 'Score percentiles chart'));
      ChartMixin.addDescription(svg, I18n.t('audible_chart_description',
      '%{above_average} students scored above or at the average, and %{below_average} below.', {
        above_average: labelOptions.aboveAverage,
        below_average: labelOptions.belowAverage
      }));

      svg.append('g')
        .attr('class', 'x axis')
        .attr('aria-hidden', true)
        .attr('transform', "translate(0," + height + ")")
        .call(xAxis);

      visibilityThreshold = Math.min(highest / 100, 0.5);

      svg.selectAll('rect.bar')
        .data(data)
        .enter()
          .append('rect')
            .attr("class", 'bar')
            .attr('x', function(d, i) {
              return x(i);
            }).attr('width', x.rangeBand).attr('y', function(d) {
              return y(d + visibilityThreshold);
            }).attr('height', function(d) {
              return height - y(d + visibilityThreshold);
            });

      return svg;
    },

    /**
     * Calculate the number of students who scored above, or at, the average
     * and those who did lower.
     *
     * @param  {Number} _avgScore
     * @param  {Number[]} scores
     *         The flattened score percentile data-set (see #chartData()).
     *
     * @return {Object} out
     * @return {Number} out.aboveAverage
     * @return {Number} out.belowAverage
     */
    calculateStudentStatistics: function(_avgScore, scores) {
      var avgScore = Math.round(_avgScore);

      return {
        aboveAverage: scores.filter(function(__y, percentile) {
          return percentile >= avgScore;
        }).reduce(function(count, y) {
          return count + y;
        }, 0),

        belowAverage: scores.filter(function(__y, percentile) {
          return percentile < avgScore;
        }).reduce(function(count, y) {
          return count + y;
        }, 0)
      };
    },

    chartData: function(props) {
      var percentile, upperBound;
      var set = [];
      var scores = props.scores || {};
      var highest = max(Object.keys(scores).map(function(score) {
        return parseInt(score, 10);
      }));

      upperBound = max([101, highest]);

      for (percentile = 0; percentile < upperBound; ++percentile) {
        set[percentile] = scores[''+percentile] || 0;
      }

      // merge right outliers with 100%
      set[100] = sum(set.splice(100, set.length));

      return set;
    },

    render: ChartMixin.defaults.render
  });

  return ScorePercentileChart;
});
define('canvas_quiz_statistics/core/dispatcher',['rsvp','../config'],function(RSVP,config) {


  var singleton;
  var callbacks = {};
  var gActionIndex = 0;

  var Dispatcher = function() {
    return this;
  };

  Dispatcher.prototype.dispatch = function(action, params) {
    var service = RSVP.defer();
    var actionIndex = ++gActionIndex;
    var callback = callbacks[action];

    if (callback) {
      callback(params, service.resolve, service.reject);
    }
    else {
      console.assert(false, 'No action handler registered to:', action);
      config.onError('No action handler registered to:', action);
      service.reject('Unknown action "' + action + '"');
    }

    return {
      promise: service.promise,
      index: actionIndex
    };
  };

  Dispatcher.prototype.register = function(action, callback) {
    if (callbacks[action]) {
      throw new Error("A handler is already registered to '" + action + "'");
    }

    callbacks[action] = callback;
  };

  singleton = new Dispatcher();

  return singleton;
});
define('canvas_quiz_statistics/mixins/components/actor',['../../core/dispatcher'],function(Dispatcher) {


  var ActorMixin = {
    getInitialState: function() {
      return {
        actionIndex: null
      };
    },

    getDefaultProps: function() {
      return {
        storeError: null
      };
    },

    componentWillReceiveProps: function(nextProps) {
      var storeError = nextProps.storeError;

      if (storeError && storeError.actionIndex === this.state.actionIndex) {
        this.setState({ storeError: storeError });
      }
    },

    componentDidUpdate: function() {
      if (this.state.storeError) {
        if (this.onStoreError) {
          this.onStoreError(this.state.storeError);
        }

        // Consume it so that the handling code doesn't get called repeatedly.
        this.setState({ storeError: null });
      }
    },

    componentWillUnmount: function() {
      this.lastAction = undefined;
    },

    /**
     * Convenient method for consuming events.
     *
     * @param {Event} e
     *        Something that responds to #preventDefault().
     */
    consume: function(e) {
      if (e) {
        e.preventDefault();
      }
    },

    /**
     * Send an action via the Dispatcher, track the action promise, and any
     * error the handler raises.
     *
     * A reference to the action handler's promise will be kept in
     * `this.lastAction`. The index of the action is tracked in
     * this.state.actionIndex.
     *
     * If an error is raised, it will be accessible in `this.state.storeError`.
     *
     * @param {String} action (required)
     *        Unique action identifier. Must be scoped by the store key, e.g:
     *        "categories:save", or "users:changePassword".
     *
     * @param {Object} [params={}]
     *        Action payload.
     *
     * @param {Object} [options={}]
     * @param {Boolean} [options.track=true]
     *        Pass as false if you don't want the mixin to perform any tracking.
     *
     * @return {RSVP.Promise}
     *         The action promise which will fulfill if the action succeeds,
     *         or fail if the action doesn't. Failure will be presented by
     *         an error that adheres to the UIError interface.
     */
    sendAction: function(action, params, options) {
      var service;
      var setState;

      service = Dispatcher.dispatch(action, params);

      if (options && options.track === false) {
        return;
      }

      setState = this.setState.bind(this);
      this.lastAction = service.promise;

      setState({
        actionIndex: service.index
      });

      service.promise.then(null, function(error) {
        setState({
          storeError: {
            actionIndex: service.index,
            error: error
          }
        });
      });

      return service.promise;
    }
  };

  return ActorMixin;
});
define('canvas_quiz_statistics/ext/react',['react','../mixins/components/actor'],function(React,ActorMixin) {



  if (!React.addons) {
    React.addons = {};
  }

  React.addons.ActorMixin = ActorMixin;

  return React;
});

define('canvas_quiz_statistics/util/date_time_helpers',['jquery','jquery/instructure_date_and_time'],function($,Void) {



  var exports = {};
  exports.friendlyDatetime = function(dateTime, perspective) {
    var muddledDateTime = dateTime;

    if (muddledDateTime) {
      muddledDateTime.clone = function() {
        return new Date(muddledDateTime.getTime());
      };
    }

    return $.friendlyDatetime(muddledDateTime, perspective);
  };

  exports.fudgeDateForProfileTimezone = $.fudgeDateForProfileTimezone;

  return exports;
});
define('canvas_quiz_statistics/models/quiz_report_descriptor',['i18n!quiz_reports','../util/date_time_helpers'],function(I18n,DateTimeHelpers) {



  var STUDENT_ANALYSIS = 'student_analysis';
  var ITEM_ANALYSIS = 'item_analysis';
  var friendlyDatetime = DateTimeHelpers.friendlyDatetime;
  var fudgeDateForProfileTimezone = DateTimeHelpers.fudgeDateForProfileTimezone;

  return {
    getInteractionLabel: function(report) {
      var label;
      var type = report.reportType;

      if (report.isGenerated) {
        if (type === STUDENT_ANALYSIS) {
          label = I18n.t('download_student_analysis',
            'Download student analysis report.');
        } else if (type === ITEM_ANALYSIS) {
          label = I18n.t('download_item_analysis',
            'Download item analysis report.');
        }
      }
      else {
        if (type === STUDENT_ANALYSIS) {
          label = I18n.t('generate_student_analysis_report',
            'Generate student analysis report.');
        }
        else if (type === ITEM_ANALYSIS) {
          label = I18n.t('generate_item_analysis_report',
            'Generate item analysis report.');
        }
      }

      return label;
    },

    getDetailedStatusLabel: function(report, justBeenGenerated) {
      var generatedAt, completion, label;

      if (!report.generatable) {
        label = I18n.t('non_generatable_report_notice',
          'Report can not be generated for Survey Quizzes.');
      }
      else if (report.isGenerated) {
        generatedAt = friendlyDatetime(fudgeDateForProfileTimezone(report.file.createdAt));

        if (justBeenGenerated) {
          label = I18n.t('generation_complete', 'Report has been generated.');
        }
        else {
          label = I18n.t('generated_at', 'Generated: %{date}', {
            date: generatedAt
          });
        }
      }
      else if (report.isGenerating) {
        completion = report.progress.completion;

        if (completion < 50) {
          label = I18n.t('generation_started', 'Report is being generated.');
        }
        else if (completion < 75) {
          label = I18n.t('generation_halfway', 'Less than half-way to go.');
        }
        else {
          label = I18n.t('generation_almost_done', 'Almost done.');
        }
      } else {
        label = I18n.t('generatable', 'Report has never been generated.');
      }

      return label;
    }
  };
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/summary/report/status',['react','i18n!quiz_reports','../../../models/quiz_report_descriptor'],function(React,I18n,Descriptor) {




  var Status = React.createClass({displayName: 'Status',
    propTypes: {
      generatable: React.PropTypes.bool,
      isGenerated: React.PropTypes.bool,

      file: React.PropTypes.shape({
        createdAt: React.PropTypes.string,
      }),

      progress: React.PropTypes.shape({
        workflowState: React.PropTypes.string,
        completion: React.PropTypes.number,
      }),
    },

    getInitialState: function() {
      return {
        justBeenGenerated: false
      };
    },

    getDefaultProps: function() {
      return {
        generatable: true,
        file: {},
        progress: {}
      };
    },

    componentWillReceiveProps: function(nextProps) {
      if (this.props.isGenerating && nextProps.isGenerated) {
        this.setState({
          justBeenGenerated: true
        });
      }
    },

    render: function() {
      var label = Descriptor.getDetailedStatusLabel(this.props, this.state.justBeenGenerated);

      return (
        React.DOM.div({className: "quiz-report-status"}, 
          this.props.isGenerating ? this.renderProgress(label) : label
        )
      );
    },

    renderProgress: function(label) {
      var completion = this.props.progress.completion;

      return (
        React.DOM.div({className: "auxiliary"}, 
          React.DOM.p(null, 
            React.DOM.span({className: "screenreader-only", children: label}), 
            React.DOM.span({'aria-hidden': "true"}, 
              I18n.t('generating', 'Report is being generated...')
            )
          ), 

          React.DOM.div({className: "progress"}, 
            React.DOM.div({className: "bar", style: { width: (completion || 0) + '%'}})
          )
        )
      );
    }
  });

  return Status;
});
/*
 * qTip2 - Pretty powerful tooltips - v2.2.0
 * http://qtip2.com
 *
 * Copyright (c) 2014 Craig Michael Thompson
 * Released under the MIT, GPL licenses
 * http://jquery.org/license
 *
 * Date: Mon Mar 17 2014 08:13 EDT-0400
 * Plugins: tips viewport svg
 * Styles: None
 */
/*global window: false, jQuery: false, console: false, define: false */

/* Cache window, document, undefined */
(function( window, document, undefined ) {

// Uses AMD or browser globals to create a jQuery plugin.
(function( factory ) {
	
	if(typeof define === 'function' && define.amd) {
		define('qtip',['jquery'], factory);
	}
	else if(jQuery && !jQuery.fn.qtip) {
		factory(jQuery);
	}
}
(function($) {
	 // Enable ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/

;// Munge the primitives - Paul Irish tip
var TRUE = true,
FALSE = false,
NULL = null,

// Common variables
X = 'x', Y = 'y',
WIDTH = 'width',
HEIGHT = 'height',

// Positioning sides
TOP = 'top',
LEFT = 'left',
BOTTOM = 'bottom',
RIGHT = 'right',
CENTER = 'center',

// Position adjustment types
FLIP = 'flip',
FLIPINVERT = 'flipinvert',
SHIFT = 'shift',

// Shortcut vars
QTIP, PROTOTYPE, CORNER, CHECKS,
PLUGINS = {},
NAMESPACE = 'qtip',
ATTR_HAS = 'data-hasqtip',
ATTR_ID = 'data-qtip-id',
WIDGET = ['ui-widget', 'ui-tooltip'],
SELECTOR = '.'+NAMESPACE,
INACTIVE_EVENTS = 'click dblclick mousedown mouseup mousemove mouseleave mouseenter'.split(' '),

CLASS_FIXED = NAMESPACE+'-fixed',
CLASS_DEFAULT = NAMESPACE + '-default',
CLASS_FOCUS = NAMESPACE + '-focus',
CLASS_HOVER = NAMESPACE + '-hover',
CLASS_DISABLED = NAMESPACE+'-disabled',

replaceSuffix = '_replacedByqTip',
oldtitle = 'oldtitle',
trackingBound,

// Browser detection
BROWSER = {
	/*
	 * IE version detection
	 *
	 * Adapted from: http://ajaxian.com/archives/attack-of-the-ie-conditional-comment
	 * Credit to James Padolsey for the original implemntation!
	 */
	ie: (function(){
		var v = 3, div = document.createElement('div');
		while ((div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->')) {
			if(!div.getElementsByTagName('i')[0]) { break; }
		}
		return v > 4 ? v : NaN;
	}()),
 
	/*
	 * iOS version detection
	 */
	iOS: parseFloat( 
		('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
		.replace('undefined', '3_2').replace('_', '.').replace('_', '')
	) || FALSE
};

;function QTip(target, options, id, attr) {
	// Elements and ID
	this.id = id;
	this.target = target;
	this.tooltip = NULL;
	this.elements = { target: target };

	// Internal constructs
	this._id = NAMESPACE + '-' + id;
	this.timers = { img: {} };
	this.options = options;
	this.plugins = {};

	// Cache object
	this.cache = {
		event: {},
		target: $(),
		disabled: FALSE,
		attr: attr,
		onTooltip: FALSE,
		lastClass: ''
	};

	// Set the initial flags
	this.rendered = this.destroyed = this.disabled = this.waiting = 
		this.hiddenDuringWait = this.positioning = this.triggering = FALSE;
}
PROTOTYPE = QTip.prototype;

PROTOTYPE._when = function(deferreds) {
	return $.when.apply($, deferreds);
};

PROTOTYPE.render = function(show) {
	if(this.rendered || this.destroyed) { return this; } // If tooltip has already been rendered, exit

	var self = this,
		options = this.options,
		cache = this.cache,
		elements = this.elements,
		text = options.content.text,
		title = options.content.title,
		button = options.content.button,
		posOptions = options.position,
		namespace = '.'+this._id+' ',
		deferreds = [],
		tooltip;

	// Add ARIA attributes to target
	$.attr(this.target[0], 'aria-describedby', this._id);

	// Create tooltip element
	this.tooltip = elements.tooltip = tooltip = $('<div/>', {
		'id': this._id,
		'class': [ NAMESPACE, CLASS_DEFAULT, options.style.classes, NAMESPACE + '-pos-' + options.position.my.abbrev() ].join(' '),
		'width': options.style.width || '',
		'height': options.style.height || '',
		'tracking': posOptions.target === 'mouse' && posOptions.adjust.mouse,

		/* ARIA specific attributes */
		'role': 'alert',
		'aria-live': 'polite',
		'aria-atomic': FALSE,
		'aria-describedby': this._id + '-content',
		'aria-hidden': TRUE
	})
	.toggleClass(CLASS_DISABLED, this.disabled)
	.attr(ATTR_ID, this.id)
	.data(NAMESPACE, this)
	.appendTo(posOptions.container)
	.append(
		// Create content element
		elements.content = $('<div />', {
			'class': NAMESPACE + '-content',
			'id': this._id + '-content',
			'aria-atomic': TRUE
		})
	);

	// Set rendered flag and prevent redundant reposition calls for now
	this.rendered = -1;
	this.positioning = TRUE;

	// Create title...
	if(title) {
		this._createTitle();

		// Update title only if its not a callback (called in toggle if so)
		if(!$.isFunction(title)) {
			deferreds.push( this._updateTitle(title, FALSE) );
		}
	}

	// Create button
	if(button) { this._createButton(); }

	// Set proper rendered flag and update content if not a callback function (called in toggle)
	if(!$.isFunction(text)) {
		deferreds.push( this._updateContent(text, FALSE) );
	}
	this.rendered = TRUE;

	// Setup widget classes
	this._setWidget();

	// Initialize 'render' plugins
	$.each(PLUGINS, function(name) {
		var instance;
		if(this.initialize === 'render' && (instance = this(self))) {
			self.plugins[name] = instance;
		}
	});

	// Unassign initial events and assign proper events
	this._unassignEvents();
	this._assignEvents();

	// When deferreds have completed
	this._when(deferreds).then(function() {
		// tooltiprender event
		self._trigger('render');

		// Reset flags
		self.positioning = FALSE;

		// Show tooltip if not hidden during wait period
		if(!self.hiddenDuringWait && (options.show.ready || show)) {
			self.toggle(TRUE, cache.event, FALSE);
		}
		self.hiddenDuringWait = FALSE;
	});

	// Expose API
	QTIP.api[this.id] = this;

	return this;
};

PROTOTYPE.destroy = function(immediate) {
	// Set flag the signify destroy is taking place to plugins
	// and ensure it only gets destroyed once!
	if(this.destroyed) { return this.target; }

	function process() {
		if(this.destroyed) { return; }
		this.destroyed = TRUE;
		
		var target = this.target,
			title = target.attr(oldtitle);

		// Destroy tooltip if rendered
		if(this.rendered) {
			this.tooltip.stop(1,0).find('*').remove().end().remove();
		}

		// Destroy all plugins
		$.each(this.plugins, function(name) {
			this.destroy && this.destroy();
		});

		// Clear timers and remove bound events
		clearTimeout(this.timers.show);
		clearTimeout(this.timers.hide);
		this._unassignEvents();

		// Remove api object and ARIA attributes
		target.removeData(NAMESPACE)
			.removeAttr(ATTR_ID)
			.removeAttr(ATTR_HAS)
			.removeAttr('aria-describedby');

		// Reset old title attribute if removed
		if(this.options.suppress && title) {
			target.attr('title', title).removeAttr(oldtitle);
		}

		// Remove qTip events associated with this API
		this._unbind(target);

		// Remove ID from used id objects, and delete object references
		// for better garbage collection and leak protection
		this.options = this.elements = this.cache = this.timers = 
			this.plugins = this.mouse = NULL;

		// Delete epoxsed API object
		delete QTIP.api[this.id];
	}

	// If an immediate destory is needed
	if((immediate !== TRUE || this.triggering === 'hide') && this.rendered) {
		this.tooltip.one('tooltiphidden', $.proxy(process, this));
		!this.triggering && this.hide();
	}

	// If we're not in the process of hiding... process
	else { process.call(this); }

	return this.target;
};

;function invalidOpt(a) {
	return a === NULL || $.type(a) !== 'object';
}

function invalidContent(c) {
	return !( $.isFunction(c) || (c && c.attr) || c.length || ($.type(c) === 'object' && (c.jquery || c.then) ));
}

// Option object sanitizer
function sanitizeOptions(opts) {
	var content, text, ajax, once;

	if(invalidOpt(opts)) { return FALSE; }

	if(invalidOpt(opts.metadata)) {
		opts.metadata = { type: opts.metadata };
	}

	if('content' in opts) {
		content = opts.content;

		if(invalidOpt(content) || content.jquery || content.done) {
			content = opts.content = {
				text: (text = invalidContent(content) ? FALSE : content)
			};
		}
		else { text = content.text; }

		// DEPRECATED - Old content.ajax plugin functionality
		// Converts it into the proper Deferred syntax
		if('ajax' in content) {
			ajax = content.ajax;
			once = ajax && ajax.once !== FALSE;
			delete content.ajax;

			content.text = function(event, api) {
				var loading = text || $(this).attr(api.options.content.attr) || 'Loading...',

				deferred = $.ajax(
					$.extend({}, ajax, { context: api })
				)
				.then(ajax.success, NULL, ajax.error)
				.then(function(content) {
					if(content && once) { api.set('content.text', content); }
					return content;
				},
				function(xhr, status, error) {
					if(api.destroyed || xhr.status === 0) { return; }
					api.set('content.text', status + ': ' + error);
				});

				return !once ? (api.set('content.text', loading), deferred) : loading;
			};
		}

		if('title' in content) {
			if(!invalidOpt(content.title)) {
				content.button = content.title.button;
				content.title = content.title.text;
			}

			if(invalidContent(content.title || FALSE)) {
				content.title = FALSE;
			}
		}
	}

	if('position' in opts && invalidOpt(opts.position)) {
		opts.position = { my: opts.position, at: opts.position };
	}

	if('show' in opts && invalidOpt(opts.show)) {
		opts.show = opts.show.jquery ? { target: opts.show } : 
			opts.show === TRUE ? { ready: TRUE } : { event: opts.show };
	}

	if('hide' in opts && invalidOpt(opts.hide)) {
		opts.hide = opts.hide.jquery ? { target: opts.hide } : { event: opts.hide };
	}

	if('style' in opts && invalidOpt(opts.style)) {
		opts.style = { classes: opts.style };
	}

	// Sanitize plugin options
	$.each(PLUGINS, function() {
		this.sanitize && this.sanitize(opts);
	});

	return opts;
}

// Setup builtin .set() option checks
CHECKS = PROTOTYPE.checks = {
	builtin: {
		// Core checks
		'^id$': function(obj, o, v, prev) {
			var id = v === TRUE ? QTIP.nextid : v,
				new_id = NAMESPACE + '-' + id;

			if(id !== FALSE && id.length > 0 && !$('#'+new_id).length) {
				this._id = new_id;

				if(this.rendered) {
					this.tooltip[0].id = this._id;
					this.elements.content[0].id = this._id + '-content';
					this.elements.title[0].id = this._id + '-title';
				}
			}
			else { obj[o] = prev; }
		},
		'^prerender': function(obj, o, v) {
			v && !this.rendered && this.render(this.options.show.ready);
		},

		// Content checks
		'^content.text$': function(obj, o, v) {
			this._updateContent(v);
		},
		'^content.attr$': function(obj, o, v, prev) {
			if(this.options.content.text === this.target.attr(prev)) {
				this._updateContent( this.target.attr(v) );
			}
		},
		'^content.title$': function(obj, o, v) {
			// Remove title if content is null
			if(!v) { return this._removeTitle(); }

			// If title isn't already created, create it now and update
			v && !this.elements.title && this._createTitle();
			this._updateTitle(v);
		},
		'^content.button$': function(obj, o, v) {
			this._updateButton(v);
		},
		'^content.title.(text|button)$': function(obj, o, v) {
			this.set('content.'+o, v); // Backwards title.text/button compat
		}, 

		// Position checks
		'^position.(my|at)$': function(obj, o, v){
			'string' === typeof v && (obj[o] = new CORNER(v, o === 'at'));
		},
		'^position.container$': function(obj, o, v){
			this.rendered && this.tooltip.appendTo(v);
		},

		// Show checks
		'^show.ready$': function(obj, o, v) {
			v && (!this.rendered && this.render(TRUE) || this.toggle(TRUE));
		},

		// Style checks
		'^style.classes$': function(obj, o, v, p) {
			this.rendered && this.tooltip.removeClass(p).addClass(v);
		},
		'^style.(width|height)': function(obj, o, v) {
			this.rendered && this.tooltip.css(o, v);
		},
		'^style.widget|content.title': function() {
			this.rendered && this._setWidget();
		},
		'^style.def': function(obj, o, v) {
			this.rendered && this.tooltip.toggleClass(CLASS_DEFAULT, !!v);
		},

		// Events check
		'^events.(render|show|move|hide|focus|blur)$': function(obj, o, v) {
			this.rendered && this.tooltip[($.isFunction(v) ? '' : 'un') + 'bind']('tooltip'+o, v);
		},

		// Properties which require event reassignment
		'^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)': function() {
			if(!this.rendered) { return; }

			// Set tracking flag
			var posOptions = this.options.position;
			this.tooltip.attr('tracking', posOptions.target === 'mouse' && posOptions.adjust.mouse);

			// Reassign events
			this._unassignEvents();
			this._assignEvents();
		}
	}
};

// Dot notation converter
function convertNotation(options, notation) {
	var i = 0, obj, option = options,

	// Split notation into array
	levels = notation.split('.');

	// Loop through
	while( option = option[ levels[i++] ] ) {
		if(i < levels.length) { obj = option; }
	}

	return [obj || options, levels.pop()];
}

PROTOTYPE.get = function(notation) {
	if(this.destroyed) { return this; }

	var o = convertNotation(this.options, notation.toLowerCase()),
		result = o[0][ o[1] ];

	return result.precedance ? result.string() : result;
};

function setCallback(notation, args) {
	var category, rule, match;

	for(category in this.checks) {
		for(rule in this.checks[category]) {
			if(match = (new RegExp(rule, 'i')).exec(notation)) {
				args.push(match);

				if(category === 'builtin' || this.plugins[category]) {
					this.checks[category][rule].apply(
						this.plugins[category] || this, args
					);
				}
			}
		}
	}
}

var rmove = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
	rrender = /^prerender|show\.ready/i;

PROTOTYPE.set = function(option, value) {
	if(this.destroyed) { return this; }

	var rendered = this.rendered,
		reposition = FALSE,
		options = this.options,
		checks = this.checks,
		name;

	// Convert singular option/value pair into object form
	if('string' === typeof option) {
		name = option; option = {}; option[name] = value;
	}
	else { option = $.extend({}, option); }

	// Set all of the defined options to their new values
	$.each(option, function(notation, value) {
		if(rendered && rrender.test(notation)) {
			delete option[notation]; return;
		}

		// Set new obj value
		var obj = convertNotation(options, notation.toLowerCase()), previous;
		previous = obj[0][ obj[1] ];
		obj[0][ obj[1] ] = value && value.nodeType ? $(value) : value;

		// Also check if we need to reposition
		reposition = rmove.test(notation) || reposition;

		// Set the new params for the callback
		option[notation] = [obj[0], obj[1], value, previous];
	});

	// Re-sanitize options
	sanitizeOptions(options);

	/*
	 * Execute any valid callbacks for the set options
	 * Also set positioning flag so we don't get loads of redundant repositioning calls.
	 */
	this.positioning = TRUE;
	$.each(option, $.proxy(setCallback, this));
	this.positioning = FALSE;

	// Update position if needed
	if(this.rendered && this.tooltip[0].offsetWidth > 0 && reposition) {
		this.reposition( options.position.target === 'mouse' ? NULL : this.cache.event );
	}

	return this;
};

;PROTOTYPE._update = function(content, element, reposition) {
	var self = this,
		cache = this.cache;

	// Make sure tooltip is rendered and content is defined. If not return
	if(!this.rendered || !content) { return FALSE; }

	// Use function to parse content
	if($.isFunction(content)) {
		content = content.call(this.elements.target, cache.event, this) || '';
	}

	// Handle deferred content
	if($.isFunction(content.then)) {
		cache.waiting = TRUE;
		return content.then(function(c) {
			cache.waiting = FALSE;
			return self._update(c, element);
		}, NULL, function(e) {
			return self._update(e, element);
		});
	}

	// If content is null... return false
	if(content === FALSE || (!content && content !== '')) { return FALSE; }

	// Append new content if its a DOM array and show it if hidden
	if(content.jquery && content.length > 0) {
		element.empty().append(
			content.css({ display: 'block', visibility: 'visible' })
		);
	}

	// Content is a regular string, insert the new content
	else { element.html(content); }

	// Wait for content to be loaded, and reposition
	return this._waitForContent(element).then(function(images) {
		if(images.images && images.images.length && self.rendered && self.tooltip[0].offsetWidth > 0) {
			self.reposition(cache.event, !images.length);
		}
	});
};

PROTOTYPE._waitForContent = function(element) {
	var cache = this.cache;
	
	// Set flag
	cache.waiting = TRUE;

	// If imagesLoaded is included, ensure images have loaded and return promise
	return ( $.fn.imagesLoaded ? element.imagesLoaded() : $.Deferred().resolve([]) )
		.done(function() { cache.waiting = FALSE; })
		.promise();
};

PROTOTYPE._updateContent = function(content, reposition) {
	this._update(content, this.elements.content, reposition);
};

PROTOTYPE._updateTitle = function(content, reposition) {
	if(this._update(content, this.elements.title, reposition) === FALSE) {
		this._removeTitle(FALSE);
	}
};

PROTOTYPE._createTitle = function()
{
	var elements = this.elements,
		id = this._id+'-title';

	// Destroy previous title element, if present
	if(elements.titlebar) { this._removeTitle(); }

	// Create title bar and title elements
	elements.titlebar = $('<div />', {
		'class': NAMESPACE + '-titlebar ' + (this.options.style.widget ? createWidgetClass('header') : '')
	})
	.append(
		elements.title = $('<div />', {
			'id': id,
			'class': NAMESPACE + '-title',
			'aria-atomic': TRUE
		})
	)
	.insertBefore(elements.content)

	// Button-specific events
	.delegate('.qtip-close', 'mousedown keydown mouseup keyup mouseout', function(event) {
		$(this).toggleClass('ui-state-active ui-state-focus', event.type.substr(-4) === 'down');
	})
	.delegate('.qtip-close', 'mouseover mouseout', function(event){
		$(this).toggleClass('ui-state-hover', event.type === 'mouseover');
	});

	// Create button if enabled
	if(this.options.content.button) { this._createButton(); }
};

PROTOTYPE._removeTitle = function(reposition)
{
	var elements = this.elements;

	if(elements.title) {
		elements.titlebar.remove();
		elements.titlebar = elements.title = elements.button = NULL;

		// Reposition if enabled
		if(reposition !== FALSE) { this.reposition(); }
	}
};

;PROTOTYPE.reposition = function(event, effect) {
	if(!this.rendered || this.positioning || this.destroyed) { return this; }

	// Set positioning flag
	this.positioning = TRUE;

	var cache = this.cache,
		tooltip = this.tooltip,
		posOptions = this.options.position,
		target = posOptions.target,
		my = posOptions.my,
		at = posOptions.at,
		viewport = posOptions.viewport,
		container = posOptions.container,
		adjust = posOptions.adjust,
		method = adjust.method.split(' '),
		tooltipWidth = tooltip.outerWidth(FALSE),
		tooltipHeight = tooltip.outerHeight(FALSE),
		targetWidth = 0,
		targetHeight = 0,
		type = tooltip.css('position'),
		position = { left: 0, top: 0 },
		visible = tooltip[0].offsetWidth > 0,
		isScroll = event && event.type === 'scroll',
		win = $(window),
		doc = container[0].ownerDocument,
		mouse = this.mouse,
		pluginCalculations, offset;

	// Check if absolute position was passed
	if($.isArray(target) && target.length === 2) {
		// Force left top and set position
		at = { x: LEFT, y: TOP };
		position = { left: target[0], top: target[1] };
	}

	// Check if mouse was the target
	else if(target === 'mouse') {
		// Force left top to allow flipping
		at = { x: LEFT, y: TOP };

		// Use the cached mouse coordinates if available, or passed event has no coordinates
		if(mouse && mouse.pageX && (adjust.mouse || !event || !event.pageX) ) {
			event = mouse;
		}
		
		// If the passed event has no coordinates (such as a scroll event)
		else if(!event || !event.pageX) {
			// Use the mouse origin that caused the show event, if distance hiding is enabled
			if((!adjust.mouse || this.options.show.distance) && cache.origin && cache.origin.pageX) {
				event =  cache.origin;
			}

			// Use cached event for resize/scroll events
			else if(!event || (event && (event.type === 'resize' || event.type === 'scroll'))) {
				event = cache.event;
			}
		}

		// Calculate body and container offset and take them into account below
		if(type !== 'static') { position = container.offset(); }
		if(doc.body.offsetWidth !== (window.innerWidth || doc.documentElement.clientWidth)) {
			offset = $(document.body).offset();
		}

		// Use event coordinates for position
		position = {
			left: event.pageX - position.left + (offset && offset.left || 0),
			top: event.pageY - position.top + (offset && offset.top || 0)
		};

		// Scroll events are a pain, some browsers
		if(adjust.mouse && isScroll && mouse) {
			position.left -= (mouse.scrollX || 0) - win.scrollLeft();
			position.top -= (mouse.scrollY || 0) - win.scrollTop();
		}
	}

	// Target wasn't mouse or absolute...
	else {
		// Check if event targetting is being used
		if(target === 'event') {
			if(event && event.target && event.type !== 'scroll' && event.type !== 'resize') {
				cache.target = $(event.target);
			}
			else if(!event.target) {
				cache.target = this.elements.target;
			}
		}
		else if(target !== 'event'){
			cache.target = $(target.jquery ? target : this.elements.target);
		}
		target = cache.target;

		// Parse the target into a jQuery object and make sure there's an element present
		target = $(target).eq(0);
		if(target.length === 0) { return this; }

		// Check if window or document is the target
		else if(target[0] === document || target[0] === window) {
			targetWidth = BROWSER.iOS ? window.innerWidth : target.width();
			targetHeight = BROWSER.iOS ? window.innerHeight : target.height();

			if(target[0] === window) {
				position = {
					top: (viewport || target).scrollTop(),
					left: (viewport || target).scrollLeft()
				};
			}
		}

		// Check if the target is an <AREA> element
		else if(PLUGINS.imagemap && target.is('area')) {
			pluginCalculations = PLUGINS.imagemap(this, target, at, PLUGINS.viewport ? method : FALSE);
		}

		// Check if the target is an SVG element
		else if(PLUGINS.svg && target && target[0].ownerSVGElement) {
			pluginCalculations = PLUGINS.svg(this, target, at, PLUGINS.viewport ? method : FALSE);
		}

		// Otherwise use regular jQuery methods
		else {
			targetWidth = target.outerWidth(FALSE);
			targetHeight = target.outerHeight(FALSE);
			position = target.offset();
		}

		// Parse returned plugin values into proper variables
		if(pluginCalculations) {
			targetWidth = pluginCalculations.width;
			targetHeight = pluginCalculations.height;
			offset = pluginCalculations.offset;
			position = pluginCalculations.position;
		}

		// Adjust position to take into account offset parents
		position = this.reposition.offset(target, position, container);

		// Adjust for position.fixed tooltips (and also iOS scroll bug in v3.2-4.0 & v4.3-4.3.2)
		if((BROWSER.iOS > 3.1 && BROWSER.iOS < 4.1) || 
			(BROWSER.iOS >= 4.3 && BROWSER.iOS < 4.33) || 
			(!BROWSER.iOS && type === 'fixed')
		){
			position.left -= win.scrollLeft();
			position.top -= win.scrollTop();
		}

		// Adjust position relative to target
		if(!pluginCalculations || (pluginCalculations && pluginCalculations.adjustable !== FALSE)) {
			position.left += at.x === RIGHT ? targetWidth : at.x === CENTER ? targetWidth / 2 : 0;
			position.top += at.y === BOTTOM ? targetHeight : at.y === CENTER ? targetHeight / 2 : 0;
		}
	}

	// Adjust position relative to tooltip
	position.left += adjust.x + (my.x === RIGHT ? -tooltipWidth : my.x === CENTER ? -tooltipWidth / 2 : 0);
	position.top += adjust.y + (my.y === BOTTOM ? -tooltipHeight : my.y === CENTER ? -tooltipHeight / 2 : 0);

	// Use viewport adjustment plugin if enabled
	if(PLUGINS.viewport) {
		position.adjusted = PLUGINS.viewport(
			this, position, posOptions, targetWidth, targetHeight, tooltipWidth, tooltipHeight
		);

		// Apply offsets supplied by positioning plugin (if used)
		if(offset && position.adjusted.left) { position.left += offset.left; }
		if(offset && position.adjusted.top) {  position.top += offset.top; }
	}

	// Viewport adjustment is disabled, set values to zero
	else { position.adjusted = { left: 0, top: 0 }; }

	// tooltipmove event
	if(!this._trigger('move', [position, viewport.elem || viewport], event)) { return this; }
	delete position.adjusted;

	// If effect is disabled, target it mouse, no animation is defined or positioning gives NaN out, set CSS directly
	if(effect === FALSE || !visible || isNaN(position.left) || isNaN(position.top) || target === 'mouse' || !$.isFunction(posOptions.effect)) {
		tooltip.css(position);
	}

	// Use custom function if provided
	else if($.isFunction(posOptions.effect)) {
		posOptions.effect.call(tooltip, this, $.extend({}, position));
		tooltip.queue(function(next) {
			// Reset attributes to avoid cross-browser rendering bugs
			$(this).css({ opacity: '', height: '' });
			if(BROWSER.ie) { this.style.removeAttribute('filter'); }

			next();
		});
	}

	// Set positioning flag
	this.positioning = FALSE;

	return this;
};

// Custom (more correct for qTip!) offset calculator
PROTOTYPE.reposition.offset = function(elem, pos, container) {
	if(!container[0]) { return pos; }

	var ownerDocument = $(elem[0].ownerDocument),
		quirks = !!BROWSER.ie && document.compatMode !== 'CSS1Compat',
		parent = container[0],
		scrolled, position, parentOffset, overflow;

	function scroll(e, i) {
		pos.left += i * e.scrollLeft();
		pos.top += i * e.scrollTop();
	}

	// Compensate for non-static containers offset
	do {
		if((position = $.css(parent, 'position')) !== 'static') {
			if(position === 'fixed') {
				parentOffset = parent.getBoundingClientRect();
				scroll(ownerDocument, -1);
			}
			else {
				parentOffset = $(parent).position();
				parentOffset.left += (parseFloat($.css(parent, 'borderLeftWidth')) || 0);
				parentOffset.top += (parseFloat($.css(parent, 'borderTopWidth')) || 0);
			}

			pos.left -= parentOffset.left + (parseFloat($.css(parent, 'marginLeft')) || 0);
			pos.top -= parentOffset.top + (parseFloat($.css(parent, 'marginTop')) || 0);

			// If this is the first parent element with an overflow of "scroll" or "auto", store it
			if(!scrolled && (overflow = $.css(parent, 'overflow')) !== 'hidden' && overflow !== 'visible') { scrolled = $(parent); }
		}
	}
	while((parent = parent.offsetParent));

	// Compensate for containers scroll if it also has an offsetParent (or in IE quirks mode)
	if(scrolled && (scrolled[0] !== ownerDocument[0] || quirks)) {
		scroll(scrolled, 1);
	}

	return pos;
};

// Corner class
var C = (CORNER = PROTOTYPE.reposition.Corner = function(corner, forceY) {
	corner = ('' + corner).replace(/([A-Z])/, ' $1').replace(/middle/gi, CENTER).toLowerCase();
	this.x = (corner.match(/left|right/i) || corner.match(/center/) || ['inherit'])[0].toLowerCase();
	this.y = (corner.match(/top|bottom|center/i) || ['inherit'])[0].toLowerCase();
	this.forceY = !!forceY;

	var f = corner.charAt(0);
	this.precedance = (f === 't' || f === 'b' ? Y : X);
}).prototype;

C.invert = function(z, center) {
	this[z] = this[z] === LEFT ? RIGHT : this[z] === RIGHT ? LEFT : center || this[z];	
};

C.string = function() {
	var x = this.x, y = this.y;
	return x === y ? x : this.precedance === Y || (this.forceY && y !== 'center') ? y+' '+x : x+' '+y;
};

C.abbrev = function() {
	var result = this.string().split(' ');
	return result[0].charAt(0) + (result[1] && result[1].charAt(0) || '');
};

C.clone = function() {
	return new CORNER( this.string(), this.forceY );
};;
PROTOTYPE.toggle = function(state, event) {
	var cache = this.cache,
		options = this.options,
		tooltip = this.tooltip;

	// Try to prevent flickering when tooltip overlaps show element
	if(event) {
		if((/over|enter/).test(event.type) && (/out|leave/).test(cache.event.type) &&
			options.show.target.add(event.target).length === options.show.target.length &&
			tooltip.has(event.relatedTarget).length) {
			return this;
		}

		// Cache event
		cache.event = cloneEvent(event);
	}
		
	// If we're currently waiting and we've just hidden... stop it
	this.waiting && !state && (this.hiddenDuringWait = TRUE);

	// Render the tooltip if showing and it isn't already
	if(!this.rendered) { return state ? this.render(1) : this; }
	else if(this.destroyed || this.disabled) { return this; }

	var type = state ? 'show' : 'hide',
		opts = this.options[type],
		otherOpts = this.options[ !state ? 'show' : 'hide' ],
		posOptions = this.options.position,
		contentOptions = this.options.content,
		width = this.tooltip.css('width'),
		visible = this.tooltip.is(':visible'),
		animate = state || opts.target.length === 1,
		sameTarget = !event || opts.target.length < 2 || cache.target[0] === event.target,
		identicalState, allow, showEvent, delay, after;

	// Detect state if valid one isn't provided
	if((typeof state).search('boolean|number')) { state = !visible; }

	// Check if the tooltip is in an identical state to the new would-be state
	identicalState = !tooltip.is(':animated') && visible === state && sameTarget;

	// Fire tooltip(show/hide) event and check if destroyed
	allow = !identicalState ? !!this._trigger(type, [90]) : NULL;

	// Check to make sure the tooltip wasn't destroyed in the callback
	if(this.destroyed) { return this; }

	// If the user didn't stop the method prematurely and we're showing the tooltip, focus it
	if(allow !== FALSE && state) { this.focus(event); }

	// If the state hasn't changed or the user stopped it, return early
	if(!allow || identicalState) { return this; }

	// Set ARIA hidden attribute
	$.attr(tooltip[0], 'aria-hidden', !!!state);

	// Execute state specific properties
	if(state) {
		// Store show origin coordinates
		cache.origin = cloneEvent(this.mouse);

		// Update tooltip content & title if it's a dynamic function
		if($.isFunction(contentOptions.text)) { this._updateContent(contentOptions.text, FALSE); }
		if($.isFunction(contentOptions.title)) { this._updateTitle(contentOptions.title, FALSE); }

		// Cache mousemove events for positioning purposes (if not already tracking)
		if(!trackingBound && posOptions.target === 'mouse' && posOptions.adjust.mouse) {
			$(document).bind('mousemove.'+NAMESPACE, this._storeMouse);
			trackingBound = TRUE;
		}

		// Update the tooltip position (set width first to prevent viewport/max-width issues)
		if(!width) { tooltip.css('width', tooltip.outerWidth(FALSE)); }
		this.reposition(event, arguments[2]);
		if(!width) { tooltip.css('width', ''); }

		// Hide other tooltips if tooltip is solo
		if(!!opts.solo) {
			(typeof opts.solo === 'string' ? $(opts.solo) : $(SELECTOR, opts.solo))
				.not(tooltip).not(opts.target).qtip('hide', $.Event('tooltipsolo'));
		}
	}
	else {
		// Clear show timer if we're hiding
		clearTimeout(this.timers.show);

		// Remove cached origin on hide
		delete cache.origin;

		// Remove mouse tracking event if not needed (all tracking qTips are hidden)
		if(trackingBound && !$(SELECTOR+'[tracking="true"]:visible', opts.solo).not(tooltip).length) {
			$(document).unbind('mousemove.'+NAMESPACE);
			trackingBound = FALSE;
		}

		// Blur the tooltip
		this.blur(event);
	}

	// Define post-animation, state specific properties
	after = $.proxy(function() {
		if(state) {
			// Prevent antialias from disappearing in IE by removing filter
			if(BROWSER.ie) { tooltip[0].style.removeAttribute('filter'); }

			// Remove overflow setting to prevent tip bugs
			tooltip.css('overflow', '');

			// Autofocus elements if enabled
			if('string' === typeof opts.autofocus) {
				$(this.options.show.autofocus, tooltip).focus();
			}

			// If set, hide tooltip when inactive for delay period
			this.options.show.target.trigger('qtip-'+this.id+'-inactive');
		}
		else {
			// Reset CSS states
			tooltip.css({
				display: '',
				visibility: '',
				opacity: '',
				left: '',
				top: ''
			});
		}

		// tooltipvisible/tooltiphidden events
		this._trigger(state ? 'visible' : 'hidden');
	}, this);

	// If no effect type is supplied, use a simple toggle
	if(opts.effect === FALSE || animate === FALSE) {
		tooltip[ type ]();
		after();
	}

	// Use custom function if provided
	else if($.isFunction(opts.effect)) {
		tooltip.stop(1, 1);
		opts.effect.call(tooltip, this);
		tooltip.queue('fx', function(n) {
			after(); n();
		});
	}

	// Use basic fade function by default
	else { tooltip.fadeTo(90, state ? 1 : 0, after); }

	// If inactive hide method is set, active it
	if(state) { opts.target.trigger('qtip-'+this.id+'-inactive'); }

	return this;
};

PROTOTYPE.show = function(event) { return this.toggle(TRUE, event); };

PROTOTYPE.hide = function(event) { return this.toggle(FALSE, event); };

;PROTOTYPE.focus = function(event) {
	if(!this.rendered || this.destroyed) { return this; }

	var qtips = $(SELECTOR),
		tooltip = this.tooltip,
		curIndex = parseInt(tooltip[0].style.zIndex, 10),
		newIndex = QTIP.zindex + qtips.length,
		focusedElem;

	// Only update the z-index if it has changed and tooltip is not already focused
	if(!tooltip.hasClass(CLASS_FOCUS)) {
		// tooltipfocus event
		if(this._trigger('focus', [newIndex], event)) {
			// Only update z-index's if they've changed
			if(curIndex !== newIndex) {
				// Reduce our z-index's and keep them properly ordered
				qtips.each(function() {
					if(this.style.zIndex > curIndex) {
						this.style.zIndex = this.style.zIndex - 1;
					}
				});

				// Fire blur event for focused tooltip
				qtips.filter('.' + CLASS_FOCUS).qtip('blur', event);
			}

			// Set the new z-index
			tooltip.addClass(CLASS_FOCUS)[0].style.zIndex = newIndex;
		}
	}

	return this;
};

PROTOTYPE.blur = function(event) {
	if(!this.rendered || this.destroyed) { return this; }

	// Set focused status to FALSE
	this.tooltip.removeClass(CLASS_FOCUS);

	// tooltipblur event
	this._trigger('blur', [ this.tooltip.css('zIndex') ], event);

	return this;
};

;PROTOTYPE.disable = function(state) {
	if(this.destroyed) { return this; }

	// If 'toggle' is passed, toggle the current state
	if(state === 'toggle') {
		state = !(this.rendered ? this.tooltip.hasClass(CLASS_DISABLED) : this.disabled);
	}

	// Disable if no state passed
	else if('boolean' !== typeof state) {
		state = TRUE;
	}

	if(this.rendered) {
		this.tooltip.toggleClass(CLASS_DISABLED, state)
			.attr('aria-disabled', state);
	}

	this.disabled = !!state;

	return this;
};

PROTOTYPE.enable = function() { return this.disable(FALSE); };

;PROTOTYPE._createButton = function()
{
	var self = this,
		elements = this.elements,
		tooltip = elements.tooltip,
		button = this.options.content.button,
		isString = typeof button === 'string',
		close = isString ? button : 'Close tooltip';

	if(elements.button) { elements.button.remove(); }

	// Use custom button if one was supplied by user, else use default
	if(button.jquery) {
		elements.button = button;
	}
	else {
		elements.button = $('<a />', {
			'class': 'qtip-close ' + (this.options.style.widget ? '' : NAMESPACE+'-icon'),
			'title': close,
			'aria-label': close
		})
		.prepend(
			$('<span />', {
				'class': 'ui-icon ui-icon-close',
				'html': '&times;'
			})
		);
	}

	// Create button and setup attributes
	elements.button.appendTo(elements.titlebar || tooltip)
		.attr('role', 'button')
		.click(function(event) {
			if(!tooltip.hasClass(CLASS_DISABLED)) { self.hide(event); }
			return FALSE;
		});
};

PROTOTYPE._updateButton = function(button)
{
	// Make sure tooltip is rendered and if not, return
	if(!this.rendered) { return FALSE; }

	var elem = this.elements.button;
	if(button) { this._createButton(); }
	else { elem.remove(); }
};

;// Widget class creator
function createWidgetClass(cls) {
	return WIDGET.concat('').join(cls ? '-'+cls+' ' : ' ');
}

// Widget class setter method
PROTOTYPE._setWidget = function()
{
	var on = this.options.style.widget,
		elements = this.elements,
		tooltip = elements.tooltip,
		disabled = tooltip.hasClass(CLASS_DISABLED);

	tooltip.removeClass(CLASS_DISABLED);
	CLASS_DISABLED = on ? 'ui-state-disabled' : 'qtip-disabled';
	tooltip.toggleClass(CLASS_DISABLED, disabled);

	tooltip.toggleClass('ui-helper-reset '+createWidgetClass(), on).toggleClass(CLASS_DEFAULT, this.options.style.def && !on);
	
	if(elements.content) {
		elements.content.toggleClass( createWidgetClass('content'), on);
	}
	if(elements.titlebar) {
		elements.titlebar.toggleClass( createWidgetClass('header'), on);
	}
	if(elements.button) {
		elements.button.toggleClass(NAMESPACE+'-icon', !on);
	}
};;function cloneEvent(event) {
	return event && {
		type: event.type,
		pageX: event.pageX,
		pageY: event.pageY,
		target: event.target,
		relatedTarget: event.relatedTarget,
		scrollX: event.scrollX || window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
		scrollY: event.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
	} || {};
}

function delay(callback, duration) {
	// If tooltip has displayed, start hide timer
	if(duration > 0) {
		return setTimeout(
			$.proxy(callback, this), duration
		);
	}
	else{ callback.call(this); }
}

function showMethod(event) {
	if(this.tooltip.hasClass(CLASS_DISABLED)) { return FALSE; }

	// Clear hide timers
	clearTimeout(this.timers.show);
	clearTimeout(this.timers.hide);

	// Start show timer
	this.timers.show = delay.call(this,
		function() { this.toggle(TRUE, event); },
		this.options.show.delay
	);
}

function hideMethod(event) {
	if(this.tooltip.hasClass(CLASS_DISABLED)) { return FALSE; }

	// Check if new target was actually the tooltip element
	var relatedTarget = $(event.relatedTarget),
		ontoTooltip = relatedTarget.closest(SELECTOR)[0] === this.tooltip[0],
		ontoTarget = relatedTarget[0] === this.options.show.target[0];

	// Clear timers and stop animation queue
	clearTimeout(this.timers.show);
	clearTimeout(this.timers.hide);

	// Prevent hiding if tooltip is fixed and event target is the tooltip.
	// Or if mouse positioning is enabled and cursor momentarily overlaps
	if(this !== relatedTarget[0] && 
		(this.options.position.target === 'mouse' && ontoTooltip) || 
		(this.options.hide.fixed && (
			(/mouse(out|leave|move)/).test(event.type) && (ontoTooltip || ontoTarget))
		))
	{
		try {
			event.preventDefault();
			event.stopImmediatePropagation();
		} catch(e) {}

		return;
	}

	// If tooltip has displayed, start hide timer
	this.timers.hide = delay.call(this,
		function() { this.toggle(FALSE, event); },
		this.options.hide.delay,
		this
	);
}

function inactiveMethod(event) {
	if(this.tooltip.hasClass(CLASS_DISABLED) || !this.options.hide.inactive) { return FALSE; }

	// Clear timer
	clearTimeout(this.timers.inactive);

	this.timers.inactive = delay.call(this,
		function(){ this.hide(event); },
		this.options.hide.inactive
	);
}

function repositionMethod(event) {
	if(this.rendered && this.tooltip[0].offsetWidth > 0) { this.reposition(event); }
}

// Store mouse coordinates
PROTOTYPE._storeMouse = function(event) {
	(this.mouse = cloneEvent(event)).type = 'mousemove';
};

// Bind events
PROTOTYPE._bind = function(targets, events, method, suffix, context) {
	var ns = '.' + this._id + (suffix ? '-'+suffix : '');
	events.length && $(targets).bind(
		(events.split ? events : events.join(ns + ' ')) + ns,
		$.proxy(method, context || this)
	);
};
PROTOTYPE._unbind = function(targets, suffix) {
	$(targets).unbind('.' + this._id + (suffix ? '-'+suffix : ''));
};

// Apply common event handlers using delegate (avoids excessive .bind calls!)
var ns = '.'+NAMESPACE;
function delegate(selector, events, method) {	
	$(document.body).delegate(selector,
		(events.split ? events : events.join(ns + ' ')) + ns,
		function() {
			var api = QTIP.api[ $.attr(this, ATTR_ID) ];
			api && !api.disabled && method.apply(api, arguments);
		}
	);
}

$(function() {
	delegate(SELECTOR, ['mouseenter', 'mouseleave'], function(event) {
		var state = event.type === 'mouseenter',
			tooltip = $(event.currentTarget),
			target = $(event.relatedTarget || event.target),
			options = this.options;

		// On mouseenter...
		if(state) {
			// Focus the tooltip on mouseenter (z-index stacking)
			this.focus(event);

			// Clear hide timer on tooltip hover to prevent it from closing
			tooltip.hasClass(CLASS_FIXED) && !tooltip.hasClass(CLASS_DISABLED) && clearTimeout(this.timers.hide);
		}

		// On mouseleave...
		else {
			// Hide when we leave the tooltip and not onto the show target (if a hide event is set)
			if(options.position.target === 'mouse' && options.hide.event && 
				options.show.target && !target.closest(options.show.target[0]).length) {
				this.hide(event);
			}
		}

		// Add hover class
		tooltip.toggleClass(CLASS_HOVER, state);
	});

	// Define events which reset the 'inactive' event handler
	delegate('['+ATTR_ID+']', INACTIVE_EVENTS, inactiveMethod);
});

// Event trigger
PROTOTYPE._trigger = function(type, args, event) {
	var callback = $.Event('tooltip'+type);
	callback.originalEvent = (event && $.extend({}, event)) || this.cache.event || NULL;

	this.triggering = type;
	this.tooltip.trigger(callback, [this].concat(args || []));
	this.triggering = FALSE;

	return !callback.isDefaultPrevented();
};

PROTOTYPE._bindEvents = function(showEvents, hideEvents, showTarget, hideTarget, showMethod, hideMethod) {
	// If hide and show targets are the same...
	if(hideTarget.add(showTarget).length === hideTarget.length) {
		var toggleEvents = [];

		// Filter identical show/hide events
		hideEvents = $.map(hideEvents, function(type) {
			var showIndex = $.inArray(type, showEvents);

			// Both events are identical, remove from both hide and show events
			// and append to toggleEvents
			if(showIndex > -1) {
				toggleEvents.push( showEvents.splice( showIndex, 1 )[0] );
				return;
			}

			return type;
		});

		// Toggle events are special case of identical show/hide events, which happen in sequence
		toggleEvents.length && this._bind(showTarget, toggleEvents, function(event) {
			var state = this.rendered ? this.tooltip[0].offsetWidth > 0 : false;
			(state ? hideMethod : showMethod).call(this, event);
		});
	}

	// Apply show/hide/toggle events
	this._bind(showTarget, showEvents, showMethod);
	this._bind(hideTarget, hideEvents, hideMethod);
};

PROTOTYPE._assignInitialEvents = function(event) {
	var options = this.options,
		showTarget = options.show.target,
		hideTarget = options.hide.target,
		showEvents = options.show.event ? $.trim('' + options.show.event).split(' ') : [],
		hideEvents = options.hide.event ? $.trim('' + options.hide.event).split(' ') : [];

	/*
	 * Make sure hoverIntent functions properly by using mouseleave as a hide event if
	 * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
	 */
	if(/mouse(over|enter)/i.test(options.show.event) && !/mouse(out|leave)/i.test(options.hide.event)) {
		hideEvents.push('mouseleave');
	}

	/*
	 * Also make sure initial mouse targetting works correctly by caching mousemove coords
	 * on show targets before the tooltip has rendered. Also set onTarget when triggered to
	 * keep mouse tracking working.
	 */
	this._bind(showTarget, 'mousemove', function(event) {
		this._storeMouse(event);
		this.cache.onTarget = TRUE;
	});

	// Define hoverIntent function
	function hoverIntent(event) {
		// Only continue if tooltip isn't disabled
		if(this.disabled || this.destroyed) { return FALSE; }

		// Cache the event data
		this.cache.event = cloneEvent(event);
		this.cache.target = event ? $(event.target) : [undefined];

		// Start the event sequence
		clearTimeout(this.timers.show);
		this.timers.show = delay.call(this,
			function() { this.render(typeof event === 'object' || options.show.ready); },
			options.show.delay
		);
	}

	// Filter and bind events
	this._bindEvents(showEvents, hideEvents, showTarget, hideTarget, hoverIntent, function() {
		clearTimeout(this.timers.show);
	});

	// Prerendering is enabled, create tooltip now
	if(options.show.ready || options.prerender) { hoverIntent.call(this, event); }
};

// Event assignment method
PROTOTYPE._assignEvents = function() {
	var self = this,
		options = this.options,
		posOptions = options.position,

		tooltip = this.tooltip,
		showTarget = options.show.target,
		hideTarget = options.hide.target,
		containerTarget = posOptions.container,
		viewportTarget = posOptions.viewport,
		documentTarget = $(document),
		bodyTarget = $(document.body),
		windowTarget = $(window),

		showEvents = options.show.event ? $.trim('' + options.show.event).split(' ') : [],
		hideEvents = options.hide.event ? $.trim('' + options.hide.event).split(' ') : [];


	// Assign passed event callbacks
	$.each(options.events, function(name, callback) {
		self._bind(tooltip, name === 'toggle' ? ['tooltipshow','tooltiphide'] : ['tooltip'+name], callback, null, tooltip);
	});

	// Hide tooltips when leaving current window/frame (but not select/option elements)
	if(/mouse(out|leave)/i.test(options.hide.event) && options.hide.leave === 'window') {
		this._bind(documentTarget, ['mouseout', 'blur'], function(event) {
			if(!/select|option/.test(event.target.nodeName) && !event.relatedTarget) {
				this.hide(event);
			}
		});
	}

	// Enable hide.fixed by adding appropriate class
	if(options.hide.fixed) {
		hideTarget = hideTarget.add( tooltip.addClass(CLASS_FIXED) );
	}

	/*
	 * Make sure hoverIntent functions properly by using mouseleave to clear show timer if
	 * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
	 */
	else if(/mouse(over|enter)/i.test(options.show.event)) {
		this._bind(hideTarget, 'mouseleave', function() {
			clearTimeout(this.timers.show);
		});
	}

	// Hide tooltip on document mousedown if unfocus events are enabled
	if(('' + options.hide.event).indexOf('unfocus') > -1) {
		this._bind(containerTarget.closest('html'), ['mousedown', 'touchstart'], function(event) {
			var elem = $(event.target),
				enabled = this.rendered && !this.tooltip.hasClass(CLASS_DISABLED) && this.tooltip[0].offsetWidth > 0,
				isAncestor = elem.parents(SELECTOR).filter(this.tooltip[0]).length > 0;

			if(elem[0] !== this.target[0] && elem[0] !== this.tooltip[0] && !isAncestor &&
				!this.target.has(elem[0]).length && enabled
			) {
				this.hide(event);
			}
		});
	}

	// Check if the tooltip hides when inactive
	if('number' === typeof options.hide.inactive) {
		// Bind inactive method to show target(s) as a custom event
		this._bind(showTarget, 'qtip-'+this.id+'-inactive', inactiveMethod);

		// Define events which reset the 'inactive' event handler
		this._bind(hideTarget.add(tooltip), QTIP.inactiveEvents, inactiveMethod, '-inactive');
	}

	// Filter and bind events
	this._bindEvents(showEvents, hideEvents, showTarget, hideTarget, showMethod, hideMethod);

	// Mouse movement bindings
	this._bind(showTarget.add(tooltip), 'mousemove', function(event) {
		// Check if the tooltip hides when mouse is moved a certain distance
		if('number' === typeof options.hide.distance) {
			var origin = this.cache.origin || {},
				limit = this.options.hide.distance,
				abs = Math.abs;

			// Check if the movement has gone beyond the limit, and hide it if so
			if(abs(event.pageX - origin.pageX) >= limit || abs(event.pageY - origin.pageY) >= limit) {
				this.hide(event);
			}
		}

		// Cache mousemove coords on show targets
		this._storeMouse(event);
	});

	// Mouse positioning events
	if(posOptions.target === 'mouse') {
		// If mouse adjustment is on...
		if(posOptions.adjust.mouse) {
			// Apply a mouseleave event so we don't get problems with overlapping
			if(options.hide.event) {
				// Track if we're on the target or not
				this._bind(showTarget, ['mouseenter', 'mouseleave'], function(event) {
					this.cache.onTarget = event.type === 'mouseenter';
				});
			}

			// Update tooltip position on mousemove
			this._bind(documentTarget, 'mousemove', function(event) {
				// Update the tooltip position only if the tooltip is visible and adjustment is enabled
				if(this.rendered && this.cache.onTarget && !this.tooltip.hasClass(CLASS_DISABLED) && this.tooltip[0].offsetWidth > 0) {
					this.reposition(event);
				}
			});
		}
	}

	// Adjust positions of the tooltip on window resize if enabled
	if(posOptions.adjust.resize || viewportTarget.length) {
		this._bind( $.event.special.resize ? viewportTarget : windowTarget, 'resize', repositionMethod );
	}

	// Adjust tooltip position on scroll of the window or viewport element if present
	if(posOptions.adjust.scroll) {
		this._bind( windowTarget.add(posOptions.container), 'scroll', repositionMethod );
	}
};

// Un-assignment method
PROTOTYPE._unassignEvents = function() {
	var targets = [
		this.options.show.target[0],
		this.options.hide.target[0],
		this.rendered && this.tooltip[0],
		this.options.position.container[0],
		this.options.position.viewport[0],
		this.options.position.container.closest('html')[0], // unfocus
		window,
		document
	];

	this._unbind($([]).pushStack( $.grep(targets, function(i) {
		return typeof i === 'object';
	})));
};

;// Initialization method
function init(elem, id, opts) {
	var obj, posOptions, attr, config, title,

	// Setup element references
	docBody = $(document.body),

	// Use document body instead of document element if needed
	newTarget = elem[0] === document ? docBody : elem,

	// Grab metadata from element if plugin is present
	metadata = (elem.metadata) ? elem.metadata(opts.metadata) : NULL,

	// If metadata type if HTML5, grab 'name' from the object instead, or use the regular data object otherwise
	metadata5 = opts.metadata.type === 'html5' && metadata ? metadata[opts.metadata.name] : NULL,

	// Grab data from metadata.name (or data-qtipopts as fallback) using .data() method,
	html5 = elem.data(opts.metadata.name || 'qtipopts');

	// If we don't get an object returned attempt to parse it manualyl without parseJSON
	try { html5 = typeof html5 === 'string' ? $.parseJSON(html5) : html5; } catch(e) {}

	// Merge in and sanitize metadata
	config = $.extend(TRUE, {}, QTIP.defaults, opts,
		typeof html5 === 'object' ? sanitizeOptions(html5) : NULL,
		sanitizeOptions(metadata5 || metadata));

	// Re-grab our positioning options now we've merged our metadata and set id to passed value
	posOptions = config.position;
	config.id = id;

	// Setup missing content if none is detected
	if('boolean' === typeof config.content.text) {
		attr = elem.attr(config.content.attr);

		// Grab from supplied attribute if available
		if(config.content.attr !== FALSE && attr) { config.content.text = attr; }

		// No valid content was found, abort render
		else { return FALSE; }
	}

	// Setup target options
	if(!posOptions.container.length) { posOptions.container = docBody; }
	if(posOptions.target === FALSE) { posOptions.target = newTarget; }
	if(config.show.target === FALSE) { config.show.target = newTarget; }
	if(config.show.solo === TRUE) { config.show.solo = posOptions.container.closest('body'); }
	if(config.hide.target === FALSE) { config.hide.target = newTarget; }
	if(config.position.viewport === TRUE) { config.position.viewport = posOptions.container; }

	// Ensure we only use a single container
	posOptions.container = posOptions.container.eq(0);

	// Convert position corner values into x and y strings
	posOptions.at = new CORNER(posOptions.at, TRUE);
	posOptions.my = new CORNER(posOptions.my);

	// Destroy previous tooltip if overwrite is enabled, or skip element if not
	if(elem.data(NAMESPACE)) {
		if(config.overwrite) {
			elem.qtip('destroy', true);
		}
		else if(config.overwrite === FALSE) {
			return FALSE;
		}
	}

	// Add has-qtip attribute
	elem.attr(ATTR_HAS, id);

	// Remove title attribute and store it if present
	if(config.suppress && (title = elem.attr('title'))) {
		// Final attr call fixes event delegatiom and IE default tooltip showing problem
		elem.removeAttr('title').attr(oldtitle, title).attr('title', '');
	}

	// Initialize the tooltip and add API reference
	obj = new QTip(elem, config, id, !!attr);
	elem.data(NAMESPACE, obj);

	// Catch remove/removeqtip events on target element to destroy redundant tooltip
	elem.one('remove.qtip-'+id+' removeqtip.qtip-'+id, function() { 
		var api; if((api = $(this).data(NAMESPACE))) { api.destroy(true); }
	});

	return obj;
}

// jQuery $.fn extension method
QTIP = $.fn.qtip = function(options, notation, newValue)
{
	var command = ('' + options).toLowerCase(), // Parse command
		returned = NULL,
		args = $.makeArray(arguments).slice(1),
		event = args[args.length - 1],
		opts = this[0] ? $.data(this[0], NAMESPACE) : NULL;

	// Check for API request
	if((!arguments.length && opts) || command === 'api') {
		return opts;
	}

	// Execute API command if present
	else if('string' === typeof options) {
		this.each(function() {
			var api = $.data(this, NAMESPACE);
			if(!api) { return TRUE; }

			// Cache the event if possible
			if(event && event.timeStamp) { api.cache.event = event; }

			// Check for specific API commands
			if(notation && (command === 'option' || command === 'options')) {
				if(newValue !== undefined || $.isPlainObject(notation)) {
					api.set(notation, newValue);
				}
				else {
					returned = api.get(notation);
					return FALSE;
				}
			}

			// Execute API command
			else if(api[command]) {
				api[command].apply(api, args);
			}
		});

		return returned !== NULL ? returned : this;
	}

	// No API commands. validate provided options and setup qTips
	else if('object' === typeof options || !arguments.length) {
		// Sanitize options first
		opts = sanitizeOptions($.extend(TRUE, {}, options));

		return this.each(function(i) {
			var api, id;

			// Find next available ID, or use custom ID if provided
			id = $.isArray(opts.id) ? opts.id[i] : opts.id;
			id = !id || id === FALSE || id.length < 1 || QTIP.api[id] ? QTIP.nextid++ : id;

			// Initialize the qTip and re-grab newly sanitized options
			api = init($(this), id, opts);
			if(api === FALSE) { return TRUE; }
			else { QTIP.api[id] = api; }

			// Initialize plugins
			$.each(PLUGINS, function() {
				if(this.initialize === 'initialize') { this(api); }
			});

			// Assign initial pre-render events
			api._assignInitialEvents(event);
		});
	}
};

// Expose class
$.qtip = QTip;

// Populated in render method
QTIP.api = {};
;$.each({
	/* Allow other plugins to successfully retrieve the title of an element with a qTip applied */
	attr: function(attr, val) {
		if(this.length) {
			var self = this[0],
				title = 'title',
				api = $.data(self, 'qtip');

			if(attr === title && api && 'object' === typeof api && api.options.suppress) {
				if(arguments.length < 2) {
					return $.attr(self, oldtitle);
				}

				// If qTip is rendered and title was originally used as content, update it
				if(api && api.options.content.attr === title && api.cache.attr) {
					api.set('content.text', val);
				}

				// Use the regular attr method to set, then cache the result
				return this.attr(oldtitle, val);
			}
		}

		return $.fn['attr'+replaceSuffix].apply(this, arguments);
	},

	/* Allow clone to correctly retrieve cached title attributes */
	clone: function(keepData) {
		var titles = $([]), title = 'title',

		// Clone our element using the real clone method
		elems = $.fn['clone'+replaceSuffix].apply(this, arguments);

		// Grab all elements with an oldtitle set, and change it to regular title attribute, if keepData is false
		if(!keepData) {
			elems.filter('['+oldtitle+']').attr('title', function() {
				return $.attr(this, oldtitle);
			})
			.removeAttr(oldtitle);
		}

		return elems;
	}
}, function(name, func) {
	if(!func || $.fn[name+replaceSuffix]) { return TRUE; }

	var old = $.fn[name+replaceSuffix] = $.fn[name];
	$.fn[name] = function() {
		return func.apply(this, arguments) || old.apply(this, arguments);
	};
});

/* Fire off 'removeqtip' handler in $.cleanData if jQuery UI not present (it already does similar).
 * This snippet is taken directly from jQuery UI source code found here:
 *     http://code.jquery.com/ui/jquery-ui-git.js
 */
if(!$.ui) {
	$['cleanData'+replaceSuffix] = $.cleanData;
	$.cleanData = function( elems ) {
		for(var i = 0, elem; (elem = $( elems[i] )).length; i++) {
			if(elem.attr(ATTR_HAS)) {
				try { elem.triggerHandler('removeqtip'); } 
				catch( e ) {}
			}
		}
		$['cleanData'+replaceSuffix].apply(this, arguments);
	};
}

;// qTip version
QTIP.version = '2.2.0';

// Base ID for all qTips
QTIP.nextid = 0;

// Inactive events array
QTIP.inactiveEvents = INACTIVE_EVENTS;

// Base z-index for all qTips
QTIP.zindex = 15000;

// Define configuration defaults
QTIP.defaults = {
	prerender: FALSE,
	id: FALSE,
	overwrite: TRUE,
	suppress: TRUE,
	content: {
		text: TRUE,
		attr: 'title',
		title: FALSE,
		button: FALSE
	},
	position: {
		my: 'top left',
		at: 'bottom right',
		target: FALSE,
		container: FALSE,
		viewport: FALSE,
		adjust: {
			x: 0, y: 0,
			mouse: TRUE,
			scroll: TRUE,
			resize: TRUE,
			method: 'flipinvert flipinvert'
		},
		effect: function(api, pos, viewport) {
			$(this).animate(pos, {
				duration: 200,
				queue: FALSE
			});
		}
	},
	show: {
		target: FALSE,
		event: 'mouseenter',
		effect: TRUE,
		delay: 90,
		solo: FALSE,
		ready: FALSE,
		autofocus: FALSE
	},
	hide: {
		target: FALSE,
		event: 'mouseleave',
		effect: TRUE,
		delay: 0,
		fixed: FALSE,
		inactive: FALSE,
		leave: 'window',
		distance: FALSE
	},
	style: {
		classes: '',
		widget: FALSE,
		width: FALSE,
		height: FALSE,
		def: TRUE
	},
	events: {
		render: NULL,
		move: NULL,
		show: NULL,
		hide: NULL,
		toggle: NULL,
		visible: NULL,
		hidden: NULL,
		focus: NULL,
		blur: NULL
	}
};

;var TIP, 

// .bind()/.on() namespace
TIPNS = '.qtip-tip',

// Common CSS strings
MARGIN = 'margin',
BORDER = 'border',
COLOR = 'color',
BG_COLOR = 'background-color',
TRANSPARENT = 'transparent',
IMPORTANT = ' !important',

// Check if the browser supports <canvas/> elements
HASCANVAS = !!document.createElement('canvas').getContext,

// Invalid colour values used in parseColours()
INVALID = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i;

// Camel-case method, taken from jQuery source
// http://code.jquery.com/jquery-1.8.0.js
function camel(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/*
 * Modified from Modernizr's testPropsAll()
 * http://modernizr.com/downloads/modernizr-latest.js
 */
var cssProps = {}, cssPrefixes = ["Webkit", "O", "Moz", "ms"];
function vendorCss(elem, prop) {
	var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
		props = (prop + ' ' + cssPrefixes.join(ucProp + ' ') + ucProp).split(' '),
		cur, val, i = 0;

	// If the property has already been mapped...
	if(cssProps[prop]) { return elem.css(cssProps[prop]); }

	while((cur = props[i++])) {
		if((val = elem.css(cur)) !== undefined) {
			return cssProps[prop] = cur, val;
		}
	}
}

// Parse a given elements CSS property into an int
function intCss(elem, prop) {
	return Math.ceil(parseFloat(vendorCss(elem, prop)));
}


// VML creation (for IE only)
if(!HASCANVAS) {
	var createVML = function(tag, props, style) {
		return '<qtipvml:'+tag+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(props||'')+
			' style="behavior: url(#default#VML); '+(style||'')+ '" />';
	};
}

// Canvas only definitions
else {
	var PIXEL_RATIO = window.devicePixelRatio || 1,
		BACKING_STORE_RATIO = (function() {
			var context = document.createElement('canvas').getContext('2d');
			return context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || 
					context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || 1;
		}()),
		SCALE = PIXEL_RATIO / BACKING_STORE_RATIO;
}


function Tip(qtip, options) {
	this._ns = 'tip';
	this.options = options;
	this.offset = options.offset;
	this.size = [ options.width, options.height ];

	// Initialize
	this.init( (this.qtip = qtip) );
}

$.extend(Tip.prototype, {
	init: function(qtip) {
		var context, tip;

		// Create tip element and prepend to the tooltip
		tip = this.element = qtip.elements.tip = $('<div />', { 'class': NAMESPACE+'-tip' }).prependTo(qtip.tooltip);

		// Create tip drawing element(s)
		if(HASCANVAS) {
			// save() as soon as we create the canvas element so FF2 doesn't bork on our first restore()!
			context = $('<canvas />').appendTo(this.element)[0].getContext('2d');

			// Setup constant parameters
			context.lineJoin = 'miter';
			context.miterLimit = 100000;
			context.save();
		}
		else {
			context = createVML('shape', 'coordorigin="0,0"', 'position:absolute;');
			this.element.html(context + context);

			// Prevent mousing down on the tip since it causes problems with .live() handling in IE due to VML
			qtip._bind( $('*', tip).add(tip), ['click', 'mousedown'], function(event) { event.stopPropagation(); }, this._ns);
		}

		// Bind update events
		qtip._bind(qtip.tooltip, 'tooltipmove', this.reposition, this._ns, this);

		// Create it
		this.create();
	},

	_swapDimensions: function() {
		this.size[0] = this.options.height;
		this.size[1] = this.options.width;
	},
	_resetDimensions: function() {
		this.size[0] = this.options.width;
		this.size[1] = this.options.height;
	},

	_useTitle: function(corner) {
		var titlebar = this.qtip.elements.titlebar;
		return titlebar && (
			corner.y === TOP || (corner.y === CENTER && this.element.position().top + (this.size[1] / 2) + this.options.offset < titlebar.outerHeight(TRUE))
		);
	},

	_parseCorner: function(corner) {
		var my = this.qtip.options.position.my;

		// Detect corner and mimic properties
		if(corner === FALSE || my === FALSE) {
			corner = FALSE;
		}
		else if(corner === TRUE) {
			corner = new CORNER( my.string() );
		}
		else if(!corner.string) {
			corner = new CORNER(corner);
			corner.fixed = TRUE;
		}

		return corner;
	},

	_parseWidth: function(corner, side, use) {
		var elements = this.qtip.elements,
			prop = BORDER + camel(side) + 'Width';

		return (use ? intCss(use, prop) : (
			intCss(elements.content, prop) ||
			intCss(this._useTitle(corner) && elements.titlebar || elements.content, prop) ||
			intCss(elements.tooltip, prop)
		)) || 0;
	},

	_parseRadius: function(corner) {
		var elements = this.qtip.elements,
			prop = BORDER + camel(corner.y) + camel(corner.x) + 'Radius';

		return BROWSER.ie < 9 ? 0 :
			intCss(this._useTitle(corner) && elements.titlebar || elements.content, prop) || 
			intCss(elements.tooltip, prop) || 0;
	},

	_invalidColour: function(elem, prop, compare) {
		var val = elem.css(prop);
		return !val || (compare && val === elem.css(compare)) || INVALID.test(val) ? FALSE : val;
	},

	_parseColours: function(corner) {
		var elements = this.qtip.elements,
			tip = this.element.css('cssText', ''),
			borderSide = BORDER + camel(corner[ corner.precedance ]) + camel(COLOR),
			colorElem = this._useTitle(corner) && elements.titlebar || elements.content,
			css = this._invalidColour, color = [];

		// Attempt to detect the background colour from various elements, left-to-right precedance
		color[0] = css(tip, BG_COLOR) || css(colorElem, BG_COLOR) || css(elements.content, BG_COLOR) || 
			css(elements.tooltip, BG_COLOR) || tip.css(BG_COLOR);

		// Attempt to detect the correct border side colour from various elements, left-to-right precedance
		color[1] = css(tip, borderSide, COLOR) || css(colorElem, borderSide, COLOR) || 
			css(elements.content, borderSide, COLOR) || css(elements.tooltip, borderSide, COLOR) || elements.tooltip.css(borderSide);

		// Reset background and border colours
		$('*', tip).add(tip).css('cssText', BG_COLOR+':'+TRANSPARENT+IMPORTANT+';'+BORDER+':0'+IMPORTANT+';');

		return color;
	},

	_calculateSize: function(corner) {
		var y = corner.precedance === Y,
			width = this.options['width'],
			height = this.options['height'],
			isCenter = corner.abbrev() === 'c',
			base = (y ? width: height) * (isCenter ? 0.5 : 1),
			pow = Math.pow,
			round = Math.round,
			bigHyp, ratio, result,

		smallHyp = Math.sqrt( pow(base, 2) + pow(height, 2) ),
		hyp = [ (this.border / base) * smallHyp, (this.border / height) * smallHyp ];

		hyp[2] = Math.sqrt( pow(hyp[0], 2) - pow(this.border, 2) );
		hyp[3] = Math.sqrt( pow(hyp[1], 2) - pow(this.border, 2) );

		bigHyp = smallHyp + hyp[2] + hyp[3] + (isCenter ? 0 : hyp[0]);
		ratio = bigHyp / smallHyp;

		result = [ round(ratio * width), round(ratio * height) ];
		return y ? result : result.reverse();
	},

	// Tip coordinates calculator
	_calculateTip: function(corner, size, scale) {
		scale = scale || 1;
		size = size || this.size;

		var width = size[0] * scale,
			height = size[1] * scale,
			width2 = Math.ceil(width / 2), height2 = Math.ceil(height / 2),

		// Define tip coordinates in terms of height and width values
		tips = {
			br:	[0,0,		width,height,	width,0],
			bl:	[0,0,		width,0,		0,height],
			tr:	[0,height,	width,0,		width,height],
			tl:	[0,0,		0,height,		width,height],
			tc:	[0,height,	width2,0,		width,height],
			bc:	[0,0,		width,0,		width2,height],
			rc:	[0,0,		width,height2,	0,height],
			lc:	[width,0,	width,height,	0,height2]
		};

		// Set common side shapes
		tips.lt = tips.br; tips.rt = tips.bl;
		tips.lb = tips.tr; tips.rb = tips.tl;

		return tips[ corner.abbrev() ];
	},

	// Tip coordinates drawer (canvas)
	_drawCoords: function(context, coords) {
		context.beginPath();
		context.moveTo(coords[0], coords[1]);
		context.lineTo(coords[2], coords[3]);
		context.lineTo(coords[4], coords[5]);
		context.closePath();
	},

	create: function() {
		// Determine tip corner
		var c = this.corner = (HASCANVAS || BROWSER.ie) && this._parseCorner(this.options.corner);
		
		// If we have a tip corner...
		if( (this.enabled = !!this.corner && this.corner.abbrev() !== 'c') ) {
			// Cache it
			this.qtip.cache.corner = c.clone();

			// Create it
			this.update();
		}

		// Toggle tip element
		this.element.toggle(this.enabled);

		return this.corner;
	},

	update: function(corner, position) {
		if(!this.enabled) { return this; }

		var elements = this.qtip.elements,
			tip = this.element,
			inner = tip.children(),
			options = this.options,
			curSize = this.size,
			mimic = options.mimic,
			round = Math.round,
			color, precedance, context,
			coords, bigCoords, translate, newSize, border, BACKING_STORE_RATIO;

		// Re-determine tip if not already set
		if(!corner) { corner = this.qtip.cache.corner || this.corner; }

		// Use corner property if we detect an invalid mimic value
		if(mimic === FALSE) { mimic = corner; }

		// Otherwise inherit mimic properties from the corner object as necessary
		else {
			mimic = new CORNER(mimic);
			mimic.precedance = corner.precedance;

			if(mimic.x === 'inherit') { mimic.x = corner.x; }
			else if(mimic.y === 'inherit') { mimic.y = corner.y; }
			else if(mimic.x === mimic.y) {
				mimic[ corner.precedance ] = corner[ corner.precedance ];
			}
		}
		precedance = mimic.precedance;

		// Ensure the tip width.height are relative to the tip position
		if(corner.precedance === X) { this._swapDimensions(); }
		else { this._resetDimensions(); }

		// Update our colours
		color = this.color = this._parseColours(corner);

		// Detect border width, taking into account colours
		if(color[1] !== TRANSPARENT) {
			// Grab border width
			border = this.border = this._parseWidth(corner, corner[corner.precedance]);

			// If border width isn't zero, use border color as fill if it's not invalid (1.0 style tips)
			if(options.border && border < 1 && !INVALID.test(color[1])) { color[0] = color[1]; }

			// Set border width (use detected border width if options.border is true)
			this.border = border = options.border !== TRUE ? options.border : border;
		}

		// Border colour was invalid, set border to zero
		else { this.border = border = 0; }

		// Determine tip size
		newSize = this.size = this._calculateSize(corner);
		tip.css({
			width: newSize[0],
			height: newSize[1],
			lineHeight: newSize[1]+'px'
		});

		// Calculate tip translation
		if(corner.precedance === Y) {
			translate = [
				round(mimic.x === LEFT ? border : mimic.x === RIGHT ? newSize[0] - curSize[0] - border : (newSize[0] - curSize[0]) / 2),
				round(mimic.y === TOP ? newSize[1] - curSize[1] : 0)
			];
		}
		else {
			translate = [
				round(mimic.x === LEFT ? newSize[0] - curSize[0] : 0),
				round(mimic.y === TOP ? border : mimic.y === BOTTOM ? newSize[1] - curSize[1] - border : (newSize[1] - curSize[1]) / 2)
			];
		}

		// Canvas drawing implementation
		if(HASCANVAS) {
			// Grab canvas context and clear/save it
			context = inner[0].getContext('2d');
			context.restore(); context.save();
			context.clearRect(0,0,6000,6000);
			
			// Calculate coordinates
			coords = this._calculateTip(mimic, curSize, SCALE);
			bigCoords = this._calculateTip(mimic, this.size, SCALE);

			// Set the canvas size using calculated size
			inner.attr(WIDTH, newSize[0] * SCALE).attr(HEIGHT, newSize[1] * SCALE);
			inner.css(WIDTH, newSize[0]).css(HEIGHT, newSize[1]);

			// Draw the outer-stroke tip
			this._drawCoords(context, bigCoords);
			context.fillStyle = color[1];
			context.fill();

			// Draw the actual tip
			context.translate(translate[0] * SCALE, translate[1] * SCALE);
			this._drawCoords(context, coords);
			context.fillStyle = color[0];
			context.fill();
		}

		// VML (IE Proprietary implementation)
		else {
			// Calculate coordinates
			coords = this._calculateTip(mimic);

			// Setup coordinates string
			coords = 'm' + coords[0] + ',' + coords[1] + ' l' + coords[2] +
				',' + coords[3] + ' ' + coords[4] + ',' + coords[5] + ' xe';

			// Setup VML-specific offset for pixel-perfection
			translate[2] = border && /^(r|b)/i.test(corner.string()) ?
				BROWSER.ie === 8 ? 2 : 1 : 0;

			// Set initial CSS
			inner.css({
				coordsize: (newSize[0]+border) + ' ' + (newSize[1]+border),
				antialias: ''+(mimic.string().indexOf(CENTER) > -1),
				left: translate[0] - (translate[2] * Number(precedance === X)),
				top: translate[1] - (translate[2] * Number(precedance === Y)),
				width: newSize[0] + border,
				height: newSize[1] + border
			})
			.each(function(i) {
				var $this = $(this);

				// Set shape specific attributes
				$this[ $this.prop ? 'prop' : 'attr' ]({
					coordsize: (newSize[0]+border) + ' ' + (newSize[1]+border),
					path: coords,
					fillcolor: color[0],
					filled: !!i,
					stroked: !i
				})
				.toggle(!!(border || i));

				// Check if border is enabled and add stroke element
				!i && $this.html( createVML(
					'stroke', 'weight="'+(border*2)+'px" color="'+color[1]+'" miterlimit="1000" joinstyle="miter"'
				) );
			});
		}

		// Opera bug #357 - Incorrect tip position
		// https://github.com/Craga89/qTip2/issues/367
		window.opera && setTimeout(function() {
			elements.tip.css({
				display: 'inline-block',
				visibility: 'visible'
			});
		}, 1);

		// Position if needed
		if(position !== FALSE) { this.calculate(corner, newSize); }
	},

	calculate: function(corner, size) {
		if(!this.enabled) { return FALSE; }

		var self = this,
			elements = this.qtip.elements,
			tip = this.element,
			userOffset = this.options.offset,
			isWidget = elements.tooltip.hasClass('ui-widget'),
			position = {  },
			precedance, corners;

		// Inherit corner if not provided
		corner = corner || this.corner;
		precedance = corner.precedance;

		// Determine which tip dimension to use for adjustment
		size = size || this._calculateSize(corner);

		// Setup corners and offset array
		corners = [ corner.x, corner.y ];
		if(precedance === X) { corners.reverse(); }

		// Calculate tip position
		$.each(corners, function(i, side) {
			var b, bc, br;

			if(side === CENTER) {
				b = precedance === Y ? LEFT : TOP;
				position[ b ] = '50%';
				position[MARGIN+'-' + b] = -Math.round(size[ precedance === Y ? 0 : 1 ] / 2) + userOffset;
			}
			else {
				b = self._parseWidth(corner, side, elements.tooltip);
				bc = self._parseWidth(corner, side, elements.content);
				br = self._parseRadius(corner);

				position[ side ] = Math.max(-self.border, i ? bc : (userOffset + (br > b ? br : -b)));
			}
		});

		// Adjust for tip size
		position[ corner[precedance] ] -= size[ precedance === X ? 0 : 1 ];

		// Set and return new position
		tip.css({ margin: '', top: '', bottom: '', left: '', right: '' }).css(position);
		return position;
	},

	reposition: function(event, api, pos, viewport) {
		if(!this.enabled) { return; }

		var cache = api.cache,
			newCorner = this.corner.clone(),
			adjust = pos.adjusted,
			method = api.options.position.adjust.method.split(' '),
			horizontal = method[0],
			vertical = method[1] || method[0],
			shift = { left: FALSE, top: FALSE, x: 0, y: 0 },
			offset, css = {}, props;

		function shiftflip(direction, precedance, popposite, side, opposite) {
			// Horizontal - Shift or flip method
			if(direction === SHIFT && newCorner.precedance === precedance && adjust[side] && newCorner[popposite] !== CENTER) {
				newCorner.precedance = newCorner.precedance === X ? Y : X;
			}
			else if(direction !== SHIFT && adjust[side]){
				newCorner[precedance] = newCorner[precedance] === CENTER ? 
					(adjust[side] > 0 ? side : opposite) : (newCorner[precedance] === side ? opposite : side);
			}
		}

		function shiftonly(xy, side, opposite) {
			if(newCorner[xy] === CENTER) {
				css[MARGIN+'-'+side] = shift[xy] = offset[MARGIN+'-'+side] - adjust[side];
			}
			else {
				props = offset[opposite] !== undefined ?
					[ adjust[side], -offset[side] ] : [ -adjust[side], offset[side] ];

				if( (shift[xy] = Math.max(props[0], props[1])) > props[0] ) {
					pos[side] -= adjust[side];
					shift[side] = FALSE;
				}
				
				css[ offset[opposite] !== undefined ? opposite : side ] = shift[xy];
			}
		}

		// If our tip position isn't fixed e.g. doesn't adjust with viewport...
		if(this.corner.fixed !== TRUE) {
			// Perform shift/flip adjustments
			shiftflip(horizontal, X, Y, LEFT, RIGHT);
			shiftflip(vertical, Y, X, TOP, BOTTOM);

			// Update and redraw the tip if needed (check cached details of last drawn tip)
			if(newCorner.string() !== cache.corner.string() && (cache.cornerTop !== adjust.top || cache.cornerLeft !== adjust.left)) {
				this.update(newCorner, FALSE);
			}
		}

		// Setup tip offset properties
		offset = this.calculate(newCorner);

		// Readjust offset object to make it left/top
		if(offset.right !== undefined) { offset.left = -offset.right; }
		if(offset.bottom !== undefined) { offset.top = -offset.bottom; }
		offset.user = this.offset;

		// Perform shift adjustments
		if(shift.left = (horizontal === SHIFT && !!adjust.left)) { shiftonly(X, LEFT, RIGHT); }
		if(shift.top = (vertical === SHIFT && !!adjust.top)) { shiftonly(Y, TOP, BOTTOM); }

		/*
		* If the tip is adjusted in both dimensions, or in a
		* direction that would cause it to be anywhere but the
		* outer border, hide it!
		*/
		this.element.css(css).toggle(
			!((shift.x && shift.y) || (newCorner.x === CENTER && shift.y) || (newCorner.y === CENTER && shift.x))
		);

		// Adjust position to accomodate tip dimensions
		pos.left -= offset.left.charAt ? offset.user : 
			horizontal !== SHIFT || shift.top || !shift.left && !shift.top ? offset.left + this.border : 0;
		pos.top -= offset.top.charAt ? offset.user : 
			vertical !== SHIFT || shift.left || !shift.left && !shift.top ? offset.top + this.border : 0;

		// Cache details
		cache.cornerLeft = adjust.left; cache.cornerTop = adjust.top;
		cache.corner = newCorner.clone();
	},

	destroy: function() {
		// Unbind events
		this.qtip._unbind(this.qtip.tooltip, this._ns);

		// Remove the tip element(s)
		if(this.qtip.elements.tip) {
			this.qtip.elements.tip.find('*')
				.remove().end().remove();
		}
	}
});

TIP = PLUGINS.tip = function(api) {
	return new Tip(api, api.options.style.tip);
};

// Initialize tip on render
TIP.initialize = 'render';

// Setup plugin sanitization options
TIP.sanitize = function(options) {
	if(options.style && 'tip' in options.style) {
		var opts = options.style.tip;
		if(typeof opts !== 'object') { opts = options.style.tip = { corner: opts }; }
		if(!(/string|boolean/i).test(typeof opts.corner)) { opts.corner = TRUE; }
	}
};

// Add new option checks for the plugin
CHECKS.tip = {
	'^position.my|style.tip.(corner|mimic|border)$': function() {
		// Make sure a tip can be drawn
		this.create();
		
		// Reposition the tooltip
		this.qtip.reposition();
	},
	'^style.tip.(height|width)$': function(obj) {
		// Re-set dimensions and redraw the tip
		this.size = [ obj.width, obj.height ];
		this.update();

		// Reposition the tooltip
		this.qtip.reposition();
	},
	'^content.title|style.(classes|widget)$': function() {
		this.update();
	}
};

// Extend original qTip defaults
$.extend(TRUE, QTIP.defaults, {
	style: {
		tip: {
			corner: TRUE,
			mimic: FALSE,
			width: 6,
			height: 6,
			border: TRUE,
			offset: 0
		}
	}
});

;PLUGINS.viewport = function(api, position, posOptions, targetWidth, targetHeight, elemWidth, elemHeight)
{
	var target = posOptions.target,
		tooltip = api.elements.tooltip,
		my = posOptions.my,
		at = posOptions.at,
		adjust = posOptions.adjust,
		method = adjust.method.split(' '),
		methodX = method[0],
		methodY = method[1] || method[0],
		viewport = posOptions.viewport,
		container = posOptions.container,
		cache = api.cache,
		adjusted = { left: 0, top: 0 },
		fixed, newMy, newClass, containerOffset, containerStatic,
		viewportWidth, viewportHeight, viewportScroll, viewportOffset;

	// If viewport is not a jQuery element, or it's the window/document, or no adjustment method is used... return
	if(!viewport.jquery || target[0] === window || target[0] === document.body || adjust.method === 'none') {
		return adjusted;
	}

	// Cach container details
	containerOffset = container.offset() || adjusted;
	containerStatic = container.css('position') === 'static';

	// Cache our viewport details
	fixed = tooltip.css('position') === 'fixed';
	viewportWidth = viewport[0] === window ? viewport.width() : viewport.outerWidth(FALSE);
	viewportHeight = viewport[0] === window ? viewport.height() : viewport.outerHeight(FALSE);
	viewportScroll = { left: fixed ? 0 : viewport.scrollLeft(), top: fixed ? 0 : viewport.scrollTop() };
	viewportOffset = viewport.offset() || adjusted;

	// Generic calculation method
	function calculate(side, otherSide, type, adjust, side1, side2, lengthName, targetLength, elemLength) {
		var initialPos = position[side1],
			mySide = my[side],
			atSide = at[side],
			isShift = type === SHIFT,
			myLength = mySide === side1 ? elemLength : mySide === side2 ? -elemLength : -elemLength / 2,
			atLength = atSide === side1 ? targetLength : atSide === side2 ? -targetLength : -targetLength / 2,
			sideOffset = viewportScroll[side1] + viewportOffset[side1] - (containerStatic ? 0 : containerOffset[side1]),
			overflow1 = sideOffset - initialPos,
			overflow2 = initialPos + elemLength - (lengthName === WIDTH ? viewportWidth : viewportHeight) - sideOffset,
			offset = myLength - (my.precedance === side || mySide === my[otherSide] ? atLength : 0) - (atSide === CENTER ? targetLength / 2 : 0);

		// shift
		if(isShift) {
			offset = (mySide === side1 ? 1 : -1) * myLength;

			// Adjust position but keep it within viewport dimensions
			position[side1] += overflow1 > 0 ? overflow1 : overflow2 > 0 ? -overflow2 : 0;
			position[side1] = Math.max(
				-containerOffset[side1] + viewportOffset[side1],
				initialPos - offset,
				Math.min(
					Math.max(
						-containerOffset[side1] + viewportOffset[side1] + (lengthName === WIDTH ? viewportWidth : viewportHeight),
						initialPos + offset
					),
					position[side1],

					// Make sure we don't adjust complete off the element when using 'center'
					mySide === 'center' ? initialPos - myLength : 1E9
				)
			);

		}

		// flip/flipinvert
		else {
			// Update adjustment amount depending on if using flipinvert or flip
			adjust *= (type === FLIPINVERT ? 2 : 0);

			// Check for overflow on the left/top
			if(overflow1 > 0 && (mySide !== side1 || overflow2 > 0)) {
				position[side1] -= offset + adjust;
				newMy.invert(side, side1);
			}

			// Check for overflow on the bottom/right
			else if(overflow2 > 0 && (mySide !== side2 || overflow1 > 0)  ) {
				position[side1] -= (mySide === CENTER ? -offset : offset) + adjust;
				newMy.invert(side, side2);
			}

			// Make sure we haven't made things worse with the adjustment and reset if so
			if(position[side1] < viewportScroll && -position[side1] > overflow2) {
				position[side1] = initialPos; newMy = my.clone();
			}
		}

		return position[side1] - initialPos;
	}

	// Set newMy if using flip or flipinvert methods
	if(methodX !== 'shift' || methodY !== 'shift') { newMy = my.clone(); }

	// Adjust position based onviewport and adjustment options
	adjusted = {
		left: methodX !== 'none' ? calculate( X, Y, methodX, adjust.x, LEFT, RIGHT, WIDTH, targetWidth, elemWidth ) : 0,
		top: methodY !== 'none' ? calculate( Y, X, methodY, adjust.y, TOP, BOTTOM, HEIGHT, targetHeight, elemHeight ) : 0
	};

	// Set tooltip position class if it's changed
	if(newMy && cache.lastClass !== (newClass = NAMESPACE + '-pos-' + newMy.abbrev())) {
		tooltip.removeClass(api.cache.lastClass).addClass( (api.cache.lastClass = newClass) );
	}

	return adjusted;
};
;PLUGINS.polys = {
	// POLY area coordinate calculator
	//	Special thanks to Ed Cradock for helping out with this.
	//	Uses a binary search algorithm to find suitable coordinates.
	polygon: function(baseCoords, corner) {
		var result = {
			width: 0, height: 0,
			position: {
				top: 1e10, right: 0,
				bottom: 0, left: 1e10
			},
			adjustable: FALSE
		},
		i = 0, next,
		coords = [],
		compareX = 1, compareY = 1,
		realX = 0, realY = 0,
		newWidth, newHeight;

		// First pass, sanitize coords and determine outer edges
		i = baseCoords.length; while(i--) {
			next = [ parseInt(baseCoords[--i], 10), parseInt(baseCoords[i+1], 10) ];

			if(next[0] > result.position.right){ result.position.right = next[0]; }
			if(next[0] < result.position.left){ result.position.left = next[0]; }
			if(next[1] > result.position.bottom){ result.position.bottom = next[1]; }
			if(next[1] < result.position.top){ result.position.top = next[1]; }

			coords.push(next);
		}

		// Calculate height and width from outer edges
		newWidth = result.width = Math.abs(result.position.right - result.position.left);
		newHeight = result.height = Math.abs(result.position.bottom - result.position.top);

		// If it's the center corner...
		if(corner.abbrev() === 'c') {
			result.position = {
				left: result.position.left + (result.width / 2),
				top: result.position.top + (result.height / 2)
			};
		}
		else {
			// Second pass, use a binary search algorithm to locate most suitable coordinate
			while(newWidth > 0 && newHeight > 0 && compareX > 0 && compareY > 0)
			{
				newWidth = Math.floor(newWidth / 2);
				newHeight = Math.floor(newHeight / 2);

				if(corner.x === LEFT){ compareX = newWidth; }
				else if(corner.x === RIGHT){ compareX = result.width - newWidth; }
				else{ compareX += Math.floor(newWidth / 2); }

				if(corner.y === TOP){ compareY = newHeight; }
				else if(corner.y === BOTTOM){ compareY = result.height - newHeight; }
				else{ compareY += Math.floor(newHeight / 2); }

				i = coords.length; while(i--)
				{
					if(coords.length < 2){ break; }

					realX = coords[i][0] - result.position.left;
					realY = coords[i][1] - result.position.top;

					if((corner.x === LEFT && realX >= compareX) ||
					(corner.x === RIGHT && realX <= compareX) ||
					(corner.x === CENTER && (realX < compareX || realX > (result.width - compareX))) ||
					(corner.y === TOP && realY >= compareY) ||
					(corner.y === BOTTOM && realY <= compareY) ||
					(corner.y === CENTER && (realY < compareY || realY > (result.height - compareY)))) {
						coords.splice(i, 1);
					}
				}
			}
			result.position = { left: coords[0][0], top: coords[0][1] };
		}

		return result;
	},

	rect: function(ax, ay, bx, by) {
		return {
			width: Math.abs(bx - ax),
			height: Math.abs(by - ay),
			position: {
				left: Math.min(ax, bx),
				top: Math.min(ay, by)
			}
		};
	},

	_angles: {
		tc: 3 / 2, tr: 7 / 4, tl: 5 / 4, 
		bc: 1 / 2, br: 1 / 4, bl: 3 / 4, 
		rc: 2, lc: 1, c: 0
	},
	ellipse: function(cx, cy, rx, ry, corner) {
		var c = PLUGINS.polys._angles[ corner.abbrev() ],
			rxc = c === 0 ? 0 : rx * Math.cos( c * Math.PI ),
			rys = ry * Math.sin( c * Math.PI );

		return {
			width: (rx * 2) - Math.abs(rxc),
			height: (ry * 2) - Math.abs(rys),
			position: {
				left: cx + rxc,
				top: cy + rys
			},
			adjustable: FALSE
		};
	},
	circle: function(cx, cy, r, corner) {
		return PLUGINS.polys.ellipse(cx, cy, r, r, corner);
	}
};;PLUGINS.svg = function(api, svg, corner)
{
	var doc = $(document),
		elem = svg[0],
		root = $(elem.ownerSVGElement),
		xScale = 1, yScale = 1,
		complex = true,
		rootWidth, rootHeight,
		mtx, transformed, viewBox,
		len, next, i, points,
		result, position, dimensions;

	// Ascend the parentNode chain until we find an element with getBBox()
	while(!elem.getBBox) { elem = elem.parentNode; }
	if(!elem.getBBox || !elem.parentNode) { return FALSE; }

	// Determine dimensions where possible
	rootWidth = root.attr('width') || root.width() || parseInt(root.css('width'), 10);
	rootHeight = root.attr('height') || root.height() || parseInt(root.css('height'), 10);

	// Add stroke characteristics to scaling
	var strokeWidth2 = (parseInt(svg.css('stroke-width'), 10) || 0) / 2;
	if(strokeWidth2) {
		xScale += strokeWidth2 / rootWidth;
		yScale += strokeWidth2 / rootHeight;
	}

	// Determine which shape calculation to use
	switch(elem.nodeName) {
		case 'ellipse':
		case 'circle':
			result = PLUGINS.polys.ellipse(
				elem.cx.baseVal.value,
				elem.cy.baseVal.value,
				(elem.rx || elem.r).baseVal.value + strokeWidth2,
				(elem.ry || elem.r).baseVal.value + strokeWidth2,
				corner
			);
		break;

		case 'line':
		case 'polygon':
		case 'polyline':
			// Determine points object (line has none, so mimic using array)
			points = elem.points || [ 
				{ x: elem.x1.baseVal.value, y: elem.y1.baseVal.value },
				{ x: elem.x2.baseVal.value, y: elem.y2.baseVal.value }
			];

			for(result = [], i = -1, len = points.numberOfItems || points.length; ++i < len;) {
				next = points.getItem ? points.getItem(i) : points[i];
				result.push.apply(result, [next.x, next.y]);
			}

			result = PLUGINS.polys.polygon(result, corner);
		break;

		// Unknown shape or rectangle? Use bounding box
		default:
			result = elem.getBoundingClientRect();
			result = {
				width: result.width, height: result.height,
				position: {
					left: result.left,
					top: result.top
				}
			};
			complex = false;
		break;
	}

	// Shortcut assignments
	position = result.position;
	root = root[0];

	// If the shape was complex (i.e. not using bounding box calculations)
	if(complex) {
		// Convert position into a pixel value
		if(root.createSVGPoint) {
			mtx = elem.getScreenCTM();
			points = root.createSVGPoint();

			points.x = position.left;
			points.y = position.top;
			transformed = points.matrixTransform( mtx );
			position.left = transformed.x;
			position.top = transformed.y;
		}

		// Calculate viewBox characteristics
		if(root.viewBox && (viewBox = root.viewBox.baseVal) && viewBox.width && viewBox.height) {
			xScale *= rootWidth / viewBox.width;
			yScale *= rootHeight / viewBox.height;
		}
	}

	// Adjust by scroll offset
	position.left += doc.scrollLeft();
	position.top += doc.scrollTop();

	return result;
};;}));
}( window, document ));




/** @jsx React.DOM */
define('canvas_quiz_statistics/components/screen_reader_content',['react'],function(React) {


  /**
   * @class Components.ScreenReaderContent
   * @alternateClassName ScreenReaderContent
   *
   * A component that is only "visible" to screen-reader ATs. Sighted users
   * will not see nor be able to interact with instances of this component.
   *
   * See Components.SightedUserContent for the "counterpart" of this component,
   * although with less reliability.
   *
   */
  var ScreenReaderContent = React.createClass({displayName: 'ScreenReaderContent',
    propTypes: {
      /**
       * @property {Boolean} [forceSentenceDelimiter=false]
       *
       * If you're passing in dynamic content and you're noticing that it's not
       * being read as a full sentence (e.g, some SRs are reading it along with
       * the next element), then you can try setting this property to true and
       * it will work a trick to make the SR pause after reading this element,
       * just as if it were a proper sentence.
       */
      forceSentenceDelimiter: React.PropTypes.bool
    },

    getDefaultProps: function() {
      return {
        tagName: 'span',
        forceSentenceDelimiter: false
      };
    },

    render: function() {
      var tag = React.DOM[this.props.tagName];
      var tagProps = {};
      var customChildren = [];

      tagProps.className = "screenreader-only";

      if (this.props.forceSentenceDelimiter) {
        customChildren.push(this.generateSentenceDelimiter());
      }

      if (customChildren.length) {
        // React disallows setting the @dangerouslySetInnerHTML prop and passing
        // children at the same time. So if the caller is attempting to pass
        // this prop and is also asking for enhancements that require custom
        // children such as @forceSentenceDelimiter then we cannot accomodate
        // the request and should notify them.
        //
        // The same effect could be achieved by setting that prop on a *child*
        // passed to the SRC component, e.g:
        //
        //     <ScreenReaderContent forceSentenceDelimiter>
        //       <span dangerouslySetInnerHTML={{__html: '<b>hi</b>'}} />
        //     </ScreenReaderContent>
        //
        //     // instead of:
        //
        //     <ScreenReaderContent
        //       forceSentenceDelimiter
        //       dangerouslySetInnerHTML={{__html: '<b>hi</b>'}} />
        if (this.props.dangerouslySetInnerHTML) {
          console.error(
            'You are attempting to set the dangerouslySetInnerHTML prop',
            'on a ScreenReaderContent component, which prevents it from enabling',
            'further accessibility enhancements.',

            'Try setting that property on a passed child instead.'
          );
        } else {
          tagProps.children = [ this.props.children, customChildren ];
        }
      }
      else { // no custom children, pass children as-is:
        tagProps.children = this.props.children;
      }

      return this.transferPropsTo(tag(tagProps, tagProps.children));
    },

    generateSentenceDelimiter: function() {
      return (
        React.DOM.em({
          role: "presentation", 
          'aria-role': "presentation", 
          'aria-hidden': true, 
          children: ". "})
      );
    }
  });

  return ScreenReaderContent;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/components/popup',['react','jquery','lodash','qtip','./screen_reader_content'],function(React,$,_,jQuery_qTip,ScreenReaderContent) {






  var omit = _.omit;
  var merge = _.extend;
  var POPUP_PROPS = Object.freeze([
    'content',
    'popupOptions',
    'anchorSelector',
    'children',
    'ref',
    'autoFocus',
    'reactivePositioning',
    'onShow',
    'onHide'
  ]);

  /**
   * @class Components.Popup
   *
   * Wrap a React view inside a qTip popup. The pop-up is bound to an "anchor"
   * element, like a button or an anchor, that controls when and how to show and
   * close the pop-up.
   *
   * You can pass props to the content *inside* the popup regularly as if you
   * were mounting the component directly, except for some reserved props
   * that are needed for the popup to function correctly. See the configuration
   * docs for those props.
   *
   * === Example usage
   *
   *     // Direct instantiation:
   *     React.renderComponent(Popup({
   *       content: React.DOM.div({}, "I'm a popup content!")
   *     }), document.body);
   *
   *     // Inside a view's render method:
   *     <Popup content={MyPopupContent} />
   *
   *     // Pass a property to the content:
   *     <Popup content={MyPopupContent} name="Ahmad" />
   *
   *     // Customize qTip options:
   *     var options = {
   *       position: {
   *         // ...
   *       }
   *     };
   *     <Popup popupOptions={options} ... />
   *
   * === Accessibility
   *
   * The popup is an accessible component by default. Content shown inside the
   * popup will be presented to Screen Reader ATs. Also, it is keyboard-friendly
   * and is reachable using TAB.
   *
   * The popup's API exposes a few controls that allow you to further optimize
   * the screen-reading experience if your content is dynamic. See the focusing
   * methods for more info.
   *
   * === Additional resources
   *
   *   - See http://qtip2.com/options for customizing the popup
   *   - See http://qtip2.com/api for the lower API, if you need to interact
   *     with this, use the Popup.__getApi() method to get the instance
   */
  var Popup = React.createClass({displayName: 'Popup',
    mixins: [],

    propTypes: {
      /**
       * @cfg {React.Class} content (required)
       *
       * The Popup's content you want to render.
       */
      content: React.PropTypes.func.isRequired,

      /**
       * @cfg {React.Component} [children=<button>Show Popup</button>]
       *
       * Element to use as the popup's "toggle" button, which when clicked will
       * show the qTip.
       */
      children: React.PropTypes.renderable,

      /**
       * @cfg {Object} [popupOptions={}]
       *
       * qTip options.
       */
      popupOptions: React.PropTypes.object,

      /**
       * @cfg {String} [anchorSelector=".popup-anchor"]
       *
       * CSS selector to locate a child element to use as the popup's "anchor",
       * e.g, the positioning will be relative to that element instead of the
       * entirety of the popup's children.
       *
       * When unset, or the element could not be found, it defaults to using
       * the popup's children as anchor.
       */
      anchorSelector: React.PropTypes.string,

      /**
       * @cfg {Boolean} [reactivePositioning=false]
       *
       * When true, the pop-up will reposition itself after every update to its
       * content. Enable this if the content is dynamic.
       */
      reactivePositioning: React.PropTypes.bool,

      /**
       * Callback triggered when the pop-up has been opened. Use this hook to
       * install any keybindings, or focus some node.
       *
       * @param {HTMLElement} contentNode
       *        The element that contains the rendered content component.
       *
       * @param {QTip} qtip
       *        The qTip API instance for this popup.
       */
      onShow: React.PropTypes.func,

      /**
       * Callback triggered when the pop-up has been closed.
       */
      onHide: React.PropTypes.func,
    },

    getInitialState: function() {
      return {
        /**
         * @property {HTMLElement} container
         *
         * An auto-generated element that will contain the popup's content. The
         * container is classed with "popup-content" to achieve the necessary
         * Popup styling.
         *
         * This is the DOM node at which the content component will be mounted
         * at.
         */
        container: null,

        /**
         * @property {React.Component} content
         *
         * The rendered popup content component.
         */
        content: null
      };
    },

    getDefaultProps: function() {
      return {
        children: React.DOM.button(null, "Show Popup"),
        popupOptions: {},
        anchorSelector: '.popup-anchor',
        reactivePositioning: false,
        screenReaderSupport: true
      };
    },

    componentDidMount: function() {
      var $this = $(this.getDOMNode());
      var $container = $('<div class="popup-content" />');
      var options;

      if (!this.props.content) {
        throw new Error("You must provide a 'content' component for a popup!");
      }

      options = this.qTipOptions($this, $container);
      this.qTip = $this.qtip(options).qtip('api');
      this.__disableInherentAccessibilityLayer(this.qTip);

      this.setState({
        container: $container[0],
        content: React.renderComponent(
          this.props.content(this.getContentProps(this.props)),
          $container[0]
        )
      });
    },

    componentWillUnmount: function() {
      React.unmountComponentAtNode(this.state.container);

      if (this.qTip) {
        this.qTip.destroy(true);
      }
    },

    /**
     * @private
     *
     * Update the content with the new properties.
     */
    componentDidUpdate: function() {
      var content = this.state.content;

      if (content) {
        content.setProps(this.getContentProps(this.props), this.contentDidUpdate);
      }
    },

    contentDidUpdate: function() {
      this.reposition();

      if (this.focusScreenReaderContentOnUpdate) {
        this.focusScreenReaderContentOnUpdate = false;
        this.focusScreenReaderContent();
      }
    },

    render: function() {
      return (
        React.DOM.div({tabIndex: "-1", className: "inline"}, 
          this.props.children, 
          this.props.screenReaderSupport &&
            ScreenReaderContent({
              ref: "srContent", 
              tabIndex: "0", 
              'aria-live': "assertive", 
              'aria-atomic': "true", 
              'aria-relevant': "additions", 
              role: "note", 
              children: this.props.content(this.getContentProps(this.props))})
          
        )
      );
    },

    /**
     * @internal
     *
     * qTip by default defines a few aria-* attributes on its popup element
     * which makes some SRs read the content twice since we're doing things
     * manually. Calling this method on a qtip api instance will disable
     * remove these attributes and "make things work".
     */
    __disableInherentAccessibilityLayer: function(qtip) {
      qtip.tooltip
        .removeAttr('role')
        .removeAttr('aria-live')
        .removeAttr('aria-atomic')
        .removeAttr('aria-describedby');
    },

    getContentProps: function(props) {
      return omit(props, POPUP_PROPS);
    },

    getAnchor: function() {
      var $this = $(this.getDOMNode());
      var $anchor = $this.find(this.props.anchorSelector);

      if (!$anchor.length) {
        console.warn(
          'Popup anchor was not found, defaulting to $(this).',
          'Selector: %s', this.props.anchorSelector
        );
        $anchor = $this;
      }

      return $anchor;
    },

    /**
     * Common qTip popup options.
     *
     * @param {jQuery[]} $buttons
     * Button(s) (or any element really) that will show and hide the popup.
     *
     * @param {jQuery} $content
     * The content (or content element) of the popup.
     */
    qTipOptions: function($buttons, $content) {
      var options = merge({}, {
        overwrite: false,
        prerender: true,
        show: {
          event: 'click focusin',
          delay: 0,
          target: $buttons,
          effect: false,
          solo: false
        },

        hide: {
          event: 'click focusout',
          effect: false,
          fixed: true,
          target: $buttons
        },

        style: {
          classes: 'qtip-default',
          def: false,
          tip: {
            width: 10,
            height: 5
          }
        },

        position: {
          my: 'right center',
          at: 'left center',
          target: false,
          adjust: {
            x: 0,
            y: 0
          }
        },

        content: {
          text: $content
        },

        events: {
          show: this.__onShow,
          hide: this.__onHide
        }
      }, this.props.popupOptions);

      // Default targets are the popup anchor
      if (!options.show.target) {
        options.show.target = $buttons;
      }

      if (!options.hide.target) {
        options.hide.target = $buttons;
      }

      return options;
    },

    isOpen: function() {
      return !!this.qTip.shown;
    },

    // You don't have to call this manually if you set the #reactivePositioning
    // flag on.
    reposition: function() {
      var qTip = this.qTip;

      if (qTip && !!this.props.reactivePositioning) {
        qTip.reposition();
      }
    },

    /**
     * Focus the node that contains the content to be presented to Screen
     * Readers. You should call this everytime you modify the content and want
     * the SR to read the updated version.
     */
    focusScreenReaderContent: function(queue) {
      if (queue === true) {
        this.focusScreenReaderContentOnUpdate = true;
        return;
      }

      this.getDOMNode().focus();
      this.refs.srContent.getDOMNode().focus();
    },

    screenReaderContentHasFocus: function() {
      return document.activeElement === this.refs.srContent.getDOMNode();
    },

    /** Set the focus on the anchor element that controls the pop-up. */
    focusAnchor: function() {
      this.getDOMNode().focus();
      this.getAnchor()[0].focus();
    },

    /**
     * Close the tooltip and restore focus to the anchor.
     */
    close: function() {
      if (this.qTip.shown) {
        this.qTip.hide();
        this.getAnchor().focus();
      }
    },

    __onShow: function(event, api) {
      api.shown = true;

      if (this.props.onShow) {
        this.props.onShow(this.state.container, api);
      }
    },

    __onHide: function(event, api) {
      api.shown = false;

      if (this.props.onHide) {
        this.props.onHide();
      }
    },

    __getApi: function() {
      return this.qTip;
    }
  });

  return Popup;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/summary/report',['../../ext/react','jquery','./report/status','../../components/popup','../../components/screen_reader_content','../../models/quiz_report_descriptor'],function(React,$,Status,Popup,ScreenReaderContent,Descriptor) {







  var Report = React.createClass({displayName: 'Report',
    mixins: [ React.addons.ActorMixin ],

    propTypes: {
      generatable: React.PropTypes.bool
    },

    getInitialState: function() {
      return {
        tooltipContent: '',
        statusLayer: null
      };
    },

    getDefaultProps: function() {
      return {
        readableType: 'Analysis Report',
        generatable: true,
        isGenerated: false,
        downloadUrl: undefined
      };
    },

    componentDidUpdate: function(prevProps/*, prevState*/) {
      // Restore focus to the generation button which is now the download button
      if (!prevProps.isGenerated && this.props.isGenerated) {
        if (this.refs.popup.screenReaderContentHasFocus()) {
          this.refs.popup.focusAnchor();
        }
      }
      else if (!prevProps.isGenerating && this.props.isGenerating) {
        if (!this.refs.popup.screenReaderContentHasFocus()) {
          this.refs.popup.focusScreenReaderContent(true);
        }
      }
    },

    render: function() {
      var id = this.props.reportType;

      return (
        React.DOM.div({className: "report-generator inline"}, 
          Popup({
            ref: "popup", 
            content: Status, 
            isGenerated: this.props.isGenerated, 
            isGenerating: this.props.isGenerating, 
            generatable: this.props.generatable, 
            progress: this.props.progress, 
            file: this.props.file, 
            reactivePositioning: true, 
            anchorSelector: ".btn", 
            popupOptions: 
              {
                show: {
                  event: 'mouseenter focusin',
                  delay: 0,
                  effect: false,
                  solo: false
                },

                hide: {
                  event: 'mouseleave focusout',
                  delay: 0,
                  effect: false,
                  fixed: true,
                },

                position: {
                  my: 'bottom center',
                  at: 'top center'
                }
              }
            }, 
            this.props.isGenerated ?
              this.renderDownloader() :
              this.renderGenerator()
            
          )
        )
      );
    },

    renderGenerator: function() {
      var srLabel = Descriptor.getInteractionLabel(this.props);

      return (
        React.DOM.button({
          disabled: !this.props.generatable, 
          onClick: this.generate, 
          onKeyPress: this.generateAndFocusContent, 
          className: "btn btn-link generate-report"}, 
            ScreenReaderContent({children: srLabel}), 
            React.DOM.span({'aria-hidden': "true"}, 
              React.DOM.i({className: "icon-analytics"}), " ", this.props.readableType
            )
        )
      );
    },

    renderDownloader: function() {
      var srLabel = Descriptor.getInteractionLabel(this.props);

      return(
        React.DOM.a({href: this.props.file.url, className: "btn btn-link download-report"}, 
          ScreenReaderContent({children: srLabel}), 

          React.DOM.span({'aria-hidden': "true"}, 
            React.DOM.i({className: "icon-analytics"}), " ", this.props.readableType
          )
        )
      );
    },

    generate: function(e) {
      e.preventDefault();

      this.sendAction('quizReports:generate', this.props.reportType);
    },

    generateAndFocusContent: function(e) {
      e.preventDefault();

      this.sendAction('quizReports:generate', this.props.reportType);
    }
  });

  return Report;
});

define('canvas_quiz_statistics/util/seconds_to_time',['i18n!quiz_statistics'],function(I18n) {

  var floor = Math.floor;

  var pad = function(duration) {
    return ('00' + duration).slice(-2);
  };

  /**
   * @member Util
   *
   * Format a duration given in seconds into a stopwatch-style timer, e.g:
   *
   * - 1 second      => `00:01`
   * - 30 seconds    => `00:30`
   * - 84 seconds    => `01:24`
   * - 7230 seconds  => `02:00:30`
   * - 7530 seconds  => `02:05:30`
   *
   * @param {Number} seconds
   *        The duration in seconds.
   *
   * @return {String}
   */
  var secondsToTime = function(seconds) {
    var hh, mm, ss;

    if (seconds > 3600) {
      hh = floor(seconds / 3600);
      mm = floor((seconds - hh*3600) / 60);
      ss = seconds % 60;
      return [ hh, mm, ss ].map(pad).join(':');
    }
    else {
      return [ seconds / 60, seconds % 60 ].map(floor).map(pad).join(':');
    }
  };

  /**
   * Instead of rendering a timestamp as the main method does, this method will
   * render a given number of seconds into a human readable sentence. This is
   * the prefered alternative to present to screen-readers if you're using
   * the method above to format a duration.
   *
   * Examples:
   *
   *  - 1     => `1 second`
   *  - 32    => `32 seconds`
   *  - 84    => `1 minute, and 24 seconds`
   *  - 3684  => `1 hour, and 1 minute`
   *
   * Note that the seconds are discarded when the duration is longer than an
   * hour.
   *
   * @param  {Number} seconds
   *         Duration in seconds.
   *
   * @return {String}
   *         A human-readable string representation of the duration.
   */
  secondsToTime.toReadableString = function(seconds) {
    var hours, minutes, strHours, strMinutes, strSeconds;

    if (seconds < 60) {
      return I18n.t('duration_in_seconds', {
        one: '1 second',
        other: '%{count} seconds'
      }, { count: floor(seconds) });
    }
    else if (seconds < 3600) {
      minutes = floor(seconds / 60);
      seconds = floor(seconds % 60);

      strMinutes = I18n.t('duration_in_minutes', {
        one: '1 minute',
        other: '%{count} minutes'
      }, { count: minutes });

      strSeconds = I18n.t('duration_in_seconds', {
        one: '1 second',
        other: '%{count} seconds'
      }, {
        count: seconds
      });

      return I18n.t('duration_in_minutes_and_seconds', '%{minutes} and %{seconds}', {
        minutes: strMinutes,
        seconds: strSeconds
      });
    }
    else {
      hours = floor(seconds / 3600);
      minutes = floor((seconds - hours*3600) / 60);

      strMinutes = I18n.t('duration_in_minutes', {
        one: '1 minute',
        other: '%{count} minutes'
      }, {
        count: minutes
      });

      strHours = I18n.t('duration_in_hours', {
        one: '1 hour',
        other: '%{count} hours'
      }, {
        count: hours
      });

      return I18n.t('duration_in_hours_and_minutes', '%{hours} and %{minutes}', {
        minutes: strMinutes,
        hours: strHours
      });
    }
  };

  return secondsToTime;
});
define('canvas_quiz_statistics/util/round',[], function() {
  /**
   * @member Util
   * @method round
   * Round a number to N digits.
   *
   * TODO: import as a Canvas package (we have it in util/round.coffee)
   *
   * @param  {Number|String} n
   *         Your number
   *
   * @param  {Number} [digits=2]
   *         Number of digits to round to.
   *
   * @return {Number}
   *         The rounded number, ready for human-consumption.
   */
  return function round(n, digits) {
    var scale;

    if (digits === undefined) {
      digits = 0;
    }

    if (typeof n !== 'number' || !(n instanceof Number)) {
      n = parseFloat(n);
    }

    scale = Math.pow(10, parseInt(digits, 10));
    n = Math.round(n * scale) / scale;

    return n;
  };
});
define('canvas_quiz_statistics/util/format_number',[ '../config' ], function(config) {
  /**
   * @member Util
   * @method formatNumber
   * Format a decimal number into a human-readable string.
   * Examples:
   *
   *     83.2222224 => "83.22"
   *     25 => "25.00"
   *     24.94 => "24.94"
   *
   * @param  {Number|String} n
   *         Your number
   *
   * @param  {Number} [precision=config.precision]
   *         Precision of the returned float (number of digits after the
   *         decimal point.)
   *
   * @return {String}
   *         The formatted number, ready for rendering.
   */
  return function formatNumber(n, precision) {
    if (precision === undefined) {
      precision = config.precision;
    }

    if (typeof n !== 'number' || !(n instanceof Number)) {
      n = parseFloat(n);
    }

    return n.toFixed(parseInt(precision, 10));
  };
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/components/sighted_user_content',['react'],function(React) {


  /**
   * @class Components.SightedUserContent
   *
   * A component that *tries* to hide itself from screen-readers, absolutely
   * expecting that you're providing a more accessible version of the resource
   * using something like a ScreenReaderContent component.
   *
   * Be warned that this does not totally prevent all screen-readers from
   * seeing this content in all modes. For example, VoiceOver in OS X will
   * still see this element when running in the "Say-All" mode and read it
   * along with the accessible version you're providing.
   *
   * > **Warning**
   * >
   * > Use of this component is discouraged unless there's no alternative!!!
   * >
   * > The only one case that justifies its use is when design provides a
   * > totally inaccessible version of a resource, and you're trying to
   * > accommodate the design (for sighted users,) and provide a genuine layer
   * > of accessibility (for others.)
   */
  var SightedUserContent = React.createClass({displayName: 'SightedUserContent',
    getDefaultProps: function() {
      return {
        tagName: 'span'
      };
    },

    render: function() {
      var tagFactory = React.DOM[this.props.tagName];

      return this.transferPropsTo(tagFactory({
        // HTML5 [hidden] works in many screen-readers and in some cases, like
        // VoiceOver's Say-All mode, is the only thing that works for skipping
        // content. However, this clearly has the downside of hiding the
        // content from sighted users as well, so we resort to CSS to get the
        // items back into display and we win-win.
        'hidden': true,
        'aria-hidden': true,
        'role': 'presentation',
        'aria-role': 'presentation',
        'className': 'sighted-user-content'
      }, this.props.children));
    }
  });

  return SightedUserContent;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/summary',['react','i18n!quiz_statistics.summary','./summary/score_percentile_chart','./summary/report','../util/seconds_to_time','../util/round','../util/format_number','../components/sighted_user_content','../components/screen_reader_content'],function(React,I18n,ScorePercentileChart,Report,secondsToTime,round,formatNumber,SightedUserContent,ScreenReaderContent) {










  var Column = React.createClass({displayName: 'Column',
    render: function() {
      return (
        React.DOM.th({scope: "col"}, 
          SightedUserContent({tagName: "i", className: this.props.icon + ' inline'}), 
          ' ', 
          this.props.label
        )
      );
    }
  });

  var Summary = React.createClass({displayName: 'Summary',
    getDefaultProps: function() {
      return {
        quizReports: [],
        pointsPossible: 0,
        scoreAverage: 0,
        scoreHigh: 0,
        scoreLow: 0,
        scoreStdev: 0,
        durationAverage: 0,
        scores: {}
      };
    },

    ratioFor: function(score) {
      var quizPoints = parseFloat(this.props.pointsPossible);

      if (quizPoints > 0) {
        return round(score / quizPoints * 100.0, 0, 0);
      }
      else {
        return 0;
      }
    },

    render: function() {
      return(
        React.DOM.div({id: "summary-statistics"}, 
          React.DOM.header({className: "padded"}, 
            React.DOM.h3({className: "section-title inline"}, 
              I18n.t('quiz_summary', 'Quiz Summary')
            ), 

            React.DOM.div({className: "pull-right"}, 
              this.props.quizReports.map(this.renderReport)
            )
          ), 

          React.DOM.table({className: "text-left"}, 
            ScreenReaderContent({tagName: "caption", forceSentenceDelimiter: true}, 
              I18n.t('table_description',
                'Summary statistics for all turned in submissions')
              
            ), 

            React.DOM.thead(null, 
              React.DOM.tr(null, 
                Column({
                  icon: "icon-quiz-stats-avg", 
                  label: I18n.t('mean', 'Average Score')}), 
                Column({
                  icon: "icon-quiz-stats-high", 
                  label: I18n.t('high_score', 'High Score')}), 
                Column({
                  icon: "icon-quiz-stats-low", 
                  label: I18n.t('low_score', 'Low Score')}), 
                Column({
                  icon: "icon-quiz-stats-deviation", 
                  label: I18n.t('stdev', 'Standard Deviation')}), 
                Column({
                  icon: "icon-quiz-stats-time", 
                  label: I18n.t('avg_time', 'Average Time')})
              )
            ), 

            React.DOM.tbody(null, 
              React.DOM.tr(null, 
                React.DOM.td({className: "emphasized"}, 
                  this.ratioFor(this.props.scoreAverage), "%"
                ), 
                React.DOM.td(null, this.ratioFor(this.props.scoreHigh), "%"), 
                React.DOM.td(null, this.ratioFor(this.props.scoreLow), "%"), 
                React.DOM.td(null, formatNumber(round(this.props.scoreStdev, 2), 2)), 
                React.DOM.td(null, 
                  ScreenReaderContent({forceSentenceDelimiter: true}, 
                    secondsToTime.toReadableString(this.props.durationAverage)
                  ), 
                  /*
                    try to hide the [HH:]MM:SS timestamp from SR users because
                    it's not really useful, however this doesn't work in all
                    modes such as the Speak-All mode (at least on VoiceOver)
                  */
                  SightedUserContent(null, 
                    secondsToTime(this.props.durationAverage)
                  )
                )
              )
            )
          ), 

          ScorePercentileChart({
            key: "chart", 
            scores: this.props.scores, 
            scoreAverage: this.props.scoreAverage, 
            pointsPossible: this.props.pointsPossible})
        )
      );
    },

    renderReport: function(reportProps) {
      reportProps.key = 'report-' + reportProps.id;
      return Report(reportProps);
    },
  });

  return Summary;
});


/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/toggle_details_button',['react','../../components/screen_reader_content','i18n!quiz_statistics.answer_details'],function(React,ScreenReaderContent,I18n) {




  var ToggleDetailsButton = React.createClass({displayName: 'ToggleDetailsButton',
    propTypes: {
      expanded: React.PropTypes.bool.isRequired,
      onClick: React.PropTypes.func,
      controlsAll: React.PropTypes.bool
    },

    getDefaultProps: function() {
      return {
        expanded: false,
        controlsAll: false
      };
    },

    render: function() {
      var isExpanded = this.props.expanded;
      var controlsAll = this.props.controlsAll;
      var label;

      if (isExpanded && controlsAll) {
        label = I18n.t('hide_all', 'Hide answer details for all questions');
      }
      else if (!isExpanded && controlsAll) {
        label = I18n.t('show_all', 'Show answer details for all questions');
      }
      else if (isExpanded) {
        label = I18n.t('hide', 'Hide answer details');
      }
      else {
        label = I18n.t('show', 'Show answer details');
      }

      return(
        React.DOM.button({
          title: label, 
          onClick: this.props.onClick, 
          className: "btn", 
          'aria-live': "polite"}, 
          ScreenReaderContent({children: label}), 

          isExpanded ?
            React.DOM.i({className: "icon-collapse"}) :
            React.DOM.i({className: "icon-expand"})
          
        )
      );
    }
  });

  return ToggleDetailsButton;
});
define('canvas_quiz_statistics/util/class_set',['react'],function(React) {

  /**
   * Shim for React.addons.classSet.
   *
   * @param  {Object} set
   *         A set of class strings and booleans. If the boolean is truthy,
   *         the class will be appended to the className.
   *
   * @return {String}
   *         The produced class string ready for use as a className prop.
   */
  var classSet = function(set) {
    return Object.keys(set).reduce(function(classes, key) {
      if (!!set[key]) {
        classes.push(key);
      }

      return classes;
    }, []).join(' ');
  };

  return (React.addons || {}).classSet || classSet;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/question',['react','../util/class_set'],function(React,classSet) {



  var Question = React.createClass({displayName: 'Question',
    getDefaultProps: function() {
      return {
        expanded: false,
        stretched: false
      };
    },

    render: function() {
      var className = classSet({
        'question-statistics': true,
        'with-details': !!this.props.expanded,
        'stretched-answer-distribution': !!this.props.stretched
      });

      return(
        React.DOM.div({className: className, children: this.props.children})
      );
    }
  });

  return Question;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/header',['react','i18n!quiz_statistics','./toggle_details_button','../../components/screen_reader_content'],function(React,I18n,ToggleDetailsButton,ScreenReaderContent) {





  var QuestionHeader = React.createClass({displayName: 'QuestionHeader',
    getDefaultProps: function() {
      return {
        position: 1,
        responseCount: 0,
        participantCount: 0,
        onToggleDetails: null,
        expandable: true,
        asideContents: false
      };
    },

    render: function() {
      return (
        React.DOM.header(null, 
          ScreenReaderContent({tagName: "h4"}, 
            I18n.t('question_header', 'Question %{position}', { position: this.props.position })
          ), 

          /*
            we'd like SR to read the question description after its position
          */
          ScreenReaderContent({
            dangerouslySetInnerHTML: { __html: this.props.questionText}}
            ), 

          React.DOM.span({className: "question-attempts"}, 
            I18n.t('attempts', 'Attempts: %{count} out of %{total}', {
              count: this.props.responseCount,
              total: this.props.participantCount
            })
          ), 

          React.DOM.div({className: "pull-right"}, 
            this.props.expandable &&
              ToggleDetailsButton({
                onClick: this.props.onToggleDetails, 
                expanded: this.props.expanded}), 
            

            this.props.asideContents
          ), 

          /* hide from SR since it's been read earlier */
          React.DOM.div({
            className: "question-text", 
            'aria-hidden': true, 
            dangerouslySetInnerHTML: { __html: this.props.questionText}}
            )
        )
      );
    }
  });

  return QuestionHeader;
});


/** @jsx React.DOM */
define('canvas_quiz_statistics/views/charts/correct_answer_donut',['react','d3','../../mixins/chart','../../util/round','../../components/sighted_user_content','i18n!quiz_statistics'],function(React,d3,ChartMixin,round,SightedUserContent,I18n) {







  var CIRCLE = 2 * Math.PI;
  var FMT_PERCENT = d3.format('%');

  var Chart = React.createClass({displayName: 'Chart',
    mixins: [ ChartMixin.mixin ],

    createChart: function(node, props) {
      var ratio = props.correctResponseRatio;
      var diameter = props.diameter;
      var radius = diameter / 2;

      var arc = d3.svg.arc()
        .innerRadius(radius)
        .outerRadius(diameter / 2.5)
        .startAngle(0);

      var svg = d3.select(node)
        .attr('width', radius)
        .attr('height', radius)
        .attr('aria-hidden', true)
        .append('g')
          .attr('transform', 'translate(' + radius + ',' + radius + ')');

      // background circle that's always "empty" (shaded in light color)
      svg.append('path')
        .datum({ endAngle: CIRCLE })
        .attr('class', 'background')
        .attr('d', arc);

      // foreground circle that fills up based on ratio (green, or flashy)
      svg.append('path')
        .datum({ endAngle: CIRCLE * ratio })
        .attr('class', 'foreground')
        .attr('d', arc);

      // text inside the circle
      svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '.35em')
        .text(FMT_PERCENT(ratio));

      return svg;
    },

    render: ChartMixin.defaults.render
  });

  var CorrectAnswerDonut = React.createClass({displayName: 'CorrectAnswerDonut',
    propTypes: {
      correctResponseRatio: React.PropTypes.number.isRequired
    },

    getDefaultProps: function() {
      return {
        /**
         * @config {Number} [radius=80]
         *         Diameter of the donut chart in pixels.
         */
        diameter: 80,
        correctResponseRatio: 0,
        children: []
      };
    },

    getDefaultLabel: function() {
      return I18n.t('correct_response_ratio',
        '%{ratio}% of your students correctly answered this question.', {
        ratio: round(this.props.correctResponseRatio * 100.0, 0)
      });
    },

    render: function() {
      return (
        React.DOM.section({className: "correct-answer-ratio-section"}, 
          this.transferPropsTo(Chart()), 

          React.DOM.div({className: "auxiliary"}, 
            SightedUserContent({tagName: "p"}, 
              React.DOM.strong(null, I18n.t('correct_answer', 'Correct answer'))
            ), 

            React.DOM.p(null, this.props.label || this.getDefaultLabel())
          )
        )
      );
    }
  });

  return CorrectAnswerDonut;
});
define('canvas_quiz_statistics/mixins/components/chart_inspector',['react','d3','jquery','qtip'],function(React,d3,$,jQuery_qTip) {





  var makeInspectable = function(selector, view) {
    selector
      .on('mouseover', view.inspect)
      .on('mouseout', view.stopInspecting);
  };

  var DEFAULT_TOOLTIP_OPTIONS = {
    position: {
      my: 'center bottom',
      at: 'center top'
    }
  };

  var ChartMixin = {
    makeInspectable: makeInspectable,

    defaults: {
    },

    mixin: {
      propTypes: {
        /**
         * @property {Function} onInspect
         * A function that will be called with a given datapoint's ID and should
         * yield content to show inside the tooltip.
         *
         * The mixin becomes a no-op if this function does not return a valid
         * HTMLElement node.
         */
        onInspect: React.PropTypes.func
      },

      getDefaultProps: function() {
        return {
          onInspect: null
        };
      },

      buildInspector: function() {
        var node = this.refs.inspector.getDOMNode();

        this.inspectorNode = node;
        this.inspector = $(node).qtip({
          prerender: false,
          overwrite: false,
          style: {
            def: true
          },
          show: {
            effect: false,
            event: false
          },
          hide: {
            effect: false,
            event: false
          },
          content: {
            text: ''
          },
          position: {
            my: 'bottom center',
            at: 'top center',
            viewport: true,
            adjust: {
              method: 'flip'
            }
          }
        }).qtip('api');

        return this.inspector;
      },

      inspect: function(datapoint) {
        var inspector, contentNode;
        var itemId = datapoint.id;
        var tooltipOptions = this.tooltipOptions || DEFAULT_TOOLTIP_OPTIONS;
        var targetNode = d3.event.target;

        if (this.props.onInspect) {
          contentNode = this.props.onInspect(itemId);
        }

        if (!contentNode) {
          return;
        }

        inspector = this.inspector || this.buildInspector();
        inspector.set('content.text', $(contentNode).clone());
        inspector.set('position.target', targetNode);
        inspector.show();
      },

      stopInspecting: function() {
        this.inspector.hide();
      }
    }
  };

  return ChartMixin;
});

define('canvas_quiz_statistics/util/i18n_interpolate',[],function() {
  var INTERPOLATER = /\%\{([^\}]+)\}/g;

  /**
   * Stupid i18n interpolator that interpolates anything between %{} with
   * a value you pass in @options.
   *
   * @param {String} contents
   *        The i18n text block you're interpolating.
   *
   * @param {Object} options
   *        Pairs of variable names and their interpolation values.
   *        The variable names should be snake_cased.
   *
   * @return {String}
   *         The interpolated text.
   */
  return function i18nInterpolate(contents, options) {
    var variables = contents.match(INTERPOLATER);

    if (variables) {
      variables.forEach(function(variable) {
        var optionKey = variable.substr(2, variable.length - 3);
        contents = contents.replace(new RegExp(variable, 'g'), options[optionKey]);
      });
    }

    return contents;
  };
});
define('canvas_quiz_statistics/util/inflections',[],function() {
  return {
    camelize: function(str, lowerFirst) {
      return (str || '').replace (/(?:^|[-_])(\w)/g, function (_, c, index) {
        if (index === 0 && lowerFirst) {
          return c ? c.toLowerCase() : '';
        }
        else {
          return c ? c.toUpperCase () : '';
        }
      });
    },

    underscore: function(str) {
      return str.replace(/([A-Z])/g, function($1){
        return '_' + $1.toLowerCase();
      });
    }
  };
});
define('canvas_quiz_statistics/util/convert_case',['./inflections'],function(Inflections) {

  var camelizeStr = Inflections.camelize;
  var underscoreStr = Inflections.underscore;

  return {
    // Convert all property keys in an object to camelCase
    camelize: function(props) {
      var prop;
      var attrs = {};

      for (prop in props) {
        if (props.hasOwnProperty(prop)) {
          attrs[camelizeStr(prop, true)] = props[prop];
        }
      }

      return attrs;
    },

    underscore: function(props) {
      var prop;
      var attrs = {};

      for (prop in props) {
        if (props.hasOwnProperty(prop)) {
          attrs[underscoreStr(prop)] = props[prop];
        }
      }

      return attrs;
    }
  };
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/components/text',['react','lodash','../util/i18n_interpolate','../util/convert_case'],function(React,_,interpolate,convertCase) {





  var omit = _.omit;
  var underscore = convertCase.underscore;

  var InterpolatedText = React.createClass({displayName: 'InterpolatedText',
    render: function() {
      var container, markup, tagAttrs, options;
      if (!this.props.children) {
        return React.DOM.div(null);
      }

      tagAttrs = {};
      container = React.DOM.div(null, this.props.children);
      markup = React.renderComponentToStaticMarkup(container);
      options = omit(this.props, 'children');

      tagAttrs.dangerouslySetInnerHTML = {
        __html: interpolate(markup, underscore(options || {}))
      };

      return(
        React.DOM.div(tagAttrs)
      );
    }
  });

  var Text = React.createClass({displayName: 'Text',
    getInitialState: function() {
      return {
        markup: undefined
      };
    },

    getDefaultProps: function() {
      return {
        phrase: null,
      };
    },

    
    render: function() {
      return React.DOM.div({'aria-role': "article", dangerouslySetInnerHTML: {__html: this.state.markup}});
    }
  });

  return Text;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/charts/answer_bars',['react','d3','lodash','../../mixins/chart','../../mixins/components/chart_inspector','i18n!quiz_statistics.answer_bars_chart','../../components/screen_reader_content','../../components/text','../../util/round'],function(React,d3,_,ChartMixin,ChartInspectorMixin,I18n,ScreenReaderContent,Text,round) {










  var mapBy = _.map;
  var findWhere = _.findWhere;
  var compact = _.compact;

  var Chart = React.createClass({displayName: 'Chart',
    mixins: [ ChartMixin.mixin, ChartInspectorMixin.mixin ],

    tooltipOptions: {
      position: {
        my: 'center+15 bottom',
        at: 'center top-8'
      }
    },

    getDefaultProps: function() {
      return {
        answers: [],

        /**
         * @property {Number} [barWidth=30]
         * Width of the bars in the chart in pixels.
         */
        barWidth: 30,

        /**
         * @property {Number} [barMargin=1]
         *
         * Whitespace to offset the bars by, in pixels.
         */
        barMargin: 1,
        xOffset: 16,
        yAxisLabel: '',
        xAxisLabels: false,
        linearScale: true,
        width: 'auto',
        height: 120
      };
    },

    createChart: function(node, props) {
      var otherAnswers;
      var data = props.answers;
      var container = this.getDOMNode();

      var sz = data.reduce(function(sum, item) {
        return sum + item.y;
      }, 0);

      var highest = d3.max(mapBy(data, 'y'));

      var width, height;
      var margin = { top: 0, right: 0, bottom: 0, left: 0 };

      if (props.width === 'auto') {
        width = container.offsetWidth;
      }
      else {
        width = parseInt(props.width, 10);
      }

      width -= margin.left - margin.right;
      height = props.height - margin.top - margin.bottom;

      var barWidth = props.barWidth;
      var barMargin = props.barMargin;
      var xOffset = props.xOffset;

      var x = d3.scale.ordinal()
        .rangeRoundBands([0, barWidth * sz], 0.025);

      var y = d3.scale.linear()
        .range([height, 0]);

      var visibilityThreshold = Math.max(5, y(highest) / 100.0);

      var svg = d3.select(node)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .attr('aria-hidden', true)
        .attr('role', 'presentation')
        .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      var classifyChartBar = this.classifyChartBar;

      x.domain(data.map(function(d, i) { return d.label || i; }));
      y.domain([ 0, sz ]);

      var bars = svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
          .attr("class", function(d) {
            return classifyChartBar(d);
          })
          .attr("x", function(d, i) {
            return i * (barWidth + barMargin) + xOffset;
          })
          .attr("width", barWidth)
          .attr("y", function(d) {
            return y(d.y) - visibilityThreshold;
          })
          .attr("height", function(d) {
            return height - y(d.y) + visibilityThreshold;
          });

      ChartInspectorMixin.makeInspectable(bars, this);

      // If the special "No Answer" is present, we represent it as a diagonally-
      // striped bar, but to do that we need to render the <svg:pattern> that
      // generates the stripes and use that as a fill pattern, and we also need
      // to create the <svg:rect> that will be filled with that pattern.
      otherAnswers = compact([
        findWhere(data, { id: 'other' }),
        findWhere(data, { id: 'none' })
      ]);

      if (otherAnswers.length) {
        this.renderStripePattern(svg);
        svg.selectAll('.bar.bar-striped')
          .data(otherAnswers)
          .enter().append('rect')
            .attr('class', 'bar bar-striped')
            // We need to inline the fill style because we are referencing an
            // inline pattern (#diagonalStripes) which is unreachable from a CSS
            // directive.
            //
            // See this link [StackOverflow] for more info: http://bit.ly/1uDTqyn
            .attr('style', 'fill: url(#diagonalStripes);')
            // remove 2 pixels from width and height, and offset it by {1,1} on
            // both axes to "contain" it inside the margins of the bg rect
            .attr('x', function(d) {
              return data.indexOf(d) * (barWidth + barMargin) + xOffset + 1;
            })
            .attr('width', barWidth-2)
            .attr('y', function(d) {
              return y(d.y + visibilityThreshold) + 1;
            })
            .attr('height', function(d) {
              return height - y(d.y + visibilityThreshold) - 2;
            });
      }

      return svg;
    },

    renderStripePattern: function(svg) {
      svg.append('pattern')
        .attr('id', 'diagonalStripes')
        .attr('width', 5)
        .attr('height', 5)
        .attr('patternTransform', 'rotate(45 0 0)')
        .attr('patternUnits', 'userSpaceOnUse')
        .append('g')
          .append('path')
            .attr('d', 'M0,0 L0,10');
    },

    classifyChartBar: function(answer) {
      if (answer.correct) {
        return 'bar bar-highlighted';
      } else {
        return 'bar';
      }
    },

    updateChart: ChartMixin.mixin.updateChart,
    removeChart: ChartMixin.mixin.removeChart,

    render: function() {
      return (
        React.DOM.div(null, 
          React.DOM.div({ref: "inspector"}), 
          React.DOM.svg({ref: "chart", className: "chart"})
        )
      );
    }
  });

  // A table for screen-readers that provides an alternative view of the data.
  var Table = React.createClass({displayName: 'Table',
    getDefaultProps: function() {
      return {
        answers: []
      };
    },

    render: function() {
      return (
        React.DOM.table(null, 
          React.DOM.caption(null, 
            React.DOM.div({dangerouslySetInnerHTML: { __html: (function(){var wrapper={};return I18n.t("audible_description", "This table contains the number of responses each answer in the question has received.", {"wrapper":wrapper});}())}})
          ), 

          React.DOM.tbody(null, 
            this.props.answers.map(this.renderEntry)
          )
        )
      );
    },

    renderEntry: function(answer, position) {
      return (
        React.DOM.tr({key: 'answer-'+answer.id}, 
          React.DOM.td({scope: "col"}, 
            I18n.t('audible_answer_position', 'Answer %{position}: ', { position: position+1 }), 

            answer.text + '. ', /* make sure there's a sentence delimiter */

            answer.correct &&
              React.DOM.em(null, 
                ' ', 
                I18n.t('audible_correct_answer_indicator', 'This is a correct answer.')
              )
            
          ), 

          React.DOM.td(null, 
            I18n.t('audible_answer_response_count', {
              zero: 'No responses.',
              one: 'One response.',
              other: '%{count} responses.'
            }, {
              count: answer.responses
            })
          )
        )
      );
    }
  });

  var AnswerBars = React.createClass({displayName: 'AnswerBars',
    propTypes: {
    },

    getDefaultProps: function() {
      return {
        answers: [],
        children: []
      };
    },

    render: function() {
      var chartData = this.props.answers.map(function(answer) {
        return {
          id: ''+answer.id,
          y: answer.responses,
          correct: answer.correct
        };
      });

      var tableData = this.props.answers.map(function(answer) {
        return {
          id: answer.id,
          text: answer.text,
          correct: answer.correct,
          responses: answer.responses
        }
      });

      return (
        React.DOM.section({className: "answer-distribution-section"}, 
          Chart({ref: "chart", answers: chartData, onInspect: this.getAnswerTooltip}), 
          ScreenReaderContent({tagName: "div"}, 
            Table({answers: tableData})
          ), 

          React.DOM.div({className: "auxiliary", style: {display:'none'}}, 
            this.props.answers.map(this.renderAnswerTooltip)
          )
        )
      );
    },

    renderAnswerTooltip: function(answer) {
      return (
        React.DOM.div({
          key: 'answer-' + answer.id, 
          ref: 'answer_' + answer.id, 
          className: "answer-distribution-tooltip-content"}, 
          React.DOM.p(null, 
            React.DOM.span({className: "answer-response-ratio"}, round(answer.ratio), "%"), 
            React.DOM.span({className: "answer-response-count"}, 
              I18n.t('response_count', {
                zero: 'Nobody',
                one: '1 student',
                other: '%{count} students'
              }, { count: answer.responses })
            )
          ), 

          React.DOM.hr(null), 

          React.DOM.div({className: "answer-text"}, 
            answer.text
          )
        )
      );
    },

    getAnswerTooltip: function(answerId) {
      return this.refs['answer_' + answerId].getDOMNode();
    }
  });

  return AnswerBars;
});
define('canvas_quiz_statistics/constants',[],function() {
  return {
    DISCRIMINATION_INDEX_THRESHOLD: 0.25,

    // a whitelist of the attributes we need from the payload
    QUIZ_STATISTICS_ATTRS: [
      'id',
      'points_possible',
      'speed_grader_url',
      'quiz_submissions_zip_url',
    ],

    SUBMISSION_STATISTICS_ATTRS: [
      'score_average',
      'score_high',
      'score_low',
      'score_stdev',
      'scores',
      'duration_average',
      'unique_count',
    ],

    QUESTION_STATISTICS_ATTRS: [
      'id',
      'question_type',
      'question_text',
      'responses',
      'answers',
      'position',

      // multiple-choice & true/false
      'answered_student_count',
      'top_student_count',
      'middle_student_count',
      'bottom_student_count',
      'correct_top_student_count',
      'correct_middle_student_count',
      'correct_bottom_student_count',
      'point_biserials',

      // multiple-answers
      'correct',
      'partially_correct',

      // FIMB, Multiple-Dropdowns, Matching
      'answer_sets',

      // Essay
      'full_credit',
      'point_distribution',
    ],

    POINT_BISERIAL_ATTRS: [
      'answer_id',
      'correct',
      'distractor',
      'point_biserial',
    ],

    QUIZ_REPORT_ATTRS: [
      'id',
      'report_type',
      'readable_type',
      'generatable',
      'includes_all_versions',
      'url'
    ],

    PROGRESS_ATTRS: [
      'id',
      'completion',
      'url', // for polling
      'workflow_state'
    ],

    ATTACHMENT_ATTRS: [
      'created_at',
      'url'
    ],

    DISCRIMINATION_INDEX_HELP_ARTICLE_URL: "http://guides.instructure.com/m/4152/l/41484-once-i-publish-my-quiz-what-kinds-of-quiz-statistics-are-available",

    PROGRESS_ACTIVE: 'running',
    PROGRESS_COMPLETE: 'completed',
    PROGRESS_FAILED: 'failed',

    KC_RETURN: 13
  };
});



/** @jsx React.DOM */
define('canvas_quiz_statistics/components/dialog',['react','jqueryui/dialog','jquery','lodash','../constants'],function(React,jQueryUIDialog,$,_,K) {





  var omit = _.omit;

  /**
   * @class Components.Dialog
   *
   * Wrap a component inside a jQueryUI Dialog and keep it updated like you
   * would any other component. The wrapped component is refered to as the
   * "content", while the wrapper component which you interact with is refered
   * to as the "Dialog".
   *
   * All the props you pass to this component are passed through as-is to the
   * dialog content, except for a number of props that control the dialog's
   * toggle button. See #propTypes for more info.
   *
   * TODO: a11y
   *
   * === Usage example
   *
   * Let's say you have a view called Help that has some helpful information
   * and you would like to display this view inside a dialog. You also want
   * to bind a button to show this dialog, with a label that says "Help".
   *
   *     define(function(require) {
   *       var Dialog = require('components/dialog');
   *       var HelpView = require('./help');
   *
   *       var View = React.createClass({
   *         render: function() {
   *           return (
   *             <div>
   *               <Dialog
   *                 content={HelpView}
   *                 tagName="button"
   *                 className="btn btn-success">
   *                 Help
   *               </Dialog>
   *             </div>
   *           );
   *         }
   *       });
   *
   *       return View;
   *     });
   */
  var Dialog = React.createClass({displayName: 'Dialog',
    propTypes: {
      /**
       * @property {React.Component} content
       *
       * A type of component that should be rendered *inside* the $.dialog().
       *
       * The Dialog component will take care of mounting an instance of this
       * type inside the $.dialog() and keeping it updated with the props you
       * pass through.
       */
      content: React.PropTypes.func,

      /**
       * @property {React.Component} children
       *
       * Whatever you pass as children to this component will act as a toggle
       * button for the dialog. Clicking it will show or hide the dialog based
       * on its state.
       *
       * You can choose to pass nothing for this, then you will have to manually
       * control the toggling of the dialog by assigning a ref and using the
       * exposed API. Example:
       *
       *     render: function() {
       *       return (
       *         <div onClick={this.toggleDialog}>
       *           <Dialog content={MyContent} ref="dialog" />
       *         </div>
       *       )
       *     },
       *
       *     toggleDialog: function() {
       *       if (this.refs.dialog.isOpen()) {
       *         this.refs.dialog.close();
       *       } else {
       *         this.refs.dialog.open();
       *       }
       *     }
       */
      children: React.PropTypes.renderable,

      /**
       * @property {String} [tagName="div"]
       * You can customize the tag that is used as the dialog toggle element.
       */
      tagName: React.PropTypes.string,

      /**
       * @property {String} [className=""]
       * CSS classes to add to the dialog toggle element.
       */
      className: React.PropTypes.string,

      /**
       * @property {String} title
       * A string to display in the dialog's titlebar.
       */
      title: React.PropTypes.string,

      /**
       * @property {Number} [width=300]
       * How wide the dialog should start out, in pixels.
       */
      width: React.PropTypes.number,

      /**
       * @property {Boolean} [autoOpen=false]
       * Dialog option. When true, the dialog will open as soon as this
       * component is mounted.
       */
      autoOpen: React.PropTypes.bool,

      /**
       * @property {Boolean} [keyboardAccessible=true]
       *
       * If this is on, the toggle button will be tabbable (reached using TAB)
       * and will intercept RETURN keypresses to show the dialog.
       *
       * Recommended!
       */
      keyboardAccessible: React.PropTypes.bool,

      /**
       * @property {String} [role="button"]
       * The ARIA role of the dialog toggle.
       */
      role: React.PropTypes.string,

      /**
       * @property {String} aria-label
       *
       * A string to provide to screen-readers to tell the user that pressing
       * this element will launch a specific dialog.
       *
       * A good example of a message:
       *
       *     "Learn more about the Discrimination Index."
       *
       * That, coupled with a role of "button" will help the user understand
       * what the toggle element really is.
       */
      "aria-label": React.PropTypes.string,
    },

    getInitialState: function() {
      return {
        content: null,
        container: null,
        $container: null
      };
    },

    getDefaultProps: function() {
      return {
        children: [],
        autoOpen: false,
        tagName: 'div',
        role: 'button',
        title: null,
        width: 300,
        keyboardAccessible: true
      };
    },

    componentDidUpdate: function(/*prevProps, prevState*/) {
      var props = this.props;

      // Create the dialog if it hasn't been created yet:
      if (!this.state.content && props.content) {
        this.__renderDialog(props.content, props);
      }

      // Update the component within the dialog:
      if (this.state.content) {
        this.state.content.setProps(this.__getContentProps(props));
      }
    },

    componentWillUnmount: function() {
      this.__removeDialog();
    },

    render: function() {
      var tag = React.DOM[this.props.tagName];

      return (
        tag({
          onClick: this.toggle, 
          onKeyPress: this.openOnReturn, 
          className: this.props.className, 
          children: this.props.children, 
          role: this.props.role, 
          'aria-label': this.props['aria-label'], 
          tabIndex: this.props.keyboardAccessible ? "0" : undefined})
      );
    },

    /** Open the dialog */
    open: function() {
      this.__send('open');
    },

    openOnReturn: function(e) {
      if (this.props.keyboardAccessible && e.which === K.KC_RETURN) {
        e.preventDefault();
        this.open();
      }
    },

    /** Close the dialog */
    close: function() {
      this.__send('close');
    },

    /** Is the dialog open? */
    isOpen: function() {
      return this.__send('isOpen');
    },

    toggle: function() {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    },

    /**
     * @internal
     */
    __renderDialog: function(content, props) {
      var container = document.createElement('div');
      var renderedContent = React.renderComponent(content(), container);

      $(container).dialog({
        autoOpen: props.autoOpen,
        title: props.title,
        width: props.width
      });

      this.setState({
        content: renderedContent,
        container: container,
        $container: $(container)
      });
    },

    __removeDialog: function() {
      if (this.state.$container) {
        // No need to remove the container as it was not really attached to
        // the DOM, simply unmounting the component will suffice.
        React.unmountComponentAtNode(this.state.container);

        this.state.$container.dialog('destroy');
      }
    },

    /**
     * @internal Send an API command to the jQueryUI Dialog instance.
     *
     * @param  {String} command
     *         jQueryUI Dialog API message.
     *
     * @return {Mixed}
     *         Whatever the dialog API returns, if a dialog actually exists.
     */
    __send: function(command) {
      if (this.state.$container) {
        return this.state.$container.dialog(command);
      }
    },

    __getContentProps: function(props) {
      return omit(props, [
        'className', 'tagName', 'content', 'children',
        'width', 'title', 'autoOpen',
        'aria-label', 'role', 'keyboardAccessible'
      ]);
    }
  });

  return Dialog;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/charts/discrimination_index/help',['react','../../../constants','../../../components/text','i18n!quiz_statistics'],function(React,K,Text,I18n) {





  var Help = React.createClass({displayName: 'Help',
    render: function() {
      return(
        React.DOM.div({dangerouslySetInnerHTML: { __html: (function(){var wrapper={"****":"<a href=\"%{article_url}\" target=\"_blank\">$1</a>","***":"<p>$1</p>","**":"<p>$1</p>","*":"<p tabIndex=\"0\" autoFocus>$1</p>"};return I18n.t("discrimination_index_help", "* This metric provides a measure of how well a single question can tell the difference (or discriminate) between students who do well on an exam and those who do not. * ** It divides students into three groups based on their score on the whole quiz and displays those groups by who answered the question correctly. ** *** ****More information is available here.**** ***", {"article_url":K.DISCRIMINATION_INDEX_HELP_ARTICLE_URL,"wrapper":wrapper});}())}})
      );
    }
  });

  return Help;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/charts/discrimination_index',['react','d3','../../constants','i18n!quiz_statistics.discrimination_index','../../util/class_set','../../mixins/chart','../../components/dialog','../../components/text','../../components/screen_reader_content','../../components/sighted_user_content','./discrimination_index/help','../../util/format_number'],function(React,d3,K,I18n,classSet,ChartMixin,Dialog,Text,ScreenReaderContent,SightedUserContent,Help,formatNumber) {













  var divide = function(x, y) {
    return (parseFloat(x) / y) || 0;
  };

  var Chart = React.createClass({displayName: 'Chart',
    mixins: [ ChartMixin.mixin ],

    getDefaultProps: function() {
      return {
        correct: [],
        total: [],
        ratio: []
      };
    },

    createChart: function(node, props) {
      var barHeight, barWidth, svg;

      barHeight = props.height / 3;
      barWidth = props.width / 2;

      svg = d3.select(node)
        .attr('width', props.width)
        .attr('height', props.height)
        .append('g');

      svg.selectAll('.bar.correct')
        .data(props.ratio)
        .enter()
          .append('rect')
          .attr('class', 'bar correct')
          .attr('x', barWidth)
          .attr('width', function(correctRatio) {
            return correctRatio * barWidth;
          }).attr('y', function(d, bracket) {
            return bracket * barHeight;
          }).attr('height', function() {
            return barHeight - 1;
          });

      svg.selectAll('.bar.incorrect')
        .data(props.ratio)
        .enter()
          .append('rect')
          .attr('class', 'bar incorrect')
          .attr('x', function(correctRatio) {
            return -1 * (1 - correctRatio * barWidth);
          }).attr('width', function(correctRatio) {
            return (1 - correctRatio) * barWidth;
          }).attr('y', function(d, bracket) {
            return bracket * barHeight;
          }).attr('height', function() {
            return barHeight - 1;
          });

      this.__svg = svg;

      return svg;
    },

    render: ChartMixin.defaults.render
  });

  // A table for screen-readers that provides an alternative view of the data.
  var Table = React.createClass({displayName: 'Table',
    getDefaultProps: function() {
      return {
        brackets: []
      };
    },

    render: function() {
      return (
        React.DOM.table(null, 
          React.DOM.caption(null, 
            React.DOM.div({dangerouslySetInnerHTML: { __html: (function(){var wrapper={};return I18n.t("audible_chart_description", "This table lists how each bracket of students in the class have responded to this question. Student brackets are composed based on their score. The top bracket consists of the highest 27%, while the middle bracket consists of the middle 46%, and the bottom bracket consists of the lowest 27%.", {"wrapper":wrapper});}())}})
          ), 

          React.DOM.tbody(null, 
            this.props.brackets.map(this.renderEntry)
          )
        )
      );
    },
    renderEntry: function(bracket) {
      var label;

      if (bracket.incorrect === 0) {
        label = I18n.t('audible_bracket_aced',
          'All students in this bracket have answered correctly.');
      }
      else if (bracket.correct === 0) {
        label = I18n.t('audible_bracket_failed',
          'Not a single student in this bracket has provided a correct answer.');
      }
      else {
        label = I18n.t('audible_response_ratio_distribution',
          '%{correct_ratio}% of students in this bracket have answered correctly, and %{incorrect_ratio}% have not.', {
            correct_ratio: bracket.correctRatio,
            incorrect_ratio: 100 - bracket.correctRatio
          });
      }

      return (
        React.DOM.tr({key: 'bracket-'+bracket.id}, 
          React.DOM.td({scope: "col"}, 
            bracket.label
          ), 

          React.DOM.td(null, 
            label
          )
        )
      );
    }
  });

  var DiscriminationIndex = React.createClass({displayName: 'DiscriminationIndex',
    getDefaultProps: function() {
      return {
        width: 270,
        height: 14 * 3,
        discriminationIndex: 0,
        topStudentCount: 0,
        middleStudentCount: 0,
        bottomStudentCount: 0,
        correctTopStudentCount: 0,
        correctMiddleStudentCount: 0,
        correctBottomStudentCount: 0,
      };
    },

    render: function() {
      var di = this.props.discriminationIndex;
      var sign = di > K.DISCRIMINATION_INDEX_THRESHOLD ? '+' : '-';
      var className = {
        'index': true,
        'positive': sign === '+',
        'negative': sign !== '+'
      };

      var chartData, tableData;
      var stats = {
        top: {
          correct: this.props.correctTopStudentCount,
          total: this.props.topStudentCount,
        },
        mid: {
          correct: this.props.correctMiddleStudentCount,
          total: this.props.middleStudentCount,
        },
        bot: {
          correct: this.props.correctBottomStudentCount,
          total: this.props.bottomStudentCount,
        }
      };

      chartData = {
        correct: [
          stats.top.correct, stats.mid.correct, stats.bot.correct
        ],

        total: [
          stats.top.total, stats.mid.total, stats.bot.total
        ],

        ratio: [
          divide(stats.top.correct, stats.top.total),
          divide(stats.mid.correct, stats.mid.total),
          divide(stats.bot.correct, stats.bot.total)
        ]
      };

      chartData.width = this.props.width;
      chartData.height = this.props.height;

      tableData = [
        {
          id: 'top',
          label: I18n.t('audible_top_bracket', 'Top bracket: '),
          correct: stats.top.correct,
          incorrect: stats.top.total - stats.top.correct,
          correctRatio: Math.round(chartData.ratio[0] * 100)
        },
        {
          id: 'mid',
          label: I18n.t('audible_middle_bracket', 'Middle bracket: '),
          correct: stats.mid.correct,
          incorrect: stats.mid.total - stats.mid.correct,
          correctRatio: Math.round(chartData.ratio[1] * 100)
        },
        {
          id: 'bot',
          label: I18n.t('audible_bottom_bracket', 'Bottom bracket: '),
          correct: stats.bot.correct,
          incorrect: stats.bot.total - stats.bot.correct,
          correctRatio: Math.round(chartData.ratio[2] * 100)
        },
      ];

      return (
        React.DOM.section({className: "discrimination-index-section"}, 
          React.DOM.p(null, 
            SightedUserContent(null, 
              React.DOM.em({className: classSet(className)}, 
                React.DOM.span({className: "sign"}, sign), 
                formatNumber(Math.abs(this.props.discriminationIndex || 0))
              ), 

              ' ', 

              React.DOM.strong(null, 
                I18n.t('discrimination_index', 'Discrimination Index')
              )
            ), 

            ScreenReaderContent(null, 
              I18n.t('audible_discrimination_index', 'Discrimination Index: %{number}.', {
                number: formatNumber(this.props.discriminationIndex || 0)
              })
            ), 

            Dialog({
              tagName: "i", 
              title: I18n.t('discrimination_index_dialog_title', 'The Discrimination Index Chart'), 
              content: Help, 
              width: 550, 
              className: "chart-help-trigger icon-question", 
              'aria-label': I18n.t('discrimination_index_dialog_trigger', 'Learn more about the Discrimination Index.'), 
              tabIndex: "0"})
          ), 

          Chart(chartData), 

          ScreenReaderContent({tagName: "div"}, 
            Table({brackets: tableData})
          )
        )
      );
    }
  });

  return DiscriminationIndex;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/multiple_choice/answers',['react'],function(React) {

  var Answers = React.createClass({displayName: 'Answers',
    getDefaultProps: function() {
      return {
        answers: []
      };
    },

    render: function() {
      return(
        React.DOM.ol({className: "answer-drilldown detail-section"}, 
          this.props.answers.map(this.renderAnswer)
        )
      );
    },

    renderAnswer: function(answer) {
      return (
        React.DOM.li({
          key: 'answer-'+answer.id, 
          className: answer.correct ? 'correct' : undefined}, 
          React.DOM.span({className: "answer-response-ratio"}, 
            answer.ratio, " ", React.DOM.sup(null, "%")
          ), 

          React.DOM.div({className: "answer-text"}, 
            answer.text
          )
        )
      );
    }
  });

  return Answers;
});
define('canvas_quiz_statistics/models/ratio_calculator',[],function() {
  var MULTIPLE_ANSWERS = 'multiple_answers_question';

  /**
   * @class Util
   * @method calculateResponseRatio
   *
   * Calculates the ratio of students who answered this question correctly
   * (partially correct answers do not count when applicable)
   *
   * The ratio calculation may differ based on the question type, this class
   * takes care of it by exposing a single API #ratio() that hides those details
   * from you.
   *
   * @param {Object[]} answerPool
   * This is the set of answers that we'll use to calculate the ratio.
   *
   * Synopsis of the expected answer objects in the set:
   *
   *     {
   *       "responses": 0,
   *       "correct": true
   *     }
   *
   * Most question types will have these defined in the top-level "answers" set,
   * but for some others that support answer sets, these could be found in
   * `answer_sets.@each.answer_matches`.
   *
   * @return {Number} A scalar, the ratio.
   */
  return function calculateResponseRatio(answerPool, participantCount, suppl) {
    var questionType, correctResponseCount;

    participantCount = parseInt(participantCount || 0, 10);

    if (participantCount <= 0) {
      return 0;
    }

    if (suppl) {
      questionType = suppl.questionType;
    }

    // Multiple-Answer question stats already come served with a "correct"
    // field that denotes the count of students who provided a fully correct
    // answer, so we don't have to calculate anything for it.
    if (MULTIPLE_ANSWERS === questionType) {
      correctResponseCount = suppl.correctResponseCount || 0;
    }
    else {
      correctResponseCount = answerPool.reduce(function(sum, answer) {
        return (answer.correct) ? sum + answer.responses : sum;
      }, 0);
    }

    return parseFloat(correctResponseCount) / participantCount;
  };
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/multiple_choice',['../../ext/react','../question','./header','../charts/correct_answer_donut','../charts/answer_bars','../charts/discrimination_index','./multiple_choice/answers','../../models/ratio_calculator'],function(React,Question,QuestionHeader,CorrectAnswerDonut,AnswerBars,DiscriminationIndex,Answers,calculateResponseRatio) {









  var MultipleChoice = React.createClass({displayName: 'MultipleChoice',
    render: function() {
      var rr = calculateResponseRatio(this.props.answers, this.props.participantCount, {
        questionType: this.props.questionType
      });

      return(
        Question({expanded: this.props.expanded}, 
          QuestionHeader({
            responseCount: this.props.answeredStudentCount, 
            participantCount: this.props.participantCount, 
            onToggleDetails: this.props.onToggleDetails, 
            expanded: this.props.expanded, 
            questionText: this.props.questionText, 
            position: this.props.position}), 

          React.DOM.div({key: "charts"}, 
            CorrectAnswerDonut({correctResponseRatio: rr}), 
            AnswerBars({answers: this.props.answers}), 
            DiscriminationIndex({
              discriminationIndex: this.props.discriminationIndex, 
              topStudentCount: this.props.topStudentCount, 
              middleStudentCount: this.props.middleStudentCount, 
              bottomStudentCount: this.props.bottomStudentCount, 
              correctTopStudentCount: this.props.correctTopStudentCount, 
              correctMiddleStudentCount: this.props.correctMiddleStudentCount, 
              correctBottomStudentCount: this.props.correctBottomStudentCount}
              )
          ), 

          this.props.expanded && Answers({answers: this.props.answers})
        )
      );
    },
  });

  return MultipleChoice;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/short_answer',['../../ext/react','../question','../charts/correct_answer_donut','../charts/answer_bars','./multiple_choice/answers','../../models/ratio_calculator','./header'],function(React,Question,CorrectAnswerDonut,AnswerBars,Answers,calculateResponseRatio,QuestionHeader) {








  var ShortAnswer = React.createClass({displayName: 'ShortAnswer',
    render: function() {
      var props = this.props;
      var crr = calculateResponseRatio(props.answers, props.participantCount, {
        correctResponseCount: props.correct,
        questionType: props.questionType
      });

      return(
        Question({stretched: true, expanded: props.expanded}, 
          QuestionHeader({
            responseCount: props.responses, 
            participantCount: props.participantCount, 
            onToggleDetails: props.onToggleDetails, 
            expanded: props.expanded, 
            questionText: props.questionText, 
            position: this.props.position}), 

          React.DOM.div({key: "charts"}, 
            CorrectAnswerDonut({correctResponseRatio: crr}), 
            AnswerBars({answers: props.answers})
          ), 

          props.expanded && Answers({answers: props.answers})
        )
      );
    },
  });

  return ShortAnswer;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/fill_in_multiple_blanks',['../../ext/react','i18n!quiz_statistics','../question','./header','../charts/correct_answer_donut','../charts/answer_bars','./multiple_choice/answers','../../models/ratio_calculator','../../util/round','../../util/class_set'],function(React,I18n,Question,QuestionHeader,CorrectAnswerDonut,AnswerBars,Answers,calculateResponseRatio,round,classSet) {











  var FillInMultipleBlanks = React.createClass({displayName: 'FillInMultipleBlanks',
    getInitialState: function() {
      return {
        answerSetId: undefined,
      };
    },

    getDefaultProps: function() {
      return {
        answerSets: []
      };
    },

    getAnswerPool: function() {
      var answerSets = this.props.answerSets;
      var answerSetId = this.state.answerSetId || (answerSets[0] || {}).id;
      var answerSet = answerSets.filter(function(answerSet) {
        return answerSet.id === answerSetId;
      })[0] || { answers: [] };

      return answerSet.answers;
    },

    componentDidUpdate: function(prevProps, prevState) {
      // Make sure we always have an active answer set:
      if (!this.state.answerSetId && this.props.answerSets) {
        this.setState({ answerSetId: (this.props.answerSets[0] || {}).id });
      }
    },

    render: function() {
      var crr = calculateResponseRatio(this.getAnswerPool(), this.props.participantCount, {
        questionType: this.props.questionType
      });

      return(
        Question({expanded: this.props.expanded}, 
          QuestionHeader({
            responseCount: this.props.responses, 
            participantCount: this.props.participantCount, 
            onToggleDetails: this.props.onToggleDetails, 
            expanded: this.props.expanded, 
            questionText: this.props.questionText, 
            position: this.props.position}), 

          React.DOM.nav({className: "row-fluid answer-set-tabs"}, 
            this.props.answerSets.map(this.renderAnswerSetTab)
          ), 

          React.DOM.div({key: "charts"}, 
            CorrectAnswerDonut({
              correctResponseRatio: crr, 
              label: I18n.t('correct_multiple_response_ratio',
                '%{ratio}% of your students responded correctly.', {
                ratio: round(crr * 100.0, 0)
              })}), 

            AnswerBars({answers: this.getAnswerPool()})
          ), 

          this.props.expanded && Answers({answers: this.getAnswerPool()})
        )
      );
    },

    renderAnswerSetTab: function(answerSet) {
      var id = answerSet.id;
      var className = classSet({
        'active': this.state.answerSetId === id
      });

      return (
        React.DOM.button({
          key: 'answerSet-' + id, 
          onClick: this.switchAnswerSet.bind(null, id), 
          className: className, 
          children: answerSet.text})
      );
    },

    switchAnswerSet: function(answerSetId, e) {
      e.preventDefault();

      this.setState({
        answerSetId: answerSetId
      });
    }
  });

  return FillInMultipleBlanks;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/essay/score_chart',['react','d3','lodash','../../../mixins/chart','../../../mixins/components/chart_inspector','i18n!quiz_statistics','../../../util/round'],function(React,d3,_,ChartMixin,ChartInspectorMixin,I18n,round) {








  var Chart = React.createClass({displayName: 'Chart',
    mixins: [ ChartMixin.mixin, ChartInspectorMixin.mixin ],

    tooltipOptions: {
      position: {
        my: 'center+15 bottom',
        at: 'center top-8'
      }
    },

    getDefaultProps: function() {
      return {
        answers: [],

        /**
         * @property {Number} [barWidth=30]
         * Width of the bars in the chart in pixels.
         */
        barWidth: 30,

        /**
         * @property {Number} [barMargin=1]
         *
         * Whitespace to offset the bars by, in pixels.
         */
        barMargin: 1,
        xOffset: 16,
        yAxisLabel: '',
        xAxisLabels: false,
        linearScale: true,
        width: 'auto',
        height: 120
      };
    },

    createChart: function(node, props) {
      var line, area;
      var data = props.scores;
      var container = this.getDOMNode();

      var radius = 4;
      var circleVisibilityThreshold = radius * 4;
      var margin = {
        left: circleVisibilityThreshold,
        top: circleVisibilityThreshold,
        right: circleVisibilityThreshold,
        bottom: 0
      };

      var width = 580 - margin.left - margin.right;
      var height = 120 - margin.top - margin.bottom;

      var x = d3.scale.linear().range([0, width]);
      var y = d3.scale.linear().range([height, 0]);

      var svg = d3.select(node)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
          .attr('transform', "translate(" + margin.left + "," + margin.top + ")");

      x.domain(d3.extent(data, function(d) { return d.score; }));
      y.domain([ 0, d3.max(data, function(d) { return d.count; })]);

      line = d3.svg.line()
        .x(function(d) { return x(d.score); })
        .y(function(d) { return y(d.count); });

      area = d3.svg.area()
        .x(function(d) { return x(d.score); })
        .y0(height)
        .y1(function(d) { return y(d.count); });

      svg.selectAll('path.score-line')
        .data(data).enter()
        .append('path')
          .attr('class', 'score-line')
          .attr('d', line(data));

      svg.append('path').datum(data)
        .attr('class', 'area')
        .attr('d', area);

      var circles = svg.selectAll('circle')
        .data(data).enter()
        .append('circle')
          .attr('cx', function(d) { return x(d.score); })
          .attr('cy', function(d) { return y(d.count) - radius; })
          .attr('r', radius * 2);

      ChartInspectorMixin.makeInspectable(circles, this);

      return svg;
    },

    updateChart: ChartMixin.mixin.updateChart,
    removeChart: ChartMixin.mixin.removeChart,

    render: function() {
      return (
        React.DOM.div(null, 
          React.DOM.div({ref: "inspector"}), 
          React.DOM.svg({ref: "chart", className: "chart"})
        )
      );
    }
  });

  var ScoreDistribution = React.createClass({displayName: 'ScoreDistribution',
    propTypes: {
    },

    getDefaultProps: function() {
      return {
        pointDistribution: []
      };
    },

    render: function() {
      var chartData = this.props.pointDistribution.map(function(point) {
        return {
          id: ''+point.score,
          score: point.score,
          count: point.count
        };
      });

      return (
        React.DOM.section({className: "essay-score-chart-section"}, 
          Chart({ref: "chart", scores: chartData, onInspect: this.getAnswerTooltip}), 

          React.DOM.div({className: "auxiliary", style: {display:'none'}}, 
            this.props.pointDistribution.map(this.renderAnswerTooltip)
          )
        )
      );
    },

    renderAnswerTooltip: function(point) {
      return (
        React.DOM.div({
          key: 'point-' + point.score, 
          ref: 'point_' + point.score, 
          className: "answer-distribution-tooltip-content"}, 
          React.DOM.p(null, 
            React.DOM.span({className: "answer-response-ratio"}, round(point.ratio), "%"), 
            React.DOM.span({className: "answer-response-count"}, 
              I18n.t('response_student_count', {
                zero: 'Nobody',
                one: '1 student',
                other: '%{count} students'
              }, { count: point.count })
            )
          ), 

          React.DOM.hr(null), 

          React.DOM.div({className: "answer-text"}, 
            I18n.t('essay_score', 'Score: %{score}', { score: point.score })
          )
        )
      );
    },

    getAnswerTooltip: function(answerId) {
      return this.refs['point_' + answerId].getDOMNode();
    }
  });

  return ScoreDistribution;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/essay',['../../ext/react','../question','../charts/correct_answer_donut','../../models/ratio_calculator','./header','i18n!quiz_statistics','../../util/round','./essay/score_chart'],function(React,Question,CorrectAnswerDonut,calculateResponseRatio,QuestionHeader,I18n,round,ScoreChart) {









  var Essay = React.createClass({displayName: 'Essay',
    render: function() {
      var props = this.props;
      var correctResponseRatio;

      if (props.participantCount <= 0) {
        correctResponseRatio = 0;
      }
      else {
        correctResponseRatio = props.fullCredit / props.participantCount;
      }

      return(
        Question({stretched: true, expanded: props.expanded}, 
          QuestionHeader({
            expandable: false, 
            responseCount: props.responses, 
            participantCount: props.participantCount, 
            questionText: props.questionText, 
            asideContents: this.renderAsideContent()}), 

          React.DOM.div({key: "charts"}, 
            CorrectAnswerDonut({
              correctResponseRatio: correctResponseRatio, 
              label: I18n.t('correct_essay_student_ratio',
                '%{ratio}% of your students received full credit for this question.', {
                ratio: round(correctResponseRatio * 100.0, 0)
              })}), 

            ScoreChart({pointDistribution: this.props.pointDistribution})
          )
        )
      );
    },

    renderAsideContent: function() {
      return (
        React.DOM.a({href: this.props.speedGraderUrl, target: "_blank"}, 
          I18n.t('speedgrader', 'View in SpeedGrader')
        )
      );
    }
  });

  return Essay;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/calculated',['../../ext/react','./essay'],function(React,Essay) {



  var Calculated = React.createClass({displayName: 'Calculated',
    render: Essay.type.prototype.render,
    renderAsideContent: function() {
      return false;
    }
  });

  return Calculated;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/questions/file_upload',['../../ext/react','./essay','i18n!quiz_statistics'],function(React,Essay,I18n) {




  var FileUpload = React.createClass({displayName: 'FileUpload',
    render: Essay.type.prototype.render,
    renderAsideContent: function() {
      return (
        React.DOM.a({href: this.props.quizSubmissionsZipUrl, target: "_blank"}, 
          I18n.t('download_submissions', 'Download All Files')
        )
      );
    }
  });

  return FileUpload;
});

/** @jsx React.DOM */
define('canvas_quiz_statistics/views/app',['react','./summary','i18n!quiz_statistics','lodash','./questions/toggle_details_button','./question','./questions/multiple_choice','./questions/short_answer','./questions/fill_in_multiple_blanks','./questions/essay','./questions/calculated','./questions/file_upload'],function(React,Summary,I18n,_,ToggleDetailsButton,QuestionRenderer,MultipleChoiceRenderer,ShortAnswerRenderer,FillInMultipleBlanksRenderer,EssayRenderer,CalculatedRenderer,FileUploadRenderer) {













  var extend = _.extend;
  var Renderers = {
    'multiple_choice_question': MultipleChoiceRenderer,
    'true_false_question': MultipleChoiceRenderer,
    'short_answer_question': ShortAnswerRenderer,
    'multiple_answers_question': ShortAnswerRenderer,
    'numerical_question': ShortAnswerRenderer,
    'fill_in_multiple_blanks_question': FillInMultipleBlanksRenderer,
    'multiple_dropdowns_question': FillInMultipleBlanksRenderer,
    'matching_question': FillInMultipleBlanksRenderer,
    'essay_question': EssayRenderer,
    'calculated_question': CalculatedRenderer,
    'file_upload_question': FileUploadRenderer,
  };

  var Statistics = React.createClass({displayName: 'Statistics',
    mixins: [ React.addons.ActorMixin ],

    getDefaultProps: function() {
      return {
        quizStatistics: {
          submissionStatistics: {},
          questionStatistics: [],
        },
      };
    },

    render: function() {
      var props = this.props;
      var quizStatistics = this.props.quizStatistics;
      var submissionStatistics = quizStatistics.submissionStatistics;
      var questionStatistics = quizStatistics.questionStatistics;
      var participantCount = submissionStatistics.uniqueCount;

      return(
        React.DOM.div({id: "canvas-quiz-statistics"}, 
          React.DOM.section(null, 
            Summary({
              pointsPossible: quizStatistics.pointsPossible, 
              scoreAverage: submissionStatistics.scoreAverage, 
              scoreHigh: submissionStatistics.scoreHigh, 
              scoreLow: submissionStatistics.scoreLow, 
              scoreStdev: submissionStatistics.scoreStdev, 
              durationAverage: submissionStatistics.durationAverage, 
              quizReports: this.props.quizReports, 
              scores: submissionStatistics.scores}
              )
          ), 

          React.DOM.section({id: "question-statistics-section"}, 
            React.DOM.header({className: "padded"}, 
              React.DOM.h3({className: "section-title inline"}, 
                I18n.t('question_breakdown', 'Question Breakdown')
              ), 

              React.DOM.aside({className: "all-question-controls pull-right"}, 
                ToggleDetailsButton({
                  onClick: this.toggleAllDetails, 
                  expanded: quizStatistics.expandingAll, 
                  controlsAll: true})
              )
            ), 

            questionStatistics.map(this.renderQuestion.bind(null, participantCount))
          )
        )
      );
    },

    renderQuestion: function(participantCount, question) {
      var renderer = Renderers[question.questionType] || QuestionRenderer;
      var stats = this.props.quizStatistics;
      var questionProps = extend({}, question, {
        key: 'question-' + question.id,
        participantCount: participantCount,
        expanded: stats.expanded.indexOf(question.id) > -1,
        speedGraderUrl: stats.speedGraderUrl,
        quizSubmissionsZipUrl: stats.quizSubmissionsZipUrl,
        onToggleDetails: this.toggleDetails.bind(null, question.id)
      });

      return renderer(questionProps);
    },

    toggleDetails: function(questionId, e) {
      e.preventDefault();

      if (this.props.quizStatistics.expanded.indexOf(questionId) !== -1) {
        this.sendAction('statistics:collapseQuestion', questionId);
      }
      else {
        this.sendAction('statistics:expandQuestion', questionId);
      }
    },

    toggleAllDetails: function(e) {
      e.preventDefault();

      if (this.props.quizStatistics.expandingAll) {
        this.sendAction('statistics:collapseAll');
      }
      else {
        this.sendAction('statistics:expandAll');
      }
    }
  });

  return Statistics;
});
define('canvas_quiz_statistics/core/store',['lodash','./dispatcher'],function(_,Dispatcher) {


  var extend = _.extend;

  var Store = function(key, proto) {
    var emitChange = this.emitChange.bind(this);

    this._key = key;
    this.__reset__();

    extend(this, proto || {});

    Object.keys(this.actions).forEach(function(action) {
      var handler = this.actions[action].bind(this);
      var scopedAction = [ key, action ].join(':');

      console.debug('Store action:', scopedAction);

      Dispatcher.register(scopedAction, function(params, resolve, reject) {
        try {
          handler(params, function onChange(rc) {
            resolve(rc);
            emitChange();
          }, reject);
        } catch(e) {
          reject(e);
        }
      });

    }.bind(this));

    return this;
  };

  extend(Store.prototype, {
    actions: {},
    addChangeListener: function(callback) {
      this._callbacks.push(callback);
    },

    removeChangeListener: function(callback) {
      var index = this._callbacks.indexOf(callback);
      if (index > -1) {
        this._callbacks.splice(index, 1);
      }
    },

    emitChange: function() {
      this._callbacks.forEach(function(callback) {
        callback();
      });
    },

    /**
     * @internal
     * A hook for tests to reset the Store to its initial state. Override this
     * to restore any side-effects.
     *
     * Usually during the life-time of the app, we will never have to reset a
     * Store, but in tests we do.
     */
    __reset__: function() {
      this._callbacks = [];
    }
  });

  return Store;
});
define('canvas_quiz_statistics/models/common/pick_and_normalize',['../../util/convert_case','lodash'],function(convertCase,_) {


  var pick = _.pick;
  var camelize = convertCase.camelize;

  /**
   * Pick certain keys out of an object, and converts them to camelCase.
   *
   * @param  {Object} set
   * @param  {String[]} keys
   * @return {Object}
   */
  return function pickAndNormalize(set, keys) {
    return camelize(pick(set || {}, keys));
  };
});
define('canvas_quiz_statistics/util/array_wrap',[],function() {
  return function wrap(value) {
    return Array.isArray(value) ?
      value :
      value === undefined ?
        [] :
        [ value ];
  };
});
define('canvas_quiz_statistics/models/quiz_statistics',['backbone','./common/pick_and_normalize','../constants','lodash','../util/array_wrap','../util/round','i18n!quiz_statistics'],function(Backbone,pickAndNormalize,K,_,wrap,round,I18n) {








  var findWhere = _.findWhere;
  var parseQuestion, decorateAnswer, decorateAnswerSet;

  var QuizStatistics = Backbone.Model.extend({
    parse: function(payload) {
      var attrs = {};
      var participantCount;

      attrs = pickAndNormalize(payload, K.QUIZ_STATISTICS_ATTRS);

      attrs.submissionStatistics = pickAndNormalize(
        payload.submission_statistics,
        K.SUBMISSION_STATISTICS_ATTRS
      );

      participantCount = attrs.submissionStatistics.uniqueCount;

      attrs.questionStatistics = wrap(payload.question_statistics)
        .map(parseQuestion.bind(null, participantCount));

      return attrs;
    },
  });

  parseQuestion = function(participantCount, question) {
    var attrs = pickAndNormalize(question, K.QUESTION_STATISTICS_ATTRS);
    var correctAnswerPointBiserials;

    wrap(attrs.answers).forEach(decorateAnswer.bind(null, participantCount));
    wrap(attrs.answerSets).forEach(decorateAnswerSet.bind(null, participantCount));

    if (attrs.pointBiserials) {
      attrs.pointBiserials = attrs.pointBiserials.map(function(pointBiserial) {
        return pickAndNormalize(pointBiserial, K.POINT_BISERIAL_ATTRS);
      });

      correctAnswerPointBiserials = findWhere(attrs.pointBiserials, {
        correct: true
      }) || {};

      attrs.discriminationIndex = correctAnswerPointBiserials.pointBiserial;
    }

    if (attrs.pointDistribution) {
      attrs.pointDistribution.forEach(function(point) {
        if (participantCount <= 0) {
          point.ratio = 0;
        }
        else {
          point.ratio = round(point.count / participantCount * 100.0);
        }
      });
    }

    return attrs;
  };

  decorateAnswer = function(participantCount, answer) {
    answer.ratio = participantCount > 0 ?
      round(answer.responses / participantCount * 100) :
      0;

    if (answer.id === 'none') {
      answer.text = I18n.t('no_answer', 'No Answer');
    } else if (answer.id === 'other') {
      answer.text = I18n.t('unknown_answer', 'Something Else');
    }
  };

  decorateAnswerSet = function(participantCount, answerSet) {
    wrap(answerSet.answers).forEach(decorateAnswer.bind(null, participantCount));
  };

  return QuizStatistics;
});

define('canvas_quiz_statistics/models/common/from_jsonapi',[],function() {
  /**
   */
  return function fromJSONAPI(payload, collKey, wantsObject) {
    var data = {};

    if (payload) {
      if (payload[collKey]) {
        data = payload[collKey];
      }
      else {
        data = payload;
      }
    }

    if (wantsObject && Array.isArray(data)) {
      return data[0];
    }
    else {
      return data;
    }
  };
});
define('canvas_quiz_statistics/collections/quiz_statistics',['backbone','../models/quiz_statistics','../models/common/from_jsonapi','../config'],function(Backbone,QuizStatistics,fromJSONAPI,config) {





  return Backbone.Collection.extend({
    model: QuizStatistics,

    url: function() {
      return config.quizStatisticsUrl;
    },

    parse: function(payload) {
      return fromJSONAPI(payload, 'quiz_statistics');
    }
  });
});
define('canvas_quiz_statistics/stores/common/populate_collection',[],function() {
  /**
   * Populate a collection with some data.
   *
   * @param {Backbone.Collection} collection
   * @param {Object} payload
   *        The payload to extract data from. This is what you received by
   *        hitting the Canvas JSON-API endpoints.
   *
   * @param {Boolean} [replace=true]
   *        Consider the incoming data as a replacement for the current one.
   *        E.g, the collections will be reset instead of just adding the
   *        new data.
   *
   */
  return function populateCollection(collection, payload, replace) {
    var setter, setterOptions;

    if (arguments.length === 2) {
      replace = true;
    }

    setter = replace ? 'reset' : 'add';
    setterOptions = replace ?
      { parse: true } :
      { parse: true, merge: true };

    collection[setter].call(collection, payload, setterOptions);
  };
});
define('canvas_quiz_statistics/stores/statistics',['../core/store','../config','../collections/quiz_statistics','./common/populate_collection'],function(Store,config,QuizStats,populateCollection) {




  var quizStats = new QuizStats([]);
  var expanded = [];

  /**
   * @class Stores.Statistics
   * Load stats.
   */
  var store = new Store('statistics', {
    /**
     * Load quiz statistics.
     *
     * @needs_cfg quizStatisticsUrl
     * @async
     * @fires change
     *
     * @return {RSVP.Promise}
     *         Fulfills when the stats have been loaded and injected.
     */
    load: function() {
      var onLoad = this.populate.bind(this);

      if (!config.quizStatisticsUrl) {
        return config.onError('Missing configuration parameter "quizStatisticsUrl".');
      }

      return quizStats.fetch().then(onLoad);
    },

    /**
     * Populate the store with pre-loaded statistics data you've received from
     * the Canvas stats index endpoint (JSON-API or JSON).
     *
     * @fires change
     */
    populate: function(payload) {
      populateCollection(quizStats, payload);
      this.emitChange();
    },

    get: function() {
      var props;

      if (quizStats.length) {
        props = quizStats.first().toJSON();
        props.expanded = expanded;
        props.expandingAll = this.isExpandingAll();
      }

      return props;
    },

    getExpandedSet: function() {
      return expanded;
    },

    isExpandingAll: function() {
      if (quizStats.length) {
        return expanded.length === quizStats.first().get('questionStatistics').length;
      }

      return false;
    },

    getSubmissionStatistics: function() {
      var stats = this.get();
      if (stats) {
        return stats.submissionStatistics;
      }
    },

    getQuestionStatistics: function() {
      var stats = this.get();

      if (stats) {
        return stats.questionStatistics;
      }
    },

    actions: {
      expandQuestion: function(questionId, onChange) {
        if (expanded.indexOf(questionId) === -1) {
          expanded.push(questionId);
          onChange();
        }
      },

      collapseQuestion: function(questionId, onChange) {
        var index = expanded.indexOf(questionId);
        if (index !== -1) {
          expanded.splice(index, 1);
          onChange();
        }
      },

      expandAll: function(_payload, onChange) {
        if (quizStats.length) {
          expanded = quizStats.first().toJSON().questionStatistics.map(function(question) {
            return question.id;
          });

          onChange();
        }
      },

      collapseAll: function(_payload, onChange) {
        if (expanded.length) {
          expanded = [];
          onChange();
        }
      }
    },

    __reset__: function() {
      quizStats.reset();
      expandingAll = false;
      expanded = [];
      return Store.prototype.__reset__.call(this);
    }
  });

  return store;
});
define('canvas_quiz_statistics/models/quiz_report',['backbone','./common/pick_and_normalize','../constants','./common/from_jsonapi'],function(Backbone,pickAndNormalize,K,fromJSONAPI) {




  var isGenerating = function(report) {
    var workflowState = report.progress.workflowState;
    return [ 'queued', 'running' ].indexOf(workflowState) > -1;
  };

  return Backbone.Model.extend({
    parse: function(payload) {
      var attrs;

      payload = fromJSONAPI(payload, 'quiz_reports', true);
      attrs = pickAndNormalize(payload, K.QUIZ_REPORT_ATTRS);

      attrs.progress = pickAndNormalize(payload.progress, K.PROGRESS_ATTRS);
      attrs.file = pickAndNormalize(payload.file, K.ATTACHMENT_ATTRS);
      attrs.isGenerated = !!(attrs.file && attrs.file.url);
      attrs.isGenerating = !!(attrs.progress && isGenerating(attrs));

      return attrs;
    }
  });
});
define('canvas_quiz_statistics/collections/quiz_reports',['backbone','../models/quiz_report','../models/common/from_jsonapi','../config','../core/adapter'],function(Backbone,QuizReport,fromJSONAPI,config,Adapter) {






  return Backbone.Collection.extend({
    model: QuizReport,

    url: function() {
      return config.quizReportsUrl;
    },

    parse: function(payload) {
      return fromJSONAPI(payload, 'quiz_reports');
    },

    generate: function(reportType) {
      return Adapter.request({
        type: 'POST',
        url: this.url(),
        data: {
          quiz_reports: [{
            report_type: reportType,
            includes_all_versions: config.includesAllVersions
          }],
          include: ['progress', 'file']
        }
      }).then(function(payload) {
        var quizReports = this.add(payload, { parse: true, merge: true });
        return quizReports[0];
      }.bind(this));
    }
  });
});
define('canvas_quiz_statistics/services/poll_progress',['rsvp','jquery','../core/adapter','../constants','../config'],function(RSVP,$,Adapter,K,config) {






  var fetchProgress = function(url) {
    return Adapter.request({
      type: 'GET',
      url: url,
    }).then(function(payload) {
      return {
        completion: payload.completion,
        workflowState: payload.workflow_state,
      };
    });
  };

  return function pollProgress(url, options) {
    var poll, poller;
    var service = RSVP.defer();

    options = options || {};

    $(window).on('beforeunload.progress', function() {
      return clearTimeout(poller);
    });

    poll = function() {
      fetchProgress(url).then(function(data) {
        if (options.onTick) {
          options.onTick(data.completion, data.workflowState);
        }

        if (data.workflowState === K.PROGRESS_FAILED) {
          service.reject();
        } else if (data.workflowState === K.PROGRESS_COMPLETE) {
          service.resolve();
        } else {
          poller = setTimeout(poll, options.interval || config.pollingFrequency);
        }
      }, function() {
        service.reject();
      });
    };

    poll();

    return service.promise;
  };
});
define('canvas_quiz_statistics/stores/reports',['../core/store','../config','../collections/quiz_reports','../services/poll_progress','./common/populate_collection'],function(Store,config,QuizReports,pollProgress,populateCollection) {





  var quizReports = new QuizReports();

  var triggerDownload = function(url) {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    document.body.appendChild(iframe);
  };

  var generationRequests = [];

  /**
   * @class Stores.QuizReports
   * Load and generate quiz reports.
   */
  var store = new Store('quizReports', {
    /**
     * Load quiz reports from the Canvas API.
     *
     * @async
     * @fires change
     * @needs_cfg quizReportsUrl
     * @needs_cfg includesAllVersions
     *
     * @return {RSVP.Promise}
     *         Fulfills when the reports have been loaded.
     *
     */
    load: function() {
      var onLoad = this.populate.bind(this);
      var url = config.quizReportsUrl;

      if (!url) {
        return config.onError('Missing configuration parameter "quizReportsUrl".');
      }

      return quizReports.fetch({
        data: {
          include: [ 'progress', 'file' ],
          includes_all_versions: config.includesAllVersions
        }
      }).then(function(payload) {
        onLoad(payload, { replace: true, track: true });
      });
    },

    /**
     * Populate the store with pre-loaded data.
     *
     * @param {Object} payload
     *        The payload to extract the reports from. This is what you received
     *        by hitting the Canvas reports index JSON-API endpoint.
     *
     * @param {Object} [options={}]
     * @param {Boolean} [options.replace=true]
     *        Forwarded to Stores.Common#populateCollection
     *
     * @param {Boolean} [options.track=false]
     *        Pass to true if the payload may contain any reports that are
     *        currently being generated, then the store will track their
     *        generation progress.
     *
     * @fires change
     */
    populate: function(payload, options) {
      options = options || {};

      populateCollection(quizReports, payload, options.replace);

      if (options.track) {
        quizReports
          .where({ isGenerating: true })
          .forEach(this.trackReportGeneration.bind(this));
      }

      this.emitChange();
    },

    getAll: function() {
      return quizReports.toJSON();
    },

    actions: {
      generate: function(reportType, onChange, onError) {
        var quizReport = quizReports.findWhere({ reportType: reportType });

        if (quizReport && (quizReport.get('isGenerating') || quizReport.get('isGenerated'))) {
          return onError();
        }

        quizReports.generate(reportType).then(function(quizReport) {
          this.trackReportGeneration(quizReport, true);
          onChange();
        }.bind(this), onError);
      }
    },

    __reset__: function() {
      quizReports.reset();
      generationRequests = [];

      return Store.prototype.__reset__.call(this);
    },

    /** @private */
    trackReportGeneration: function(quizReport, autoDownload) {
      var onChange, progressUrl, poll, reload;
      var quizReportId = quizReport.get('id');
      var generationRequest = generationRequests.filter(function(request) {
        return request.quizReportId === quizReportId;
      })[0];

      // we're already tracking
      if (generationRequest) {
        return;
      }

      generationRequest = {
        quizReportId: quizReportId,
        autoDownload: autoDownload
      };

      generationRequests.push(generationRequest);

      onChange = this.emitChange.bind(this);
      progressUrl = quizReport.get('progress').url;

      poll = function() {
        return pollProgress(progressUrl, {
          interval: 1000,
          onTick: function(completion) {
            quizReport.attributes.progress.completion = completion;
            onChange();
          }
        });
      };

      reload = function() {
        return quizReport.fetch({
          data: {
            include: [ 'progress', 'file' ]
          }
        });
      };

      poll().finally(reload).then(function() {
        if (generationRequest.autoDownload) {
          triggerDownload(quizReport.get('file').url);
        }

        onChange();
      });
    },

  });

  return store;
});
define('canvas_quiz_statistics/core/controller',['../stores/statistics','../stores/reports','../config'],function(quizStatistics,quizReports,config) {



  var update;

  var onChange = function() {
    update({
      quizStatistics: quizStatistics.get(),
      quizReports: quizReports.getAll(),
    });
  };

  /**
   * @class Core.Controller
   * @private
   *
   * The controller is responsible for keeping the UI up-to-date with the
   * data layer.
   */
  var Controller = {

    /**
     * Start listening to data updates.
     *
     * @param {Function} onUpdate
     *        A callback to notify when new data comes in.
     *
     * @param {Object} onUpdate.props
     *        A set of props ready for injecting into the app layout.
     *
     * @param {Object} onUpdate.props.quizStatistics
     *        Quiz statistics.
     *        See Stores.Statistics#getQuizStatistics().
     *
     * @param {Object} onUpdate.props.quizReports
     *        Quiz reports.
     *        See Stores.Statistics#getQuizReports().
     */
    start: function(onUpdate) {
      update = onUpdate;
      quizStatistics.addChangeListener(onChange);
      quizReports.addChangeListener(onChange);

      if (config.loadOnStartup) {
        Controller.load();
      }
    },

    /**
     * Load initial application data; quiz statistics and reports.
     */
    load: function() {
      if (config.quizStatisticsUrl) {
        quizStatistics.load();
        quizReports.load();
      }
      else {
        console.warn(
          'You have requested to load on start-up, but have not',
          'provided a url to load from in CQS.config.quizStatisticsUrl.'
        );
      }
    },

    /**
     * Stop listening to data changes.
     */
    stop: function() {
      quizStatistics.removeChangeListener(onChange);
      quizReports.removeChangeListener(onChange);
      update = undefined;
    }
  };

  return Controller;
});
define('canvas_quiz_statistics/core/delegate',['react','lodash','../config','../config/initializer','../views/app','./controller'],function(React,_,config,initialize,Layout,controller) {






  var extend = _.extend;
  var container;
  var layout;

  /**
   * @class Core.Delegate
   *
   * The client app delegate. This is the main interface that embedding
   * applications use to interact with the client app.
   */
  var exports = {};

  /**
   * Configure the application. See Config for the supported options.
   *
   * @param  {Object} options
   *         A set of options to override.
   */
  var configure = function(options) {
    extend(config, options);
  };

  /**
   * Start the app and perform any necessary data loading.
   *
   * @param  {HTMLElement} node
   *         The node to mount the app in.
   *
   * @param  {Object} [options={}]
   *         Options to configure the app with. See config.js
   *
   * @return {RSVP.Promise}
   *         Fulfilled when the app has been started and rendered.
   */
  var mount = function(node, options) {
    configure(options);
    container = node;

    return initialize().then(function() {
      layout = React.renderComponent(Layout(), container);
      controller.start(update);
    });
  };

  var isMounted = function() {
    return !!layout;
  };

  var update = function(props) {
    layout.setProps(props);
  };

  var reload = function() {
    controller.load();
  };

  var unmount = function() {
    if (isMounted()) {
      controller.stop();
      React.unmountComponentAtNode(container);
      container = undefined;
    }
  };

  exports.configure = configure;
  exports.mount = mount;
  exports.isMounted = isMounted;
  exports.update = update;
  exports.reload = reload;
  exports.unmount = unmount;

  return exports;
});
define('canvas_quiz_statistics/boot',['./version','./config','./core/delegate'],function(VERSION,config,delegate) {



  var exports = {};

  exports.configure = delegate.configure;
  exports.mount = delegate.mount;
  exports.isMounted = delegate.isMounted;
  exports.update = delegate.update;
  exports.reload = delegate.reload;
  exports.unmount = delegate.unmount;
  exports.version = VERSION;
  exports.config = config;

  return exports;
});
define('canvas_quiz_statistics',['canvas_quiz_statistics/boot'], function(arg) { return arg; });
