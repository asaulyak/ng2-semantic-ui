import { __extends } from "tslib";
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var _c0 = ["checkbox"];
var _c1 = ["*"];
var SuiCheckbox = /** @class */ (function () {
    function SuiCheckbox() {
        this.isChecked = false;
        this.onCheckChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiCheckbox.prototype, "checkedAttribute", {
        get: function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCheckbox.prototype, "isDisabledAttribute", {
        get: function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SuiCheckbox.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    SuiCheckbox.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.toggle();
            this.focusCheckbox();
        }
    };
    SuiCheckbox.prototype.onFocusOut = function () {
        this.onTouched.emit();
    };
    SuiCheckbox.prototype.toggle = function () {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    };
    SuiCheckbox.prototype.writeValue = function (value) {
        this.isChecked = value;
    };
    SuiCheckbox.prototype.focusCheckbox = function () {
        this._checkboxElement.nativeElement.focus();
    };
    SuiCheckbox.ɵfac = function SuiCheckbox_Factory(t) { return new (t || SuiCheckbox)(); };
    SuiCheckbox.ɵcmp = i0.ɵɵdefineComponent({ type: SuiCheckbox, selectors: [["sui-checkbox"]], viewQuery: function SuiCheckbox_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._checkboxElement = _t.first);
        } }, hostVars: 8, hostBindings: function SuiCheckbox_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function SuiCheckbox_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("click", function SuiCheckbox_click_HostBindingHandler($event) { return ctx.onClick(); })("focusout", function SuiCheckbox_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ui", ctx.hasClasses)("checkbox", ctx.hasClasses)("checked", ctx.isChecked)("read-only", ctx.isReadonly);
        } }, inputs: { name: "name", isDisabled: "isDisabled", isReadonly: "isReadonly" }, outputs: { onCheckChange: "checkChange", onTouched: "touched" }, exportAs: ["suiCheckbox"], ngContentSelectors: _c1, decls: 4, vars: 4, consts: [["type", "checkbox", 1, "hidden", 3, "ngModel", "ngModelChange"], ["checkbox", ""]], template: function SuiCheckbox_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("ngModelChange", function SuiCheckbox_Template_input_ngModelChange_0_listener($event) { return ctx.isChecked = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "label");
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.isChecked);
            i0.ɵɵattribute("name", ctx.name)("checked", ctx.checkedAttribute)("disabled", ctx.isDisabledAttribute);
        } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 });
    return SuiCheckbox;
}());
export { SuiCheckbox };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCheckbox, [{
        type: Component,
        args: [{
                selector: "sui-checkbox",
                exportAs: "suiCheckbox",
                template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [(ngModel)]=\"isChecked\"\n       #checkbox>\n<label>\n    <ng-content></ng-content>\n</label>\n"
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.checkbox"]
        }], name: [{
            type: Input
        }], isChecked: [{
            type: HostBinding,
            args: ["class.checked"]
        }], onCheckChange: [{
            type: Output,
            args: ["checkChange"]
        }], onTouched: [{
            type: Output,
            args: ["touched"]
        }], isDisabled: [{
            type: Input
        }], isReadonly: [{
            type: HostBinding,
            args: ["class.read-only"]
        }, {
            type: Input
        }], _checkboxElement: [{
            type: ViewChild,
            args: ["checkbox", { static: true }]
        }], onMouseDown: [{
            type: HostListener,
            args: ["mousedown", ["$event"]]
        }], onClick: [{
            type: HostListener,
            args: ["click"]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout"]
        }] }); })();
var SuiCheckboxValueAccessor = /** @class */ (function (_super) {
    __extends(SuiCheckboxValueAccessor, _super);
    function SuiCheckboxValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiCheckboxValueAccessor.ɵfac = function SuiCheckboxValueAccessor_Factory(t) { return new (t || SuiCheckboxValueAccessor)(i0.ɵɵdirectiveInject(SuiCheckbox)); };
    SuiCheckboxValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiCheckboxValueAccessor, selectors: [["sui-checkbox"]], hostBindings: function SuiCheckboxValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("checkChange", function SuiCheckboxValueAccessor_checkChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiCheckboxValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
        } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiCheckboxValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
    return SuiCheckboxValueAccessor;
}(CustomValueAccessor));
export { SuiCheckboxValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCheckboxValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-checkbox",
                host: {
                    "(checkChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiCheckboxValueAccessor)]
            }]
    }], function () { return [{ type: SuiCheckbox }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFDOUQsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3RDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBNEIsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFFeEg7SUFtREk7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFwQkQsc0JBQVcseUNBQWdCO2FBQTNCO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDRDQUFtQjthQUE5QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFpQk0saUNBQVcsR0FEbEIsVUFDbUIsQ0FBWTtRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdNLDZCQUFPLEdBRGQ7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUdNLGdDQUFVLEdBRGpCO1FBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sNEJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsS0FBYTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU8sbUNBQWEsR0FBckI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hELENBQUM7MEVBM0VRLFdBQVc7b0RBQVgsV0FBVzs7Ozs7Ozs7Ozs7WUFaeEIsbUNBT0E7WUFGTyx1SUFBdUI7WUFMOUIsaUJBT0E7WUFBQSw2QkFDSTtZQUFBLGtCQUFZO1lBQ2hCLGlCQUFROztZQUpELHVDQUF1QjtZQUh2QixnQ0FBa0IsaUNBQUEscUNBQUE7O3NCQVp6QjtDQWtHQyxBQTVGRCxJQTRGQztTQTVFWSxXQUFXO2tEQUFYLFdBQVc7Y0FoQnZCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSx1UkFXYjthQUNBOztrQkFFSSxXQUFXO21CQUFDLFVBQVU7O2tCQUN0QixXQUFXO21CQUFDLGdCQUFnQjs7a0JBRzVCLEtBQUs7O2tCQUdMLFdBQVc7bUJBQUMsZUFBZTs7a0JBRzNCLE1BQU07bUJBQUMsYUFBYTs7a0JBR3BCLE1BQU07bUJBQUMsU0FBUzs7a0JBR2hCLEtBQUs7O2tCQUdMLFdBQVc7bUJBQUMsaUJBQWlCOztrQkFDN0IsS0FBSzs7a0JBV0wsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFjdEMsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQUtwQyxZQUFZO21CQUFDLE9BQU87O2tCQVFwQixZQUFZO21CQUFDLFVBQVU7O0FBbUI1QjtJQVE4Qyw0Q0FBeUM7SUFDbkYsa0NBQVksSUFBZ0I7ZUFDeEIsa0JBQU0sSUFBSSxDQUFDO0lBQ2YsQ0FBQztvR0FIUSx3QkFBd0IsdUJBQ2hCLFdBQVc7aUVBRG5CLHdCQUF3Qjs7OENBRnRCLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsQ0FBQzttQ0ExR3JFO0NBZ0hDLEFBWkQsQ0FROEMsbUJBQW1CLEdBSWhFO1NBSlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FScEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixJQUFJLEVBQUU7b0JBQ0YsZUFBZSxFQUFFLGtCQUFrQjtvQkFDbkMsV0FBVyxFQUFFLGFBQWE7aUJBQzdCO2dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDcEU7c0NBRW9CLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBleHBvcnRBczogXCJzdWlDaGVja2JveFwiLFxuICAgIHRlbXBsYXRlOiBgXG48aW5wdXQgY2xhc3M9XCJoaWRkZW5cIlxuICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcbiAgICAgICBbYXR0ci5jaGVja2VkXT1cImNoZWNrZWRBdHRyaWJ1dGVcIlxuICAgICAgIFthdHRyLmRpc2FibGVkXT1cImlzRGlzYWJsZWRBdHRyaWJ1dGVcIlxuICAgICAgIFsobmdNb2RlbCldPVwiaXNDaGVja2VkXCJcbiAgICAgICAjY2hlY2tib3g+XG48bGFiZWw+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9sYWJlbD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpQ2hlY2tib3ggaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8Ym9vbGVhbj4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jaGVja2VkXCIpXG4gICAgcHVibGljIGlzQ2hlY2tlZDpib29sZWFuO1xuXG4gICAgQE91dHB1dChcImNoZWNrQ2hhbmdlXCIpXG4gICAgcHVibGljIG9uQ2hlY2tDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgY2hlY2tlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2hlY2tlZCA/IFwiXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKFwiY2hlY2tib3hcIiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9jaGVja2JveEVsZW1lbnQ6RWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUmVhZG9ubHkgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbk1vdXNlRG93bihlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNDaGVja2JveCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3Vzb3V0XCIpXG4gICAgcHVibGljIG9uRm9jdXNPdXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWQ7XG4gICAgICAgIHRoaXMub25DaGVja0NoYW5nZS5lbWl0KHRoaXMuaXNDaGVja2VkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTpib29sZWFuKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzQ2hlY2tib3goKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fY2hlY2tib3hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1jaGVja2JveFwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY2hlY2tDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94VmFsdWVBY2Nlc3NvciBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8Ym9vbGVhbiwgU3VpQ2hlY2tib3g+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aUNoZWNrYm94KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiJdfQ==