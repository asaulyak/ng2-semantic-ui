import { ElementRef, OnDestroy, Renderer2 } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, IPopupConfig } from "./popup-config";
import { SuiPopup } from "../components/popup";
import * as i0 from "@angular/core";
export interface IPopup {
    open(): void;
    close(): void;
    toggle(): void;
}
export declare abstract class SuiPopupController implements IPopup, OnDestroy {
    protected _renderer: Renderer2;
    protected _element: ElementRef;
    protected _componentFactory: SuiComponentFactory;
    private _componentRef;
    get popup(): SuiPopup;
    private _openingTimeout;
    private _documentListener;
    constructor(_renderer: Renderer2, _element: ElementRef, _componentFactory: SuiComponentFactory, config: PopupConfig);
    configure(config?: IPopupConfig): void;
    openDelayed(): void;
    open(): void;
    close(): void;
    toggleDelayed(): void;
    toggle(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onClick(): void;
    private onDocumentClick;
    onFocusIn(): void;
    onFocusOut(e: any): void;
    protected cleanup(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiPopupController>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiPopupController, never, never, {}, {}, never>;
}
