import { Component, Input, HostBinding, HostListener, ElementRef, Renderer2 } from "@angular/core";
import { SidebarTransition } from "../services/sidebar.service";
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class SuiSidebarSibling {
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.isDimmedWhenVisible = false;
        this.hasClasses = true;
    }
    get service() {
        return this._service;
    }
    set service(service) {
        this._service = service;
        setTimeout(() => this.updateTransform());
        this._service.isVisibleChange.subscribe(() => this.updateTransform());
    }
    get isVisible() {
        if (!this.service) {
            return false;
        }
        return this.service.isVisible;
    }
    get isDimmed() {
        if (!this.service) {
            return false;
        }
        return this.service.isVisible && this.isDimmedWhenVisible;
    }
    updateTransform() {
        this._renderer.removeStyle(this._element.nativeElement, "transform");
        this._renderer.removeStyle(this._element.nativeElement, "-webkit-transform");
        if (this.service.isVisible &&
            this.service.transition !== SidebarTransition.Overlay &&
            this.service.transition !== SidebarTransition.ScaleDown) {
            const translate = `translate3d(${this.service.width}px, ${this.service.height}px, 0)`;
            this._renderer.setStyle(this._element.nativeElement, "transform", translate);
            this._renderer.setStyle(this._element.nativeElement, "-webkit-transform", translate);
        }
    }
    onClick(event) {
        if (this.service.isVisible && !this.service.wasJustOpened) {
            this.service.setVisibleState(false);
        }
    }
}
SuiSidebarSibling.ɵfac = function SuiSidebarSibling_Factory(t) { return new (t || SuiSidebarSibling)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
SuiSidebarSibling.ɵcmp = i0.ɵɵdefineComponent({ type: SuiSidebarSibling, selectors: [["sui-sidebar-sibling"]], hostVars: 6, hostBindings: function SuiSidebarSibling_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("click", function SuiSidebarSibling_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("visible", ctx.isVisible)("dimmed", ctx.isDimmed)("pusher", ctx.hasClasses);
    } }, inputs: { isDimmedWhenVisible: "isDimmedWhenVisible" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function SuiSidebarSibling_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSidebarSibling, [{
        type: Component,
        args: [{
                selector: "sui-sidebar-sibling",
                template: `<ng-content></ng-content>`,
                styles: [`
:host {
    display: block;
}
`]
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { isDimmedWhenVisible: [{
            type: Input
        }], isVisible: [{
            type: HostBinding,
            args: ["class.visible"]
        }], isDimmed: [{
            type: HostBinding,
            args: ["class.dimmed"]
        }], hasClasses: [{
            type: HostBinding,
            args: ["class.pusher"]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1zaWJsaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zaWRlYmFyL2NvbXBvbmVudHMvc2lkZWJhci1zaWJsaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQWtCLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQVdoRixNQUFNLE9BQU8saUJBQWlCO0lBb0MxQixZQUFvQixTQUFtQixFQUFVLFFBQW1CO1FBQWhELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2hFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7UUFFakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQXJDRCxJQUFXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELElBQVcsT0FBTyxDQUFDLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRXhCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUtELElBQ1csU0FBUztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFDVyxRQUFRO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQzlELENBQUM7SUFXTyxlQUFlO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFN0UsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssaUJBQWlCLENBQUMsT0FBTztZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFFekQsTUFBTSxTQUFTLEdBQUcsZUFBZSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO1lBQ3RGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4RjtJQUNMLENBQUM7SUFHTSxPQUFPLENBQUMsS0FBZ0I7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQzs7a0ZBN0RRLGlCQUFpQjtzREFBakIsaUJBQWlCOzs7Ozs7UUFQZixrQkFBWTs7a0RBT2QsaUJBQWlCO2NBVDdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxNQUFNLEVBQUUsQ0FBQzs7OztDQUlaLENBQUM7YUFDRDs7a0JBZUksS0FBSzs7a0JBR0wsV0FBVzttQkFBQyxlQUFlOztrQkFRM0IsV0FBVzttQkFBQyxjQUFjOztrQkFRMUIsV0FBVzttQkFBQyxjQUFjOztrQkF1QjFCLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlLCBTaWRlYmFyVHJhbnNpdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWRlYmFyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNpZGViYXItc2libGluZ1wiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhclNpYmxpbmcge1xuICAgIHByaXZhdGUgX3NlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZpY2UoKTpTaWRlYmFyU2VydmljZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgc2VydmljZShzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBzZXJ2aWNlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm0oKSk7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuaXNWaXNpYmxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybSgpKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0RpbW1lZFdoZW5WaXNpYmxlOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaW1tZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzRGltbWVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICghdGhpcy5zZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiYgdGhpcy5pc0RpbW1lZFdoZW5WaXNpYmxlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnB1c2hlclwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjpSZW5kZXJlcjIsIHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmlzRGltbWVkV2hlblZpc2libGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVHJhbnNmb3JtKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCItd2Via2l0LXRyYW5zZm9ybVwiKTtcblxuICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLmlzVmlzaWJsZSAmJlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gIT09IFNpZGViYXJUcmFuc2l0aW9uLk92ZXJsYXkgJiZcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uICE9PSBTaWRlYmFyVHJhbnNpdGlvbi5TY2FsZURvd24pIHtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gYHRyYW5zbGF0ZTNkKCR7dGhpcy5zZXJ2aWNlLndpZHRofXB4LCAke3RoaXMuc2VydmljZS5oZWlnaHR9cHgsIDApYDtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgXCItd2Via2l0LXRyYW5zZm9ybVwiLCB0cmFuc2xhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5pc1Zpc2libGUgJiYgIXRoaXMuc2VydmljZS53YXNKdXN0T3BlbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==