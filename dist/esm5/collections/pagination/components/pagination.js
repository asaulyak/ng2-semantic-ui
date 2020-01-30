import { __read } from "tslib";
import { Component, Input, Output, EventEmitter, HostBinding } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SuiPagination_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function SuiPagination_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r129); var ctx_r128 = i0.ɵɵnextContext(); return ctx_r128.setPage(1); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r121 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r121.page === 1);
} }
function SuiPagination_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function SuiPagination_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r131); var ctx_r130 = i0.ɵɵnextContext(); return ctx_r130.setPage(ctx_r130.page - 1); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r122 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", !ctx_r122.hasPrevious());
} }
function SuiPagination_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r135 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function SuiPagination_ng_container_2_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r135); var ctx_r134 = i0.ɵɵnextContext(2); return ctx_r134.setPage(1); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function SuiPagination_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1, "...");
    i0.ɵɵelementEnd();
} }
function SuiPagination_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SuiPagination_ng_container_2_a_1_Template, 3, 0, "a", 6);
    i0.ɵɵtemplate(2, SuiPagination_ng_container_2_a_2_Template, 2, 0, "a", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r123 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r123.pages[0] !== 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r123.pages[0] > 2);
} }
function SuiPagination_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r138 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function SuiPagination_a_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r138); var p_r136 = ctx.$implicit; var ctx_r137 = i0.ɵɵnextContext(); return ctx_r137.setPage(p_r136); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var p_r136 = ctx.$implicit;
    var ctx_r124 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", p_r136 === ctx_r124.page);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", p_r136, "\n");
} }
function SuiPagination_ng_container_4_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtext(1, "...");
    i0.ɵɵelementEnd();
} }
function SuiPagination_ng_container_4_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function SuiPagination_ng_container_4_a_2_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r142); var ctx_r141 = i0.ɵɵnextContext(2); return ctx_r141.setPage(ctx_r141.pageCount); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r140 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r140.pageCount);
} }
function SuiPagination_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SuiPagination_ng_container_4_a_1_Template, 2, 0, "a", 7);
    i0.ɵɵtemplate(2, SuiPagination_ng_container_4_a_2_Template, 3, 1, "a", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r125 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r125.pages[ctx_r125.pages.length - 1] < ctx_r125.pageCount - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r125.pages[ctx_r125.pages.length - 1] !== ctx_r125.pageCount);
} }
function SuiPagination_a_5_Template(rf, ctx) { if (rf & 1) {
    var _r144 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function SuiPagination_a_5_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r144); var ctx_r143 = i0.ɵɵnextContext(); return ctx_r143.setPage(ctx_r143.page + 1); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r126 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", !ctx_r126.hasNext());
} }
function SuiPagination_a_6_Template(rf, ctx) { if (rf & 1) {
    var _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function SuiPagination_a_6_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r146); var ctx_r145 = i0.ɵɵnextContext(); return ctx_r145.setPage(ctx_r145.pageCount); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r127 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r127.page === ctx_r127.pageCount);
} }
var SuiPagination = /** @class */ (function () {
    function SuiPagination() {
        this.hasClasses = true;
        this.pageChange = new EventEmitter();
        this.pageSize = 10;
        this._page = 1;
        this._pages = [];
        this.pageCount = 1;
        this.hasNavigationLinks = true;
        this.hasBoundaryLinks = false;
        this.canRotate = false;
        this.hasEllipses = true;
    }
    Object.defineProperty(SuiPagination.prototype, "maxSize", {
        get: function () {
            return this._maxSize;
        },
        set: function (value) {
            this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "collectionSize", {
        get: function () {
            return this._collectionSize;
        },
        set: function (value) {
            this._collectionSize = Math.max(value, 0);
            this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "hasNavigationLinks", {
        get: function () {
            var maxSize = this._maxSize || this.pageCount;
            return this._hasNavigationLinks || maxSize < this.pageCount;
        },
        set: function (value) {
            this._hasNavigationLinks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            this.setPage(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPagination.prototype, "pages", {
        get: function () {
            return this._pages;
        },
        enumerable: true,
        configurable: true
    });
    // Public methods
    SuiPagination.prototype.hasPrevious = function () {
        return this.page > 1;
    };
    SuiPagination.prototype.hasNext = function () {
        return this.page < this.pageCount;
    };
    SuiPagination.prototype.setPage = function (newPage) {
        var value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
        if (value !== this._page) {
            this._page = value;
            this.pageChange.emit(this._page);
        }
    };
    // Lifecycle hooks
    SuiPagination.prototype.ngOnChanges = function () {
        this.updatePages();
    };
    // Private methods
    SuiPagination.prototype.updatePages = function () {
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        var _a = __read(this.applyPagination(), 2), start = _a[0], end = _a[1];
        this._pages = Array(end - start)
            .fill(start + 1)
            .map(function (s, i) { return s + i; });
    };
    SuiPagination.prototype.applyPagination = function () {
        var maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
        var page = Math.ceil(this.page / maxSize) - 1;
        var start = 0;
        var end = this.pageCount;
        if (this.canRotate) {
            var leftOffset = Math.floor(maxSize / 2);
            var rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
            if (this.page <= leftOffset) {
                end = maxSize;
            }
            else if (this.pageCount - this.page < leftOffset) {
                start = this.pageCount - maxSize;
            }
            else {
                start = this.page - leftOffset - 1;
                end = this.page + rightOffset;
            }
        }
        else {
            start = page * maxSize;
            end = start + maxSize;
        }
        return [start, Math.min(end, this.pageCount)];
    };
    SuiPagination.ɵfac = function SuiPagination_Factory(t) { return new (t || SuiPagination)(); };
    SuiPagination.ɵcmp = i0.ɵɵdefineComponent({ type: SuiPagination, selectors: [["sui-pagination"]], hostVars: 6, hostBindings: function SuiPagination_HostBindings(rf, ctx, elIndex) { if (rf & 2) {
            i0.ɵɵclassProp("ui", ctx.hasClasses)("pagination", ctx.hasClasses)("menu", ctx.hasClasses);
        } }, inputs: { maxSize: "maxSize", pageSize: "pageSize", collectionSize: "collectionSize", hasNavigationLinks: "hasNavigationLinks", hasBoundaryLinks: "hasBoundaryLinks", canRotate: "canRotate", hasEllipses: "hasEllipses", page: "page" }, outputs: { pageChange: "pageChange" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 7, vars: 7, consts: [["class", "item", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["class", "item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"], [1, "angle", "double", "left", "icon"], [1, "angle", "left", "icon"], ["class", "item", 3, "click", 4, "ngIf"], ["class", "disabled item", 4, "ngIf"], [1, "disabled", "item"], [1, "angle", "right", "icon"], [1, "angle", "double", "right", "icon"]], template: function SuiPagination_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SuiPagination_a_0_Template, 3, 2, "a", 0);
            i0.ɵɵtemplate(1, SuiPagination_a_1_Template, 3, 2, "a", 0);
            i0.ɵɵtemplate(2, SuiPagination_ng_container_2_Template, 3, 2, "ng-container", 1);
            i0.ɵɵtemplate(3, SuiPagination_a_3_Template, 2, 3, "a", 2);
            i0.ɵɵtemplate(4, SuiPagination_ng_container_4_Template, 3, 2, "ng-container", 1);
            i0.ɵɵtemplate(5, SuiPagination_a_5_Template, 3, 2, "a", 0);
            i0.ɵɵtemplate(6, SuiPagination_a_6_Template, 3, 2, "a", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.hasBoundaryLinks);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasNavigationLinks);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasEllipses);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.pages);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasEllipses);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasNavigationLinks);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasBoundaryLinks);
        } }, directives: [i1.NgIf, i1.NgForOf], styles: ["[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n    transition: none;\n}"] });
    return SuiPagination;
}());
export { SuiPagination };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiPagination, [{
        type: Component,
        args: [{
                selector: "sui-pagination",
                template: "\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(1)\" [class.disabled]=\"page===1\">\n    <span><i class=\"angle double left icon\"></i></span>\n</a>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page-1)\" [class.disabled]=\"!hasPrevious()\">\n    <span><i class=\"angle left icon\"></i></span>\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"item\" (click)=\"setPage(1)\" *ngIf=\"pages[0] !== 1\">\n        <span>1</span>\n    </a>\n    <a class=\"disabled item\" *ngIf=\"pages[0] > 2\">...</a>\n</ng-container>\n<a *ngFor=\"let p of pages\" class=\"item\" [class.active]=\"p===page\" (click)=\"setPage(p)\">\n    {{ p }}\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"disabled item\" *ngIf=\"pages[pages.length - 1] < pageCount - 1\">...</a>\n    <a class=\"item\" (click)=\"setPage(pageCount)\" *ngIf=\"pages[pages.length - 1] !== pageCount\">\n        <span>{{ pageCount }}</span>\n    </a>\n</ng-container>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page+1)\" [class.disabled]=\"!hasNext()\">\n    <span><i class=\"angle right icon\"></i></span>\n</a>\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(pageCount)\" [class.disabled]=\"page===pageCount\">\n    <span><i class=\"angle double right icon\"></i></span>\n</a>\n",
                styles: ["\n:host .item {\n    transition: none;\n}\n"]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.pagination"]
        }, {
            type: HostBinding,
            args: ["class.menu"]
        }], pageChange: [{
            type: Output
        }], maxSize: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], collectionSize: [{
            type: Input
        }], hasNavigationLinks: [{
            type: Input
        }], hasBoundaryLinks: [{
            type: Input
        }], canRotate: [{
            type: Input
        }], hasEllipses: [{
            type: Input
        }], page: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL3BhZ2luYXRpb24vY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFLL0YsNEJBQ0k7SUFEc0MsNEtBQWlCLENBQUMsS0FBRTtJQUMxRCw0QkFBTTtJQUFBLHVCQUFzQztJQUFBLGlCQUFPO0lBQ3ZELGlCQUFJOzs7SUFGMkQsK0NBQTJCOzs7O0lBRzFGLDRCQUNJO0lBRHVDLDRMQUFzQixDQUFDLEtBQUU7SUFDaEUsNEJBQU07SUFBQSx1QkFBK0I7SUFBQSxpQkFBTztJQUNoRCxpQkFBSTs7O0lBRmlFLG1EQUFpQzs7OztJQUlsRyw0QkFDSTtJQURZLDRMQUFpQixDQUFDLEtBQUU7SUFDaEMsNEJBQU07SUFBQSxpQkFBQztJQUFBLGlCQUFPO0lBQ2xCLGlCQUFJOzs7SUFDSiw0QkFBOEM7SUFBQSxtQkFBRztJQUFBLGlCQUFJOzs7SUFKekQsNkJBQ0k7SUFBQSx5RUFDSTtJQUVKLHlFQUE4QztJQUNsRCwwQkFBZTs7O0lBSjBCLGVBQXNCO0lBQXRCLDhDQUFzQjtJQUdsQyxlQUFvQjtJQUFwQiw0Q0FBb0I7Ozs7SUFFakQsNEJBQ0k7SUFEOEQsbU5BQW9CO0lBQ2xGLFlBQ0o7SUFBQSxpQkFBSTs7OztJQUZvQyxrREFBeUI7SUFDN0QsZUFDSjtJQURJLHdDQUNKOzs7SUFFSSw0QkFBeUU7SUFBQSxtQkFBRztJQUFBLGlCQUFJOzs7O0lBQ2hGLDRCQUNJO0lBRFksbU5BQTRCO0lBQ3hDLDRCQUFNO0lBQUEsWUFBZTtJQUFBLGlCQUFPO0lBQ2hDLGlCQUFJOzs7SUFETSxlQUFlO0lBQWYsd0NBQWU7OztJQUg3Qiw2QkFDSTtJQUFBLHlF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QUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OEVBbEpRLGFBQWE7c0RBQWIsYUFBYTs7O1lBbEMxQiwwREFDSTtZQUVKLDBEQUNJO1lBRUosZ0ZBQ0k7WUFLSiwwREFDSTtZQUVKLGdGQUNJO1lBS0osMERBQ0k7WUFFSiwwREFDSTs7WUF6QkQsMkNBQXdCO1lBR3hCLGVBQTBCO1lBQTFCLDZDQUEwQjtZQUdmLGVBQW1CO1lBQW5CLHNDQUFtQjtZQU05QixlQUF1QjtZQUF2QixtQ0FBdUI7WUFHWixlQUFtQjtZQUFuQixzQ0FBbUI7WUFNOUIsZUFBMEI7WUFBMUIsNkNBQTBCO1lBRzFCLGVBQXdCO1lBQXhCLDJDQUF3Qjs7d0JBN0IzQjtDQTBMQyxBQXhMRCxJQXdMQztTQW5KWSxhQUFhO2tEQUFiLGFBQWE7Y0FyQ3pCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsZ3pDQTRCYjtnQkFDRyxNQUFNLEVBQUUsQ0FBQyw2Q0FJWixDQUFDO2FBQ0Q7O2tCQUdJLFdBQVc7bUJBQUMsVUFBVTs7a0JBQ3RCLFdBQVc7bUJBQUMsa0JBQWtCOztrQkFDOUIsV0FBVzttQkFBQyxZQUFZOztrQkFNeEIsTUFBTTs7a0JBVU4sS0FBSzs7a0JBU0wsS0FBSzs7a0JBR0wsS0FBSzs7a0JBVUwsS0FBSzs7a0JBVUwsS0FBSzs7a0JBR0wsS0FBSzs7a0JBR0wsS0FBSzs7a0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBhZ2luYXRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPGEgKm5nSWY9XCJoYXNCb3VuZGFyeUxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgIChjbGljayk9XCJzZXRQYWdlKDEpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT0xXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSBkb3VibGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZS0xKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzUHJldmlvdXMoKVwiPlxuICAgIDxzcGFuPjxpIGNsYXNzPVwiYW5nbGUgbGVmdCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNFbGxpcHNlc1wiPlxuICAgIDxhIGNsYXNzPVwiaXRlbVwiIChjbGljayk9XCJzZXRQYWdlKDEpXCIgKm5nSWY9XCJwYWdlc1swXSAhPT0gMVwiPlxuICAgICAgICA8c3Bhbj4xPC9zcGFuPlxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzWzBdID4gMlwiPi4uLjwvYT5cbjwvbmctY29udGFpbmVyPlxuPGEgKm5nRm9yPVwibGV0IHAgb2YgcGFnZXNcIiBjbGFzcz1cIml0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInA9PT1wYWdlXCIgKGNsaWNrKT1cInNldFBhZ2UocClcIj5cbiAgICB7eyBwIH19XG48L2E+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRWxsaXBzZXNcIj5cbiAgICA8YSBjbGFzcz1cImRpc2FibGVkIGl0ZW1cIiAqbmdJZj1cInBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdIDwgcGFnZUNvdW50IC0gMVwiPi4uLjwvYT5cbiAgICA8YSBjbGFzcz1cIml0ZW1cIiAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgKm5nSWY9XCJwYWdlc1twYWdlcy5sZW5ndGggLSAxXSAhPT0gcGFnZUNvdW50XCI+XG4gICAgICAgIDxzcGFuPnt7IHBhZ2VDb3VudCB9fTwvc3Bhbj5cbiAgICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxhICpuZ0lmPVwiaGFzTmF2aWdhdGlvbkxpbmtzXCIgY2xhc3M9XCJpdGVtXCIgKGNsaWNrKT1cInNldFBhZ2UocGFnZSsxKVwiIFtjbGFzcy5kaXNhYmxlZF09XCIhaGFzTmV4dCgpXCI+XG4gICAgPHNwYW4+PGkgY2xhc3M9XCJhbmdsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbjxhICpuZ0lmPVwiaGFzQm91bmRhcnlMaW5rc1wiIGNsYXNzPVwiaXRlbVwiICAoY2xpY2spPVwic2V0UGFnZShwYWdlQ291bnQpXCIgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2U9PT1wYWdlQ291bnRcIj5cbiAgICA8c3Bhbj48aSBjbGFzcz1cImFuZ2xlIGRvdWJsZSByaWdodCBpY29uXCI+PC9pPjwvc3Bhbj5cbjwvYT5cbmAsXG4gICAgc3R5bGVzOiBbYFxuOmhvc3QgLml0ZW0ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlQYWdpbmF0aW9uIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucGFnaW5hdGlvblwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLm1lbnVcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgLy8gUHVibGljIG1lbWJlcnNcbiAgICBwdWJsaWMgcGFnZUNvdW50Om51bWJlcjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBwYWdlQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+O1xuXG4gICAgLy8gUHJpdmF0ZSBtZW1iZXJzXG4gICAgcHJpdmF0ZSBfbWF4U2l6ZT86bnVtYmVyO1xuICAgIHByaXZhdGUgX2NvbGxlY3Rpb25TaXplOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlOm51bWJlcjtcbiAgICBwcml2YXRlIF9wYWdlczpudW1iZXJbXTtcbiAgICBwcml2YXRlIF9oYXNOYXZpZ2F0aW9uTGlua3M6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhTaXplKCk6bnVtYmVyfHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhTaXplO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWF4U2l6ZSh2YWx1ZTpudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9ICh2YWx1ZSAhPSB1bmRlZmluZWQpID8gTWF0aC5tYXgodmFsdWUsIDEpIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBhZ2VTaXplOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBjb2xsZWN0aW9uU2l6ZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2xsZWN0aW9uU2l6ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvbGxlY3Rpb25TaXplKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2l6ZSA9IE1hdGgubWF4KHZhbHVlLCAwKTtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGhhc05hdmlnYXRpb25MaW5rcygpOmJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gdGhpcy5fbWF4U2l6ZSB8fCB0aGlzLnBhZ2VDb3VudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc05hdmlnYXRpb25MaW5rcyB8fCBtYXhTaXplIDwgdGhpcy5wYWdlQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNOYXZpZ2F0aW9uTGlua3ModmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNOYXZpZ2F0aW9uTGlua3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNCb3VuZGFyeUxpbmtzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBjYW5Sb3RhdGU6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGhhc0VsbGlwc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGFnZSgpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGFnZSh2YWx1ZTpudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zZXRQYWdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHBhZ2VzKCk6bnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSAxMDtcbiAgICAgICAgdGhpcy5fcGFnZSA9IDE7XG4gICAgICAgIHRoaXMuX3BhZ2VzID0gW107XG4gICAgICAgIHRoaXMucGFnZUNvdW50ID0gMTtcbiAgICAgICAgdGhpcy5oYXNOYXZpZ2F0aW9uTGlua3MgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhc0JvdW5kYXJ5TGlua3MgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW5Sb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNFbGxpcHNlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICBwdWJsaWMgaGFzUHJldmlvdXMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA+IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGhhc05leHQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA8IHRoaXMucGFnZUNvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQYWdlKG5ld1BhZ2U6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWU6bnVtYmVyID0gKE51bWJlci5pc0ludGVnZXIobmV3UGFnZSkpID8gTWF0aC5taW4oTWF0aC5tYXgobmV3UGFnZSwgMSksIHRoaXMucGFnZUNvdW50KSA6IDE7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGFnZSkge1xuICAgICAgICAgICAgdGhpcy5fcGFnZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMaWZlY3ljbGUgaG9va3NcbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlcygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIHByaXZhdGUgdXBkYXRlUGFnZXMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodGhpcy5fY29sbGVjdGlvblNpemUgLyB0aGlzLnBhZ2VTaXplKSk7XG5cbiAgICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdGhpcy5hcHBseVBhZ2luYXRpb24oKTtcblxuICAgICAgICB0aGlzLl9wYWdlcyA9IEFycmF5PG51bWJlcj4oZW5kIC0gc3RhcnQpXG4gICAgICAgICAgICAuZmlsbChzdGFydCArIDEpXG4gICAgICAgICAgICAubWFwKChzLCBpKSA9PiBzICsgaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseVBhZ2luYXRpb24oKTpbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgbWF4U2l6ZSA9ICh0aGlzLm1heFNpemUgIT0gdW5kZWZpbmVkKSA/IE1hdGgubWluKHRoaXMubWF4U2l6ZSwgdGhpcy5wYWdlQ291bnQpIDogdGhpcy5wYWdlQ291bnQ7XG5cbiAgICAgICAgY29uc3QgcGFnZSA9IE1hdGguY2VpbCh0aGlzLnBhZ2UgLyBtYXhTaXplKSAtIDE7XG4gICAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICAgIGxldCBlbmQgPSB0aGlzLnBhZ2VDb3VudDtcblxuICAgICAgICBpZiAodGhpcy5jYW5Sb3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKG1heFNpemUgLyAyKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0T2Zmc2V0ID0gbWF4U2l6ZSAlIDIgPT09IDAgPyBsZWZ0T2Zmc2V0IC0gMSA6IGxlZnRPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgPD0gbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIGVuZCA9IG1heFNpemU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZUNvdW50IC0gdGhpcy5wYWdlIDwgbGVmdE9mZnNldCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlQ291bnQgLSBtYXhTaXplO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMucGFnZSAtIGxlZnRPZmZzZXQgLSAxO1xuICAgICAgICAgICAgICAgIGVuZCA9IHRoaXMucGFnZSArIHJpZ2h0T2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnQgPSBwYWdlICogbWF4U2l6ZTtcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgbWF4U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbc3RhcnQsIE1hdGgubWluKGVuZCwgdGhpcy5wYWdlQ291bnQpXTtcbiAgICB9XG59XG4iXX0=