// Generated Thu May  1 17:21:42 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/containerrenderer.d.ts" />
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
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />
/// <reference path="../../goog/ui/menuseparatorrenderer.d.ts" />
/// <reference path="../../goog/ui/separator.d.ts" />
/// <reference path="../../goog/ui/menurenderer.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/ui/menuseparator.d.ts" />
/// <reference path="../../goog/ui/menuitemrenderer.d.ts" />
/// <reference path="../../goog/ui/menuitem.d.ts" />
/// <reference path="../../goog/ui/container.d.ts" />
/// <reference path="../../goog/ui/menuheaderrenderer.d.ts" />
/// <reference path="../../goog/ui/menuheader.d.ts" />
/// <reference path="../../goog/ui/menu.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../goog/positioning/menuanchoredposition.d.ts" />
/// <reference path="../../goog/ui/buttonside.d.ts" />
/// <reference path="../../goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../goog/ui/nativebuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/button.d.ts" />
/// <reference path="../../goog/ui/cssnames.d.ts" />
/// <reference path="../../goog/ui/custombuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/menubuttonrenderer.d.ts" />
/// <reference path="../../goog/ui/menubutton.d.ts" />
/// <reference path="../../goog/ui/selectionmodel.d.ts" />

declare module goog.ui {

    /**
     * A selection control.  Extends {@link goog.ui.MenuButton} by composing a
     * menu with a selection model, and automatically updating the button's caption
     * based on the current selection.
     *
     * Select fires the following events:
     *   CHANGE - after selection changes.
     *
     * @param {goog.ui.ControlContent=} opt_caption Default caption or existing DOM
     *     structure to display as the button's caption when nothing is selected.
     *     Defaults to no caption.
     * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the control; defaults to {@link goog.ui.MenuButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
     *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
     * @constructor
     * @extends {goog.ui.MenuButton}
     */
    class Select extends goog.ui.MenuButton {
        /**
         * A selection control.  Extends {@link goog.ui.MenuButton} by composing a
         * menu with a selection model, and automatically updating the button's caption
         * based on the current selection.
         *
         * Select fires the following events:
         *   CHANGE - after selection changes.
         *
         * @param {goog.ui.ControlContent=} opt_caption Default caption or existing DOM
         *     structure to display as the button's caption when nothing is selected.
         *     Defaults to no caption.
         * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the control; defaults to {@link goog.ui.MenuButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
         *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
         * @constructor
         * @extends {goog.ui.MenuButton}
         */
        constructor(opt_caption?: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
    
        /**
         * Handles {@link goog.events.EventType.SELECT} events raised by the
         * selection model when the selection changes.  Updates the contents of the
         * select button.
         * @param {goog.events.Event} e Selection event to handle.
         */
        handleSelectionChange(e: goog.events.Event): void;
    
        /**
         * Returns the default caption to be shown when no option is selected.
         * @return {goog.ui.ControlContent} Default caption.
         */
        getDefaultCaption(): goog.ui.ControlContent;
    
        /**
         * Sets the default caption to the given string or DOM structure.
         * @param {goog.ui.ControlContent} caption Default caption to be shown
         *    when no option is selected.
         */
        setDefaultCaption(caption: goog.ui.ControlContent): void;
    
        /**
         * Selects the specified option (assumed to be in the select menu), and
         * deselects the previously selected option, if any.  A null argument clears
         * the selection.
         * @param {goog.ui.MenuItem} item Option to be selected (null to clear
         *     the selection).
         */
        setSelectedItem(item: goog.ui.MenuItem): void;
    
        /**
         * Selects the option at the specified index, or clears the selection if the
         * index is out of bounds.
         * @param {number} index Index of the option to be selected.
         */
        setSelectedIndex(index: number): void;
    
        /**
         * Returns the currently selected option.
         * @return {goog.ui.MenuItem} The currently selected option (null if none).
         */
        getSelectedItem(): goog.ui.MenuItem;
    
        /**
         * Returns the index of the currently selected option.
         * @return {number} 0-based index of the currently selected option (-1 if none).
         */
        getSelectedIndex(): number;
    
        /**
         * @return {goog.ui.SelectionModel} The selection model.
         * @protected
         */
        getSelectionModel(): goog.ui.SelectionModel;
    
        /**
         * Updates the caption to be shown in the select button.  If no option is
         * selected and a default caption is set, sets the caption to the default
         * caption; otherwise to the empty string.
         * @protected
         */
        updateCaption(): void;
    }
}
