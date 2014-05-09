/// <reference path="../../../../globals.d.ts" />
/// <reference path="./iterablemechanism.d.ts" />

declare module goog.storage.mechanism {

    class IEUserData extends __IEUserData { }
    class __IEUserData extends goog.storage.mechanism.__IterableMechanism {
    
        /**
         * Provides a storage mechanism using IE userData.
         *
         * @param {string} storageKey The key (store name) to store the data under.
         * @param {string=} opt_storageNodeId The ID of the associated HTML element,
         *     one will be created if not provided.
         * @constructor
         * @extends {goog.storage.mechanism.IterableMechanism}
         * @final
         */
        constructor(storageKey: string, opt_storageNodeId?: string);
    
        /**
         * Determines whether or not the mechanism is available.
         *
         * @return {boolean} True if the mechanism is available.
         */
        isAvailable(): boolean;
    }
}

declare module goog.storage.mechanism.IEUserData {

    /**
     * Encoding map for characters which are not encoded by encodeURIComponent().
     * See encodeKey_ documentation for encoding details.
     *
     * @type {!Object}
     * @const
     */
    var ENCODE_MAP: Object;
}