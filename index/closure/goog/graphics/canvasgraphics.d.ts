// Generated Thu May  1 17:24:30 PDT 2014

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
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/graphics/affinetransform.d.ts" />
/// <reference path="../../goog/graphics/element.d.ts" />
/// <reference path="../../goog/graphics/strokeandfillelement.d.ts" />
/// <reference path="../../goog/graphics/rectelement.d.ts" />
/// <reference path="../../goog/graphics/pathelement.d.ts" />
/// <reference path="../../goog/graphics/path.d.ts" />
/// <reference path="../../goog/graphics/imageelement.d.ts" />
/// <reference path="../../goog/graphics/groupelement.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/graphics/textelement.d.ts" />
/// <reference path="../../goog/graphics/ellipseelement.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/graphics/canvaselement.d.ts" />
/// <reference path="../../goog/graphics/fill.d.ts" />
/// <reference path="../../goog/graphics/solidfill.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/graphics/abstractgraphics.d.ts" />

declare module goog.graphics {

    /**
     * A Graphics implementation for drawing using canvas.
     * @param {string|number} width The (non-zero) width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The (non-zero) height in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The coordinate width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight The coordinate height - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @constructor
     * @extends {goog.graphics.AbstractGraphics}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class CanvasGraphics extends goog.graphics.AbstractGraphics {
        /**
         * A Graphics implementation for drawing using canvas.
         * @param {string|number} width The (non-zero) width in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {string|number} height The (non-zero) height in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {?number=} opt_coordWidth The coordinate width - if
         *     omitted or null, defaults to same as width.
         * @param {?number=} opt_coordHeight The coordinate height - if
         *     omitted or null, defaults to same as height.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @constructor
         * @extends {goog.graphics.AbstractGraphics}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Push an element transform on to the transform stack.
         * @param {goog.graphics.Element} element The transformed element.
         */
        pushElementTransform(element: goog.graphics.Element): void;
    
        /**
         * Pop an element transform off of the transform stack.
         */
        popElementTransform(): void;
    
        /**
         * Returns the drawing context.
         * @return {Object} The canvas element rendering context.
         */
        getContext(): Object;
    
        /**
         * Update the size of the canvas.
         */
        updateSize(): void;
    
        /**
         * Reset the canvas.
         */
        reset(): void;
    
        /**
         * Redraw the entire canvas.
         */
        redraw(): void;
    
        /**
         * Draw an element, including any stroke or fill.
         * @param {goog.graphics.Element} element The element to draw.
         */
        drawElement(element: goog.graphics.Element): void;
    
        /**
         * Append an element.
         *
         * @param {goog.graphics.Element} element The element to draw.
         * @param {goog.graphics.GroupElement|undefined} group The group to draw
         *     it in. If null or undefined, defaults to the root group.
         * @protected
         */
        append(element: goog.graphics.Element, group: any /*goog.graphics.GroupElement|any (undefined)*/): void;
    
        /**
         * Draw an image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of image.
         * @param {number} height Height of image.
         * @param {string} src Source of the image.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.ImageElement} The newly created element.
         */
        drawImage(x: number, y: number, width: number, height: number, src: string, opt_group?: goog.graphics.GroupElement): goog.graphics.ImageElement;
    
        /**
         * @param {goog.graphics.GroupElement} group The group to possibly
         *     draw to.
         * @return {boolean} Whether drawing can occur now.
         */
        isDrawable(group: goog.graphics.GroupElement): boolean;
    
        /**
         * Returns true if drawing to the given group means a redraw is required.
         * @param {goog.graphics.GroupElement} group The group to draw to.
         * @return {boolean} Whether drawing to this group should force a redraw.
         */
        isRedrawRequired(group: goog.graphics.GroupElement): boolean;
    }
}
