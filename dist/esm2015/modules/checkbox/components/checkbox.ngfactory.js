/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./checkbox";
var styles_SuiCheckbox = [];
var RenderType_SuiCheckbox = i0.ɵcrt({ encapsulation: 2, styles: styles_SuiCheckbox, data: {} });
export { RenderType_SuiCheckbox as RenderType_SuiCheckbox };
export function View_SuiCheckbox_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { _checkboxElement: 0 }), (_l()(), i0.ɵeld(1, 0, [[1, 0], ["checkbox", 1]], null, 5, "input", [["class", "hidden"], ["type", "checkbox"]], [[1, "name", 0], [1, "checked", 0], [1, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).onChange($event.target.checked) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.isChecked = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(2, 16384, null, 0, i1.CheckboxControlValueAccessor, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i1.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.CheckboxControlValueAccessor]), i0.ɵdid(4, 671744, null, 0, i1.NgModel, [[8, null], [8, null], [8, null], [6, i1.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i1.NgControl, null, [i1.NgModel]), i0.ɵdid(6, 16384, null, 0, i1.NgControlStatus, [[4, i1.NgControl]], null, null), (_l()(), i0.ɵeld(7, 0, null, null, 1, "label", [], null, null, null, null, null)), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_10 = _co.isChecked; _ck(_v, 4, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.name; var currVal_1 = _co.checkedAttribute; var currVal_2 = _co.isDisabledAttribute; var currVal_3 = i0.ɵnov(_v, 6).ngClassUntouched; var currVal_4 = i0.ɵnov(_v, 6).ngClassTouched; var currVal_5 = i0.ɵnov(_v, 6).ngClassPristine; var currVal_6 = i0.ɵnov(_v, 6).ngClassDirty; var currVal_7 = i0.ɵnov(_v, 6).ngClassValid; var currVal_8 = i0.ɵnov(_v, 6).ngClassInvalid; var currVal_9 = i0.ɵnov(_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
export function View_SuiCheckbox_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "sui-checkbox", [], [[2, "ui", null], [2, "checkbox", null], [2, "checked", null], [2, "read-only", null]], [[null, "mousedown"], [null, "click"], [null, "focusout"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onClick() !== false);
        ad = (pd_1 && ad);
    } if (("focusout" === en)) {
        var pd_2 = (i0.ɵnov(_v, 1).onFocusOut() !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_SuiCheckbox_0, RenderType_SuiCheckbox)), i0.ɵdid(1, 49152, null, 0, i2.SuiCheckbox, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).hasClasses; var currVal_1 = i0.ɵnov(_v, 1).hasClasses; var currVal_2 = i0.ɵnov(_v, 1).isChecked; var currVal_3 = i0.ɵnov(_v, 1).isReadonly; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
var SuiCheckboxNgFactory = i0.ɵccf("sui-checkbox", i2.SuiCheckbox, View_SuiCheckbox_Host_0, { name: "name", isDisabled: "isDisabled", isReadonly: "isReadonly" }, { onCheckChange: "checkChange", onTouched: "touched" }, ["*"]);
export { SuiCheckboxNgFactory as SuiCheckboxNgFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gubmdmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jaGVja2JveC9jb21wb25lbnRzL2NoZWNrYm94Lm5nZmFjdG9yeS50cyIsIm1vZHVsZXMvY2hlY2tib3gvY29tcG9uZW50cy9jaGVja2JveC50cy5TdWlDaGVja2JveC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs2R0NDQTs7Ozs7d0JBTWlCO01BRFY7O3dCQUF1QjtNQUw5Qix3aEJBTWlCLElBQ2pCLDhFQUFPLElBQ0gsZUFBWSxpREFIVCxvQkFBdUIsWUFMOUIsWUFNaUIsRUFEVixVQUF1QixtREFIdkIsbUJBQWtCLE9BQ2xCLG1CQUFpQyxtQkFDakMsbUJBQXFDLHNCQUo1QyxvVkFNaUIsRUFKVixTQUFrQixFQUNsQixTQUFpQyxFQUNqQyxTQUFxQyxFQUo1QywyRUFNaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbmkwLkNvbXBvbmVudEZhY3Rvcnk7XG4iLCJcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgWyhuZ01vZGVsKV09XCJpc0NoZWNrZWRcIlxuICAgICAgICNjaGVja2JveD5cbjxsYWJlbD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2xhYmVsPlxuIl19