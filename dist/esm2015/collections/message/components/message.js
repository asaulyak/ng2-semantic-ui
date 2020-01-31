import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TransitionController, Transition, TransitionDirection } from "../../../modules/transition/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../modules/transition/directives/transition";
function SuiMessage_div_0_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 3);
    i0.ɵɵlistener("click", function SuiMessage_div_0_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(2); return ctx_r2.dismiss(); });
    i0.ɵɵelementEnd();
} }
function SuiMessage_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, SuiMessage_div_0_i_1_Template, 1, 0, "i", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ui message ", ctx_r0.class, "");
    i0.ɵɵproperty("suiTransition", ctx_r0.transitionController);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isDismissable);
} }
const _c0 = ["*"];
export class SuiMessage {
    constructor() {
        this.isDismissable = true;
        this.onDismiss = new EventEmitter();
        this.isDismissed = false;
        this.transitionController = new TransitionController();
        this.transition = "fade";
        this.transitionDuration = 300;
        this.class = "";
    }
    dismiss() {
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, () => {
            this.isDismissed = true;
            this.onDismiss.emit(this);
        }));
    }
}
SuiMessage.ɵfac = function SuiMessage_Factory(t) { return new (t || SuiMessage)(); };
SuiMessage.ɵcmp = i0.ɵɵdefineComponent({ type: SuiMessage, selectors: [["sui-message"]], inputs: { isDismissable: "isDismissable", transition: "transition", transitionDuration: "transitionDuration", class: "class" }, outputs: { onDismiss: "dismiss" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "class", "suiTransition", 4, "ngIf"], [3, "suiTransition"], ["class", "close icon", 3, "click", 4, "ngIf"], [1, "close", "icon", 3, "click"]], template: function SuiMessage_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, SuiMessage_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isDismissed);
    } }, directives: [i1.NgIf, i2.SuiTransition], styles: [".ui.icon.visible.message[_ngcontent-%COMP%] {\n    display: flex !important;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiMessage, [{
        type: Component,
        args: [{
                selector: "sui-message",
                template: `
<div class="ui message {{ class }}" *ngIf="!isDismissed" [suiTransition]="transitionController">
    <i class="close icon" *ngIf="isDismissable" (click)="dismiss()"></i>
    <ng-content></ng-content>
</div>
`,
                styles: [`
/* Fix for CSS Bug */
.ui.icon.visible.message {
    display: flex !important;
}
`]
            }]
    }], function () { return []; }, { isDismissable: [{
            type: Input
        }], onDismiss: [{
            type: Output,
            args: ["dismiss"]
        }], transition: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], class: [{
            type: Input,
            args: ["class"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL21lc3NhZ2UvY29tcG9uZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7SUFVekcsNEJBQW9FO0lBQXhCLGlMQUFtQjtJQUFDLGlCQUFJOzs7SUFEeEUsOEJBQ0k7SUFBQSw2REFBZ0U7SUFDaEUsa0JBQVk7SUFDaEIsaUJBQU07OztJQUhELDBEQUE4QjtJQUFzQiwyREFBc0M7SUFDckUsZUFBcUI7SUFBckIsMkNBQXFCOzs7QUFXL0MsTUFBTSxPQUFPLFVBQVU7SUFvQm5CO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBRWhELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUU5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sT0FBTztRQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtZQUNySCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7b0VBdENRLFVBQVU7K0NBQVYsVUFBVTs7UUFadkIsMkRBQ0k7O1FBRGdDLHVDQUFvQjs7a0RBWTNDLFVBQVU7Y0FmdEIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7O0NBS2I7Z0JBQ0csTUFBTSxFQUFFLENBQUM7Ozs7O0NBS1osQ0FBQzthQUNEOztrQkFFSSxLQUFLOztrQkFHTCxNQUFNO21CQUFDLFNBQVM7O2tCQU9oQixLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkRpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9tb2R1bGVzL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTWVzc2FnZSB7XG4gICAgZGlzbWlzcygpOnZvaWQ7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1tZXNzYWdlXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBtZXNzYWdlIHt7IGNsYXNzIH19XCIgKm5nSWY9XCIhaXNEaXNtaXNzZWRcIiBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiPlxuICAgIDxpIGNsYXNzPVwiY2xvc2UgaWNvblwiICpuZ0lmPVwiaXNEaXNtaXNzYWJsZVwiIChjbGljayk9XCJkaXNtaXNzKClcIj48L2k+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIEZpeCBmb3IgQ1NTIEJ1ZyAqL1xuLnVpLmljb24udmlzaWJsZS5tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNZXNzYWdlIGltcGxlbWVudHMgSU1lc3NhZ2Uge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzbWlzc2FibGU6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJkaXNtaXNzXCIpXG4gICAgcHVibGljIG9uRGlzbWlzczpFdmVudEVtaXR0ZXI8U3VpTWVzc2FnZT47XG5cbiAgICBwdWJsaWMgaXNEaXNtaXNzZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbkR1cmF0aW9uOm51bWJlcjtcblxuICAgIEBJbnB1dChcImNsYXNzXCIpXG4gICAgcHVibGljIGNsYXNzOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzRGlzbWlzc2FibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8U3VpTWVzc2FnZT4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzbWlzc2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlciA9IG5ldyBUcmFuc2l0aW9uQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBcImZhZGVcIjtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSAzMDA7XG5cbiAgICAgICAgdGhpcy5jbGFzcyA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc21pc3MoKTp2b2lkIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5hbmltYXRlKG5ldyBUcmFuc2l0aW9uKHRoaXMudHJhbnNpdGlvbiwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24uT3V0LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzbWlzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25EaXNtaXNzLmVtaXQodGhpcyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iXX0=