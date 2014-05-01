// Generated Thu May  1 17:26:08 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.testing.singleton {

    /**
     * Deletes all singleton instances, so {@code getInstance} will return a new
     * instance on next call.
     */
    function reset(): void;

    /**
     * @deprecated Please use {@code goog.addSingletonGetter}.
     */
    var addSingletonGetter: any /*missing*/;
}
