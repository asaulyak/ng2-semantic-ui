import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiTransitionModule } from "../transition/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiPopupDirective } from "./directives/popup.directive";
import { SuiPopupArrow } from "./components/popup-arrow";
import { SuiPopup } from "./components/popup";
import { SuiPopupConfig } from "./services/popup.service";
import * as i0 from "@angular/core";
var SuiPopupModule = /** @class */ (function () {
    function SuiPopupModule() {
    }
    SuiPopupModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiPopupModule });
    SuiPopupModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiPopupModule_Factory(t) { return new (t || SuiPopupModule)(); }, providers: [
            SuiPopupConfig
        ], imports: [[
                CommonModule,
                SuiTransitionModule,
                SuiUtilityModule
            ]] });
    return SuiPopupModule;
}());
export { SuiPopupModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiPopupModule, { declarations: [SuiPopupDirective,
        SuiPopupArrow,
        SuiPopup], imports: [CommonModule,
        SuiTransitionModule,
        SuiUtilityModule], exports: [SuiPopupDirective,
        SuiPopup] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiPopupModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule,
                    SuiUtilityModule
                ],
                declarations: [
                    SuiPopupDirective,
                    SuiPopupArrow,
                    SuiPopup
                ],
                exports: [
                    SuiPopupDirective,
                    SuiPopup
                ],
                providers: [
                    SuiPopupConfig
                ],
                entryComponents: [
                    SuiPopup
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9wb3B1cC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRTFEO0lBQUE7S0F1QjhCO3NEQUFqQixjQUFjOytHQUFkLGNBQWMsbUJBUlo7WUFDUCxjQUFjO1NBQ2pCLFlBaEJRO2dCQUNMLFlBQVk7Z0JBQ1osbUJBQW1CO2dCQUNuQixnQkFBZ0I7YUFDbkI7eUJBZEw7Q0FnQzhCLEFBdkI5QixJQXVCOEI7U0FBakIsY0FBYzt3RkFBZCxjQUFjLG1CQWhCbkIsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixRQUFRLGFBUFIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0IsYUFRaEIsaUJBQWlCO1FBQ2pCLFFBQVE7a0RBVUgsY0FBYztjQXZCMUIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLFFBQVE7aUJBQ1g7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGlCQUFpQjtvQkFDakIsUUFBUTtpQkFDWDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsY0FBYztpQkFDakI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNiLFFBQVE7aUJBQ1g7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9wb3B1cC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IFN1aVBvcHVwQXJyb3cgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BvcHVwLWFycm93XCI7XG5pbXBvcnQgeyBTdWlQb3B1cCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFN1aVBvcHVwQ29uZmlnIH0gZnJvbSBcIi4vc2VydmljZXMvcG9wdXAuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpUG9wdXBEaXJlY3RpdmUsXG4gICAgICAgIFN1aVBvcHVwQXJyb3csXG4gICAgICAgIFN1aVBvcHVwXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aVBvcHVwRGlyZWN0aXZlLFxuICAgICAgICBTdWlQb3B1cFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFN1aVBvcHVwQ29uZmlnXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgU3VpUG9wdXBcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU3VpUG9wdXBNb2R1bGUge31cbiJdfQ==