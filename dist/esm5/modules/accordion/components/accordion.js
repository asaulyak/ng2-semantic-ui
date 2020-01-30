import { Component, Input, HostBinding, ContentChildren, QueryList } from "@angular/core";
import { SuiAccordionPanel } from "./accordion-panel";
import { SuiAccordionService } from "../services/accordion.service";
import * as i0 from "@angular/core";
var _c0 = ["*"];
var SuiAccordion = /** @class */ (function () {
    function SuiAccordion() {
        // Accordion service is unique to each set of panels.
        this._service = new SuiAccordionService();
        this.hasClasses = true;
    }
    Object.defineProperty(SuiAccordion.prototype, "closeOthers", {
        get: function () {
            return this._service.closeOthers;
        },
        set: function (value) {
            this._service.closeOthers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transition", {
        set: function (transition) {
            this._service.transition = transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiAccordion.prototype, "transitionDuration", {
        set: function (duration) {
            this._service.transitionDuration = duration;
        },
        enumerable: true,
        configurable: true
    });
    SuiAccordion.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.updatePanels();
        // Reconnect panels after they have updated.
        this._panels.changes.subscribe(function () { return _this.updatePanels(); });
    };
    SuiAccordion.prototype.updatePanels = function () {
        var _this = this;
        this._panels.forEach(function (p) { return _this._service.addPanel(p); });
    };
    SuiAccordion.ɵfac = function SuiAccordion_Factory(t) { return new (t || SuiAccordion)(); };
    SuiAccordion.ɵcmp = i0.ɵɵdefineComponent({ type: SuiAccordion, selectors: [["sui-accordion"]], contentQueries: function SuiAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SuiAccordionPanel, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._panels = _t);
        } }, hostVars: 4, hostBindings: function SuiAccordion_HostBindings(rf, ctx, elIndex) { if (rf & 2) {
            i0.ɵɵclassProp("ui", ctx.hasClasses)("accordion", ctx.hasClasses);
        } }, inputs: { closeOthers: "closeOthers", transition: "transition", transitionDuration: "transitionDuration" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function SuiAccordion_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}\n\n\n.styled[_nghost-%COMP%]   sui-accordion-panel[_ngcontent-%COMP%]:first-child   .title[_ngcontent-%COMP%] {\n    border-top: none\n}"] });
    return SuiAccordion;
}());
export { SuiAccordion };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiAccordion, [{
        type: Component,
        args: [{
                selector: "sui-accordion",
                template: "\n<ng-content></ng-content>\n",
                styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.accordion"]
        }], closeOthers: [{
            type: Input
        }], transition: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], _panels: [{
            type: ContentChildren,
            args: [SuiAccordionPanel]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFFcEU7SUE4Q0k7UUFDSSxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQTdCRCxzQkFDVyxxQ0FBVzthQUR0QjtZQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDckMsQ0FBQzthQUVELFVBQXVCLEtBQWE7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7OztPQUpBO0lBTUQsc0JBQ1csb0NBQVU7YUFEckIsVUFDc0IsVUFBaUI7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsc0JBQ1csNENBQWtCO2FBRDdCLFVBQzhCLFFBQWU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFjTSx5Q0FBa0IsR0FBekI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQiw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sbUNBQVksR0FBbkI7UUFBQSxpQkFFQztRQURHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUN6RCxDQUFDOzRFQTdDUSxZQUFZO3FEQUFaLFlBQVk7d0NBMEJKLGlCQUFpQjs7Ozs7Ozs7WUF4Q3RDLGtCQUFZOzt1QkFQWjtDQW1FQyxBQS9ERCxJQStEQztTQTlDWSxZQUFZO2tEQUFaLFlBQVk7Y0FqQnhCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLCtCQUViO2dCQUNHLE1BQU0sRUFBRSxDQUFDLGdNQVVaLENBQUM7YUFDRDs7a0JBRUksV0FBVzttQkFBQyxVQUFVOztrQkFDdEIsV0FBVzttQkFBQyxpQkFBaUI7O2tCQUc3QixLQUFLOztrQkFTTCxLQUFLOztrQkFLTCxLQUFLOztrQkFPTCxlQUFlO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWlBY2NvcmRpb25QYW5lbCB9IGZyb20gXCIuL2FjY29yZGlvbi1wYW5lbFwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hY2NvcmRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktYWNjb3JkaW9uXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRml4IGZvciBnZW5lcmFsIHN0eWxpbmcgaXNzdWVzICovXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIEZpeCBmb3Igc3R5bGVkIGJvcmRlciBpc3N1ZSAqL1xuOmhvc3Quc3R5bGVkIHN1aS1hY2NvcmRpb24tcGFuZWw6Zmlyc3QtY2hpbGQgLnRpdGxlIHtcbiAgICBib3JkZXItdG9wOiBub25lXG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlBY2NvcmRpb24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy51aVwiKVxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmFjY29yZGlvblwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgY2xvc2VPdGhlcnMoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjbG9zZU90aGVycyh2YWx1ZTpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UuY2xvc2VPdGhlcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbih0cmFuc2l0aW9uOnN0cmluZykge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCB0cmFuc2l0aW9uRHVyYXRpb24oZHVyYXRpb246bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9zZXJ2aWNlOlN1aUFjY29yZGlvblNlcnZpY2U7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aUFjY29yZGlvblBhbmVsKVxuICAgIHByb3RlY3RlZCBfcGFuZWxzOlF1ZXJ5TGlzdDxTdWlBY2NvcmRpb25QYW5lbD47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gQWNjb3JkaW9uIHNlcnZpY2UgaXMgdW5pcXVlIHRvIGVhY2ggc2V0IG9mIHBhbmVscy5cbiAgICAgICAgdGhpcy5fc2VydmljZSA9IG5ldyBTdWlBY2NvcmRpb25TZXJ2aWNlKCk7XG5cbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFuZWxzKCk7XG5cbiAgICAgICAgLy8gUmVjb25uZWN0IHBhbmVscyBhZnRlciB0aGV5IGhhdmUgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5fcGFuZWxzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUGFuZWxzKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVQYW5lbHMoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFuZWxzLmZvckVhY2gocCA9PiB0aGlzLl9zZXJ2aWNlLmFkZFBhbmVsKHApKTtcbiAgICB9XG59XG4iXX0=