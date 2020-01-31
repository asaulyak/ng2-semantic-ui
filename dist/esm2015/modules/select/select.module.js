import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiDropdownModule } from "../dropdown/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiLocalizationModule } from "../../behaviors/localization/internal";
import { SuiSelect, SuiSelectValueAccessor } from "./components/select";
import { SuiSelectOption } from "./components/select-option";
import { SuiSelectSearch } from "./directives/select-search";
import { SuiMultiSelect, SuiMultiSelectValueAccessor } from "./components/multi-select";
import { SuiMultiSelectLabel } from "./components/multi-select-label";
import * as i0 from "@angular/core";
export class SuiSelectModule {
}
SuiSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiSelectModule });
SuiSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiSelectModule_Factory(t) { return new (t || SuiSelectModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            SuiDropdownModule,
            SuiUtilityModule,
            SuiLocalizationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiSelectModule, { declarations: [SuiSelect,
        SuiSelectOption,
        SuiSelectSearch,
        SuiSelectValueAccessor,
        SuiMultiSelect,
        SuiMultiSelectLabel,
        SuiMultiSelectValueAccessor], imports: [CommonModule,
        FormsModule,
        SuiDropdownModule,
        SuiUtilityModule,
        SuiLocalizationModule], exports: [SuiSelect,
        SuiSelectOption,
        SuiSelectSearch,
        SuiSelectValueAccessor,
        SuiMultiSelect,
        SuiMultiSelectValueAccessor] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    SuiDropdownModule,
                    SuiUtilityModule,
                    SuiLocalizationModule
                ],
                declarations: [
                    SuiSelect,
                    SuiSelectOption,
                    SuiSelectSearch,
                    SuiSelectValueAccessor,
                    SuiMultiSelect,
                    SuiMultiSelectLabel,
                    SuiMultiSelectValueAccessor
                ],
                exports: [
                    SuiSelect,
                    SuiSelectOption,
                    SuiSelectSearch,
                    SuiSelectValueAccessor,
                    SuiMultiSelect,
                    SuiMultiSelectValueAccessor
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L3NlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUE0QnRFLE1BQU0sT0FBTyxlQUFlOzttREFBZixlQUFlOzZHQUFmLGVBQWUsa0JBekJmO1lBQ0wsWUFBWTtZQUNaLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLHFCQUFxQjtTQUN4Qjt3RkFtQlEsZUFBZSxtQkFqQnBCLFNBQVM7UUFDVCxlQUFlO1FBQ2YsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLDJCQUEyQixhQWIzQixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIscUJBQXFCLGFBWXJCLFNBQVM7UUFDVCxlQUFlO1FBQ2YsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsMkJBQTJCO2tEQUd0QixlQUFlO2NBMUIzQixRQUFRO2VBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIscUJBQXFCO2lCQUN4QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsU0FBUztvQkFDVCxlQUFlO29CQUNmLGVBQWU7b0JBQ2Ysc0JBQXNCO29CQUN0QixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsMkJBQTJCO2lCQUM5QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsU0FBUztvQkFDVCxlQUFlO29CQUNmLGVBQWU7b0JBQ2Ysc0JBQXNCO29CQUN0QixjQUFjO29CQUNkLDJCQUEyQjtpQkFDOUI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpVXRpbGl0eU1vZHVsZSB9IGZyb20gXCIuLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aUxvY2FsaXphdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3QsIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlbGVjdFwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RTZWFyY2ggfSBmcm9tIFwiLi9kaXJlY3RpdmVzL3NlbGVjdC1zZWFyY2hcIjtcbmltcG9ydCB7IFN1aU11bHRpU2VsZWN0LCBTdWlNdWx0aVNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi9jb21wb25lbnRzL211bHRpLXNlbGVjdFwiO1xuaW1wb3J0IHsgU3VpTXVsdGlTZWxlY3RMYWJlbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGktc2VsZWN0LWxhYmVsXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpVXRpbGl0eU1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VsZWN0LFxuICAgICAgICBTdWlTZWxlY3RPcHRpb24sXG4gICAgICAgIFN1aVNlbGVjdFNlYXJjaCxcbiAgICAgICAgU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcixcbiAgICAgICAgU3VpTXVsdGlTZWxlY3QsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0TGFiZWwsXG4gICAgICAgIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdWlTZWxlY3QsXG4gICAgICAgIFN1aVNlbGVjdE9wdGlvbixcbiAgICAgICAgU3VpU2VsZWN0U2VhcmNoLFxuICAgICAgICBTdWlTZWxlY3RWYWx1ZUFjY2Vzc29yLFxuICAgICAgICBTdWlNdWx0aVNlbGVjdCxcbiAgICAgICAgU3VpTXVsdGlTZWxlY3RWYWx1ZUFjY2Vzc29yXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RNb2R1bGUge31cbiJdfQ==