// Generated Thu May  1 17:18:31 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
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
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.fx.TransitionBase {

    /**
     * Enum for the possible states of an animation.
     * @enum {number}
     */
    enum State { STOPPED, PAUSED, PLAYING } 
}

declare module goog.fx {

    /**
     * Constructor for a transition object.
     *
     * @constructor
     * @implements {goog.fx.Transition}
     * @extends {goog.events.EventTarget}
     */
    class TransitionBase extends goog.events.EventTarget implements goog.fx.Transition {
        /**
         * Constructor for a transition object.
         *
         * @constructor
         * @implements {goog.fx.Transition}
         * @extends {goog.events.EventTarget}
         */
        constructor();
    
        /**
         * Pauses the animation.
         */
        pause: any /*missing*/;
    
        /**
         * Returns the current state of the animation.
         * @return {goog.fx.TransitionBase.State} State of the animation.
         */
        getStateInternal(): goog.fx.TransitionBase.State;
    
        /**
         * Sets the current state of the animation to playing.
         * @protected
         */
        setStatePlaying(): void;
    
        /**
         * Sets the current state of the animation to paused.
         * @protected
         */
        setStatePaused(): void;
    
        /**
         * Sets the current state of the animation to stopped.
         * @protected
         */
        setStateStopped(): void;
    
        /**
         * @return {boolean} True iff the current state of the animation is playing.
         */
        isPlaying(): boolean;
    
        /**
         * @return {boolean} True iff the current state of the animation is paused.
         */
        isPaused(): boolean;
    
        /**
         * @return {boolean} True iff the current state of the animation is stopped.
         */
        isStopped(): boolean;
    
        /**
         * Dispatches the BEGIN event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onBegin(): void;
    
        /**
         * Dispatches the END event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onEnd(): void;
    
        /**
         * Dispatches the FINISH event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onFinish(): void;
    
        /**
         * Dispatches the PAUSE event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onPause(): void;
    
        /**
         * Dispatches the PLAY event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onPlay(): void;
    
        /**
         * Dispatches the RESUME event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onResume(): void;
    
        /**
         * Dispatches the STOP event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onStop(): void;
    
        /**
         * Dispatches an event object for the current animation.
         * @param {string} type Event type that will be dispatched.
         * @protected
         */
        dispatchAnimationEvent(type: string): void;
    }
}
