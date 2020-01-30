import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiCollapseModule } from "../collapse/internal";
import { SuiTransitionModule } from "../transition/internal";
import { SuiAccordion } from "./components/accordion";
import { SuiAccordionPanel } from "./components/accordion-panel";
import * as i0 from "@angular/core";
var SuiAccordionModule = /** @class */ (function () {
    function SuiAccordionModule() {
    }
    SuiAccordionModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiAccordionModule });
    SuiAccordionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiAccordionModule_Factory(t) { return new (t || SuiAccordionModule)(); }, providers: [], imports: [[
                CommonModule,
                SuiCollapseModule,
                SuiTransitionModule
            ]] });
    return SuiAccordionModule;
}());
export { SuiAccordionModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUVqRTtJQUFBO0tBZ0JrQzswREFBckIsa0JBQWtCO3VIQUFsQixrQkFBa0IsbUJBRmhCLEVBQUUsWUFiSjtnQkFDTCxZQUFZO2dCQUNaLGlCQUFpQjtnQkFDakIsbUJBQW1CO2FBQ3RCOzZCQVpMO0NBdUJrQyxBQWhCbEMsSUFnQmtDO1NBQXJCLGtCQUFrQjt3RkFBbEIsa0JBQWtCLG1CQVR2QixZQUFZO1FBQ1osaUJBQWlCLGFBTmpCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsbUJBQW1CLGFBT25CLFlBQVk7UUFDWixpQkFBaUI7a0RBSVosa0JBQWtCO2NBaEI5QixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixtQkFBbUI7aUJBQ3RCO2dCQUNELFlBQVksRUFBRTtvQkFDVixZQUFZO29CQUNaLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNwQjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFN1aUNvbGxhcHNlTW9kdWxlIH0gZnJvbSBcIi4uL2NvbGxhcHNlL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlUcmFuc2l0aW9uTW9kdWxlIH0gZnJvbSBcIi4uL3RyYW5zaXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25QYW5lbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjb3JkaW9uLXBhbmVsXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFN1aUNvbGxhcHNlTW9kdWxlLFxuICAgICAgICBTdWlUcmFuc2l0aW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpQWNjb3JkaW9uLFxuICAgICAgICBTdWlBY2NvcmRpb25QYW5lbFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlBY2NvcmRpb24sXG4gICAgICAgIFN1aUFjY29yZGlvblBhbmVsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUFjY29yZGlvbk1vZHVsZSB7fVxuIl19