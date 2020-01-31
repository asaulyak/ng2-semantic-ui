import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiCollapseModule } from "../collapse/internal";
import { SuiTransitionModule } from "../transition/internal";
import { SuiAccordion } from "./components/accordion";
import { SuiAccordionPanel } from "./components/accordion-panel";
import * as i0 from "@angular/core";
export class SuiAccordionModule {
}
SuiAccordionModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiAccordionModule });
SuiAccordionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiAccordionModule_Factory(t) { return new (t || SuiAccordionModule)(); }, providers: [], imports: [[
            CommonModule,
            SuiCollapseModule,
            SuiTransitionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiAccordionModule, { declarations: [SuiAccordion,
        SuiAccordionPanel], imports: [CommonModule,
        SuiCollapseModule,
        SuiTransitionModule], exports: [SuiAccordion,
        SuiAccordionPanel] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiAccordionModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiCollapseModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiAccordion,
                    SuiAccordionPanel
                ],
                exports: [
                    SuiAccordion,
                    SuiAccordionPanel
                ],
                providers: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQWtCakUsTUFBTSxPQUFPLGtCQUFrQjs7c0RBQWxCLGtCQUFrQjttSEFBbEIsa0JBQWtCLG1CQUZoQixFQUFFLFlBYko7WUFDTCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLG1CQUFtQjtTQUN0Qjt3RkFXUSxrQkFBa0IsbUJBVHZCLFlBQVk7UUFDWixpQkFBaUIsYUFOakIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixtQkFBbUIsYUFPbkIsWUFBWTtRQUNaLGlCQUFpQjtrREFJWixrQkFBa0I7Y0FoQjlCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU3VpQ29sbGFwc2VNb2R1bGUgfSBmcm9tIFwiLi4vY29sbGFwc2UvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVRyYW5zaXRpb25Nb2R1bGUgfSBmcm9tIFwiLi4vdHJhbnNpdGlvbi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb25cIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU3VpQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFN1aVRyYW5zaXRpb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlBY2NvcmRpb24sXG4gICAgICAgIFN1aUFjY29yZGlvblBhbmVsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN1aUFjY29yZGlvbixcbiAgICAgICAgU3VpQWNjb3JkaW9uUGFuZWxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uTW9kdWxlIHt9XG4iXX0=