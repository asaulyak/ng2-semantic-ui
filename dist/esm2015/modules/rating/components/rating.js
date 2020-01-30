import { Component, Directive, Input, Output, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SuiRating_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 1);
    i0.ɵɵlistener("mouseover", function SuiRating_i_0_Template_i_mouseover_0_listener($event) { i0.ɵɵrestoreView(_r89); const i_r87 = ctx.index; const ctx_r88 = i0.ɵɵnextContext(); return ctx_r88.onMouseover(i_r87); })("click", function SuiRating_i_0_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r89); const i_r87 = ctx.index; const ctx_r90 = i0.ɵɵnextContext(); return ctx_r90.onClick(i_r87); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r87 = ctx.index;
    const ctx_r85 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", ctx_r85.hoveredIndex >= i_r87 && !ctx_r85.isReadonly)("active", ctx_r85.value > i_r87);
} }
export class SuiRating {
    constructor() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    get maximum() {
        return this._maximum;
    }
    set maximum(value) {
        this._maximum = +value;
    }
    get icons() {
        // tslint:disable-next-line:prefer-literal
        return new Array(this.maximum);
    }
    onClick(i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    }
    onMouseover(i) {
        this.hoveredIndex = i;
    }
    onMouseout() {
        this.hoveredIndex = -1;
    }
    writeValue(value) {
        this.value = value;
    }
}
SuiRating.ɵfac = function SuiRating_Factory(t) { return new (t || SuiRating)(); };
SuiRating.ɵcmp = i0.ɵɵdefineComponent({ type: SuiRating, selectors: [["sui-rating"]], hostVars: 6, hostBindings: function SuiRating_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("mouseout", function SuiRating_mouseout_HostBindingHandler($event) { return ctx.onMouseout(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ui", ctx.hasClasses)("rating", ctx.hasClasses)("read-only", ctx.isReadonly);
    } }, inputs: { maximum: "maximum", isReadonly: "isReadonly" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 1, consts: [["class", "icon", 3, "selected", "active", "mouseover", "click", 4, "ngFor", "ngForOf"], [1, "icon", 3, "mouseover", "click"]], template: function SuiRating_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SuiRating_i_0_Template, 1, 4, "i", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.icons);
    } }, directives: [i1.NgForOf], styles: [".read-only[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n    cursor: auto\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiRating, [{
        type: Component,
        args: [{
                selector: "sui-rating",
                template: `
<i class="icon"
   *ngFor="let icon of icons; let i = index"
   (mouseover)="onMouseover(i)"
   (click)="onClick(i)"
   [class.selected]="hoveredIndex >= i && !isReadonly"
   [class.active]="value > i">
</i>
`,
                styles: [`
:host.read-only .icon {
    cursor: auto
}
`]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.rating"]
        }], valueChange: [{
            type: Output
        }], maximum: [{
            type: Input
        }], isReadonly: [{
            type: HostBinding,
            args: ["class.read-only"]
        }, {
            type: Input
        }], onMouseout: [{
            type: HostListener,
            args: ["mouseout"]
        }] }); })();
export class SuiRatingValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiRatingValueAccessor.ɵfac = function SuiRatingValueAccessor_Factory(t) { return new (t || SuiRatingValueAccessor)(i0.ɵɵdirectiveInject(SuiRating)); };
SuiRatingValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiRatingValueAccessor, selectors: [["sui-rating"]], hostBindings: function SuiRatingValueAccessor_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("valueChange", function SuiRatingValueAccessor_valueChange_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiRatingValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiRatingValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-rating",
                host: { "(valueChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
            }]
    }], function () { return [{ type: SuiRating }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9yYXRpbmcvY29tcG9uZW50cy9yYXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQTRCLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0lBS3hILDRCQU1JO0lBSkQsc05BQTRCLDZMQUFBO0lBSS9CLGlCQUFJOzs7O0lBRkQsZ0ZBQW1ELGlDQUFBOztBQVV0RCxNQUFNLE9BQU8sU0FBUztJQWdDbEI7UUFGTyxpQkFBWSxHQUFVLENBQUMsQ0FBQyxDQUFDO1FBRzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTlDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUE1QkQsSUFDVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLE9BQU8sQ0FBQyxLQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQU1ELElBQVcsS0FBSztRQUNaLDBDQUEwQztRQUMxQyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBY00sT0FBTyxDQUFDLENBQVE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFTSxXQUFXLENBQUMsQ0FBUTtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBR00sVUFBVTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFZO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7O2tFQTVEUSxTQUFTOzhDQUFULFNBQVM7Ozs7O1FBZHRCLHNEQU1BOztRQUxHLG1DQUF5Qzs7a0RBYS9CLFNBQVM7Y0FqQnJCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7OztDQVFiO2dCQUNHLE1BQU0sRUFBRSxDQUFDOzs7O0NBSVosQ0FBQzthQUNEOztrQkFFSSxXQUFXO21CQUFDLFVBQVU7O2tCQUN0QixXQUFXO21CQUFDLGNBQWM7O2tCQUsxQixNQUFNOztrQkFLTixLQUFLOztrQkFTTCxXQUFXO21CQUFDLGlCQUFpQjs7a0JBQzdCLEtBQUs7O2tCQStCTCxZQUFZO21CQUFDLFVBQVU7O0FBZTVCLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxtQkFBc0M7SUFDOUUsWUFBWSxJQUFjO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDOzs0RkFIUSxzQkFBc0IsdUJBQ2QsU0FBUzsyREFEakIsc0JBQXNCOzswQ0FGcEIsQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2tEQUV0RCxzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQUUsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDbEU7c0NBRW9CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1yYXRpbmdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGkgY2xhc3M9XCJpY29uXCJcbiAgICpuZ0Zvcj1cImxldCBpY29uIG9mIGljb25zOyBsZXQgaSA9IGluZGV4XCJcbiAgIChtb3VzZW92ZXIpPVwib25Nb3VzZW92ZXIoaSlcIlxuICAgKGNsaWNrKT1cIm9uQ2xpY2soaSlcIlxuICAgW2NsYXNzLnNlbGVjdGVkXT1cImhvdmVyZWRJbmRleCA+PSBpICYmICFpc1JlYWRvbmx5XCJcbiAgIFtjbGFzcy5hY3RpdmVdPVwidmFsdWUgPiBpXCI+XG48L2k+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0LnJlYWQtb25seSAuaWNvbiB7XG4gICAgY3Vyc29yOiBhdXRvXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYXRpbmcgaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8bnVtYmVyPiB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yYXRpbmdcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHVibGljIHZhbHVlOm51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyB2YWx1ZUNoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyPjtcblxuICAgIHByaXZhdGUgX21heGltdW06bnVtYmVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IG1heGltdW0oKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4aW11bTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IG1heGltdW0odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21heGltdW0gPSArdmFsdWU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmVhZC1vbmx5XCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNSZWFkb25seTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBpY29ucygpOnVuZGVmaW5lZFtdIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1saXRlcmFsXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkodGhpcy5tYXhpbXVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaG92ZXJlZEluZGV4Om51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICAgICAgdGhpcy5tYXhpbXVtID0gNTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbGljayhpOm51bWJlcik6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gaSArIDE7XG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Nb3VzZW92ZXIoaTpudW1iZXIpOnZvaWQge1xuICAgICAgICB0aGlzLmhvdmVyZWRJbmRleCA9IGk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlb3V0XCIpXG4gICAgcHVibGljIG9uTW91c2VvdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpudW1iZXIpOnZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgaG9zdDogeyBcIih2YWx1ZUNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYXRpbmdWYWx1ZUFjY2Vzc29yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nVmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8bnVtYmVyLCBTdWlSYXRpbmc+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aVJhdGluZykge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=