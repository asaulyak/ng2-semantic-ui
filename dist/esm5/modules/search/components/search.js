import { Component, ViewChild, HostBinding, Input, HostListener, EventEmitter, Output, ElementRef, TemplateRef, Renderer2 } from "@angular/core";
import { Util } from "../../../misc/util/internal";
import { DropdownService, SuiDropdownMenu } from "../../dropdown/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SearchService } from "../services/search.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../behaviors/localization/internal";
function SuiSearch_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} }
function SuiSearch_sui_search_result_4_Template(rf, ctx) { if (rf & 1) {
    var _r213 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "sui-search-result", 7);
    i0.ɵɵlistener("click", function SuiSearch_sui_search_result_4_Template_sui_search_result_click_0_listener($event) { i0.ɵɵrestoreView(_r213); var r_r211 = ctx.$implicit; var ctx_r212 = i0.ɵɵnextContext(); return ctx_r212.select(r_r211); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var r_r211 = ctx.$implicit;
    var ctx_r209 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", r_r211)("query", ctx_r209.query)("formatter", ctx_r209.resultFormatter)("template", ctx_r209.resultTemplate);
} }
function SuiSearch_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r210 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r210.localeValues.noResults.header);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r210.localeValues.noResults.message);
} }
var SuiSearch = /** @class */ (function () {
    function SuiSearch(_element, renderer, _localizationService) {
        var _this = this;
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        this.searchService = new SearchService();
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
        this.hasClasses = true;
        this.tabindex = 0;
        this.hasIcon = true;
        this.retainSelectedResult = true;
        this.searchDelay = 200;
        this.maxResults = 7;
        this.onResultSelected = new EventEmitter();
        this.transition = "scale";
        this.transitionDuration = 200;
    }
    Object.defineProperty(SuiSearch.prototype, "isActive", {
        get: function () {
            return this.dropdownService.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "placeholder", {
        // Gets & sets the placeholder text displayed inside the text input.
        get: function () {
            return this._placeholder || this.localeValues.placeholder;
        },
        set: function (placeholder) {
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "localeValues", {
        get: function () {
            return this._localizationService.override(this._localeValues, this.localeOverrides);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "query", {
        get: function () {
            return this.searchService.query;
        },
        set: function (query) {
            var _this = this;
            this.selectedResult = undefined;
            // Initialise a delayed search.
            this.searchService.updateQueryDelayed(query, function () {
                // Set the results open state depending on whether a query has been entered.
                return _this.dropdownService.setOpenState(_this.searchService.query.length > 0);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "options", {
        set: function (options) {
            if (options) {
                this.searchService.options = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsFilter", {
        set: function (filter) {
            if (filter) {
                this.searchService.optionsFilter = filter;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsLookup", {
        set: function (lookupFn) {
            this.searchService.optionsLookup = lookupFn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "optionsField", {
        set: function (field) {
            this.searchService.optionsField = field;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "resultFormatter", {
        get: function () {
            var _this = this;
            if (this._resultFormatter) {
                return this._resultFormatter;
            }
            else if (this.searchService.optionsLookup) {
                return function (r) { return _this.readValue(r); };
            }
            else {
                return function (r, q) { return _this.searchService.highlightMatches(_this.readValue(r), q); };
            }
        },
        set: function (formatter) {
            this._resultFormatter = formatter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "searchDelay", {
        set: function (delay) {
            this.searchService.searchDelay = delay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "isSearching", {
        get: function () {
            return this.searchService.isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SuiSearch.prototype, "results", {
        get: function () {
            return this.searchService.results.slice(0, this.maxResults);
        },
        enumerable: true,
        configurable: true
    });
    SuiSearch.prototype.ngAfterViewInit = function () {
        this._menu.service = this.dropdownService;
    };
    SuiSearch.prototype.onLocaleUpdate = function () {
        this._localeValues = this._localizationService.get().search;
    };
    // Selects a result.
    SuiSearch.prototype.select = function (result) {
        this.onResultSelected.emit(result);
        this.dropdownService.setOpenState(false);
        if (this.retainSelectedResult) {
            this.selectedResult = result;
            this.searchService.updateQuery(this.readValue(result));
        }
        else {
            this.searchService.updateQuery("");
        }
    };
    SuiSearch.prototype.onClick = function (e) {
        this.open();
    };
    SuiSearch.prototype.onFocusIn = function () {
        if (!this.dropdownService.isAnimating) {
            this.open();
        }
    };
    SuiSearch.prototype.open = function () {
        if (this.searchService.query.length > 0) {
            // Only open on click when there is a query entered.
            this.dropdownService.setOpenState(true);
        }
    };
    SuiSearch.prototype.onFocusOut = function (e) {
        console.log(e);
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
        }
    };
    // Reads the specified field from an item.
    SuiSearch.prototype.readValue = function (object) {
        return Util.Object.readValue(object, this.searchService.optionsField);
    };
    SuiSearch.ɵfac = function SuiSearch_Factory(t) { return new (t || SuiSearch)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.SuiLocalizationService)); };
    SuiSearch.ɵcmp = i0.ɵɵdefineComponent({ type: SuiSearch, selectors: [["sui-search"]], viewQuery: function SuiSearch_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(SuiDropdownMenu, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._menu = _t.first);
        } }, hostVars: 9, hostBindings: function SuiSearch_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("focusin", function SuiSearch_focusin_HostBindingHandler($event) { return ctx.onFocusIn(); })("focusout", function SuiSearch_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); });
        } if (rf & 2) {
            i0.ɵɵattribute("tabindex", ctx.tabindex);
            i0.ɵɵclassProp("ui", ctx.hasClasses)("search", ctx.hasClasses)("active", ctx.isActive)("loading", ctx.isSearching);
        } }, inputs: { hasIcon: "hasIcon", placeholder: "placeholder", options: "options", optionsFilter: "optionsFilter", optionsLookup: "optionsLookup", optionsField: "optionsField", resultFormatter: "resultFormatter", resultTemplate: "resultTemplate", retainSelectedResult: "retainSelectedResult", searchDelay: "searchDelay", maxResults: "maxResults", transition: "transition", transitionDuration: "transitionDuration" }, outputs: { onResultSelected: "resultSelected" }, decls: 6, vars: 9, consts: [[1, "ui", "input", 3, "click"], ["type", "text", "autocomplete", "off", 1, "prompt", 3, "ngModel", "ngModelChange"], ["class", "search icon", 4, "ngIf"], ["suiDropdownMenu", "", "menuSelectedItemClass", "active", 1, "results", 3, "menuTransition", "menuTransitionDuration"], ["class", "item", 3, "value", "query", "formatter", "template", "click", 4, "ngFor", "ngForOf"], ["class", "message empty", 4, "ngIf"], [1, "search", "icon"], [1, "item", 3, "value", "query", "formatter", "template", "click"], [1, "message", "empty"], [1, "header"], [1, "description"]], template: function SuiSearch_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function SuiSearch_Template_div_click_0_listener($event) { return ctx.onClick($event); });
            i0.ɵɵelementStart(1, "input", 1);
            i0.ɵɵlistener("ngModelChange", function SuiSearch_Template_input_ngModelChange_1_listener($event) { return ctx.query = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, SuiSearch_i_2_Template, 1, 0, "i", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, SuiSearch_sui_search_result_4_Template, 1, 4, "sui-search-result", 4);
            i0.ɵɵtemplate(5, SuiSearch_div_5_Template, 5, 2, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("icon", ctx.hasIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.query);
            i0.ɵɵattribute("placeholder", ctx.placeholder);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.hasIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.results);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.results.length == 0);
        } }, styles: ["[_nghost-%COMP%] {\n    display: inline-block;\n    outline: 0;\n}\n\n\n.results[_ngcontent-%COMP%] {\n    margin-bottom: .5em;\n}"] });
    return SuiSearch;
}());
export { SuiSearch };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSearch, [{
        type: Component,
        args: [{
                selector: "sui-search",
                template: "\n<div class=\"ui input\" [class.icon]=\"hasIcon\" (click)=\"onClick($event)\">\n    <input class=\"prompt\" type=\"text\" [attr.placeholder]=\"placeholder\" autocomplete=\"off\" [(ngModel)]=\"query\">\n    <i *ngIf=\"hasIcon\" class=\"search icon\"></i>\n</div>\n<div class=\"results\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     menuSelectedItemClass=\"active\">\n\n    <sui-search-result *ngFor=\"let r of results\"\n                       class=\"item\"\n                       [value]=\"r\"\n                       [query]=\"query\"\n                       [formatter]=\"resultFormatter\"\n                       [template]=\"resultTemplate\"\n                       (click)=\"select(r)\"></sui-search-result>\n\n    <div *ngIf=\"results.length == 0\" class=\"message empty\">\n        <div class=\"header\">{{ localeValues.noResults.header }}</div>\n        <div class=\"description\">{{ localeValues.noResults.message }}</div>\n    </div>\n</div>\n",
                styles: ["\n/* Ensures results div has margin. */\n:host {\n    display: inline-block;\n    outline: 0;\n}\n\n/* Fixes positioning when results are pushed above the search. */\n.results {\n    margin-bottom: .5em;\n}\n"]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.SuiLocalizationService }]; }, { _menu: [{
            type: ViewChild,
            args: [SuiDropdownMenu, { static: true }]
        }], hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.search"]
        }], tabindex: [{
            type: HostBinding,
            args: ["attr.tabindex"]
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }], hasIcon: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], options: [{
            type: Input
        }], optionsFilter: [{
            type: Input
        }], optionsLookup: [{
            type: Input
        }], optionsField: [{
            type: Input
        }], resultFormatter: [{
            type: Input
        }], resultTemplate: [{
            type: Input
        }], retainSelectedResult: [{
            type: Input
        }], searchDelay: [{
            type: Input
        }], isSearching: [{
            type: HostBinding,
            args: ["class.loading"]
        }], maxResults: [{
            type: Input
        }], onResultSelected: [{
            type: Output,
            args: ["resultSelected"]
        }], transition: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], onFocusIn: [{
            type: HostListener,
            args: ["focusin"]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9zZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBaUIsWUFBWSxFQUNyRSxZQUFZLEVBQUUsTUFBTSxFQUFhLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUN0RSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFvQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUF5QyxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztJQVl2RCx1QkFBMkM7Ozs7SUFRM0MsNENBTTJEO0lBQXhDLDhPQUFtQjtJQUFDLGlCQUFvQjs7OztJQUp4Qyw4QkFBVyx5QkFBQSx1Q0FBQSxxQ0FBQTs7O0lBTTlCLDhCQUNJO0lBQUEsOEJBQW9CO0lBQUEsWUFBbUM7SUFBQSxpQkFBTTtJQUM3RCwrQkFBeUI7SUFBQSxZQUFvQztJQUFBLGlCQUFNO0lBQ3ZFLGlCQUFNOzs7SUFGa0IsZUFBbUM7SUFBbkMsNERBQW1DO0lBQzlCLGVBQW9DO0lBQXBDLDZEQUFvQzs7QUF2QnJFO0lBOEtJLG1CQUFvQixRQUFtQixFQUFFLFFBQWtCLEVBQVUsb0JBQTJDO1FBQWhILGlCQWtCQztRQWxCbUIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE4Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBQzVHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFB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O2tCQUd2QixLQUFLOztrQkFHTCxLQUFLOztrQkFnREwsWUFBWTttQkFBQyxTQUFTOztrQkFjdEIsWUFBWTttQkFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgVmlld0NoaWxkLCBIb3N0QmluZGluZywgSW5wdXQsIEFmdGVyVmlld0luaXQsIEhvc3RMaXN0ZW5lcixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVdGlsLCBJVGVtcGxhdGVSZWZDb250ZXh0LCBJRm9jdXNFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9taXNjL3V0aWwvaW50ZXJuYWxcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBJU2VhcmNoTG9jYWxlVmFsdWVzLCBSZWN1cnNpdmVQYXJ0aWFsLCBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvb2t1cEZuLCBGaWx0ZXJGbiB9IGZyb20gXCIuLi9oZWxwZXJzL2xvb2t1cC1mblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bHRDb250ZXh0PFQ+IGV4dGVuZHMgSVRlbXBsYXRlUmVmQ29udGV4dDxUPiB7XG4gICAgcXVlcnk6c3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VhcmNoXCIsXG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ1aSBpbnB1dFwiIFtjbGFzcy5pY29uXT1cImhhc0ljb25cIiAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgPGlucHV0IGNsYXNzPVwicHJvbXB0XCIgdHlwZT1cInRleHRcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFsobmdNb2RlbCldPVwicXVlcnlcIj5cbiAgICA8aSAqbmdJZj1cImhhc0ljb25cIiBjbGFzcz1cInNlYXJjaCBpY29uXCI+PC9pPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicmVzdWx0c1wiXG4gICAgIHN1aURyb3Bkb3duTWVudVxuICAgICBbbWVudVRyYW5zaXRpb25dPVwidHJhbnNpdGlvblwiXG4gICAgIFttZW51VHJhbnNpdGlvbkR1cmF0aW9uXT1cInRyYW5zaXRpb25EdXJhdGlvblwiXG4gICAgIG1lbnVTZWxlY3RlZEl0ZW1DbGFzcz1cImFjdGl2ZVwiPlxuXG4gICAgPHN1aS1zZWFyY2gtcmVzdWx0ICpuZ0Zvcj1cImxldCByIG9mIHJlc3VsdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiclwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXR0ZXJdPVwicmVzdWx0Rm9ybWF0dGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cInJlc3VsdFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdChyKVwiPjwvc3VpLXNlYXJjaC1yZXN1bHQ+XG5cbiAgICA8ZGl2ICpuZ0lmPVwicmVzdWx0cy5sZW5ndGggPT0gMFwiIGNsYXNzPVwibWVzc2FnZSBlbXB0eVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0cy5oZWFkZXIgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0cy5tZXNzYWdlIH19PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gICAgc3R5bGVzOiBbYFxuLyogRW5zdXJlcyByZXN1bHRzIGRpdiBoYXMgbWFyZ2luLiAqL1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdXRsaW5lOiAwO1xufVxuXG4vKiBGaXhlcyBwb3NpdGlvbmluZyB3aGVuIHJlc3VsdHMgYXJlIHB1c2hlZCBhYm92ZSB0aGUgc2VhcmNoLiAqL1xuLnJlc3VsdHMge1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBTdWlTZWFyY2g8VD4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBwdWJsaWMgZHJvcGRvd25TZXJ2aWNlOkRyb3Bkb3duU2VydmljZTtcbiAgICBwdWJsaWMgc2VhcmNoU2VydmljZTpTZWFyY2hTZXJ2aWNlPFQsIFQ+O1xuXG4gICAgQFZpZXdDaGlsZChTdWlEcm9wZG93bk1lbnUsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfbWVudTpTdWlEcm9wZG93bk1lbnU7XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgLy8gRG9pbmcgaXQgb24gdGhlIGhvc3QgZW5hYmxlcyB1c2UgaW4gbWVudXMgZXRjLlxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLnVpXCIpXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3Muc2VhcmNoXCIpXG4gICAgcHVibGljIHJlYWRvbmx5IGhhc0NsYXNzZXM6Ym9vbGVhbjtcblxuICAgIEBIb3N0QmluZGluZyhcImF0dHIudGFiaW5kZXhcIilcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFiaW5kZXg6bnVtYmVyO1xuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MuYWN0aXZlXCIpXG4gICAgcHVibGljIGdldCBpc0FjdGl2ZSgpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuO1xuICAgIH1cblxuICAgIC8vIFNldHMgd2hldGhlciB0aGUgc2VhcmNoIGVsZW1lbnQgaGFzIGEgdmlzaWJsZSBzZWFyY2ggaWNvbi5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBoYXNJY29uOmJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICAvLyBHZXRzICYgc2V0cyB0aGUgcGxhY2Vob2xkZXIgdGV4dCBkaXNwbGF5ZWQgaW5zaWRlIHRoZSB0ZXh0IGlucHV0LlxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJU2VhcmNoTG9jYWxlVmFsdWVzO1xuXG4gICAgcHVibGljIGxvY2FsZU92ZXJyaWRlczpSZWN1cnNpdmVQYXJ0aWFsPElTZWFyY2hMb2NhbGVWYWx1ZXM+O1xuXG4gICAgcHVibGljIGdldCBsb2NhbGVWYWx1ZXMoKTpJU2VhcmNoTG9jYWxlVmFsdWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsaXphdGlvblNlcnZpY2Uub3ZlcnJpZGU8XCJzZWFyY2hcIj4odGhpcy5fbG9jYWxlVmFsdWVzLCB0aGlzLmxvY2FsZU92ZXJyaWRlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UucXVlcnk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBxdWVyeShxdWVyeTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBhIGRlbGF5ZWQgc2VhcmNoLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UudXBkYXRlUXVlcnlEZWxheWVkKHF1ZXJ5LCAoKSA9PlxuICAgICAgICAgICAgLy8gU2V0IHRoZSByZXN1bHRzIG9wZW4gc3RhdGUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBxdWVyeSBoYXMgYmVlbiBlbnRlcmVkLlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeS5sZW5ndGggPiAwKSk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zRmlsdGVyKGZpbHRlcjpGaWx0ZXJGbjxUPiB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpbHRlciA9IGZpbHRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25zTG9va3VwKGxvb2t1cEZuOkxvb2t1cEZuPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwID0gbG9va3VwRm47XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWVsZChmaWVsZDpzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCA9IGZpZWxkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc3VsdEZvcm1hdHRlcj86KHI6VCwgcTpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgcmVzdWx0Rm9ybWF0dGVyKCk6KHJlc3VsdDpULCBxdWVyeTpzdHJpbmcpID0+IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLl9yZXN1bHRGb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXN1bHRGb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHJldHVybiByID0+IHRoaXMucmVhZFZhbHVlKHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChyLCBxKSA9PiB0aGlzLnNlYXJjaFNlcnZpY2UuaGlnaGxpZ2h0TWF0Y2hlcyh0aGlzLnJlYWRWYWx1ZShyKSwgcSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgcmVzdWx0Rm9ybWF0dGVyKGZvcm1hdHRlcjoocmVzdWx0OlQsIHF1ZXJ5OnN0cmluZykgPT4gc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdEZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXN1bHRUZW1wbGF0ZTpUZW1wbGF0ZVJlZjxJUmVzdWx0Q29udGV4dDxUPj47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyByZXRhaW5TZWxlY3RlZFJlc3VsdDpib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IHNlYXJjaERlbGF5KGRlbGF5Om51bWJlcikge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uuc2VhcmNoRGVsYXkgPSBkZWxheTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5sb2FkaW5nXCIpXG4gICAgcHVibGljIGdldCBpc1NlYXJjaGluZygpOmJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hTZXJ2aWNlLmlzU2VhcmNoaW5nO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFJlc3VsdHM6bnVtYmVyO1xuXG4gICAgcHVibGljIGdldCByZXN1bHRzKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzLnNsaWNlKDAsIHRoaXMubWF4UmVzdWx0cyk7XG4gICAgfVxuXG4gICAgLy8gU3RvcmVzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcmVzdWx0LlxuICAgIHB1YmxpYyBzZWxlY3RlZFJlc3VsdD86VDtcblxuICAgIC8vIEVtaXRzIHdoZW5ldmVyIGEgbmV3IHJlc3VsdCBpcyBzZWxlY3RlZC5cbiAgICBAT3V0cHV0KFwicmVzdWx0U2VsZWN0ZWRcIilcbiAgICBwdWJsaWMgb25SZXN1bHRTZWxlY3RlZDpFdmVudEVtaXR0ZXI8VD47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHRyYW5zaXRpb25EdXJhdGlvbjpudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OkVsZW1lbnRSZWYsIHJlbmRlcmVyOlJlbmRlcmVyMiwgcHJpdmF0ZSBfbG9jYWxpemF0aW9uU2VydmljZTpTdWlMb2NhbGl6YXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gbmV3IERyb3Bkb3duU2VydmljZSgpO1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZTxULCBUPigpO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuXG4gICAgICAgIHRoaXMuaGFzQ2xhc3NlcyA9IHRydWU7XG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xuICAgICAgICB0aGlzLnJldGFpblNlbGVjdGVkUmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hEZWxheSA9IDIwMDtcbiAgICAgICAgdGhpcy5tYXhSZXN1bHRzID0gNztcblxuICAgICAgICB0aGlzLm9uUmVzdWx0U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gXCJzY2FsZVwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX21lbnUuc2VydmljZSA9IHRoaXMuZHJvcGRvd25TZXJ2aWNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5zZWFyY2g7XG4gICAgfVxuXG4gICAgLy8gU2VsZWN0cyBhIHJlc3VsdC5cbiAgICBwdWJsaWMgc2VsZWN0KHJlc3VsdDpUKTp2b2lkIHtcbiAgICAgICAgdGhpcy5vblJlc3VsdFNlbGVjdGVkLmVtaXQocmVzdWx0KTtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICBpZiAodGhpcy5yZXRhaW5TZWxlY3RlZFJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeSh0aGlzLnJlYWRWYWx1ZShyZXN1bHQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKGU6TW91c2VFdmVudCk6dm9pZCB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c2luXCIpXG4gICAgcHVibGljIG9uRm9jdXNJbigpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb3BlbigpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIE9ubHkgb3BlbiBvbiBjbGljayB3aGVuIHRoZXJlIGlzIGEgcXVlcnkgZW50ZXJlZC5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJmb2N1c291dFwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uRm9jdXNPdXQoZTpJRm9jdXNFdmVudCk6dm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVhZHMgdGhlIHNwZWNpZmllZCBmaWVsZCBmcm9tIGFuIGl0ZW0uXG4gICAgcHVibGljIHJlYWRWYWx1ZShvYmplY3Q6VCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBzdHJpbmc+KG9iamVjdCwgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNGaWVsZCk7XG4gICAgfVxufVxuIl19