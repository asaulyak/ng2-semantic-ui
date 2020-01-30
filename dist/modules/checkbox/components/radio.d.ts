import { EventEmitter } from "@angular/core";
import { ICustomValueAccessorHost, CustomValueAccessor } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
export declare class SuiRadio<T> implements ICustomValueAccessorHost<T> {
    readonly hasClasses: boolean;
    name: string;
    value: T;
    isChecked: boolean;
    currentValue: T;
    onCurrentValueChange: EventEmitter<T>;
    onTouched: EventEmitter<void>;
    isDisabled: boolean;
    isReadonly: boolean;
    private _radioElement;
    get checkedAttribute(): string | undefined;
    get isDisabledAttribute(): string | undefined;
    constructor();
    onMouseDown(e: MouseEvent): void;
    onClick(): void;
    onFocusOut(): void;
    update(): void;
    writeValue(value: T): void;
    private focusRadio;
    static ɵfac: i0.ɵɵFactoryDef<SuiRadio<any>>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiRadio<any>, "sui-radio-button", never, { "name": "name"; "value": "value"; "isDisabled": "isDisabled"; "isReadonly": "isReadonly"; }, { "onCurrentValueChange": "currentValueChange"; "onTouched": "touched"; }, never>;
}
export declare class SuiRadioValueAccessor<T> extends CustomValueAccessor<T, SuiRadio<T>> {
    constructor(host: SuiRadio<T>);
    static ɵfac: i0.ɵɵFactoryDef<SuiRadioValueAccessor<any>>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiRadioValueAccessor<any>, "sui-radio-button", never, {}, {}, never>;
}
