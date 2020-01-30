import { EventEmitter, ViewContainerRef, Renderer2, ElementRef, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { SuiTransition } from "../../transition/internal";
import { HandledEvent, SuiComponentFactory } from "../../../misc/util/internal";
import { IOptionContext } from "../classes/select-base";
import * as i0 from "@angular/core";
export declare class SuiMultiSelectLabel<T> extends SuiTransition {
    componentFactory: SuiComponentFactory;
    readonly hasClasses: boolean;
    private _transitionController;
    value: T;
    query?: string;
    onDeselected: EventEmitter<T>;
    formatter: (obj: T) => string;
    private _template?;
    get template(): TemplateRef<IOptionContext<T>> | undefined;
    set template(template: TemplateRef<IOptionContext<T>> | undefined);
    templateSibling: ViewContainerRef;
    constructor(renderer: Renderer2, element: ElementRef, changeDetector: ChangeDetectorRef, componentFactory: SuiComponentFactory);
    deselectOption(e: HandledEvent): void;
    onClick(e: HandledEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiMultiSelectLabel<any>>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiMultiSelectLabel<any>, "sui-multi-select-label", never, { "value": "value"; "query": "query"; "formatter": "formatter"; "template": "template"; }, { "onDeselected": "deselected"; }, never>;
}
