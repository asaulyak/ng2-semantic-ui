import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiTransitionModule } from "../transition/internal";
import { SuiDropdown } from "./directives/dropdown";
import { SuiDropdownMenu, SuiDropdownMenuItem } from "./directives/dropdown-menu";
import * as i0 from "@angular/core";
var SuiDropdownModule = /** @class */ (function () {
    function SuiDropdownModule() {
    }
    SuiDropdownModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiDropdownModule });
    SuiDropdownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiDropdownModule_Factory(t) { return new (t || SuiDropdownModule)(); }, imports: [[
                CommonModule,
                SuiTransitionModule
            ]] });
    return SuiDropdownModule;
}());
export { SuiDropdownModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiDropdownModule, { declarations: [SuiDropdown,
        SuiDropdownMenu,
        SuiDropdownMenuItem], imports: [CommonModule,
        SuiTransitionModule], exports: [SuiDropdown,
        SuiDropdownMenu,
        SuiDropdownMenuItem] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiDropdown,
                    SuiDropdownMenu,
                    SuiDropdownMenuItem
                ],
                exports: [
                    SuiDropdown,
                    SuiDropdownMenu,
                    SuiDropdownMenuItem
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFbEY7SUFBQTtLQWdCaUM7eURBQXBCLGlCQUFpQjtxSEFBakIsaUJBQWlCLGtCQWZqQjtnQkFDTCxZQUFZO2dCQUNaLG1CQUFtQjthQUN0Qjs0QkFWTDtDQXNCaUMsQUFoQmpDLElBZ0JpQztTQUFwQixpQkFBaUI7d0ZBQWpCLGlCQUFpQixtQkFWdEIsV0FBVztRQUNYLGVBQWU7UUFDZixtQkFBbUIsYUFObkIsWUFBWTtRQUNaLG1CQUFtQixhQVFuQixXQUFXO1FBQ1gsZUFBZTtRQUNmLG1CQUFtQjtrREFHZCxpQkFBaUI7Y0FoQjdCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixtQkFBbUI7aUJBQ3RCO2dCQUNELFlBQVksRUFBRTtvQkFDVixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsbUJBQW1CO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsV0FBVztvQkFDWCxlQUFlO29CQUNmLG1CQUFtQjtpQkFDdEI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd24gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Ryb3Bkb3duXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1lbnUsIFN1aURyb3Bkb3duTWVudUl0ZW0gfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2Ryb3Bkb3duLW1lbnVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aURyb3Bkb3duLFxuICAgICAgICBTdWlEcm9wZG93bk1lbnUsXG4gICAgICAgIFN1aURyb3Bkb3duTWVudUl0ZW1cbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpRHJvcGRvd24sXG4gICAgICAgIFN1aURyb3Bkb3duTWVudSxcbiAgICAgICAgU3VpRHJvcGRvd25NZW51SXRlbVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpRHJvcGRvd25Nb2R1bGUge31cbiJdfQ==