import { EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class SuiTabHeader {
    readonly hasClasses: boolean;
    id: string;
    private _isActive;
    isActiveChange: EventEmitter<boolean>;
    isActiveExternalChange: EventEmitter<boolean>;
    onActivate: EventEmitter<void>;
    onDeactivate: EventEmitter<void>;
    get isActive(): boolean;
    set isActive(active: boolean);
    private _isDisabled;
    get isDisabled(): boolean;
    set isDisabled(disabled: boolean);
    constructor();
    setActiveState(active: boolean): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiTabHeader>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiTabHeader, "[suiTabHeader]", never, { "id": "suiTabHeader"; "isActive": "isActive"; "isDisabled": "isDisabled"; }, { "isActiveChange": "isActiveChange"; "onActivate": "activate"; "onDeactivate": "deactivate"; }, never>;
}
