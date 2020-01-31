import { SuiComponentFactory } from "../../../misc/util/internal";
import { ModalConfig } from "../classes/modal-config";
import { ActiveModal } from "../classes/active-modal";
import * as i0 from "@angular/core";
export declare class SuiModalService {
    private _componentFactory;
    constructor(_componentFactory: SuiComponentFactory);
    open<T, U, V>(modal: ModalConfig<T, U, V>): ActiveModal<T, U, V>;
    static ɵfac: i0.ɵɵFactoryDef<SuiModalService>;
    static ɵprov: i0.ɵɵInjectableDef<SuiModalService>;
}
