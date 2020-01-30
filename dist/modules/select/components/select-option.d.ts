import { EventEmitter, ViewContainerRef, Renderer2, ElementRef, ChangeDetectorRef } from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown/internal";
import { HandledEvent } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
export declare class SuiSelectOption<T> extends SuiDropdownMenuItem {
    changeDetector: ChangeDetectorRef;
    readonly hasClasses: boolean;
    value: T;
    onSelected: EventEmitter<T>;
    isActive: boolean;
    renderedText?: string;
    set formatter(formatter: (obj: T) => string);
    usesTemplate: boolean;
    templateSibling: ViewContainerRef;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef);
    onClick(e: HandledEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiSelectOption<any>>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiSelectOption<any>, "sui-select-option", never, { "value": "value"; }, { "onSelected": "onSelected"; }, never>;
}
