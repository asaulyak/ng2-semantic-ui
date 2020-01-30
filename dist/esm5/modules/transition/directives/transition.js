import { Renderer2, ElementRef, Directive, Input, HostBinding, ChangeDetectorRef } from "@angular/core";
import { TransitionController } from "../classes/transition-controller";
import * as i0 from "@angular/core";
var SuiTransition = /** @class */ (function () {
    function SuiTransition(_renderer, _element, _changeDetector) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.transitionClass = true;
    }
    Object.defineProperty(SuiTransition.prototype, "suiTransition", {
        set: function (tC) {
            // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
            this.setTransitionController(tC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isVisible", {
        get: function () {
            if (this._controller) {
                return this._controller.isVisible;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiTransition.prototype, "isHidden", {
        get: function () {
            if (this._controller) {
                return this._controller.isHidden;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    // Initialises the controller with the injected renderer and elementRef.
    SuiTransition.prototype.setTransitionController = function (transitionController) {
        this._controller = transitionController;
        this._controller.registerRenderer(this._renderer);
        this._controller.registerElement(this._element.nativeElement);
        this._controller.registerChangeDetector(this._changeDetector);
    };
    SuiTransition.ɵfac = function SuiTransition_Factory(t) { return new (t || SuiTransition)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    SuiTransition.ɵdir = i0.ɵɵdefineDirective({ type: SuiTransition, selectors: [["", "suiTransition", ""]], hostVars: 6, hostBindings: function SuiTransition_HostBindings(rf, ctx, elIndex) { if (rf & 2) {
            i0.ɵɵclassProp("transition", ctx.transitionClass)("visible", ctx.isVisible)("hidden", ctx.isHidden);
        } }, inputs: { suiTransition: "suiTransition" }, exportAs: ["transition"] });
    return SuiTransition;
}());
export { SuiTransition };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiTransition, [{
        type: Directive,
        args: [{
                selector: "[suiTransition]",
                exportAs: "transition"
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { suiTransition: [{
            type: Input
        }], transitionClass: [{
            type: HostBinding,
            args: ["class.transition"]
        }], isVisible: [{
            type: HostBinding,
            args: ["class.visible"]
        }], isHidden: [{
            type: HostBinding,
            args: ["class.hidden"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvdHJhbnNpdGlvbi9kaXJlY3RpdmVzL3RyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBRXhFO0lBaUNJLHVCQUFzQixTQUFtQixFQUFZLFFBQW1CLEVBQVUsZUFBaUM7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFsQjVHLG9CQUFlLEdBQVcsSUFBSSxDQUFDO0lBa0JnRixDQUFDO0lBekJ2SCxzQkFDVyx3Q0FBYTthQUR4QixVQUN5QixFQUF1QjtZQUM1Qyw2RkFBNkY7WUFDN0YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBS0Qsc0JBQ1csb0NBQVM7YUFEcEI7WUFFSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7YUFDckM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDOzs7T0FBQTtJQUVELHNCQUNXLG1DQUFRO2FBRG5CO1lBRUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFJRCx3RUFBd0U7SUFDakUsK0NBQXVCLEdBQTlCLFVBQStCLG9CQUF5QztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs4RUFyQ1EsYUFBYTtzREFBYixhQUFhOzs7d0JBUDFCO0NBNkNDLEFBMUNELElBMENDO1NBdENZLGFBQWE7a0RBQWIsYUFBYTtjQUp6QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLFlBQVk7YUFDekI7O2tCQUtJLEtBQUs7O2tCQU1MLFdBQVc7bUJBQUMsa0JBQWtCOztrQkFHOUIsV0FBVzttQkFBQyxlQUFlOztrQkFRM0IsV0FBVzttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy90cmFuc2l0aW9uLWNvbnRyb2xsZXJcIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3N1aVRyYW5zaXRpb25dXCIsXG4gICAgZXhwb3J0QXM6IFwidHJhbnNpdGlvblwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVRyYW5zaXRpb24ge1xuICAgIC8vIEVhY2ggdHJhbnNpdGlvbiBtdXN0IGhhdmUgYSBjb250cm9sbGVyIGFzc29jaWF0ZWQgdGhhdCBkaXNwYXRjaGVzIHRoZSB0cmFuc2l0aW9ucy5cbiAgICBwcml2YXRlIF9jb250cm9sbGVyOlRyYW5zaXRpb25Db250cm9sbGVyO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHN1aVRyYW5zaXRpb24odEM6VHJhbnNpdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgICAgLy8gU2V0IHRoZSB0cmFuc2l0aW9uIGNvbnRyb2xsZXIgKGUuZy4gJzxkaXYgW3N1aVRyYW5zaXRpb25dPVwidHJhbnNpdGlvbkNvbnRyb2xsZXJcIj48L2Rpdj4nKS5cbiAgICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uQ29udHJvbGxlcih0Qyk7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudHJhbnNpdGlvblwiKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uQ2xhc3M6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy52aXNpYmxlXCIpXG4gICAgcHVibGljIGdldCBpc1Zpc2libGUoKTpib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyLmlzVmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuaGlkZGVuXCIpXG4gICAgcHVibGljIGdldCBpc0hpZGRlbigpOmJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fY29udHJvbGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXIuaXNIaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfcmVuZGVyZXI6UmVuZGVyZXIyLCBwcm90ZWN0ZWQgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3I6Q2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgICAvLyBJbml0aWFsaXNlcyB0aGUgY29udHJvbGxlciB3aXRoIHRoZSBpbmplY3RlZCByZW5kZXJlciBhbmQgZWxlbWVudFJlZi5cbiAgICBwdWJsaWMgc2V0VHJhbnNpdGlvbkNvbnRyb2xsZXIodHJhbnNpdGlvbkNvbnRyb2xsZXI6VHJhbnNpdGlvbkNvbnRyb2xsZXIpOnZvaWQge1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gdHJhbnNpdGlvbkNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJSZW5kZXJlcih0aGlzLl9yZW5kZXJlcik7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJFbGVtZW50KHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIucmVnaXN0ZXJDaGFuZ2VEZXRlY3Rvcih0aGlzLl9jaGFuZ2VEZXRlY3Rvcik7XG4gICAgfVxufVxuIl19