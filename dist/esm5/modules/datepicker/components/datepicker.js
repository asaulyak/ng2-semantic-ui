import { Component, HostBinding, HostListener } from "@angular/core";
import { CalendarService } from "./../services/calendar.service";
import { DatetimeConfig } from "../classes/calendar-config";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import * as i0 from "@angular/core";
import * as i1 from "../../../behaviors/localization/internal";
function SuiDatepicker_sui_calendar_year_view_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-calendar-year-view", 2);
} if (rf & 2) {
    var ctx_r149 = i0.ɵɵnextContext();
    i0.ɵɵproperty("service", ctx_r149.service);
} }
function SuiDatepicker_sui_calendar_month_view_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-calendar-month-view", 2);
} if (rf & 2) {
    var ctx_r150 = i0.ɵɵnextContext();
    i0.ɵɵproperty("service", ctx_r150.service);
} }
function SuiDatepicker_sui_calendar_date_view_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-calendar-date-view", 2);
} if (rf & 2) {
    var ctx_r151 = i0.ɵɵnextContext();
    i0.ɵɵproperty("service", ctx_r151.service);
} }
function SuiDatepicker_sui_calendar_hour_view_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-calendar-hour-view", 2);
} if (rf & 2) {
    var ctx_r152 = i0.ɵɵnextContext();
    i0.ɵɵproperty("service", ctx_r152.service);
} }
function SuiDatepicker_sui_calendar_minute_view_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "sui-calendar-minute-view", 2);
} if (rf & 2) {
    var ctx_r153 = i0.ɵɵnextContext();
    i0.ɵɵproperty("service", ctx_r153.service);
} }
export var DatepickerMode = {
    Year: "year",
    Month: "month",
    Date: "date",
    Datetime: "datetime",
    Time: "time"
};
var SuiDatepicker = /** @class */ (function () {
    function SuiDatepicker(localizationService) {
        this.service = new CalendarService(new DatetimeConfig(), localizationService.get().datepicker);
        this.hasClasses = true;
    }
    SuiDatepicker.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    SuiDatepicker.ɵfac = function SuiDatepicker_Factory(t) { return new (t || SuiDatepicker)(i0.ɵɵdirectiveInject(i1.SuiLocalizationService)); };
    SuiDatepicker.ɵcmp = i0.ɵɵdefineComponent({ type: SuiDatepicker, selectors: [["sui-datepicker"]], hostVars: 6, hostBindings: function SuiDatepicker_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function SuiDatepicker_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ui", ctx.hasClasses)("active", ctx.hasClasses)("calendar", ctx.hasClasses);
        } }, decls: 6, vars: 6, consts: [[3, "ngSwitch"], [3, "service", 4, "ngSwitchCase"], [3, "service"]], template: function SuiDatepicker_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, SuiDatepicker_sui_calendar_year_view_1_Template, 1, 1, "sui-calendar-year-view", 1);
            i0.ɵɵtemplate(2, SuiDatepicker_sui_calendar_month_view_2_Template, 1, 1, "sui-calendar-month-view", 1);
            i0.ɵɵtemplate(3, SuiDatepicker_sui_calendar_date_view_3_Template, 1, 1, "sui-calendar-date-view", 1);
            i0.ɵɵtemplate(4, SuiDatepicker_sui_calendar_hour_view_4_Template, 1, 1, "sui-calendar-hour-view", 1);
            i0.ɵɵtemplate(5, SuiDatepicker_sui_calendar_minute_view_5_Template, 1, 1, "sui-calendar-minute-view", 1);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.service.currentView);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", 2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", 3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", 4);
        } }, styles: ["[_nghost-%COMP%] {\n    user-select: none;\n}"] });
    return SuiDatepicker;
}());
export { SuiDatepicker };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDatepicker, [{
        type: Component,
        args: [{
                selector: "sui-datepicker",
                template: "\n<ng-container [ngSwitch]=\"service.currentView\">\n    <sui-calendar-year-view [service]=\"service\" *ngSwitchCase=\"0\"></sui-calendar-year-view>\n    <sui-calendar-month-view [service]=\"service\" *ngSwitchCase=\"1\"></sui-calendar-month-view>    \n    <sui-calendar-date-view [service]=\"service\" *ngSwitchCase=\"2\"></sui-calendar-date-view>    \n    <sui-calendar-hour-view [service]=\"service\" *ngSwitchCase=\"3\"></sui-calendar-hour-view>    \n    <sui-calendar-minute-view [service]=\"service\" *ngSwitchCase=\"4\"></sui-calendar-minute-view>    \n</ng-container>\n",
                styles: ["\n:host {\n    user-select: none;\n}\n"]
            }]
    }], function () { return [{ type: i1.SuiLocalizationService }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.active"]
        }, {
            type: HostBinding,
            args: ["class.calendar"]
        }], onMouseDown: [{
            type: HostListener,
            args: ["mousedown", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9jb21wb25lbnRzL2RhdGVwaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7SUFnQjlFLDRDQUF1Rjs7O0lBQS9ELDBDQUFtQjs7O0lBQzNDLDZDQUF5Rjs7O0lBQWhFLDBDQUFtQjs7O0lBQzVDLDRDQUF1Rjs7O0lBQS9ELDBDQUFtQjs7O0lBQzNDLDRDQUF1Rjs7O0lBQS9ELDBDQUFtQjs7O0lBQzNDLDhDQUEyRjs7O0lBQWpFLDBDQUFtQjs7QUFoQmpELE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRztJQUMxQixJQUFJLEVBQUUsTUFBd0I7SUFDOUIsS0FBSyxFQUFFLE9BQXlCO0lBQ2hDLElBQUksRUFBRSxNQUF3QjtJQUM5QixRQUFRLEVBQUUsVUFBNEI7SUFDdEMsSUFBSSxFQUFFLE1BQXdCO0NBQ2pDLENBQUM7QUFFRjtJQXlCSSx1QkFBWSxtQkFBMEM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLGNBQWMsRUFBRSxFQUFFLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFHTSxtQ0FBVyxHQURsQixVQUNtQixDQUFZO1FBQzNCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDOzhFQWpCUSxhQUFhO3NEQUFiLGFBQWE7Ozs7O1lBZDFCLGdDQUNJO1lBQUEsb0dBQThEO1lBQzlELHNHQUErRDtZQUMvRCxvR0FBOEQ7WUFDOUQsb0dBQThEO1lBQzlELHdHQUFnRTtZQUNwRSwwQkFBZTs7WUFORCxrREFBZ0M7WUFDRSxlQUFpQjtZQUFqQixnQ0FBaUI7WUFDaEIsZUFBaUI7WUFBakIsZ0NBQWlCO1lBQ2xCLGVBQWlCO1lBQWpCLGdDQUFpQjtZQUNqQixlQUFpQjtZQUFqQixnQ0FBaUI7WUFDZixlQUFpQjtZQUFqQixnQ0FBaUI7O3dCQXZCbkU7Q0FrREMsQUFuQ0QsSUFtQ0M7U0FsQlksYUFBYTtrREFBYixhQUFhO2NBakJ6QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLG1rQkFRYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQyx3Q0FJWixDQUFDO2FBQ0Q7O2tCQUVJLFdBQVc7bUJBQUMsVUFBVTs7a0JBQ3RCLFdBQVc7bUJBQUMsY0FBYzs7a0JBQzFCLFdBQVc7bUJBQUMsZ0JBQWdCOztrQkFXNUIsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvY2FsZW5kYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0ZXRpbWVDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9jYWxlbmRhci1jb25maWdcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgdHlwZSBEYXRlcGlja2VyTW9kZSA9IFwieWVhclwiIHwgXCJtb250aFwiIHwgXCJkYXRlXCIgfCBcImRhdGV0aW1lXCIgfCBcInRpbWVcIjtcblxuZXhwb3J0IGNvbnN0IERhdGVwaWNrZXJNb2RlID0ge1xuICAgIFllYXI6IFwieWVhclwiIGFzIERhdGVwaWNrZXJNb2RlLFxuICAgIE1vbnRoOiBcIm1vbnRoXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgRGF0ZTogXCJkYXRlXCIgYXMgRGF0ZXBpY2tlck1vZGUsXG4gICAgRGF0ZXRpbWU6IFwiZGF0ZXRpbWVcIiBhcyBEYXRlcGlja2VyTW9kZSxcbiAgICBUaW1lOiBcInRpbWVcIiBhcyBEYXRlcGlja2VyTW9kZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWRhdGVwaWNrZXJcIixcbiAgICB0ZW1wbGF0ZTogYFxuPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwic2VydmljZS5jdXJyZW50Vmlld1wiPlxuICAgIDxzdWktY2FsZW5kYXIteWVhci12aWV3IFtzZXJ2aWNlXT1cInNlcnZpY2VcIiAqbmdTd2l0Y2hDYXNlPVwiMFwiPjwvc3VpLWNhbGVuZGFyLXllYXItdmlldz5cbiAgICA8c3VpLWNhbGVuZGFyLW1vbnRoLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIxXCI+PC9zdWktY2FsZW5kYXItbW9udGgtdmlldz4gICAgXG4gICAgPHN1aS1jYWxlbmRhci1kYXRlLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCIyXCI+PC9zdWktY2FsZW5kYXItZGF0ZS12aWV3PiAgICBcbiAgICA8c3VpLWNhbGVuZGFyLWhvdXItdmlldyBbc2VydmljZV09XCJzZXJ2aWNlXCIgKm5nU3dpdGNoQ2FzZT1cIjNcIj48L3N1aS1jYWxlbmRhci1ob3VyLXZpZXc+ICAgIFxuICAgIDxzdWktY2FsZW5kYXItbWludXRlLXZpZXcgW3NlcnZpY2VdPVwic2VydmljZVwiICpuZ1N3aXRjaENhc2U9XCI0XCI+PC9zdWktY2FsZW5kYXItbWludXRlLXZpZXc+ICAgIFxuPC9uZy1jb250YWluZXI+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXIge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2FsZW5kYXJcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHVibGljIHNlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IobG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBDYWxlbmRhclNlcnZpY2UobmV3IERhdGV0aW1lQ29uZmlnKCksIGxvY2FsaXphdGlvblNlcnZpY2UuZ2V0KCkuZGF0ZXBpY2tlcik7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn1cbiJdfQ==