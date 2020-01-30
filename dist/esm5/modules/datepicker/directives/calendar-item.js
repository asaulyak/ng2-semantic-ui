import { Directive, HostBinding, HostListener, Input, EventEmitter, ChangeDetectorRef } from "@angular/core";
import * as i0 from "@angular/core";
var CalendarItem = /** @class */ (function () {
    function CalendarItem(date) {
        this.date = date;
    }
    return CalendarItem;
}());
export { CalendarItem };
var SuiCalendarItem = /** @class */ (function () {
    function SuiCalendarItem(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    Object.defineProperty(SuiCalendarItem.prototype, "isSelectable", {
        get: function () {
            return this.item.isSelectable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isActive", {
        get: function () {
            return this.item.isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiCalendarItem.prototype, "isToday", {
        get: function () {
            return this.item.isToday;
        },
        enumerable: true,
        configurable: true
    });
    SuiCalendarItem.prototype.onMouseMove = function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    };
    SuiCalendarItem.prototype.onMouseLeave = function () {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    };
    SuiCalendarItem.ɵfac = function SuiCalendarItem_Factory(t) { return new (t || SuiCalendarItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    SuiCalendarItem.ɵdir = i0.ɵɵdefineDirective({ type: SuiCalendarItem, selectors: [["", "calendarItem", ""]], hostVars: 8, hostBindings: function SuiCalendarItem_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("mousemove", function SuiCalendarItem_mousemove_HostBindingHandler($event) { return ctx.onMouseMove(); })("mouseleave", function SuiCalendarItem_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("disabled", ctx.isSelectable)("active", ctx.isActive)("today", ctx.isToday)("focus", ctx.hasFocus);
        } }, inputs: { item: ["calendarItem", "item"] } });
    return SuiCalendarItem;
}());
export { SuiCalendarItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiCalendarItem, [{
        type: Directive,
        args: [{
                selector: "[calendarItem]"
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { item: [{
            type: Input,
            args: ["calendarItem"]
        }], isSelectable: [{
            type: HostBinding,
            args: ["class.disabled"]
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }], isToday: [{
            type: HostBinding,
            args: ["class.today"]
        }], hasFocus: [{
            type: HostBinding,
            args: ["class.focus"]
        }], onMouseMove: [{
            type: HostListener,
            args: ["mousemove"]
        }], onMouseLeave: [{
            type: HostListener,
            args: ["mouseleave"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTdHO0lBU0ksc0JBQVksSUFBUztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7QUFFRDtJQTJCSSx5QkFBbUIsY0FBZ0M7UUFBaEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUNsRCxDQUFDO0lBeEJELHNCQUNXLHlDQUFZO2FBRHZCO1lBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUNXLHFDQUFRO2FBRG5CO1lBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUNXLG9DQUFPO2FBRGxCO1lBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQWNNLHFDQUFXLEdBRGxCO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUdNLHNDQUFZLEdBRG5CO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7a0ZBMUNRLGVBQWU7d0RBQWYsZUFBZTs7Ozs7MEJBcEI1QjtDQStEQyxBQTlDRCxJQThDQztTQTNDWSxlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7YUFDN0I7O2tCQUVJLEtBQUs7bUJBQUMsY0FBYzs7a0JBR3BCLFdBQVc7bUJBQUMsZ0JBQWdCOztrQkFLNUIsV0FBVzttQkFBQyxjQUFjOztrQkFLMUIsV0FBVzttQkFBQyxhQUFhOztrQkFLekIsV0FBVzttQkFBQyxhQUFhOztrQkFXekIsWUFBWTttQkFBQyxXQUFXOztrQkFReEIsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFySXRlbSB7XG4gICAgcHVibGljIGRhdGU6RGF0ZTtcbiAgICBwdWJsaWMgaHVtYW5SZWFkYWJsZTpzdHJpbmc7XG4gICAgcHVibGljIGlzRGlzYWJsZWQ6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNBY3RpdmU6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNPdXRzaWRlUmFuZ2U6Ym9vbGVhbjtcbiAgICBwdWJsaWMgaXNUb2RheTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1NlbGVjdGFibGU6Ym9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGU6RGF0ZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW2NhbGVuZGFySXRlbV1cIlxufSlcbmV4cG9ydCBjbGFzcyBTdWlDYWxlbmRhckl0ZW0ge1xuICAgIEBJbnB1dChcImNhbGVuZGFySXRlbVwiKVxuICAgIHB1YmxpYyBpdGVtOkNhbGVuZGFySXRlbTtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGFibGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1NlbGVjdGFibGU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzQWN0aXZlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnRvZGF5XCIpXG4gICAgcHVibGljIGdldCBpc1RvZGF5KCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNUb2RheTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5mb2N1c1wiKVxuICAgIHB1YmxpYyBoYXNGb2N1czpib29sZWFuO1xuXG4gICAgcHVibGljIG9uRm9jdXNzZWQ6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNoYW5nZURldGVjdG9yOkNoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm9uRm9jdXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcIm1vdXNlbW92ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTW92ZSgpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbkZvY3Vzc2VkLmVtaXQodGhpcy5oYXNGb2N1cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2VsZWF2ZVwiKVxuICAgIHB1YmxpYyBvbk1vdXNlTGVhdmUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICB9XG59XG4iXX0=