import { __extends } from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { Util, DateUtil, DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as i0 from "@angular/core";
import * as i1 from "../components/calendar-view-title";
import * as i2 from "@angular/common";
import * as i3 from "../directives/calendar-item";
function SuiCalendarYearView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r195 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 5);
    i0.ɵɵlistener("click", function SuiCalendarYearView_tr_7_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r195); var item_r193 = ctx.$implicit; var ctx_r194 = i0.ɵɵnextContext(2); return ctx_r194.setDate(item_r193); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r193 = ctx.$implicit;
    i0.ɵɵproperty("calendarItem", item_r193);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r193.humanReadable, " ");
} }
function SuiCalendarYearView_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, SuiCalendarYearView_tr_7_td_1_Template, 2, 2, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r191 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r191);
} }
var CalendarRangeYearService = /** @class */ (function (_super) {
    __extends(CalendarRangeYearService, _super);
    function CalendarRangeYearService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeYearService.prototype.configureItem = function (item, baseDate) {
        item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
        item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
    };
    return CalendarRangeYearService;
}(CalendarRangeService));
export { CalendarRangeYearService };
var SuiCalendarYearView = /** @class */ (function (_super) {
    __extends(SuiCalendarYearView, _super);
    function SuiCalendarYearView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarYearView.prototype, "decadeStart", {
        get: function () {
            return DateUtil
                .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
                .getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarYearView.prototype.pad = function (year) {
        return Util.String.padLeft(year.toString(), 4, "0");
    };
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
    return SuiCalendarYearView;
}(CalendarView));
export { SuiCalendarYearView };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarYearView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-year-view",
                template: "\n<table class=\"ui celled center aligned unstackable table three column year\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL3llYXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7O0lBd0JsRSw2QkFHNEI7SUFBeEIsdU9BQXVCO0lBQUMsWUFDNUI7SUFBQSxpQkFBSzs7O0lBRkQsd0NBQXFCO0lBQ0csZUFDNUI7SUFENEIsdURBQzVCOzs7SUFMSiwwQkFDSTtJQUFBLHVFQUc0QjtJQUVoQyxpQkFBSzs7O0lBSkcsZUFBMEI7SUFBMUIsb0NBQTBCOztBQXZCdEM7SUFBOEMsNENBQW9CO0lBQWxFOztJQUtBLENBQUM7SUFKVSxnREFBYSxHQUFwQixVQUFxQixJQUFpQixFQUFFLFFBQWE7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakcsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLG9CQUFvQixHQUtqRTs7QUFFRDtJQXlCeUMsdUNBQVk7SUFPakQsNkJBQVksUUFBa0I7ZUFDMUIsa0JBQU0sUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFSRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNJLE9BQU8sUUFBUTtpQkFDVixPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3ZFLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBTU0saUNBQUcsR0FBVixVQUFXLElBQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7MEZBYlEsbUJBQW1COzREQUFuQixtQkFBbUI7WUF0QmhDLGdDQUNBO1lBQUEsNkJBQ0k7WUFBQSwwQkFDSTtZQUFBLDZCQUNJO1lBQUEsa0RBQ0k7WUFEdUMsMkhBQVcsYUFBUyxJQUFDO1lBQzVELFlBQ0o7WUFBQSxpQkFBMEI7WUFDOUIsaUJBQUs7WUFDVCxpQkFBSztZQUNULGlCQUFRO1lBQ1IsNkJBQ0k7WUFBQSxrRUFDSTtZQU1SLGlCQUFRO1lBQ1IsaUJBQVE7O1lBZjZCLGVBQWlCO1lBQWpCLG1DQUFpQjtZQUN0QyxlQUNKO1lBREksK0ZBQ0o7WUFLSixlQUFpRDtZQUFqRCx5REFBaUQ7OzhCQTNCekQ7Q0FvREMsQUF2Q0QsQ0F5QnlDLFlBQVksR0FjcEQ7U0FkWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQXpCL0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSx3b0JBcUJiO2FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUmFuZ2VZZWFyU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IFV0aWwuU3RyaW5nLnBhZExlZnQoaXRlbS5kYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSwgNCwgXCIwXCIpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gaXRlbS5kYXRlLmdldEZ1bGxZZWFyKCkgPj0gdGhpcy5jYWxjU3RhcnQoYmFzZURhdGUpLmdldEZ1bGxZZWFyKCkgKyAxMDtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci15ZWFyLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIHRocmVlIGNvbHVtbiB5ZWFyXCI+XG48dGhlYWQ+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IHBhZChkZWNhZGVTdGFydCkgfX0gLSB7eyBwYWQoZGVjYWRlU3RhcnQgKyAxMCkgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyWWVhclZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgZGVjYWRlU3RhcnQoKTpudW1iZXIge1xuICAgICAgICByZXR1cm4gRGF0ZVV0aWxcbiAgICAgICAgICAgIC5zdGFydE9mKERhdGVQcmVjaXNpb24uRGVjYWRlLCBEYXRlVXRpbC5jbG9uZSh0aGlzLnNlcnZpY2UuY3VycmVudERhdGUpKVxuICAgICAgICAgICAgLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLlllYXIsIG5ldyBDYWxlbmRhclJhbmdlWWVhclNlcnZpY2UoRGF0ZVByZWNpc2lvbi5EZWNhZGUsIDQsIDMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGFkKHllYXI6bnVtYmVyKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gVXRpbC5TdHJpbmcucGFkTGVmdCh5ZWFyLnRvU3RyaW5nKCksIDQsIFwiMFwiKTtcbiAgICB9XG59XG4iXX0=