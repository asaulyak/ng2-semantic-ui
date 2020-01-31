import { __extends } from "tslib";
import { Directive, ElementRef, Renderer2, EventEmitter, Output, Input, HostListener } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor, customValidatorFactory, CustomValidator, PositioningPlacement, SuiComponentFactory, KeyCode } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiPopupComponentController, PopupConfig, PopupTrigger } from "../../popup/internal";
import { SuiDatepicker, DatepickerMode } from "../components/datepicker";
import { YearConfig, MonthConfig, DatetimeConfig, TimeConfig, DateConfig } from "../classes/calendar-config";
import * as i0 from "@angular/core";
import * as i1 from "../../../misc/util/internal";
import * as i2 from "../../../behaviors/localization/internal";
var SuiDatepickerDirective = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirective, _super);
    function SuiDatepickerDirective(renderer, element, componentFactory, localizationService) {
        var _this = _super.call(this, renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
            trigger: PopupTrigger.Focus,
            placement: PositioningPlacement.BottomLeft,
            transition: "scale",
            transitionDuration: 200
        })) || this;
        _this.localizationService = localizationService;
        // This ensures the popup is drawn correctly (i.e. no border).
        _this._renderer.addClass(_this.popup.elementRef.nativeElement, "ui");
        _this._renderer.addClass(_this.popup.elementRef.nativeElement, "calendar");
        _this.onLocaleUpdate();
        _this.localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        _this.onSelectedDateChange = new EventEmitter();
        _this.onValidatorChange = new EventEmitter();
        _this.mode = DatepickerMode.Datetime;
        return _this;
    }
    Object.defineProperty(SuiDatepickerDirective.prototype, "selectedDate", {
        get: function () {
            return this._selectedDate;
        },
        set: function (date) {
            this._selectedDate = date;
            this.onSelectedDateChange.emit(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            this._mode = mode || DatepickerMode.Datetime;
            switch (this._mode) {
                case DatepickerMode.Year:
                    this.config = new YearConfig();
                    break;
                case DatepickerMode.Month:
                    this.config = new MonthConfig();
                    break;
                case DatepickerMode.Date:
                default:
                    this.config = new DateConfig();
                    break;
                case DatepickerMode.Datetime:
                    this.config = new DatetimeConfig();
                    break;
                case DatepickerMode.Time:
                    this.config = new TimeConfig();
                    break;
            }
            this.writeValue(this.selectedDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "localeValues", {
        get: function () {
            return this.localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "placement", {
        set: function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "transition", {
        set: function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiDatepickerDirective.prototype, "transitionDuration", {
        set: function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    SuiDatepickerDirective.prototype.popupOnOpen = function () {
        var _this = this;
        if (this.componentInstance) {
            this.componentInstance.service.config = this.config;
            this.componentInstance.service.localeValues = this.localeValues;
            this.componentInstance.service.currentDate = this.initialDate || new Date();
            this.componentInstance.service.selectedDate = this.selectedDate;
            this.componentInstance.service.maxDate = this.maxDate;
            this.componentInstance.service.minDate = this.minDate;
            if (this.firstDayOfWeek != undefined) {
                this.componentInstance.service.firstDayOfWeek = this.firstDayOfWeek;
            }
            this.componentInstance.service.reset();
            this.componentInstance.service.onDateChange.subscribe(function (d) {
                _this.selectedDate = d;
                _this.close();
            });
        }
    };
    SuiDatepickerDirective.prototype.ngOnChanges = function (_a) {
        var maxDate = _a.maxDate, minDate = _a.minDate, mode = _a.mode;
        if (maxDate || minDate || mode) {
            this.onValidatorChange.emit();
        }
    };
    SuiDatepickerDirective.prototype.onLocaleUpdate = function () {
        this._localeValues = this.localizationService.get().datepicker;
    };
    SuiDatepickerDirective.prototype.validate = function (c) {
        var value = c.value;
        if (value != undefined) {
            // We post process the min & max date because sometimes this puts the date outside of the allowed range.
            if (this.minDate && value < this.minDate) {
                return { suiMinDate: { required: this.minDate, actual: value } };
            }
            if (this.maxDate && value > this.maxDate) {
                return { suiMaxDate: { required: this.maxDate, actual: value } };
            }
        }
        // Angular expects null
        // tslint:disable-next-line:no-null-keyword
        return null;
    };
    SuiDatepickerDirective.prototype.writeValue = function (value) {
        this.selectedDate = value;
        if (this.componentInstance) {
            this.componentInstance.service.selectedDate = value;
        }
    };
    SuiDatepickerDirective.prototype.onKeyDown = function (e) {
        if (e.keyCode === KeyCode.Escape) {
            this.close();
        }
    };
    SuiDatepickerDirective.ɵfac = function SuiDatepickerDirective_Factory(t) { return new (t || SuiDatepickerDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.SuiComponentFactory), i0.ɵɵdirectiveInject(i2.SuiLocalizationService)); };
    SuiDatepickerDirective.ɵdir = i0.ɵɵdefineDirective({ type: SuiDatepickerDirective, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function SuiDatepickerDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
        } }, inputs: { mode: ["pickerMode", "mode"], initialDate: ["pickerInitialDate", "initialDate"], maxDate: ["pickerMaxDate", "maxDate"], minDate: ["pickerMinDate", "minDate"], firstDayOfWeek: ["pickerFirstDayOfWeek", "firstDayOfWeek"], localeOverrides: ["pickerLocaleOverrides", "localeOverrides"], placement: ["pickerPlacement", "placement"], transition: ["pickerTransition", "transition"], transitionDuration: ["pickerTransitionDuration", "transitionDuration"] }, outputs: { onSelectedDateChange: "pickerSelectedDateChange", onValidatorChange: "pickerValidatorChange" }, features: [i0.ɵɵProvidersFeature([customValidatorFactory(SuiDatepickerDirective)]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()] });
    return SuiDatepickerDirective;
}(SuiPopupComponentController));
export { SuiDatepickerDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDatepickerDirective, [{
        type: Directive,
        args: [{
                selector: "[suiDatepicker]",
                providers: [customValidatorFactory(SuiDatepickerDirective)]
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.SuiComponentFactory }, { type: i2.SuiLocalizationService }]; }, { mode: [{
            type: Input,
            args: ["pickerMode"]
        }], initialDate: [{
            type: Input,
            args: ["pickerInitialDate"]
        }], maxDate: [{
            type: Input,
            args: ["pickerMaxDate"]
        }], minDate: [{
            type: Input,
            args: ["pickerMinDate"]
        }], firstDayOfWeek: [{
            type: Input,
            args: ["pickerFirstDayOfWeek"]
        }], localeOverrides: [{
            type: Input,
            args: ["pickerLocaleOverrides"]
        }], placement: [{
            type: Input,
            args: ["pickerPlacement"]
        }], transition: [{
            type: Input,
            args: ["pickerTransition"]
        }], transitionDuration: [{
            type: Input,
            args: ["pickerTransitionDuration"]
        }], onSelectedDateChange: [{
            type: Output,
            args: ["pickerSelectedDateChange"]
        }], onValidatorChange: [{
            type: Output,
            args: ["pickerValidatorChange"]
        }], onKeyDown: [{
            type: HostListener,
            args: ["keydown", ["$event"]]
        }] }); })();
var SuiDatepickerDirectiveValueAccessor = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirectiveValueAccessor, _super);
    function SuiDatepickerDirectiveValueAccessor(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    SuiDatepickerDirectiveValueAccessor.ɵfac = function SuiDatepickerDirectiveValueAccessor_Factory(t) { return new (t || SuiDatepickerDirectiveValueAccessor)(i0.ɵɵdirectiveInject(SuiDatepickerDirective)); };
    SuiDatepickerDirectiveValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiDatepickerDirectiveValueAccessor, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirectiveValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pickerSelectedDateChange", function SuiDatepickerDirectiveValueAccessor_pickerSelectedDateChange_HostBindingHandler($event) { return ctx.onChange($event); });
        } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
    return SuiDatepickerDirectiveValueAccessor;
}(CustomValueAccessor));
export { SuiDatepickerDirectiveValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDatepickerDirectiveValueAccessor, [{
        type: Directive,
        args: [{
                selector: "[suiDatepicker]",
                host: { "(pickerSelectedDateChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]
            }]
    }], function () { return [{ type: SuiDatepickerDirective }]; }, null); })();
var SuiDatepickerDirectiveValidator = /** @class */ (function (_super) {
    __extends(SuiDatepickerDirectiveValidator, _super);
    function SuiDatepickerDirectiveValidator(host) {
        var _this = _super.call(this, host) || this;
        _this.host = host;
        return _this;
    }
    SuiDatepickerDirectiveValidator.ɵfac = function SuiDatepickerDirectiveValidator_Factory(t) { return new (t || SuiDatepickerDirectiveValidator)(i0.ɵɵdirectiveInject(SuiDatepickerDirective)); };
    SuiDatepickerDirectiveValidator.ɵdir = i0.ɵɵdefineDirective({ type: SuiDatepickerDirectiveValidator, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirectiveValidator_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pickerValidatorChange", function SuiDatepickerDirectiveValidator_pickerValidatorChange_HostBindingHandler($event) { return ctx.onValidatorChange(); });
        } }, features: [i0.ɵɵProvidersFeature([customValidatorFactory(SuiDatepickerDirectiveValidator)]), i0.ɵɵInheritDefinitionFeature] });
    return SuiDatepickerDirectiveValidator;
}(CustomValidator));
export { SuiDatepickerDirectiveValidator };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDatepickerDirectiveValidator, [{
        type: Directive,
        args: [{
                selector: "[suiDatepicker]",
                host: { "(pickerValidatorChange)": "onValidatorChange()" },
                providers: [customValidatorFactory(SuiDatepickerDirectiveValidator)]
            }]
    }], function () { return [{ type: SuiDatepickerDirective }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2RhdGVwaWNrZXIvZGlyZWN0aXZlcy9kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUM3RCxZQUFZLEVBQ2YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUN1QiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFDbkQsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFDcEgsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQTZDLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0gsT0FBTyxFQUFFLDJCQUEyQixFQUFrQixXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RSxPQUFPLEVBQWtCLFVBQVUsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUU3SDtJQUtlLDBDQUEwQztJQXVGckQsZ0NBQVksUUFBa0IsRUFDbEIsT0FBa0IsRUFDbEIsZ0JBQW9DLEVBQzdCLG1CQUEwQztRQUg3RCxZQUtJLGtCQUFNLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLElBQUksV0FBVyxDQUFDO1lBQ3RFLE9BQU8sRUFBRSxZQUFZLENBQUMsS0FBSztZQUMzQixTQUFTLEVBQUUsb0JBQW9CLENBQUMsVUFBVTtZQUMxQyxVQUFVLEVBQUUsT0FBTztZQUNuQixrQkFBa0IsRUFBRSxHQUFH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OENBek1oRjtDQTZNQyxBQVBELENBS3lELG1CQUFtQixHQUUzRTtTQUZZLG1DQUFtQztrREFBbkMsbUNBQW1DO2NBTC9DLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixJQUFJLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSxrQkFBa0IsRUFBRTtnQkFDMUQsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsbUNBQW1DLENBQUMsQ0FBQzthQUMvRTtzQ0FFMkIsc0JBQXNCO0FBR2xEO0lBS3FELG1EQUF1QztJQUN4Rix5Q0FBbUIsSUFBMkI7UUFBOUMsWUFBa0Qsa0JBQU0sSUFBSSxDQUFDLFNBQUc7UUFBN0MsVUFBSSxHQUFKLElBQUksQ0FBdUI7O0lBQWlCLENBQUM7a0hBRHZELCtCQUErQix1QkFDaEIsc0JBQXNCO3dFQURyQywrQkFBK0I7OzhDQUY3QixDQUFDLHNCQUFzQixDQUFDLCtCQUErQixDQUFDLENBQUM7MENBbE54RTtDQXNOQyxBQVBELENBS3FELGVBQWUsR0FFbkU7U0FGWSwrQkFBK0I7a0RBQS9CLCtCQUErQjtjQUwzQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsSUFBSSxFQUFFLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLEVBQUU7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixDQUFDLENBQUM7YUFDdkU7c0NBRTJCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCxcbiAgICBIb3N0TGlzdGVuZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc1xufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1xuICAgIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IsXG4gICAgSUN1c3RvbVZhbGlkYXRvckhvc3QsIGN1c3RvbVZhbGlkYXRvckZhY3RvcnksIEN1c3RvbVZhbGlkYXRvciwgUG9zaXRpb25pbmdQbGFjZW1lbnQsIFN1aUNvbXBvbmVudEZhY3RvcnksIEtleUNvZGVcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSURhdGVwaWNrZXJMb2NhbGVWYWx1ZXMsIFJlY3Vyc2l2ZVBhcnRpYWwsIFN1aUxvY2FsaXphdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vYmVoYXZpb3JzL2xvY2FsaXphdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb21wb25lbnRDb250cm9sbGVyLCBQb3B1cEFmdGVyT3BlbiwgUG9wdXBDb25maWcsIFBvcHVwVHJpZ2dlciB9IGZyb20gXCIuLi8uLi9wb3B1cC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRGF0ZXBpY2tlciwgRGF0ZXBpY2tlck1vZGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBDYWxlbmRhckNvbmZpZywgWWVhckNvbmZpZywgTW9udGhDb25maWcsIERhdGV0aW1lQ29uZmlnLCBUaW1lQ29uZmlnLCBEYXRlQ29uZmlnIH0gZnJvbSBcIi4uL2NsYXNzZXMvY2FsZW5kYXItY29uZmlnXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlEYXRlcGlja2VyXVwiLFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbGlkYXRvckZhY3RvcnkoU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSldXG59KVxuZXhwb3J0IGNsYXNzIFN1aURhdGVwaWNrZXJEaXJlY3RpdmVcbiAgICAgICBleHRlbmRzIFN1aVBvcHVwQ29tcG9uZW50Q29udHJvbGxlcjxTdWlEYXRlcGlja2VyPlxuICAgICAgIGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PERhdGU+LCBJQ3VzdG9tVmFsaWRhdG9ySG9zdCwgT25DaGFuZ2VzLCBQb3B1cEFmdGVyT3BlbiB7XG5cbiAgICBwcml2YXRlIF9zZWxlY3RlZERhdGU/OkRhdGU7XG5cbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkRGF0ZSgpOkRhdGUgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWREYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWREYXRlKGRhdGU6RGF0ZSB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWREYXRlQ2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbW9kZTpEYXRlcGlja2VyTW9kZTtcbiAgICBwdWJsaWMgY29uZmlnOkNhbGVuZGFyQ29uZmlnO1xuXG4gICAgQElucHV0KFwicGlja2VyTW9kZVwiKVxuICAgIHB1YmxpYyBnZXQgbW9kZSgpOkRhdGVwaWNrZXJNb2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtb2RlKG1vZGU6RGF0ZXBpY2tlck1vZGUpIHtcbiAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGUgfHwgRGF0ZXBpY2tlck1vZGUuRGF0ZXRpbWU7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fbW9kZSkge1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5ZZWFyOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IFllYXJDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuTW9udGg6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgTW9udGhDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRGF0ZXBpY2tlck1vZGUuRGF0ZTpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgRGF0ZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5EYXRldGltZTpcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZyA9IG5ldyBEYXRldGltZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBEYXRlcGlja2VyTW9kZS5UaW1lOlxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gbmV3IFRpbWVDb25maWcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGUpO1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlckluaXRpYWxEYXRlXCIpXG4gICAgcHVibGljIGluaXRpYWxEYXRlPzpEYXRlO1xuXG4gICAgQElucHV0KFwicGlja2VyTWF4RGF0ZVwiKVxuICAgIHB1YmxpYyBtYXhEYXRlPzpEYXRlO1xuXG4gICAgQElucHV0KFwicGlja2VyTWluRGF0ZVwiKVxuICAgIHB1YmxpYyBtaW5EYXRlPzpEYXRlO1xuXG4gICAgQElucHV0KFwicGlja2VyRmlyc3REYXlPZldlZWtcIilcbiAgICBwdWJsaWMgZmlyc3REYXlPZldlZWs/Om51bWJlcjtcblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcztcblxuICAgIEBJbnB1dChcInBpY2tlckxvY2FsZU92ZXJyaWRlc1wiKVxuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJRGF0ZXBpY2tlckxvY2FsZVZhbHVlcz47XG5cbiAgICBwdWJsaWMgZ2V0IGxvY2FsZVZhbHVlcygpOklEYXRlcGlja2VyTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5vdmVycmlkZTxcImRhdGVwaWNrZXJcIj4odGhpcy5fbG9jYWxlVmFsdWVzLCB0aGlzLmxvY2FsZU92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgQElucHV0KFwicGlja2VyUGxhY2VtZW50XCIpXG4gICAgcHVibGljIHNldCBwbGFjZW1lbnQocGxhY2VtZW50OlBvc2l0aW9uaW5nUGxhY2VtZW50KSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJwaWNrZXJUcmFuc2l0aW9uXCIpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dChcInBpY2tlclRyYW5zaXRpb25EdXJhdGlvblwiKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbkR1cmF0aW9uKGR1cmF0aW9uOm51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB9XG5cbiAgICBAT3V0cHV0KFwicGlja2VyU2VsZWN0ZWREYXRlQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uU2VsZWN0ZWREYXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxEYXRlPjtcblxuICAgIEBPdXRwdXQoXCJwaWNrZXJWYWxpZGF0b3JDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25WYWxpZGF0b3JDaGFuZ2U6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjb21wb25lbnRGYWN0b3J5OlN1aUNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgICAgICAgICAgcHVibGljIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb21wb25lbnRGYWN0b3J5LCBTdWlEYXRlcGlja2VyLCBuZXcgUG9wdXBDb25maWcoe1xuICAgICAgICAgICAgdHJpZ2dlcjogUG9wdXBUcmlnZ2VyLkZvY3VzLFxuICAgICAgICAgICAgcGxhY2VtZW50OiBQb3NpdGlvbmluZ1BsYWNlbWVudC5Cb3R0b21MZWZ0LFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJzY2FsZVwiLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGUgcG9wdXAgaXMgZHJhd24gY29ycmVjdGx5IChpLmUuIG5vIGJvcmRlcikuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMucG9wdXAuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBcInVpXCIpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnBvcHVwLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgXCJjYWxlbmRhclwiKTtcblxuICAgICAgICB0aGlzLm9uTG9jYWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuXG4gICAgICAgIHRoaXMub25TZWxlY3RlZERhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG4gICAgICAgIHRoaXMub25WYWxpZGF0b3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5tb2RlID0gRGF0ZXBpY2tlck1vZGUuRGF0ZXRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHBvcHVwT25PcGVuKCk6dm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UubG9jYWxlVmFsdWVzID0gdGhpcy5sb2NhbGVWYWx1ZXM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UuY3VycmVudERhdGUgPSB0aGlzLmluaXRpYWxEYXRlIHx8IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2Uuc2VsZWN0ZWREYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2Uuc2VydmljZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdERheU9mV2VlayAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UuZmlyc3REYXlPZldlZWsgPSB0aGlzLmZpcnN0RGF5T2ZXZWVrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEluc3RhbmNlLnNlcnZpY2UucmVzZXQoKTtcblxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLm9uRGF0ZUNoYW5nZS5zdWJzY3JpYmUoKGQ6RGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZDtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyh7IG1heERhdGUsIG1pbkRhdGUsIG1vZGUgfTpTaW1wbGVDaGFuZ2VzKTp2b2lkIHtcbiAgICAgICAgaWYgKG1heERhdGUgfHwgbWluRGF0ZSB8fCBtb2RlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVmFsaWRhdG9yQ2hhbmdlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5sb2NhbGl6YXRpb25TZXJ2aWNlLmdldCgpLmRhdGVwaWNrZXI7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRlKGM6QWJzdHJhY3RDb250cm9sKTpWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYy52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBXZSBwb3N0IHByb2Nlc3MgdGhlIG1pbiAmIG1heCBkYXRlIGJlY2F1c2Ugc29tZXRpbWVzIHRoaXMgcHV0cyB0aGUgZGF0ZSBvdXRzaWRlIG9mIHRoZSBhbGxvd2VkIHJhbmdlLlxuICAgICAgICAgICAgaWYgKHRoaXMubWluRGF0ZSAmJiB2YWx1ZSA8IHRoaXMubWluRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1aU1pbkRhdGU6IHsgcmVxdWlyZWQ6IHRoaXMubWluRGF0ZSwgYWN0dWFsOiB2YWx1ZSB9IH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1heERhdGUgJiYgdmFsdWUgPiB0aGlzLm1heERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzdWlNYXhEYXRlOiB7IHJlcXVpcmVkOiB0aGlzLm1heERhdGUsIGFjdHVhbDogdmFsdWUgfSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5ndWxhciBleHBlY3RzIG51bGxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW51bGwta2V5d29yZFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpEYXRlIHwgdW5kZWZpbmVkKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRJbnN0YW5jZS5zZXJ2aWNlLnNlbGVjdGVkRGF0ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbktleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5Fc2NhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURhdGVwaWNrZXJdXCIsXG4gICAgaG9zdDogeyBcIihwaWNrZXJTZWxlY3RlZERhdGVDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8RGF0ZSwgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBob3N0OlN1aURhdGVwaWNrZXJEaXJlY3RpdmUpIHsgc3VwZXIoaG9zdCk7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aURhdGVwaWNrZXJdXCIsXG4gICAgaG9zdDogeyBcIihwaWNrZXJWYWxpZGF0b3JDaGFuZ2UpXCI6IFwib25WYWxpZGF0b3JDaGFuZ2UoKVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsaWRhdG9yRmFjdG9yeShTdWlEYXRlcGlja2VyRGlyZWN0aXZlVmFsaWRhdG9yKV1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRGF0ZXBpY2tlckRpcmVjdGl2ZVZhbGlkYXRvciBleHRlbmRzIEN1c3RvbVZhbGlkYXRvcjxTdWlEYXRlcGlja2VyRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGhvc3Q6U3VpRGF0ZXBpY2tlckRpcmVjdGl2ZSkgeyBzdXBlcihob3N0KTsgfVxufVxuIl19