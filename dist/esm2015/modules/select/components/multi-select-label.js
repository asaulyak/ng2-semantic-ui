import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef, TemplateRef } from "@angular/core";
import { SuiTransition, TransitionController, Transition, TransitionDirection } from "../../transition/internal";
import { HandledEvent, SuiComponentFactory } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "../../../misc/util/internal";
import * as i2 from "@angular/common";
const _c0 = ["templateSibling"];
function SuiMultiSelectLabel_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const ctx_r101 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r101.formatter(ctx_r101.value), i0.ɵɵsanitizeHtml);
} }
// See https://github.com/Microsoft/TypeScript/issues/13449.
const templateRef = TemplateRef;
export class SuiMultiSelectLabel extends SuiTransition {
    constructor(renderer, element, changeDetector, componentFactory) {
        super(renderer, element, changeDetector);
        this.componentFactory = componentFactory;
        // Initialise transition functionality.
        this._transitionController = new TransitionController(false, "inline-block");
        this.setTransitionController(this._transitionController);
        this.onDeselected = new EventEmitter();
        this.hasClasses = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
    }
    get template() {
        return this._template;
    }
    set template(template) {
        this._template = template;
        if (this.template) {
            this.componentFactory.createView(this.templateSibling, this.template, {
                $implicit: this.value,
                query: this.query
            });
        }
    }
    deselectOption(e) {
        e.eventHandled = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, () => this.onDeselected.emit(this.value)));
    }
    onClick(e) {
        e.eventHandled = true;
    }
}
SuiMultiSelectLabel.ɵfac = function SuiMultiSelectLabel_Factory(t) { return new (t || SuiMultiSelectLabel)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.SuiComponentFactory)); };
SuiMultiSelectLabel.ɵcmp = i0.ɵɵdefineComponent({ type: SuiMultiSelectLabel, selectors: [["sui-multi-select-label"]], viewQuery: function SuiMultiSelectLabel_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
    } }, hostVars: 4, hostBindings: function SuiMultiSelectLabel_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("click", function SuiMultiSelectLabel_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ui", ctx.hasClasses)("label", ctx.hasClasses);
    } }, inputs: { value: "value", query: "query", formatter: "formatter", template: "template" }, outputs: { onDeselected: "deselected" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML", 4, "ngIf"], [1, "delete", "icon", 3, "click"], [3, "innerHTML"]], template: function SuiMultiSelectLabel_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", null, 0);
        i0.ɵɵtemplate(2, SuiMultiSelectLabel_span_2_Template, 1, 1, "span", 1);
        i0.ɵɵelementStart(3, "i", 2);
        i0.ɵɵlistener("click", function SuiMultiSelectLabel_Template_i_click_3_listener($event) { return ctx.deselectOption($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.template);
    } }, directives: [i2.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiMultiSelectLabel, [{
        type: Component,
        args: [{
                selector: "sui-multi-select-label",
                template: `
<span #templateSibling></span>
<span *ngIf="!template" [innerHTML]="formatter(value)"></span>
<i class="delete icon" (click)="deselectOption($event)"></i>
`
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.SuiComponentFactory }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.label"]
        }], value: [{
            type: Input
        }], query: [{
            type: Input
        }], onDeselected: [{
            type: Output,
            args: ["deselected"]
        }], formatter: [{
            type: Input
        }], template: [{
            type: Input
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LWxhYmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QtbGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQzNFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakgsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7SUFVaEYsMEJBQThEOzs7SUFBdEMsaUZBQThCOztBQVB0RCw0REFBNEQ7QUFDNUQsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBVWhDLE1BQU0sT0FBTyxtQkFBdUIsU0FBUSxhQUFhO0lBMENyRCxZQUFZLFFBQWtCLEVBQ2xCLE9BQWtCLEVBQ2xCLGNBQWdDLEVBQ3pCLGdCQUFvQztRQUVuRCxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUYxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBSW5ELHVDQUF1QztRQUN2QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBbkNELElBQ1csUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsUUFBbUQ7UUFDbkUsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ3BCLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQXdCTSxjQUFjLENBQUMsQ0FBYztRQUNoQyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUM5QixJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBR00sT0FBTyxDQUFDLENBQWM7UUFDekIsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7c0ZBdkVRLG1CQUFtQjt3REFBbkIsbUJBQW1CO3dDQXVDVSxnQkFBZ0I7Ozs7Ozs7OztRQTVDMUQsZ0NBQThCO1FBQzlCLHNFQUF1RDtRQUN2RCw0QkFBNEQ7UUFBckMsaUdBQVMsMEJBQXNCLElBQUM7UUFBQyxpQkFBSTs7UUFEdEQsZUFBaUI7UUFBakIsb0NBQWlCOztrREFJVixtQkFBbUI7Y0FSL0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7OztDQUliO2FBQ0E7O2tCQUlJLFdBQVc7bUJBQUMsVUFBVTs7a0JBQ3RCLFdBQVc7bUJBQUMsYUFBYTs7a0JBS3pCLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLE1BQU07bUJBQUMsWUFBWTs7a0JBR25CLEtBQUs7O2tCQUtMLEtBQUs7O2tCQWdCTCxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQTZCckUsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3Q2hpbGQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT3V0cHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVGVtcGxhdGVSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb24sIFRyYW5zaXRpb25Db250cm9sbGVyLCBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IElPcHRpb25Db250ZXh0IH0gZnJvbSBcIi4uL2NsYXNzZXMvc2VsZWN0LWJhc2VcIjtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM0NDkuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0LWxhYmVsXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxzcGFuICN0ZW1wbGF0ZVNpYmxpbmc+PC9zcGFuPlxuPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGVcIiBbaW5uZXJIVE1MXT1cImZvcm1hdHRlcih2YWx1ZSlcIj48L3NwYW4+XG48aSBjbGFzcz1cImRlbGV0ZSBpY29uXCIgKGNsaWNrKT1cImRlc2VsZWN0T3B0aW9uKCRldmVudClcIj48L2k+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0TGFiZWw8VD4gZXh0ZW5kcyBTdWlUcmFuc2l0aW9uIHtcbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgLy8gRG9pbmcgaXQgb24gdGhlIGhvc3QgZW5hYmxlcyB1c2UgaW4gbWVudXMgZXRjLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubGFiZWxcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXI7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgcXVlcnk/OnN0cmluZztcblxuICAgIEBPdXRwdXQoXCJkZXNlbGVjdGVkXCIpXG4gICAgcHVibGljIG9uRGVzZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBmb3JtYXR0ZXI6KG9iajpUKSA9PiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF90ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyh0aGlzLnRlbXBsYXRlU2libGluZywgdGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXI6UmVuZGVyZXIyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3RvcjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgICBwdWJsaWMgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5KSB7XG5cbiAgICAgICAgc3VwZXIocmVuZGVyZXIsIGVsZW1lbnQsIGNoYW5nZURldGVjdG9yKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHRyYW5zaXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIgPSBuZXcgVHJhbnNpdGlvbkNvbnRyb2xsZXIoZmFsc2UsIFwiaW5saW5lLWJsb2NrXCIpO1xuICAgICAgICB0aGlzLnNldFRyYW5zaXRpb25Db250cm9sbGVyKHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLm9uRGVzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db250cm9sbGVyLmFuaW1hdGUobmV3IFRyYW5zaXRpb24oXCJzY2FsZVwiLCAxMDAsIFRyYW5zaXRpb25EaXJlY3Rpb24uSW4pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzZWxlY3RPcHRpb24oZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvbnRyb2xsZXIuYW5pbWF0ZShcbiAgICAgICAgICAgIG5ldyBUcmFuc2l0aW9uKFwic2NhbGVcIiwgMTAwLCBUcmFuc2l0aW9uRGlyZWN0aW9uLk91dCwgKCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzZWxlY3RlZC5lbWl0KHRoaXMudmFsdWUpKSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=