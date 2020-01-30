import { Component, Input, HostBinding, ContentChildren, QueryList } from "@angular/core";
import { SuiAccordionPanel } from "./accordion-panel";
import { SuiAccordionService } from "../services/accordion.service";
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class SuiAccordion {
    constructor() {
        // Accordion service is unique to each set of panels.
        this._service = new SuiAccordionService();
        this.hasClasses = true;
    }
    get closeOthers() {
        return this._service.closeOthers;
    }
    set closeOthers(value) {
        this._service.closeOthers = value;
    }
    set transition(transition) {
        this._service.transition = transition;
    }
    set transitionDuration(duration) {
        this._service.transitionDuration = duration;
    }
    ngAfterContentInit() {
        this.updatePanels();
        // Reconnect panels after they have updated.
        this._panels.changes.subscribe(() => this.updatePanels());
    }
    updatePanels() {
        this._panels.forEach(p => this._service.addPanel(p));
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiAccordion, [{
        type: Component,
        args: [{
                selector: "sui-accordion",
                template: `
<ng-content></ng-content>
`,
                styles: [`
/* Fix for general styling issues */
:host {
    display: block;
}

/* Fix for styled border issue */
:host.styled sui-accordion-panel:first-child .title {
    border-top: none
}
`]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9hY2NvcmRpb24vY29tcG9uZW50cy9hY2NvcmRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFtQnBFLE1BQU0sT0FBTyxZQUFZO0lBNkJyQjtRQUNJLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBN0JELElBQ1csV0FBVztRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFDVyxVQUFVLENBQUMsVUFBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUNXLGtCQUFrQixDQUFDLFFBQWU7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7SUFDaEQsQ0FBQztJQWNNLGtCQUFrQjtRQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sWUFBWTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzt3RUE3Q1EsWUFBWTtpREFBWixZQUFZO29DQTBCSixpQkFBaUI7Ozs7Ozs7O1FBeEN0QyxrQkFBWTs7a0RBY0MsWUFBWTtjQWpCeEIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7O0NBRWI7Z0JBQ0csTUFBTSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Q0FVWixDQUFDO2FBQ0Q7O2tCQUVJLFdBQVc7bUJBQUMsVUFBVTs7a0JBQ3RCLFdBQVc7bUJBQUMsaUJBQWlCOztrQkFHN0IsS0FBSzs7a0JBU0wsS0FBSzs7a0JBS0wsS0FBSzs7a0JBT0wsZUFBZTttQkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpQWNjb3JkaW9uUGFuZWwgfSBmcm9tIFwiLi9hY2NvcmRpb24tcGFuZWxcIjtcbmltcG9ydCB7IFN1aUFjY29yZGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYWNjb3JkaW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLWFjY29yZGlvblwiLFxuICAgIHRlbXBsYXRlOiBgXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICAgIHN0eWxlczogW2Bcbi8qIEZpeCBmb3IgZ2VuZXJhbCBzdHlsaW5nIGlzc3VlcyAqL1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBGaXggZm9yIHN0eWxlZCBib3JkZXIgaXNzdWUgKi9cbjpob3N0LnN0eWxlZCBzdWktYWNjb3JkaW9uLXBhbmVsOmZpcnN0LWNoaWxkIC50aXRsZSB7XG4gICAgYm9yZGVyLXRvcDogbm9uZVxufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgU3VpQWNjb3JkaW9uIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY2NvcmRpb25cIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzQ2xhc3Nlczpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGNsb3NlT3RoZXJzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlLmNsb3NlT3RoZXJzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgY2xvc2VPdGhlcnModmFsdWU6Ym9vbGVhbikge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLmNsb3NlT3RoZXJzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHRyYW5zaXRpb24odHJhbnNpdGlvbjpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc2VydmljZS50cmFuc2l0aW9uID0gdHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgdHJhbnNpdGlvbkR1cmF0aW9uKGR1cmF0aW9uOm51bWJlcikge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfc2VydmljZTpTdWlBY2NvcmRpb25TZXJ2aWNlO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdWlBY2NvcmRpb25QYW5lbClcbiAgICBwcm90ZWN0ZWQgX3BhbmVsczpRdWVyeUxpc3Q8U3VpQWNjb3JkaW9uUGFuZWw+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIEFjY29yZGlvbiBzZXJ2aWNlIGlzIHVuaXF1ZSB0byBlYWNoIHNldCBvZiBwYW5lbHMuXG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBuZXcgU3VpQWNjb3JkaW9uU2VydmljZSgpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOnZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhbmVscygpO1xuXG4gICAgICAgIC8vIFJlY29ubmVjdCBwYW5lbHMgYWZ0ZXIgdGhleSBoYXZlIHVwZGF0ZWQuXG4gICAgICAgIHRoaXMuX3BhbmVscy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVBhbmVscygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUGFuZWxzKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3BhbmVscy5mb3JFYWNoKHAgPT4gdGhpcy5fc2VydmljZS5hZGRQYW5lbChwKSk7XG4gICAgfVxufVxuIl19