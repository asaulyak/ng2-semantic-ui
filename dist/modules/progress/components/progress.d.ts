import * as i0 from "@angular/core";
export declare class SuiProgress {
    readonly hasClasses: boolean;
    private _value;
    private _maximum;
    private _precision;
    private _overrideSuccess;
    autoSuccess: boolean;
    showProgress: boolean;
    get value(): number;
    set value(value: number);
    get maximum(): number;
    set maximum(value: number);
    get precision(): number;
    set precision(value: number);
    get reachedMaximum(): boolean;
    get percentage(): string;
    set classValue(classes: string);
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<SuiProgress>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiProgress, "sui-progress", never, { "autoSuccess": "autoSuccess"; "showProgress": "showProgress"; "value": "value"; "maximum": "maximum"; "precision": "precision"; "classValue": "class"; }, {}, never>;
}
