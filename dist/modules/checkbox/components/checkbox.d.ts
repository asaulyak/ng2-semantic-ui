import { EventEmitter } from "@angular/core";
import { ICustomValueAccessorHost, CustomValueAccessor } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
export declare class SuiCheckbox implements ICustomValueAccessorHost<boolean> {
    readonly hasClasses: boolean;
    name: string;
    isChecked: boolean;
    onCheckChange: EventEmitter<boolean>;
    onTouched: EventEmitter<void>;
    isDisabled: boolean;
    isReadonly: boolean;
    get checkedAttribute(): string | undefined;
    get isDisabledAttribute(): string | undefined;
    private _checkboxElement;
    constructor();
    onMouseDown(e: MouseEvent): void;
    onClick(): void;
    onFocusOut(): void;
    toggle(): void;
    writeValue(value: boolean): void;
    private focusCheckbox;
    static ɵfac: i0.ɵɵFactoryDef<SuiCheckbox>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiCheckbox, "sui-checkbox", ["suiCheckbox"], { "name": "name"; "isDisabled": "isDisabled"; "isReadonly": "isReadonly"; }, { "onCheckChange": "checkChange"; "onTouched": "touched"; }, never>;
}
export declare class SuiCheckboxValueAccessor extends CustomValueAccessor<boolean, SuiCheckbox> {
    constructor(host: SuiCheckbox);
    static ɵfac: i0.ɵɵFactoryDef<SuiCheckboxValueAccessor>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiCheckboxValueAccessor, "sui-checkbox", never, {}, {}, never>;
}
