import { Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef, ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef } from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown/internal";
import { HandledEvent } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
const _c0 = ["templateSibling"];
export class SuiSelectOption extends SuiDropdownMenuItem {
    constructor(renderer, element, changeDetector) {
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        super(renderer, element);
        this.changeDetector = changeDetector;
        this.hasClasses = true;
        this.isActive = false;
        this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        this.renderedText = "";
        this.usesTemplate = false;
    }
    set formatter(formatter) {
        if (!this.usesTemplate) {
            this.renderedText = formatter(this.value);
        }
        else {
            this.renderedText = "";
        }
    }
    onClick(e) {
        e.eventHandled = true;
        setTimeout(() => this.onSelected.emit(this.value));
    }
}
SuiSelectOption.ɵfac = function SuiSelectOption_Factory(t) { return new (t || SuiSelectOption)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SuiSelectOption.ɵcmp = i0.ɵɵdefineComponent({ type: SuiSelectOption, selectors: [["sui-select-option"]], viewQuery: function SuiSelectOption_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
    } }, hostVars: 4, hostBindings: function SuiSelectOption_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSelectOption, [{
        type: Component,
        args: [{
                selector: "sui-select-option",
                template: `
<span #templateSibling></span>
<span [innerHTML]="renderedText"></span>
`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2VsZWN0L2NvbXBvbmVudHMvc2VsZWN0LW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUM5RCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQVMzRCxNQUFNLE9BQU8sZUFBbUIsU0FBUSxtQkFBbUI7SUErQnZELFlBQVksUUFBa0IsRUFBRSxPQUFrQixFQUFTLGNBQWdDO1FBQ3ZGLDhGQUE4RjtRQUM5RixxRkFBcUY7UUFDckYsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUg4QixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFLdkYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBRXhDLHFIQUFxSDtRQUNySCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBM0JELElBQVcsU0FBUyxDQUFDLFNBQTJCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBd0JNLE9BQU8sQ0FBQyxDQUFjO1FBQ3pCLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXRCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs4RUFuRFEsZUFBZTtvREFBZixlQUFlO3dDQTRCYyxnQkFBZ0I7Ozs7Ozs7OztRQWhDMUQsZ0NBQThCO1FBQzlCLDBCQUF3Qzs7UUFBbEMsZUFBMEI7UUFBMUIsK0RBQTBCOztrREFHbkIsZUFBZTtjQVAzQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Q0FHYjthQUNBOztrQkFHSSxXQUFXO21CQUFDLFlBQVk7O2tCQUd4QixLQUFLOztrQkFJTCxNQUFNOztrQkFHTixXQUFXO21CQUFDLGNBQWM7O2tCQWdCMUIsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFrQnJFLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBFdmVudEVtaXR0ZXIsIFZpZXdDb250YWluZXJSZWYsXG4gICAgVmlld0NoaWxkLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN1aURyb3Bkb3duTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vZHJvcGRvd24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IEhhbmRsZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlbGVjdC1vcHRpb25cIixcbiAgICB0ZW1wbGF0ZTogYFxuPHNwYW4gI3RlbXBsYXRlU2libGluZz48L3NwYW4+XG48c3BhbiBbaW5uZXJIVE1MXT1cInJlbmRlcmVkVGV4dFwiPjwvc3Bhbj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0T3B0aW9uPFQ+IGV4dGVuZHMgU3VpRHJvcGRvd25NZW51SXRlbSB7XG4gICAgLy8gU2V0cyB0aGUgU2VtYW50aWMgVUkgY2xhc3NlcyBvbiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLml0ZW1cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWU6VDtcblxuICAgIC8vIEZpcmVzIHdoZW4gdGhlIG9wdGlvbiBpcyBzZWxlY3RlZCwgd2hldGhlciBieSBjbGlja2luZyBvciBieSBrZXlib2FyZC5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgb25TZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyByZW5kZXJlZFRleHQ/OnN0cmluZztcblxuICAgIHB1YmxpYyBzZXQgZm9ybWF0dGVyKGZvcm1hdHRlcjoob2JqOlQpID0+IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMudXNlc1RlbXBsYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVkVGV4dCA9IGZvcm1hdHRlcih0aGlzLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1c2VzVGVtcGxhdGU6Ym9vbGVhbjtcblxuICAgIC8vIFBsYWNlaG9sZGVyIHRvIGRyYXcgdGVtcGxhdGUgYmVzaWRlLlxuICAgIEBWaWV3Q2hpbGQoXCJ0ZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwdWJsaWMgdGVtcGxhdGVTaWJsaW5nOlZpZXdDb250YWluZXJSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIGVsZW1lbnQ6RWxlbWVudFJlZiwgcHVibGljIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIC8vIFdlIGluaGVyaXQgU3VpRHJvcGRvd25NZW51SXRlbSB0byBhdXRvbWF0aWNhbGx5IGdhaW4gYWxsIGtleWJvYXJkIG5hdmlnYXRpb24gZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgZG9uZSB2aWEgYWRkaW5nIHRoZSAuaXRlbSBjbGFzcyBiZWNhdXNlIGl0IGlzbid0IHN1cHBvcnRlZCBieSBBbmd1bGFyLlxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgLy8gQnkgZGVmYXVsdCB3ZSBtYWtlIHRoZSBkZWZhdWx0IHRleHQgYW4gZW1wdHkgbGFiZWwsIGZvciB0aGUgYnJpZWYgbW9tZW50IHdoZW4gaXQgaXNuJ3QgZGlzcGxheWluZyB0aGUgY29ycmVjdCBvbmUuXG4gICAgICAgIHRoaXMucmVuZGVyZWRUZXh0ID0gXCJcIjtcblxuICAgICAgICB0aGlzLnVzZXNUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBlLmV2ZW50SGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uU2VsZWN0ZWQuZW1pdCh0aGlzLnZhbHVlKSk7XG4gICAgfVxufVxuIl19