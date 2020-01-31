import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiCheckbox, SuiCheckboxValueAccessor } from "./components/checkbox";
import { SuiRadio, SuiRadioValueAccessor } from "./components/radio";
import { SuiRadioManager } from "./directives/radio-manager";
import * as i0 from "@angular/core";
export class SuiCheckboxModule {
}
SuiCheckboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiCheckboxModule });
SuiCheckboxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiCheckboxModule_Factory(t) { return new (t || SuiCheckboxModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiCheckboxModule, { declarations: [SuiCheckbox,
        SuiCheckboxValueAccessor,
        SuiRadio,
        SuiRadioValueAccessor,
        SuiRadioManager], imports: [CommonModule,
        FormsModule], exports: [SuiCheckbox,
        SuiCheckboxValueAccessor,
        SuiRadio,
        SuiRadioValueAccessor,
        SuiRadioManager] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    SuiCheckbox,
                    SuiCheckboxValueAccessor,
                    SuiRadio,
                    SuiRadioValueAccessor,
                    SuiRadioManager
                ],
                exports: [
                    SuiCheckbox,
                    SuiCheckboxValueAccessor,
                    SuiRadio,
                    SuiRadioValueAccessor,
                    SuiRadioManager
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQXNCN0QsTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLGtCQW5CakI7WUFDTCxZQUFZO1lBQ1osV0FBVztTQUNkO3dGQWdCUSxpQkFBaUIsbUJBZHRCLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixlQUFlLGFBUmYsWUFBWTtRQUNaLFdBQVcsYUFVWCxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3hCLFFBQVE7UUFDUixxQkFBcUI7UUFDckIsZUFBZTtrREFHVixpQkFBaUI7Y0FwQjdCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO2lCQUNkO2dCQUNELFlBQVksRUFBRTtvQkFDVixXQUFXO29CQUNYLHdCQUF3QjtvQkFDeEIsUUFBUTtvQkFDUixxQkFBcUI7b0JBQ3JCLGVBQWU7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxXQUFXO29CQUNYLHdCQUF3QjtvQkFDeEIsUUFBUTtvQkFDUixxQkFBcUI7b0JBQ3JCLGVBQWU7aUJBQ2xCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgU3VpQ2hlY2tib3gsIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvY2hlY2tib3hcIjtcbmltcG9ydCB7IFN1aVJhZGlvLCBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3JhZGlvXCI7XG5pbXBvcnQgeyBTdWlSYWRpb01hbmFnZXIgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3JhZGlvLW1hbmFnZXJcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpQ2hlY2tib3gsXG4gICAgICAgIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW8sXG4gICAgICAgIFN1aVJhZGlvVmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpUmFkaW9NYW5hZ2VyXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveE1vZHVsZSB7fVxuIl19