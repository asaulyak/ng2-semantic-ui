import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiTabset } from "./components/tabset";
import { SuiTabHeader } from "./directives/tab-header";
import { SuiTabContent } from "./directives/tab-content";
import * as i0 from "@angular/core";
var SuiTabsModule = /** @class */ (function () {
    function SuiTabsModule() {
    }
    SuiTabsModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiTabsModule });
    SuiTabsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiTabsModule_Factory(t) { return new (t || SuiTabsModule)(); }, imports: [[
                CommonModule
            ]] });
    return SuiTabsModule;
}());
export { SuiTabsModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiTabsModule, { declarations: [SuiTabset,
        SuiTabHeader,
        SuiTabContent], imports: [CommonModule], exports: [SuiTabset,
        SuiTabHeader,
        SuiTabContent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiTabsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiTabset,
                    SuiTabHeader,
                    SuiTabContent
                ],
                exports: [
                    SuiTabset,
                    SuiTabHeader,
                    SuiTabContent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFicy90YWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUV6RDtJQUFBO0tBZTZCO3FEQUFoQixhQUFhOzZHQUFiLGFBQWEsa0JBZGI7Z0JBQ0wsWUFBWTthQUNmO3dCQVRMO0NBcUI2QixBQWY3QixJQWU2QjtTQUFoQixhQUFhO3dGQUFiLGFBQWEsbUJBVmxCLFNBQVM7UUFDVCxZQUFZO1FBQ1osYUFBYSxhQUxiLFlBQVksYUFRWixTQUFTO1FBQ1QsWUFBWTtRQUNaLGFBQWE7a0RBR1IsYUFBYTtjQWZ6QixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixhQUFhO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsU0FBUztvQkFDVCxZQUFZO29CQUNaLGFBQWE7aUJBQ2hCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTdWlUYWJzZXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RhYnNldFwiO1xuaW1wb3J0IHsgU3VpVGFiSGVhZGVyIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy90YWItaGVhZGVyXCI7XG5pbXBvcnQgeyBTdWlUYWJDb250ZW50IH0gZnJvbSBcIi4vZGlyZWN0aXZlcy90YWItY29udGVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpVGFic2V0LFxuICAgICAgICBTdWlUYWJIZWFkZXIsXG4gICAgICAgIFN1aVRhYkNvbnRlbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpVGFic2V0LFxuICAgICAgICBTdWlUYWJIZWFkZXIsXG4gICAgICAgIFN1aVRhYkNvbnRlbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYnNNb2R1bGUge31cbiJdfQ==