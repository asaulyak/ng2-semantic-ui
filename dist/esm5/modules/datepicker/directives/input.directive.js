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
var isWebView = isUAWebView["default"] || isUAWebView;
var SuiDatepickerInputDirective = /** @class */ (function () {
    function SuiDatepickerInputDirective(datepicker, valueAccessor, _renderer, _element, localizationService) {
        var _this = this;
        this.datepicker = datepicker;
        this.valueAccessor = valueAccessor;
        this._renderer = _renderer;
        this._element = _element;
        this.useNativeOnMobile = true;
        this.fallbackActive = false;
        // Whenever the datepicker value updates, update the input text alongside it.
        this.datepicker.onSelectedDateChange.subscribe(function () {
            return _this.updateValue(_this.selectedDateString);
        });
        localizationService.onLanguageUpdate.subscribe(function () {
            return _this.updateValue(_this.selectedDateString);
        });
    }
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "useNativeOnMobile", {
        get: function () {
            return this._useNativeOnMobile;
        },
        set: function (fallback) {
            this._useNativeOnMobile = fallback;
            var isOnMobile = bowser.mobile || bowser.tablet || isWebView(navigator.userAgent);
            this.fallbackActive = this.useNativeOnMobile && isOnMobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "fallbackActive", {
        get: function () {
            return this._fallbackActive;
        },
        set: function (active) {
            this._fallbackActive = active;
            // If the fallback is active, then the trigger must be manual so the datepicker never opens.
            this.datepicker.popup.config.trigger = this.fallbackActive ? PopupTrigger.Manual : PopupTrigger.Focus;
            // Update the input value (this will insert the `T` as required).
            this.updateValue(this.selectedDateString);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "parser", {
        get: function () {
            if (this.fallbackActive) {
                return new InternalDateParser(this.datepicker.mode, this.datepicker.localeValues);
            }
            return new DateParser(this.datepicker.localeValues.formats[this.datepicker.mode], this.datepicker.localeValues);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "selectedDateString", {
        get: function () {
            if (this.datepicker.selectedDate) {
                return this.parser.format(this.datepicker.selectedDate);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "type", {
        get: function () {
            if (this.fallbackActive) {
                return this.datepicker.config.fallback;
            }
            return "text";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "max", {
        get: function () {
            if (this.fallbackActive && this.datepicker.maxDate) {
                // Since HTML doesn't use a date object max is somewhat tricky.
                // Our Datepicker will always choose the 1st date on the provided precision,
                // meaning anything below the maxDate will work, hence endOf.
                var max = DateUtil.endOf(this.datepicker.config.precision, DateUtil.clone(this.datepicker.maxDate));
                return this.parser.format(max);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerInputDirective.prototype, "min", {
        get: function () {
            if (this.fallbackActive && this.datepicker.minDate) {
                // Since HTML doesn't use a date object min is somewhat tricky.
                // We use 1 minute before the next date at the configured precision since
                // our Datepicker picks the first available date at that precision.
                var min = DateUtil.clone(this.datepicker.minDate);
                return this.parser.format(min);
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiDatepickerInputDirective.prototype.updateValue = function (value) {
        // Only update the current value if it is different to what it's being updated to.
        // This is so that the editing position isn't changed when manually typing the date.
        if (!this._lastUpdateTyped) {
            this._renderer.setProperty(this._element.nativeElement, "value", value || "");
        }
        this._lastUpdateTyped = false;
    };
    SuiDatepickerInputDirective.prototype.typeValue = function (value) {
        this._lastUpdateTyped = true;
        this._currentInputValue = value;
        if (!value) {
            // Delete the selected date if no date was entered manually.
            return this.datepicker.writeValue(undefined);
        }
        var parsed = this.parser.parse(value, this.datepicker.selectedDate);
        if (!isNaN(parsed.getTime()) && value === this.parser.format(parsed)) {
            return this.datepicker.writeValue(parsed);
        }
        return this.datepicker.writeValue(undefined);
    };
    SuiDatepickerInputDirective.prototype.onFocusOut = function () {
        this.valueAccessor.onTouched();
    };
    SuiDatepickerInputDirective.ɵfac = function SuiDatepickerInputDirective_Factory(t) { return new (t || SuiDatepickerInputDirective)(i0.ɵɵdirectiveInject(i1.SuiDatepickerDirective, 1), i0.ɵɵdirectiveInject(i1.SuiDatepickerDirectiveValueAccessor, 1), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.SuiLocalizationService)); };
    SuiDatepickerInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: SuiDatepickerInputDirective, selectors: [["input", "suiDatepicker", ""]], hostVars: 3, hostBindings: function SuiDatepickerInputDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("input", function SuiDatepickerInputDirective_input_HostBindingHandler($event) { return ctx.typeValue($event.target.value); })("focusout", function SuiDatepickerInputDirective_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
        } if (rf & 2) {
            i0.ɵɵattribute("type", ctx.type)("max", ctx.max)("min", ctx.min);
        } }, inputs: { useNativeOnMobile: ["pickerUseNativeOnMobile", "useNativeOnMobile"] } });
    return SuiDatepickerInputDirective;
}());
export { SuiDatepickerInputDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kYXRlcGlja2VyL2RpcmVjdGl2ZXMvaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLFFBQVEsRUFBaUIsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1DQUFtQyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxLQUFLLFdBQVcsTUFBTSxlQUFlLENBQUM7Ozs7QUFDN0MsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFdBQVcsQ0FBQztBQUV4RDtJQTZFSSxxQ0FBMkIsVUFBaUMsRUFDakMsYUFBaUQsRUFDeEQsU0FBbUIsRUFDbkIsUUFBbUIsRUFDM0IsbUJBQTBDO1FBSnRELGlCQWVDO1FBZjBCLGVBQVUsR0FBVixVQUFVLENBQXVCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFvQztRQUN4RCxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFHbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJ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QUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBR00sZ0RBQVUsR0FEakI7UUFFSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25DLENBQUM7MEdBekhRLDJCQUEyQjtvRUFBM0IsMkJBQTJCOzs7OztzQ0FoQnhDO0NBMElDLEFBN0hELElBNkhDO1NBMUhZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBSHZDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2FBQ25DOztzQkEyRWdCLElBQUk7O3NCQUNKLElBQUk7O2tCQXhFaEIsS0FBSzttQkFBQyx5QkFBeUI7O2tCQXlDL0IsV0FBVzttQkFBQyxXQUFXOztrQkFRdkIsV0FBVzttQkFBQyxVQUFVOztrQkFXdEIsV0FBVzttQkFBQyxVQUFVOztrQkFzQ3RCLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7O2tCQWlCN0MsWUFBWTttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGF0ZVV0aWwsIERhdGVQcmVjaXNpb24gfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFBvcHVwVHJpZ2dlciB9IGZyb20gXCIuLi8uLi9wb3B1cC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSwgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9kYXRlcGlja2VyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgSW50ZXJuYWxEYXRlUGFyc2VyLCBEYXRlUGFyc2VyIH0gZnJvbSBcIi4uL2NsYXNzZXMvZGF0ZS1wYXJzZXJcIjtcbmltcG9ydCAqIGFzIGJvd3NlciBmcm9tIFwiYm93c2VyXCI7XG5cbmltcG9ydCBcIi4uL2hlbHBlcnMvaXMtd2Vidmlld1wiO1xuaW1wb3J0ICogYXMgaXNVQVdlYlZpZXcgZnJvbSBcImlzLXVhLXdlYnZpZXdcIjtcbmNvbnN0IGlzV2ViVmlldyA9IGlzVUFXZWJWaWV3W1wiZGVmYXVsdFwiXSB8fCBpc1VBV2ViVmlldztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiaW5wdXRbc3VpRGF0ZXBpY2tlcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VySW5wdXREaXJlY3RpdmUge1xuICAgIHByaXZhdGUgX3VzZU5hdGl2ZU9uTW9iaWxlOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJwaWNrZXJVc2VOYXRpdmVPbk1vYmlsZVwiKVxuICAgIHB1YmxpYyBnZXQgdXNlTmF0aXZlT25Nb2JpbGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZU5hdGl2ZU9uTW9iaWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdXNlTmF0aXZlT25Nb2JpbGUoZmFsbGJhY2s6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl91c2VOYXRpdmVPbk1vYmlsZSA9IGZhbGxiYWNrO1xuICAgICAgICBjb25zdCBpc09uTW9iaWxlID0gYm93c2VyLm1vYmlsZSB8fCBib3dzZXIudGFibGV0IHx8IGlzV2ViVmlldyhuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgdGhpcy5mYWxsYmFja0FjdGl2ZSA9IHRoaXMudXNlTmF0aXZlT25Nb2JpbGUgJiYgaXNPbk1vYmlsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mYWxsYmFja0FjdGl2ZTpib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBmYWxsYmFja0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2tBY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBmYWxsYmFja0FjdGl2ZShhY3RpdmU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9mYWxsYmFja0FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgLy8gSWYgdGhlIGZhbGxiYWNrIGlzIGFjdGl2ZSwgdGhlbiB0aGUgdHJpZ2dlciBtdXN0IGJlIG1hbnVhbCBzbyB0aGUgZGF0ZXBpY2tlciBuZXZlciBvcGVucy5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLnBvcHVwLmNvbmZpZy50cmlnZ2VyID0gdGhpcy5mYWxsYmFja0FjdGl2ZSA/IFBvcHVwVHJpZ2dlci5NYW51YWwgOiBQb3B1cFRyaWdnZXIuRm9jdXM7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWUgKHRoaXMgd2lsbCBpbnNlcnQgdGhlIGBUYCBhcyByZXF1aXJlZCkuXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGFyc2VyKCk6RGF0ZVBhcnNlciB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrQWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludGVybmFsRGF0ZVBhcnNlcih0aGlzLmRhdGVwaWNrZXIubW9kZSwgdGhpcy5kYXRlcGlja2VyLmxvY2FsZVZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlUGFyc2VyKHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMuZm9ybWF0c1t0aGlzLmRhdGVwaWNrZXIubW9kZV0sIHRoaXMuZGF0ZXBpY2tlci5sb2NhbGVWYWx1ZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2N1cnJlbnRJbnB1dFZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF9sYXN0VXBkYXRlVHlwZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlU3RyaW5nKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQodGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnR5cGVcIilcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTpzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZXBpY2tlci5jb25maWcuZmFsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwidGV4dFwiO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIubWF4XCIpXG4gICAgcHVibGljIGdldCBtYXgoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSAmJiB0aGlzLmRhdGVwaWNrZXIubWF4RGF0ZSkge1xuICAgICAgICAgICAgLy8gU2luY2UgSFRNTCBkb2Vzbid0IHVzZSBhIGRhdGUgb2JqZWN0IG1heCBpcyBzb21ld2hhdCB0cmlja3kuXG4gICAgICAgICAgICAvLyBPdXIgRGF0ZXBpY2tlciB3aWxsIGFsd2F5cyBjaG9vc2UgdGhlIDFzdCBkYXRlIG9uIHRoZSBwcm92aWRlZCBwcmVjaXNpb24sXG4gICAgICAgICAgICAvLyBtZWFuaW5nIGFueXRoaW5nIGJlbG93IHRoZSBtYXhEYXRlIHdpbGwgd29yaywgaGVuY2UgZW5kT2YuXG4gICAgICAgICAgICBjb25zdCBtYXggPSBEYXRlVXRpbC5lbmRPZih0aGlzLmRhdGVwaWNrZXIuY29uZmlnLnByZWNpc2lvbiwgRGF0ZVV0aWwuY2xvbmUodGhpcy5kYXRlcGlja2VyLm1heERhdGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlci5mb3JtYXQobWF4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIubWluXCIpXG4gICAgcHVibGljIGdldCBtaW4oKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAodGhpcy5mYWxsYmFja0FjdGl2ZSAmJiB0aGlzLmRhdGVwaWNrZXIubWluRGF0ZSkge1xuICAgICAgICAgICAgLy8gU2luY2UgSFRNTCBkb2Vzbid0IHVzZSBhIGRhdGUgb2JqZWN0IG1pbiBpcyBzb21ld2hhdCB0cmlja3kuXG4gICAgICAgICAgICAvLyBXZSB1c2UgMSBtaW51dGUgYmVmb3JlIHRoZSBuZXh0IGRhdGUgYXQgdGhlIGNvbmZpZ3VyZWQgcHJlY2lzaW9uIHNpbmNlXG4gICAgICAgICAgICAvLyBvdXIgRGF0ZXBpY2tlciBwaWNrcyB0aGUgZmlyc3QgYXZhaWxhYmxlIGRhdGUgYXQgdGhhdCBwcmVjaXNpb24uXG4gICAgICAgICAgICBjb25zdCBtaW4gPSBEYXRlVXRpbC5jbG9uZSh0aGlzLmRhdGVwaWNrZXIubWluRGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZXIuZm9ybWF0KG1pbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihASG9zdCgpIHB1YmxpYyBkYXRlcGlja2VyOlN1aURhdGVwaWNrZXJEaXJlY3RpdmUsXG4gICAgICAgICAgICAgICAgQEhvc3QoKSBwdWJsaWMgdmFsdWVBY2Nlc3NvcjpTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuXG4gICAgICAgIHRoaXMudXNlTmF0aXZlT25Nb2JpbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZhbGxiYWNrQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIGRhdGVwaWNrZXIgdmFsdWUgdXBkYXRlcywgdXBkYXRlIHRoZSBpbnB1dCB0ZXh0IGFsb25nc2lkZSBpdC5cbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLm9uU2VsZWN0ZWREYXRlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZVN0cmluZykpO1xuXG4gICAgICAgIGxvY2FsaXphdGlvblNlcnZpY2Uub25MYW5ndWFnZVVwZGF0ZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGVTdHJpbmcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlKHZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBjdXJyZW50IHZhbHVlIGlmIGl0IGlzIGRpZmZlcmVudCB0byB3aGF0IGl0J3MgYmVpbmcgdXBkYXRlZCB0by5cbiAgICAgICAgLy8gVGhpcyBpcyBzbyB0aGF0IHRoZSBlZGl0aW5nIHBvc2l0aW9uIGlzbid0IGNoYW5nZWQgd2hlbiBtYW51YWxseSB0eXBpbmcgdGhlIGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5fbGFzdFVwZGF0ZVR5cGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFwidmFsdWVcIiwgdmFsdWUgfHwgXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0VXBkYXRlVHlwZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiaW5wdXRcIiwgW1wiJGV2ZW50LnRhcmdldC52YWx1ZVwiXSlcbiAgICBwdWJsaWMgdHlwZVZhbHVlKHZhbHVlOnN0cmluZyB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2xhc3RVcGRhdGVUeXBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbnB1dFZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBzZWxlY3RlZCBkYXRlIGlmIG5vIGRhdGUgd2FzIGVudGVyZWQgbWFudWFsbHkuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlcGlja2VyLndyaXRlVmFsdWUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VyLnBhcnNlKHZhbHVlLCB0aGlzLmRhdGVwaWNrZXIuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZWQuZ2V0VGltZSgpKSAmJiB2YWx1ZSA9PT0gdGhpcy5wYXJzZXIuZm9ybWF0KHBhcnNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZShwYXJzZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVwaWNrZXIud3JpdGVWYWx1ZSh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5vblRvdWNoZWQoKTtcbiAgICB9XG59XG4iXX0=