import { Component, Input, EventEmitter, Output } from "@angular/core";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class SuiCalendarViewTitle {
    constructor() {
        this.onZoomOut = new EventEmitter();
    }
}
SuiCalendarViewTitle.ɵfac = function SuiCalendarViewTitle_Factory(t) { return new (t || SuiCalendarViewTitle)(); };
SuiCalendarViewTitle.ɵcmp = i0.ɵɵdefineComponent({ type: SuiCalendarViewTitle, selectors: [["sui-calendar-view-title"]], inputs: { ranges: "ranges" }, outputs: { onZoomOut: "zoomOut" }, ngContentSelectors: _c0, decls: 6, vars: 4, consts: [[1, "title", "link", 3, "click"], [1, "prev", "link", 3, "click"], [1, "chevron", "left", "icon"], [1, "next", "link", 3, "click"], [1, "chevron", "right", "icon"]], template: function SuiCalendarViewTitle_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("click", function SuiCalendarViewTitle_Template_span_click_0_listener($event) { return ctx.onZoomOut.emit(); });
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "span", 1);
        i0.ɵɵlistener("click", function SuiCalendarViewTitle_Template_span_click_2_listener($event) { return ctx.ranges == null ? null : ctx.ranges.movePrevious(); });
        i0.ɵɵelement(3, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵlistener("click", function SuiCalendarViewTitle_Template_span_click_4_listener($event) { return ctx.ranges == null ? null : ctx.ranges.moveNext(); });
        i0.ɵɵelement(5, "i", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("disabled", !(ctx.ranges == null ? null : ctx.ranges.canMovePrevious));
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("disabled", !(ctx.ranges == null ? null : ctx.ranges.canMoveNext));
    } }, styles: [".title.link[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarViewTitle, [{
        type: Component,
        args: [{
                selector: "sui-calendar-view-title",
                template: `
<span class="title link" (click)="onZoomOut.emit()">
    <ng-content></ng-content>
</span>
<span class="prev link" [class.disabled]="!ranges?.canMovePrevious" (click)="ranges?.movePrevious()">
    <i class="chevron left icon"></i>
</span>
<span class="next link" [class.disabled]="!ranges?.canMoveNext" (click)="ranges?.moveNext()">
    <i class="chevron right icon"></i>
</span>
`,
                styles: [`
.title.link {
    display: inline-block;
    margin-left: 2rem;
    margin-right: 2rem;
}
`]
            }]
    }], function () { return []; }, { ranges: [{
            type: Input
        }], onZoomOut: [{
            type: Output,
            args: ["zoomOut"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy10aXRsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2NhbGVuZGFyLXZpZXctdGl0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBdUIxRSxNQUFNLE9BQU8sb0JBQW9CO0lBUTdCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBQzlDLENBQUM7O3dGQVZRLG9CQUFvQjt5REFBcEIsb0JBQW9COztRQWxCakMsK0JBQ0k7UUFEcUIscUdBQVMsb0JBQWdCLElBQUM7UUFDL0Msa0JBQVk7UUFDaEIsaUJBQU87UUFDUCwrQkFDSTtRQURnRSxpSUFBUyx5QkFBc0IsSUFBQztRQUNoRyx1QkFBaUM7UUFDckMsaUJBQU87UUFDUCwrQkFDSTtRQUQ0RCxpSUFBUyxxQkFBa0IsSUFBQztRQUN4Rix1QkFBa0M7UUFDdEMsaUJBQU87O1FBTGlCLGVBQTJDO1FBQTNDLHFGQUEyQztRQUczQyxlQUF1QztRQUF2QyxpRkFBdUM7O2tEQVlsRCxvQkFBb0I7Y0FyQmhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Q0FVYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQzs7Ozs7O0NBTVosQ0FBQzthQUNEOztrQkFHSSxLQUFLOztrQkFHTCxNQUFNO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci12aWV3LXRpdGxlXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuIGNsYXNzPVwidGl0bGUgbGlua1wiIChjbGljayk9XCJvblpvb21PdXQuZW1pdCgpXCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJwcmV2IGxpbmtcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIXJhbmdlcz8uY2FuTW92ZVByZXZpb3VzXCIgKGNsaWNrKT1cInJhbmdlcz8ubW92ZVByZXZpb3VzKClcIj5cbiAgICA8aSBjbGFzcz1cImNoZXZyb24gbGVmdCBpY29uXCI+PC9pPlxuPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJuZXh0IGxpbmtcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIXJhbmdlcz8uY2FuTW92ZU5leHRcIiAoY2xpY2spPVwicmFuZ2VzPy5tb3ZlTmV4dCgpXCI+XG4gICAgPGkgY2xhc3M9XCJjaGV2cm9uIHJpZ2h0IGljb25cIj48L2k+XG48L3NwYW4+XG5gLFxuICAgIHN0eWxlczogW2Bcbi50aXRsZS5saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJWaWV3VGl0bGUge1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlO1xuXG4gICAgQE91dHB1dChcInpvb21PdXRcIilcbiAgICBwdWJsaWMgb25ab29tT3V0OkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uWm9vbU91dCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICB9XG59XG4iXX0=