import { HostBinding, Input, Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
var SuiTabHeader = /** @class */ (function () {
    function SuiTabHeader() {
        this._isActive = false;
        this.isActiveChange = new EventEmitter();
        this.isActiveExternalChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.isDisabled = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiTabHeader.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (active) {
            var _this = this;
            var isActive = active;
            // Only used by @Input(), runs whenever user input changes `isActive`.
            // Run in timeout because `isDisabled` can prohibit user from changing `isActive`.
            // so update is delayed to avoid 'changed after checked' error.
            setTimeout(function () {
                // Only allow change if tab header is not disabled.
                isActive = !_this.isDisabled ? active : false;
                _this.setActiveState(isActive);
                // Fire 'external change' event as user input has occured.
                _this.isActiveExternalChange.emit(isActive);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTabHeader.prototype, "isDisabled", {
        get: function () {
            return this._isDisabled;
        },
        set: function (disabled) {
            // Only update if value provided is different to current one.
            if (this._isDisabled !== disabled) {
                this._isDisabled = disabled;
                // If now disabled, then tab header must be deactivated.
                if (this.isDisabled) {
                    this.isActive = false;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // Internally update active state.
    SuiTabHeader.prototype.setActiveState = function (active) {
        // If (cast) active value has changed:
        if (!!this._isActive !== active) {
            // Update to the new value.
            this._isActive = active;
            // Fire the appropriate activation event.
            if (active) {
                this.onActivate.emit();
            }
            else {
                this.onDeactivate.emit();
            }
        }
        // Regardless, emit a change to `isActive`, so [(isActive)] works correctly.
        this.isActiveChange.emit(active);
    };
    SuiTabHeader.prototype.onClick = function () {
        if (!this.isDisabled) {
            // Activate the tab when clicked, so long as it isn't disabled.
            this.isActive = true;
        }
    };
    SuiTabHeader.ɵfac = function SuiTabHeader_Factory(t) { return new (t || SuiTabHeader)(); };
    SuiTabHeader.ɵdir = i0.ɵɵdefineDirective({ type: SuiTabHeader, selectors: [["", "suiTabHeader", ""]], hostVars: 6, hostBindings: function SuiTabHeader_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function SuiTabHeader_click_HostBindingHandler($event) { return ctx.onClick(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("item", ctx.hasClasses)("active", ctx.isActive)("disabled", ctx.isDisabled);
        } }, inputs: { id: ["suiTabHeader", "id"], isActive: "isActive", isDisabled: "isDisabled" }, outputs: { isActiveChange: "isActiveChange", onActivate: "activate", onDeactivate: "deactivate" } });
    return SuiTabHeader;
}());
export { SuiTabHeader };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiTabHeader, [{
        type: Directive,
        args: [{
                selector: "[suiTabHeader]"
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.item"]
        }], id: [{
            type: Input,
            args: ["suiTabHeader"]
        }], isActiveChange: [{
            type: Output
        }], onActivate: [{
            type: Output,
            args: ["activate"]
        }], onDeactivate: [{
            type: Output,
            args: ["deactivate"]
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }, {
            type: Input
        }], isDisabled: [{
            type: HostBinding,
            args: ["class.disabled"]
        }, {
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdGFicy9kaXJlY3RpdmVzL3RhYi1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVsRztJQXFFSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUUxRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFwREQsc0JBRVcsa0NBQVE7YUFGbkI7WUFHSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQW9CLE1BQWM7WUFBbEMsaUJBYUM7WUFaRyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdEIsc0VBQXNFO1lBQ3RFLGtGQUFrRjtZQUNsRiwrREFBK0Q7WUFDL0QsVUFBVSxDQUFDO2dCQUNQLG1EQUFtRDtnQkFDbkQsUUFBUSxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTlCLDBEQUEwRDtnQkFDMUQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7OztPQWZBO0lBbUJELHNCQUVXLG9DQUFVO2FBRnJCO1lBR0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFzQixRQUFnQjtZQUNsQyw2REFBNkQ7WUFDN0QsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JBRTVCLHdEQUF3RDtnQkFDeEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztpQkFDekI7YUFDSjtRQUNMLENBQUM7OztPQVpBO0lBMkJELGtDQUFrQztJQUMzQixxQ0FBYyxHQUFyQixVQUFzQixNQUFjO1FBQ2hDLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUM3QiwyQkFBMkI7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFFeEIseUNBQXlDO1lBQ3pDLElBQUksTUFBTSxFQUFFO2dCQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM1QjtTQUNKO1FBRUQsNEVBQTRFO1FBQzVFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHTSw4QkFBTyxHQURkO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQzs0RUF4R1EsWUFBWTtxREFBWixZQUFZOzs7Ozt1QkFMekI7Q0E4R0MsQUE1R0QsSUE0R0M7U0F6R1ksWUFBWTtrREFBWixZQUFZO2NBSHhCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzdCOztrQkFFSSxXQUFXO21CQUFDLFlBQVk7O2tCQUd4QixLQUFLO21CQUFDLGNBQWM7O2tCQU9wQixNQUFNOztrQkFPTixNQUFNO21CQUFDLFVBQVU7O2tCQUlqQixNQUFNO21CQUFDLFlBQVk7O2tCQUduQixXQUFXO21CQUFDLGNBQWM7O2tCQUMxQixLQUFLOztrQkFzQkwsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUM1QixLQUFLOztrQkFpREwsWUFBWTttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdEJpbmRpbmcsIElucHV0LCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbc3VpVGFiSGVhZGVyXVwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRhYkhlYWRlciB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaXRlbVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoXCJzdWlUYWJIZWFkZXJcIilcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xuXG4gICAgLy8gSW50ZXJuYWxseSBrZWVwcyB0cmFjayBvZiB3aGV0aGVyIHRoZSBoZWFkZXIgaXMgYWN0aXZlLlxuICAgIHByaXZhdGUgX2lzQWN0aXZlOmJvb2xlYW47XG5cbiAgICAvLyBFbmFibGVzIHVzZSBvZiBbKGlzQWN0aXZlKV0gc28gc3RhdGUgY2FuIGJlIHNldCB1c2luZyBib29sZWFucy5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgaXNBY3RpdmVDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuXG4gICAgLy8gRmlyZXMgb25seSB3aGVuIGBpc0FjdGl2ZWAgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnB1dC5cbiAgICBwdWJsaWMgaXNBY3RpdmVFeHRlcm5hbENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBpcyBhY3RpdmF0ZWQgaGF2aW5nIHByZXZpb3VzbHkgYmVlbiBkZWFjdGl2YXRlZC5cbiAgICBAT3V0cHV0KFwiYWN0aXZhdGVcIilcbiAgICBwdWJsaWMgb25BY3RpdmF0ZTpFdmVudEVtaXR0ZXI8dm9pZD47XG5cbiAgICAvLyBGaXJlcyB3aGVuZXZlciBhIHRhYiBpcyBkZWFjdGl2YXRlZCBoYXZpbmcgcHJldmlvdXNseSBiZWVuIGFjdGl2YXRlZC5cbiAgICBAT3V0cHV0KFwiZGVhY3RpdmF0ZVwiKVxuICAgIHB1YmxpYyBvbkRlYWN0aXZhdGU6RXZlbnRFbWl0dGVyPHZvaWQ+O1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQWN0aXZlKGFjdGl2ZTpib29sZWFuKSB7XG4gICAgICAgIGxldCBpc0FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgLy8gT25seSB1c2VkIGJ5IEBJbnB1dCgpLCBydW5zIHdoZW5ldmVyIHVzZXIgaW5wdXQgY2hhbmdlcyBgaXNBY3RpdmVgLlxuICAgICAgICAvLyBSdW4gaW4gdGltZW91dCBiZWNhdXNlIGBpc0Rpc2FibGVkYCBjYW4gcHJvaGliaXQgdXNlciBmcm9tIGNoYW5naW5nIGBpc0FjdGl2ZWAuXG4gICAgICAgIC8vIHNvIHVwZGF0ZSBpcyBkZWxheWVkIHRvIGF2b2lkICdjaGFuZ2VkIGFmdGVyIGNoZWNrZWQnIGVycm9yLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgYWxsb3cgY2hhbmdlIGlmIHRhYiBoZWFkZXIgaXMgbm90IGRpc2FibGVkLlxuICAgICAgICAgICAgaXNBY3RpdmUgPSAhdGhpcy5pc0Rpc2FibGVkID8gYWN0aXZlIDogZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVN0YXRlKGlzQWN0aXZlKTtcblxuICAgICAgICAgICAgLy8gRmlyZSAnZXh0ZXJuYWwgY2hhbmdlJyBldmVudCBhcyB1c2VyIGlucHV0IGhhcyBvY2N1cmVkLlxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZUV4dGVybmFsQ2hhbmdlLmVtaXQoaXNBY3RpdmUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0Rpc2FibGVkOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kaXNhYmxlZFwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc0Rpc2FibGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNEaXNhYmxlZChkaXNhYmxlZDpib29sZWFuKSB7XG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIGlmIHZhbHVlIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0byBjdXJyZW50IG9uZS5cbiAgICAgICAgaWYgKHRoaXMuX2lzRGlzYWJsZWQgIT09IGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgICAgICAgIC8vIElmIG5vdyBkaXNhYmxlZCwgdGhlbiB0YWIgaGVhZGVyIG11c3QgYmUgZGVhY3RpdmF0ZWQuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmVFeHRlcm5hbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgICAgIHRoaXMub25EZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxseSB1cGRhdGUgYWN0aXZlIHN0YXRlLlxuICAgIHB1YmxpYyBzZXRBY3RpdmVTdGF0ZShhY3RpdmU6Ym9vbGVhbik6dm9pZCB7XG4gICAgICAgIC8vIElmIChjYXN0KSBhY3RpdmUgdmFsdWUgaGFzIGNoYW5nZWQ6XG4gICAgICAgIGlmICghIXRoaXMuX2lzQWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBhY3RpdmU7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgdGhlIGFwcHJvcHJpYXRlIGFjdGl2YXRpb24gZXZlbnQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkFjdGl2YXRlLmVtaXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlYWN0aXZhdGUuZW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVnYXJkbGVzcywgZW1pdCBhIGNoYW5nZSB0byBgaXNBY3RpdmVgLCBzbyBbKGlzQWN0aXZlKV0gd29ya3MgY29ycmVjdGx5LlxuICAgICAgICB0aGlzLmlzQWN0aXZlQ2hhbmdlLmVtaXQoYWN0aXZlKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiY2xpY2tcIilcbiAgICBwdWJsaWMgb25DbGljaygpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIHRhYiB3aGVuIGNsaWNrZWQsIHNvIGxvbmcgYXMgaXQgaXNuJ3QgZGlzYWJsZWQuXG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==