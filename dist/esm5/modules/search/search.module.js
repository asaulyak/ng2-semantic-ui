import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SuiDropdownModule } from "../dropdown/internal";
import { SuiLocalizationModule } from "../../behaviors/localization/internal";
import { SuiUtilityModule } from "../../misc/util/internal";
import { SuiSearch } from "./components/search";
import { SuiSearchResult } from "./components/search-result";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../dropdown/directives/dropdown";
import * as i4 from "../dropdown/directives/dropdown-menu";
var SuiSearchModule = /** @class */ (function () {
    function SuiSearchModule() {
    }
    SuiSearchModule.ɵmod = i0.ɵɵdefineNgModule({ type: SuiSearchModule });
    SuiSearchModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SuiSearchModule_Factory(t) { return new (t || SuiSearchModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                SuiDropdownModule,
                SuiLocalizationModule,
                SuiUtilityModule
            ]] });
    return SuiSearchModule;
}());
export { SuiSearchModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SuiSearchModule, { declarations: [SuiSearch,
        SuiSearchResult], imports: [CommonModule,
        FormsModule,
        SuiDropdownModule,
        SuiLocalizationModule,
        SuiUtilityModule], exports: [SuiSearch] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSearchModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    SuiDropdownModule,
                    SuiLocalizationModule,
                    SuiUtilityModule
                ],
                declarations: [
                    SuiSearch,
                    SuiSearchResult
                ],
                exports: [
                    SuiSearch
                ]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(SuiSearch, [SuiSearch,
    SuiSearchResult, i1.ɵNgClassR2Impl, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.ɵNgStyleR2Impl, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, i2.ɵangular_packages_forms_forms_y, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.RangeValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.CheckboxRequiredValidator, i2.EmailValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i3.SuiDropdown, i4.SuiDropdownMenu, i4.SuiDropdownMenuItem], [i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VhcmNoL3NlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7OztBQUU3RDtJQUFBO0tBZ0IrQjt1REFBbEIsZUFBZTtpSEFBZixlQUFlLGtCQWZmO2dCQUNMLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLHFCQUFxQjtnQkFDckIsZ0JBQWdCO2FBQ25COzBCQWhCTDtDQXlCK0IsQUFoQi9CLElBZ0IrQjtTQUFsQixlQUFlO3dGQUFmLGVBQWUsbUJBUHBCLFNBQVM7UUFDVCxlQUFlLGFBUmYsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLGdCQUFnQixhQU9oQixTQUFTO2tEQUdKLGVBQWU7Y0FoQjNCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixnQkFBZ0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDVixTQUFTO29CQUNULGVBQWU7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxTQUFTO2lCQUNaO2FBQ0o7O3VCQU5PLFNBQVMsR0FBVCxTQUFTO0lBQ1QsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBTdWlEcm9wZG93bk1vZHVsZSB9IGZyb20gXCIuLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVV0aWxpdHlNb2R1bGUgfSBmcm9tIFwiLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWFyY2ggfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xuaW1wb3J0IHsgU3VpU2VhcmNoUmVzdWx0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBTdWlEcm9wZG93bk1vZHVsZSxcbiAgICAgICAgU3VpTG9jYWxpemF0aW9uTW9kdWxlLFxuICAgICAgICBTdWlVdGlsaXR5TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3VpU2VhcmNoLFxuICAgICAgICBTdWlTZWFyY2hSZXN1bHRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3VpU2VhcmNoXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2hNb2R1bGUge31cbiJdfQ==