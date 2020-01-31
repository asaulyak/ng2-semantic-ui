import { __extends } from "tslib";
import { Component, Renderer2 } from "@angular/core";
import { Util, DateUtil, DatePrecision } from "../../../misc/util/internal";
import { CalendarView, CalendarViewType } from "./calendar-view";
import { CalendarMode } from "../services/calendar.service";
import { CalendarRangeService } from "../services/calendar-range.service";
import { DateParser } from "../classes/date-parser";
import * as i0 from "@angular/core";
import * as i1 from "../components/calendar-view-title";
import * as i2 from "@angular/common";
import * as i3 from "../directives/calendar-item";
function SuiCalendarMinuteView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r183 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 5);
    i0.ɵɵlistener("click", function SuiCalendarMinuteView_tr_7_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r183); var item_r181 = ctx.$implicit; var ctx_r182 = i0.ɵɵnextContext(2); return ctx_r182.setDate(item_r181); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r181 = ctx.$implicit;
    i0.ɵɵproperty("calendarItem", item_r181);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r181.humanReadable, " ");
} }
function SuiCalendarMinuteView_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, SuiCalendarMinuteView_tr_7_td_1_Template, 2, 2, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r179 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r179);
} }
var CalendarRangeMinuteService = /** @class */ (function (_super) {
    __extends(CalendarRangeMinuteService, _super);
    function CalendarRangeMinuteService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeMinuteService.prototype.calcStart = function (start) {
        return DateUtil.startOf(DatePrecision.Hour, DateUtil.clone(start), true);
    };
    CalendarRangeMinuteService.prototype.calcDates = function (start) {
        return Util.Array
            .range(this.length)
            .map(function (i) { return DateUtil.add(DatePrecision.Minute, DateUtil.clone(start), i * 5); });
    };
    CalendarRangeMinuteService.prototype.configureItem = function (item, baseDate) {
        item.humanReadable = new DateParser(this.service.localeValues.formats.time, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    };
    return CalendarRangeMinuteService;
}(CalendarRangeService));
export { CalendarRangeMinuteService };
var SuiCalendarMinuteView = /** @class */ (function (_super) {
    __extends(SuiCalendarMinuteView, _super);
    function SuiCalendarMinuteView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Minute, new CalendarRangeMinuteService(DatePrecision.Hour, 4, 3)) || this;
    }
    Object.defineProperty(SuiCalendarMinuteView.prototype, "date", {
        get: function () {
            if (this.service.config.mode !== CalendarMode.TimeOnly) {
                // Set minutes and seconds to 0
                var dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
                return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
            }
            else {
                // Set minutes and seconds to 0
                var timeFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
                return new DateParser(timeFormat, this.service.localeValues).format(this.currentDate);
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarMinuteView.ɵfac = function SuiCalendarMinuteView_Factory(t) { return new (t || SuiCalendarMinuteView)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    SuiCalendarMinuteView.ɵcmp = i0.ɵɵdefineComponent({ type: SuiCalendarMinuteView, selectors: [["sui-calendar-minute-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "minute"], ["colspan", "4"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarMinuteView_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementStart(1, "thead");
            i0.ɵɵelementStart(2, "tr");
            i0.ɵɵelementStart(3, "th", 1);
            i0.ɵɵelementStart(4, "sui-calendar-view-title", 2);
            i0.ɵɵlistener("zoomOut", function SuiCalendarMinuteView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "tbody");
            i0.ɵɵtemplate(7, SuiCalendarMinuteView_tr_7_Template, 2, 1, "tr", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ranges", ctx.ranges);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.date, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
        } }, directives: [i1.SuiCalendarViewTitle, i2.NgForOf, i3.SuiCalendarItem], encapsulation: 2 });
    return SuiCalendarMinuteView;
}(CalendarView));
export { SuiCalendarMinuteView };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarMinuteView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-minute-view",
                template: "\n<table class=\"ui celled center aligned unstackable table three column minute\">\n<thead>\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWludXRlLXZpZXcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvdmlld3MvbWludXRlLXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0lBa0M1Qyw2QkFHNEI7SUFBeEIseU9BQXVCO0lBQUMsWUFDNUI7SUFBQSxpQkFBSzs7O0lBRkQsd0NBQXFCO0lBQ0csZUFDNUI7SUFENEIsdURBQzVCOzs7SUFMSiwwQkFDSTtJQUFBLHlFQUc0QjtJQUVoQyxpQkFBSzs7O0lBSkcsZUFBMEI7SUFBMUIsb0NBQTBCOztBQWpDdEM7SUFBZ0QsOENBQW9CO0lBQXBFOztJQWVBLENBQUM7SUFkVSw4Q0FBUyxHQUFoQixVQUFpQixLQUFVO1FBQ3ZCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVNLDhDQUFTLEdBQWhCLFVBQWlCLEtBQVU7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxrREFBYSxHQUFwQixVQUFxQixJQUFpQixFQUFFLFFBQWE7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6SCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBZ0Qsb0JBQW9CLEdBZW5FOztBQUVEO0lBeUIyQyx5Q0FBWTtJQWFuRCwrQkFBWSxRQUFrQjtlQUMxQixrQkFBTSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLElBQUksMEJBQTBCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQWRELHNCQUFXLHVDQUFJO2FBQWY7WUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsUUFBUSxFQUFFO2dCQUNwRCwrQkFBK0I7Z0JBQy9CLElBQU0sY0FBYyxHQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzdGO2lCQUFNO2dCQUNILCtCQUErQjtnQkFDL0IsSUFBTSxVQUFVLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RixPQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekY7UUFDTCxDQUFDOzs7T0FBQTs4RkFYUSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQXRCbEMsZ0NBQ0E7WUFBQSw2QkFDSTtZQUFBLDBCQUNJO1lBQUEsNkJBQ0k7WUFBQSxrREFDSTtZQUR1Qyw2SEFBVyxhQUFTLElBQUM7WUFDNUQsWUFDSjtZQUFBLGlCQUEwQjtZQUM5QixpQkFBSztZQUNULGlCQUFLO1lBQ1QsaUJBQVE7WUFDUiw2QkFDSTtZQUFBLG9FQUNJO1lBTVIsaUJBQVE7WUFDUixpQkFBUTs7WUFmNkIsZUFBaUI7WUFBakIsbUNBQWlCO1lBQ3RDLGVBQ0o7WUFESSx5Q0FDSjtZQUtKLGVBQWlEO1lBQWpELHlEQUFpRDs7Z0NBdkN6RDtDQWtFQyxBQXpDRCxDQXlCMkMsWUFBWSxHQWdCdEQ7U0FoQlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0F6QmpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsZ21CQXFCYjthQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXRpbCwgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhclZpZXcsIENhbGVuZGFyVmlld1R5cGUgfSBmcm9tIFwiLi9jYWxlbmRhci12aWV3XCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0gfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9jYWxlbmRhci1pdGVtXCI7XG5pbXBvcnQgeyBDYWxlbmRhck1vZGUgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlTWludXRlU2VydmljZSBleHRlbmRzIENhbGVuZGFyUmFuZ2VTZXJ2aWNlIHtcbiAgICBwdWJsaWMgY2FsY1N0YXJ0KHN0YXJ0OkRhdGUpOkRhdGUge1xuICAgICAgICByZXR1cm4gRGF0ZVV0aWwuc3RhcnRPZihEYXRlUHJlY2lzaW9uLkhvdXIsIERhdGVVdGlsLmNsb25lKHN0YXJ0KSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGNEYXRlcyhzdGFydDpEYXRlKTpEYXRlW10ge1xuICAgICAgICByZXR1cm4gVXRpbC5BcnJheVxuICAgICAgICAgICAgLnJhbmdlKHRoaXMubGVuZ3RoKVxuICAgICAgICAgICAgLm1hcChpID0+IERhdGVVdGlsLmFkZChEYXRlUHJlY2lzaW9uLk1pbnV0ZSwgRGF0ZVV0aWwuY2xvbmUoc3RhcnQpLCBpICogNSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25maWd1cmVJdGVtKGl0ZW06Q2FsZW5kYXJJdGVtLCBiYXNlRGF0ZTpEYXRlKTp2b2lkIHtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gbmV3IERhdGVQYXJzZXIodGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcy5mb3JtYXRzLnRpbWUsIHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMpLmZvcm1hdChpdGVtLmRhdGUpO1xuICAgICAgICBpdGVtLmlzT3V0c2lkZVJhbmdlID0gZmFsc2U7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2FsZW5kYXItbWludXRlLXZpZXdcIixcbiAgICB0ZW1wbGF0ZTogYFxuPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIGNlbnRlciBhbGlnbmVkIHVuc3RhY2thYmxlIHRhYmxlIHRocmVlIGNvbHVtbiBtaW51dGVcIj5cbjx0aGVhZD5cbiAgICA8dHI+XG4gICAgICAgIDx0aCBjb2xzcGFuPVwiNFwiPlxuICAgICAgICAgICAgPHN1aS1jYWxlbmRhci12aWV3LXRpdGxlIFtyYW5nZXNdPVwicmFuZ2VzXCIgKHpvb21PdXQpPVwiem9vbU91dCgpXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0ZSB9fVxuICAgICAgICAgICAgPC9zdWktY2FsZW5kYXItdmlldy10aXRsZT5cbiAgICAgICAgPC90aD5cbiAgICA8L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbiAgICA8dHIgKm5nRm9yPVwibGV0IGdyb3VwIG9mIHJhbmdlcy5jdXJyZW50Lmdyb3VwZWRJdGVtc1wiPlxuICAgICAgICA8dGQgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwXCJcbiAgICAgICAgICAgIFtjYWxlbmRhckl0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0RGF0ZShpdGVtKVwiPnt7IGl0ZW0uaHVtYW5SZWFkYWJsZSB9fVxuICAgICAgICA8L3RkPlxuICAgIDwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2FsZW5kYXJNaW51dGVWaWV3IGV4dGVuZHMgQ2FsZW5kYXJWaWV3IHtcbiAgICBwdWJsaWMgZ2V0IGRhdGUoKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmNvbmZpZy5tb2RlICE9PSBDYWxlbmRhck1vZGUuVGltZU9ubHkpIHtcbiAgICAgICAgICAgIC8vIFNldCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIDBcbiAgICAgICAgICAgIGNvbnN0IGRhdGVUaW1lRm9ybWF0OnN0cmluZyA9IHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5kYXRldGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcihkYXRlVGltZUZvcm1hdCwgdGhpcy5zZXJ2aWNlLmxvY2FsZVZhbHVlcykuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gMFxuICAgICAgICAgICAgY29uc3QgdGltZUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZVBhcnNlcih0aW1lRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIpIHtcbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIENhbGVuZGFyVmlld1R5cGUuTWludXRlLCBuZXcgQ2FsZW5kYXJSYW5nZU1pbnV0ZVNlcnZpY2UoRGF0ZVByZWNpc2lvbi5Ib3VyLCA0LCAzKSk7XG4gICAgfVxufVxuIl19