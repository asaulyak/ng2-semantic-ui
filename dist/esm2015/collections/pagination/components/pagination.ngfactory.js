/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pagination";
var styles_SuiPagination = ["[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n    transition: none;\n}"];
var RenderType_SuiPagination = i0.ɵcrt({ encapsulation: 0, styles: styles_SuiPagination, data: {} });
export { RenderType_SuiPagination as RenderType_SuiPagination };
function View_SuiPagination_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "a", [["class", "item"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "i", [["class", "angle double left icon"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.page === 1); _ck(_v, 0, 0, currVal_0); }); }
function View_SuiPagination_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "a", [["class", "item"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.page - 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "i", [["class", "angle left icon"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hasPrevious(); _ck(_v, 0, 0, currVal_0); }); }
function View_SuiPagination_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "a", [["class", "item"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["1"]))], null, null); }
function View_SuiPagination_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["class", "disabled item"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["..."]))], null, null); }
function View_SuiPagination_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_4)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_5)), i0.ɵdid(4, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.pages[0] !== 1); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.pages[0] > 2); _ck(_v, 4, 0, currVal_1); }, null); }
function View_SuiPagination_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["class", "item"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(1, null, [" ", "\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit === _co.page); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_SuiPagination_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["class", "disabled item"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["..."]))], null, null); }
function View_SuiPagination_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "a", [["class", "item"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_co.pageCount) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageCount; _ck(_v, 2, 0, currVal_0); }); }
function View_SuiPagination_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_8)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_9)), i0.ɵdid(4, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.pages[(_co.pages.length - 1)] < (_co.pageCount - 1)); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.pages[(_co.pages.length - 1)] !== _co.pageCount); _ck(_v, 4, 0, currVal_1); }, null); }
function View_SuiPagination_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "a", [["class", "item"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage((_co.page + 1)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "i", [["class", "angle right icon"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hasNext(); _ck(_v, 0, 0, currVal_0); }); }
function View_SuiPagination_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "a", [["class", "item"]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setPage(_co.pageCount) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵeld(2, 0, null, null, 0, "i", [["class", "angle double right icon"]], null, null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.page === _co.pageCount); _ck(_v, 0, 0, currVal_0); }); }
export function View_SuiPagination_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_1)), i0.ɵdid(1, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_2)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_3)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_6)), i0.ɵdid(7, 278528, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_7)), i0.ɵdid(9, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_10)), i0.ɵdid(11, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SuiPagination_11)), i0.ɵdid(13, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hasBoundaryLinks; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.hasNavigationLinks; _ck(_v, 3, 0, currVal_1); var currVal_2 = _co.hasEllipses; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.pages; _ck(_v, 7, 0, currVal_3); var currVal_4 = _co.hasEllipses; _ck(_v, 9, 0, currVal_4); var currVal_5 = _co.hasNavigationLinks; _ck(_v, 11, 0, currVal_5); var currVal_6 = _co.hasBoundaryLinks; _ck(_v, 13, 0, currVal_6); }, null); }
export function View_SuiPagination_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "sui-pagination", [], [[2, "ui", null], [2, "pagination", null], [2, "menu", null]], null, null, View_SuiPagination_0, RenderType_SuiPagination)), i0.ɵdid(1, 573440, null, 0, i2.SuiPagination, [], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).hasClasses; var currVal_1 = i0.ɵnov(_v, 1).hasClasses; var currVal_2 = i0.ɵnov(_v, 1).hasClasses; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
var SuiPaginationNgFactory = i0.ɵccf("sui-pagination", i2.SuiPagination, View_SuiPagination_Host_0, { maxSize: "maxSize", pageSize: "pageSize", collectionSize: "collectionSize", hasNavigationLinks: "hasNavigationLinks", hasBoundaryLinks: "hasBoundaryLinks", canRotate: "canRotate", hasEllipses: "hasEllipses", page: "page" }, { pageChange: "pageChange" }, []);
export { SuiPaginationNgFactory as SuiPaginationNgFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5uZ2ZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJjb2xsZWN0aW9ucy9wYWdpbmF0aW9uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi5uZ2ZhY3RvcnkudHMiLCJjb2xsZWN0aW9ucy9wYWdpbmF0aW9uL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50cy5TdWlQYWdpbmF0aW9uLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3dEQ0NBLGtLQUEyRixZQUFqRDs7d0JBQW9CO01BQTlELHdCQUEyRixLQUN2Riw2RUFBTSxLQUFBLDZHQUFrQyx3REFEbUIsK0JBQTJCLEdBQTFGLFlBQTJGLEVBQTVCLFNBQTJCO3dEQUcxRixrS0FBdUcsWUFBNUQ7O3dCQUF5QjtNQUFwRSx3QkFBdUcsS0FDbkcsNkVBQU0sS0FBQSxzR0FBMkIsd0RBRGdDLG9CQUFpQyxnQkFBdEcsWUFBdUcsRUFBbEMsU0FBaUM7d0RBSWxHLCtJQUE0RCxZQUE1Qzs7d0JBQW9CO01BQXBDLHdCQUE0RCxLQUN4RCw2RUFBTSxLQUFBLDhCQUFDO3dEQUVYLG9HQUE4QyxLQUFBLGdDQUFHO3dEQUpyRCw2RUFBa0MsS0FDOUIsNktBQTRELElBRzVELDZLQUE4QyxzRkFIVCxtQ0FBc0IsR0FBM0QsWUFBNEQsRUFBdkIsU0FBc0IsR0FHbEMsaUNBQW9CLEdBQTdDLFlBQThDLEVBQXJCLFNBQW9CO3dEQUVqRCxnS0FBdUYsWUFBckI7O3dCQUFvQjtNQUF0Rix3QkFBdUYsS0FBQSxtQ0FFdkYseURBRndDLDZDQUF5QixRQUFqRSxZQUF1RixFQUEvQyxTQUF5QixHQUFzQiw2REFFdkY7d0RBRUksb0dBQXlFLEtBQUEsZ0NBQUc7d0RBQzVFLCtJQUEyRixZQUEzRTs7d0JBQTRCO01BQTVDLHdCQUEyRixLQUN2Riw2RUFBTSxLQUFBLCtJQUFlO3dEQUg3Qiw2RUFBa0MsS0FDOUIsNktBQXlFLElBQ3pFLDZLQUEyRixzRkFEbEUsdUVBQStDLElBQXhFLFlBQXlFLEVBQWhELFNBQStDLEdBQzNCLDBEQUE2QyxhQUExRixZQUEyRixFQUE5QyxTQUE2Qzt5REFJOUYsa0tBQW1HLFlBQXhEOzt3QkFBeUI7TUFBcEUsd0JBQW1HLEtBQy9GLDZFQUFNLEtBQUEsdUdBQTRCLHdEQUQrQixvQkFBNkIsWUFBbEcsWUFBbUcsRUFBOUIsU0FBNkI7eURBR2xHLGtLQUEyRyxZQUFqRTs7d0JBQTRCO01BQXRFLHdCQUEyRyxLQUN2Ryw2RUFBTSxLQUFBLDhHQUFtQyx3REFEMEIsaUNBQW1DLGFBQTFHLFlBQTJHLEVBQXBDLFNBQW1DOytEQXhCMUcsNktBQTJGLElBRzNGLDZLQUF1RyxJQUd2Ryw2S0FBa0MsSUFNbEMsMk1BQXVGLElBR3ZGLDZLQUFrQyxJQU1sQywrS0FBbUcsSUFHbkcsK0tBQTJHLGlEQXhCeEcsbUJBQXdCLG1CQUEzQixZQUEyRixFQUF4RixTQUF3QixHQUd4QixtQkFBMEIscUJBQTdCLFlBQXVHLEVBQXBHLFNBQTBCLEdBR2YsbUJBQW1CLGNBQWpDLFlBQWtDLEVBQXBCLFNBQW1CLEdBTTlCLG1CQUF1QixRQUExQixZQUF1RixFQUFwRixTQUF1QixHQUdaLG1CQUFtQixjQUFqQyxZQUFrQyxFQUFwQixTQUFtQixHQU05QixtQkFBMEIscUJBQTdCLGFBQW1HLEVBQWhHLFNBQTBCLEdBRzFCLG1CQUF3QixtQkFBM0IsYUFBMkcsRUFBeEcsU0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbmkwLkNvbXBvbmVudEZhY3Rvcnk7XG4iLCJcbjxhICpuZ0lmPVwiaGFzQm91bmRhcnlMaW5rc1wiIGNsYXNzPVwiaXRlbVwiICAoY2xpY2spPVwic2V0UGFnZSgxKVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlPT09MVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgZG91YmxlIGxlZnQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48YSAqbmdJZj1cImhhc05hdmlnYXRpb25MaW5rc1wiIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2UtMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWhhc1ByZXZpb3VzKClcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGxlZnQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRWxsaXBzZXNcIj5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZSgxKVwiICpuZ0lmPVwicGFnZXNbMF0gIT09IDFcIj5cbiAgICAgICAgPHNwYW4+MTwvc3Bhbj5cbiAgICA8L2E+XG4gICAgPGEgY2xhc3M9XCJkaXNhYmxlZCBpdGVtXCIgKm5nSWY9XCJwYWdlc1swXSA+IDJcIj4uLi48L2E+XG48L25nLWNvbnRhaW5lcj5cbjxhICpuZ0Zvcj1cImxldCBwIG9mIHBhZ2VzXCIgY2xhc3M9XCJpdGVtXCIgW2NsYXNzLmFjdGl2ZV09XCJwPT09cGFnZVwiIChjbGljayk9XCJzZXRQYWdlKHApXCI+XG4gICAge3sgcCB9fVxuPC9hPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0VsbGlwc2VzXCI+XG4gICAgPGEgY2xhc3M9XCJkaXNhYmxlZCBpdGVtXCIgKm5nSWY9XCJwYWdlc1twYWdlcy5sZW5ndGggLSAxXSA8IHBhZ2VDb3VudCAtIDFcIj4uLi48L2E+XG4gICAgPGEgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZUNvdW50KVwiICpuZ0lmPVwicGFnZXNbcGFnZXMubGVuZ3RoIC0gMV0gIT09IHBhZ2VDb3VudFwiPlxuICAgICAgICA8c3Bhbj57eyBwYWdlQ291bnQgfX08L3NwYW4+XG4gICAgPC9hPlxuPC9uZy1jb250YWluZXI+XG48YSAqbmdJZj1cImhhc05hdmlnYXRpb25MaW5rc1wiIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKHBhZ2UrMSlcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWhhc05leHQoKVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgcmlnaHQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG48YSAqbmdJZj1cImhhc0JvdW5kYXJ5TGlua3NcIiBjbGFzcz1cIml0ZW1cIiAgKGNsaWNrKT1cInNldFBhZ2UocGFnZUNvdW50KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlPT09cGFnZUNvdW50XCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBkb3VibGUgcmlnaHQgaWNvblwiPjwvaT48L3NwYW4+XG48L2E+XG4iXX0=