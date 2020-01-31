import { __extends } from "tslib";
import { Component, HostBinding, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDimmer } from "../../dimmer/internal";
import * as i0 from "@angular/core";
var _c0 = ["*"];
var SuiModalDimmer = /** @class */ (function (_super) {
    __extends(SuiModalDimmer, _super);
    function SuiModalDimmer(renderer, element, changeDetector) {
        var _this = _super.call(this, renderer, element, changeDetector) || this;
        _this.hasClasses = true;
        _this.isClickable = false;
        return _this;
    }
    SuiModalDimmer.ɵfac = function SuiModalDimmer_Factory(t) { return new (t || SuiModalDimmer)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    SuiModalDimmer.ɵcmp = i0.ɵɵdefineComponent({ type: SuiModalDimmer, selectors: [["sui-modal-dimmer"]], hostVars: 4, hostBindings: function SuiModalDimmer_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("page", ctx.hasClasses)("modals", ctx.hasClasses);
        } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SuiModalDimmer_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: [".ui.dimmer[_nghost-%COMP%]:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }"] });
    return SuiModalDimmer;
}(SuiDimmer));
export { SuiModalDimmer };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiModalDimmer, [{
        type: Component,
        args: [{
                selector: "sui-modal-dimmer",
                template: "<ng-content></ng-content>",
                styles: ["\n        :host.ui.dimmer:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }\n    "]
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.page"]
        }, {
            type: HostBinding,
            args: ["class.modals"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUVsRDtJQVdvQyxrQ0FBUztJQU16Qyx3QkFBWSxRQUFrQixFQUFFLE9BQWtCLEVBQUUsY0FBZ0M7UUFBcEYsWUFDSSxrQkFBTSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxTQUczQztRQUZHLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOztJQUM3QixDQUFDO2dGQVZRLGNBQWM7dURBQWQsY0FBYzs7OztZQVRaLGtCQUFZOzt5QkFMM0I7Q0F5QkMsQUF0QkQsQ0FXb0MsU0FBUyxHQVc1QztTQVhZLGNBQWM7a0RBQWQsY0FBYztjQVgxQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsTUFBTSxFQUFFLENBQUMsaUtBTVIsQ0FBQzthQUNMOztrQkFHSSxXQUFXO21CQUFDLFlBQVk7O2tCQUN4QixXQUFXO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aURpbW1lciB9IGZyb20gXCIuLi8uLi9kaW1tZXIvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLW1vZGFsLWRpbW1lclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdC51aS5kaW1tZXI6bm90KC5oaWRkZW4pIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyBcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU1vZGFsRGltbWVyIGV4dGVuZHMgU3VpRGltbWVyIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnBhZ2VcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tb2RhbHNcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLCBlbGVtZW50OkVsZW1lbnRSZWYsIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjaGFuZ2VEZXRlY3Rvcik7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDbGlja2FibGUgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=