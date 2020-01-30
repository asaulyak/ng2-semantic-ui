import { __extends, __read } from "tslib";
import { Directive, ContentChild, forwardRef, Renderer2, ElementRef, ContentChildren, QueryList, Input, HostListener, ChangeDetectorRef } from "@angular/core";
import { Transition, SuiTransition, TransitionController, TransitionDirection } from "../../transition/internal";
import { KeyCode } from "../../../misc/util/internal";
import { DropdownAutoCloseType } from "../services/dropdown.service";
// Polyfill for IE
import "element-closest";
import * as i0 from "@angular/core";
var SuiDropdownMenuItem = /** @class */ (function () {
    function SuiDropdownMenuItem(_renderer, element) {
        this._renderer = _renderer;
        this.element = element;
        this.isSelected = false;
        this.selectedClass = "selected";
    }
    Object.defineProperty(SuiDropdownMenuItem.prototype, "isDisabled", {
        get: function () {
            // We must use nativeElement as Angular doesn't have a way of reading class information.
            var element = this.element.nativeElement;
            return element.classList.contains("disabled");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenuItem.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            // Renderer is used to enable a dynamic class name.
            if (value) {
                this._renderer.addClass(this.element.nativeElement, this.selectedClass);
            }
            else {
                this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenuItem.prototype, "hasChildDropdown", {
        get: function () {
            return !!this.childDropdownMenu;
        },
        enumerable: true,
        configurable: true
    });
    SuiDropdownMenuItem.prototype.performClick = function () {
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this.element.nativeElement.click();
    };
    SuiDropdownMenuItem.ɵfac = function SuiDropdownMenuItem_Factory(t) { return new (t || SuiDropdownMenuItem)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SuiDropdownMenuItem.ɵdir = i0.ɵɵdefineDirective({ type: SuiDropdownMenuItem, selectors: [["", 8, "item"]], contentQueries: function SuiDropdownMenuItem_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SuiDropdownMenu, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.childDropdownMenu = _t.first);
        } } });
    return SuiDropdownMenuItem;
}());
export { SuiDropdownMenuItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDropdownMenuItem, [{
        type: Directive,
        args: [{
                // We must attach to every '.item' as Angular doesn't support > selectors.
                selector: ".item"
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { childDropdownMenu: [{
            type: ContentChild,
            args: [forwardRef(function () { return SuiDropdownMenu; }), /* TODO: add static flag */ {}]
        }] }); })();
var SuiDropdownMenu = /** @class */ (function (_super) {
    __extends(SuiDropdownMenu, _super);
    function SuiDropdownMenu(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        // Initialise transition functionality.
        _this._transitionController = new TransitionController(false);
        _this.setTransitionController(_this._transitionController);
        _this.menuTransition = "slide down";
        _this.menuTransitionDuration = 200;
        _this.menuAutoSelectFirst = false;
        _this.menuSelectedItemClass = "selected";
        // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
        _this._parentKeyDownListener = function () { };
        return _this;
    }
    Object.defineProperty(SuiDropdownMenu.prototype, "service", {
        get: function () {
            return this._service;
        },
        set: function (value) {
            var _this = this;
            this._service = value;
            var previousIsOpen = this._service.isOpen;
            this._service.isOpenChange.subscribe(function (isOpen) {
                if (isOpen !== previousIsOpen) {
                    // Only run transitions if the open state has changed.
                    _this._transitionController.stopAll();
                    _this._transitionController.animate(new Transition(_this.menuTransition, _this.menuTransitionDuration, TransitionDirection.Either, function () { return _this._service.isAnimating = false; }));
                }
                if (!isOpen) {
                    // Reset the item selections when a nested item is selected to avoid incosistent open states.
                    if (_this.selectedItems.length > 1) {
                        _this.resetSelection();
                    }
                }
                previousIsOpen = isOpen;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "parentElement", {
        set: function (value) {
            var _this = this;
            this._parentKeyDownListener = this._renderer
                .listen(value.nativeElement, "keydown", function (e) {
                return _this.onParentKeyDown(e);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "items", {
        set: function (items) {
            this._itemsQueryOverride = items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "_itemsQuery", {
        get: function () {
            return this._itemsQueryOverride || this._itemsQueryInternal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdownMenu.prototype, "_items", {
        // Get the list of items, ignoring those that are disabled.
        get: function () {
            return this._itemsQuery.filter(function (i) { return !i.isDisabled; });
        },
        enumerable: true,
        configurable: true
    });
    SuiDropdownMenu.prototype.onClick = function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (this._service.autoCloseMode === DropdownAutoCloseType.ItemClick) {
                var target = e.target;
                if (this._element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                    // Once an item is selected, we can close the entire dropdown.
                    this._service.setOpenState(false, true);
                }
            }
        }
    };
    SuiDropdownMenu.prototype.onParentKeyDown = function (e) {
        // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
        if (this._service && this._service.isOpen && !this._service.isNested) {
            // Stop document events like scrolling while open.
            var target = e.target;
            if (!/input/i.test(target.tagName) &&
                [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(function (kC) { return kC === e.keyCode; })) {
                e.preventDefault();
            }
            // Gets the top selected item from the stack.
            var _a = __read(this.selectedItems.slice(-1), 1), selected = _a[0];
            // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
            var selectedContainer = this;
            if (this.selectedItems.length >= 2) {
                var _b = __read(this.selectedItems.slice(-2), 1), selectedParent = _b[0];
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
                        var _c = __read(this.selectedItems.slice(-1), 1), selectedParent = _c[0];
                        selectedParent.childDropdownMenu.service.setOpenState(false);
                        selectedParent.isSelected = true;
                    }
                    break;
                }
            }
        }
    };
    SuiDropdownMenu.prototype.resetSelection = function () {
        var _this = this;
        this.selectedItems = [];
        this._items.forEach(function (i) {
            i.selectedClass = _this.menuSelectedItemClass;
            i.isSelected = false;
        });
        if (this.menuAutoSelectFirst && this._items.length > 0) {
            // Autoselect 1st item if required & possible.
            this._items[0].isSelected = true;
            this.scrollToItem(this._items[0]);
            this.selectedItems.push(this._itemsQuery.first);
        }
    };
    // Determines the item to next be selected, based on the keyboard input & the currently selected item.
    SuiDropdownMenu.prototype.updateSelection = function (selectedItem, keyCode) {
        if (selectedItem) {
            // Remove the selected status on the previously selected item.
            selectedItem.isSelected = false;
        }
        var selectedIndex = this._items
            .findIndex(function (i) { return i === selectedItem; });
        var newSelection;
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
    };
    SuiDropdownMenu.prototype.scrollToItem = function (item) {
        var menu = this._element.nativeElement;
        var selectedRect = item.element.nativeElement.getBoundingClientRect();
        var menuRect = menu.getBoundingClientRect();
        var scrollAmount = 0;
        if (selectedRect.bottom > menuRect.bottom) {
            scrollAmount = selectedRect.bottom - menuRect.bottom;
        }
        if (selectedRect.top < menuRect.top) {
            scrollAmount = selectedRect.top - menuRect.top;
        }
        menu.scrollTop += Math.round(scrollAmount);
    };
    SuiDropdownMenu.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.onItemsChanged();
        this._itemsQuery.changes.subscribe(function () { return _this.onItemsChanged(); });
    };
    SuiDropdownMenu.prototype.onItemsChanged = function () {
        // We use `_items` rather than `items` in case one or more have become disabled.
        this.resetSelection();
    };
    SuiDropdownMenu.prototype.ngOnDestroy = function () {
        this._parentKeyDownListener();
    };
    SuiDropdownMenu.ɵfac = function SuiDropdownMenu_Factory(t) { return new (t || SuiDropdownMenu)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    SuiDropdownMenu.ɵdir = i0.ɵɵdefineDirective({ type: SuiDropdownMenu, selectors: [["", "suiDropdownMenu", ""]], contentQueries: function SuiDropdownMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SuiDropdownMenuItem, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._itemsQueryInternal = _t);
        } }, hostBindings: function SuiDropdownMenu_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("click", function SuiDropdownMenu_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { menuTransition: "menuTransition", menuTransitionDuration: "menuTransitionDuration", menuAutoSelectFirst: "menuAutoSelectFirst", menuSelectedItemClass: "menuSelectedItemClass" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return SuiDropdownMenu;
}(SuiTransition));
export { SuiDropdownMenu };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZHJvcGRvd24vZGlyZWN0aXZlcy9kcm9wZG93bi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFDMUQsZUFBZSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUNyRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pILE9BQU8sRUFBbUMsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkYsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RGLGtCQUFrQjtBQUNsQixPQUFPLGlCQUFpQixDQUFDOztBQUV6QjtJQW9DSSw2QkFBb0IsU0FBbUIsRUFBUyxPQUFrQjtRQUE5QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBbkNELHNCQUFXLDJDQUFVO2FBQXJCO1lBQ0ksd0ZBQXdGO1lBQ3hGLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBd0IsQ0FBQztZQUN0RCxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBSUQsc0JBQVcsMkNBQVU7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVB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S0FBSzs7a0JBc0JMLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZCwgZm9yd2FyZFJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0LFxuICAgIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIElBdWdtZW50ZWRFbGVtZW50LCBLZXlDb2RlIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgfSBmcm9tIFwiLi4vc2VydmljZXMvZHJvcGRvd24uc2VydmljZVwiO1xuLy8gUG9seWZpbGwgZm9yIElFXG5pbXBvcnQgXCJlbGVtZW50LWNsb3Nlc3RcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgLy8gV2UgbXVzdCBhdHRhY2ggdG8gZXZlcnkgJy5pdGVtJyBhcyBBbmd1bGFyIGRvZXNuJ3Qgc3VwcG9ydCA+IHNlbGVjdG9ycy5cbiAgICBzZWxlY3RvcjogXCIuaXRlbVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTWVudUl0ZW0ge1xuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZCgpOmJvb2xlYW4ge1xuICAgICAgICAvLyBXZSBtdXN0IHVzZSBuYXRpdmVFbGVtZW50IGFzIEFuZ3VsYXIgZG9lc24ndCBoYXZlIGEgd2F5IG9mIHJlYWRpbmcgY2xhc3MgaW5mb3JtYXRpb24uXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBFbGVtZW50O1xuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1NlbGVjdGVkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0ZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1NlbGVjdGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gUmVuZGVyZXIgaXMgdXNlZCB0byBlbmFibGUgYSBkeW5hbWljIGNsYXNzIG5hbWUuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN0b3JlcyB0aGUgY2xhc3MgbmFtZSB1c2VkIGZvciBhICdzZWxlY3RlZCcgaXRlbS5cbiAgICBwdWJsaWMgc2VsZWN0ZWRDbGFzczpzdHJpbmc7XG5cbiAgICBAQ29udGVudENoaWxkKGZvcndhcmRSZWYoKCkgPT4gU3VpRHJvcGRvd25NZW51KSwgLyogVE9ETzogYWRkIHN0YXRpYyBmbGFnICovIHt9KVxuICAgIHB1YmxpYyBjaGlsZERyb3Bkb3duTWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0NoaWxkRHJvcGRvd24oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5jaGlsZERyb3Bkb3duTWVudTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENsYXNzID0gXCJzZWxlY3RlZFwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgLy8gVXNpbmcgZGlyZWN0bHkgYmVjYXVzZSBSZW5kZXJlcjIgZG9lc24ndCBoYXZlIGludm9rZUVsZW1lbnRNZXRob2QgbWV0aG9kIGFueW1vcmUuXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRHJvcGRvd25NZW51XVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURyb3Bkb3duTWVudSBleHRlbmRzIFN1aVRyYW5zaXRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX3NlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHByaXZhdGUgX3RyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbWVudVRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZpY2UoKTpEcm9wZG93blNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHNlcnZpY2UodmFsdWU6RHJvcGRvd25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSB2YWx1ZTtcblxuICAgICAgICBsZXQgcHJldmlvdXNJc09wZW4gPSB0aGlzLl9zZXJ2aWNlLmlzT3BlbjtcbiAgICAgICAgdGhpcy5fc2VydmljZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKChpc09wZW46Ym9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3BlbiAhPT0gcHJldmlvdXNJc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJ1biB0cmFuc2l0aW9ucyBpZiB0aGUgb3BlbiBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRyYW5zaXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVUcmFuc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNpdGlvbkRpcmVjdGlvbi5FaXRoZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLl9zZXJ2aWNlLmlzQW5pbWF0aW5nID0gZmFsc2UpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc09wZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgaXRlbSBzZWxlY3Rpb25zIHdoZW4gYSBuZXN0ZWQgaXRlbSBpcyBzZWxlY3RlZCB0byBhdm9pZCBpbmNvc2lzdGVudCBvcGVuIHN0YXRlcy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldmlvdXNJc09wZW4gPSBpc09wZW47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFyZW50RWxlbWVudCh2YWx1ZTpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyXG4gICAgICAgICAgICAubGlzdGVuKHZhbHVlLm5hdGl2ZUVsZW1lbnQsIFwia2V5ZG93blwiLCAoZTpLZXlib2FyZEV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMub25QYXJlbnRLZXlEb3duKGUpKTtcbiAgICB9XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aURyb3Bkb3duTWVudUl0ZW0pXG4gICAgcHJpdmF0ZSBfaXRlbXNRdWVyeUludGVybmFsOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPjtcblxuICAgIHByaXZhdGUgX2l0ZW1zUXVlcnlPdmVycmlkZTpRdWVyeUxpc3Q8U3VpRHJvcGRvd25NZW51SXRlbT47XG5cbiAgICBwdWJsaWMgc2V0IGl0ZW1zKGl0ZW1zOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPikge1xuICAgICAgICB0aGlzLl9pdGVtc1F1ZXJ5T3ZlcnJpZGUgPSBpdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfaXRlbXNRdWVyeSgpOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bk1lbnVJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1F1ZXJ5T3ZlcnJpZGUgfHwgdGhpcy5faXRlbXNRdWVyeUludGVybmFsO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbGlzdCBvZiBpdGVtcywgaWdub3JpbmcgdGhvc2UgdGhhdCBhcmUgZGlzYWJsZWQuXG4gICAgcHJpdmF0ZSBnZXQgX2l0ZW1zKCk6U3VpRHJvcGRvd25NZW51SXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zUXVlcnkuZmlsdGVyKGkgPT4gIWkuaXNEaXNhYmxlZCk7XG4gICAgfVxuXG4gICAgLy8gU3RhY2sgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgLy8gU2VsZWN0ZWQgaXRlbXMgbG93ZXIgaW4gdGhlIHN0YWNrIGFyZSBuZWNlc3NhcmlseSB0aGUgcGFyZW50IG9mIHRoZSBpdGVtIG9uZSBoaWdoZXIuXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbXM6U3VpRHJvcGRvd25NZW51SXRlbVtdO1xuXG4gICAgLy8gU2V0cyB3aGV0aGVyIG9yIG5vdCB0byBhdXRvbWF0aWNhbGx5IHNlbGVjdCB0aGUgMXN0IGl0ZW0gd2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbmVkLlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVBdXRvU2VsZWN0Rmlyc3Q6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1lbnVTZWxlY3RlZEl0ZW1DbGFzczpzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9wYXJlbnRLZXlEb3duTGlzdGVuZXI6KCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcihmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMubWVudVRyYW5zaXRpb24gPSBcInNsaWRlIGRvd25cIjtcbiAgICAgICAgdGhpcy5tZW51VHJhbnNpdGlvbkR1cmF0aW9uID0gMjAwO1xuXG4gICAgICAgIHRoaXMubWVudUF1dG9TZWxlY3RGaXJzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVTZWxlY3RlZEl0ZW1DbGFzcyA9IFwic2VsZWN0ZWRcIjtcblxuICAgICAgICAvLyBJbiBjYXNlIHRoZSBkcm9wZG93biBtZW51IGlzIGRlc3Ryb3llZCBiZWZvcmUgaXQgaGFzIGEgY2hhbmNlIHRvIGJlIGZ1bGx5IGluaXRpYWxpc2VkLlxuICAgICAgICB0aGlzLl9wYXJlbnRLZXlEb3duTGlzdGVuZXIgPSAoKSA9PiB7fTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkNsaWNrKGU6SGFuZGxlZEV2ZW50ICYgTW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIElBdWdtZW50ZWRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0LmNsb3Nlc3QoXCIuaXRlbVwiKSkgJiYgIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9uY2UgYW4gaXRlbSBpcyBzZWxlY3RlZCwgd2UgY2FuIGNsb3NlIHRoZSBlbnRpcmUgZHJvcGRvd24uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25QYXJlbnRLZXlEb3duKGU6S2V5Ym9hcmRFdmVudCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgdGhlIHJvb3QgZHJvcGRvd24gKGkuZS4gbm90IG5lc3RlZCBkcm9wZG93bnMpIGlzIHJlc3BvbnNpYmxlIGZvciBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UgJiYgdGhpcy5fc2VydmljZS5pc09wZW4gJiYgIXRoaXMuX3NlcnZpY2UuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFN0b3AgZG9jdW1lbnQgZXZlbnRzIGxpa2Ugc2Nyb2xsaW5nIHdoaWxlIG9wZW4uXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCEvaW5wdXQvaS50ZXN0KHRhcmdldC50YWdOYW1lKSAmJlxuICAgICAgICAgICAgICAgIFtLZXlDb2RlLkVzY2FwZSwgS2V5Q29kZS5FbnRlciwgS2V5Q29kZS5VcCwgS2V5Q29kZS5Eb3duLCBLZXlDb2RlLkxlZnQsIEtleUNvZGUuUmlnaHRdLmZpbmQoa0MgPT4ga0MgPT09IGUua2V5Q29kZSkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldHMgdGhlIHRvcCBzZWxlY3RlZCBpdGVtIGZyb20gdGhlIHN0YWNrLlxuICAgICAgICAgICAgY29uc3QgW3NlbGVjdGVkXSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5zbGljZSgtMSk7XG4gICAgICAgICAgICAvLyBLZWVwaW5nIHRyYWNrIG9mIHRoZSBtZW51IGNvbnRhaW5pbmcgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50IGFsbG93cyB1cyB0byBlYXNpbHkgZGV0ZXJtaW5lIGl0cyBzaWJsaW5ncy5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENvbnRhaW5lcjpTdWlEcm9wZG93bk1lbnUgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzZWxlY3RlZFBhcmVudF0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29udGFpbmVyID0gc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gRXNjYXBlIDogY2xvc2UgdGhlIGVudGlyZSBkcm9wZG93bi5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRXNjYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERvd24gOiBzZWxlY3QgdGhlIG5leHQgaXRlbSBiZWxvdyB0aGUgY3VycmVudCBvbmUsIG9yIHRoZSAxc3QgaWYgbm9uZSBzZWxlY3RlZC5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICAvLyBVcCA6IHNlbGVjdCB0aGUgbmV4dCBpdGVtIGFib3ZlIHRoZSBjdXJyZW50IG9uZSwgb3IgdGhlIDFzdCBpZiBub25lIHNlbGVjdGVkLlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHNlbGVjdGVkQ29udGFpbmVyLnVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCwgZS5rZXlDb2RlKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgd2UgYXJlIGluIGFuIGlucHV0LCB0byBzdG9wIGp1bXBpbmcgdG8gdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbnRlciA6IGlmIHRoZSBpdGVtIGRvZXNuJ3QgY29udGFpbiBhIG5lc3RlZCBkcm9wZG93biwgJ2NsaWNrJyBpdC4gT3RoZXJ3aXNlLCBmYWxsIHRocm91Z2ggdG8gJ1JpZ2h0JyBhY3Rpb24uXG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkVudGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiAhc2VsZWN0ZWQuaGFzQ2hpbGREcm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucGVyZm9ybUNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIFJpZ2h0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gY29udGFpbnMgYSBuZXN0ZWQgZHJvcGRvd24sIG9wZW4gdGhlIGRyb3Bkb3duICYgc2VsZWN0IHRoZSAxc3QgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmhhc0NoaWxkRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNoaWxkRHJvcGRvd25NZW51LnNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChzZWxlY3RlZC5jaGlsZERyb3Bkb3duTWVudS51cGRhdGVTZWxlY3Rpb24oc2VsZWN0ZWQsIGUua2V5Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBMZWZ0IDogaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgaW4gYSBuZXN0ZWQgZHJvcGRvd24sIGNsb3NlIGl0IGFuZCBzZWxlY3QgdGhlIGNvbnRhaW5pbmcgaXRlbS5cbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuTGVmdDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbc2VsZWN0ZWRQYXJlbnRdID0gdGhpcy5zZWxlY3RlZEl0ZW1zLnNsaWNlKC0xKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuY2hpbGREcm9wZG93bk1lbnUuc2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQYXJlbnQuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0U2VsZWN0aW9uKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgaS5zZWxlY3RlZENsYXNzID0gdGhpcy5tZW51U2VsZWN0ZWRJdGVtQ2xhc3M7XG4gICAgICAgICAgICBpLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubWVudUF1dG9TZWxlY3RGaXJzdCAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBBdXRvc2VsZWN0IDFzdCBpdGVtIGlmIHJlcXVpcmVkICYgcG9zc2libGUuXG4gICAgICAgICAgICB0aGlzLl9pdGVtc1swXS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKHRoaXMuX2l0ZW1zWzBdKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2l0ZW1zUXVlcnkuZmlyc3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lcyB0aGUgaXRlbSB0byBuZXh0IGJlIHNlbGVjdGVkLCBiYXNlZCBvbiB0aGUga2V5Ym9hcmQgaW5wdXQgJiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uXG4gICAgcHVibGljIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZEl0ZW06U3VpRHJvcGRvd25NZW51SXRlbSwga2V5Q29kZTpLZXlDb2RlKTpTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBzZWxlY3RlZCBzdGF0dXMgb24gdGhlIHByZXZpb3VzbHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2l0ZW1zXG4gICAgICAgICAgICAuZmluZEluZGV4KGkgPT4gaSA9PT0gc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgICBsZXQgbmV3U2VsZWN0aW9uOlN1aURyb3Bkb3duTWVudUl0ZW07XG5cbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuUmlnaHQ6XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuRG93bjpcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuVXA6XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG5vbmUgYXJlIHNlbGVjdGVkLCBzZWxlY3QgdGhlIDFzdCBpdGVtLiBTaG91bGQgdGhpcyBiZSBgdGhpcy5pdGVtcy5sYXN0IC0gMWA/XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4IC09IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGl0ZW0gYXQgdGhlIHVwZGF0ZWQgaW5kZXguIFRoZSB8fCBpcyB0byBzdG9wIHVzIHNlbGVjdGluZyBwYXN0IHRoZSBzdGFydCBvciBlbmQgb2YgdGhlIGl0ZW0gbGlzdC5cbiAgICAgICAgbmV3U2VsZWN0aW9uID0gdGhpcy5faXRlbXNbc2VsZWN0ZWRJbmRleF0gfHwgc2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgIGlmIChuZXdTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgc3RhdHVzIG9uIHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgbmV3U2VsZWN0aW9uLmlzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSBsb2NhdGlvbiBvZiB0aGUgbmV3bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9JdGVtKG5ld1NlbGVjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb0l0ZW0oaXRlbTpTdWlEcm9wZG93bk1lbnVJdGVtKTp2b2lkIHtcbiAgICAgICAgY29uc3QgbWVudTpFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBzZWxlY3RlZFJlY3Q6Q2xpZW50UmVjdCA9IGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVSZWN0ID0gbWVudS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBsZXQgc2Nyb2xsQW1vdW50ID0gMDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRSZWN0LmJvdHRvbSA+IG1lbnVSZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgc2Nyb2xsQW1vdW50ID0gc2VsZWN0ZWRSZWN0LmJvdHRvbSAtIG1lbnVSZWN0LmJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RlZFJlY3QudG9wIDwgbWVudVJlY3QudG9wKSB7XG4gICAgICAgICAgICBzY3JvbGxBbW91bnQgPSBzZWxlY3RlZFJlY3QudG9wIC0gbWVudVJlY3QudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudS5zY3JvbGxUb3AgKz0gTWF0aC5yb3VuZChzY3JvbGxBbW91bnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vbkl0ZW1zQ2hhbmdlZCgpO1xuICAgICAgICB0aGlzLl9pdGVtc1F1ZXJ5LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMub25JdGVtc0NoYW5nZWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkl0ZW1zQ2hhbmdlZCgpOnZvaWQge1xuICAgICAgICAvLyBXZSB1c2UgYF9pdGVtc2AgcmF0aGVyIHRoYW4gYGl0ZW1zYCBpbiBjYXNlIG9uZSBvciBtb3JlIGhhdmUgYmVjb21lIGRpc2FibGVkLlxuICAgICAgICB0aGlzLnJlc2V0U2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmVudEtleURvd25MaXN0ZW5lcigpO1xuICAgIH1cbn1cbiJdfQ==