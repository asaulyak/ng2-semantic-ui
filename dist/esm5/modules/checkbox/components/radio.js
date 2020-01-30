import { __extends } from "tslib";
import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var _c0 = ["radio"];
var _c1 = ["*"];
var SuiRadio = /** @class */ (function () {
    function SuiRadio() {
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRadio.prototype, "checkedAttribute", {
        get: function () {
            return this.isChecked ? "" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRadio.prototype, "isDisabledAttribute", {
        get: function () {
            return this.isDisabled ? "disabled" : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SuiRadio.prototype.onMouseDown = function (e) {
        e.preventDefault();
    };
    SuiRadio.prototype.onClick = function () {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    };
    SuiRadio.prototype.onFocusOut = function () {
        this.onTouched.emit();
    };
    SuiRadio.prototype.update = function () {
        this.isChecked = this.currentValue === this.value;
    };
    SuiRadio.prototype.writeValue = function (value) {
        this.currentValue = value;
        this.update();
    };
    SuiRadio.prototype.focusRadio = function () {
        this._radioElement.nativeElement.focus();
    };
    SuiRadio.ɵfac = function SuiRadio_Factory(t) { return new (t || SuiRadio)(); };
    SuiRadio.ɵcmp = i0.ɵɵdefineComponent({ type: SuiRadio, selectors: [["sui-radio-button"]], viewQuery: function SuiRadio_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._radioElement = _t.first);
        } }, hostVars: 10, hostBindings: function SuiRadio_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function SuiRadio_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("click", function SuiRadio_click_HostBindingHandler($event) { return ctx.onClick(); })("focusout", function SuiRadio_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ui", ctx.hasClasses)("radio", ctx.hasClasses)("checkbox", ctx.hasClasses)("checked", ctx.isChecked)("read-only", ctx.isReadonly);
        } }, inputs: { name: "name", value: "value", isDisabled: "isDisabled", isReadonly: "isReadonly" }, outputs: { onCurrentValueChange: "currentValueChange", onTouched: "touched" }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [["type", "checkbox", 1, "hidden", 3, "ngModel"], ["radio", ""]], template: function SuiRadio_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("ngModel", function SuiRadio_Template_input_ngModel_0_listener($event) { return ctx.currentValue = ctx.value; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "label");
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.isChecked);
            i0.ɵɵattribute("name", ctx.name)("checked", ctx.checkedAttribute)("disabled", ctx.isDisabledAttribute);
        } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 });
    return SuiRadio;
}());
export { SuiRadio };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiRadio, [{
        type: Component,
        args: [{
                selector: "sui-radio-button",
                template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\"\n       #radio>\n<label>\n    <ng-content></ng-content>\n</label>\n"
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.radio"]
        }, {
            type: HostBinding,
            args: ["class.checkbox"]
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], isChecked: [{
            type: HostBinding,
            args: ["class.checked"]
        }], onCurrentValueChange: [{
            type: Output,
            args: ["currentValueChange"]
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
        }], _radioElement: [{
            type: ViewChild,
            args: ["radio", { static: true }]
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
var SuiRadioValueAccessor = /** @class */ (function (_super) {
    __extends(SuiRadioValueAccessor, _super);
    function SuiRadioValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiRadioValueAccessor.ɵfac = function SuiRadioValueAccessor_Factory(t) { return new (t || SuiRadioValueAccessor)(i0.ɵɵdirectiveInject(SuiRadio)); };
    SuiRadioValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiRadioValueAccessor, selectors: [["sui-radio-button"]], hostBindings: function SuiRadioValueAccessor_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("currentValueChange", function SuiRadioValueAccessor_currentValueChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiRadioValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
        } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiRadioValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
    return SuiRadioValueAccessor;
}(CustomValueAccessor));
export { SuiRadioValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiRadioValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-radio-button",
                host: {
                    "(currentValueChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiRadioValueAccessor)]
            }]
    }], function () { return [{ type: SuiRadio }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFDOUQsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQ3RDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDdUIsMEJBQTBCLEVBQUUsbUJBQW1CLEVBRTVFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBRXJDO0lBeURJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFqQkQsc0JBQVcsc0NBQWdCO2FBQTNCO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlDQUFtQjthQUE5QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFjTSw4QkFBVyxHQURsQixVQUNtQixDQUFZO1FBQzNCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR00sMEJBQU8sR0FEZDtRQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUdNLDZCQUFVLEdBRGpCO1FBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0seUJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUFFTSw2QkFBVSxHQUFqQixVQUFrQixLQUFPO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sNkJBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QyxDQUFDO29FQW5GUSxRQUFRO2lEQUFSLFFBQVE7Ozs7Ozs7Ozs7O1lBYnJCLG1DQVFBO1lBRk8sOEhBQWdDO1lBTnZDLGlCQVFBO1lBQUEsNkJBQ0k7WUFBQSxrQkFBWTtZQUNoQixpQkFBUTs7WUFMRCx1Q0FBcUI7WUFIckIsZ0NBQWtCLGlDQUFBLHFDQUFBOzttQkFkekI7Q0E2R0MsQUFwR0QsSUFvR0M7U0FwRlksUUFBUTtrREFBUixRQUFRO2NBaEJwQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLDZUQVliO2FBQ0E7O2tCQUVJLFdBQVc7bUJBQUMsVUFBVTs7a0JBQ3RCLFdBQVc7bUJBQUMsYUFBYTs7a0JBQ3pCLFdBQVc7bUJBQUMsZ0JBQWdCOztrQkFHNUIsS0FBSzs7a0JBR0wsS0FBSzs7a0JBR0wsV0FBVzttQkFBQyxlQUFlOztrQkFLM0IsTUFBTTttQkFBQyxvQkFBb0I7O2tCQUczQixNQUFNO21CQUFDLFNBQVM7O2tCQUdoQixLQUFLOztrQkFHTCxXQUFXO21CQUFDLGlCQUFpQjs7a0JBQzdCLEtBQUs7O2tCQUdMLFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBc0JuQyxZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBS3BDLFlBQVk7bUJBQUMsT0FBTzs7a0JBVXBCLFlBQVk7bUJBQUMsVUFBVTs7QUFtQjVCO0lBUThDLHlDQUFtQztJQUM3RSwrQkFBWSxJQUFnQjtlQUN4QixrQkFBTSxJQUFJLENBQUM7SUFDZixDQUFDOzhGQUhRLHFCQUFxQix1QkFDYixRQUFROzhEQURoQixxQkFBcUI7OzhDQUZuQixDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0NBckhsRTtDQTJIQyxBQVpELENBUThDLG1CQUFtQixHQUloRTtTQUpZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBUmpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixJQUFJLEVBQUU7b0JBQ0Ysc0JBQXNCLEVBQUUsa0JBQWtCO29CQUMxQyxXQUFXLEVBQUUsYUFBYTtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNqRTtzQ0FFb0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcsXG4gICAgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENvbnRlbnRDaGlsZHJlbiwgQWZ0ZXJDb250ZW50SW5pdCwgUXVlcnlMaXN0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IsXG4gICAgVXRpbFxufSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInN1aS1yYWRpby1idXR0b25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPGlucHV0IGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgW2F0dHIuY2hlY2tlZF09XCJjaGVja2VkQXR0cmlidXRlXCJcbiAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkQXR0cmlidXRlXCJcbiAgICAgICBbbmdNb2RlbF09XCJpc0NoZWNrZWRcIlxuICAgICAgIChuZ01vZGVsKT1cImN1cnJlbnRWYWx1ZSA9IHZhbHVlXCJcbiAgICAgICAjcmFkaW8+XG48bGFiZWw+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9sYWJlbD5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpUmFkaW88VD4gaW1wbGVtZW50cyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3Q8VD4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmFkaW9cIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jaGVja2JveFwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBuYW1lOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHZhbHVlOlQ7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5jaGVja2VkXCIpXG4gICAgcHVibGljIGlzQ2hlY2tlZDpib29sZWFuO1xuXG4gICAgcHVibGljIGN1cnJlbnRWYWx1ZTpUO1xuXG4gICAgQE91dHB1dChcImN1cnJlbnRWYWx1ZUNoYW5nZVwiKVxuICAgIHB1YmxpYyBvbkN1cnJlbnRWYWx1ZUNoYW5nZTpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBAT3V0cHV0KFwidG91Y2hlZFwiKVxuICAgIHB1YmxpYyBvblRvdWNoZWQ6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmVhZC1vbmx5XCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaXNSZWFkb25seTpib29sZWFuO1xuXG4gICAgQFZpZXdDaGlsZChcInJhZGlvXCIsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfcmFkaW9FbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBwdWJsaWMgZ2V0IGNoZWNrZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyBcIlwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUmVhZG9ubHkgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbk1vdXNlRG93bihlOk1vdXNlRXZlbnQpOnZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImNsaWNrXCIpXG4gICAgcHVibGljIG9uQ2xpY2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5vbkN1cnJlbnRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzUmFkaW8oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdGhpcy5jdXJyZW50VmFsdWUgPT09IHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6VCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c1JhZGlvKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JhZGlvRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihjdXJyZW50VmFsdWVDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aVJhZGlvVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvVmFsdWVBY2Nlc3NvcjxUPiBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VCwgU3VpUmFkaW88VD4+IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OlN1aVJhZGlvPFQ+KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiJdfQ==