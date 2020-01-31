import { Component, Renderer2 } from "@angular/core";
import { DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
import * as i0 from "@angular/core";
import * as i1 from "../components/calendar-view-title";
import * as i2 from "@angular/common";
import * as i3 from "../directives/calendar-item";
function SuiCalendarMonthView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 5);
    i0.ɵɵlistener("click", function SuiCalendarMonthView_tr_7_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r72); const item_r70 = ctx.$implicit; const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.setDate(item_r70); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r70 = ctx.$implicit;
    i0.ɵɵproperty("calendarItem", item_r70);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r70.humanReadable, " ");
} }
function SuiCalendarMonthView_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, SuiCalendarMonthView_tr_7_td_1_Template, 2, 2, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r68 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r68);
} }
export class CalendarRangeMonthService extends CalendarRangeService {
    configureItem(item, baseDate) {
        item.humanReadable = this.service.localeValues.monthsShort[item.date.getMonth()];
        item.isOutsideRange = false;
    }
}
export class SuiCalendarMonthView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Month, new CalendarRangeMonthService(DatePrecision.Year, 4, 3));
    }
    get year() {
        return new DateParser(this.service.localeValues.formats.year, this.service.localeValues).format(this.currentDate);
    }
}
SuiCalendarMonthView.ɵfac = function SuiCalendarMonthView_Factory(t) { return new (t || SuiCalendarMonthView)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
SuiCalendarMonthView.ɵcmp = i0.ɵɵdefineComponent({ type: SuiCalendarMonthView, selectors: [["sui-calendar-month-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "month"], ["colspan", "3"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarMonthView_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementStart(1, "thead");
        i0.ɵɵelementStart(2, "tr");
        i0.ɵɵelementStart(3, "th", 1);
        i0.ɵɵelementStart(4, "sui-calendar-view-title", 2);
        i0.ɵɵlistener("zoomOut", function SuiCalendarMonthView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "tbody");
        i0.ɵɵtemplate(7, SuiCalendarMonthView_tr_7_Template, 2, 1, "tr", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ranges", ctx.ranges);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.year, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
    } }, directives: [i1.SuiCalendarViewTitle, i2.NgForOf, i3.SuiCalendarItem], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarMonthView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-month-view",
                template: `
<table class="ui celled center aligned unstackable table three column month">
<thead>
    <tr>
        <th colspan="3">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ year }}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9tb250aC12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0lBd0I1Qyw2QkFHNEI7SUFBeEIsdU9BQXVCO0lBQUMsWUFDNUI7SUFBQSxpQkFBSzs7O0lBRkQsdUNBQXFCO0lBQ0csZUFDNUI7SUFENEIsc0RBQzVCOzs7SUFMSiwwQkFDSTtJQUFBLHdFQUc0QjtJQUVoQyxpQkFBSzs7O0lBSkcsZUFBMEI7SUFBMUIsbUNBQTBCOztBQXZCdEMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG9CQUFvQjtJQUN4RCxhQUFhLENBQUMsSUFBaUIsRUFBRSxRQUFhO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0NBQ0o7QUEyQkQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFlBQVk7SUFLbEQsWUFBWSxRQUFrQjtRQUMxQixLQUFLLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQU5ELElBQVcsSUFBSTtRQUNYLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEgsQ0FBQzs7d0ZBSFEsb0JBQW9CO3lEQUFwQixvQkFBb0I7UUF0QmpDLGdDQUNBO1FBQUEsNkJBQ0k7UUFBQSwwQkFDSTtRQUFBLDZCQUNJO1FBQUEsa0RBQ0k7UUFEdUMsNEhBQVcsYUFBUyxJQUFDO1FBQzVELFlBQ0o7UUFBQSxpQkFBMEI7UUFDOUIsaUJBQUs7UUFDVCxpQkFBSztRQUNULGlCQUFRO1FBQ1IsNkJBQ0k7UUFBQSxtRUFDSTtRQU1SLGlCQUFRO1FBQ1IsaUJBQVE7O1FBZjZCLGVBQWlCO1FBQWpCLG1DQUFpQjtRQUN0QyxlQUNKO1FBREkseUNBQ0o7UUFLSixlQUFpRDtRQUFqRCx5REFBaUQ7O2tEQVc1QyxvQkFBb0I7Y0F6QmhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFCYjthQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZU1vbnRoU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMubW9udGhzU2hvcnRbaXRlbS5kYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItbW9udGgtdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgdGhyZWUgY29sdW1uIG1vbnRoXCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IHllYXIgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyTW9udGhWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IHllYXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnllYXIsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuTW9udGgsIG5ldyBDYWxlbmRhclJhbmdlTW9udGhTZXJ2aWNlKERhdGVQcmVjaXNpb24uWWVhciwgNCwgMykpO1xuICAgIH1cbn1cbiJdfQ==