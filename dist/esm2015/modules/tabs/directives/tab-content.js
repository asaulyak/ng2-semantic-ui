import { HostBinding, Directive, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class SuiTabContent {
    constructor() {
        this.isActive = false;
        this.hasClasses = true;
    }
}
SuiTabContent.ɵfac = function SuiTabContent_Factory(t) { return new (t || SuiTabContent)(); };
SuiTabContent.ɵdir = i0.ɵɵdefineDirective({ type: SuiTabContent, selectors: [["", "suiTabContent", ""]], hostVars: 4, hostBindings: function SuiTabContent_HostBindings(rf, ctx, elIndex) { if (rf & 2) {
        i0.ɵɵclassProp("tab", ctx.hasClasses)("active", ctx.isActive);
    } }, inputs: { id: ["suiTabContent", "id"] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiTabContent, [{
        type: Directive,
        args: [{
                selector: "[suiTabContent]"
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.tab"]
        }], id: [{
            type: Input,
            args: ["suiTabContent"]
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3RhYnMvZGlyZWN0aXZlcy90YWItY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzlELE1BQU0sT0FBTyxhQUFhO0lBVXRCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs7MEVBZFEsYUFBYTtrREFBYixhQUFhOzs7a0RBQWIsYUFBYTtjQUh6QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjthQUM5Qjs7a0JBRUksV0FBVzttQkFBQyxXQUFXOztrQkFHdkIsS0FBSzttQkFBQyxlQUFlOztrQkFHckIsV0FBVzttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiQ29udGVudF1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlUYWJDb250ZW50IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy50YWJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KFwic3VpVGFiQ29udGVudFwiKVxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=