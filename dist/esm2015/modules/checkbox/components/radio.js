import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["radio"];
const _c1 = ["*"];
export class SuiRadio {
    constructor() {
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    get checkedAttribute() {
        return this.isChecked ? "" : undefined;
    }
    get isDisabledAttribute() {
        return this.isDisabled ? "disabled" : undefined;
    }
    onMouseDown(e) {
        e.preventDefault();
    }
    onClick() {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    }
    onFocusOut() {
        this.onTouched.emit();
    }
    update() {
        this.isChecked = this.currentValue === this.value;
    }
    writeValue(value) {
        this.currentValue = value;
        this.update();
    }
    focusRadio() {
        this._radioElement.nativeElement.focus();
    }
}
SuiRadio.ɵfac = function SuiRadio_Factory(t) { return new (t || SuiRadio)(); };
SuiRadio.ɵcmp = i0.ɵɵdefineComponent({ type: SuiRadio, selectors: [["sui-radio-button"]], viewQuery: function SuiRadio_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._radioElement = _t.first);
    } }, hostVars: 10, hostBindings: function SuiRadio_HostBindings(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiRadio, [{
        type: Component,
        args: [{
                selector: "sui-radio-button",
                template: `
<input class="hidden"
       type="checkbox"
       [attr.name]="name"
       [attr.checked]="checkedAttribute"
       [attr.disabled]="isDisabledAttribute"
       [ngModel]="isChecked"
       (ngModel)="currentValue = value"
       #radio>
<label>
    <ng-content></ng-content>
</label>
`
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
export class SuiRadioValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiRadioValueAccessor.ɵfac = function SuiRadioValueAccessor_Factory(t) { return new (t || SuiRadioValueAccessor)(i0.ɵɵdirectiveInject(SuiRadio)); };
SuiRadioValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiRadioValueAccessor, selectors: [["sui-radio-button"]], hostBindings: function SuiRadioValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("currentValueChange", function SuiRadioValueAccessor_currentValueChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiRadioValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiRadioValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvcmFkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUM5RCxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFDdEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUN1QiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFFNUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFrQnJDLE1BQU0sT0FBTyxRQUFRO0lBeUNqQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBakJELElBQVcsZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQVcsbUJBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQWNNLFdBQVcsQ0FBQyxDQUFZO1FBQzNCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR00sT0FBTztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUdNLFVBQVU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFPO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU8sVUFBVTtRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdDLENBQUM7O2dFQW5GUSxRQUFROzZDQUFSLFFBQVE7Ozs7Ozs7Ozs7O1FBYnJCLG1DQVFBO1FBRk8sOEhBQWdDO1FBTnZDLGlCQVFBO1FBQUEsNkJBQ0k7UUFBQSxrQkFBWTtRQUNoQixpQkFBUTs7UUFMRCx1Q0FBcUI7UUFIckIsZ0NBQWtCLGlDQUFBLHFDQUFBOztrREFXWixRQUFRO2NBaEJwQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Q0FZYjthQUNBOztrQkFFSSxXQUFXO21CQUFDLFVBQVU7O2tCQUN0QixXQUFXO21CQUFDLGFBQWE7O2tCQUN6QixXQUFXO21CQUFDLGdCQUFnQjs7a0JBRzVCLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUdMLFdBQVc7bUJBQUMsZUFBZTs7a0JBSzNCLE1BQU07bUJBQUMsb0JBQW9COztrQkFHM0IsTUFBTTttQkFBQyxTQUFTOztrQkFHaEIsS0FBSzs7a0JBR0wsV0FBVzttQkFBQyxpQkFBaUI7O2tCQUM3QixLQUFLOztrQkFHTCxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQXNCbkMsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQUtwQyxZQUFZO21CQUFDLE9BQU87O2tCQVVwQixZQUFZO21CQUFDLFVBQVU7O0FBMkI1QixNQUFNLE9BQU8scUJBQXlCLFNBQVEsbUJBQW1DO0lBQzdFLFlBQVksSUFBZ0I7UUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7OzBGQUhRLHFCQUFxQix1QkFDYixRQUFROzBEQURoQixxQkFBcUI7OzBDQUZuQixDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLENBQUM7a0RBRXJELHFCQUFxQjtjQVJqQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsSUFBSSxFQUFFO29CQUNGLHNCQUFzQixFQUFFLGtCQUFrQjtvQkFDMUMsV0FBVyxFQUFFLGFBQWE7aUJBQzdCO2dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDakU7c0NBRW9CLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLFxuICAgIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgICBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yLFxuICAgIFV0aWxcbn0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmFkaW8tYnV0dG9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpbnB1dCBjbGFzcz1cImhpZGRlblwiXG4gICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxuICAgICAgIFthdHRyLmNoZWNrZWRdPVwiY2hlY2tlZEF0dHJpYnV0ZVwiXG4gICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiaXNEaXNhYmxlZEF0dHJpYnV0ZVwiXG4gICAgICAgW25nTW9kZWxdPVwiaXNDaGVja2VkXCJcbiAgICAgICAobmdNb2RlbCk9XCJjdXJyZW50VmFsdWUgPSB2YWx1ZVwiXG4gICAgICAgI3JhZGlvPlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhZGlvPFQ+IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PFQ+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJhZGlvXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tib3hcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB2YWx1ZTpUO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBjdXJyZW50VmFsdWU6VDtcblxuICAgIEBPdXRwdXQoXCJjdXJyZW50VmFsdWVDaGFuZ2VcIilcbiAgICBwdWJsaWMgb25DdXJyZW50VmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPFQ+O1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIEBWaWV3Q2hpbGQoXCJyYWRpb1wiLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHByaXZhdGUgX3JhZGlvRWxlbWVudDpFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGdldCBjaGVja2VkQXR0cmlidXRlKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDaGVja2VkID8gXCJcIiA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkID8gXCJkaXNhYmxlZFwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ3VycmVudFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMub25DdXJyZW50VmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c1JhZGlvKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIilcbiAgICBwdWJsaWMgb25Gb2N1c091dCgpOnZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuY3VycmVudFZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlQpOnZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNSYWRpbygpOnZvaWQge1xuICAgICAgICB0aGlzLl9yYWRpb0VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhZGlvLWJ1dHRvblwiLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY3VycmVudFZhbHVlQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlSYWRpb1ZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlSYWRpb1ZhbHVlQWNjZXNzb3I8VD4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFQsIFN1aVJhZGlvPFQ+PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYWRpbzxUPikge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=