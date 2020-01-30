import { Directive, Host, Input, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";
import { DateUtil } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { PopupTrigger } from "../../popup/internal";
import { SuiDatepickerDirective, SuiDatepickerDirectiveValueAccessor } from "./datepicker.directive";
import { InternalDateParser, DateParser } from "../classes/date-parser";
import * as bowser from "bowser";
import "../helpers/is-webview";
import * as isUAWebView from "is-ua-webview";
import * as i0 from "@angular/core";
import * as i1 from "./datepicker.directive";
import * as i2 from "../../../behaviors/localization/internal";
const isWebView = isUAWebView["default"] || isUAWebView;
export class SuiDatepickerInputDirective {
    constructor(datepicker, valueAccessor, _renderer, _element, localizationService) {
        this.datepicker = datepicker;
        this.valueAccessor = valueAccessor;
        this._renderer = _renderer;
        this._element = _element;
        this.useNativeOnMobile = true;
        this.fallbackActive = false;
        // Whenever the datepicker value updates, update the input text alongside it.
        this.datepicker.onSelectedDateChange.subscribe(() => this.updateValue(this.selectedDateString));
        localizationService.onLanguageUpdate.subscribe(() => this.updateValue(this.selectedDateString));
    }
    get useNativeOnMobile() {
        return this._useNativeOnMobile;
    }
    set useNativeOnMobile(fallback) {
        this._useNativeOnMobile = fallback;
        const isOnMobile = bowser.mobile || bowser.tablet || isWebView(navigator.userAgent);
        this.fallbackActive = this.useNativeOnMobile && isOnMobile;
    }
    get fallbackActive() {
        return this._fallbackActive;
    }
    set fallbackActive(active) {
        this._fallbackActive = active;
        // If the fallback is active, then the trigger must be manual so the datepicker never opens.
        this.datepicker.popup.config.trigger = this.fallbackActive ? PopupTrigger.Manual : PopupTrigger.Focus;
        // Update the input value (this will insert the `T` as required).
        this.updateValue(this.selectedDateString);
    }
    get parser() {
        if (this.fallbackActive) {
            return new InternalDateParser(this.datepicker.mode, this.datepicker.localeValues);
        }
        return new DateParser(this.datepicker.localeValues.formats[this.datepicker.mode], this.datepicker.localeValues);
    }
    get selectedDateString() {
        if (this.datepicker.selectedDate) {
            return this.parser.format(this.datepicker.selectedDate);
        }
    }
    get type() {
        if (this.fallbackActive) {
            return this.datepicker.config.fallback;
        }
        return "text";
    }
    get max() {
        if (this.fallbackActive && this.datepicker.maxDate) {
            // Since HTML doesn't use a date object max is somewhat tricky.
            // Our Datepicker will always choose the 1st date on the provided precision,
            // meaning anything below the maxDate will work, hence endOf.
            const max = DateUtil.endOf(this.datepicker.config.precision, DateUtil.clone(this.datepicker.maxDate));
            return this.parser.format(max);
        }
    }
    get min() {
        if (this.fallbackActive && this.datepicker.minDate) {
            // Since HTML doesn't use a date object min is somewhat tricky.
            // We use 1 minute before the next date at the configured precision since
            // our Datepicker picks the first available date at that precision.
            const min = DateUtil.clone(this.datepicker.minDate);
            return this.parser.format(min);
        }
    }
    updateValue(value) {
        // Only update the current value if it is different to what it's being updated to.
        // This is so that the editing position isn't changed when manually typing the date.
        if (!this._lastUpdateTyped) {
            this._renderer.setProperty(this._element.nativeElement, "value", value || "");
        }
        this._lastUpdateTyped = false;
    }
    typeValue(value) {
        this._lastUpdateTyped = true;
        this._currentInputValue = value;
        if (!value) {
            // Delete the selected date if no date was entered manually.
            return this.datepicker.writeValue(undefined);
        }
        const parsed = this.parser.parse(value, this.datepicker.selectedDate);
        if (!isNaN(parsed.getTime()) && value === this.parser.format(parsed)) {
            return this.datepicker.writeValue(parsed);
        }
        return this.datepicker.writeValue(undefined);
    }
    onFocusOut() {
        this.valueAccessor.onTouched();
    }
}
SuiDatepickerInputDirective.ɵfac = function SuiDatepickerInputDirective_Factory(t) { return new (t || SuiDatepickerInputDirective)(i0.ɵɵdirectiveInject(i1.SuiDatepickerDirective, 1), i0.ɵɵdirectiveInject(i1.SuiDatepickerDirectiveValueAccessor, 1), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.SuiLocalizationService)); };
SuiDatepickerInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: SuiDatepickerInputDirective, selectors: [["input", "suiDatepicker", ""]], hostVars: 3, hostBindings: function SuiDatepickerInputDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("input", function SuiDatepickerInputDirective_input_HostBindingHandler($event) { return ctx.typeValue($event.target.value); })("focusout", function SuiDatepickerInputDirective_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
    } if (rf & 2) {
        i0.ɵɵattribute("type", ctx.type)("max", ctx.max)("min", ctx.min);
    } }, inputs: { useNativeOnMobile: ["pickerUseNativeOnMobile", "useNativeOnMobile"] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDatepickerInputDirective, [{
        type: Directive,
        args: [{
                selector: "input[suiDatepicker]"
            }]
    }], function () { return [{ type: i1.SuiDatepickerDirective, decorators: [{
                type: Host
            }] }, { type: i1.SuiDatepickerDirectiveValueAccessor, decorators: [{
                type: Host
            }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.SuiLocalizationService }]; }, { useNativeOnMobile: [{
            type: Input,
            args: ["pickerUseNativeOnMobile"]
        }], type: [{
            type: HostBinding,
            args: ["attr.type"]
        }], max: [{
            type: HostBinding,
            args: ["attr.max"]
        }], min: [{
            type: HostBinding,
            args: ["attr.min"]
        }], typeValue: [{
            type: HostListener,
            args: ["input", ["$event.target.value"]]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL2RpcmVjdGl2ZXMvaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLFFBQVEsRUFBaUIsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1DQUFtQyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxLQUFLLFdBQVcsTUFBTSxlQUFlLENBQUM7Ozs7QUFDN0MsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFdBQVcsQ0FBQztBQUt4RCxNQUFNLE9BQU8sMkJBQTJCO0lBMEVwQyxZQUEyQixVQUFpQyxFQUNqQyxhQUFpRCxFQUN4RCxTQUFtQixFQUNuQixRQUFtQixFQUMzQixtQkFBMEM7UUFKM0IsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQW9DO1FBQ3hELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUduQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBRTVCLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRS9DLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUF0RkQsSUFDVyxpQkFBaUI7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQVcsaUJBQWlCLENBQUMsUUFBZ0I7UUFDekMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztRQUNuQyxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxVQUFVLENBQUM7SUFDL0QsQ0FBQztJQUlELElBQVcsY0FBYztRQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQVcsY0FBYyxDQUFDLE1BQWM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7UUFDOUIsNEZBQTRGO1FBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN0RyxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFLRCxJQUFXLGtCQUFrQjtRQUN6QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCxJQUNXLElBQUk7UUFDWCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDMUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFDVyxHQUFHO1FBQ1YsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2hELCtEQUErRDtZQUMvRCw0RUFBNEU7WUFDNUUsNkRBQTZEO1lBQzdELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsSUFDVyxHQUFHO1FBQ1YsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ2hELCtEQUErRDtZQUMvRCx5RUFBeUU7WUFDekUsbUVBQW1FO1lBQ25FLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQW1CTyxXQUFXLENBQUMsS0FBd0I7UUFDeEMsa0ZBQWtGO1FBQ2xGLG9GQUFvRjtRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7U0FDakY7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFHTSxTQUFTLENBQUMsS0FBd0I7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRWhDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUiw0REFBNEQ7WUFDNUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRDtRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFHTSxVQUFVO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztzR0F6SFEsMkJBQTJCO2dFQUEzQiwyQkFBMkI7Ozs7O2tEQUEzQiwyQkFBMkI7Y0FIdkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7YUFDbkM7O3NCQTJFZ0IsSUFBSTs7c0JBQ0osSUFBSTs7a0JBeEVoQixLQUFLO21CQUFDLHlCQUF5Qjs7a0JBeUMvQixXQUFXO21CQUFDLFdBQVc7O2tCQVF2QixXQUFXO21CQUFDLFVBQVU7O2tCQVd0QixXQUFXO21CQUFDLFVBQVU7O2tCQXNDdEIsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzs7a0JBaUI3QyxZQUFZO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5wdXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEYXRlVXRpbCwgRGF0ZVByZWNpc2lvbiB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgUG9wdXBUcmlnZ2VyIH0gZnJvbSBcIi4uLy4uL3BvcHVwL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlLCBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2RhdGVwaWNrZXIuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBJbnRlcm5hbERhdGVQYXJzZXIsIERhdGVQYXJzZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy9kYXRlLXBhcnNlclwiO1xuaW1wb3J0ICogYXMgYm93c2VyIGZyb20gXCJib3dzZXJcIjtcblxuaW1wb3J0IFwiLi4vaGVscGVycy9pcy13ZWJ2aWV3XCI7XG5pbXBvcnQgKiBhcyBpc1VBV2ViVmlldyBmcm9tIFwiaXMtdWEtd2Vidmlld1wiO1xuY29uc3QgaXNXZWJWaWV3ID0gaXNVQVdlYlZpZXdbXCJkZWZhdWx0XCJdIHx8IGlzVUFXZWJWaWV3O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJpbnB1dFtzdWlEYXRlcGlja2VyXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB7XG4gICAgcHJpdmF0ZSBfdXNlTmF0aXZlT25Nb2JpbGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dChcInBpY2tlclVzZU5hdGl2ZU9uTW9iaWxlXCIpXG4gICAgcHVibGljIGdldCB1c2VOYXRpdmVPbk1vYmlsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlTmF0aXZlT25Nb2JpbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB1c2VOYXRpdmVPbk1vYmlsZShmYWxsYmFjazpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3VzZU5hdGl2ZU9uTW9iaWxlID0gZmFsbGJhY2s7XG4gICAgICAgIGNvbnN0IGlzT25Nb2JpbGUgPSBib3dzZXIubW9iaWxlIHx8IGJvd3Nlci50YWJsZXQgfHwgaXNXZWJWaWV3KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICB0aGlzLmZhbGxiYWNrQWN0aXZlID0gdGhpcy51c2VOYXRpdmVPbk1vYmlsZSAmJiBpc09uTW9iaWxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZhbGxiYWNrQWN0aXZlOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGZhbGxiYWNrQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYWxsYmFja0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGZhbGxiYWNrQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrQWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAvLyBJZiB0aGUgZmFsbGJhY2sgaXMgYWN0aXZlLCB0aGVuIHRoZSB0cmlnZ2VyIG11c3QgYmUgbWFudWFsIHNvIHRoZSBkYXRlcGlja2VyIG5ldmVyIG9wZW5zLlxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIucG9wdXAuY29uZmlnLnRyaWdnZXIgPSB0aGlzLmZhbGxiYWNrQWN0aXZlID8gUG9wdXBUcmlnZ2VyLk1hbnVhbCA6IFBvcHVwVHJpZ2dlci5Gb2N1cztcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZSAodGhpcyB3aWxsIGluc2VydCB0aGUgYFRgIGFzIHJlcXVpcmVkKS5cbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXJzZXIoKTpEYXRlUGFyc2VyIHtcbiAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tBY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50ZXJuYWxEYXRlUGFyc2VyKHRoaXMuZGF0ZXBpY2tlci5tb2RlLCB0aGlzLmRhdGVwaWNrZXIubG9jYWxlVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGVQYXJzZXIodGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcy5mb3JtYXRzW3RoaXMuZGF0ZXBpY2tlci5tb2RlXSwgdGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3VycmVudElucHV0VmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2xhc3RVcGRhdGVUeXBlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZERhdGVTdHJpbmcoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdCh0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudHlwZVwiKVxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOnN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLmNvbmZpZy5mYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5tYXhcIilcbiAgICBwdWJsaWMgZ2V0IG1heCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlICYmIHRoaXMuZGF0ZXBpY2tlci5tYXhEYXRlKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSBIVE1MIGRvZXNuJ3QgdXNlIGEgZGF0ZSBvYmplY3QgbWF4IGlzIHNvbWV3aGF0IHRyaWNreS5cbiAgICAgICAgICAgIC8vIE91ciBEYXRlcGlja2VyIHdpbGwgYWx3YXlzIGNob29zZSB0aGUgMXN0IGRhdGUgb24gdGhlIHByb3ZpZGVkIHByZWNpc2lvbixcbiAgICAgICAgICAgIC8vIG1lYW5pbmcgYW55dGhpbmcgYmVsb3cgdGhlIG1heERhdGUgd2lsbCB3b3JrLCBoZW5jZSBlbmRPZi5cbiAgICAgICAgICAgIGNvbnN0IG1heCA9IERhdGVVdGlsLmVuZE9mKHRoaXMuZGF0ZXBpY2tlci5jb25maWcucHJlY2lzaW9uLCBEYXRlVXRpbC5jbG9uZSh0aGlzLmRhdGVwaWNrZXIubWF4RGF0ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VyLmZvcm1hdChtYXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiYXR0ci5taW5cIilcbiAgICBwdWJsaWMgZ2V0IG1pbigpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlICYmIHRoaXMuZGF0ZXBpY2tlci5taW5EYXRlKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSBIVE1MIGRvZXNuJ3QgdXNlIGEgZGF0ZSBvYmplY3QgbWluIGlzIHNvbWV3aGF0IHRyaWNreS5cbiAgICAgICAgICAgIC8vIFdlIHVzZSAxIG1pbnV0ZSBiZWZvcmUgdGhlIG5leHQgZGF0ZSBhdCB0aGUgY29uZmlndXJlZCBwcmVjaXNpb24gc2luY2VcbiAgICAgICAgICAgIC8vIG91ciBEYXRlcGlja2VyIHBpY2tzIHRoZSBmaXJzdCBhdmFpbGFibGUgZGF0ZSBhdCB0aGF0IHByZWNpc2lvbi5cbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IERhdGVVdGlsLmNsb25lKHRoaXMuZGF0ZXBpY2tlci5taW5EYXRlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQobWluKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHVibGljIGRhdGVwaWNrZXI6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgICBASG9zdCgpIHB1YmxpYyB2YWx1ZUFjY2Vzc29yOlN1aURhdGVwaWNrZXJEaXJlY3RpdmVWYWx1ZUFjY2Vzc29yLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy51c2VOYXRpdmVPbk1vYmlsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZmFsbGJhY2tBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBXaGVuZXZlciB0aGUgZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVzLCB1cGRhdGUgdGhlIGlucHV0IHRleHQgYWxvbmdzaWRlIGl0LlxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIub25TZWxlY3RlZERhdGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlU3RyaW5nKSk7XG5cbiAgICAgICAgbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmFsdWUodmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGN1cnJlbnQgdmFsdWUgaWYgaXQgaXMgZGlmZmVyZW50IHRvIHdoYXQgaXQncyBiZWluZyB1cGRhdGVkIHRvLlxuICAgICAgICAvLyBUaGlzIGlzIHNvIHRoYXQgdGhlIGVkaXRpbmcgcG9zaXRpb24gaXNuJ3QgY2hhbmdlZCB3aGVuIG1hbnVhbGx5IHR5cGluZyB0aGUgZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLl9sYXN0VXBkYXRlVHlwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ2YWx1ZVwiLCB2YWx1ZSB8fCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3RVcGRhdGVUeXBlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJpbnB1dFwiLCBbXCIkZXZlbnQudGFyZ2V0LnZhbHVlXCJdKVxuICAgIHB1YmxpYyB0eXBlVmFsdWUodmFsdWU6c3RyaW5nIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVR5cGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY3VycmVudElucHV0VmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIHNlbGVjdGVkIGRhdGUgaWYgbm8gZGF0ZSB3YXMgZW50ZXJlZCBtYW51YWxseS5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZXIucGFyc2UodmFsdWUsIHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpO1xuICAgICAgICBpZiAoIWlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpICYmIHZhbHVlID09PSB0aGlzLnBhcnNlci5mb3JtYXQocGFyc2VkKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHBhcnNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci53cml0ZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIpXG4gICAgcHVibGljIG9uRm9jdXNPdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZUFjY2Vzc29yLm9uVG91Y2hlZCgpO1xuICAgIH1cbn1cbiJdfQ==