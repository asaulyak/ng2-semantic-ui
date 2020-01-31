import { Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDimmer } from "../../dimmer/internal";
import * as i0 from "@angular/core";
export declare class SuiModalDimmer extends SuiDimmer {
    readonly hasClasses: boolean;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDef<SuiModalDimmer>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiModalDimmer, "sui-modal-dimmer", never, {}, {}, never>;
}
