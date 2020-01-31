import { ElementRef, Renderer2, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { ICustomValueAccessorHost, CustomValueAccessor, ICustomValidatorHost, CustomValidator, PositioningPlacement, SuiComponentFactory } from "../../../misc/util/internal";
import { IDatepickerLocaleValues, RecursivePartial, SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiPopupComponentController, PopupAfterOpen } from "../../popup/internal";
import { SuiDatepicker, DatepickerMode } from "../components/datepicker";
import { CalendarConfig } from "../classes/calendar-config";
import * as i0 from "@angular/core";
export declare class SuiDatepickerDirective extends SuiPopupComponentController<SuiDatepicker> implements ICustomValueAccessorHost<Date>, ICustomValidatorHost, OnChanges, PopupAfterOpen {
    localizationService: SuiLocalizationService;
    private _selectedDate?;
    get selectedDate(): Date | undefined;
    set selectedDate(date: Date | undefined);
    private _mode;
    config: CalendarConfig;
    get mode(): DatepickerMode;
    set mode(mode: DatepickerMode);
    initialDate?: Date;
    maxDate?: Date;
    minDate?: Date;
    firstDayOfWeek?: number;
    private _localeValues;
    localeOverrides: RecursivePartial<IDatepickerLocaleValues>;
    get localeValues(): IDatepickerLocaleValues;
    set placement(placement: PositioningPlacement);
    set transition(transition: string);
    set transitionDuration(duration: number);
    onSelectedDateChange: EventEmitter<Date>;
    onValidatorChange: EventEmitter<void>;
    constructor(renderer: Renderer2, element: ElementRef, componentFactory: SuiComponentFactory, localizationService: SuiLocalizationService);
    popupOnOpen(): void;
    ngOnChanges({ maxDate, minDate, mode }: SimpleChanges): void;
    private onLocaleUpdate;
    validate(c: AbstractControl): ValidationErrors | null;
    writeValue(value: Date | undefined): void;
    onKeyDown(e: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiDatepickerDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiDatepickerDirective, "[suiDatepicker]", never, { "mode": "pickerMode"; "initialDate": "pickerInitialDate"; "maxDate": "pickerMaxDate"; "minDate": "pickerMinDate"; "firstDayOfWeek": "pickerFirstDayOfWeek"; "localeOverrides": "pickerLocaleOverrides"; "placement": "pickerPlacement"; "transition": "pickerTransition"; "transitionDuration": "pickerTransitionDuration"; }, { "onSelectedDateChange": "pickerSelectedDateChange"; "onValidatorChange": "pickerValidatorChange"; }, never>;
}
export declare class SuiDatepickerDirectiveValueAccessor extends CustomValueAccessor<Date, SuiDatepickerDirective> {
    host: SuiDatepickerDirective;
    constructor(host: SuiDatepickerDirective);
    static ɵfac: i0.ɵɵFactoryDef<SuiDatepickerDirectiveValueAccessor>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiDatepickerDirectiveValueAccessor, "[suiDatepicker]", never, {}, {}, never>;
}
export declare class SuiDatepickerDirectiveValidator extends CustomValidator<SuiDatepickerDirective> {
    host: SuiDatepickerDirective;
    constructor(host: SuiDatepickerDirective);
    static ɵfac: i0.ɵɵFactoryDef<SuiDatepickerDirectiveValidator>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiDatepickerDirectiveValidator, "[suiDatepicker]", never, {}, {}, never>;
}
