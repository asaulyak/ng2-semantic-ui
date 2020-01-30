import { EventEmitter, Renderer2, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class SuiSelectSearch {
    private _renderer;
    private _element;
    readonly hasClasses: boolean;
    readonly autoComplete: string;
    set query(query: string);
    onQueryUpdated: EventEmitter<string>;
    onQueryKeyDown: EventEmitter<KeyboardEvent>;
    constructor(_renderer: Renderer2, _element: ElementRef);
    updateQuery(query: string): void;
    onKeyDown(e: KeyboardEvent): void;
    focus(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiSelectSearch>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiSelectSearch, "input[suiSelectSearch]", never, {}, {}, never>;
}
