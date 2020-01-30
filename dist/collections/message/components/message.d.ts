import { EventEmitter } from "@angular/core";
import { TransitionController } from "../../../modules/transition/internal";
import * as i0 from "@angular/core";
export interface IMessage {
    dismiss(): void;
}
export declare class SuiMessage implements IMessage {
    isDismissable: boolean;
    onDismiss: EventEmitter<SuiMessage>;
    isDismissed: boolean;
    transitionController: TransitionController;
    transition: string;
    transitionDuration: number;
    class: string;
    constructor();
    dismiss(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiMessage>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiMessage, "sui-message", never, { "isDismissable": "isDismissable"; "transition": "transition"; "transitionDuration": "transitionDuration"; "class": "class"; }, { "onDismiss": "dismiss"; }, never>;
}
