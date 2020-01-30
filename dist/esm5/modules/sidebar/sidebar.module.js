import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiSidebar } from "./components/sidebar";
import { SuiSidebarContainer } from "./components/sidebar-container";
import { SuiSidebarSibling } from "./components/sidebar-sibling";
import * as i0 from "@angular/core";
var SuiSidebarModule = /** @class */ (function () {
    function SuiSidebarModule() {
    }
    SuiSidebarModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiSidebarModule });
    SuiSidebarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiSidebarModule_Factory(t) { return new (t || SuiSidebarModule)(); }, imports: [[
                CommonModule
            ]] });
    return SuiSidebarModule;
}());
export { SuiSidebarModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiSidebarModule, { declarations: [SuiSidebar,
        SuiSidebarContainer,
        SuiSidebarSibling], imports: [CommonModule], exports: [SuiSidebar,
        SuiSidebarContainer,
        SuiSidebarSibling] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSidebarModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiSidebar,
                    SuiSidebarContainer,
                    SuiSidebarSibling
                ],
                exports: [
                    SuiSidebar,
                    SuiSidebarContainer,
                    SuiSidebarSibling
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NpZGViYXIvc2lkZWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUVqRTtJQUFBO0tBZWdDO3dEQUFuQixnQkFBZ0I7bUhBQWhCLGdCQUFnQixrQkFkaEI7Z0JBQ0wsWUFBWTthQUNmOzJCQVRMO0NBcUJnQyxBQWZoQyxJQWVnQztTQUFuQixnQkFBZ0I7d0ZBQWhCLGdCQUFnQixtQkFWckIsVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFMakIsWUFBWSxhQVFaLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsaUJBQWlCO2tEQUdaLGdCQUFnQjtjQWY1QixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLFVBQVU7b0JBQ1YsbUJBQW1CO29CQUNuQixpQkFBaUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxVQUFVO29CQUNWLG1CQUFtQjtvQkFDbkIsaUJBQWlCO2lCQUNwQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IHsgU3VpU2lkZWJhckNvbnRhaW5lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZWJhci1jb250YWluZXJcIjtcbmltcG9ydCB7IFN1aVNpZGViYXJTaWJsaW5nIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlYmFyLXNpYmxpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aVNpZGViYXIsXG4gICAgICAgIFN1aVNpZGViYXJDb250YWluZXIsXG4gICAgICAgIFN1aVNpZGViYXJTaWJsaW5nXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVNpZGViYXIsXG4gICAgICAgIFN1aVNpZGViYXJDb250YWluZXIsXG4gICAgICAgIFN1aVNpZGViYXJTaWJsaW5nXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTaWRlYmFyTW9kdWxlIHt9XG4iXX0=