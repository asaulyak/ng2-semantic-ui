import { Directive, Input, HostBinding, EventEmitter, Output, ContentChild, ElementRef, HostListener, QueryList, ContentChildren } from "@angular/core";
import { HandledEvent, KeyCode } from "../../../misc/util/internal";
import { DropdownService, DropdownAutoCloseType } from "../services/dropdown.service";
import { SuiDropdownMenu } from "./dropdown-menu";
import * as i0 from "@angular/core";
var SuiDropdown = /** @class */ (function () {
    function SuiDropdown(_element) {
        var _this = this;
        this._element = _element;
        this.service = new DropdownService();
        this.service.isOpenChange.subscribe(function () {
            if (_this.service.isOpen) {
                _this._element.nativeElement.focus();
            }
        });
    }
    Object.defineProperty(SuiDropdown.prototype, "children", {
        get: function () {
            var _this = this;
            // @ContentChildren includes the current element by default.
            return this._children.filter(function (c) { return c !== _this; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isOpenChange", {
        get: function () {
            return this.service.isOpenChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isActive", {
        get: function () {
            // This is to ensure nested dropdowns don't get made bold.
            return this.service.isOpen && !this.service.isNested;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isOpen", {
        get: function () {
            return this.service.isOpen;
        },
        set: function (value) {
            // If we are opening the dropdown, we want to always open its parents.
            this.service.setOpenState(value, !!value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "isDisabled", {
        get: function () {
            return this.service.isDisabled;
        },
        set: function (value) {
            this.service.setDisabledState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "tabIndex", {
        get: function () {
            if (this.isDisabled || this.service.isNested) {
                // If disabled, remove from tabindex.
                return undefined;
            }
            if (this._tabIndex != undefined) {
                // If custom tabindex, default to that.
                return this._tabIndex;
            }
            // Otherwise, return default of 0.
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDropdown.prototype, "autoClose", {
        get: function () {
            return this.service.autoCloseMode;
        },
        set: function (value) {
            this.service.autoCloseMode = value;
        },
        enumerable: true,
        configurable: true
    });
    SuiDropdown.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this._menu) {
            throw new Error("You must set [suiDropdownMenu] on the menu element.");
        }
        this._menu.service = this.service;
        this._menu.parentElement = this._element;
        this.childrenUpdated();
        this._children.changes
            .subscribe(function () { return _this.childrenUpdated(); });
    };
    SuiDropdown.prototype.childrenUpdated = function () {
        var _this = this;
        // Reregister child dropdowns each time the menu content changes.
        this.children
            .map(function (c) { return c.service; })
            .forEach(function (s) { return _this.service.registerChild(s); });
    };
    SuiDropdown.prototype.onClick = function (e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            this.service.toggleOpenState();
        }
    };
    SuiDropdown.prototype.onFocusOut = function (e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.externallyClose();
        }
    };
    SuiDropdown.prototype.onKeypress = function (e) {
        // Block the keyboard event from being fired on parent dropdowns.
        if (!e.eventHandled) {
            if (e.keyCode === KeyCode.Enter) {
                e.eventHandled = true;
                this.service.setOpenState(true);
            }
        }
    };
    SuiDropdown.prototype.externallyClose = function () {
        if (this.service.autoCloseMode === DropdownAutoCloseType.ItemClick ||
            this.service.autoCloseMode === DropdownAutoCloseType.OutsideClick) {
            // No need to reflect in parent since they are also bound to document.
            this.service.setOpenState(false);
        }
    };
    SuiDropdown.ɵfac = function SuiDropdown_Factory(t) { return new (t || SuiDropdown)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SuiDropdown.ɵdir = i0.ɵɵdefineDirective({ type: SuiDropdown, selectors: [["", "suiDropdown", ""]], contentQueries: function SuiDropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SuiDropdownMenu, true);
            i0.ɵɵcontentQuery(dirIndex, SuiDropdown, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._menu = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._children = _t);
        } }, hostVars: 5, hostBindings: function SuiDropdown_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("click", function SuiDropdown_click_HostBindingHandler($event) { return ctx.onClick($event); })("focusout", function SuiDropdown_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); })("keypress", function SuiDropdown_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); });
        } if (rf & 2) {
            i0.ɵɵattribute("tabindex", ctx.tabIndex);
            i0.ɵɵclassProp("active", ctx.isActive)("disabled", ctx.isDisabled);
        } }, inputs: { isOpen: "isOpen", isDisabled: "isDisabled", _tabIndex: ["tabindex", "_tabIndex"], autoClose: "autoClose" }, outputs: { isOpenChange: "isOpenChange" } });
    return SuiDropdown;
}());
export { SuiDropdown };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDropdown, [{
        type: Directive,
        args: [{
                selector: "[suiDropdown]"
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { _menu: [{
            type: ContentChild,
            args: [SuiDropdownMenu, /* TODO: add static flag */ {}]
        }], _children: [{
            type: ContentChildren,
            args: [SuiDropdown, { descendants: true }]
        }], isOpenChange: [{
            type: Output
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }], isOpen: [{
            type: Input
        }], isDisabled: [{
            type: HostBinding,
            args: ["class.disabled"]
        }, {
            type: Input
        }], _tabIndex: [{
            type: Input,
            args: ["tabindex"]
        }], tabIndex: [{
            type: HostBinding,
            args: ["attr.tabindex"]
        }], autoClose: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout", ["$event"]]
        }], onKeypress: [{
            type: HostListener,
            args: ["keypress", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2Ryb3Bkb3duL2RpcmVjdGl2ZXMvZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQW9CLFlBQVksRUFDbkYsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUN2RCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBZSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRWxEO0lBMEVJLHFCQUFvQixRQUFtQjtRQUF2QyxpQkFPQztRQVBtQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDaEMsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDckIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdkM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyRUQsc0JBQVcsaUNBQVE7YUFBbkI7WUFBQSxpQkFHQztZQUZHLDREQUE0RDtZQUM1RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEtBQUksRUFBVixDQUFVLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQUVELHNCQUNXLHFDQUFZO2FBRHZCO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUNXLGlDQUFRO2FBRG5CO1lBRUksMERBQTBEO1lBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQUVELHNCQUNXLCtCQUFNO2FBRGpCO1lBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUMvQixDQUFDO2FBRUQsVUFBa0IsS0FBYTtZQUMzQixzRUFBc0U7WUFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FMQTtJQU9ELHNCQUVXLG1DQUFVO2FBRnJCO1lBR0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxDQUFDO2FBRUQsVUFBc0IsS0FBYTtZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQUpBO0lBU0Qsc0JBQ1csaUNBQVE7YUFEbkI7WUFFSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQzFDLHFDQUFxQztnQkFDckMsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFFO2dCQUM3Qix1Q0FBdUM7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN6QjtZQUNELGtDQUFrQztZQUNsQyxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQ1csa0NBQVM7YUFEcEI7WUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3RDLENBQUM7YUFFRCxVQUFxQixLQUEyQjtZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQzs7O09BSkE7SUFlTSx3Q0FBa0IsR0FBekI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87YUFDakIsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8scUNBQWUsR0FBdkI7UUFBQSxpQkFLQztRQUpHLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsUUFBUTthQUNSLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDO2FBQ25CLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdNLDZCQUFPLEdBRGQsVUFDZSxDQUFjO1FBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBRXRCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBR00sZ0NBQVUsR0FEakIsVUFDa0IsQ0FBYTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBR00sZ0NBQVUsR0FEakIsVUFDa0IsQ0FBOEI7UUFDNUMsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBRWpCLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUM3QixDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7U0FDSjtJQUNMLENBQUM7SUFFTyxxQ0FBZSxHQUF2QjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUsscUJBQXFCLENBQUMsU0FBUztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsS0FBSyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUU7WUFDbkUsc0VBQXNFO1lBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQzswRUF0SVEsV0FBVztvREFBWCxXQUFXO3dDQUdOLGVBQWU7d0NBR1osV0FBVzs7Ozs7Ozs7Ozs7c0JBakJoQztDQWtKQyxBQTFJRCxJQTBJQztTQXZJWSxXQUFXO2tEQUFYLFdBQVc7Y0FIdkIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2FBQzVCOztrQkFJSSxZQUFZO21CQUFDLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQyxFQUFFOztrQkFHNUQsZUFBZTttQkFBQyxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztrQkFRbEQsTUFBTTs7a0JBS04sV0FBVzttQkFBQyxjQUFjOztrQkFNMUIsS0FBSzs7a0JBVUwsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUM1QixLQUFLOztrQkFTTCxLQUFLO21CQUFDLFVBQVU7O2tCQUdoQixXQUFXO21CQUFDLGVBQWU7O2tCQWMzQixLQUFLOztrQkFxQ0wsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQVNoQyxZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBT25DLFlBQVk7bUJBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZCxcbiAgICBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIYW5kbGVkRXZlbnQsIEtleUNvZGUsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlLCBEcm9wZG93bkF1dG9DbG9zZVR5cGUgfSBmcm9tIFwiLi4vc2VydmljZXMvZHJvcGRvd24uc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4vZHJvcGRvd24tbWVudVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpRHJvcGRvd25dXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwdWJsaWMgc2VydmljZTpEcm9wZG93blNlcnZpY2U7XG5cbiAgICBAQ29udGVudENoaWxkKFN1aURyb3Bkb3duTWVudSwgLyogVE9ETzogYWRkIHN0YXRpYyBmbGFnICovIHt9KVxuICAgIHByaXZhdGUgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlEcm9wZG93biwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX2NoaWxkcmVuOlF1ZXJ5TGlzdDxTdWlEcm9wZG93bj47XG5cbiAgICBwdWJsaWMgZ2V0IGNoaWxkcmVuKCk6U3VpRHJvcGRvd25bXSB7XG4gICAgICAgIC8vIEBDb250ZW50Q2hpbGRyZW4gaW5jbHVkZXMgdGhlIGN1cnJlbnQgZWxlbWVudCBieSBkZWZhdWx0LlxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uZmlsdGVyKGMgPT4gYyAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGdldCBpc09wZW5DaGFuZ2UoKTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzT3BlbkNoYW5nZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIC8vIFRoaXMgaXMgdG8gZW5zdXJlIG5lc3RlZCBkcm9wZG93bnMgZG9uJ3QgZ2V0IG1hZGUgYm9sZC5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc09wZW4gJiYgIXRoaXMuc2VydmljZS5pc05lc3RlZDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNPcGVuKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlIG9wZW5pbmcgdGhlIGRyb3Bkb3duLCB3ZSB3YW50IHRvIGFsd2F5cyBvcGVuIGl0cyBwYXJlbnRzLlxuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0T3BlblN0YXRlKHZhbHVlLCAhIXZhbHVlKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuaXNEaXNhYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGlzYWJsZWQodmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0RGlzYWJsZWRTdGF0ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgQElucHV0KFwidGFiaW5kZXhcIilcbiAgICBwcml2YXRlIF90YWJJbmRleD86bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci50YWJpbmRleFwiKVxuICAgIHB1YmxpYyBnZXQgdGFiSW5kZXgoKTpudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuc2VydmljZS5pc05lc3RlZCkge1xuICAgICAgICAgICAgLy8gSWYgZGlzYWJsZWQsIHJlbW92ZSBmcm9tIHRhYmluZGV4LlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fdGFiSW5kZXggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBJZiBjdXN0b20gdGFiaW5kZXgsIGRlZmF1bHQgdG8gdGhhdC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBkZWZhdWx0IG9mIDAuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBhdXRvQ2xvc2UoKTpEcm9wZG93bkF1dG9DbG9zZVR5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmF1dG9DbG9zZU1vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBhdXRvQ2xvc2UodmFsdWU6RHJvcGRvd25BdXRvQ2xvc2VUeXBlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBEcm9wZG93blNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmlzT3BlbkNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHNldCBbc3VpRHJvcGRvd25NZW51XSBvbiB0aGUgbWVudSBlbGVtZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tZW51LnNlcnZpY2UgPSB0aGlzLnNlcnZpY2U7XG4gICAgICAgIHRoaXMuX21lbnUucGFyZW50RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5jaGlsZHJlblVwZGF0ZWQoKTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uY2hhbmdlc1xuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoaWxkcmVuVXBkYXRlZCgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoaWxkcmVuVXBkYXRlZCgpOnZvaWQge1xuICAgICAgICAvLyBSZXJlZ2lzdGVyIGNoaWxkIGRyb3Bkb3ducyBlYWNoIHRpbWUgdGhlIG1lbnUgY29udGVudCBjaGFuZ2VzLlxuICAgICAgICB0aGlzLmNoaWxkcmVuXG4gICAgICAgICAgICAubWFwKGMgPT4gYy5zZXJ2aWNlKVxuICAgICAgICAgICAgLmZvckVhY2gocyA9PiB0aGlzLnNlcnZpY2UucmVnaXN0ZXJDaGlsZChzKSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRvZ2dsZU9wZW5TdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Gb2N1c091dChlOklGb2N1c0V2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5leHRlcm5hbGx5Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5cHJlc3MoZTpIYW5kbGVkRXZlbnQgJiBLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gQmxvY2sgdGhlIGtleWJvYXJkIGV2ZW50IGZyb20gYmVpbmcgZmlyZWQgb24gcGFyZW50IGRyb3Bkb3ducy5cbiAgICAgICAgaWYgKCFlLmV2ZW50SGFuZGxlZCkge1xuXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVudGVyKSB7XG4gICAgICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZXh0ZXJuYWxseUNsb3NlKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlcnZpY2UuYXV0b0Nsb3NlTW9kZSA9PT0gRHJvcGRvd25BdXRvQ2xvc2VUeXBlLkl0ZW1DbGljayB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5hdXRvQ2xvc2VNb2RlID09PSBEcm9wZG93bkF1dG9DbG9zZVR5cGUuT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byByZWZsZWN0IGluIHBhcmVudCBzaW5jZSB0aGV5IGFyZSBhbHNvIGJvdW5kIHRvIGRvY3VtZW50LlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=