import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiCheckbox, SuiCheckboxValueAccessor } from "./components/checkbox";
import { SuiRadio, SuiRadioValueAccessor } from "./components/radio";
import { SuiRadioManager } from "./directives/radio-manager";
import * as i0 from "@angular/core";
var SuiCheckboxModule = /** @class */ (function () {
    function SuiCheckboxModule() {
    }
    SuiCheckboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiCheckboxModule });
    SuiCheckboxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiCheckboxModule_Factory(t) { return new (t || SuiCheckboxModule)(); }, imports: [[
                CommonModule,
                FormsModule
            ]] });
    return SuiCheckboxModule;
}());
export { SuiCheckboxModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUU3RDtJQUFBO0tBb0JpQzt5REFBcEIsaUJBQWlCO3FIQUFqQixpQkFBaUIsa0JBbkJqQjtnQkFDTCxZQUFZO2dCQUNaLFdBQVc7YUFDZDs0QkFYTDtDQTJCaUMsQUFwQmpDLElBb0JpQztTQUFwQixpQkFBaUI7d0ZBQWpCLGlCQUFpQixtQkFkdEIsV0FBVztRQUNYLHdCQUF3QjtRQUN4QixRQUFRO1FBQ1IscUJBQXFCO1FBQ3JCLGVBQWUsYUFSZixZQUFZO1FBQ1osV0FBVyxhQVVYLFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixlQUFlO2tEQUdWLGlCQUFpQjtjQXBCN0IsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFdBQVc7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLFdBQVc7b0JBQ1gsd0JBQXdCO29CQUN4QixRQUFRO29CQUNSLHFCQUFxQjtvQkFDckIsZUFBZTtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFdBQVc7b0JBQ1gsd0JBQXdCO29CQUN4QixRQUFRO29CQUNSLHFCQUFxQjtvQkFDckIsZUFBZTtpQkFDbEI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlDaGVja2JveCwgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jaGVja2JveFwiO1xuaW1wb3J0IHsgU3VpUmFkaW8sIFN1aVJhZGlvVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuL2NvbXBvbmVudHMvcmFkaW9cIjtcbmltcG9ydCB7IFN1aVJhZGlvTWFuYWdlciB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvcmFkaW8tbWFuYWdlclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN1aUNoZWNrYm94LFxuICAgICAgICBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aVJhZGlvLFxuICAgICAgICBTdWlSYWRpb1ZhbHVlQWNjZXNzb3IsXG4gICAgICAgIFN1aVJhZGlvTWFuYWdlclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlDaGVja2JveCxcbiAgICAgICAgU3VpQ2hlY2tib3hWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpbyxcbiAgICAgICAgU3VpUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlSYWRpb01hbmFnZXJcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94TW9kdWxlIHt9XG4iXX0=