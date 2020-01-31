import { __extends } from "tslib";
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
    var _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "thead");
    i0.ɵɵelementStart(1, "tr");
    i0.ɵɵelementStart(2, "th", 3);
    i0.ɵɵelementStart(3, "sui-calendar-view-title", 4);
    i0.ɵɵlistener("zoomOut", function SuiCalendarHourView_thead_1_Template_sui_calendar_view_title_zoomOut_3_listener($event) { i0.ɵɵrestoreView(_r172); var ctx_r171 = i0.ɵɵnextContext(); return ctx_r171.zoomOut(); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r169 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ranges", ctx_r169.ranges);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r169.date, " ");
} }
function SuiCalendarHourView_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r177 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵlistener("click", function SuiCalendarHourView_tr_3_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r177); var item_r175 = ctx.$implicit; var ctx_r176 = i0.ɵɵnextContext(2); return ctx_r176.setDate(item_r175); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r175 = ctx.$implicit;
    i0.ɵɵproperty("calendarItem", item_r175);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r175.humanReadable, " ");
} }
function SuiCalendarHourView_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, SuiCalendarHourView_tr_3_td_1_Template, 2, 2, "td", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var group_r173 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r173);
} }
var CalendarRangeHourService = /** @class */ (function (_super) {
    __extends(CalendarRangeHourService, _super);
    function CalendarRangeHourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarRangeHourService.prototype.configureItem = function (item, baseDate) {
        // Set minutes and seconds to 0
        var customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
        item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    };
    return CalendarRangeHourService;
}(CalendarRangeService));
export { CalendarRangeHourService };
var SuiCalendarHourView = /** @class */ (function (_super) {
    __extends(SuiCalendarHourView, _super);
    function SuiCalendarHourView(renderer) {
        return _super.call(this, renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4)) || this;
    }
    Object.defineProperty(SuiCalendarHourView.prototype, "date", {
        get: function () {
            return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
        },
        enumerable: true,
        configurable: true
    });
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
    return SuiCalendarHourView;
}(CalendarView));
export { SuiCalendarHourView };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarHourView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-hour-view",
                template: "\n<table class=\"ui celled center aligned unstackable table four column hour\">\n<thead *ngIf=\"service.config.mode != 1\">\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
            }]
    }], function () { return [{ type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci12aWV3LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL3ZpZXdzL2hvdXItdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7SUFlcEQsNkJBQ0k7SUFBQSwwQkFDSTtJQUFBLDZCQUNJO0lBQUEsa0RBQ0k7SUFEdUMscU5BQXFCO0lBQzVELFlBQ0o7SUFBQSxpQkFBMEI7SUFDOUIsaUJBQUs7SUFDVCxpQkFBSztJQUNULGlCQUFROzs7SUFMNkIsZUFBaUI7SUFBakIsd0NBQWlCO0lBQ3RDLGVBQ0o7SUFESSw4Q0FDSjs7OztJQU1KLDZCQUc0QjtJQUF4Qix1T0FBdUI7SUFBQyxZQUM1QjtJQUFBLGlCQUFLOzs7SUFGRCx3Q0FBcUI7SUFDRyxlQUM1QjtJQUQ0Qix1REFDNUI7OztJQUxKLDBCQUNJO0lBQUEsdUVBRzRCO0lBRWhDLGlCQUFLOzs7SUFKRyxlQUEwQjtJQUExQixvQ0FBMEI7O0FBekJ0QztJQUE4Qyw0Q0FBb0I7SUFBbEU7O0lBT0EsQ0FBQztJQU5VLGdEQUFhLEdBQXBCLFVBQXFCLElBQWlCLEVBQUUsUUFBYTtRQUNqRCwrQkFBK0I7UUFDL0IsSUFBTSxZQUFZLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBOEMsb0JBQW9CLEdBT2pFOztBQUVEO0lBeUJ5Qyx1Q0FBWTtJQU1qRCw2QkFBWSxRQUFrQjtlQUMxQixrQkFBTSxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksd0JBQXdCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQU5ELHNCQUFXLHFDQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RILENBQUM7OztPQUFBOzBGQUpRLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lBdEJoQyxnQ0FDQTtZQUFBLHdFQUNJO1lBUUosNkJBQ0k7WUFBQSxrRUFDSTtZQU1SLGlCQUFRO1lBQ1IsaUJBQVE7O1lBbEJELGVBQWdDO1lBQWhDLG1EQUFnQztZQVUvQixlQUFpRDtZQUFqRCx5REFBaUQ7OzhCQTlCekQ7Q0FrREMsQUFsQ0QsQ0F5QnlDLFlBQVksR0FTcEQ7U0FUWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQXpCL0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxnb0JBcUJiO2FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlUHJlY2lzaW9uIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3LCBDYWxlbmRhclZpZXdUeXBlIH0gZnJvbSBcIi4vY2FsZW5kYXItdmlld1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJdGVtIH0gZnJvbSBcIi4uL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJSYW5nZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY2FsZW5kYXItcmFuZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZVBhcnNlciB9IGZyb20gXCIuLi9jbGFzc2VzL2RhdGUtcGFyc2VyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UgZXh0ZW5kcyBDYWxlbmRhclJhbmdlU2VydmljZSB7XG4gICAgcHVibGljIGNvbmZpZ3VyZUl0ZW0oaXRlbTpDYWxlbmRhckl0ZW0sIGJhc2VEYXRlOkRhdGUpOnZvaWQge1xuICAgICAgICAvLyBTZXQgbWludXRlcyBhbmQgc2Vjb25kcyB0byAwXG4gICAgICAgIGNvbnN0IGN1c3RvbUZvcm1hdDpzdHJpbmcgPSB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzLmZvcm1hdHMudGltZS5yZXBsYWNlKC9bbXNdL2csIFwiMFwiKTtcbiAgICAgICAgaXRlbS5odW1hblJlYWRhYmxlID0gbmV3IERhdGVQYXJzZXIoY3VzdG9tRm9ybWF0LCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQoaXRlbS5kYXRlKTtcbiAgICAgICAgaXRlbS5pc091dHNpZGVSYW5nZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNhbGVuZGFyLWhvdXItdmlld1wiLFxuICAgIHRlbXBsYXRlOiBgXG48dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgY2VudGVyIGFsaWduZWQgdW5zdGFja2FibGUgdGFibGUgZm91ciBjb2x1bW4gaG91clwiPlxuPHRoZWFkICpuZ0lmPVwic2VydmljZS5jb25maWcubW9kZSAhPSAxXCI+XG4gICAgPHRyPlxuICAgICAgICA8dGggY29sc3Bhbj1cIjRcIj5cbiAgICAgICAgICAgIDxzdWktY2FsZW5kYXItdmlldy10aXRsZSBbcmFuZ2VzXT1cInJhbmdlc1wiICh6b29tT3V0KT1cInpvb21PdXQoKVwiPlxuICAgICAgICAgICAgICAgIHt7IGRhdGUgfX1cbiAgICAgICAgICAgIDwvc3VpLWNhbGVuZGFyLXZpZXctdGl0bGU+XG4gICAgICAgIDwvdGg+XG4gICAgPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG4gICAgPHRyICpuZ0Zvcj1cImxldCBncm91cCBvZiByYW5nZXMuY3VycmVudC5ncm91cGVkSXRlbXNcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwibGlua1wiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cFwiXG4gICAgICAgICAgICBbY2FsZW5kYXJJdGVtXT1cIml0ZW1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldERhdGUoaXRlbSlcIj57eyBpdGVtLmh1bWFuUmVhZGFibGUgfX1cbiAgICAgICAgPC90ZD5cbiAgICA8L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySG91clZpZXcgZXh0ZW5kcyBDYWxlbmRhclZpZXcge1xuXG4gICAgcHVibGljIGdldCBkYXRlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuc2VydmljZS5sb2NhbGVWYWx1ZXMuZm9ybWF0cy5kYXRlLCB0aGlzLnNlcnZpY2UubG9jYWxlVmFsdWVzKS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBDYWxlbmRhclZpZXdUeXBlLkhvdXIsIG5ldyBDYWxlbmRhclJhbmdlSG91clNlcnZpY2UoRGF0ZVByZWNpc2lvbi5EYXRlLCA2LCA0KSk7XG4gICAgfVxufVxuIl19