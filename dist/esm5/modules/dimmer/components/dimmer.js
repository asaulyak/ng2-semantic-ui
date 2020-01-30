import { __extends } from "tslib";
import { Component, Input, Output, HostBinding, HostListener, EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { TransitionController, SuiTransition, TransitionDirection, Transition } from "../../transition/internal";
import * as i0 from "@angular/core";
var _c0 = ["*"];
var SuiDimmer = /** @class */ (function (_super) {
    __extends(SuiDimmer, _super);
    function SuiDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this._isDimmed = false;
        _this.isDimmedChange = new EventEmitter();
        _this.isClickable = true;
        _this.wrapContent = true;
        _this.hasClasses = true;
        return _this;
    }
    Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
        get: function () {
            return this._isDimmed;
        },
        set: function (value) {
            var isDimmed = !!value;
            if (!this._transitionController) {
                // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                this._transitionController = new TransitionController(isDimmed, "block");
                this.setTransitionController(this._transitionController);
                this._isDimmed = isDimmed;
            }
            else if (this._isDimmed !== isDimmed) {
                this._isDimmed = isDimmed;
                this._transitionController.stopAll();
                this._transitionController.animate(new Transition("fade", this.transitionDuration, isDimmed ? TransitionDirection.In : TransitionDirection.Out));
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiDimmer.prototype.onClick = function () {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    };
    SuiDimmer.ɵfac = function SuiDimmer_Factory(t) { return new (t || SuiDimmer)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    SuiDimmer.ɵcmp = i0.ɵɵdefineComponent({ type: SuiDimmer, selectors: [["sui-dimmer"]], hostVars: 6, hostBindings: function SuiDimmer_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("click", function SuiDimmer_click_HostBindingHandler($event) { return ctx.onClick(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ui", ctx.hasClasses)("dimmer", ctx.hasClasses)("active", ctx.isDimmed);
        } }, inputs: { isDimmed: "isDimmed", isClickable: "isClickable", transition: "transition", transitionDuration: "transitionDuration", wrapContent: "wrapContent" }, outputs: { isDimmedChange: "isDimmedChange" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 2, template: function SuiDimmer_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("content", ctx.wrapContent);
        } }, styles: [".dimmer[_nghost-%COMP%]:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}"] });
    return SuiDimmer;
}(SuiTransition));
export { SuiDimmer };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDimmer, [{
        type: Component,
        args: [{
                selector: "sui-dimmer",
                template: "\n<div [class.content]=\"wrapContent\">\n    <ng-content></ng-content>\n</div>\n",
                styles: ["\n:host.dimmer:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}\n"]
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.dimmer"]
        }], isDimmed: [{
            type: HostBinding,
            args: ["class.active"]
        }, {
            type: Input
        }], isDimmedChange: [{
            type: Output
        }], isClickable: [{
            type: Input
        }], transition: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], wrapContent: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kaW1tZXIvY29tcG9uZW50cy9kaW1tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQzVFLFVBQVUsRUFBRSxpQkFBaUIsRUFDaEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRWpIO0lBYytCLDZCQUFhO0lBbUR4QyxtQkFBWSxRQUFrQixFQUFFLE9BQWtCLEVBQUUsY0FBZ0M7UUFBcEYsWUFDSSxrQkFBTSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxTQVMzQztRQVBHLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNsRCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7SUFDM0IsQ0FBQztJQXBERCxzQkFFVywrQkFBUTthQUZuQjtZQUdJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBb0IsS0FBYTtZQUM3QixJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQzdCLDZHQUE2RztnQkFDN0csSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksb0JBQW9CLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUV6RSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBRXpELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzdCO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBRXBDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUUxQixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQzlCLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckg7UUFDTCxDQUFDOzs7T0FwQkE7SUFtRE0sMkJBQU8sR0FEZDtRQUVJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0M7SUFDTCxDQUFDO3NFQXJFUSxTQUFTO2tEQUFULFNBQVM7Ozs7OztZQVh0QiwyQkFDSTtZQUFBLGtCQUFZO1lBQ2hCLGlCQUFNOztZQUZELDBDQUE2Qjs7b0JBVGxDO0NBMEZDLEFBcEZELENBYytCLGFBQWEsR0FzRTNDO1NBdEVZLFNBQVM7a0RBQVQsU0FBUztjQWRyQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxrRkFJYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQywwRkFLWixDQUFDO2FBQ0Q7O2tCQUVJLFdBQVc7bUJBQUMsVUFBVTs7a0JBQ3RCLFdBQVc7bUJBQUMsY0FBYzs7a0JBTzFCLFdBQVc7bUJBQUMsY0FBYzs7a0JBQzFCLEtBQUs7O2tCQXlCTCxNQUFNOztrQkFHTixLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLOztrQkFJTCxLQUFLOztrQkFlTCxZQUFZO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsXG4gICAgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25Db250cm9sbGVyLCBTdWlUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IFtjbGFzcy5jb250ZW50XT1cIndyYXBDb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0LmRpbW1lcjpub3QoLmhpZGRlbikge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGltbWVyIGV4dGVuZHMgU3VpVHJhbnNpdGlvbiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaW1tZXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBwcml2YXRlIF9pc0RpbW1lZDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGltbWVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RpbW1lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzRGltbWVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgaXNEaW1tZWQgPSAhIXZhbHVlO1xuXG4gICAgICAgIGlmICghdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2UgdHJhbnNpdGlvbiBmdW5jdGlvbmFsaXR5IHdoZW4gZmlyc3Qgc2V0dGluZyBkaW1tZWQsIHRvIGVuc3VyZSBpbml0aWFsIHN0YXRlIGRvZXNuJ3QgdHJhbnNpdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGlzRGltbWVkLCBcImJsb2NrXCIpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBpc0RpbW1lZDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc0RpbW1lZCAhPT0gaXNEaW1tZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBpc0RpbW1lZDtcblxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuc3RvcEFsbCgpO1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgICAgICBuZXcgVHJhbnNpdGlvbihcImZhZGVcIiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIGlzRGltbWVkID8gVHJhbnNpdGlvbkRpcmVjdGlvbi5JbiA6IFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNEaW1tZWRDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNDbGlja2FibGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIC8qIEludGVybmFsIGZvciBub3cgKi9cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB3cmFwQ29udGVudDpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG5cbiAgICAgICAgdGhpcy5faXNEaW1tZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RpbW1lZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICAgICAgdGhpcy5pc0NsaWNrYWJsZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy53cmFwQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0NsaWNrYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pc0RpbW1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0RpbW1lZENoYW5nZS5lbWl0KHRoaXMuaXNEaW1tZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19