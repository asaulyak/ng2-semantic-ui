import { __extends } from "tslib";
import { Component, ViewContainerRef, ViewChild, Output, EventEmitter, ElementRef, Directive, Input } from "@angular/core";
import { customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiSelectBase } from "../classes/select-base";
import * as i0 from "@angular/core";
import * as i1 from "../../../behaviors/localization/internal";
import * as i2 from "../directives/select-search";
import * as i3 from "@angular/common";
import * as i4 from "../../dropdown/directives/dropdown-menu";
var _c0 = ["optionTemplateSibling"];
function SuiSelect_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r230 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("filtered", ctx_r230.query);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r230.placeholder);
} }
function SuiSelect_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 9);
} if (rf & 2) {
    var ctx_r232 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r232.configuredFormatter(ctx_r232.selectedOption), i0.ɵɵsanitizeHtml);
} }
function SuiSelect_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r233 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r233.localeValues.noResultsMessage, " ");
} }
var _c1 = ["*"];
var SuiSelect = /** @class */ (function (_super) {
    __extends(SuiSelect, _super);
    function SuiSelect(element, localizationService) {
        var _this = _super.call(this, element, localizationService) || this;
        _this.selectedOptionChange = new EventEmitter();
        return _this;
    }
    Object.defineProperty(SuiSelect.prototype, "placeholder", {
        get: function () {
            return this._placeholder || this.localeValues.single.placeholder;
        },
        set: function (placeholder) {
            this._placeholder = placeholder;
        },
        enumerable: true,
        configurable: true
    });
    SuiSelect.prototype.optionsUpdateHook = function () {
        if (!this._writtenOption && this.selectedOption) {
            // We need to check the option still exists.
            this.writeValue(this.valueGetter(this.selectedOption));
        }
        if (this._writtenOption && this.searchService.options.length > 0) {
            // If there was an value written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOption = this.findOption(this.searchService.options, this._writtenOption);
            if (this.selectedOption) {
                this._writtenOption = undefined;
                this.drawSelectedOption();
            }
        }
    };
    SuiSelect.prototype.queryUpdateHook = function () {
        // When the query is updated, we just abandon the current selection.
        this.selectedOption = undefined;
    };
    SuiSelect.prototype.selectOption = function (option) {
        // Choose and emit the selected option.
        this.selectedOption = option;
        this.selectedOptionChange.emit(this.valueGetter(option));
        this.dropdownService.setOpenState(false);
        this.resetQuery();
        this.drawSelectedOption();
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
    };
    SuiSelect.prototype.writeValue = function (value) {
        var _this = this;
        if (value != undefined) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel value to an option.
                this.selectedOption = this.findOption(this.searchService.options, value);
                this.drawSelectedOption();
            }
            if (this.selectedOption == undefined) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial value.
                    this.searchService
                        .initialLookup(value)
                        .then(function (i) {
                        _this.selectedOption = i;
                        _this.drawSelectedOption();
                    });
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOption = value;
                }
            }
        }
        else {
            this.selectedOption = undefined;
            this.drawSelectedOption();
        }
    };
    SuiSelect.prototype.initialiseRenderedOption = function (option) {
        _super.prototype.initialiseRenderedOption.call(this, option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = option.value === this.selectedOption;
    };
    SuiSelect.prototype.drawSelectedOption = function () {
        // Updates the active class on the newly selected option.
        if (this._renderedOptions) {
            this.onAvailableOptionsRendered();
        }
        if (this.selectedOption != undefined && this.optionTemplate) {
            this.drawTemplate(this._optionTemplateSibling, this.selectedOption);
        }
    };
    SuiSelect.ɵfac = function SuiSelect_Factory(t) { return new (t || SuiSelect)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.SuiLocalizationService)); };
    SuiSelect.ɵcmp = i0.ɵɵdefineComponent({ type: SuiSelect, selectors: [["sui-select"]], viewQuery: function SuiSelect_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._optionTemplateSibling = _t.first);
        } }, inputs: { placeholder: "placeholder" }, outputs: { selectedOptionChange: "selectedOptionChange" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 10, vars: 12, consts: [["suiSelectSearch", "", "type", "text", 3, "hidden"], ["class", "default text", 3, "filtered", 4, "ngIf"], [1, "text"], ["optionTemplateSibling", ""], [3, "innerHTML", 4, "ngIf"], [3, "click"], ["suiDropdownMenu", "", 1, "menu", 3, "menuTransition", "menuTransitionDuration", "menuAutoSelectFirst"], ["class", "message", 4, "ngIf"], [1, "default", "text"], [3, "innerHTML"], [1, "message"]], template: function SuiSelect_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "input", 0);
            i0.ɵɵtemplate(1, SuiSelect_div_1_Template, 2, 3, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "span", null, 3);
            i0.ɵɵtemplate(5, SuiSelect_span_5_Template, 1, 1, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "i", 5);
            i0.ɵɵlistener("click", function SuiSelect_Template_i_click_6_listener($event) { return ctx.onCaretClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵprojection(8);
            i0.ɵɵtemplate(9, SuiSelect_div_9_Template, 2, 1, "div", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("hidden", !ctx.isSearchable || ctx.isSearchExternal);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.selectedOption == undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("filtered", ctx.query || ctx.selectedOption == undefined);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx.optionTemplate && ctx.selectedOption != undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("", ctx.icon, " icon");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration)("menuAutoSelectFirst", ctx.isSearchable);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isSearchable && ctx.availableOptions.length === 0);
        } }, directives: [i2.SuiSelectSearch, i3.NgIf, i4.SuiDropdownMenu], encapsulation: 2 });
    return SuiSelect;
}(SuiSelectBase));
export { SuiSelect };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSelect, [{
        type: Component,
        args: [{
                selector: "sui-select",
                template: "\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Placeholder text -->\n<div *ngIf=\"selectedOption == undefined\" class=\"default text\" [class.filtered]=\"query\">{{ placeholder }}</div>\n<!-- Selected item -->\n<div class=\"text\" [class.filtered]=\"query || selectedOption == undefined\">\n    <span #optionTemplateSibling></span>\n    <span *ngIf=\"!optionTemplate && selectedOption != undefined\" [innerHTML]=\"configuredFormatter(selectedOption)\"></span>\n</div>\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"isSearchable\">\n\n    <ng-content></ng-content>\n    <div *ngIf=\"isSearchable && availableOptions.length === 0\" class=\"message\">\n        {{ localeValues.noResultsMessage }}\n    </div>\n</div>\n"
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.SuiLocalizationService }]; }, { _optionTemplateSibling: [{
            type: ViewChild,
            args: ["optionTemplateSibling", { read: ViewContainerRef, static: true }]
        }], selectedOptionChange: [{
            type: Output
        }], placeholder: [{
            type: Input
        }] }); })();
// Value accessor directive for the select to support ngModel.
var SuiSelectValueAccessor = /** @class */ (function (_super) {
    __extends(SuiSelectValueAccessor, _super);
    function SuiSelectValueAccessor(host) {
        return _super.call(this, host) || this;
    }
    SuiSelectValueAccessor.ɵfac = function SuiSelectValueAccessor_Factory(t) { return new (t || SuiSelectValueAccessor)(i0.ɵɵdirectiveInject(SuiSelect)); };
    SuiSelectValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiSelectValueAccessor, selectors: [["sui-select"]], hostBindings: function SuiSelectValueAccessor_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵlistener("selectedOptionChange", function SuiSelectValueAccessor_selectedOptionChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiSelectValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
        } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiSelectValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
    return SuiSelectValueAccessor;
}(CustomValueAccessor));
export { SuiSelectValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSelectValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-select",
                host: {
                    "(selectedOptionChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiSelectValueAccessor)]
            }]
    }], function () { return [{ type: SuiSelect }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUE0QiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7SUFZdkQsOEJBQXVGO0lBQUEsWUFBaUI7SUFBQSxpQkFBTTs7O0lBQWhELDBDQUF3QjtJQUFDLGVBQWlCO0lBQWpCLDBDQUFpQjs7O0lBSXBHLDBCQUFzSDs7O0lBQXpELG9HQUFpRDs7O0lBWTlHLCtCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFNOzs7SUFERixlQUNKO0lBREksdUVBQ0o7OztBQTNCSjtJQStCcUMsNkJBQW1CO0lBc0JwRCxtQkFBWSxPQUFrQixFQUFFLG1CQUEwQztRQUExRSxZQUNJLGtCQUFNLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxTQUd0QztRQURHLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDOztJQUN0RCxDQUFDO0lBYkQsc0JBQ1csa0NBQVc7YUFEdEI7WUFFSSxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JFLENBQUM7YUFFRCxVQUF1QixXQUFrQjtZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNwQyxDQUFDOzs7T0FK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LGtCQUFNLElBQUksQ0FBQztJQUNmLENBQUM7Z0dBSFEsc0JBQXNCLHVCQUNkLFNBQVM7K0RBRGpCLHNCQUFzQjs7OENBRnBCLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQ0EzSm5FO0NBaUtDLEFBWkQsQ0FRa0QsbUJBQW1CLEdBSXBFO1NBSlksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FSbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixJQUFJLEVBQUU7b0JBQ0Ysd0JBQXdCLEVBQUUsa0JBQWtCO29CQUM1QyxXQUFXLEVBQUUsYUFBYTtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUNsRTtzQ0FFb0IsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJQ3VzdG9tVmFsdWVBY2Nlc3Nvckhvc3QsIGN1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5LCBDdXN0b21WYWx1ZUFjY2Vzc29yIH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RCYXNlIH0gZnJvbSBcIi4uL2NsYXNzZXMvc2VsZWN0LWJhc2VcIjtcbmltcG9ydCB7IFN1aVNlbGVjdE9wdGlvbiB9IGZyb20gXCIuL3NlbGVjdC1vcHRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3VpLXNlbGVjdFwiLFxuICAgIHRlbXBsYXRlOiBgXG48IS0tIFF1ZXJ5IGlucHV0IC0tPlxuPGlucHV0IHN1aVNlbGVjdFNlYXJjaFxuICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICBbaGlkZGVuXT1cIiFpc1NlYXJjaGFibGUgfHwgaXNTZWFyY2hFeHRlcm5hbFwiPlxuXG48IS0tIFBsYWNlaG9sZGVyIHRleHQgLS0+XG48ZGl2ICpuZ0lmPVwic2VsZWN0ZWRPcHRpb24gPT0gdW5kZWZpbmVkXCIgY2xhc3M9XCJkZWZhdWx0IHRleHRcIiBbY2xhc3MuZmlsdGVyZWRdPVwicXVlcnlcIj57eyBwbGFjZWhvbGRlciB9fTwvZGl2PlxuPCEtLSBTZWxlY3RlZCBpdGVtIC0tPlxuPGRpdiBjbGFzcz1cInRleHRcIiBbY2xhc3MuZmlsdGVyZWRdPVwicXVlcnkgfHwgc2VsZWN0ZWRPcHRpb24gPT0gdW5kZWZpbmVkXCI+XG4gICAgPHNwYW4gI29wdGlvblRlbXBsYXRlU2libGluZz48L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCIhb3B0aW9uVGVtcGxhdGUgJiYgc2VsZWN0ZWRPcHRpb24gIT0gdW5kZWZpbmVkXCIgW2lubmVySFRNTF09XCJjb25maWd1cmVkRm9ybWF0dGVyKHNlbGVjdGVkT3B0aW9uKVwiPjwvc3Bhbj5cbjwvZGl2PlxuPCEtLSBEcm9wZG93biBpY29uIC0tPlxuPGkgY2xhc3M9XCJ7eyBpY29uIH19IGljb25cIiAoY2xpY2spPVwib25DYXJldENsaWNrKCRldmVudClcIj48L2k+XG48IS0tIFNlbGVjdCBkcm9wZG93biBtZW51IC0tPlxuPGRpdiBjbGFzcz1cIm1lbnVcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBbbWVudUF1dG9TZWxlY3RGaXJzdF09XCJpc1NlYXJjaGFibGVcIj5cblxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8ZGl2ICpuZ0lmPVwiaXNTZWFyY2hhYmxlICYmIGF2YWlsYWJsZU9wdGlvbnMubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgIHt7IGxvY2FsZVZhbHVlcy5ub1Jlc3VsdHNNZXNzYWdlIH19XG4gICAgPC9kaXY+XG48L2Rpdj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgU3VpU2VsZWN0PFQsIFU+IGV4dGVuZHMgU3VpU2VsZWN0QmFzZTxULCBVPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVPiB7XG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uPzpUO1xuICAgIC8vIFN0b3JlcyB0aGUgdmFsdWUgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSBpdCBjYW4gYmUgbWF0Y2hlZCB0byBhbiBvcHRpb24gZnJvbSBgb3B0aW9uc2AuXG4gICAgcHJpdmF0ZSBfd3JpdHRlbk9wdGlvbj86VTtcblxuICAgIEBWaWV3Q2hpbGQoXCJvcHRpb25UZW1wbGF0ZVNpYmxpbmdcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgICBwcml2YXRlIF9vcHRpb25UZW1wbGF0ZVNpYmxpbmc6Vmlld0NvbnRhaW5lclJlZjtcblxuICAgIEBPdXRwdXQoKVxuICAgIHB1YmxpYyBzZWxlY3RlZE9wdGlvbkNoYW5nZTpFdmVudEVtaXR0ZXI8VT47XG5cbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlcjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIgfHwgdGhpcy5sb2NhbGVWYWx1ZXMuc2luZ2xlLnBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDpFbGVtZW50UmVmLCBsb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbG9jYWxpemF0aW9uU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VT4oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9uICYmIHRoaXMuc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgdGhlIG9wdGlvbiBzdGlsbCBleGlzdHMuXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy52YWx1ZUdldHRlcih0aGlzLnNlbGVjdGVkT3B0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fd3JpdHRlbk9wdGlvbiAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYW4gdmFsdWUgd3JpdHRlbiBieSBuZ01vZGVsIGJlZm9yZSB0aGUgb3B0aW9ucyBoYWQgYmVlbiBsb2FkZWQsIHRoaXMgcnVucyB0byBmaXggaXQuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB0aGlzLl93cml0dGVuT3B0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHF1ZXJ5VXBkYXRlSG9vaygpOnZvaWQge1xuICAgICAgICAvLyBXaGVuIHRoZSBxdWVyeSBpcyB1cGRhdGVkLCB3ZSBqdXN0IGFiYW5kb24gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb24ob3B0aW9uOlQpOnZvaWQge1xuICAgICAgICAvLyBDaG9vc2UgYW5kIGVtaXQgdGhlIHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbkNoYW5nZS5lbWl0KHRoaXMudmFsdWVHZXR0ZXIob3B0aW9uKSk7XG5cbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLnJlc2V0UXVlcnkoKTtcblxuICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FsbHkgcmVmb2N1cyB0aGUgc2VhcmNoIGlucHV0IGZvciBiZXR0ZXIga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eS5cbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOlUpOnZvaWQge1xuICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb25zIGhhdmUgYWxyZWFkeSBiZWVuIGxvYWRlZCwgd2UgY2FuIGltbWVkaWF0ZWx5IG1hdGNoIHRoZSBuZ01vZGVsIHZhbHVlIHRvIGFuIG9wdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVGaWVsZCAmJiB0aGlzLnNlYXJjaFNlcnZpY2UuaGFzSXRlbUxvb2t1cCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2VhcmNoIHNlcnZpY2UgaGFzIGEgc2VsZWN0ZWQgbG9va3VwIGZ1bmN0aW9uLCBtYWtlIHVzZSBvZiB0aGF0IHRvIGxvYWQgdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluaXRpYWxMb29rdXAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTZWxlY3RlZE9wdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjYWNoZSB0aGUgd3JpdHRlbiB2YWx1ZSBmb3Igd2hlbiBvcHRpb25zIGFyZSBzZXQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyaXR0ZW5PcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5kcmF3U2VsZWN0ZWRPcHRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uOlN1aVNlbGVjdE9wdGlvbjxUPik6dm9pZCB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb24pO1xuXG4gICAgICAgIC8vIEJvbGRlbnMgdGhlIGl0ZW0gc28gaXQgYXBwZWFycyBzZWxlY3RlZCBpbiB0aGUgZHJvcGRvd24uXG4gICAgICAgIG9wdGlvbi5pc0FjdGl2ZSA9IG9wdGlvbi52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZE9wdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdTZWxlY3RlZE9wdGlvbigpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGVzIHRoZSBhY3RpdmUgY2xhc3Mgb24gdGhlIG5ld2x5IHNlbGVjdGVkIG9wdGlvbi5cbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlcmVkT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb24gIT0gdW5kZWZpbmVkICYmIHRoaXMub3B0aW9uVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RlbXBsYXRlKHRoaXMuX29wdGlvblRlbXBsYXRlU2libGluZywgdGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbkNoYW5nZSlcIjogXCJvbkNoYW5nZSgkZXZlbnQpXCIsXG4gICAgICAgIFwiKHRvdWNoZWQpXCI6IFwib25Ub3VjaGVkKClcIlxuICAgIH0sXG4gICAgcHJvdmlkZXJzOiBbY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnkoU3VpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aVNlbGVjdFZhbHVlQWNjZXNzb3I8VCwgVT4gZXh0ZW5kcyBDdXN0b21WYWx1ZUFjY2Vzc29yPFUsIFN1aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpU2VsZWN0PFQsIFU+KSB7XG4gICAgICAgIHN1cGVyKGhvc3QpO1xuICAgIH1cbn1cbiJdfQ==