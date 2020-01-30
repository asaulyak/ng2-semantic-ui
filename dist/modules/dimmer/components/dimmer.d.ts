import { EventEmitter, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiTransition } from "../../transition/internal";
import * as i0 from "@angular/core";
export declare class SuiDimmer extends SuiTransition {
    readonly hasClasses: boolean;
    private _transitionController;
    private _isDimmed;
    get isDimmed(): boolean;
    set isDimmed(value: boolean);
    isDimmedChange: EventEmitter<boolean>;
    isClickable: boolean;
    transition: string;
    transitionDuration: number;
    wrapContent: boolean;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiDimmer>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiDimmer, "sui-dimmer", never, { "isDimmed": "isDimmed"; "isClickable": "isClickable"; "transition": "transition"; "transitionDuration": "transitionDuration"; "wrapContent": "wrapContent"; }, { "isDimmedChange": "isDimmedChange"; }, never>;
}
