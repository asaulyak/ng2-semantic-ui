import { Component, HostBinding, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDimmer } from "../../dimmer/internal";
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class SuiModalDimmer extends SuiDimmer {
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        this.hasClasses = true;
        this.isClickable = false;
    }
}
SuiModalDimmer.ɵfac = function SuiModalDimmer_Factory(t) { return new (t || SuiModalDimmer)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SuiModalDimmer.ɵcmp = i0.ɵɵdefineComponent({ type: SuiModalDimmer, selectors: [["sui-modal-dimmer"]], hostVars: 4, hostBindings: function SuiModalDimmer_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("page", ctx.hasClasses)("modals", ctx.hasClasses);
    } }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SuiModalDimmer_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: [".ui.dimmer[_nghost-%COMP%]:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiModalDimmer, [{
        type: Component,
        args: [{
                selector: "sui-modal-dimmer",
                template: `<ng-content></ng-content>`,
                styles: [`
        :host.ui.dimmer:not(.hidden) {
            transition: none;
            overflow-y: auto;
            display: flex !important; 
        }
    `]
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.page"]
        }, {
            type: HostBinding,
            args: ["class.modals"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGltbWVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9jb21wb25lbnRzL2RpbW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBYWxELE1BQU0sT0FBTyxjQUFlLFNBQVEsU0FBUztJQU16QyxZQUFZLFFBQWtCLEVBQUUsT0FBa0IsRUFBRSxjQUFnQztRQUNoRixLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs0RUFWUSxjQUFjO21EQUFkLGNBQWM7Ozs7UUFUWixrQkFBWTs7a0RBU2QsY0FBYztjQVgxQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsTUFBTSxFQUFFLENBQUM7Ozs7OztLQU1SLENBQUM7YUFDTDs7a0JBR0ksV0FBVzttQkFBQyxZQUFZOztrQkFDeEIsV0FBVzttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlEaW1tZXIgfSBmcm9tIFwiLi4vLi4vZGltbWVyL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tb2RhbC1kaW1tZXJcIixcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogW2BcbiAgICAgICAgOmhvc3QudWkuZGltbWVyOm5vdCguaGlkZGVuKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbERpbW1lciBleHRlbmRzIFN1aURpbW1lciB7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5wYWdlXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubW9kYWxzXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY2hhbmdlRGV0ZWN0b3IpO1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgfVxufVxuIl19