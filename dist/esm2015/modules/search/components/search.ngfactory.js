/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./search-result.ngfactory";
import * as i2 from "../../dropdown/directives/dropdown-menu";
import * as i3 from "./search-result";
import * as i4 from "../../../misc/util/services/component-factory.service";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
import * as i7 from "./search";
import * as i8 from "../../../behaviors/localization/services/localization.service";
var styles_SuiSearch = ["[_nghost-%COMP%] {\n    display: inline-block;\n    outline: 0;\n}\n\n\n.results[_ngcontent-%COMP%] {\n    margin-bottom: .5em;\n}"];
var RenderType_SuiSearch = i0.ɵcrt({ encapsulation: 0, styles: styles_SuiSearch, data: {} });
export { RenderType_SuiSearch as RenderType_SuiSearch };
function View_SuiSearch_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "i", [["class", "search icon"]], null, null, null, null, null))], null, null); }
function View_SuiSearch_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "sui-search-result", [["class", "item"]], [[2, "result", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.select(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_SuiSearchResult_0, i1.RenderType_SuiSearchResult)), i0.ɵdid(1, 16384, [[2, 4]], 1, i2.SuiDropdownMenuItem, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵqud(603979776, 3, { childDropdownMenu: 0 }), i0.ɵdid(3, 49152, null, 0, i3.SuiSearchResult, [i4.SuiComponentFactory], { value: [0, "value"], query: [1, "query"], formatter: [2, "formatter"], template: [3, "template"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.context.$implicit; var currVal_2 = _co.query; var currVal_3 = _co.resultFormatter; var currVal_4 = _co.resultTemplate; _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 3).hasClasses; _ck(_v, 0, 0, currVal_0); }); }
function View_SuiSearch_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "message empty"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), (_l()(), i0.ɵted(4, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.localeValues.noResults.header; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.localeValues.noResults.message; _ck(_v, 4, 0, currVal_1); }); }
export function View_SuiSearch_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { _menu: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 8, "div", [["class", "ui input"]], [[2, "icon", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "prompt"], ["type", "text"]], [[1, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (i0.ɵnov(_v, 3)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i0.ɵnov(_v, 3).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i0.ɵnov(_v, 3)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i0.ɵnov(_v, 3)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.query = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), i0.ɵdid(3, 16384, null, 0, i5.DefaultValueAccessor, [i0.Renderer2, i0.ElementRef, [2, i5.COMPOSITION_BUFFER_MODE]], null, null), i0.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i5.DefaultValueAccessor]), i0.ɵdid(5, 671744, null, 0, i5.NgModel, [[8, null], [8, null], [8, null], [6, i5.NG_VALUE_ACCESSOR]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i0.ɵdid(7, 16384, null, 0, i5.NgControlStatus, [[4, i5.NgControl]], null, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiSearch_1)), i0.ɵdid(9, 16384, null, 0, i6.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 6, "div", [["class", "results"], ["menuSelectedItemClass", "active"], ["suiDropdownMenu", ""]], [[2, "transition", null], [2, "visible", null], [2, "hidden", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 11).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(11, 1196032, [[1, 4]], 1, i2.SuiDropdownMenu, [i0.Renderer2, i0.ElementRef, i0.ChangeDetectorRef], { menuTransition: [0, "menuTransition"], menuTransitionDuration: [1, "menuTransitionDuration"], menuSelectedItemClass: [2, "menuSelectedItemClass"] }, null), i0.ɵqud(603979776, 2, { _itemsQueryInternal: 1 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiSearch_2)), i0.ɵdid(14, 278528, null, 0, i6.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiSearch_3)), i0.ɵdid(16, 16384, null, 0, i6.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.query; _ck(_v, 5, 0, currVal_9); var currVal_10 = _co.hasIcon; _ck(_v, 9, 0, currVal_10); var currVal_14 = _co.transition; var currVal_15 = _co.transitionDuration; var currVal_16 = "active"; _ck(_v, 11, 0, currVal_14, currVal_15, currVal_16); var currVal_17 = _co.results; _ck(_v, 14, 0, currVal_17); var currVal_18 = (_co.results.length == 0); _ck(_v, 16, 0, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasIcon; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.placeholder; var currVal_2 = i0.ɵnov(_v, 7).ngClassUntouched; var currVal_3 = i0.ɵnov(_v, 7).ngClassTouched; var currVal_4 = i0.ɵnov(_v, 7).ngClassPristine; var currVal_5 = i0.ɵnov(_v, 7).ngClassDirty; var currVal_6 = i0.ɵnov(_v, 7).ngClassValid; var currVal_7 = i0.ɵnov(_v, 7).ngClassInvalid; var currVal_8 = i0.ɵnov(_v, 7).ngClassPending; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_11 = i0.ɵnov(_v, 11).transitionClass; var currVal_12 = i0.ɵnov(_v, 11).isVisible; var currVal_13 = i0.ɵnov(_v, 11).isHidden; _ck(_v, 10, 0, currVal_11, currVal_12, currVal_13); }); }
export function View_SuiSearch_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "sui-search", [], [[2, "ui", null], [2, "search", null], [1, "tabindex", 0], [2, "active", null], [2, "loading", null]], [[null, "focusin"], [null, "focusout"]], function (_v, en, $event) { var ad = true; if (("focusin" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onFocusIn() !== false);
        ad = (pd_0 && ad);
    } if (("focusout" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onFocusOut($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_SuiSearch_0, RenderType_SuiSearch)), i0.ɵdid(1, 4243456, null, 0, i7.SuiSearch, [i0.ElementRef, i0.Renderer2, i8.SuiLocalizationService], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).hasClasses; var currVal_1 = i0.ɵnov(_v, 1).hasClasses; var currVal_2 = i0.ɵnov(_v, 1).tabindex; var currVal_3 = i0.ɵnov(_v, 1).isActive; var currVal_4 = i0.ɵnov(_v, 1).isSearching; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
var SuiSearchNgFactory = i0.ɵccf("sui-search", i7.SuiSearch, View_SuiSearch_Host_0, { hasIcon: "hasIcon", placeholder: "placeholder", options: "options", optionsFilter: "optionsFilter", optionsLookup: "optionsLookup", optionsField: "optionsField", resultFormatter: "resultFormatter", resultTemplate: "resultTemplate", retainSelectedResult: "retainSelectedResult", searchDelay: "searchDelay", maxResults: "maxResults", transition: "transition", transitionDuration: "transitionDuration" }, { onResultSelected: "resultSelected" }, []);
export { SuiSearchNgFactory as SuiSearchNgFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm5nZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLm5nZmFjdG9yeS50cyIsIm1vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLnRzLlN1aVNlYXJjaC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRENHSSxrR0FBdUM7b0RBUXZDLGdMQU11QyxZQUFwQjs7d0JBQW1CO01BTnRDLGlaQU11QyxpREFKcEIsa0JBQVcsb0JBQ1gsbUJBQWUsUUFDZixtQkFBNkIsa0JBQzdCLG1CQUEyQixpQkFMOUMsWUFNdUMsRUFKcEIsU0FBVyxFQUNYLFNBQWUsRUFDZixTQUE2QixFQUM3QixTQUEyQiwyQkFMOUMsa0VBTXVDO29EQUV2QyxzR0FBdUQsS0FDbkQsK0ZBQW9CLEtBQUEsZ0NBQW1DLE1BQ3ZELG9HQUF5QixLQUFBLGdDQUFvQyx5REFEekMsMEVBQW1DLEdBQzlCLDJFQUFvQztnR0FwQnJFLG9LQUF1RSxZQUExQjs7d0JBQXlCO01BQXRFLHdCQUF1RSxLQUNuRTs7Ozs7Ozs7Ozs7d0JBQTBHO01BQXBCOzt3QkFBbUI7TUFBekcseWlCQUEwRyxJQUMxRyx5S0FBdUMsSUFFM0M7Ozt5VkFJb0MsTUFFaEMsd01BTXVDLElBRXZDLDBLQUF1RCxpREFqQitCLG1CQUFtQixRQUF6RyxZQUEwRyxFQUFwQixTQUFtQixHQUN0RyxvQkFBZSxVQUFsQixZQUF1QyxFQUFwQyxVQUFlLEdBSWpCLG9CQUE2QixhQUM3QixvQkFBNkMscUJBQzdDLHlCQUE4QixFQUpuQyxhQUlvQyxFQUYvQixVQUE2QixFQUM3QixVQUE2QyxFQUM3QyxVQUE4QixHQUVaLG9CQUF5QixVQUE1QyxhQU11QyxFQU5wQixVQUF5QixHQVF2Qyx5Q0FBMkIsR0FBaEMsYUFBdUQsRUFBbEQsVUFBMkIsbURBbEJkLG1CQUFzQixVQUE1QyxZQUF1RSxFQUFqRCxTQUFzQixHQUNOLG1CQUFnQyxjQUFsRSxvVkFBMEcsRUFBeEUsU0FBZ0MsRUFBbEUsMkVBQTBHLEdBRzlHLDBMQUlvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGkwIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaTAuQ29tcG9uZW50RmFjdG9yeTtcbiIsIlxuPGRpdiBjbGFzcz1cInVpIGlucHV0XCIgW2NsYXNzLmljb25dPVwiaGFzSWNvblwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJwcm9tcHRcIiB0eXBlPVwidGV4dFwiIFthdHRyLnBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgWyhuZ01vZGVsKV09XCJxdWVyeVwiPlxuICAgIDxpICpuZ0lmPVwiaGFzSWNvblwiIGNsYXNzPVwic2VhcmNoIGljb25cIj48L2k+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyZXN1bHRzXCJcbiAgICAgc3VpRHJvcGRvd25NZW51XG4gICAgIFttZW51VHJhbnNpdGlvbl09XCJ0cmFuc2l0aW9uXCJcbiAgICAgW21lbnVUcmFuc2l0aW9uRHVyYXRpb25dPVwidHJhbnNpdGlvbkR1cmF0aW9uXCJcbiAgICAgbWVudVNlbGVjdGVkSXRlbUNsYXNzPVwiYWN0aXZlXCI+XG5cbiAgICA8c3VpLXNlYXJjaC1yZXN1bHQgKm5nRm9yPVwibGV0IHIgb2YgcmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdHRlcl09XCJyZXN1bHRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwicmVzdWx0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHIpXCI+PC9zdWktc2VhcmNoLXJlc3VsdD5cblxuICAgIDxkaXYgKm5nSWY9XCJyZXN1bHRzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJtZXNzYWdlIGVtcHR5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLmhlYWRlciB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBsb2NhbGVWYWx1ZXMubm9SZXN1bHRzLm1lc3NhZ2UgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19