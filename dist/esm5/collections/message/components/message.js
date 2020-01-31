import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TransitionController, Transition, TransitionDirection } from "../../../modules/transition/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../modules/transition/directives/transition";
function SuiMessage_div_0_i_1_Template(rf, ctx) { if (rf & 1) {
    var _r120 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 3);
    i0.ɵɵlistener("click", function SuiMessage_div_0_i_1_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r120); var ctx_r119 = i0.ɵɵnextContext(2); return ctx_r119.dismiss(); });
    i0.ɵɵelementEnd();
} }
function SuiMessage_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, SuiMessage_div_0_i_1_Template, 1, 0, "i", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r117 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ui message ", ctx_r117.class, "");
    i0.ɵɵproperty("suiTransition", ctx_r117.transitionController);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r117.isDismissable);
} }
var _c0 = ["*"];
var SuiMessage = /** @class */ (function () {
    function SuiMessage() {
        this.isDismissable = true;
        this.onDismiss = new EventEmitter();
        this.isDismissed = false;
        this.transitionController = new TransitionController();
        this.transition = "fade";
        this.transitionDuration = 300;
        this.class = "";
    }
    SuiMessage.prototype.dismiss = function () {
        var _this = this;
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, function () {
            _this.isDismissed = true;
            _this.onDismiss.emit(_this);
        }));
    };
    SuiMessage.ɵfac = function SuiMessage_Factory(t) { return new (t || SuiMessage)(); };
    SuiMessage.ɵcmp = i0.ɵɵdefineComponent({ type: SuiMessage, selectors: [["sui-message"]], inputs: { isDismissable: "isDismissable", transition: "transition", transitionDuration: "transitionDuration", class: "class" }, outputs: { onDismiss: "dismiss" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "class", "suiTransition", 4, "ngIf"], [3, "suiTransition"], ["class", "close icon", 3, "click", 4, "ngIf"], [1, "close", "icon", 3, "click"]], template: function SuiMessage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, SuiMessage_div_0_Template, 3, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isDismissed);
        } }, directives: [i1.NgIf, i2.SuiTransition], styles: [".ui.icon.visible.message[_ngcontent-%COMP%] {\n    display: flex !important;\n}"] });
    return SuiMessage;
}());
export { SuiMessage };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiMessage, [{
        type: Component,
        args: [{
                selector: "sui-message",
                template: "\n<div class=\"ui message {{ class }}\" *ngIf=\"!isDismissed\" [suiTransition]=\"transitionController\">\n    <i class=\"close icon\" *ngIf=\"isDismissable\" (click)=\"dismiss()\"></i>\n    <ng-content></ng-content>\n</div>\n",
                styles: ["\n/* Fix for CSS Bug */\n.ui.icon.visible.message {\n    display: flex !important;\n}\n"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL21lc3NhZ2UvY29tcG9uZW50cy9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7SUFVekcsNEJBQW9FO0lBQXhCLHFMQUFtQjtJQUFDLGlCQUFJOzs7SUFEeEUsOEJBQ0k7SUFBQSw2REFBZ0U7SUFDaEUsa0JBQVk7SUFDaEIsaUJBQU07OztJQUhELDREQUE4QjtJQUFzQiw2REFBc0M7SUFDckUsZUFBcUI7SUFBckIsNkNBQXFCOzs7QUFKL0M7SUFtQ0k7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFFaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDO1FBRTlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDLEdBQUcsRUFBRTtZQUNoSCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzt3RUF0Q1EsVUFBVTttREFBVixVQUFVOztZQVp2QiwyREFDSTs7WUFEZ0MsdUNBQW9COztxQkFWeEQ7Q0E2REMsQUF0REQsSUFzREM7U0F2Q1ksVUFBVTtrREFBVixVQUFVO2NBZnRCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLG1PQUtiO2dCQUNHLE1BQU0sRUFBRSxDQUFDLHlGQUtaLENBQUM7YUFDRDs7a0JBRUksS0FBSzs7a0JBR0wsTUFBTTttQkFBQyxTQUFTOztrQkFPaEIsS0FBSzs7a0JBR0wsS0FBSzs7a0JBR0wsS0FBSzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIsIFRyYW5zaXRpb24sIFRyYW5zaXRpb25EaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lc3NhZ2Uge1xuICAgIGRpc21pc3MoKTp2b2lkO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbWVzc2FnZVwiLFxuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidWkgbWVzc2FnZSB7eyBjbGFzcyB9fVwiICpuZ0lmPVwiIWlzRGlzbWlzc2VkXCIgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIj5cbiAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIiAqbmdJZj1cImlzRGlzbWlzc2FibGVcIiAoY2xpY2spPVwiZGlzbWlzcygpXCI+PC9pPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4vKiBGaXggZm9yIENTUyBCdWcgKi9cbi51aS5pY29uLnZpc2libGUubWVzc2FnZSB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTWVzc2FnZSBpbXBsZW1lbnRzIElNZXNzYWdlIHtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc21pc3NhYmxlOmJvb2xlYW47XG5cbiAgICBAT3V0cHV0KFwiZGlzbWlzc1wiKVxuICAgIHB1YmxpYyBvbkRpc21pc3M6RXZlbnRFbWl0dGVyPFN1aU1lc3NhZ2U+O1xuXG4gICAgcHVibGljIGlzRGlzbWlzc2VkOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBASW5wdXQoXCJjbGFzc1wiKVxuICAgIHB1YmxpYyBjbGFzczpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0Rpc21pc3NhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPFN1aU1lc3NhZ2U+KCk7XG5cbiAgICAgICAgdGhpcy5pc0Rpc21pc3NlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJmYWRlXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gMzAwO1xuXG4gICAgICAgIHRoaXMuY2xhc3MgPSBcIlwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNtaXNzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShuZXcgVHJhbnNpdGlvbih0aGlzLnRyYW5zaXRpb24sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Rpc21pc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KHRoaXMpO1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuIl19