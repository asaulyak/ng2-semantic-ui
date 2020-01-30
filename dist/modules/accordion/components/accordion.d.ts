import { QueryList, AfterContentInit } from "@angular/core";
import { SuiAccordionPanel } from "./accordion-panel";
import { SuiAccordionService } from "../services/accordion.service";
import * as i0 from "@angular/core";
export declare class SuiAccordion implements AfterContentInit {
    readonly hasClasses: boolean;
    get closeOthers(): boolean;
    set closeOthers(value: boolean);
    set transition(transition: string);
    set transitionDuration(duration: number);
    protected _service: SuiAccordionService;
    protected _panels: QueryList<SuiAccordionPanel>;
    constructor();
    ngAfterContentInit(): void;
    updatePanels(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiAccordion>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiAccordion, "sui-accordion", never, { "closeOthers": "closeOthers"; "transition": "transition"; "transitionDuration": "transitionDuration"; }, {}, ["_panels"]>;
}
