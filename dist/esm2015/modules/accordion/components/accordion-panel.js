import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { TransitionController, Transition } from "../../transition/internal";
import * as i0 from "@angular/core";
import * as i1 from "../../collapse/directives/collapse";
import * as i2 from "../../transition/directives/transition";
const _c0 = [[["", "title", ""]], [["", "content", ""]]];
const _c1 = ["[title]", "[content]"];
export class SuiAccordionPanel {
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.isOpenChange = new EventEmitter(false);
    }
    set service(service) {
        this._service = service;
        this._changeDetector.detectChanges();
    }
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        // Convert to boolean (fixes false != undefined)
        const isOpen = !!value;
        if (isOpen !== this.isOpen) {
            // Only update if the value has changed.
            this._isOpen = isOpen;
            if (isOpen && this._service) {
                // If we are opening this panel, we must close the other ones.
                this._service.closeOtherPanels(this);
            }
            this.isOpenChange.emit(this.isOpen);
            // Cancel all current animations, and fade the contents. The direction is automatic.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration));
        }
    }
    get transition() {
        if (this._service) {
            return this._service.transition;
        }
        return "fade";
    }
    get transitionDuration() {
        if (this._service) {
            // Return the service defined transition duration.
            return this._service.transitionDuration;
        }
        // Revert to instantaneous if the service is not yet loaded.
        return 0;
    }
    toggle() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
SuiAccordionPanel.ɵfac = function SuiAccordionPanel_Factory(t) { return new (t || SuiAccordionPanel)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SuiAccordionPanel.ɵcmp = i0.ɵɵdefineComponent({ type: SuiAccordionPanel, selectors: [["sui-accordion-panel"]], inputs: { isDisabled: "isDisabled", isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, exportAs: ["suiAccordionPanel"], ngContentSelectors: _c1, decls: 5, vars: 7, consts: [[1, "title", 3, "click"], [3, "suiCollapse", "collapseDuration"], [1, "content", 3, "suiTransition"]], template: function SuiAccordionPanel_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function SuiAccordionPanel_Template_div_click_0_listener($event) { return ctx.toggle(); });
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵprojection(4, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.isOpen);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("suiCollapse", !ctx.isOpen)("collapseDuration", ctx.transitionDuration);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("active", ctx.isOpen);
        i0.ɵɵproperty("suiTransition", ctx.transitionController);
    } }, directives: [i1.SuiCollapse, i2.SuiTransition], styles: [".content[_ngcontent-%COMP%] {\n    padding: .5em 0 1em;\n}\n\n\n[_nghost-%COMP%]:first-child   .title[_ngcontent-%COMP%] {\n    border-top: none;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiAccordionPanel, [{
        type: Component,
        args: [{
                selector: "sui-accordion-panel",
                exportAs: "suiAccordionPanel",
                template: `
<!-- Title -->
<div class="title" [class.active]="isOpen" (click)="toggle()" >
    <ng-content select="[title]"></ng-content>
</div>
<!-- Content -->
<div [suiCollapse]="!isOpen" [collapseDuration]="transitionDuration">
    <div class="content" [class.active]="isOpen" [suiTransition]="transitionController">
        <ng-content select="[content]"></ng-content>
    </div>
</div>
`,
                styles: [`
/* Manual style as Semantic UI relies on > selector */
.content {
    padding: .5em 0 1em;
}

/* Another > selector fix */
:host:first-child .title {
    border-top: none;
}
`]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { isDisabled: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], isOpenChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLXBhbmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQTZCN0UsTUFBTSxPQUFPLGlCQUFpQjtJQTREMUIsWUFBb0IsZUFBaUM7UUFBakMsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQTVERCxJQUFXLE9BQU8sQ0FBQyxPQUEyQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFPRCxJQUNXLE1BQU07UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDM0IsZ0RBQWdEO1FBQ2hELE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFdkIsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4Qix3Q0FBd0M7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFFdEIsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDekIsOERBQThEO2dCQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBDLG9GQUFvRjtZQUNwRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7U0FDL0Y7SUFDTCxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ2pCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7U0FDbkM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBVyxrQkFBa0I7UUFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2Ysa0RBQWtEO1lBQ2xELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztTQUMzQztRQUNELDREQUE0RDtRQUM1RCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFZTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDOUI7SUFDTCxDQUFDOztrRkF2RVEsaUJBQWlCO3NEQUFqQixpQkFBaUI7O1FBdEI5Qiw4QkFDSTtRQUR1QyxpR0FBUyxZQUFRLElBQUM7UUFDekQsa0JBQTZCO1FBQ2pDLGlCQUFNO1FBRU4sOEJBQ0k7UUFBQSw4QkFDSTtRQUFBLHFCQUErQjtRQUNuQyxpQkFBTTtRQUNWLGlCQUFNOztRQVJhLG9DQUF1QjtRQUlyQyxlQUF1QjtRQUF2Qix5Q0FBdUIsNENBQUE7UUFDSCxlQUF1QjtRQUF2QixvQ0FBdUI7UUFBQyx3REFBc0M7O2tEQWlCMUUsaUJBQWlCO2NBM0I3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7OztDQVdiO2dCQUNHLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7O0NBVVosQ0FBQzthQUNEOztrQkFXSSxLQUFLOztrQkFLTCxLQUFLOztrQkEwQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FjY29yZGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uQ29udHJvbGxlciwgVHJhbnNpdGlvbiB9IGZyb20gXCIuLi8uLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1hY2NvcmRpb24tcGFuZWxcIixcbiAgICBleHBvcnRBczogXCJzdWlBY2NvcmRpb25QYW5lbFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFRpdGxlIC0tPlxuPGRpdiBjbGFzcz1cInRpdGxlXCIgW2NsYXNzLmFjdGl2ZV09XCJpc09wZW5cIiAoY2xpY2spPVwidG9nZ2xlKClcIiA+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3RpdGxlXVwiPjwvbmctY29udGVudD5cbjwvZGl2PlxuPCEtLSBDb250ZW50IC0tPlxuPGRpdiBbc3VpQ29sbGFwc2VdPVwiIWlzT3BlblwiIFtjb2xsYXBzZUR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCIgW2NsYXNzLmFjdGl2ZV09XCJpc09wZW5cIiBbc3VpVHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uQ29udHJvbGxlclwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogTWFudWFsIHN0eWxlIGFzIFNlbWFudGljIFVJIHJlbGllcyBvbiA+IHNlbGVjdG9yICovXG4uY29udGVudCB7XG4gICAgcGFkZGluZzogLjVlbSAwIDFlbTtcbn1cblxuLyogQW5vdGhlciA+IHNlbGVjdG9yIGZpeCAqL1xuOmhvc3Q6Zmlyc3QtY2hpbGQgLnRpdGxlIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uUGFuZWwge1xuICAgIHByaXZhdGUgX3NlcnZpY2U6U3VpQWNjb3JkaW9uU2VydmljZTtcblxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ29udHJvbGxlcjpUcmFuc2l0aW9uQ29udHJvbGxlcjtcblxuICAgIHB1YmxpYyBzZXQgc2VydmljZShzZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IHNlcnZpY2U7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9pc09wZW46Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc09wZW4oKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzT3Blbih2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdG8gYm9vbGVhbiAoZml4ZXMgZmFsc2UgIT0gdW5kZWZpbmVkKVxuICAgICAgICBjb25zdCBpc09wZW4gPSAhIXZhbHVlO1xuXG4gICAgICAgIGlmIChpc09wZW4gIT09IHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSBpZiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICB0aGlzLl9pc09wZW4gPSBpc09wZW47XG5cbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgdGhpcy5fc2VydmljZSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBvcGVuaW5nIHRoaXMgcGFuZWwsIHdlIG11c3QgY2xvc2UgdGhlIG90aGVyIG9uZXMuXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VydmljZS5jbG9zZU90aGVyUGFuZWxzKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0aGlzLmlzT3Blbik7XG5cbiAgICAgICAgICAgIC8vIENhbmNlbCBhbGwgY3VycmVudCBhbmltYXRpb25zLCBhbmQgZmFkZSB0aGUgY29udGVudHMuIFRoZSBkaXJlY3Rpb24gaXMgYXV0b21hdGljLlxuICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQ29udHJvbGxlci5zdG9wQWxsKCk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24odGhpcy50cmFuc2l0aW9uLCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uKCk6c3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJmYWRlXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uRHVyYXRpb24oKTpudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5fc2VydmljZSkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBzZXJ2aWNlIGRlZmluZWQgdHJhbnNpdGlvbiBkdXJhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXZlcnQgdG8gaW5zdGFudGFuZW91cyBpZiB0aGUgc2VydmljZSBpcyBub3QgeWV0IGxvYWRlZC5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGlzT3BlbkNoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25Db250cm9sbGVyID0gbmV3IFRyYW5zaXRpb25Db250cm9sbGVyKGZhbHNlKTtcblxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==