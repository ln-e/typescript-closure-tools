// Generated Thu May  1 17:23:53 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />

declare module goog.events {

    /**
     * Super class for objects that want to easily manage a number of event
     * listeners.  It allows a short cut to listen and also provides a quick way
     * to remove all events listeners belonging to this object.
     * @param {SCOPE=} opt_scope Object in whose scope to call the listeners.
     * @constructor
     * @extends {goog.Disposable}
     * @template SCOPE
     */
    class EventHandler extends goog.Disposable {
        /**
         * Super class for objects that want to easily manage a number of event
         * listeners.  It allows a short cut to listen and also provides a quick way
         * to remove all events listeners belonging to this object.
         * @param {SCOPE=} opt_scope Object in whose scope to call the listeners.
         * @constructor
         * @extends {goog.Disposable}
         * @template SCOPE
         */
        constructor(opt_scope?: SCOPE);
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:SCOPE, EVENTOBJ):?|{handleEvent:function(?):?}|null=}
         *     opt_fn Optional callback function to be used as the listener or an object
         *     with handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         */
        listen(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(this:T, ?):?}|
         *     null|undefined} fn Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template T,EVENTOBJ
         */
        listenWithScope(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted then the
         * EventHandler's handleEvent method will be used.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *     Optional callback function to be used as the listener or an object with
         *     handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         * @private
         */
        listen_(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired the
         * event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:SCOPE, EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *    Optional callback function to be used as the listener or an object with
         *    handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         */
        listenOnce(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired the
         * event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(this:T, ?):?}|
         *     null|undefined} fn Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template T,EVENTOBJ
         */
        listenOnceWithScope(src: goog.events.ListenableType): void;
    
        /**
         * Listen to an event on a Listenable.  If the function is omitted, then the
         * EventHandler's handleEvent method will be used. After the event has fired
         * the event listener is removed from the target. If an array of event types is
         * provided, each event type will be listened to once.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type to listen for or array of event types.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *    Optional callback function to be used as the listener or an object with
         *    handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         * @private
         */
        listenOnce_(src: goog.events.ListenableType): void;
    
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(this:SCOPE, ?):?|{handleEvent:function(?):?}|null} listener
         *     Callback method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @return {goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         */
        listenWithWrapper(src: any /*EventTarget|goog.events.EventTarget*/, wrapper: goog.events.EventWrapper, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean): goog.events.EventHandler;
    
        /**
         * Adds an event listener with a specific event wrapper on a DOM Node or an
         * object that has implemented {@link goog.events.EventTarget}. A listener can
         * only be added once to an object.
         *
         * @param {EventTarget|goog.events.EventTarget} src The node to listen to
         *     events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(this:T, ?):?|{handleEvent:function(this:T, ?):?}|null}
         *     listener Optional callback function to be used as the
         *     listener or an object with handleEvent function.
         * @param {boolean|undefined} capture Optional whether to use capture phase.
         * @param {T} scope Object in whose scope to call the listener.
         * @return {goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template T
         */
        listenWithWrapperAndScope<T>(src: any /*EventTarget|goog.events.EventTarget*/, wrapper: goog.events.EventWrapper, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, capture: any /*boolean|any (undefined)*/, scope: T): goog.events.EventHandler;
    
        /**
         * @return {number} Number of listeners registered by this handler.
         */
        getListenerCount(): number;
    
        /**
         * Unlistens on an event.
         * @param {goog.events.ListenableType} src Event source.
         * @param {string|Array.<string>|
         *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
         *     type Event type or array of event types to unlisten to.
         * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null=} opt_fn
         *     Optional callback function to be used as the listener or an object with
         *     handleEvent function.
         * @param {boolean=} opt_capture Optional whether to use capture phase.
         * @param {Object=} opt_scope Object in whose scope to call the listener.
         * @return {!goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         * @template EVENTOBJ
         */
        unlisten(src: goog.events.ListenableType): void;
    
        /**
         * Removes an event listener which was added with listenWithWrapper().
         *
         * @param {EventTarget|goog.events.EventTarget} src The target to stop
         *     listening to events on.
         * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
         *     listener function to remove.
         * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase of the
         *     event.
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @return {goog.events.EventHandler} This object, allowing for chaining of
         *     calls.
         */
        unlistenWithWrapper(src: any /*EventTarget|goog.events.EventTarget*/, wrapper: goog.events.EventWrapper, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_scope?: Object): goog.events.EventHandler;
    
        /**
         * Unlistens to all events.
         */
        removeAll(): void;
    
        /**
         * Default event handler
         * @param {goog.events.Event} e Event object.
         */
        handleEvent(e: goog.events.Event): void;
    }
}
