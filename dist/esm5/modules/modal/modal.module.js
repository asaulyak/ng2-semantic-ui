import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiDimmerModule } from "../dimmer/internal";
import { SuiTransitionModule } from "../transition/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiModalService } from "./services/modal.service";
import { SuiModal } from "./components/modal";
import { SuiModalDimmer } from "./components/dimmer";
import * as i0 from "@angular/core";
var SuiModalModule = /** @class */ (function () {
    function SuiModalModule() {
    }
    SuiModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiModalModule });
    SuiModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiModalModule_Factory(t) { return new (t || SuiModalModule)(); }, providers: [
            SuiModalService
        ], imports: [[
                CommonModule,
                SuiDimmerModule,
                SuiTransitionModule,
                SuiUtilityModule
            ]] });
    return SuiModalModule;
}());
export { SuiModalModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiModalModule, { declarations: [SuiModal,
        SuiModalDimmer], imports: [CommonModule,
        SuiDimmerModule,
        SuiTransitionModule,
        SuiUtilityModule], exports: [SuiModal] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiModalModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiDimmerModule,
                    SuiTransitionModule,
                    SuiUtilityModule
                ],
                declarations: [
                    SuiModal,
                    SuiModalDimmer
                ],
                exports: [
                    SuiModal
                ],
                providers: [
                    SuiModalService
                ],
                entryComponents: [
                    SuiModal
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUVyRDtJQUFBO0tBcUI4QjtzREFBakIsY0FBYzsrR0FBZCxjQUFjLG1CQVBaO1lBQ1AsZUFBZTtTQUNsQixZQWZRO2dCQUNMLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CLGdCQUFnQjthQUNuQjt5QkFmTDtDQThCOEIsQUFyQjlCLElBcUI4QjtTQUFqQixjQUFjO3dGQUFkLGNBQWMsbUJBYm5CLFFBQVE7UUFDUixjQUFjLGFBUGQsWUFBWTtRQUNaLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCLGFBT2hCLFFBQVE7a0RBU0gsY0FBYztjQXJCMUIsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixnQkFBZ0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDVixRQUFRO29CQUNSLGNBQWM7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxRQUFRO2lCQUNYO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxlQUFlO2lCQUNsQjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2IsUUFBUTtpQkFDWDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpRGltbWVyTW9kdWxlIH0gZnJvbSBcIi4uL2RpbW1lci9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVHJhbnNpdGlvbk1vZHVsZSB9IGZyb20gXCIuLi90cmFuc2l0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlVdGlsaXR5TW9kdWxlIH0gZnJvbSBcIi4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTW9kYWxTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbW9kYWwuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpTW9kYWwgfSBmcm9tIFwiLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBTdWlNb2RhbERpbW1lciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGltbWVyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aURpbW1lck1vZHVsZSxcbiAgICAgICAgU3VpVHJhbnNpdGlvbk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aU1vZGFsLFxuICAgICAgICBTdWlNb2RhbERpbW1lclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFN1aU1vZGFsU2VydmljZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIFN1aU1vZGFsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlNb2RhbE1vZHVsZSB7fVxuIl19