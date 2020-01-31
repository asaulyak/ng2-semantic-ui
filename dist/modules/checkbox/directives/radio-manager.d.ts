import { AfterContentInit, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class SuiRadioManager<T> implements AfterContentInit {
    element: ElementRef;
    isNested: boolean;
    private _subManagers;
    private _renderedRadios;
    private _radioSubs;
    constructor(element: ElementRef);
    ngAfterContentInit(): void;
    private updateNesting;
    private updateRadios;
    static ɵfac: i0.ɵɵFactoryDef<SuiRadioManager<any>>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiRadioManager<any>, "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]", never, {}, {}, ["_subManagers", "_renderedRadios"]>;
}
