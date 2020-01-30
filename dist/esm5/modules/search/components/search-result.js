import { Component, ViewChild, ViewContainerRef, HostBinding, Input, TemplateRef } from "@angular/core";
import { SuiComponentFactory } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "../../../misc/util/internal";
import * as i2 from "@angular/common";
var _c0 = ["templateSibling"];
function SuiSearchResult_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    var ctx_r215 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r215.formatter(ctx_r215.value, ctx_r215.query), i0.ɵɵsanitizeHtml);
} }
// See https://github.com/Microsoft/TypeScript/issues/13449.
var templateRef = TemplateRef;
var SuiSearchResult = /** @class */ (function () {
    function SuiSearchResult(componentFactory) {
        this.componentFactory = componentFactory;
        this.hasClasses = true;
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = function (value) { return ""; };
    }
    Object.defineProperty(SuiSearchResult.prototype, "template", {
        get: function () {
            return this._template;
        },
        set: function (template) {
            this._template = template;
            if (this.template) {
                this.componentFactory.createView(this.templateSibling, this.template, {
                    $implicit: this.value,
                    query: this.query
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiSearchResult.ɵfac = function SuiSearchResult_Factory(t) { return new (t || SuiSearchResult)(i0.ɵɵdirectiveInject(i1.SuiComponentFactory)); };
    SuiSearchResult.ɵcmp = i0.ɵɵdefineComponent({ type: SuiSearchResult, selectors: [["sui-search-result"]], viewQuery: function SuiSearchResult_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
        } }, hostVars: 2, hostBindings: function SuiSearchResult_HostBindings(rf, ctx, elIndex) { if (rf & 2) {
            i0.ɵɵclassProp("result", ctx.hasClasses);
        } }, inputs: { value: "value", query: "query", formatter: "formatter", template: "template" }, decls: 3, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]], template: function SuiSearchResult_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "span", null, 0);
            i0.ɵɵtemplate(2, SuiSearchResult_span_2_Template, 1, 1, "span", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.template);
        } }, directives: [i2.NgIf], encapsulation: 2 });
    return SuiSearchResult;
}());
export { SuiSearchResult };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSearchResult, [{
        type: Component,
        args: [{
                selector: "sui-search-result",
                template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value, query)\"></span>\n"
            }]
    }], function () { return [{ type: i1.SuiComponentFactory }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.result"]
        }], value: [{
            type: Input
        }], query: [{
            type: Input
        }], formatter: [{
            type: Input
        }], template: [{
            type: Input
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBeUIsV0FBVyxFQUMxRSxLQUFLLEVBQUUsV0FBVyxFQUNyQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7OztJQVV2RiwwQkFBcUU7OztJQUE3QyxpR0FBcUM7O0FBUDdELDREQUE0RDtBQUM1RCxJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFFaEM7SUEyQ0kseUJBQW1CLGdCQUFvQztRQUFwQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLDRIQUE0SDtRQUM1SCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxFQUFGLENBQUUsQ0FBQztJQUNqQyxDQUFDO0lBeEJELHNCQUNXLHFDQUFRO2FBRG5CO1lBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFvQixRQUFtRDtZQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2xFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNwQixDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7OztPQVZBO2tGQXBCUSxlQUFlO3dEQUFmLGVBQWU7NENBaUNjLGdCQUFnQjs7Ozs7OztZQXJDMUQsZ0NBQThCO1lBQzlCLGtFQUE4RDs7WUFBeEQsZUFBaUI7WUFBakIsb0NBQWlCOzswQkFkdkI7Q0EyREMsQUFqREQsSUFpREM7U0ExQ1ksZUFBZTtrREFBZixlQUFlO2NBUDNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsK0dBR2I7YUFDQTs7a0JBR0ksV0FBVzttQkFBQyxjQUFjOztrQkFHMUIsS0FBSzs7a0JBR0wsS0FBSzs7a0JBSUwsS0FBSzs7a0JBS0wsS0FBSzs7a0JBZ0JMLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsXG4gICAgSW5wdXQsIFRlbXBsYXRlUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBTdWlDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVJlc3VsdENvbnRleHQgfSBmcm9tIFwiLi9zZWFyY2hcIjtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM0NDkuXG5jb25zdCB0ZW1wbGF0ZVJlZiA9IFRlbXBsYXRlUmVmO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VhcmNoLXJlc3VsdFwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuICpuZ0lmPVwiIXRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXR0ZXIodmFsdWUsIHF1ZXJ5KVwiPjwvc3Bhbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VhcmNoUmVzdWx0PFQ+IHtcbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmVzdWx0XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBxdWVyeTpzdHJpbmc7XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBsYWJlbCBmcm9tIGEgZ2l2ZW4gdmFsdWUuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZm9ybWF0dGVyOihvYmo6VCwgcXVlcnk6c3RyaW5nKSA9PiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF90ZW1wbGF0ZT86VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlKCk6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdGVtcGxhdGUodGVtcGxhdGU6VGVtcGxhdGVSZWY8SVJlc3VsdENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudEZhY3RvcnkuY3JlYXRlVmlldyh0aGlzLnRlbXBsYXRlU2libGluZywgdGhpcy50ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGFjZWhvbGRlciB0byBkcmF3IHRlbXBsYXRlIGJlc2lkZS5cbiAgICBAVmlld0NoaWxkKFwidGVtcGxhdGVTaWJsaW5nXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gICAgcHVibGljIHRlbXBsYXRlU2libGluZzpWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBvbmVudEZhY3Rvcnk6U3VpQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQgd2UgbWFrZSB0aGlzIGZ1bmN0aW9uIHJldHVybiBhbiBlbXB0eSBzdHJpbmcsIGZvciB0aGUgYnJpZWYgbW9tZW50IHdoZW4gaXQgaXNuJ3QgZGlzcGxheWluZyB0aGUgY29ycmVjdCBsYWJlbC5cbiAgICAgICAgdGhpcy5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBcIlwiO1xuICAgIH1cbn1cbiJdfQ==