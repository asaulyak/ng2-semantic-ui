import { Component, ViewChild, ViewContainerRef, ElementRef, EventEmitter, HostListener, HostBinding } from "@angular/core";
import { PositioningService } from "../../../misc/util/internal";
import { TransitionController, TransitionDirection, Transition } from "../../transition/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../transition/directives/transition";
import * as i3 from "./popup-arrow";
var _c0 = ["container"];
var _c1 = ["templateSibling"];
function SuiPopup_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r158 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r158.config.header);
} }
function SuiPopup_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SuiPopup_ng_container_2_div_1_Template, 2, 1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r155 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r155.config.header);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r155.config.text);
} }
function SuiPopup_sui_popup_arrow_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-popup-arrow", 8);
} if (rf & 2) {
    var ctx_r157 = i0.ɵɵnextContext();
    i0.ɵɵproperty("placement", ctx_r157.config.placement)("inverted", ctx_r157.config.isInverted);
} }
var SuiPopup = /** @class */ (function () {
    function SuiPopup(elementRef) {
        this.elementRef = elementRef;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.tabindex = 0;
    }
    Object.defineProperty(SuiPopup.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "anchor", {
        set: function (anchor) {
            this._anchor = anchor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "direction", {
        // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
        get: function () {
            // We need to set direction attribute before popper init to allow correct positioning
            return this.config.placement.split(" ").shift();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "alignment", {
        // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
        get: function () {
            return this.config.placement.split(" ").pop();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopup.prototype, "dynamicClasses", {
        get: function () {
            var classes = {};
            if (this.direction) {
                classes[this.direction] = true;
            }
            if (this.alignment) {
                classes[this.alignment] = true;
            }
            if (this.config.isInverted) {
                classes.inverted = true;
            }
            if (this.config.isBasic) {
                classes.basic = true;
            }
            if (this.config.isFlowing) {
                classes.flowing = true;
            }
            if (this.config.size) {
                classes[this.config.size] = true;
            }
            if (this.config.width) {
                classes[this.config.width] = true;
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    SuiPopup.prototype.open = function () {
        var _this = this;
        // Only attempt to open if currently closed.
        if (!this.isOpen) {
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Create positioning service after a brief delay.
            setTimeout(function () {
                _this.positioningService = new PositioningService(_this._anchor, _this._container.element, _this.config.placement, ".dynamic.arrow");
                _this.positioningService.hasArrow = !_this.config.isBasic;
            });
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, function () {
                // Focus any element with [autofocus] attribute.
                var autoFocus = _this.elementRef.nativeElement.querySelector("[autofocus]");
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(function () { return autoFocus.focus(); }, 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(function () { return autoFocus.focus(); }, _this.config.transitionDuration);
                }
            }));
            // Finally, set the popup to be open.
            this._isOpen = true;
            this.onOpen.emit();
        }
    };
    SuiPopup.prototype.toggle = function () {
        if (!this.isOpen) {
            return this.open();
        }
        return this.close();
    };
    SuiPopup.prototype.close = function () {
        var _this = this;
        // Only attempt to close if currently open.
        if (this.isOpen) {
            // Cancel all other transitions, and initiate the closing transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
            this.closingTimeout = window.setTimeout(function () { return _this.onClose.emit(); }, this.config.transitionDuration);
            // Finally, set the popup to be closed.
            this._isOpen = false;
        }
    };
    SuiPopup.prototype.onClick = function (event) {
        // Makes sense here, as the popup shouldn't be attached to any DOM element.
        event.stopPropagation();
    };
    SuiPopup.ɵfac = function SuiPopup_Factory(t) { return new (t || SuiPopup)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SuiPopup.ɵcmp = i0.ɵɵdefineComponent({ type: SuiPopup, selectors: [["sui-popup"]], viewQuery: function SuiPopup_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
            i0.ɵɵstaticViewQuery(_c1, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._container = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
        } }, hostVars: 1, hostBindings: function SuiPopup_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("click", function SuiPopup_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            i0.ɵɵattribute("tabindex", ctx.tabindex);
        } }, decls: 6, vars: 5, consts: [[1, "ui", "popup", 3, "ngClass", "suiTransition"], ["container", ""], [4, "ngIf"], ["templateSibling", ""], [3, "placement", "inverted", 4, "ngIf"], ["class", "header", 4, "ngIf"], [1, "content"], [1, "header"], [3, "placement", "inverted"]], template: function SuiPopup_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵtemplate(2, SuiPopup_ng_container_2_Template, 4, 2, "ng-container", 2);
            i0.ɵɵelement(3, "div", null, 3);
            i0.ɵɵtemplate(5, SuiPopup_sui_popup_arrow_5_Template, 1, 2, "sui-popup-arrow", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.dynamicClasses)("suiTransition", ctx.transitionController);
            i0.ɵɵattribute("direction", ctx.direction);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.config.template && (!!ctx.config.header || !!ctx.config.text));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.config.isBasic);
        } }, directives: [i1.ɵNgClassR2Impl, i2.SuiTransition, i1.NgIf, i3.SuiPopupArrow], styles: [".ui.popup[_ngcontent-%COMP%] {\n    \n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup[_ngcontent-%COMP%] {\n    \n    pointer-events: none;\n}\n\n.ui.popup[_ngcontent-%COMP%]::before {\n    \n    display: none;\n}\n\n\n.ui.popup[direction=\"top\"][_ngcontent-%COMP%], .ui.popup[direction=\"bottom\"][_ngcontent-%COMP%] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n\n.ui.popup[direction=\"left\"][_ngcontent-%COMP%], .ui.popup[direction=\"right\"][_ngcontent-%COMP%] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}"] });
    return SuiPopup;
}());
export { SuiPopup };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiPopup, [{
        type: Component,
        args: [{
                selector: "sui-popup",
                template: "\n<div class=\"ui popup\"\n     [ngClass]=\"dynamicClasses\"\n     [suiTransition]=\"transitionController\"\n     [attr.direction]=\"direction\"\n     #container>\n\n    <ng-container *ngIf=\"!config.template && (!!config.header || !!config.text)\">\n        <div class=\"header\" *ngIf=\"config.header\">{{ config.header }}</div>\n        <div class=\"content\">{{ config.text }}</div>\n    </ng-container>\n    <div #templateSibling></div>\n\n    <sui-popup-arrow *ngIf=\"!config.isBasic\"\n                     [placement]=\"config.placement\"\n                     [inverted]=\"config.isInverted\"></sui-popup-arrow>\n</div>\n",
                styles: ["\n.ui.popup {\n    /* Autofit popup to the contents. */\n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup {\n    /* When the popup is animating, it may not initially be in the correct position.\n       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.\n       Setting pointer-events to none while animating fixes this bug. */\n    pointer-events: none;\n}\n\n.ui.popup::before {\n    /* Hide the Semantic UI CSS arrow. */\n    display: none;\n}\n\n/* Offset popup by 0.75em above and below when placed 'vertically'. */\n.ui.popup[direction=\"top\"],\n.ui.popup[direction=\"bottom\"] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n/* Offset popup by 0.75em either side when placed 'horizontally'. */\n.ui.popup[direction=\"left\"],\n.ui.popup[direction=\"right\"] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}\n"]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { _container: [{
            type: ViewChild,
            args: ["container", { read: ViewContainerRef, static: true }]
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }], tabindex: [{
            type: HostBinding,
            args: ["attr.tabindex"]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxrQkFBa0IsRUFBbUIsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7O0lBYzFGLDhCQUEwQztJQUFBLFlBQW1CO0lBQUEsaUJBQU07OztJQUF6QixlQUFtQjtJQUFuQiw0Q0FBbUI7OztJQURqRSw2QkFDSTtJQUFBLHdFQUEwQztJQUMxQyw4QkFBcUI7SUFBQSxZQUFpQjtJQUFBLGlCQUFNO0lBQ2hELDBCQUFlOzs7SUFGUyxlQUFxQjtJQUFyQiw2Q0FBcUI7SUFDcEIsZUFBaUI7SUFBakIsMENBQWlCOzs7SUFJMUMscUNBRWtFOzs7SUFEakQscURBQThCLHdDQUFBOztBQWhCbkQ7SUFnSUksa0JBQW1CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV4QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBakVELHNCQUFXLDRCQUFNO2FBQWpCO1lBQ0ks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YWluZXJSZWYsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UsIElEeW5hbWljQ2xhc3NlcyB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IElQb3B1cCB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFRlbXBsYXRlUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC10ZW1wbGF0ZS1jb250cm9sbGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1wb3B1cFwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgcG9wdXBcIlxuICAgICBbbmdDbGFzc109XCJkeW5hbWljQ2xhc3Nlc1wiXG4gICAgIFtzdWlUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25Db250cm9sbGVyXCJcbiAgICAgW2F0dHIuZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiXG4gICAgICNjb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbmZpZy50ZW1wbGF0ZSAmJiAoISFjb25maWcuaGVhZGVyIHx8ICEhY29uZmlnLnRleHQpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIiAqbmdJZj1cImNvbmZpZy5oZWFkZXJcIj57eyBjb25maWcuaGVhZGVyIH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3sgY29uZmlnLnRleHQgfX08L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2ICN0ZW1wbGF0ZVNpYmxpbmc+PC9kaXY+XG5cbiAgICA8c3VpLXBvcHVwLWFycm93ICpuZ0lmPVwiIWNvbmZpZy5pc0Jhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVwiY29uZmlnLnBsYWNlbWVudFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW52ZXJ0ZWRdPVwiY29uZmlnLmlzSW52ZXJ0ZWRcIj48L3N1aS1wb3B1cC1hcnJvdz5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4udWkucG9wdXAge1xuICAgIC8qIEF1dG9maXQgcG9wdXAgdG8gdGhlIGNvbnRlbnRzLiAqL1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnVpLmFuaW1hdGluZy5wb3B1cCB7XG4gICAgLyogV2hlbiB0aGUgcG9wdXAgaXMgYW5pbWF0aW5nLCBpdCBtYXkgbm90IGluaXRpYWxseSBiZSBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbi5cbiAgICAgICBUaGlzIGZpcmVzIGEgbW91c2UgZXZlbnQsIGNhdXNpbmcgdGhlIGFuY2hvcidzIG1vdXNlbGVhdmUgdG8gZmlyZSAtIG1ha2luZyB0aGUgcG9wdXAgZmxpY2tlci5cbiAgICAgICBTZXR0aW5nIHBvaW50ZXItZXZlbnRzIHRvIG5vbmUgd2hpbGUgYW5pbWF0aW5nIGZpeGVzIHRoaXMgYnVnLiAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udWkucG9wdXA6OmJlZm9yZSB7XG4gICAgLyogSGlkZSB0aGUgU2VtYW50aWMgVUkgQ1NTIGFycm93LiAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIE9mZnNldCBwb3B1cCBieSAwLjc1ZW0gYWJvdmUgYW5kIGJlbG93IHdoZW4gcGxhY2VkICd2ZXJ0aWNhbGx5Jy4gKi9cbi51aS5wb3B1cFtkaXJlY3Rpb249XCJ0b3BcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwiYm90dG9tXCJdIHtcbiAgICBtYXJnaW4tdG9wOiAwLjc1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xufVxuXG4vKiBPZmZzZXQgcG9wdXAgYnkgMC43NWVtIGVpdGhlciBzaWRlIHdoZW4gcGxhY2VkICdob3Jpem9udGFsbHknLiAqL1xuLnVpLnBvcHVwW2RpcmVjdGlvbj1cImxlZnRcIl0sXG4udWkucG9wdXBbZGlyZWN0aW9uPVwicmlnaHRcIl0ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQb3B1cCBpbXBsZW1lbnRzIElQb3B1cCB7XG4gICAgLy8gQ29uZmlnIHNldHRpbmdzIGZvciB0aGlzIHBvcHVwLlxuICAgIHB1YmxpYyBjb25maWc6VGVtcGxhdGVQb3B1cENvbmZpZzxhbnk+O1xuXG4gICAgcHVibGljIHRyYW5zaXRpb25Db250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuICAgIHB1YmxpYyBwb3NpdGlvbmluZ1NlcnZpY2U6UG9zaXRpb25pbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2FuY2hvcjpFbGVtZW50UmVmO1xuXG4gICAgLy8gS2VlcHMgdHJhY2sgb2Ygd2hldGhlciB0aGUgcG9wdXAgaXMgb3BlbiBpbnRlcm5hbGx5LlxuICAgIHByaXZhdGUgX2lzT3Blbjpib29sZWFuO1xuICAgIC8vIGBzZXRUaW1lb3V0YCB0aW1lciBwb2ludGVyIGZvciBjYW5jZWxsaW5nIHBvcHVwIGNsb3NlLlxuICAgIHB1YmxpYyBjbG9zaW5nVGltZW91dDpudW1iZXI7XG5cbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBvcGVucyAoYW5kIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGVkKS5cbiAgICBwdWJsaWMgb25PcGVuOkV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICAvLyBGaXJlcyB3aGVuIHRoZSBwb3B1cCBjbG9zZXMgKGFuZCB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZCkuXG4gICAgcHVibGljIG9uQ2xvc2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG5cbiAgICAvLyBgRWxlbWVudFJlZmAgZm9yIHRoZSBwb3NpdGlvbmluZyBzdWJqZWN0LlxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9jb250YWluZXI6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIHB1YmxpYyBzZXQgYW5jaG9yKGFuY2hvcjpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuX2FuY2hvciA9IGFuY2hvcjtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gKGB0b3BgLCBgbGVmdGAsIGByaWdodGAsIGBib3R0b21gKSBvZiB0aGUgY3VycmVudCBwbGFjZW1lbnQuXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHNldCBkaXJlY3Rpb24gYXR0cmlidXRlIGJlZm9yZSBwb3BwZXIgaW5pdCB0byBhbGxvdyBjb3JyZWN0IHBvc2l0aW9uaW5nXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgYWxpZ25tZW50IChgdG9wYCwgYGxlZnRgLCBgcmlnaHRgLCBgYm90dG9tYCkgb2YgdGhlIGN1cnJlbnQgcGxhY2VtZW50LlxuICAgIHB1YmxpYyBnZXQgYWxpZ25tZW50KCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnBsYWNlbWVudC5zcGxpdChcIiBcIikucG9wKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkeW5hbWljQ2xhc3NlcygpOklEeW5hbWljQ2xhc3NlcyB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXM6SUR5bmFtaWNDbGFzc2VzID0ge307XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmRpcmVjdGlvbl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFsaWdubWVudCkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmFsaWdubWVudF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5pc0ludmVydGVkKSB7XG4gICAgICAgICAgICBjbGFzc2VzLmludmVydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuaXNCYXNpYykge1xuICAgICAgICAgICAgY2xhc3Nlcy5iYXNpYyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmlzRmxvd2luZykge1xuICAgICAgICAgICAgY2xhc3Nlcy5mbG93aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb25maWcuc2l6ZSkge1xuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLmNvbmZpZy5zaXplXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLndpZHRoKSB7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuY29uZmlnLndpZHRoXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgLy8gYFZpZXdDb250YWluZXJSZWZgIGZvciB0aGUgZWxlbWVudCB0aGUgdGVtcGxhdGUgZ2V0cyBpbmplY3RlZCBhcyBhIHNpYmxpbmcgb2YuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFiaW5kZXg6bnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBvcGVuIGlmIGN1cnJlbnRseSBjbG9zZWQuXG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgY2xvc2luZyB0aW1lci5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NpbmdUaW1lb3V0KTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIHBvc2l0aW9uaW5nIHNlcnZpY2UgYWZ0ZXIgYSBicmllZiBkZWxheS5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlID0gbmV3IFBvc2l0aW9uaW5nU2VydmljZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5jaG9yLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250YWluZXIuZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcucGxhY2VtZW50LFxuICAgICAgICAgICAgICAgICAgICBcIi5keW5hbWljLmFycm93XCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25pbmdTZXJ2aWNlLmhhc0Fycm93ID0gIXRoaXMuY29uZmlnLmlzQmFzaWM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBvdGhlciB0cmFuc2l0aW9ucywgYW5kIGluaXRpYXRlIHRoZSBvcGVuaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9jdXMgYW55IGVsZW1lbnQgd2l0aCBbYXV0b2ZvY3VzXSBhdHRyaWJ1dGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF1dG9Gb2N1cyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbYXV0b2ZvY3VzXVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1dG9mb2N1cyBhZnRlciB0aGUgYnJvd3NlciBoYXMgaGFkIHRpbWUgdG8gcHJvY2VzcyBvdGhlciBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXV0b0ZvY3VzLmZvY3VzKCksIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBhZ2FpbiB3aGVuIHRoZSBtb2RhbCBoYXMgb3BlbmVkIHNvIHRoYXQgYXV0b2ZvY3VzIHdvcmtzIGluIElFMTEuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF1dG9Gb2N1cy5mb2N1cygpLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBzZXQgdGhlIHBvcHVwIHRvIGJlIG9wZW4uXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZSgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gY2xvc2UgaWYgY3VycmVudGx5IG9wZW4uXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgLy8gQ2FuY2VsIGFsbCBvdGhlciB0cmFuc2l0aW9ucywgYW5kIGluaXRpYXRlIHRoZSBjbG9zaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLnN0b3BBbGwoKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbih0aGlzLmNvbmZpZy50cmFuc2l0aW9uLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSk7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCB0aGUgY2xvc2luZyB0aW1lci5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NpbmdUaW1lb3V0KTtcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBjbG9zaW5nIHRpbWVyLCB0aGF0IGZpcmVzIHRoZSBgb25DbG9zZWAgZXZlbnQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAgICAgICAgICAgIHRoaXMuY2xvc2luZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uQ2xvc2UuZW1pdCgpLCB0aGlzLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBzZXQgdGhlIHBvcHVwIHRvIGJlIGNsb3NlZC5cbiAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgLy8gTWFrZXMgc2Vuc2UgaGVyZSwgYXMgdGhlIHBvcHVwIHNob3VsZG4ndCBiZSBhdHRhY2hlZCB0byBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cbiJdfQ==