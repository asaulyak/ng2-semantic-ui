import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiDimmerModule } from "../dimmer/internal";
import { SuiTransitionModule } from "../transition/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiModalService } from "./services/modal.service";
import { SuiModal } from "./components/modal";
import { SuiModalDimmer } from "./components/dimmer";
import * as i0 from "@angular/core";
export class SuiModalModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQXVCckQsTUFBTSxPQUFPLGNBQWM7O2tEQUFkLGNBQWM7MkdBQWQsY0FBYyxtQkFQWjtRQUNQLGVBQWU7S0FDbEIsWUFmUTtZQUNMLFlBQVk7WUFDWixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLGdCQUFnQjtTQUNuQjt3RkFlUSxjQUFjLG1CQWJuQixRQUFRO1FBQ1IsY0FBYyxhQVBkLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGdCQUFnQixhQU9oQixRQUFRO2tEQVNILGNBQWM7Y0FyQjFCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsUUFBUTtvQkFDUixjQUFjO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsUUFBUTtpQkFDWDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsZUFBZTtpQkFDbEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNiLFFBQVE7aUJBQ1g7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aURpbW1lck1vZHVsZSB9IGZyb20gXCIuLi9kaW1tZXIvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aU1vZGFsU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL21vZGFsLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1aU1vZGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgU3VpTW9kYWxEaW1tZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RpbW1lclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBTdWlEaW1tZXJNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGUsXG4gICAgICAgIFN1aVV0aWxpdHlNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlNb2RhbCxcbiAgICAgICAgU3VpTW9kYWxEaW1tZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpTW9kYWxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTdWlNb2RhbFNlcnZpY2VcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBTdWlNb2RhbFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpTW9kYWxNb2R1bGUge31cbiJdfQ==