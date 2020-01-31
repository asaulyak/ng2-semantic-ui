import { Directive, HostBinding, HostListener, Input, EventEmitter, ChangeDetectorRef } from "@angular/core";
import * as i0 from "@angular/core";
export class CalendarItem {
    constructor(date) {
        this.date = date;
    }
}
export class SuiCalendarItem {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    get isSelectable() {
        return this.item.isSelectable;
    }
    get isActive() {
        return this.item.isActive;
    }
    get isToday() {
        return this.item.isToday;
    }
    onMouseMove() {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    }
    onMouseLeave() {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    }
}
SuiCalendarItem.ɵfac = function SuiCalendarItem_Factory(t) { return new (t || SuiCalendarItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
SuiCalendarItem.ɵdir = i0.ɵɵdefineDirective({ type: SuiCalendarItem, selectors: [["", "calendarItem", ""]], hostVars: 8, hostBindings: function SuiCalendarItem_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousemove", function SuiCalendarItem_mousemove_HostBindingHandler($event) { return ctx.onMouseMove(); })("mouseleave", function SuiCalendarItem_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.isSelectable)("active", ctx.isActive)("today", ctx.isToday)("focus", ctx.hasFocus);
    } }, inputs: { item: ["calendarItem", "item"] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTdHLE1BQU0sT0FBTyxZQUFZO0lBU3JCLFlBQVksSUFBUztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFLRCxNQUFNLE9BQU8sZUFBZTtJQXdCeEIsWUFBbUIsY0FBZ0M7UUFBaEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUNsRCxDQUFDO0lBeEJELElBQ1csWUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUNXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUNXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFjTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUdNLFlBQVk7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OEVBMUNRLGVBQWU7b0RBQWYsZUFBZTs7Ozs7a0RBQWYsZUFBZTtjQUgzQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjthQUM3Qjs7a0JBRUksS0FBSzttQkFBQyxjQUFjOztrQkFHcEIsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUs1QixXQUFXO21CQUFDLGNBQWM7O2tCQUsxQixXQUFXO21CQUFDLGFBQWE7O2tCQUt6QixXQUFXO21CQUFDLGFBQWE7O2tCQVd6QixZQUFZO21CQUFDLFdBQVc7O2tCQVF4QixZQUFZO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJJdGVtIHtcbiAgICBwdWJsaWMgZGF0ZTpEYXRlO1xuICAgIHB1YmxpYyBodW1hblJlYWRhYmxlOnN0cmluZztcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDpib29sZWFuO1xuICAgIHB1YmxpYyBpc0FjdGl2ZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc091dHNpZGVSYW5nZTpib29sZWFuO1xuICAgIHB1YmxpYyBpc1RvZGF5OmJvb2xlYW47XG4gICAgcHVibGljIGlzU2VsZWN0YWJsZTpib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbY2FsZW5kYXJJdGVtXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aUNhbGVuZGFySXRlbSB7XG4gICAgQElucHV0KFwiY2FsZW5kYXJJdGVtXCIpXG4gICAgcHVibGljIGl0ZW06Q2FsZW5kYXJJdGVtO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuZGlzYWJsZWRcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VsZWN0YWJsZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmlzU2VsZWN0YWJsZTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW0uaXNBY3RpdmU7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudG9kYXlcIilcbiAgICBwdWJsaWMgZ2V0IGlzVG9kYXkoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5pc1RvZGF5O1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmZvY3VzXCIpXG4gICAgcHVibGljIGhhc0ZvY3VzOmJvb2xlYW47XG5cbiAgICBwdWJsaWMgb25Gb2N1c3NlZDpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Gb2N1c3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwibW91c2Vtb3ZlXCIpXG4gICAgcHVibGljIG9uTW91c2VNb3ZlKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRm9jdXNzZWQuZW1pdCh0aGlzLmhhc0ZvY3VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIpXG4gICAgcHVibGljIG9uTW91c2VMZWF2ZSgpOnZvaWQge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMub25Gb2N1c3NlZC5lbWl0KHRoaXMuaGFzRm9jdXMpO1xuICAgIH1cbn1cbiJdfQ==