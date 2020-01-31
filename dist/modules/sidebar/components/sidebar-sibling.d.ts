import { ElementRef, Renderer2 } from "@angular/core";
import { SidebarService } from "../services/sidebar.service";
import * as i0 from "@angular/core";
export declare class SuiSidebarSibling {
    private _renderer;
    private _element;
    private _service;
    get service(): SidebarService;
    set service(service: SidebarService);
    isDimmedWhenVisible: boolean;
    get isVisible(): boolean;
    get isDimmed(): boolean;
    readonly hasClasses: boolean;
    constructor(_renderer: Renderer2, _element: ElementRef);
    private updateTransform;
    onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiSidebarSibling>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiSidebarSibling, "sui-sidebar-sibling", never, { "isDimmedWhenVisible": "isDimmedWhenVisible"; }, {}, never>;
}
