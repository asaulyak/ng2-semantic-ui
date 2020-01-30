import { __extends } from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { DateUtil, DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
import * as i0 from "@angular/core";
import * as i1 from "../components/calendar-view-title";
import * as i2 from "@angular/common";
import * as i3 from "../directives/calendar-item";
function SuiCalendarDateView_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var day_r163 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(day_r163);
} }
function SuiCalendarDateView_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r168 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 5);
    i0.ɵɵlistener("click", function SuiCalendarDateView_tr_9_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r168); var item_r166 = ctx.$implicit; var ctx_r167 = i0.ɵɵnextContext(2); return ctx_r167.setDate(item_r166); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r166 = ctx.$implicit;
    i0.ɵɵproperty("calendarItem", item_r166);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r166.humanReadable, " ");
} }
function SuiCalendarDateView_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, SuiCalendarDateView_tr_9_td_1_Template, 2, 2, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r164 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r164);
} }
var CalendarRangeDateService = /** @class */ (function (_super) {
    __extends(CalendarRangeDateService, _super);
    function CalendarRangeDateService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeDateService.prototype.calcStart = function (start) {
        var monthStart = DateUtil.startOf(DatePrecision.Month, DateUtil.clone(start));
        monthStart.setDate((1 - monthStart.getDay() + this.service.firstDayOfWeek - 7) % 7);
        return monthStart;
    };
    CalendarRangeDateService.prototype.configureItem = function (item, baseDate) {
        item.humanReadable = item.date.getDate().toString();
        item.isOutsideRange = item.date.getMonth() !== baseDate.getMonth();
        item.isSelectable = item.isDisabled;
    };
    return CalendarRangeDateService;
}(CalendarRangeService));
export { CalendarRangeDateService };
var SuiCalendarDateView = /** @class */ (function (_super) {
    __extends(SuiCalendarDateView, _super);
    function SuiCalendarDateView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Date, new CalendarRangeDateService(DatePrecision.Month, 6, 7)) || this;
    }
    Object.defineProperty(SuiCalendarDateView.prototype, "days", {
        get: function () {
            var _this = this;
            var days = this.service.localeValues.weekdaysNarrow;
            return days.map(function (d, i) { return days[(i + _this.service.firstDayOfWeek) % days.length]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarDateView.prototype, "date", {
        get: function () {
            return new DateParser(this.service.localeValues.formats.month, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarDateView.ɵfac = function SuiCalendarDateView_Factory(t) { return new (t || SuiCalendarDateView)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    SuiCalendarDateView.ɵcmp = i0.ɵɵdefineComponent({ type: SuiCalendarDateView, selectors: [["sui-calendar-date-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 4, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "seven", "column", "day"], ["colspan", "7"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarDateView_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementStart(1, "thead");
            i0.ɵɵelementStart(2, "tr");
            i0.ɵɵelementStart(3, "th", 1);
            i0.ɵɵelementStart(4, "sui-calendar-view-title", 2);
            i0.ɵɵlistener("zoomOut", function SuiCalendarDateView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "tr");
            i0.ɵɵtemplate(7, SuiCalendarDateView_th_7_Template, 2, 1, "th", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "tbody");
            i0.ɵɵtemplate(9, SuiCalendarDateView_tr_9_Template, 2, 1, "tr", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ranges", ctx.ranges);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.date, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.days);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
        } }, directives: [i1.SuiCalendarViewTitle, i2.NgForOf, i3.SuiCalendarItem], encapsulation: 2 });
    return SuiCalendarDateView;
}(CalendarView));
export { SuiCalendarDateView };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarDateView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-date-view",
                template: "\n<table class=\"ui celled center aligned unstackable table seven column day\">\n<thead>\n    <tr>\n        <th colspan=\"7\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n    <tr>\n        <th *ngFor=\"let day of days\">{{ day }}</th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL2RhdGUtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7SUE2QjVDLDBCQUE2QjtJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULDhCQUFTOzs7O0lBS3RDLDZCQUc0QjtJQUF4Qix1T0FBdUI7SUFBQyxZQUM1QjtJQUFBLGlCQUFLOzs7SUFGRCx3Q0FBcUI7SUFDRyxlQUM1QjtJQUQ0Qix1REFDNUI7OztJQUxKLDBCQUNJO0lBQUEsdUVBRzRCO0lBRWhDLGlCQUFLOzs7SUFKRyxlQUEwQjtJQUExQixvQ0FBMEI7O0FBakN0QztJQUE4Qyw0Q0FBb0I7SUFBbEU7O0lBWUEsQ0FBQztJQVhVLDRDQUFTLEdBQWhCLFVBQWlCLEtBQVU7UUFDdkIsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRixPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRU0sZ0RBQWEsR0FBcEIsVUFBcUIsSUFBaUIsRUFBRSxRQUFhO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QyxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBOEMsb0JBQW9CLEdBWWpFOztBQUVEO0lBNEJ5Qyx1Q0FBWTtJQVVqRCw2QkFBWSxRQUFrQjtlQUMxQixrQkFBTSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksd0JBQXdCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQVhELHNCQUFXLHFDQUFJO2FBQWY7WUFBQSxpQkFHQztZQUZHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQztZQUN0RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUM7UUFDckYsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxxQ0FBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2SCxDQUFDOzs7T0FBQTswRkFSUSxtQkFBbUI7NERBQW5CLG1CQUFtQjtZQXpCaEMsZ0NBQ0E7WUFBQSw2QkFDSTtZQUFBLDBCQUNJO1lBQUEsNkJBQ0k7WUFBQSxrREFDSTtZQUR1QywySEFBVyxhQUFTLElBQUM7WUFDNUQsWUFDSjtZQUFBLGlCQUEwQjtZQUM5QixpQkFBSztZQUNULGlCQUFLO1lBQ0wsMEJBQ0k7WUFBQSxrRUFBNkI7WUFDakMsaUJBQUs7WUFDVCxpQkFBUTtZQUNSLDZCQUNJO1lBQUEsa0VBQ0k7WUFNUixpQkFBUTtZQUNSLGlCQUFROztZQWxCNkIsZUFBaUI7WUFBakIsbUNBQWlCO1lBQ3RDLGVBQ0o7WUFESSx5Q0FDSjtZQUlBLGVBQXdCO1lBQXhCLGtDQUF3QjtZQUk1QixlQUFpRDtZQUFqRCx5REFBaUQ7OzhCQXRDekQ7Q0E4REMsQUF6Q0QsQ0E0QnlDLFlBQVksR0FhcEQ7U0FiWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQTVCL0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSx5cUJBd0JiO2FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyVmlldywgQ2FsZW5kYXJWaWV3VHlwZSB9IGZyb20gXCIuL2NhbGVuZGFyLXZpZXdcIjtcbmltcG9ydCB7IENhbGVuZGFyUmFuZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NhbGVuZGFyLXJhbmdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSYW5nZURhdGVTZXJ2aWNlIGV4dGVuZHMgQ2FsZW5kYXJSYW5nZVNlcnZpY2Uge1xuICAgIHB1YmxpYyBjYWxjU3RhcnQoc3RhcnQ6RGF0ZSk6RGF0ZSB7XG4gICAgICAgIGNvbnN0IG1vbnRoU3RhcnQgPSBEYXRlVXRpbC5zdGFydE9mKERhdGVQcmVjaXNpb24uTW9udGgsIERhdGVVdGlsLmNsb25lKHN0YXJ0KSk7XG4gICAgICAgIG1vbnRoU3RhcnQuc2V0RGF0ZSgoMSAtIG1vbnRoU3RhcnQuZ2V0RGF5KCkgKyB0aGlzLnNlcnZpY2UuZmlyc3REYXlPZldlZWsgLSA3KSAlIDcpO1xuICAgICAgICByZXR1cm4gbW9udGhTdGFydDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlSXRlbShpdGVtOkNhbGVuZGFySXRlbSwgYmFzZURhdGU6RGF0ZSk6dm9pZCB7XG4gICAgICAgIGl0ZW0uaHVtYW5SZWFkYWJsZSA9IGl0ZW0uZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGl0ZW0uZGF0ZS5nZXRNb250aCgpICE9PSBiYXNlRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBpdGVtLmlzU2VsZWN0YWJsZSA9IGl0ZW0uaXNEaXNhYmxlZDtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jYWxlbmRhci1kYXRlLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIHNldmVuIGNvbHVtbiBkYXlcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiN1wiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5c1wiPnt7IGRheSB9fTwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFyRGF0ZVZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuICAgIHB1YmxpYyBnZXQgZGF5cygpOnN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMud2Vla2RheXNOYXJyb3c7XG4gICAgICAgIHJldHVybiBkYXlzLm1hcCgoZCwgaSkgPT4gZGF5c1soaSArIHRoaXMuc2VydmljZS5maXJzdERheU9mV2VlaykgJSBkYXlzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0ZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMubW9udGgsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuRGF0ZSwgbmV3IENhbGVuZGFyUmFuZ2VEYXRlU2VydmljZShEYXRlUHJlY2lzaW9uLk1vbnRoLCA2LCA3KSk7XG4gICAgfVxufVxuIl19