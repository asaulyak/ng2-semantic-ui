import { Component, Input, HostBinding } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SuiProgress_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r84 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r84.percentage, "%");
} }
const _c0 = ["*"];
export class SuiProgress {
    constructor() {
        this.value = 0;
        this.maximum = 100;
        this.precision = 0;
        this._overrideSuccess = false;
        this.autoSuccess = true;
        this.showProgress = true;
        this.hasClasses = true;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._value = converted;
    }
    get maximum() {
        return this._maximum;
    }
    set maximum(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._maximum = converted;
    }
    get precision() {
        return this._precision;
    }
    set precision(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._precision = Math.min(Math.max(converted, 0), 20);
    }
    get reachedMaximum() {
        return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
    }
    get percentage() {
        const boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
        const percentage = (boundedValue / this.maximum) * 100;
        return percentage.toFixed(this.precision);
    }
    set classValue(classes) {
        if (classes.includes("attached") || classes.includes("tiny")) {
            this.showProgress = false;
        }
        if (classes.includes("success")) {
            this._overrideSuccess = true;
        }
    }
}
SuiProgress.ɵfac = function SuiProgress_Factory(t) { return new (t || SuiProgress)(); };
SuiProgress.ɵcmp = i0.ɵɵdefineComponent({ type: SuiProgress, selectors: [["sui-progress"]], hostVars: 7, hostBindings: function SuiProgress_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("data-percent", ctx.percentage);
        i0.ɵɵclassProp("ui", ctx.hasClasses)("progress", ctx.hasClasses)("success", ctx.reachedMaximum);
    } }, inputs: { autoSuccess: "autoSuccess", showProgress: "showProgress", value: "value", maximum: "maximum", precision: "precision", classValue: ["class", "classValue"] }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "bar"], ["class", "progress", 4, "ngIf"], [1, "label"], [1, "progress"]], template: function SuiProgress_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, SuiProgress_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.percentage, "%");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showProgress);
    } }, directives: [i1.NgIf], styles: [".bar[_ngcontent-%COMP%] {\n    transition-duration: 300ms !important;\n    z-index: 1;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiProgress, [{
        type: Component,
        args: [{
                selector: "sui-progress",
                template: `
<div class="bar" [style.width.%]="percentage">
    <div class="progress" *ngIf="showProgress">{{ percentage }}%</div>
</div>
<div class="label">
    <ng-content></ng-content>
</div>
`,
                styles: [`
.bar {
    transition-duration: 300ms !important;
    z-index: 1;
}
`]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.progress"]
        }], autoSuccess: [{
            type: Input
        }], showProgress: [{
            type: Input
        }], value: [{
            type: Input
        }], maximum: [{
            type: Input
        }], precision: [{
            type: Input
        }], reachedMaximum: [{
            type: HostBinding,
            args: ["class.success"]
        }], percentage: [{
            type: HostBinding,
            args: ["attr.data-percent"]
        }], classValue: [{
            type: Input,
            args: ["class"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3Byb2dyZXNzL2NvbXBvbmVudHMvcHJvZ3Jlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lBTTFELDhCQUEyQztJQUFBLFlBQWlCO0lBQUEsaUJBQU07OztJQUF2QixlQUFpQjtJQUFqQixrREFBaUI7OztBQWFoRSxNQUFNLE9BQU8sV0FBVztJQXlGcEI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQWxGRCxJQUNXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLEtBQVk7UUFDekIsdURBQXVEO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFDVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLE9BQU8sQ0FBQyxLQUFZO1FBQzNCLHVEQUF1RDtRQUN2RCxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUV6QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQ1csU0FBUztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQVcsU0FBUyxDQUFDLEtBQVk7UUFDN0IsdURBQXVEO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELElBQ1csY0FBYztRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFRCxJQUNXLFVBQVU7UUFDakIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJFLE1BQU0sVUFBVSxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFdkQsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFDVyxVQUFVLENBQUMsT0FBYztRQUNoQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUM3QjtRQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQzs7c0VBdkZRLFdBQVc7Z0RBQVgsV0FBVzs7Ozs7UUFkeEIsOEJBQ0k7UUFBQSw0REFBMkM7UUFDL0MsaUJBQU07UUFDTiw4QkFDSTtRQUFBLGtCQUFZO1FBQ2hCLGlCQUFNOztRQUxXLDRDQUE0QjtRQUNuQixlQUFvQjtRQUFwQix1Q0FBb0I7O2tEQWFqQyxXQUFXO2NBakJ2QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7OztDQU9iO2dCQUNHLE1BQU0sRUFBRSxDQUFDOzs7OztDQUtaLENBQUM7YUFDRDs7a0JBRUksV0FBVzttQkFBQyxVQUFVOztrQkFDdEIsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQVM1QixLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLOztrQkFnQkwsS0FBSzs7a0JBZ0JMLEtBQUs7O2tCQWdCTCxXQUFXO21CQUFDLGVBQWU7O2tCQUszQixXQUFXO21CQUFDLG1CQUFtQjs7a0JBUy9CLEtBQUs7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXByb2dyZXNzXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJiYXJcIiBbc3R5bGUud2lkdGguJV09XCJwZXJjZW50YWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgKm5nSWY9XCJzaG93UHJvZ3Jlc3NcIj57eyBwZXJjZW50YWdlIH19JTwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibGFiZWxcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLmJhciB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXMgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUHJvZ3Jlc3Mge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucHJvZ3Jlc3NcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfdmFsdWU6bnVtYmVyO1xuICAgIHByaXZhdGUgX21heGltdW06bnVtYmVyO1xuICAgIHByaXZhdGUgX3ByZWNpc2lvbjpudW1iZXI7XG5cbiAgICBwcml2YXRlIF9vdmVycmlkZVN1Y2Nlc3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGF1dG9TdWNjZXNzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzaG93UHJvZ3Jlc3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOm51bWJlcikge1xuICAgICAgICAvLyBDb252ZXJ0IHZhbHVlIGZyb20gc3RyaW5nIHRvIG51bWJlciB3aGVyZSBuZWNlc3NhcnkuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9ICt2YWx1ZTtcblxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvbnZlcnRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gY29udmVydGVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhpbXVtKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGltdW07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhpbXVtKHZhbHVlOm51bWJlcikge1xuICAgICAgICAvLyBDb252ZXJ0IHZhbHVlIGZyb20gc3RyaW5nIHRvIG51bWJlciB3aGVyZSBuZWNlc3NhcnkuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZCA9ICt2YWx1ZTtcblxuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGNvbnZlcnRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21heGltdW0gPSBjb252ZXJ0ZWQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHByZWNpc2lvbigpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVjaXNpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBwcmVjaXNpb24odmFsdWU6bnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdmFsdWUgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIHdoZXJlIG5lY2Vzc2FyeS5cbiAgICAgICAgY29uc3QgY29udmVydGVkID0gK3ZhbHVlO1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY29udmVydGVkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcHJlY2lzaW9uID0gTWF0aC5taW4oTWF0aC5tYXgoY29udmVydGVkLCAwKSwgMjApO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnN1Y2Nlc3NcIilcbiAgICBwdWJsaWMgZ2V0IHJlYWNoZWRNYXhpbXVtKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVycmlkZVN1Y2Nlc3MgfHwgKCh0aGlzLnZhbHVlID49IHRoaXMubWF4aW11bSkgJiYgdGhpcy5hdXRvU3VjY2Vzcyk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5kYXRhLXBlcmNlbnRcIilcbiAgICBwdWJsaWMgZ2V0IHBlcmNlbnRhZ2UoKTpzdHJpbmcge1xuICAgICAgICBjb25zdCBib3VuZGVkVmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLnZhbHVlLCAwKSwgdGhpcy5tYXhpbXVtKTtcblxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKGJvdW5kZWRWYWx1ZSAvIHRoaXMubWF4aW11bSkgKiAxMDA7XG5cbiAgICAgICAgcmV0dXJuIHBlcmNlbnRhZ2UudG9GaXhlZCh0aGlzLnByZWNpc2lvbik7XG4gICAgfVxuXG4gICAgQElucHV0KFwiY2xhc3NcIilcbiAgICBwdWJsaWMgc2V0IGNsYXNzVmFsdWUoY2xhc3NlczpzdHJpbmcpIHtcbiAgICAgICAgaWYgKGNsYXNzZXMuaW5jbHVkZXMoXCJhdHRhY2hlZFwiKSB8fCBjbGFzc2VzLmluY2x1ZGVzKFwidGlueVwiKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3Nlcy5pbmNsdWRlcyhcInN1Y2Nlc3NcIikpIHtcbiAgICAgICAgICAgIHRoaXMuX292ZXJyaWRlU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgICAgIHRoaXMubWF4aW11bSA9IDEwMDtcbiAgICAgICAgdGhpcy5wcmVjaXNpb24gPSAwO1xuXG4gICAgICAgIHRoaXMuX292ZXJyaWRlU3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dG9TdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxufVxuIl19