import { Component, Renderer2 } from "@angular/core";
import { DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../components/calendar-view-title";
import * as i3 from "../directives/calendar-item";
function SuiCalendarHourView_thead_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "th", 3);
    i0.ɵɵelementStart(3, "sui-calendar-view-title", 4);
    i0.ɵɵlistener("zoomOut", function SuiCalendarHourView_thead_1_Template_sui_calendar_view_title_zoomOut_3_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.zoomOut(); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ranges", ctx_r52.ranges);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r52.date, " ");
} }
function SuiCalendarHourView_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵlistener("click", function SuiCalendarHourView_tr_3_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r60); const item_r58 = ctx.$implicit; const ctx_r59 = i0.ɵɵnextContext(2); return ctx_r59.setDate(item_r58); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    i0.ɵɵproperty("calendarItem", item_r58);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r58.humanReadable, " ");
} }
function SuiCalendarHourView_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, SuiCalendarHourView_tr_3_td_1_Template, 2, 2, "td", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r56 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r56);
} }
export class CalendarRangeHourService extends CalendarRangeService {
    configureItem(item, baseDate) {
        // Set minutes and seconds to 0
        const customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
        item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    }
}
export class SuiCalendarHourView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4));
    }
    get date() {
        return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
    }
}
SuiCalendarHourView.ɵfac = function SuiCalendarHourView_Factory(t) { return new (t || SuiCalendarHourView)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
SuiCalendarHourView.ɵcmp = i0.ɵɵdefineComponent({ type: SuiCalendarHourView, selectors: [["sui-calendar-hour-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "four", "column", "hour"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "ranges", "zoomOut"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarHourView_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, SuiCalendarHourView_thead_1_Template, 5, 2, "thead", 1);
        i0.ɵɵelementStart(2, "tbody");
        i0.ɵɵtemplate(3, SuiCalendarHourView_tr_3_Template, 2, 1, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.service.config.mode != 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.SuiCalendarViewTitle, i3.SuiCalendarItem], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarHourView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-hour-view",
                template: `
<table class="ui celled center aligned unstackable table four column hour">
<thead *ngIf="service.config.mode != 1">
    <tr>
        <th colspan="4">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ date }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL2hvdXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztJQWVwRCw2QkFDSTtJQUFBLDBCQUNJO0lBQUEsNkJBQ0k7SUFBQSxrREFDSTtJQUR1QyxvTkFBcUI7SUFDNUQsWUFDSjtJQUFBLGlCQUEwQjtJQUM5QixpQkFBSztJQUNULGlCQUFLO0lBQ1QsaUJBQVE7OztJQUw2QixlQUFpQjtJQUFqQix1Q0FBaUI7SUFDdEMsZUFDSjtJQURJLDZDQUNKOzs7O0lBTUosNkJBRzRCO0lBQXhCLHNPQUF1QjtJQUFDLFlBQzVCO0lBQUEsaUJBQUs7OztJQUZELHVDQUFxQjtJQUNHLGVBQzVCO0lBRDRCLHNEQUM1Qjs7O0lBTEosMEJBQ0k7SUFBQSx1RUFHNEI7SUFFaEMsaUJBQUs7OztJQUpHLGVBQTBCO0lBQTFCLG1DQUEwQjs7QUF6QnRDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxvQkFBb0I7SUFDdkQsYUFBYSxDQUFDLElBQWlCLEVBQUUsUUFBYTtRQUNqRCwrQkFBK0I7UUFDL0IsTUFBTSxZQUFZLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0NBQ0o7QUEyQkQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFlBQVk7SUFNakQsWUFBWSxRQUFrQjtRQUMxQixLQUFLLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQU5ELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEgsQ0FBQzs7c0ZBSlEsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUF0QmhDLGdDQUNBO1FBQUEsd0VBQ0k7UUFRSiw2QkFDSTtRQUFBLGtFQUNJO1FBTVIsaUJBQVE7UUFDUixpQkFBUTs7UUFsQkQsZUFBZ0M7UUFBaEMsbURBQWdDO1FBVS9CLGVBQWlEO1FBQWpELHlEQUFpRDs7a0RBVzVDLG1CQUFtQjtjQXpCL0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUJiO2FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgIGNvbnN0IGN1c3RvbUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gbmV3IERhdGVQYXJzZXIoY3VzdG9tRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQoaXRlbS5kYXRlKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLWhvdXItdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgZm91ciBjb2x1bW4gaG91clwiPlxuPHRoZWFkICpuZ0lmPVwic2VydmljZS5jb25maWcubW9kZSAhPSAxXCI+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjRcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySG91clZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuXG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5kYXRlLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLkhvdXIsIG5ldyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UoRGF0ZVByZWNpc2lvbi5EYXRlLCA2LCA0KSk7XG4gICAgfVxufVxuIl19