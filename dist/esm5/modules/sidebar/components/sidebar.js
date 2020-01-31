import { Component, HostBinding, Input, Output, Renderer2, ElementRef, EventEmitter } from "@angular/core";
import { SidebarService, SidebarTransition, SidebarDirection } from "../services/sidebar.service";
import * as i0 from "@angular/core";
var _c0 = ["*"];
var SuiSidebar = /** @class */ (function () {
    function SuiSidebar(_renderer, _element) {
        var _this = this;
        this._renderer = _renderer;
        this._element = _element;
        this.service = new SidebarService();
        // We set the default here as well to force the classes to update.
        this.transition = SidebarTransition.Uncover;
        this.direction = SidebarDirection.Left;
        setTimeout(function () { return _this.updateDimensions(); });
        this.service.isVisibleChange.subscribe(function () { return _this.updateDimensions(); });
        this.hasClasses = true;
    }
    Object.defineProperty(SuiSidebar.prototype, "transition", {
        get: function () {
            return this.service.transition;
        },
        set: function (transition) {
            var _this = this;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, false); });
            this.service.transition = transition;
            this.service.transition.split(" ").forEach(function (c) { return _this.setClass(c, true); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "direction", {
        get: function () {
            return this.service.direction;
        },
        set: function (direction) {
            this.setClass(this.service.direction, false);
            this.service.direction = direction;
            this.setClass(this.service.direction, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisible", {
        get: function () {
            return this.service.isVisible;
        },
        set: function (isVisible) {
            this.service.setVisibleState(isVisible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isVisibleChange", {
        get: function () {
            return this.service.isVisibleChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSidebar.prototype, "isAnimating", {
        get: function () {
            return this.service.isAnimating;
        },
        enumerable: true,
        configurable: true
    });
    SuiSidebar.prototype.updateDimensions = function () {
        this.service.width = this._element.nativeElement.offsetWidth;
        this.service.height = this._element.nativeElement.offsetHeight;
    };
    SuiSidebar.prototype.setClass = function (className, isAdd) {
        if (isAdd === void 0) { isAdd = true; }
        if (isAdd) {
            this._renderer.addClass(this._element.nativeElement, className);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    };
    SuiSidebar.prototype.open = function () {
        this.service.setVisibleState(true);
    };
    SuiSidebar.prototype.close = function () {
        this.service.setVisibleState(false);
    };
    SuiSidebar.prototype.toggle = function () {
        this.service.toggleVisibleState();
    };
    SuiSidebar.ɵfac = function SuiSidebar_Factory(t) { return new (t || SuiSidebar)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SuiSidebar.ɵcmp = i0.ɵɵdefineComponent({ type: SuiSidebar, selectors: [["sui-sidebar"]], hostVars: 10, hostBindings: function SuiSidebar_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ui", ctx.hasClasses)("sidebar", ctx.hasClasses)("menu", ctx.hasClasses)("visible", ctx.isVisible)("animating", ctx.isAnimating);
        } }, inputs: { transition: "transition", direction: "direction", isVisible: "isVisible" }, outputs: { isVisibleChange: "isVisibleChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function SuiSidebar_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return SuiSidebar;
}());
export { SuiSidebar };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSidebar, [{
        type: Component,
        args: [{
                selector: "sui-sidebar",
                template: "<ng-content></ng-content>"
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.sidebar"]
        }, {
            type: HostBinding,
            args: ["class.menu"]
        }], transition: [{
            type: Input
        }], direction: [{
            type: Input
        }], isVisible: [{
            type: HostBinding,
            args: ["class.visible"]
        }, {
            type: Input
        }], isVisibleChange: [{
            type: Output
        }], isAnimating: [{
            type: HostBinding,
            args: ["class.animating"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvc2lkZWJhci9jb21wb25lbnRzL3NpZGViYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQUVsRztJQTBESSxvQkFBb0IsU0FBbUIsRUFBVSxRQUFtQjtRQUFwRSxpQkFVQztRQVZtQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDcEMsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBRXZDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQXhERCxzQkFDVyxrQ0FBVTthQURyQjtZQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDbkMsQ0FBQzthQUVELFVBQXNCLFVBQTRCO1lBQWxELGlCQU1DO1lBTEcsSUFBSSxD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eEM7O2tCQUlJLFdBQVc7bUJBQUMsVUFBVTs7a0JBQ3RCLFdBQVc7bUJBQUMsZUFBZTs7a0JBQzNCLFdBQVc7bUJBQUMsWUFBWTs7a0JBR3hCLEtBQUs7O2tCQWFMLEtBQUs7O2tCQWFMLFdBQVc7bUJBQUMsZUFBZTs7a0JBQzNCLEtBQUs7O2tCQVNMLE1BQU07O2tCQUtOLFdBQVc7bUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2lkZWJhclNlcnZpY2UsIFNpZGViYXJUcmFuc2l0aW9uLCBTaWRlYmFyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZGViYXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2lkZWJhclwiLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2lkZWJhciB7XG4gICAgcHVibGljIHNlcnZpY2U6U2lkZWJhclNlcnZpY2U7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnNpZGViYXJcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tZW51XCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uKCk6U2lkZWJhclRyYW5zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uKHRyYW5zaXRpb246U2lkZWJhclRyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24uc3BsaXQoXCIgXCIpLmZvckVhY2goYyA9PiB0aGlzLnNldENsYXNzKGMsIGZhbHNlKSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICAgIHRoaXMuc2VydmljZS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGMgPT4gdGhpcy5zZXRDbGFzcyhjLCB0cnVlKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOlNpZGViYXJEaXJlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246U2lkZWJhckRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLnNldENsYXNzKHRoaXMuc2VydmljZS5kaXJlY3Rpb24sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3ModGhpcy5zZXJ2aWNlLmRpcmVjdGlvbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc1Zpc2libGUoaXNWaXNpYmxlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNldFZpc2libGVTdGF0ZShpc1Zpc2libGUpO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlQ2hhbmdlKCk6RXZlbnRFbWl0dGVyPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5pc1Zpc2libGVDaGFuZ2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYW5pbWF0aW5nXCIpXG4gICAgcHVibGljIGdldCBpc0FuaW1hdGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmlzQW5pbWF0aW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfZWxlbWVudDpFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IG5ldyBTaWRlYmFyU2VydmljZSgpO1xuICAgICAgICAvLyBXZSBzZXQgdGhlIGRlZmF1bHQgaGVyZSBhcyB3ZWxsIHRvIGZvcmNlIHRoZSBjbGFzc2VzIHRvIHVwZGF0ZS5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gU2lkZWJhclRyYW5zaXRpb24uVW5jb3ZlcjtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBTaWRlYmFyRGlyZWN0aW9uLkxlZnQ7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKSk7XG4gICAgICAgIHRoaXMuc2VydmljZS5pc1Zpc2libGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlRGltZW5zaW9ucygpKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRGltZW5zaW9ucygpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uud2lkdGggPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuc2VydmljZS5oZWlnaHQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q2xhc3MoY2xhc3NOYW1lOnN0cmluZywgaXNBZGQ6Ym9vbGVhbiA9IHRydWUpOnZvaWQge1xuICAgICAgICBpZiAoaXNBZGQpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuc2VydmljZS5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnRvZ2dsZVZpc2libGVTdGF0ZSgpO1xuICAgIH1cbn1cbiJdfQ==