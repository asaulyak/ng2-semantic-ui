import { __extends } from "tslib";
import { Component, Directive, Input, Output, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SuiRating_i_0_Template(rf, ctx) { if (rf & 1) {
    var _r206 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 1);
    i0.ɵɵlistener("mouseover", function SuiRating_i_0_Template_i_mouseover_0_listener($event) { i0.ɵɵrestoreView(_r206); var i_r204 = ctx.index; var ctx_r205 = i0.ɵɵnextContext(); return ctx_r205.onMouseover(i_r204); })("click", function SuiRating_i_0_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r206); var i_r204 = ctx.index; var ctx_r207 = i0.ɵɵnextContext(); return ctx_r207.onClick(i_r204); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r204 = ctx.index;
    var ctx_r202 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", ctx_r202.hoveredIndex >= i_r204 && !ctx_r202.isReadonly)("active", ctx_r202.value > i_r204);
} }
var SuiRating = /** @class */ (function () {
    function SuiRating() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    Object.defineProperty(SuiRating.prototype, "maximum", {
        get: function () {
            return this._maximum;
        },
        set: function (value) {
            this._maximum = +value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiRating.prototype, "icons", {
        get: function () {
            // tslint:disable-next-line:prefer-literal
            return new Array(this.maximum);
        },
        enumerable: true,
        configurable: true
    });
    SuiRating.prototype.onClick = function (i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    };
    SuiRating.prototype.onMouseover = function (i) {
        this.hoveredIndex = i;
    };
    SuiRating.prototype.onMouseout = function () {
        this.hoveredIndex = -1;
    };
    SuiRating.prototype.writeValue = function (value) {
        this.value = value;
    };
    SuiRating.ɵfac = function SuiRating_Factory(t) { return new (t || SuiRating)(); };
    SuiRating.ɵcmp = i0.ɵɵdefineComponent({ type: SuiRating, selectors: [["sui-rating"]], hostVars: 6, hostBindings: function SuiRating_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("mouseout", function SuiRating_mouseout_HostBindingHandler($event) { return ctx.onMouseout(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("ui", ctx.hasClasses)("rating", ctx.hasClasses)("read-only", ctx.isReadonly);
        } }, inputs: { maximum: "maximum", isReadonly: "isReadonly" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 1, consts: [["class", "icon", 3, "selected", "active", "mouseover", "click", 4, "ngFor", "ngForOf"], [1, "icon", 3, "mouseover", "click"]], template: function SuiRating_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SuiRating_i_0_Template, 1, 4, "i", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.icons);
        } }, directives: [i1.NgForOf], styles: [".read-only[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n    cursor: auto\n}"] });
    return SuiRating;
}());
export { SuiRating };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiRating, [{
        type: Component,
        args: [{
                selector: "sui-rating",
                template: "\n<i class=\"icon\"\n   *ngFor=\"let icon of icons; let i = index\"\n   (mouseover)=\"onMouseover(i)\"\n   (click)=\"onClick(i)\"\n   [class.selected]=\"hoveredIndex >= i && !isReadonly\"\n   [class.active]=\"value > i\">\n</i>\n",
                styles: ["\n:host.read-only .icon {\n    cursor: auto\n}\n"]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.rating"]
        }], valueChange: [{
            type: Output
        }], maximum: [{
            type: Input
        }], isReadonly: [{
            type: HostBinding,
            args: ["class.read-only"]
        }, {
            type: Input
        }], onMouseout: [{
            type: HostListener,
            args: ["mouseout"]
        }] }); })();
var SuiRatingValueAccessor = /** @class */ (function (_super) {
    __extends(SuiRatingValueAccessor, _super);
    function SuiRatingValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiRatingValueAccessor.ɵfac = function SuiRatingValueAccessor_Factory(t) { return new (t || SuiRatingValueAccessor)(i0.ɵɵdirectiveInject(SuiRating)); };
    SuiRatingValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiRatingValueAccessor, selectors: [["sui-rating"]], hostBindings: function SuiRatingValueAccessor_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("valueChange", function SuiRatingValueAccessor_valueChange_HostBindingHandler($event) { return ctx.onChange($event); });
        } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiRatingValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
    return SuiRatingValueAccessor;
}(CustomValueAccessor));
export { SuiRatingValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiRatingValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-rating",
                host: { "(valueChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
            }]
    }], function () { return [{ type: SuiRating }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9yYXRpbmcvY29tcG9uZW50cy9yYXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUE0QiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztJQUt4SCw0QkFNSTtJQUpELHVOQUE0Qiw4TEFBQTtJQUkvQixpQkFBSTs7OztJQUZELG1GQUFtRCxtQ0FBQTs7QUFQdEQ7SUFpREk7UUFGTyxpQkFBWSxHQUFVLENBQUMsQ0FBQyxDQUFDO1FBRzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTlDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUE1QkQsc0JBQ1csOEJBQU87YUFEbEI7WUFFSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQW1CLEtBQVk7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQVVELHNCQUFXLDRCQUFLO2FBQWhCO1lBQ0ksMENBQTBDO1lBQzFDLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBY00sMkJBQU8sR0FBZCxVQUFlLENBQVE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQztJQUNMLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixDQUFRO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFHTSw4QkFBVSxHQURqQjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLDhCQUFVLEdBQWpCLFVBQWtCLEtBQVk7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztzRUE1RFEsU0FBUztrREFBVCxTQUFTOzs7OztZQWR0QixzREFNQTs7WUFMRyxtQ0FBeUM7O29CQVA1QztDQWlGQyxBQTlFRCxJQThFQztTQTdEWSxTQUFTO2tEQUFULFNBQVM7Y0FqQnJCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLHVPQVFiO2dCQUNHLE1BQU0sRUFBRSxDQUFDLGtEQUlaLENBQUM7YUFDRDs7a0JBRUksV0FBVzttQkFBQyxVQUFVOztrQkFDdEIsV0FBVzttQkFBQyxjQUFjOztrQkFLMUIsTUFBTTs7a0JBS04sS0FBSzs7a0JBU0wsV0FBVzttQkFBQyxpQkFBaUI7O2tCQUM3QixLQUFLOztrQkErQkwsWUFBWTttQkFBQyxVQUFVOztBQVU1QjtJQUs0QywwQ0FBc0M7SUFDOUUsZ0NBQVksSUFBYztlQUN0QixrQkFBTSxJQUFJLENBQUM7SUFDZixDQUFDO2dHQUhRLHNCQUFzQix1QkFDZCxTQUFTOytEQURqQixzQkFBc0I7OzhDQUZwQixDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLENBQUM7aUNBdEZuRTtDQTRGQyxBQVRELENBSzRDLG1CQUFtQixHQUk5RDtTQUpZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQ2xFO3NDQUVvQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktcmF0aW5nXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxpIGNsYXNzPVwiaWNvblwiXG4gICAqbmdGb3I9XCJsZXQgaWNvbiBvZiBpY29uczsgbGV0IGkgPSBpbmRleFwiXG4gICAobW91c2VvdmVyKT1cIm9uTW91c2VvdmVyKGkpXCJcbiAgIChjbGljayk9XCJvbkNsaWNrKGkpXCJcbiAgIFtjbGFzcy5zZWxlY3RlZF09XCJob3ZlcmVkSW5kZXggPj0gaSAmJiAhaXNSZWFkb25seVwiXG4gICBbY2xhc3MuYWN0aXZlXT1cInZhbHVlID4gaVwiPlxuPC9pPlxuYCxcbiAgICBzdHlsZXM6IFtgXG46aG9zdC5yZWFkLW9ubHkgLmljb24ge1xuICAgIGN1cnNvcjogYXV0b1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpUmF0aW5nIGltcGxlbWVudHMgSUN1c3RvbVZhbHVlQWNjZXNzb3JIb3N0PG51bWJlcj4ge1xuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MucmF0aW5nXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyB2YWx1ZTpudW1iZXI7XG5cbiAgICBAT3V0cHV0KClcbiAgICBwdWJsaWMgdmFsdWVDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj47XG5cbiAgICBwcml2YXRlIF9tYXhpbXVtOm51bWJlcjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBtYXhpbXVtKCk6bnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heGltdW07XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBtYXhpbXVtKHZhbHVlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9tYXhpbXVtID0gK3ZhbHVlO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnJlYWQtb25seVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgaWNvbnMoKTp1bmRlZmluZWRbXSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItbGl0ZXJhbFxuICAgICAgICByZXR1cm4gbmV3IEFycmF5KHRoaXMubWF4aW11bSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhvdmVyZWRJbmRleDpudW1iZXIgPSAtMTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgICAgIHRoaXMubWF4aW11bSA9IDU7XG4gICAgICAgIHRoaXMuaXNSZWFkb25seSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xpY2soaTpudW1iZXIpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkb25seSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGkgKyAxO1xuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTW91c2VvdmVyKGk6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkSW5kZXggPSBpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJtb3VzZW91dFwiKVxuICAgIHB1YmxpYyBvbk1vdXNlb3V0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuaG92ZXJlZEluZGV4ID0gLTE7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6bnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXJhdGluZ1wiLFxuICAgIGhvc3Q6IHsgXCIodmFsdWVDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpUmF0aW5nVmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVJhdGluZ1ZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPG51bWJlciwgU3VpUmF0aW5nPiB7XG4gICAgY29uc3RydWN0b3IoaG9zdDpTdWlSYXRpbmcpIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIl19