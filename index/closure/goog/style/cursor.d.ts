// Generated Thu May  1 17:19:30 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />

declare module goog.style.cursor {

    /**
     * The file name for the open-hand (draggable) cursor.
     * @type {string}
     */
    var OPENHAND_FILE: string;

    /**
     * The file name for the close-hand (dragging) cursor.
     * @type {string}
     */
    var CLOSEDHAND_FILE: string;

    /**
     * Create the style for the draggable cursor based on browser and OS.
     * The value can be extended to be '!important' if needed.
     *
     * @param {string} absoluteDotCurFilePath The absolute base path of
     *     'openhand.cur' file to be used if the browser supports it.
     * @param {boolean=} opt_obsolete Just for compiler backward compatibility.
     * @return {string} The "draggable" mouse cursor style value.
     */
    function getDraggableCursorStyle(absoluteDotCurFilePath: string, opt_obsolete?: boolean): string;

    /**
     * Create the style for the dragging cursor based on browser and OS.
     * The value can be extended to be '!important' if needed.
     *
     * @param {string} absoluteDotCurFilePath The absolute base path of
     *     'closedhand.cur' file to be used if the browser supports it.
     * @param {boolean=} opt_obsolete Just for compiler backward compatibility.
     * @return {string} The "dragging" mouse cursor style value.
     */
    function getDraggingCursorStyle(absoluteDotCurFilePath: string, opt_obsolete?: boolean): string;
}
