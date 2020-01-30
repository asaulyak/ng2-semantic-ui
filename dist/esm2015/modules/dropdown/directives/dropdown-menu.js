import { Directive, ContentChild, forwardRef, Renderer2, ElementRef, ContentChildren, QueryList, Input, HostListener, ChangeDetectorRef } from "@angular/core";
import { Transition, SuiTransition, TransitionController, TransitionDirection } from "../../transition/internal";
import { KeyCode } from "../../../misc/util/internal";
import { DropdownAutoCloseType } from "../services/dropdown.service";
// Polyfill for IE
import "element-closest";
import * as i0 from "@angular/core";
export class SuiDropdownMenuItem {
    constructor(_renderer, element) {
        this._renderer = _renderer;
        this.element = element;
        this.isSelected = false;
        this.selectedClass = "selected";
    }
    get isDisabled() {
        // We must use nativeElement as Angular doesn't have a way of reading class information.
        const element = this.element.nativeElement;
        return element.classList.contains("disabled");
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        // Renderer is used to enable a dynamic class name.
        if (value) {
            this._renderer.addClass(this.element.nativeElement, this.selectedClass);
        }
        else {
            this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
        }
    }
    get hasChildDropdown() {
        return !!this.childDropdownMenu;
    }
    performClick() {
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this.element.nativeElement.click();
    }
}
SuiDropdownMenuItem.ɵfac = function SuiDropdownMenuItem_Factory(t) { return new (t || SuiDropdownMenuItem)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
SuiDropdownMenuItem.ɵdir = i0.ɵɵdefineDirective({ type: SuiDropdownMenuItem, selectors: [["", 8, "item"]], contentQueries: function SuiDropdownMenuItem_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, SuiDropdownMenu, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.childDropdownMenu = _t.first);
    } } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDropdownMenuItem, [{
        type: Directive,
        args: [{
                // We must attach to every '.item' as Angular doesn't support > selectors.
                selector: ".item"
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { childDropdownMenu: [{
            type: ContentChild,
            args: [forwardRef(() => SuiDropdownMenu), /* TODO: add static flag */ {}]
        }] }); })();
export class SuiDropdownMenu extends SuiTransition {
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        // Initialise transition functionality.
        this._transitionController = new TransitionController(false);
        this.setTransitionController(this._transitionController);
        this.menuTransition = "slide down";
        this.menuTransitionDuration = 200;
        this.menuAutoSelectFirst = false;
        this.menuSelectedItemClass = "selected";
        // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
        this._parentKeyDownListener = () => { };
    }
    get service() {
        return this._service;
    }
    set service(value) {
        this._service = value;
        let previousIsOpen = this._service.isOpen;
        this._service.isOpenChange.subscribe((isOpen) => {
            if (isOpen !== previousIsOpen) {
                // Only run transitions if the open state has changed.
                this._transitionController.stopAll();
                this._transitionController.animate(new Transition(this.menuTransition, this.menuTransitionDuration, TransitionDirection.Either, () => this._service.isAnimating = false));
            }
            if (!isOpen) {
                // Reset the item selections when a nested item is selected to avoid incosistent open states.
                if (this.selectedItems.length > 1) {
                    this.resetSelection();
                }
            }
            previousIsOpen = isOpen;
        });
    }
    set parentElement(value) {
        this._parentKeyDownListener = this._renderer
            .listen(value.nativeElement, "keydown", (e) => this.onParentKeyDown(e));
    }
    set items(items) {
        this._itemsQueryOverride = items;
    }
    get _itemsQuery() {
        return this._itemsQueryOverride || this._itemsQueryInternal;
    }
    // Get the list of items, ignoring those that are disabled.
    get _items() {
        return this._itemsQuery.filter(i => !i.isDisabled);
    }
    onClick(e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (this._service.autoCloseMode === DropdownAutoCloseType.ItemClick) {
                const target = e.target;
                if (this._element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                    // Once an item is selected, we can close the entire dropdown.
                    this._service.setOpenState(false, true);
                }
            }
        }
    }
    onParentKeyDown(e) {
        // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
        if (this._service && this._service.isOpen && !this._service.isNested) {
            // Stop document events like scrolling while open.
            const target = e.target;
            if (!/input/i.test(target.tagName) &&
                [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(kC => kC === e.keyCode)) {
                e.preventDefault();
            }
            // Gets the top selected item from the stack.
            const [selected] = this.selectedItems.slice(-1);
            // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
            let selectedContainer = this;
            if (this.selectedItems.length >= 2) {
                const [selectedParent] = this.selectedItems.slice(-2);
                selectedContainer = selectedParent.childDropdownMenu;
            }
            switch (e.keyCode) {
                // Escape : close the entire dropdown.
                case KeyCode.Escape: {
                    this._service.setOpenState(false);
                    break;
                }
                // Down : select the next item below the current one, or the 1st if none selected.
                case KeyCode.Down:
                // Up : select the next item above the current one, or the 1st if none selected.
                case KeyCode.Up: {
                    this.selectedItems.pop();
                    this.selectedItems.push(selectedContainer.updateSelection(selected, e.keyCode));
                    // Prevent default regardless of whether we are in an input, to stop jumping to the start or end of the query string.
                    e.preventDefault();
                    break;
                }
                // Enter : if the item doesn't contain a nested dropdown, 'click' it. Otherwise, fall through to 'Right' action.
                case KeyCode.Enter: {
                    if (selected && !selected.hasChildDropdown) {
                        selected.performClick();
                        break;
                    }
                }
                // falls through
                // Right : if the selected item contains a nested dropdown, open the dropdown & select the 1st item.
                case KeyCode.Right: {
                    if (selected && selected.hasChildDropdown) {
                        selected.childDropdownMenu.service.setOpenState(true);
                        this.selectedItems.push(selected.childDropdownMenu.updateSelection(selected, e.keyCode));
                    }
                    break;
                }
                // Left : if the selected item is in a nested dropdown, close it and select the containing item.
                case KeyCode.Left: {
                    if (this.selectedItems.length >= 2) {
                        this.selectedItems.pop();
                        const [selectedParent] = this.selectedItems.slice(-1);
                        selectedParent.childDropdownMenu.service.setOpenState(false);
                        selectedParent.isSelected = true;
                    }
                    break;
                }
            }
        }
    }
    resetSelection() {
        this.selectedItems = [];
        this._items.forEach(i => {
            i.selectedClass = this.menuSelectedItemClass;
            i.isSelected = false;
        });
        if (this.menuAutoSelectFirst && this._items.length > 0) {
            // Autoselect 1st item if required & possible.
            this._items[0].isSelected = true;
            this.scrollToItem(this._items[0]);
            this.selectedItems.push(this._itemsQuery.first);
        }
    }
    // Determines the item to next be selected, based on the keyboard input & the currently selected item.
    updateSelection(selectedItem, keyCode) {
        if (selectedItem) {
            // Remove the selected status on the previously selected item.
            selectedItem.isSelected = false;
        }
        let selectedIndex = this._items
            .findIndex(i => i === selectedItem);
        let newSelection;
        switch (keyCode) {
            case KeyCode.Enter:
            case KeyCode.Right:
            case KeyCode.Down:
                selectedIndex += 1;
                break;
            case KeyCode.Up:
                if (selectedIndex === -1) {
                    // If none are selected, select the 1st item. Should this be `this.items.last - 1`?
                    selectedIndex = 0;
                    break;
                }
                selectedIndex -= 1;
                break;
        }
        // Select the item at the updated index. The || is to stop us selecting past the start or end of the item list.
        newSelection = this._items[selectedIndex] || selectedItem;
        if (newSelection) {
            // Set the selected status on the newly selected item.
            newSelection.isSelected = true;
            // Set the current scroll position to the location of the newly selected item.
            this.scrollToItem(newSelection);
        }
        return newSelection;
    }
    scrollToItem(item) {
        const menu = this._element.nativeElement;
        const selectedRect = item.element.nativeElement.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();
        let scrollAmount = 0;
        if (selectedRect.bottom > menuRect.bottom) {
            scrollAmount = selectedRect.bottom - menuRect.bottom;
        }
        if (selectedRect.top < menuRect.top) {
            scrollAmount = selectedRect.top - menuRect.top;
        }
        menu.scrollTop += Math.round(scrollAmount);
    }
    ngAfterContentInit() {
        this.onItemsChanged();
        this._itemsQuery.changes.subscribe(() => this.onItemsChanged());
    }
    onItemsChanged() {
        // We use `_items` rather than `items` in case one or more have become disabled.
        this.resetSelection();
    }
    ngOnDestroy() {
        this._parentKeyDownListener();
    }
}
SuiDropdownMenu.ɵfac = function SuiDropdownMenu_Factory(t) { return new (t || SuiDropdownMenu)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SuiDropdownMenu.ɵdir = i0.ɵɵdefineDirective({ type: SuiDropdownMenu, selectors: [["", "suiDropdownMenu", ""]], contentQueries: function SuiDropdownMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, SuiDropdownMenuItem, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._itemsQueryInternal = _t);
    } }, hostBindings: function SuiDropdownMenu_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("click", function SuiDropdownMenu_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { menuTransition: "menuTransition", menuTransitionDuration: "menuTransitionDuration", menuAutoSelectFirst: "menuAutoSelectFirst", menuSelectedItemClass: "menuSelectedItemClass" }, features: [i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDropdownMenu, [{
        type: Directive,
        args: [{
                selector: "[suiDropdownMenu]"
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { menuTransition: [{
            type: Input
        }], menuTransitionDuration: [{
            type: Input
        }], _itemsQueryInternal: [{
            type: ContentChildren,
            args: [SuiDropdownMenuItem]
        }], menuAutoSelectFirst: [{
            type: Input
        }], menuSelectedItemClass: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZHJvcGRvd24vZGlyZWN0aXZlcy9kcm9wZG93bi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUMxRCxlQUFlLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQ3JFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakgsT0FBTyxFQUFtQyxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RixPQUFPLEVBQW1CLHFCQUFxQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEYsa0JBQWtCO0FBQ2xCLE9BQU8saUJBQWlCLENBQUM7O0FBTXpCLE1BQU0sT0FBTyxtQkFBbUI7SUFnQzVCLFlBQW9CLFNBQW1CLEVBQVMsT0FBa0I7UUFBOUMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQW5DRCxJQUFXLFVBQVU7UUFDakIsd0ZBQXdGO1FBQ3hGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBd0IsQ0FBQztRQUN0RCxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFJRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFXLFVB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QUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN2QyxZQUFZLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxZQUFZLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDakMsWUFBWSxHQUFHLFlBQVksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sa0JBQWtCO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVPLGNBQWM7UUFDbEIsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OzhFQTFRUSxlQUFlO29EQUFmLGVBQWU7b0NBK0NQLG1CQUFtQjs7Ozs7OztrREEvQzNCLGVBQWU7Y0FIM0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7YUFDaEM7O2tCQUtJLEtBQUs7O2tCQUdMLEtBQUs7O2tCQXdDTCxlQUFlO21CQUFDLG1CQUFtQjs7a0JBdUJuQyxLQUFLOztrQkFHTCxLQUFLOztrQkFzQkwsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIERpcmVjdGl2ZSwgQ29udGVudENoaWxkLCBmb3J3YXJkUmVmLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudEluaXQsXG4gICAgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIElucHV0LCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3lcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb24sIFN1aVRyYW5zaXRpb24sIFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCwgSUF1Z21lbnRlZEVsZW1lbnQsIEtleUNvZGUgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UsIERyb3Bkb3duQXV0b0Nsb3NlVHlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kcm9wZG93bi5zZXJ2aWNlXCI7XG4vLyBQb2x5ZmlsbCBmb3IgSUVcbmltcG9ydCBcImVsZW1lbnQtY2xvc2VzdFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICAvLyBXZSBtdXN0IGF0dGFjaCB0byBldmVyeSAnLml0ZW0nIGFzIEFuZ3VsYXIgZG9lc24ndCBzdXBwb3J0ID4gc2VsZWN0b3JzLlxuICAgIHNlbGVjdG9yOiBcIi5pdGVtXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIFdlIG11c3QgdXNlIG5hdGl2ZUVsZW1lbnQgYXMgQW5ndWxhciBkb2Vzbid0IGhhdmUgYSB3YXkgb2YgcmVhZGluZyBjbGFzcyBpbmZvcm1hdGlvbi5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzU2VsZWN0ZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaXNTZWxlY3RlZCgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzU2VsZWN0ZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICAvLyBSZW5kZXJlciBpcyB1c2VkIHRvIGVuYWJsZSBhIGR5bmFtaWMgY2xhc3MgbmFtZS5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBjbGFzcyBuYW1lIHVzZWQgZm9yIGEgJ3NlbGVjdGVkJyBpdGVtLlxuICAgIHB1YmxpYyBzZWxlY3RlZENsYXNzOnN0cmluZztcblxuICAgIEBDb250ZW50Q2hpbGQoZm9yd2FyZFJlZigoKSA9PiBTdWlEcm9wZG93bk1lbnUpLCAvKiBUT0RPOiBhZGQgc3RhdGljIGZsYWcgKi8ge30pXG4gICAgcHVibGljIGNoaWxkRHJvcGRvd25NZW51OlN1aURyb3Bkb3duTWVudTtcblxuICAgIHB1YmxpYyBnZXQgaGFzQ2hpbGREcm9wZG93bigpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISF0aGlzLmNoaWxkRHJvcGRvd25NZW51O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2xhc3MgPSBcInNlbGVjdGVkXCI7XG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm1DbGljaygpOnZvaWQge1xuICAgICAgICAvLyBVc2luZyBkaXJlY3RseSBiZWNhdXNlIFJlbmRlcmVyMiBkb2Vzbid0IGhhdmUgaW52b2tlRWxlbWVudE1ldGhvZCBtZXRob2QgYW55bW9yZS5cbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEcm9wZG93bk1lbnVdXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25NZW51IGV4dGVuZHMgU3VpVHJhbnNpdGlvbiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfc2VydmljZTpEcm9wZG93blNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBtZW51VHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgc2VydmljZSgpOkRyb3Bkb3duU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmljZSh2YWx1ZTpEcm9wZG93blNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHZhbHVlO1xuXG4gICAgICAgIGxldCBwcmV2aW91c0lzT3BlbiA9IHRoaXMuX3NlcnZpY2UuaXNPcGVuO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKGlzT3Blbjpib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuICE9PSBwcmV2aW91c0lzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcnVuIHRyYW5zaXRpb25zIGlmIHRoZSBvcGVuIHN0YXRlIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudVRyYW5zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2l0aW9uRGlyZWN0aW9uLkVpdGhlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHRoaXMuX3NlcnZpY2UuaXNBbmltYXRpbmcgPSBmYWxzZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzT3Blbikge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBpdGVtIHNlbGVjdGlvbnMgd2hlbiBhIG5lc3RlZCBpdGVtIGlzIHNlbGVjdGVkIHRvIGF2b2lkIGluY29zaXN0ZW50IG9wZW4gc3RhdGVzLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2aW91c0lzT3BlbiA9IGlzT3BlbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwYXJlbnRFbGVtZW50KHZhbHVlOkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXJcbiAgICAgICAgICAgIC5saXN0ZW4odmFsdWUubmF0aXZlRWxlbWVudCwgXCJrZXlkb3duXCIsIChlOktleWJvYXJkRXZlbnQpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhcmVudEtleURvd24oZSkpO1xuICAgIH1cblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpRHJvcGRvd25NZW51SXRlbSlcbiAgICBwcml2YXRlIF9pdGVtc1F1ZXJ5SW50ZXJuYWw6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+O1xuXG4gICAgcHJpdmF0ZSBfaXRlbXNRdWVyeU92ZXJyaWRlOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPjtcblxuICAgIHB1YmxpYyBzZXQgaXRlbXMoaXRlbXM6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+KSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSA9IGl0ZW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9pdGVtc1F1ZXJ5KCk6UXVlcnlMaXN0PFN1aURyb3Bkb3duTWVudUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zUXVlcnlPdmVycmlkZSB8fCB0aGlzLl9pdGVtc1F1ZXJ5SW50ZXJuYWw7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBsaXN0IG9mIGl0ZW1zLCBpZ25vcmluZyB0aG9zZSB0aGF0IGFyZSBkaXNhYmxlZC5cbiAgICBwcml2YXRlIGdldCBfaXRlbXMoKTpTdWlEcm9wZG93bk1lbnVJdGVtW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNRdWVyeS5maWx0ZXIoaSA9PiAhaS5pc0Rpc2FibGVkKTtcbiAgICB9XG5cbiAgICAvLyBTdGFjayB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAvLyBTZWxlY3RlZCBpdGVtcyBsb3dlciBpbiB0aGUgc3RhY2sgYXJlIG5lY2Vzc2FyaWx5IHRoZSBwYXJlbnQgb2YgdGhlIGl0ZW0gb25lIGhpZ2hlci5cbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtczpTdWlEcm9wZG93bk1lbnVJdGVtW107XG5cbiAgICAvLyBTZXRzIHdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgc2VsZWN0IHRoZSAxc3QgaXRlbSB3aGVuIHRoZSBkcm9wZG93biBpcyBvcGVuZWQuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudUF1dG9TZWxlY3RGaXJzdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVNlbGVjdGVkSXRlbUNsYXNzOnN0cmluZztcblxuICAgIHByaXZhdGUgX3BhcmVudEtleURvd25MaXN0ZW5lcjooKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSB0cmFuc2l0aW9uIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbiA9IFwic2xpZGUgZG93blwiO1xuICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uRHVyYXRpb24gPSAyMDA7XG5cbiAgICAgICAgdGhpcy5tZW51QXV0b1NlbGVjdEZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudVNlbGVjdGVkSXRlbUNsYXNzID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgICAgIC8vIEluIGNhc2UgdGhlIGRyb3Bkb3duIG1lbnUgaXMgZGVzdHJveWVkIGJlZm9yZSBpdCBoYXMgYSBjaGFuY2UgdG8gYmUgZnVsbHkgaW5pdGlhbGlzZWQuXG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lciA9ICgpID0+IHt9O1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQgJiBNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuSXRlbUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSUF1Z21lbnRlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQuY2xvc2VzdChcIi5pdGVtXCIpKSAmJiAhL2lucHV0fHRleHRhcmVhL2kudGVzdCh0YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25jZSBhbiBpdGVtIGlzIHNlbGVjdGVkLCB3ZSBjYW4gY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblBhcmVudEtleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gT25seSB0aGUgcm9vdCBkcm9wZG93biAoaS5lLiBub3QgbmVzdGVkIGRyb3Bkb3ducykgaXMgcmVzcG9uc2libGUgZm9yIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICBpZiAodGhpcy5fc2VydmljZSAmJiB0aGlzLl9zZXJ2aWNlLmlzT3BlbiAmJiAhdGhpcy5fc2VydmljZS5pc05lc3RlZCkge1xuICAgICAgICAgICAgLy8gU3RvcCBkb2N1bWVudCBldmVudHMgbGlrZSBzY3JvbGxpbmcgd2hpbGUgb3Blbi5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIS9pbnB1dC9pLnRlc3QodGFyZ2V0LnRhZ05hbWUpICYmXG4gICAgICAgICAgICAgICAgW0tleUNvZGUuRXNjYXBlLCBLZXlDb2RlLkVudGVyLCBLZXlDb2RlLlVwLCBLZXlDb2RlLkRvd24sIEtleUNvZGUuTGVmdCwgS2V5Q29kZS5SaWdodF0uZmluZChrQyA9PiBrQyA9PT0gZS5rZXlDb2RlKSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0cyB0aGUgdG9wIHNlbGVjdGVkIGl0ZW0gZnJvbSB0aGUgc3RhY2suXG4gICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0xKTtcbiAgICAgICAgICAgIC8vIEtlZXBpbmcgdHJhY2sgb2YgdGhlIG1lbnUgY29udGFpbmluZyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQgYWxsb3dzIHVzIHRvIGVhc2lseSBkZXRlcm1pbmUgaXRzIHNpYmxpbmdzLlxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ29udGFpbmVyOlN1aURyb3Bkb3duTWVudSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkUGFyZW50XSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMik7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb250YWluZXIgPSBzZWxlY3RlZFBhcmVudC5jaGlsZERyb3Bkb3duTWVudTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBFc2NhcGUgOiBjbG9zZSB0aGUgZW50aXJlIGRyb3Bkb3duLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Fc2NhcGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRG93biA6IHNlbGVjdCB0aGUgbmV4dCBpdGVtIGJlbG93IHRoZSBjdXJyZW50IG9uZSwgb3IgdGhlIDFzdCBpZiBub25lIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Eb3duOlxuICAgICAgICAgICAgICAgIC8vIFVwIDogc2VsZWN0IHRoZSBuZXh0IGl0ZW0gYWJvdmUgdGhlIGN1cnJlbnQgb25lLCBvciB0aGUgMXN0IGlmIG5vbmUgc2VsZWN0ZWQuXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlVwOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goc2VsZWN0ZWRDb250YWluZXIudXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkLCBlLmtleUNvZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB3ZSBhcmUgaW4gYW4gaW5wdXQsIHRvIHN0b3AganVtcGluZyB0byB0aGUgc3RhcnQgb3IgZW5kIG9mIHRoZSBxdWVyeSBzdHJpbmcuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEVudGVyIDogaWYgdGhlIGl0ZW0gZG9lc24ndCBjb250YWluIGEgbmVzdGVkIGRyb3Bkb3duLCAnY2xpY2snIGl0LiBPdGhlcndpc2UsIGZhbGwgdGhyb3VnaCB0byAnUmlnaHQnIGFjdGlvbi5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmICFzZWxlY3RlZC5oYXNDaGlsZERyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5wZXJmb3JtQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgOiBpZiB0aGUgc2VsZWN0ZWQgaXRlbSBjb250YWlucyBhIG5lc3RlZCBkcm9wZG93biwgb3BlbiB0aGUgZHJvcGRvd24gJiBzZWxlY3QgdGhlIDFzdCBpdGVtLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SaWdodDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaGFzQ2hpbGREcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuY2hpbGREcm9wZG93bk1lbnUuc2VydmljZS5zZXRPcGVuU3RhdGUodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHNlbGVjdGVkLmNoaWxkRHJvcGRvd25NZW51LnVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCwgZS5rZXlDb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIExlZnQgOiBpZiB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBpbiBhIG5lc3RlZCBkcm9wZG93biwgY2xvc2UgaXQgYW5kIHNlbGVjdCB0aGUgY29udGFpbmluZyBpdGVtLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5MZWZ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFBhcmVudF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhcmVudC5jaGlsZERyb3Bkb3duTWVudS5zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhcmVudC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRTZWxlY3Rpb24oKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICBpLnNlbGVjdGVkQ2xhc3MgPSB0aGlzLm1lbnVTZWxlY3RlZEl0ZW1DbGFzcztcbiAgICAgICAgICAgIGkuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tZW51QXV0b1NlbGVjdEZpcnN0ICYmIHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEF1dG9zZWxlY3QgMXN0IGl0ZW0gaWYgcmVxdWlyZWQgJiBwb3NzaWJsZS5cbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zWzBdLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0odGhpcy5faXRlbXNbMF0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2godGhpcy5faXRlbXNRdWVyeS5maXJzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmVzIHRoZSBpdGVtIHRvIG5leHQgYmUgc2VsZWN0ZWQsIGJhc2VkIG9uIHRoZSBrZXlib2FyZCBpbnB1dCAmIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICBwdWJsaWMgdXBkYXRlU2VsZWN0aW9uKHNlbGVjdGVkSXRlbTpTdWlEcm9wZG93bk1lbnVJdGVtLCBrZXlDb2RlOktleUNvZGUpOlN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHNlbGVjdGVkIHN0YXR1cyBvbiB0aGUgcHJldmlvdXNseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZEluZGV4ID0gdGhpcy5faXRlbXNcbiAgICAgICAgICAgIC5maW5kSW5kZXgoaSA9PiBpID09PSBzZWxlY3RlZEl0ZW0pO1xuXG4gICAgICAgIGxldCBuZXdTZWxlY3Rpb246U3VpRHJvcGRvd25NZW51SXRlbTtcblxuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5FbnRlcjpcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5SaWdodDpcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5Eb3duOlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDpcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgbm9uZSBhcmUgc2VsZWN0ZWQsIHNlbGVjdCB0aGUgMXN0IGl0ZW0uIFNob3VsZCB0aGlzIGJlIGB0aGlzLml0ZW1zLmxhc3QgLSAxYD9cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggLT0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbGVjdCB0aGUgaXRlbSBhdCB0aGUgdXBkYXRlZCBpbmRleC4gVGhlIHx8IGlzIHRvIHN0b3AgdXMgc2VsZWN0aW5nIHBhc3QgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgaXRlbSBsaXN0LlxuICAgICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLl9pdGVtc1tzZWxlY3RlZEluZGV4XSB8fCBzZWxlY3RlZEl0ZW07XG5cbiAgICAgICAgaWYgKG5ld1NlbGVjdGlvbikge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBzdGF0dXMgb24gdGhlIG5ld2x5IHNlbGVjdGVkIGl0ZW0uXG4gICAgICAgICAgICBuZXdTZWxlY3Rpb24uaXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIGxvY2F0aW9uIG9mIHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0l0ZW0obmV3U2VsZWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTZWxlY3Rpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNjcm9sbFRvSXRlbShpdGVtOlN1aURyb3Bkb3duTWVudUl0ZW0pOnZvaWQge1xuICAgICAgICBjb25zdCBtZW51OkVsZW1lbnQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUmVjdDpDbGllbnRSZWN0ID0gaXRlbS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3QgbWVudVJlY3QgPSBtZW51LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGxldCBzY3JvbGxBbW91bnQgPSAwO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFJlY3QuYm90dG9tID4gbWVudVJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICBzY3JvbGxBbW91bnQgPSBzZWxlY3RlZFJlY3QuYm90dG9tIC0gbWVudVJlY3QuYm90dG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkUmVjdC50b3AgPCBtZW51UmVjdC50b3ApIHtcbiAgICAgICAgICAgIHNjcm9sbEFtb3VudCA9IHNlbGVjdGVkUmVjdC50b3AgLSBtZW51UmVjdC50b3A7XG4gICAgICAgIH1cblxuICAgICAgICBtZW51LnNjcm9sbFRvcCArPSBNYXRoLnJvdW5kKHNjcm9sbEFtb3VudCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgICAgIHRoaXMuX2l0ZW1zUXVlcnkuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSXRlbXNDaGFuZ2VkKCk6dm9pZCB7XG4gICAgICAgIC8vIFdlIHVzZSBgX2l0ZW1zYCByYXRoZXIgdGhhbiBgaXRlbXNgIGluIGNhc2Ugb25lIG9yIG1vcmUgaGF2ZSBiZWNvbWUgZGlzYWJsZWQuXG4gICAgICAgIHRoaXMucmVzZXRTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFyZW50S2V5RG93bkxpc3RlbmVyKCk7XG4gICAgfVxufVxuIl19