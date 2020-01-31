import { Component, Renderer2 } from "@angular/core";
import { Util, DateUtil, DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as i0 from "@angular/core";
import * as i1 from "../components/calendar-view-title";
import * as i2 from "@angular/common";
import * as i3 from "../directives/calendar-item";
function SuiCalendarYearView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 5);
    i0.ɵɵlistener("click", function SuiCalendarYearView_tr_7_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r78); const item_r76 = ctx.$implicit; const ctx_r77 = i0.ɵɵnextContext(2); return ctx_r77.setDate(item_r76); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    i0.ɵɵproperty("calendarItem", item_r76);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r76.humanReadable, " ");
} }
function SuiCalendarYearView_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, SuiCalendarYearView_tr_7_td_1_Template, 2, 2, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r74 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r74);
} }
export class CalendarRangeYearService extends CalendarRangeService {
    configureItem(item, baseDate) {
        item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
        item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
    }
}
export class SuiCalendarYearView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3));
    }
    get decadeStart() {
        return DateUtil
            .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
            .getFullYear();
    }
    pad(year) {
        return Util.String.padLeft(year.toString(), 4, "0");
    }
}
SuiCalendarYearView.ɵfac = function SuiCalendarYearView_Factory(t) { return new (t || SuiCalendarYearView)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
SuiCalendarYearView.ɵcmp = i0.ɵɵdefineComponent({ type: SuiCalendarYearView, selectors: [["sui-calendar-year-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 4, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "year"], ["colspan", "3"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarYearView_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementStart(1, "thead");
        i0.ɵɵelementStart(2, "tr");
        i0.ɵɵelementStart(3, "th", 1);
        i0.ɵɵelementStart(4, "sui-calendar-view-title", 2);
        i0.ɵɵlistener("zoomOut", function SuiCalendarYearView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "tbody");
        i0.ɵɵtemplate(7, SuiCalendarYearView_tr_7_Template, 2, 1, "tr", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ranges", ctx.ranges);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate2(" ", ctx.pad(ctx.decadeStart), " - ", ctx.pad(ctx.decadeStart + 10), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
    } }, directives: [i1.SuiCalendarViewTitle, i2.NgForOf, i3.SuiCalendarItem], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarYearView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-year-view",
                template: `
<table class="ui celled center aligned unstackable table three column year">
<thead>
    <tr>
        <th colspan="3">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL3llYXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7SUF3QmxFLDZCQUc0QjtJQUF4QixzT0FBdUI7SUFBQyxZQUM1QjtJQUFBLGlCQUFLOzs7SUFGRCx1Q0FBcUI7SUFDRyxlQUM1QjtJQUQ0QixzREFDNUI7OztJQUxKLDBCQUNJO0lBQUEsdUVBRzRCO0lBRWhDLGlCQUFLOzs7SUFKRyxlQUEwQjtJQUExQixtQ0FBMEI7O0FBdkJ0QyxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsb0JBQW9CO0lBQ3ZELGFBQWEsQ0FBQyxJQUFpQixFQUFFLFFBQWE7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakcsQ0FBQztDQUNKO0FBMkJELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxZQUFZO0lBT2pELFlBQVksUUFBa0I7UUFDMUIsS0FBSyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFSRCxJQUFXLFdBQVc7UUFDbEIsT0FBTyxRQUFRO2FBQ1YsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3ZFLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFNTSxHQUFHLENBQUMsSUFBVztRQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7c0ZBYlEsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUF0QmhDLGdDQUNBO1FBQUEsNkJBQ0k7UUFBQSwwQkFDSTtRQUFBLDZCQUNJO1FBQUEsa0RBQ0k7UUFEdUMsMkhBQVcsYUFBUyxJQUFDO1FBQzVELFlBQ0o7UUFBQSxpQkFBMEI7UUFDOUIsaUJBQUs7UUFDVCxpQkFBSztRQUNULGlCQUFRO1FBQ1IsNkJBQ0k7UUFBQSxrRUFDSTtRQU1SLGlCQUFRO1FBQ1IsaUJBQVE7O1FBZjZCLGVBQWlCO1FBQWpCLG1DQUFpQjtRQUN0QyxlQUNKO1FBREksK0ZBQ0o7UUFLSixlQUFpRDtRQUFqRCx5REFBaUQ7O2tEQVc1QyxtQkFBbUI7Y0F6Qi9CLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFCYjthQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlWWVhclNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICBpdGVtLmh1bWFuUmVhZGFibGUgPSBVdGlsLlN0cmluZy5wYWRMZWZ0KGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksIDQsIFwiMFwiKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGl0ZW0uZGF0ZS5nZXRGdWxsWWVhcigpID49IHRoaXMuY2FsY1N0YXJ0KGJhc2VEYXRlKS5nZXRGdWxsWWVhcigpICsgMTA7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXIteWVhci12aWV3XCIsXG4gICAgdGVtcGxhdGU6IGBcbjx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCBjZW50ZXIgYWxpZ25lZCB1bnN0YWNrYWJsZSB0YWJsZSB0aHJlZSBjb2x1bW4geWVhclwiPlxuPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+XG4gICAgICAgICAgICA8c3VpLWNhbGVuZGFyLXZpZXctdGl0bGUgW3Jhbmdlc109XCJyYW5nZXNcIiAoem9vbU91dCk9XCJ6b29tT3V0KClcIj5cbiAgICAgICAgICAgICAgICB7eyBwYWQoZGVjYWRlU3RhcnQpIH19IC0ge3sgcGFkKGRlY2FkZVN0YXJ0ICsgMTApIH19XG4gICAgICAgICAgICA8L3N1aS1jYWxlbmRhci12aWV3LXRpdGxlPlxuICAgICAgICA8L3RoPlxuICAgIDwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgcmFuZ2VzLmN1cnJlbnQuZ3JvdXBlZEl0ZW1zXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBcIlxuICAgICAgICAgICAgW2NhbGVuZGFySXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZXREYXRlKGl0ZW0pXCI+e3sgaXRlbS5odW1hblJlYWRhYmxlIH19XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhclllYXJWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRlY2FkZVN0YXJ0KCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIERhdGVVdGlsXG4gICAgICAgICAgICAuc3RhcnRPZihEYXRlUHJlY2lzaW9uLkRlY2FkZSwgRGF0ZVV0aWwuY2xvbmUodGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlKSlcbiAgICAgICAgICAgIC5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMikge1xuICAgICAgICBzdXBlcihyZW5kZXJlciwgQ2FsZW5kYXJWaWV3VHlwZS5ZZWFyLCBuZXcgQ2FsZW5kYXJSYW5nZVllYXJTZXJ2aWNlKERhdGVQcmVjaXNpb24uRGVjYWRlLCA0LCAzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhZCh5ZWFyOm51bWJlcik6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuU3RyaW5nLnBhZExlZnQoeWVhci50b1N0cmluZygpLCA0LCBcIjBcIik7XG4gICAgfVxufVxuIl19