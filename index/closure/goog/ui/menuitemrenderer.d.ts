// Generated Thu May  1 17:23:19 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />

declare module goog.ui.MenuItemRenderer {

    /**
     * CSS class name the renderer applies to menu item elements.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module goog.ui {

    /**
     * Default renderer for {@link goog.ui.MenuItem}s.  Each item has the following
     * structure:
     * <pre>
     *   <div class="goog-menuitem">
     *     <div class="goog-menuitem-content">
     *       ...(menu item contents)...
     *     </div>
     *   </div>
     * </pre>
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MenuItemRenderer extends goog.ui.ControlRenderer {
        /**
         * Default renderer for {@link goog.ui.MenuItem}s.  Each item has the following
         * structure:
         * <pre>
         *   <div class="goog-menuitem">
         *     <div class="goog-menuitem-content">
         *       ...(menu item contents)...
         *     </div>
         *   </div>
         * </pre>
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns true if the element appears to have a proper menu item structure by
         * checking whether its first child has the appropriate structural class name.
         * @param {Element} element Element to check.
         * @return {boolean} Whether the element appears to have a proper menu item DOM.
         * @protected
         */
        hasContentStructure(element: Element): boolean;
    
        /**
         * Wraps the given text caption or existing DOM node(s) in a structural element
         * containing the menu item's contents.
         * @param {goog.ui.ControlContent} content Menu item contents.
         * @param {goog.dom.DomHelper} dom DOM helper for document interaction.
         * @return {Element} Menu item content element.
         * @protected
         */
        createContent(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Enables/disables radio button semantics on the menu item.
         * @param {goog.ui.Control} item Menu item to update.
         * @param {Element} element Menu item element to update (may be null if the
         *     item hasn't been rendered yet).
         * @param {boolean} selectable Whether the item should be selectable.
         */
        setSelectable(item: goog.ui.Control, element: Element, selectable: boolean): void;
    
        /**
         * Enables/disables checkbox semantics on the menu item.
         * @param {goog.ui.Control} item Menu item to update.
         * @param {Element} element Menu item element to update (may be null if the
         *     item hasn't been rendered yet).
         * @param {boolean} checkable Whether the item should be checkable.
         */
        setCheckable(item: goog.ui.Control, element: Element, checkable: boolean): void;
    
        /**
         * Determines whether the item contains a checkbox element.
         * @param {Element} element Menu item root element.
         * @return {boolean} Whether the element contains a checkbox element.
         * @protected
         */
        hasCheckBoxStructure(element: Element): boolean;
    
        /**
         * Adds or removes extra markup and CSS styling to the menu item to make it
         * selectable or non-selectable, depending on the value of the
         * {@code selectable} argument.
         * @param {goog.ui.Control} item Menu item to update.
         * @param {Element} element Menu item element to update.
         * @param {boolean} enable Whether to add or remove the checkbox structure.
         * @protected
         */
        setEnableCheckBoxStructure(item: goog.ui.Control, element: Element, enable: boolean): void;
    
        /**
         * Corrects the ARIA role based on checkable and selectable.
         * @param {goog.ui.Control} item The owner menu item.
         * @param {Element} element The element.
         */
        correctAriaRole(item: goog.ui.Control, element: Element): void;
    }
}
