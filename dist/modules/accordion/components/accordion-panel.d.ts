import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import { SuiAccordionService } from "../services/accordion.service";
import { TransitionController } from "../../transition/internal";
import * as i0 from "@angular/core";
export declare class SuiAccordionPanel {
    private _changeDetector;
    private _service;
    transitionController: TransitionController;
    set service(service: SuiAccordionService);
    isDisabled: boolean;
    private _isOpen;
    get isOpen(): boolean;
    set isOpen(value: boolean);
    get transition(): string;
    get transitionDuration(): number;
    isOpenChange: EventEmitter<boolean>;
    constructor(_changeDetector: ChangeDetectorRef);
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiAccordionPanel>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiAccordionPanel, "sui-accordion-panel", ["suiAccordionPanel"], { "isDisabled": "isDisabled"; "isOpen": "isOpen"; }, { "isOpenChange": "isOpenChange"; }, never>;
}
