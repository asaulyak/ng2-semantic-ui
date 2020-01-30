import { Component, Directive, Input, Output, HostListener, HostBinding, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["checkbox"];
const _c1 = ["*"];
export class SuiCheckbox {
    constructor() {
        this.isChecked = false;
        this.onCheckChange = new EventEmitter();
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
            this.toggle();
            this.focusCheckbox();
        }
    }
    onFocusOut() {
        this.onTouched.emit();
    }
    toggle() {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    }
    writeValue(value) {
        this.isChecked = value;
    }
    focusCheckbox() {
        this._checkboxElement.nativeElement.focus();
    }
}
SuiCheckbox.ɵfac = function SuiCheckbox_Factory(t) { return new (t || SuiCheckbox)(); };
SuiCheckbox.ɵcmp = i0.ɵɵdefineComponent({ type: SuiCheckbox, selectors: [["sui-checkbox"]], viewQuery: function SuiCheckbox_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._checkboxElement = _t.first);
    } }, hostVars: 8, hostBindings: function SuiCheckbox_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCheckbox, [{
        type: Component,
        args: [{
                selector: "sui-checkbox",
                exportAs: "suiCheckbox",
                template: `
<input class="hidden"
       type="checkbox"
       [attr.name]="name"
       [attr.checked]="checkedAttribute"
       [attr.disabled]="isDisabledAttribute"
       [(ngModel)]="isChecked"
       #checkbox>
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
export class SuiCheckboxValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiCheckboxValueAccessor.ɵfac = function SuiCheckboxValueAccessor_Factory(t) { return new (t || SuiCheckboxValueAccessor)(i0.ɵɵdirectiveInject(SuiCheckbox)); };
SuiCheckboxValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiCheckboxValueAccessor, selectors: [["sui-checkbox"]], hostBindings: function SuiCheckboxValueAccessor_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("checkChange", function SuiCheckboxValueAccessor_checkChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiCheckboxValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiCheckboxValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL2NoZWNrYm94L2NvbXBvbmVudHMvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUM5RCxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFDdEMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUE0QiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQWtCeEgsTUFBTSxPQUFPLFdBQVc7SUFtQ3BCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBcEJELElBQVcsZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDM0MsQ0FBQztJQUVELElBQVcsbUJBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQWlCTSxXQUFXLENBQUMsQ0FBWTtRQUMzQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdNLE9BQU87UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUdNLFVBQVU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSxVQUFVLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU8sYUFBYTtRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hELENBQUM7O3NFQTNFUSxXQUFXO2dEQUFYLFdBQVc7Ozs7Ozs7Ozs7O1FBWnhCLG1DQU9BO1FBRk8sdUlBQXVCO1FBTDlCLGlCQU9BO1FBQUEsNkJBQ0k7UUFBQSxrQkFBWTtRQUNoQixpQkFBUTs7UUFKRCx1Q0FBdUI7UUFIdkIsZ0NBQWtCLGlDQUFBLHFDQUFBOztrREFVWixXQUFXO2NBaEJ2QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0NBV2I7YUFDQTs7a0JBRUksV0FBVzttQkFBQyxVQUFVOztrQkFDdEIsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUc1QixLQUFLOztrQkFHTCxXQUFXO21CQUFDLGVBQWU7O2tCQUczQixNQUFNO21CQUFDLGFBQWE7O2tCQUdwQixNQUFNO21CQUFDLFNBQVM7O2tCQUdoQixLQUFLOztrQkFHTCxXQUFXO21CQUFDLGlCQUFpQjs7a0JBQzdCLEtBQUs7O2tCQVdMLFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBY3RDLFlBQVk7bUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFLcEMsWUFBWTttQkFBQyxPQUFPOztrQkFRcEIsWUFBWTttQkFBQyxVQUFVOztBQTJCNUIsTUFBTSxPQUFPLHdCQUF5QixTQUFRLG1CQUF5QztJQUNuRixZQUFZLElBQWdCO1FBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDOztnR0FIUSx3QkFBd0IsdUJBQ2hCLFdBQVc7NkRBRG5CLHdCQUF3Qjs7MENBRnRCLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztrREFFeEQsd0JBQXdCO2NBUnBDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsSUFBSSxFQUFFO29CQUNGLGVBQWUsRUFBRSxrQkFBa0I7b0JBQ25DLFdBQVcsRUFBRSxhQUFhO2lCQUM3QjtnQkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2FBQ3BFO3NDQUVvQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyxcbiAgICBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0LCBjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeSwgQ3VzdG9tVmFsdWVBY2Nlc3NvciB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWNoZWNrYm94XCIsXG4gICAgZXhwb3J0QXM6IFwic3VpQ2hlY2tib3hcIixcbiAgICB0ZW1wbGF0ZTogYFxuPGlucHV0IGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXG4gICAgICAgW2F0dHIuY2hlY2tlZF09XCJjaGVja2VkQXR0cmlidXRlXCJcbiAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc0Rpc2FibGVkQXR0cmlidXRlXCJcbiAgICAgICBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiXG4gICAgICAgI2NoZWNrYm94PlxuPGxhYmVsPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbGFiZWw+XG5gXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNoZWNrYm94IGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PGJvb2xlYW4+IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmNoZWNrYm94XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuY2hlY2tlZFwiKVxuICAgIHB1YmxpYyBpc0NoZWNrZWQ6Ym9vbGVhbjtcblxuICAgIEBPdXRwdXQoXCJjaGVja0NoYW5nZVwiKVxuICAgIHB1YmxpYyBvbkNoZWNrQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICAgIEBPdXRwdXQoXCJ0b3VjaGVkXCIpXG4gICAgcHVibGljIG9uVG91Y2hlZDpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5yZWFkLW9ubHlcIilcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW47XG5cbiAgICBwdWJsaWMgZ2V0IGNoZWNrZWRBdHRyaWJ1dGUoKTpzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyBcIlwiIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNEaXNhYmxlZEF0dHJpYnV0ZSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcImNoZWNrYm94XCIsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hFbGVtZW50OkVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoZWNrQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1JlYWRvbmx5ID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vkb3duXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25Nb3VzZURvd24oZTpNb3VzZUV2ZW50KTp2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxuICAgIHB1YmxpYyBvbkNsaWNrKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkICYmICF0aGlzLmlzUmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hlY2tib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xuICAgICAgICB0aGlzLm9uQ2hlY2tDaGFuZ2UuZW1pdCh0aGlzLmlzQ2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c0NoZWNrYm94KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX2NoZWNrYm94RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktY2hlY2tib3hcIixcbiAgICBob3N0OiB7XG4gICAgICAgIFwiKGNoZWNrQ2hhbmdlKVwiOiBcIm9uQ2hhbmdlKCRldmVudClcIixcbiAgICAgICAgXCIodG91Y2hlZClcIjogXCJvblRvdWNoZWQoKVwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtjdXN0b21WYWx1ZUFjY2Vzc29yRmFjdG9yeShTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IpXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlDaGVja2JveFZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPGJvb2xlYW4sIFN1aUNoZWNrYm94PiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlDaGVja2JveCkge1xuICAgICAgICBzdXBlcihob3N0KTtcbiAgICB9XG59XG4iXX0=