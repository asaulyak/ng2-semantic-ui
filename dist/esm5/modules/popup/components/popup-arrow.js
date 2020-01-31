import { Component, Input, HostBinding } from "@angular/core";
import { PositioningPlacement } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function SuiPopupArrow_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 2);
} if (rf & 2) {
    var ctx_r159 = i0.ɵɵnextContext();
    i0.ɵɵattribute("direction", ctx_r159.direction);
} }
function SuiPopupArrow_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 3);
} if (rf & 2) {
    var ctx_r160 = i0.ɵɵnextContext();
    i0.ɵɵattribute("direction", ctx_r160.direction)("alignment", ctx_r160.alignment);
} }
var SuiPopupArrow = /** @class */ (function () {
    function SuiPopupArrow() {
    }
    Object.defineProperty(SuiPopupArrow.prototype, "direction", {
        get: function () {
            if (this.placement) {
                return this.placement.split(" ").shift();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupArrow.prototype, "alignment", {
        get: function () {
            if (this.placement) {
                var alignment = this.placement.split(" ").pop();
                if (alignment === this.direction) {
                    return "center";
                }
                return alignment;
            }
        },
        enumerable: true,
        configurable: true
    });
    SuiPopupArrow.ɵfac = function SuiPopupArrow_Factory(t) { return new (t || SuiPopupArrow)(); };
    SuiPopupArrow.ɵcmp = i0.ɵɵdefineComponent({ type: SuiPopupArrow, selectors: [["sui-popup-arrow"]], hostVars: 2, hostBindings: function SuiPopupArrow_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("inverted", ctx.inverted);
        } }, inputs: { placement: "placement", inverted: "inverted" }, decls: 2, vars: 2, consts: [["class", "dynamic arrow", 4, "ngIf"], ["class", "static arrow", 4, "ngIf"], [1, "dynamic", "arrow"], [1, "static", "arrow"]], template: function SuiPopupArrow_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SuiPopupArrow_div_0_Template, 1, 1, "div", 0);
            i0.ɵɵtemplate(1, SuiPopupArrow_div_1_Template, 1, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.alignment == "center");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.alignment != "center");
        } }, directives: [i1.NgIf], styles: [".arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 0.71428571em;\n    height: 0.71428571em;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    z-index: 2;\n}\n\n.inverted[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    background: #1b1c1d;\n}\n\n.arrow[direction=\"top\"][_ngcontent-%COMP%] {\n    bottom: -0.30714286em;\n    box-shadow: 1px 1px 0 0 #bababc;\n}\n\n.arrow[direction=\"left\"][_ngcontent-%COMP%] {\n    right: -0.30714286em;\n    box-shadow: 1px -1px 1px 0 #bababc;\n}\n\n.arrow[direction=\"bottom\"][_ngcontent-%COMP%] {\n    top: -0.30714286em;\n    box-shadow: -1px -1px 0 0 #bababc;\n}\n\n.arrow[direction=\"right\"][_ngcontent-%COMP%] {\n    left: -0.30714286em;\n    box-shadow: -1px 1px 1px 0 #bababc;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"left\"][_ngcontent-%COMP%], .static.arrow[direction=\"top\"][alignment=\"left\"][_ngcontent-%COMP%] {\n    left: 1em;\n    right: auto;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"top\"][_ngcontent-%COMP%], .static.arrow[direction=\"right\"][alignment=\"top\"][_ngcontent-%COMP%] {\n    top: 1em;\n    bottom: auto;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"right\"][_ngcontent-%COMP%], .static.arrow[direction=\"top\"][alignment=\"right\"][_ngcontent-%COMP%] {\n    left: auto;\n    right: 1em;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"bottom\"][_ngcontent-%COMP%], .static.arrow[direction=\"right\"][alignment=\"bottom\"][_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 1em;\n}"] });
    return SuiPopupArrow;
}());
export { SuiPopupArrow };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiPopupArrow, [{
        type: Component,
        args: [{
                selector: "sui-popup-arrow",
                template: "\n<div class=\"dynamic arrow\" [attr.direction]=\"direction\" *ngIf=\"alignment == 'center'\"></div>\n<div class=\"static arrow\" [attr.direction]=\"direction\" [attr.alignment]=\"alignment\" *ngIf=\"alignment != 'center'\"></div>\n",
                styles: ["\n.arrow {\n    position: absolute;\n    width: 0.71428571em;\n    height: 0.71428571em;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    z-index: 2;\n}\n\n:host.inverted .arrow {\n    background: #1b1c1d;\n}\n\n.arrow[direction=\"top\"] {\n    bottom: -0.30714286em;\n    box-shadow: 1px 1px 0 0 #bababc;\n}\n\n.arrow[direction=\"left\"] {\n    right: -0.30714286em;\n    box-shadow: 1px -1px 1px 0 #bababc;\n}\n\n.arrow[direction=\"bottom\"] {\n    top: -0.30714286em;\n    box-shadow: -1px -1px 0 0 #bababc;\n}\n\n.arrow[direction=\"right\"] {\n    left: -0.30714286em;\n    box-shadow: -1px 1px 1px 0 #bababc;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"left\"],\n.static.arrow[direction=\"top\"][alignment=\"left\"] {\n    left: 1em;\n    right: auto;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"top\"],\n.static.arrow[direction=\"right\"][alignment=\"top\"] {\n    top: 1em;\n    bottom: auto;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"right\"],\n.static.arrow[direction=\"top\"][alignment=\"right\"] {\n    left: auto;\n    right: 1em;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"bottom\"],\n.static.arrow[direction=\"right\"][alignment=\"bottom\"] {\n    top: auto;\n    bottom: 1em;\n}\n"]
            }]
    }], null, { placement: [{
            type: Input
        }], inverted: [{
            type: HostBinding,
            args: ["class.inverted"]
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtYXJyb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3BvcHVwL2NvbXBvbmVudHMvcG9wdXAtYXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0lBS25FLHlCQUE0Rjs7O0lBQWpFLCtDQUE0Qjs7O0lBQ3ZELHlCQUF3SDs7O0lBQTlGLCtDQUE0QixpQ0FBQTs7QUFKdEQ7SUFBQTtLQTBGQztJQWZHLHNCQUFXLG9DQUFTO2FBQXBCO1lBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzVDO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxvQ0FBUzthQUFwQjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDaEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2xELElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzlCLE9BQU8sUUFBUSxDQUFDO2lCQUNuQjtnQkFDRCxPQUFPLFNBQVMsQ0FBQzthQUNwQjtRQUNMLENBQUM7OztPQUFBOzhFQXRCUSxhQUFhO3NEQUFiLGFBQWE7OztZQWhFMUIsOERBQXNGO1lBQ3RGLDhEQUFrSDs7WUFEMUQsZ0RBQTZCO1lBQ0QsZUFBNkI7WUFBN0IsZ0RBQTZCOzt3QkFQakg7Q0E2RkMsQUExRkQsSUEwRkM7U0F2QlksYUFBYTtrREFBYixhQUFhO2NBbkV6QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDBPQUdiO2dCQUNHLE1BQU0sRUFBRSxDQUFDLDJ5Q0EyRFosQ0FBQzthQUNEOztrQkFFSSxLQUFLOztrQkFHTCxXQUFXO21CQUFDLGdCQUFnQjs7a0JBQzVCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1BsYWNlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXBvcHVwLWFycm93XCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJkeW5hbWljIGFycm93XCIgW2F0dHIuZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiICpuZ0lmPVwiYWxpZ25tZW50ID09ICdjZW50ZXInXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwic3RhdGljIGFycm93XCIgW2F0dHIuZGlyZWN0aW9uXT1cImRpcmVjdGlvblwiIFthdHRyLmFsaWdubWVudF09XCJhbGlnbm1lbnRcIiAqbmdJZj1cImFsaWdubWVudCAhPSAnY2VudGVyJ1wiPjwvZGl2PlxuYCxcbiAgICBzdHlsZXM6IFtgXG4uYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMC43MTQyODU3MWVtO1xuICAgIGhlaWdodDogMC43MTQyODU3MWVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgei1pbmRleDogMjtcbn1cblxuOmhvc3QuaW52ZXJ0ZWQgLmFycm93IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWIxYzFkO1xufVxuXG4uYXJyb3dbZGlyZWN0aW9uPVwidG9wXCJdIHtcbiAgICBib3R0b206IC0wLjMwNzE0Mjg2ZW07XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAwIDAgI2JhYmFiYztcbn1cblxuLmFycm93W2RpcmVjdGlvbj1cImxlZnRcIl0ge1xuICAgIHJpZ2h0OiAtMC4zMDcxNDI4NmVtO1xuICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDFweCAwICNiYWJhYmM7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJib3R0b21cIl0ge1xuICAgIHRvcDogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMCAwICNiYWJhYmM7XG59XG5cbi5hcnJvd1tkaXJlY3Rpb249XCJyaWdodFwiXSB7XG4gICAgbGVmdDogLTAuMzA3MTQyODZlbTtcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMCAjYmFiYWJjO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImJvdHRvbVwiXVthbGlnbm1lbnQ9XCJsZWZ0XCJdLFxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJ0b3BcIl1bYWxpZ25tZW50PVwibGVmdFwiXSB7XG4gICAgbGVmdDogMWVtO1xuICAgIHJpZ2h0OiBhdXRvO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImxlZnRcIl1bYWxpZ25tZW50PVwidG9wXCJdLFxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJyaWdodFwiXVthbGlnbm1lbnQ9XCJ0b3BcIl0ge1xuICAgIHRvcDogMWVtO1xuICAgIGJvdHRvbTogYXV0bztcbn1cblxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJib3R0b21cIl1bYWxpZ25tZW50PVwicmlnaHRcIl0sXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cInRvcFwiXVthbGlnbm1lbnQ9XCJyaWdodFwiXSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMWVtO1xufVxuXG4uc3RhdGljLmFycm93W2RpcmVjdGlvbj1cImxlZnRcIl1bYWxpZ25tZW50PVwiYm90dG9tXCJdLFxuLnN0YXRpYy5hcnJvd1tkaXJlY3Rpb249XCJyaWdodFwiXVthbGlnbm1lbnQ9XCJib3R0b21cIl0ge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDFlbTtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwQXJyb3cge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHBsYWNlbWVudDpQb3NpdGlvbmluZ1BsYWNlbWVudDtcblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmludmVydGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgaW52ZXJ0ZWQ6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGFsaWdubWVudCgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gdGhpcy5wbGFjZW1lbnQuc3BsaXQoXCIgXCIpLnBvcCgpO1xuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PT0gdGhpcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhbGlnbm1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=