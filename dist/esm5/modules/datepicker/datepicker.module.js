import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiPopupModule } from "../popup/internal";
import { SuiLocalizationModule } from "../../behaviors/localization/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiCalendarViewTitle } from "./components/calendar-view-title";
import { SuiCalendarYearView } from "./views/year-view";
import { SuiCalendarMonthView } from "./views/month-view";
import { SuiCalendarItem } from "./directives/calendar-item";
import { SuiCalendarDateView } from "./views/date-view";
import { SuiDatepicker } from "./components/datepicker";
import { SuiCalendarHourView } from "./views/hour-view";
import { SuiCalendarMinuteView } from "./views/minute-view";
import { SuiDatepickerInputDirective } from "./directives/input.directive";
import { SuiDatepickerDirective, SuiDatepickerDirectiveValueAccessor, SuiDatepickerDirectiveValidator } from "./directives/datepicker.directive";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../popup/directives/popup.directive";
import * as i4 from "../popup/components/popup";
var SuiDatepickerModule = /** @class */ (function () {
    function SuiDatepickerModule() {
    }
    SuiDatepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiDatepickerModule });
    SuiDatepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiDatepickerModule_Factory(t) { return new (t || SuiDatepickerModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                SuiPopupModule,
                SuiLocalizationModule,
                SuiUtilityModule
            ]] });
    return SuiDatepickerModule;
}());
export { SuiDatepickerModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiDatepickerModule, { declarations: [SuiCalendarItem,
        SuiCalendarViewTitle,
        SuiCalendarYearView,
        SuiCalendarMonthView,
        SuiCalendarDateView,
        SuiCalendarHourView,
        SuiCalendarMinuteView,
        SuiDatepicker,
        SuiDatepickerDirective,
        SuiDatepickerDirectiveValueAccessor,
        SuiDatepickerDirectiveValidator,
        SuiDatepickerInputDirective], imports: [CommonModule,
        FormsModule,
        SuiPopupModule,
        SuiLocalizationModule,
        SuiUtilityModule], exports: [SuiDatepickerDirective,
        SuiDatepickerDirectiveValueAccessor,
        SuiDatepickerDirectiveValidator,
        SuiDatepickerInputDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    SuiPopupModule,
                    SuiLocalizationModule,
                    SuiUtilityModule
                ],
                declarations: [
                    SuiCalendarItem,
                    SuiCalendarViewTitle,
                    SuiCalendarYearView,
                    SuiCalendarMonthView,
                    SuiCalendarDateView,
                    SuiCalendarHourView,
                    SuiCalendarMinuteView,
                    SuiDatepicker,
                    SuiDatepickerDirective,
                    SuiDatepickerDirectiveValueAccessor,
                    SuiDatepickerDirectiveValidator,
                    SuiDatepickerInputDirective
                ],
                exports: [
                    SuiDatepickerDirective,
                    SuiDatepickerDirectiveValueAccessor,
                    SuiDatepickerDirectiveValidator,
                    SuiDatepickerInputDirective
                ],
                entryComponents: [
                    SuiDatepicker
                ]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(SuiDatepicker, [SuiCalendarItem,
    SuiCalendarViewTitle,
    SuiCalendarYearView,
    SuiCalendarMonthView,
    SuiCalendarDateView,
    SuiCalendarHourView,
    SuiCalendarMinuteView,
    SuiDatepicker,
    SuiDatepickerDirective,
    SuiDatepickerDirectiveValueAccessor,
    SuiDatepickerDirectiveValidator,
    SuiDatepickerInputDirective, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.SuiPopupDirective, i4.SuiPopup], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNFLE9BQU8sRUFDSCxzQkFBc0IsRUFBRSxtQ0FBbUMsRUFDM0QsK0JBQStCLEVBQ2xDLE1BQU0sbUNBQW1DLENBQUM7Ozs7OztBQUUzQztJQUFBO0tBa0NtQzsyREFBdEIsbUJBQW1CO3lIQUFuQixtQkFBbUIsa0JBakNuQjtnQkFDTCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxxQkFBcUI7Z0JBQ3JCLGdCQUFnQjthQUNuQjs4QkEzQkw7Q0FzRG1DLEFBbENuQyxJQWtDbUM7U0FBdEIsbUJBQW1CO3dGQUFuQixtQkFBbUIsbUJBekJ4QixlQUFlO1FBRWYsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFFckIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQ0FBbUM7UUFDbkMsK0JBQStCO1FBQy9CLDJCQUEyQixhQXBCM0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGdCQUFnQixhQW1CaEIsc0JBQXNCO1FBQ3RCLG1DQUFtQztRQUNuQywrQkFBK0I7UUFDL0IsMkJBQTJCO2tEQU10QixtQkFBbUI7Y0FsQy9CLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2QscUJBQXFCO29CQUNyQixnQkFBZ0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDVixlQUFlO29CQUVmLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBRXJCLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixtQ0FBbUM7b0JBQ25DLCtCQUErQjtvQkFDL0IsMkJBQTJCO2lCQUM5QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsc0JBQXNCO29CQUN0QixtQ0FBbUM7b0JBQ25DLCtCQUErQjtvQkFDL0IsMkJBQTJCO2lCQUM5QjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsYUFBYTtpQkFDaEI7YUFDSjs7dUJBZk8sYUFBYSxHQVRiLGVBQWU7SUFFZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUVyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFN1aVBvcHVwTW9kdWxlIH0gZnJvbSBcIi4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFyVmlld1RpdGxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jYWxlbmRhci12aWV3LXRpdGxlXCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhclllYXJWaWV3IH0gZnJvbSBcIi4vdmlld3MveWVhci12aWV3XCI7XG5pbXBvcnQgeyBTdWlDYWxlbmRhck1vbnRoVmlldyB9IGZyb20gXCIuL3ZpZXdzL21vbnRoLXZpZXdcIjtcbmltcG9ydCB7IFN1aUNhbGVuZGFySXRlbSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvY2FsZW5kYXItaXRlbVwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJEYXRlVmlldyB9IGZyb20gXCIuL3ZpZXdzL2RhdGUtdmlld1wiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJIb3VyVmlldyB9IGZyb20gXCIuL3ZpZXdzL2hvdXItdmlld1wiO1xuaW1wb3J0IHsgU3VpQ2FsZW5kYXJNaW51dGVWaWV3IH0gZnJvbSBcIi4vdmlld3MvbWludXRlLXZpZXdcIjtcbmltcG9ydCB7IFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvaW5wdXQuZGlyZWN0aXZlXCI7XG5pbXBvcnQge1xuICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWxpZGF0b3Jcbn0gZnJvbSBcIi4vZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgU3VpUG9wdXBNb2R1bGUsXG4gICAgICAgIFN1aUxvY2FsaXphdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNhbGVuZGFySXRlbSxcblxuICAgICAgICBTdWlDYWxlbmRhclZpZXdUaXRsZSxcbiAgICAgICAgU3VpQ2FsZW5kYXJZZWFyVmlldyxcbiAgICAgICAgU3VpQ2FsZW5kYXJNb250aFZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyRGF0ZVZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFySG91clZpZXcsXG4gICAgICAgIFN1aUNhbGVuZGFyTWludXRlVmlldyxcblxuICAgICAgICBTdWlEYXRlcGlja2VyLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvcixcbiAgICAgICAgU3VpRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yLFxuICAgICAgICBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlEYXRlcGlja2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyTW9kdWxlIHt9XG4iXX0=