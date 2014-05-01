// Generated Thu May  1 17:24:07 PDT 2014

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

declare module goog.userAgent.adobeReader {

    /**
       * Whether we detect the user has the Adobe Reader browser plugin installed.
       * @type {boolean}
       */
    var HAS_READER: boolean;

    /**
       * The version of the installed Adobe Reader plugin. Versions after 7
       * will all be reported as '7'.
       * @type {string}
       */
    var VERSION: string;

    /**
       * On certain combinations of platform/browser/plugin, a print dialog
       * can be shown for PDF files without a download dialog or making the
       * PDF visible to the user, by loading the PDF into a hidden iframe.
       *
       * Currently this variable is true if Adobe Reader version 6 or later
       * is detected on Windows.
       *
       * @type {boolean}
       */
    var SILENT_PRINT: boolean;
}
