import { Component, HostBinding, ContentChild } from "@angular/core";
import { SuiSidebar } from "./sidebar";
import { SuiSidebarSibling } from "./sidebar-sibling";
import * as i0 from "@angular/core";
var _c0 = ["*"];
var SuiSidebarContainer = /** @class */ (function () {
    function SuiSidebarContainer() {
        this.hasClasses = true;
    }
    SuiSidebarContainer.prototype.ngAfterContentInit = function () {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    };
    SuiSidebarContainer.ɵfac = function SuiSidebarContainer_Factory(t) { return new (t || SuiSidebarContainer)(); };
    SuiSidebarContainer.ɵcmp = i0.ɵɵdefineComponent({ type: SuiSidebarContainer, selectors: [["sui-sidebar-container"]], contentQueries: function SuiSidebarContainer_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SuiSidebar, true);
            i0.ɵɵcontentQuery(dirIndex, SuiSidebarSibling, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidebar = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sibling = _t.first);
        } }, hostVars: 2, hostBindings: function SuiSidebarContainer_HostBindings(rf, ctx, elIndex) { if (rf & 2) {
            i0.ɵɵclassProp("pushable", ctx.hasClasses);
        } }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function SuiSidebarContainer_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}"] });
    return SuiSidebarContainer;
}());
export { SuiSidebarContainer };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSidebarContainer, [{
        type: Component,
        args: [{
                selector: "sui-sidebar-container",
                template: "<ng-content></ng-content>",
                styles: ["\n:host {\n    display: block;\n}\n"]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.pushable"]
        }], sidebar: [{
            type: ContentChild,
            args: [SuiSidebar, /* TODO: add static flag */ {}]
        }], sibling: [{
            type: ContentChild,
            args: [SuiSidebarSibling, /* TODO: add static flag */ {}]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NpZGViYXIvY29tcG9uZW50cy9zaWRlYmFyLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUV0RDtJQXFCSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFTSxnREFBa0IsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNyRjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7U0FDN0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hDLENBQUM7MEZBMUJRLG1CQUFtQjs0REFBbkIsbUJBQW1CO3dDQU1kLFVBQVU7d0NBR1YsaUJBQWlCOzs7Ozs7Ozs7WUFoQnBCLGtCQUFZOzs4QkFQM0I7Q0F5Q0MsQUFwQ0QsSUFvQ0M7U0EzQlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FUL0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLE1BQU0sRUFBRSxDQUFDLHFDQUlaLENBQUM7YUFDRDs7a0JBSUksV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUc1QixZQUFZO21CQUFDLFVBQVUsRUFBRSwyQkFBMkIsQ0FBQyxFQUFFOztrQkFHdkQsWUFBWTttQkFBQyxpQkFBaUIsRUFBRSwyQkFBMkIsQ0FBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBIb3N0QmluZGluZywgQ29udGVudENoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCB7IFN1aVNpZGViYXJTaWJsaW5nIH0gZnJvbSBcIi4vc2lkZWJhci1zaWJsaW5nXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1zaWRlYmFyLWNvbnRhaW5lclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhckNvbnRhaW5lciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHB1YmxpYyBzZXJ2aWNlOlNpZGViYXJTZXJ2aWNlO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucHVzaGFibGVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQENvbnRlbnRDaGlsZChTdWlTaWRlYmFyLCAvKiBUT0RPOiBhZGQgc3RhdGljIGZsYWcgKi8ge30pXG4gICAgcHVibGljIHNpZGViYXI6U3VpU2lkZWJhcjtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2lkZWJhclNpYmxpbmcsIC8qIFRPRE86IGFkZCBzdGF0aWMgZmxhZyAqLyB7fSlcbiAgICBwdWJsaWMgc2libGluZzpTdWlTaWRlYmFyU2libGluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnNpZGViYXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGluY2x1ZGUgYSA8c3VpLXNpZGViYXI+IGVsZW1lbnQgd2l0aGluIHRoZSBjb250YWluZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHRoaXMuc2lkZWJhci5zZXJ2aWNlO1xuXG4gICAgICAgIGlmICghdGhpcy5zaWJsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBpbmNsdWRlIGEgPHN1aS1zaWRlYmFyLXNpYmxpbmc+IGVsZW1lbnQgd2l0aGluIHRoZSBjb250YWluZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2libGluZy5zZXJ2aWNlID0gdGhpcy5zZXJ2aWNlO1xuICAgIH1cbn1cbiJdfQ==