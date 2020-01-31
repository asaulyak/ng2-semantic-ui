import { __extends } from "tslib";
import { Directive, Input, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util, PositioningPlacement, SuiComponentFactory } from "../../../misc/util/internal";
import { PopupConfig, PopupTrigger } from "../classes/popup-config";
import { SuiPopupConfig } from "../services/popup.service";
import { SuiPopupTemplateController } from "../classes/popup-template-controller";
import * as i0 from "@angular/core";
import * as i1 from "../../../misc/util/internal";
import * as i2 from "../services/popup.service";
var templateRef = TemplateRef;
var SuiPopupDirective = /** @class */ (function (_super) {
    __extends(SuiPopupDirective, _super);
    function SuiPopupDirective(renderer, element, componentFactory, popupDefaults) {
        return _super.call(this, renderer, element, componentFactory, new PopupConfig(popupDefaults)) || this;
    }
    Object.defineProperty(SuiPopupDirective.prototype, "popupHeader", {
        set: function (header) {
            this.popup.config.header = header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupText", {
        set: function (text) {
            this.popup.config.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInverted", {
        set: function (inverted) {
            this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupBasic", {
        set: function (basic) {
            this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupInline", {
        set: function (inline) {
            this.popup.config.isInline = Util.DOM.parseBooleanAttribute(inline);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupFlowing", {
        set: function (flowing) {
            this.popup.config.isFlowing = Util.DOM.parseBooleanAttribute(flowing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransition", {
        set: function (transition) {
            this.popup.config.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTransitionDuration", {
        set: function (duration) {
            this.popup.config.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupPlacement", {
        set: function (placement) {
            this.popup.config.placement = placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupWidth", {
        set: function (width) {
            this.popup.config.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupSize", {
        set: function (size) {
            this.popup.config.size = size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupDelay", {
        set: function (delay) {
            this.popup.config.delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTrigger", {
        get: function () {
            return this.popup.config.trigger;
        },
        set: function (trigger) {
            this.popup.config.trigger = trigger;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplate", {
        set: function (template) {
            this.template = template;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupTemplateContext", {
        set: function (context) {
            this.context = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiPopupDirective.prototype, "popupConfig", {
        set: function (config) {
            this.configure(config);
        },
        enumerable: true,
        configurable: true
    });
    SuiPopupDirective.ɵfac = function SuiPopupDirective_Factory(t) { return new (t || SuiPopupDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.SuiComponentFactory), i0.ɵɵdirectiveInject(i2.SuiPopupConfig)); };
    SuiPopupDirective.ɵdir = i0.ɵɵdefineDirective({ type: SuiPopupDirective, selectors: [["", "suiPopup", ""]], inputs: { popupHeader: "popupHeader", popupText: "popupText", popupInverted: "popupInverted", popupBasic: "popupBasic", popupInline: "popupInline", popupFlowing: "popupFlowing", popupTransition: "popupTransition", popupTransitionDuration: "popupTransitionDuration", popupPlacement: "popupPlacement", popupWidth: "popupWidth", popupSize: "popupSize", popupDelay: "popupDelay", popupTrigger: "popupTrigger", popupTemplate: "popupTemplate", popupTemplateContext: "popupTemplateContext", popupConfig: "popupConfig" }, exportAs: ["suiPopup"], features: [i0.ɵɵInheritDefinitionFeature] });
    return SuiPopupDirective;
}(SuiPopupTemplateController));
export { SuiPopupDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiPopupDirective, [{
        type: Directive,
        args: [{
                selector: "[suiPopup]",
                exportAs: "suiPopup"
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.SuiComponentFactory }, { type: i2.SuiPopupConfig }]; }, { popupHeader: [{
            type: Input
        }], popupText: [{
            type: Input
        }], popupInverted: [{
            type: Input
        }], popupBasic: [{
            type: Input
        }], popupInline: [{
            type: Input
        }], popupFlowing: [{
            type: Input
        }], popupTransition: [{
            type: Input
        }], popupTransitionDuration: [{
            type: Input
        }], popupPlacement: [{
            type: Input
        }], popupWidth: [{
            type: Input
        }], popupSize: [{
            type: Input
        }], popupDelay: [{
            type: Input
        }], popupTrigger: [{
            type: Input
        }], popupTemplate: [{
            type: Input
        }], popupTemplateContext: [{
            type: Input
        }], popupConfig: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9wb3B1cC9kaXJlY3RpdmVzL3BvcHVwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUF1QixJQUFJLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVuSCxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBeUIsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFM0QsT0FBTyxFQUFFLDBCQUEwQixFQUErQyxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRS9ILElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUVoQztJQUkwQyxxQ0FBNkI7SUFxRm5FLDJCQUFZLFFBQWtCLEVBQ2xCLE9BQWtCLEVBQ2xCLGdCQUFvQyxFQUNwQyxhQUE0QjtlQUVwQyxrQkFBTSxRQUFRLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUExRkQsc0JBQ1csMENBQVc7YUFEdEIsVUFDdUIsTUFBYTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQ1csd0NBQVM7YUFEcEIsVUFDcUIsSUFBVztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQ1csNENBQWE7YUFEeEIsVUFDeUIsUUFBZ0I7WUFD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Q3ZCOztrQkFFSSxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLOztrQkFTTCxLQUFLOztrQkFLTCxLQUFLOztrQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgRWxlbWVudFJlZiwgVGVtcGxhdGVSZWYsIFJlbmRlcmVyMiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVSZWZDb250ZXh0LCBVdGlsLCBQb3NpdGlvbmluZ1BsYWNlbWVudCwgU3VpQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBcIjtcbmltcG9ydCB7IFBvcHVwQ29uZmlnLCBQb3B1cFRyaWdnZXIsIFBvcHVwU2l6ZSwgUG9wdXBXaWR0aCB9IGZyb20gXCIuLi9jbGFzc2VzL3BvcHVwLWNvbmZpZ1wiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vc2VydmljZXMvcG9wdXAuc2VydmljZVwiO1xuaW1wb3J0IHsgU3VpUG9wdXBDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NsYXNzZXMvcG9wdXAtY29udHJvbGxlclwiO1xuaW1wb3J0IHsgU3VpUG9wdXBUZW1wbGF0ZUNvbnRyb2xsZXIsIElUZW1wbGF0ZVBvcHVwQ29udGV4dCwgSVRlbXBsYXRlUG9wdXBDb25maWcgfSBmcm9tIFwiLi4vY2xhc3Nlcy9wb3B1cC10ZW1wbGF0ZS1jb250cm9sbGVyXCI7XG5cbmNvbnN0IHRlbXBsYXRlUmVmID0gVGVtcGxhdGVSZWY7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltzdWlQb3B1cF1cIixcbiAgICBleHBvcnRBczogXCJzdWlQb3B1cFwiXG59KVxuZXhwb3J0IGNsYXNzIFN1aVBvcHVwRGlyZWN0aXZlPFQ+IGV4dGVuZHMgU3VpUG9wdXBUZW1wbGF0ZUNvbnRyb2xsZXI8VD4ge1xuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEhlYWRlcihoZWFkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLmhlYWRlciA9IGhlYWRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZXh0KHRleHQ6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cEludmVydGVkKGludmVydGVkOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNJbnZlcnRlZCA9IFV0aWwuRE9NLnBhcnNlQm9vbGVhbkF0dHJpYnV0ZShpbnZlcnRlZCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwQmFzaWMoYmFzaWM6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0Jhc2ljID0gVXRpbC5ET00ucGFyc2VCb29sZWFuQXR0cmlidXRlKGJhc2ljKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBJbmxpbmUoaW5saW5lOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcuaXNJbmxpbmUgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoaW5saW5lKTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBGbG93aW5nKGZsb3dpbmc6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5pc0Zsb3dpbmcgPSBVdGlsLkRPTS5wYXJzZUJvb2xlYW5BdHRyaWJ1dGUoZmxvd2luZyk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUcmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFBsYWNlbWVudChwbGFjZW1lbnQ6UG9zaXRpb25pbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcucGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cFdpZHRoKHdpZHRoOlBvcHVwV2lkdGgpIHtcbiAgICAgICAgdGhpcy5wb3B1cC5jb25maWcud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBTaXplKHNpemU6UG9wdXBTaXplKSB7XG4gICAgICAgIHRoaXMucG9wdXAuY29uZmlnLnNpemUgPSBzaXplO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBwb3B1cERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy5kZWxheSA9IGRlbGF5O1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwb3B1cFRyaWdnZXIoKTpQb3B1cFRyaWdnZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3B1cC5jb25maWcudHJpZ2dlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBvcHVwVHJpZ2dlcih0cmlnZ2VyOlBvcHVwVHJpZ2dlcikge1xuICAgICAgICB0aGlzLnBvcHVwLmNvbmZpZy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZW1wbGF0ZSh0ZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJVGVtcGxhdGVQb3B1cENvbnRleHQ8VD4+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcG9wdXBUZW1wbGF0ZUNvbnRleHQoY29udGV4dDpUIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHBvcHVwQ29uZmlnKGNvbmZpZzpJVGVtcGxhdGVQb3B1cENvbmZpZzxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZShjb25maWcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyOlJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50RmFjdG9yeTpTdWlDb21wb25lbnRGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHBvcHVwRGVmYXVsdHM6U3VpUG9wdXBDb25maWcpIHtcblxuICAgICAgICBzdXBlcihyZW5kZXJlciwgZWxlbWVudCwgY29tcG9uZW50RmFjdG9yeSwgbmV3IFBvcHVwQ29uZmlnKHBvcHVwRGVmYXVsdHMpKTtcbiAgICB9XG59XG4iXX0=