import { __extends } from "tslib";
import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef } from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown/internal";
import { HandledEvent } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
var _c0 = ["templateSibling"];
var SuiSelectOption = /** @class */ (function (_super) {
    __extends(SuiSelectOption, _super);
    function SuiSelectOption(renderer, element, changeDetector) {
        var _this = 
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        _super.call(this, renderer, element) || this;
        _this.changeDetector = changeDetector;
        _this.hasClasses = true;
        _this.isActive = false;
        _this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        _this.renderedText = "";
        _this.usesTemplate = false;
        return _this;
    }
    Object.defineProperty(SuiSelectOption.prototype, "formatter", {
        set: function (formatter) {
            if (!this.usesTemplate) {
                this.renderedText = formatter(this.value);
            }
            else {
                this.renderedText = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiSelectOption.prototype.onClick = function (e) {
        var _this = this;
        e.eventHandled = true;
        setTimeout(function () { return _this.onSelected.emit(_this.value); });
    };
    SuiSelectOption.ɵfac = function SuiSelectOption_Factory(t) { return new (t || SuiSelectOption)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    SuiSelectOption.ɵcmp = i0.ɵɵdefineComponent({ type: SuiSelectOption, selectors: [["sui-select-option"]], viewQuery: function SuiSelectOption_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
        } }, hostVars: 4, hostBindings: function SuiSelectOption_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function SuiSelectOption_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("item", ctx.hasClasses)("active", ctx.isActive);
        } }, inputs: { value: "value" }, outputs: { onSelected: "onSelected" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML"]], template: function SuiSelectOption_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "span", null, 0);
            i0.ɵɵelement(2, "span", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("innerHTML", ctx.renderedText, i0.ɵɵsanitizeHtml);
        } }, encapsulation: 2 });
    return SuiSelectOption;
}(SuiDropdownMenuItem));
export { SuiSelectOption };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSelectOption, [{
        type: Component,
        args: [{
                selector: "sui-select-option",
                template: "\n<span #templateSibling></span>\n<span [innerHTML]=\"renderedText\"></span>\n"
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.item"]
        }], value: [{
            type: Input
        }], onSelected: [{
            type: Output
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFDOUQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFFM0Q7SUFPd0MsbUNBQW1CO0lBK0J2RCx5QkFBWSxRQUFrQixFQUFFLE9BQWtCLEVBQVMsY0FBZ0M7UUFBM0Y7UUFDSSw4RkFBOEY7UUFDOUYscUZBQXFGO1FBQ3JGLGtCQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FVM0I7UUFiMEQsb0JBQWMsR0FBZCxjQUFjLENBQWtCO1FBS3ZGLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUssQ0FBQztRQUV4QyxxSEFBcUg7UUFDckgsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFFdkIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7O0lBQzlCLENBQUM7SUEzQkQsc0JBQVcsc0NBQVM7YUFBcEIsVUFBcUIsU0FBMkI7WUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QztpQkFBTTtnQkFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzthQUMxQjtRQUNMLENBQUM7OztPQUFBO0lBd0JNLGlDQUFPLEdBRGQsVUFDZSxDQUFjO1FBRDdCLGlCQUtDO1FBSEcsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztJQUN2RCxDQUFDO2tGQW5EUSxlQUFlO3dEQUFmLGVBQWU7NENBNEJjLGdCQUFnQjs7Ozs7Ozs7O1lBaEMxRCxnQ0FBOEI7WUFDOUIsMEJBQXdDOztZQUFsQyxlQUEwQjtZQUExQiwrREFBMEI7OzBCQVhoQztDQWtFQyxBQTNERCxDQU93QyxtQkFBbUIsR0FvRDFEO1NBcERZLGVBQWU7a0RBQWYsZUFBZTtjQVAzQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGdGQUdiO2FBQ0E7O2tCQUdJLFdBQVc7bUJBQUMsWUFBWTs7a0JBR3hCLEtBQUs7O2tCQUlMLE1BQU07O2tCQUdOLFdBQVc7bUJBQUMsY0FBYzs7a0JBZ0IxQixTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQWtCckUsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgVmlld0NvbnRhaW5lclJlZixcbiAgICBWaWV3Q2hpbGQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT3V0cHV0LCBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpRHJvcGRvd25NZW51SXRlbSB9IGZyb20gXCIuLi8uLi9kcm9wZG93bi9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSGFuZGxlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0LW9wdGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48c3BhbiAjdGVtcGxhdGVTaWJsaW5nPjwvc3Bhbj5cbjxzcGFuIFtpbm5lckhUTUxdPVwicmVuZGVyZWRUZXh0XCI+PC9zcGFuPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWxlY3RPcHRpb248VD4gZXh0ZW5kcyBTdWlEcm9wZG93bk1lbnVJdGVtIHtcbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXRlbVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgLy8gRmlyZXMgd2hlbiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLCB3aGV0aGVyIGJ5IGNsaWNraW5nIG9yIGJ5IGtleWJvYXJkLlxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBvblNlbGVjdGVkOkV2ZW50RW1pdHRlcjxUPjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjdGl2ZVwiKVxuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuXG4gICAgcHVibGljIHJlbmRlcmVkVGV4dD86c3RyaW5nO1xuXG4gICAgcHVibGljIHNldCBmb3JtYXR0ZXIoZm9ybWF0dGVyOihvYmo6VCkgPT4gc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VzVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gZm9ybWF0dGVyKHRoaXMudmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVzZXNUZW1wbGF0ZTpib29sZWFuO1xuXG4gICAgLy8gUGxhY2Vob2xkZXIgdG8gZHJhdyB0ZW1wbGF0ZSBiZXNpZGUuXG4gICAgQFZpZXdDaGlsZChcInRlbXBsYXRlU2libGluZ1wiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMiwgZWxlbWVudDpFbGVtZW50UmVmLCBwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgLy8gV2UgaW5oZXJpdCBTdWlEcm9wZG93bk1lbnVJdGVtIHRvIGF1dG9tYXRpY2FsbHkgZ2FpbiBhbGwga2V5Ym9hcmQgbmF2aWdhdGlvbiBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBkb25lIHZpYSBhZGRpbmcgdGhlIC5pdGVtIGNsYXNzIGJlY2F1c2UgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEFuZ3VsYXIuXG4gICAgICAgIHN1cGVyKHJlbmRlcmVyLCBlbGVtZW50KTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25TZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcblxuICAgICAgICAvLyBCeSBkZWZhdWx0IHdlIG1ha2UgdGhlIGRlZmF1bHQgdGV4dCBhbiBlbXB0eSBsYWJlbCwgZm9yIHRoZSBicmllZiBtb21lbnQgd2hlbiBpdCBpc24ndCBkaXNwbGF5aW5nIHRoZSBjb3JyZWN0IG9uZS5cbiAgICAgICAgdGhpcy5yZW5kZXJlZFRleHQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMudXNlc1RlbXBsYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25DbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25TZWxlY3RlZC5lbWl0KHRoaXMudmFsdWUpKTtcbiAgICB9XG59XG4iXX0=