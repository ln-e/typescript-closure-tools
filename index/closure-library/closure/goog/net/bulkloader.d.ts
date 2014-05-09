/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="../uri/uri.d.ts" />

declare module goog.net {

    class BulkLoader extends __BulkLoader { }
    class __BulkLoader extends goog.events.__EventTarget {
    
        /**
         * Class used to load multiple URIs.
         * @param {Array.<string|goog.Uri>} uris The URIs to load.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(uris: string[]);
        /**
         * Class used to load multiple URIs.
         * @param {Array.<string|goog.Uri>} uris The URIs to load.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(uris: goog.Uri[]);
    
        /**
         * Gets the response texts, in order.
         * @return {Array.<string>} The response texts.
         */
        getResponseTexts(): string[];
    
        /**
         * Gets the request Uris.
         * @return {Array.<string>} The request URIs, in order.
         */
        getRequestUris(): string[];
    
        /**
         * Starts the process of loading the URIs.
         */
        load(): void;
    }
}