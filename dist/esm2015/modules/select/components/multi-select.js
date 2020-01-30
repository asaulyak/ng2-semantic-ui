import { Component, HostBinding, ElementRef, EventEmitter, Output, Input, Directive } from "@angular/core";
import { KeyCode, customValueAccessorFactory, CustomValueAccessor } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiSelectBase } from "../classes/select-base";
import * as i0 from "@angular/core";
import * as i1 from "../../../behaviors/localization/internal";
import * as i2 from "@angular/common";
import * as i3 from "../directives/select-search";
import * as i4 from "../../dropdown/directives/dropdown-menu";
import * as i5 from "./multi-select-label";
function SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "sui-multi-select-label", 8);
    i0.ɵɵlistener("deselected", function SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template_sui_multi_select_label_deselected_0_listener($event) { i0.ɵɵrestoreView(_r110); const ctx_r109 = i0.ɵɵnextContext(2); return ctx_r109.deselectOption($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selected_r108 = ctx.$implicit;
    const ctx_r107 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", selected_r108)("query", ctx_r107.query)("formatter", ctx_r107.configuredFormatter)("template", ctx_r107.optionTemplate);
} }
function SuiMultiSelect_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template, 1, 4, "sui-multi-select-label", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r102 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r102.selectedOptions);
} }
function SuiMultiSelect_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r103 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r103.placeholder);
} }
function SuiMultiSelect_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r105 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r105.selectedMessage, "");
} }
function SuiMultiSelect_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r111 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r111.localeValues.noResultsMessage);
} }
function SuiMultiSelect_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r112 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r112.maxSelectedMessage);
} }
function SuiMultiSelect_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SuiMultiSelect_ng_container_9_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵtemplate(2, SuiMultiSelect_ng_container_9_div_2_Template, 2, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r106 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r106.maxSelectedReached);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r106.maxSelectedReached);
} }
const _c0 = ["*"];
export class SuiMultiSelect extends SuiSelectBase {
    constructor(element, localizationService) {
        super(element, localizationService);
        this.selectedOptions = [];
        this.selectedOptionsChange = new EventEmitter();
        this.hasLabels = true;
        this.hasClasses = true;
    }
    get filteredOptions() {
        if (this.maxSelectedReached) {
            // If we have reached the maximum number of selections, then empty the results completely.
            return [];
        }
        const searchResults = this.searchService.results;
        if (!this.hasLabels) {
            return searchResults;
        }
        else {
            // Returns the search results \ selected options.
            return searchResults
                .filter(r => this.selectedOptions.find(o => r === o) == undefined);
        }
    }
    get availableOptions() {
        return this.filteredOptions;
    }
    get hasLabels() {
        return this._hasLabels;
    }
    set hasLabels(hasLabels) {
        this._hasLabels = hasLabels;
    }
    get placeholder() {
        return this._placeholder || this.localeValues.multi.placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    get maxSelectedReached() {
        if (this.maxSelected == undefined) {
            // If there is no maximum then we can immediately return.
            return false;
        }
        return this.selectedOptions.length === this.maxSelected;
    }
    get maxSelectedMessage() {
        return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
    }
    get selectedMessage() {
        return this._localizationService.interpolate(this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
    }
    optionsUpdateHook() {
        if (!this._writtenOptions && this.selectedOptions.length > 0) {
            // We need to check the options still exist.
            this.writeValue(this.selectedOptions.map(o => this.valueGetter(o)));
        }
        if (this._writtenOptions && this.searchService.options.length > 0) {
            // If there were values written by ngModel before the options had been loaded, this runs to fix it.
            this.selectedOptions = this._writtenOptions
                // non-null assertion added here because Typescript doesn't recognise the non-null filter.
                .map(v => this.findOption(this.searchService.options, v))
                .filter(v => v != undefined);
            if (this.selectedOptions.length === this._writtenOptions.length) {
                this._writtenOptions = undefined;
            }
        }
    }
    initialiseRenderedOption(option) {
        super.initialiseRenderedOption(option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
    }
    selectOption(option) {
        if (this.selectedOptions.indexOf(option) !== -1) {
            this.deselectOption(option);
            return;
        }
        this.selectedOptions.push(option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(o => this.valueGetter(o)));
        this.resetQuery(false);
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    }
    writeValue(values) {
        if (values instanceof Array) {
            if (this.searchService.options.length > 0) {
                // If the options have already been loaded, we can immediately match the ngModel values to options.
                this.selectedOptions = values
                    // non-null assertion added here because Typescript doesn't recognise the non-null filter.
                    .map(v => this.findOption(this.searchService.options, v))
                    .filter(v => v != undefined);
            }
            if (values.length > 0 && this.selectedOptions.length === 0) {
                if (this.valueField && this.searchService.hasItemLookup) {
                    // If the search service has a selected lookup function, make use of that to load the initial values.
                    this.searchService
                        .initialLookup(values)
                        .then(items => this.selectedOptions = items);
                }
                else {
                    // Otherwise, cache the written value for when options are set.
                    this._writtenOptions = values;
                }
            }
            if (values.length === 0) {
                this.selectedOptions = [];
            }
        }
        else {
            this.selectedOptions = [];
        }
    }
    deselectOption(option) {
        // Update selected options to the previously selected options \ {option}.
        this.selectedOptions = this.selectedOptions.filter(so => so !== option);
        this.selectedOptionsChange.emit(this.selectedOptions.map(o => this.valueGetter(o)));
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
        if (!this.hasLabels) {
            this.onAvailableOptionsRendered();
        }
    }
    onQueryInputKeydown(event) {
        if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
            // Deselect the rightmost option when the user presses backspace in the search input.
            this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
        }
    }
}
SuiMultiSelect.ɵfac = function SuiMultiSelect_Factory(t) { return new (t || SuiMultiSelect)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.SuiLocalizationService)); };
SuiMultiSelect.ɵcmp = i0.ɵɵdefineComponent({ type: SuiMultiSelect, selectors: [["sui-multi-select"]], hostVars: 2, hostBindings: function SuiMultiSelect_HostBindings(rf, ctx, elIndex) { if (rf & 2) {
        i0.ɵɵclassProp("multiple", ctx.hasClasses);
    } }, inputs: { hasLabels: "hasLabels", placeholder: "placeholder", maxSelected: "maxSelected" }, outputs: { selectedOptionsChange: "selectedOptionsChange" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 10, vars: 15, consts: [[3, "click"], [4, "ngIf"], ["suiSelectSearch", "", "type", "text", 3, "hidden"], [1, "text"], [4, "ngIf", "ngIfElse"], ["selectedBlock", ""], ["suiDropdownMenu", "", 1, "menu", 3, "menuTransition", "menuTransitionDuration", "menuAutoSelectFirst"], [3, "value", "query", "formatter", "template", "deselected", 4, "ngFor", "ngForOf"], [3, "value", "query", "formatter", "template", "deselected"], ["class", "message", 4, "ngIf"], [1, "message"]], template: function SuiMultiSelect_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "i", 0);
        i0.ɵɵlistener("click", function SuiMultiSelect_Template_i_click_0_listener($event) { return ctx.onCaretClick($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(1, SuiMultiSelect_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵelement(2, "input", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, SuiMultiSelect_ng_container_4_Template, 2, 1, "ng-container", 4);
        i0.ɵɵtemplate(5, SuiMultiSelect_ng_template_5_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵprojection(8);
        i0.ɵɵtemplate(9, SuiMultiSelect_ng_container_9_Template, 3, 2, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r104 = i0.ɵɵreference(6);
        i0.ɵɵclassMapInterpolate1("", ctx.icon, " icon");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasLabels);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.isSearchable || ctx.isSearchExternal);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("default", ctx.hasLabels)("filtered", !!ctx.query && !ctx.isSearchExternal);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.hasLabels)("ngIfElse", _r104);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration)("menuAutoSelectFirst", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.availableOptions.length == 0);
    } }, directives: [i2.NgIf, i3.SuiSelectSearch, i4.SuiDropdownMenu, i2.NgForOf, i5.SuiMultiSelectLabel], styles: ["[_nghost-%COMP%]   input.search[_ngcontent-%COMP%] {\n    width: 12em !important;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiMultiSelect, [{
        type: Component,
        args: [{
                selector: "sui-multi-select",
                template: `
<!-- Dropdown icon -->
<i class="{{ icon }} icon" (click)="onCaretClick($event)"></i>

<ng-container *ngIf="hasLabels">
<!-- Multi-select labels -->
    <sui-multi-select-label *ngFor="let selected of selectedOptions;"
                            [value]="selected"
                            [query]="query"
                            [formatter]="configuredFormatter"
                            [template]="optionTemplate"
                            (deselected)="deselectOption($event)"></sui-multi-select-label>
</ng-container>

<!-- Query input -->
<input suiSelectSearch
       type="text"
       [hidden]="!isSearchable || isSearchExternal">

<!-- Helper text -->
<div class="text"
     [class.default]="hasLabels"
     [class.filtered]="!!query && !isSearchExternal">
    
    <!-- Placeholder text -->
    <ng-container *ngIf="hasLabels; else selectedBlock">{{ placeholder }}</ng-container>
    
    <!-- Summary shown when labels are hidden -->
    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>
</div>

<!-- Select dropdown menu -->
<div class="menu"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     [menuAutoSelectFirst]="true">

    <ng-content></ng-content>
    <ng-container *ngIf="availableOptions.length == 0 ">
        <div *ngIf="!maxSelectedReached" class="message">{{ localeValues.noResultsMessage }}</div>
        <div *ngIf="maxSelectedReached" class="message">{{ maxSelectedMessage }}</div>
    </ng-container>
</div>
`,
                styles: [`
:host input.search {
    width: 12em !important;
}
`]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.SuiLocalizationService }]; }, { selectedOptionsChange: [{
            type: Output
        }], hasLabels: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], maxSelected: [{
            type: Input
        }], hasClasses: [{
            type: HostBinding,
            args: ["class.multiple"]
        }] }); })();
// Value accessor directive for the select to support ngModel.
export class SuiMultiSelectValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiMultiSelectValueAccessor.ɵfac = function SuiMultiSelectValueAccessor_Factory(t) { return new (t || SuiMultiSelectValueAccessor)(i0.ɵɵdirectiveInject(SuiMultiSelect)); };
SuiMultiSelectValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SuiMultiSelectValueAccessor, selectors: [["sui-multi-select"]], hostBindings: function SuiMultiSelectValueAccessor_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("selectedOptionsChange", function SuiMultiSelectValueAccessor_selectedOptionsChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiMultiSelectValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [i0.ɵɵProvidersFeature([customValueAccessorFactory(SuiMultiSelectValueAccessor)]), i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiMultiSelectValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-multi-select",
                host: {
                    "(selectedOptionsChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiMultiSelectValueAccessor)]
            }]
    }], function () { return [{ type: SuiMultiSelect }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNlbWFudGljLXVpLyIsInNvdXJjZXMiOlsibW9kdWxlcy9zZWxlY3QvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQTRCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7O0lBV25ELGlEQUt1RjtJQUEvRCxxUUFBcUM7SUFBQyxpQkFBeUI7Ozs7SUFKL0QscUNBQWtCLHlCQUFBLDJDQUFBLHFDQUFBOzs7SUFIOUMsNkJBQ0E7SUFDSSxvSEFLOEQ7SUFDbEUsMEJBQWU7OztJQU5hLGVBQXlDO0lBQXpDLGtEQUF5Qzs7O0lBbUJqRSw2QkFBb0Q7SUFBQSxZQUFpQjtJQUFBLDBCQUFlOzs7SUFBaEMsZUFBaUI7SUFBakIsMENBQWlCOzs7SUFHeEMsWUFBcUI7OztJQUFyQix3REFBcUI7OztJQVk5QywrQkFBaUQ7SUFBQSxZQUFtQztJQUFBLGlCQUFNOzs7SUFBekMsZUFBbUM7SUFBbkMsNERBQW1DOzs7SUFDcEYsK0JBQWdEO0lBQUEsWUFBd0I7SUFBQSxpQkFBTTs7O0lBQTlCLGVBQXdCO0lBQXhCLGlEQUF3Qjs7O0lBRjVFLDZCQUNJO0lBQUEsOEVBQWlEO0lBQ2pELDhFQUFnRDtJQUNwRCwwQkFBZTs7O0lBRk4sZUFBMkI7SUFBM0IsbURBQTJCO0lBQzNCLGVBQTBCO0lBQTFCLGtEQUEwQjs7O0FBVXZDLE1BQU0sT0FBTyxjQUFx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b0IsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdCwgS2V5Q29kZSwgY3VzdG9tVmFsdWVBY2Nlc3NvckZhY3RvcnksIEN1c3RvbVZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlMb2NhbGl6YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2JlaGF2aW9ycy9sb2NhbGl6YXRpb24vaW50ZXJuYWxcIjtcbmltcG9ydCB7IFN1aVNlbGVjdEJhc2UgfSBmcm9tIFwiLi4vY2xhc3Nlcy9zZWxlY3QtYmFzZVwiO1xuaW1wb3J0IHsgU3VpU2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4vc2VsZWN0LW9wdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgdGVtcGxhdGU6IGBcbjwhLS0gRHJvcGRvd24gaWNvbiAtLT5cbjxpIGNsYXNzPVwie3sgaWNvbiB9fSBpY29uXCIgKGNsaWNrKT1cIm9uQ2FyZXRDbGljaygkZXZlbnQpXCI+PC9pPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzXCI+XG48IS0tIE11bHRpLXNlbGVjdCBsYWJlbHMgLS0+XG4gICAgPHN1aS1tdWx0aS1zZWxlY3QtbGFiZWwgKm5nRm9yPVwibGV0IHNlbGVjdGVkIG9mIHNlbGVjdGVkT3B0aW9ucztcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0dGVyXT1cImNvbmZpZ3VyZWRGb3JtYXR0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJvcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlc2VsZWN0ZWQpPVwiZGVzZWxlY3RPcHRpb24oJGV2ZW50KVwiPjwvc3VpLW11bHRpLXNlbGVjdC1sYWJlbD5cbjwvbmctY29udGFpbmVyPlxuXG48IS0tIFF1ZXJ5IGlucHV0IC0tPlxuPGlucHV0IHN1aVNlbGVjdFNlYXJjaFxuICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICBbaGlkZGVuXT1cIiFpc1NlYXJjaGFibGUgfHwgaXNTZWFyY2hFeHRlcm5hbFwiPlxuXG48IS0tIEhlbHBlciB0ZXh0IC0tPlxuPGRpdiBjbGFzcz1cInRleHRcIlxuICAgICBbY2xhc3MuZGVmYXVsdF09XCJoYXNMYWJlbHNcIlxuICAgICBbY2xhc3MuZmlsdGVyZWRdPVwiISFxdWVyeSAmJiAhaXNTZWFyY2hFeHRlcm5hbFwiPlxuICAgIFxuICAgIDwhLS0gUGxhY2Vob2xkZXIgdGV4dCAtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxzOyBlbHNlIHNlbGVjdGVkQmxvY2tcIj57eyBwbGFjZWhvbGRlciB9fTwvbmctY29udGFpbmVyPlxuICAgIFxuICAgIDwhLS0gU3VtbWFyeSBzaG93biB3aGVuIGxhYmVscyBhcmUgaGlkZGVuIC0tPlxuICAgIDxuZy10ZW1wbGF0ZSAjc2VsZWN0ZWRCbG9jaz4ge3sgc2VsZWN0ZWRNZXNzYWdlIH19PC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuXG48IS0tIFNlbGVjdCBkcm9wZG93biBtZW51IC0tPlxuPGRpdiBjbGFzcz1cIm1lbnVcIlxuICAgICBzdWlEcm9wZG93bk1lbnVcbiAgICAgW21lbnVUcmFuc2l0aW9uXT1cInRyYW5zaXRpb25cIlxuICAgICBbbWVudVRyYW5zaXRpb25EdXJhdGlvbl09XCJ0cmFuc2l0aW9uRHVyYXRpb25cIlxuICAgICBbbWVudUF1dG9TZWxlY3RGaXJzdF09XCJ0cnVlXCI+XG5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImF2YWlsYWJsZU9wdGlvbnMubGVuZ3RoID09IDAgXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhbWF4U2VsZWN0ZWRSZWFjaGVkXCIgY2xhc3M9XCJtZXNzYWdlXCI+e3sgbG9jYWxlVmFsdWVzLm5vUmVzdWx0c01lc3NhZ2UgfX08L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm1heFNlbGVjdGVkUmVhY2hlZFwiIGNsYXNzPVwibWVzc2FnZVwiPnt7IG1heFNlbGVjdGVkTWVzc2FnZSB9fTwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5gLFxuICAgIHN0eWxlczogW2Bcbjpob3N0IGlucHV0LnNlYXJjaCB7XG4gICAgd2lkdGg6IDEyZW0gIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0PFQsIFU+IGV4dGVuZHMgU3VpU2VsZWN0QmFzZTxULCBVPiBpbXBsZW1lbnRzIElDdXN0b21WYWx1ZUFjY2Vzc29ySG9zdDxVW10+IHtcbiAgICBwdWJsaWMgc2VsZWN0ZWRPcHRpb25zOlRbXTtcbiAgICAvLyBTdG9yZXMgdGhlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIGl0IGNhbiBiZSBtYXRjaGVkIHRvIGFuIG9wdGlvbiBmcm9tIGBvcHRpb25zYC5cbiAgICBwcml2YXRlIF93cml0dGVuT3B0aW9ucz86VVtdO1xuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNlbGVjdGVkT3B0aW9uc0NoYW5nZTpFdmVudEVtaXR0ZXI8VVtdPjtcblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgaWYgKHRoaXMubWF4U2VsZWN0ZWRSZWFjaGVkKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHNlbGVjdGlvbnMsIHRoZW4gZW1wdHkgdGhlIHJlc3VsdHMgY29tcGxldGVseS5cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHM6VFtdID0gdGhpcy5zZWFyY2hTZXJ2aWNlLnJlc3VsdHM7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRoZSBzZWFyY2ggcmVzdWx0cyBcXCBzZWxlY3RlZCBvcHRpb25zLlxuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHIgPT4gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmluZChvID0+IHIgPT09IG8pID09IHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzTGFiZWxzOmJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgaGFzTGFiZWxzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNMYWJlbHM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNMYWJlbHMoaGFzTGFiZWxzOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFzTGFiZWxzID0gaGFzTGFiZWxzO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOnN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBwbGFjZWhvbGRlcigpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlciB8fCB0aGlzLmxvY2FsZVZhbHVlcy5tdWx0aS5wbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIG1heFNlbGVjdGVkOm51bWJlcjtcblxuICAgIHB1YmxpYyBnZXQgbWF4U2VsZWN0ZWRSZWFjaGVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm1heFNlbGVjdGVkID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gbWF4aW11bSB0aGVuIHdlIGNhbiBpbW1lZGlhdGVseSByZXR1cm4uXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5tYXhTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1heFNlbGVjdGVkTWVzc2FnZSgpOnN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLmludGVycG9sYXRlKFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVWYWx1ZXMubXVsdGkubWF4U2VsZWN0ZWRNZXNzYWdlLFxuICAgICAgICAgICAgW1tcIm1heFwiLCB0aGlzLm1heFNlbGVjdGVkLnRvU3RyaW5nKCldXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzZWxlY3RlZE1lc3NhZ2UoKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZShcbiAgICAgICAgICAgIHRoaXMubG9jYWxlVmFsdWVzLm11bHRpLnNlbGVjdGVkTWVzc2FnZSxcbiAgICAgICAgICAgIFtbXCJjb3VudFwiLCB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGgudG9TdHJpbmcoKV1dKTtcbiAgICB9XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5tdWx0aXBsZVwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OkVsZW1lbnRSZWYsIGxvY2FsaXphdGlvblNlcnZpY2U6U3VpTG9jYWxpemF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBsb2NhbGl6YXRpb25TZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8VVtdPigpO1xuXG4gICAgICAgIHRoaXMuaGFzTGFiZWxzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYXNDbGFzc2VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3B0aW9uc1VwZGF0ZUhvb2soKTp2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoZSBvcHRpb25zIHN0aWxsIGV4aXN0LlxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl93cml0dGVuT3B0aW9ucyAmJiB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSB3ZXJlIHZhbHVlcyB3cml0dGVuIGJ5IG5nTW9kZWwgYmVmb3JlIHRoZSBvcHRpb25zIGhhZCBiZWVuIGxvYWRlZCwgdGhpcyBydW5zIHRvIGZpeCBpdC5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fd3JpdHRlbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAubWFwKHYgPT4gdGhpcy5maW5kT3B0aW9uKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLCB2KSEpXG4gICAgICAgICAgICAgICAgLmZpbHRlcih2ID0+IHYgIT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gdGhpcy5fd3JpdHRlbk9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKG9wdGlvbjpTdWlTZWxlY3RPcHRpb248VD4pOnZvaWQge1xuICAgICAgICBzdXBlci5pbml0aWFsaXNlUmVuZGVyZWRPcHRpb24ob3B0aW9uKTtcblxuICAgICAgICAvLyBCb2xkZW5zIHRoZSBpdGVtIHNvIGl0IGFwcGVhcnMgc2VsZWN0ZWQgaW4gdGhlIGRyb3Bkb3duLlxuICAgICAgICBvcHRpb24uaXNBY3RpdmUgPSAhdGhpcy5oYXNMYWJlbHMgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPcHRpb25zLmluZGV4T2Yob3B0aW9uKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy52YWx1ZUdldHRlcihvKSkpO1xuXG4gICAgICAgIHRoaXMucmVzZXRRdWVyeShmYWxzZSk7XG5cbiAgICAgICAgLy8gQXV0b21hdGljYWxseSByZWZvY3VzIHRoZSBzZWFyY2ggaW5wdXQgZm9yIGJldHRlciBrZXlib2FyZCBhY2Nlc3NpYmlsaXR5LlxuICAgICAgICB0aGlzLmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVscykge1xuICAgICAgICAgICAgdGhpcy5vbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVmFsdWUodmFsdWVzOlVbXSk6dm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBoYXZlIGFscmVhZHkgYmVlbiBsb2FkZWQsIHdlIGNhbiBpbW1lZGlhdGVseSBtYXRjaCB0aGUgbmdNb2RlbCB2YWx1ZXMgdG8gb3B0aW9ucy5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAvLyBub24tbnVsbCBhc3NlcnRpb24gYWRkZWQgaGVyZSBiZWNhdXNlIFR5cGVzY3JpcHQgZG9lc24ndCByZWNvZ25pc2UgdGhlIG5vbi1udWxsIGZpbHRlci5cbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2ID0+IHRoaXMuZmluZE9wdGlvbih0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9ucywgdikhKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAwICYmIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlRmllbGQgJiYgdGhpcy5zZWFyY2hTZXJ2aWNlLmhhc0l0ZW1Mb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNlYXJjaCBzZXJ2aWNlIGhhcyBhIHNlbGVjdGVkIGxvb2t1cCBmdW5jdGlvbiwgbWFrZSB1c2Ugb2YgdGhhdCB0byBsb2FkIHRoZSBpbml0aWFsIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pdGlhbExvb2t1cCh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihpdGVtcyA9PiB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IGl0ZW1zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNhY2hlIHRoZSB3cml0dGVuIHZhbHVlIGZvciB3aGVuIG9wdGlvbnMgYXJlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JpdHRlbk9wdGlvbnMgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlbGVjdE9wdGlvbihvcHRpb246VCk6dm9pZCB7XG4gICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZCBvcHRpb25zIHRvIHRoZSBwcmV2aW91c2x5IHNlbGVjdGVkIG9wdGlvbnMgXFwge29wdGlvbn0uXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnMuZmlsdGVyKHNvID0+IHNvICE9PSBvcHRpb24pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc0NoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMudmFsdWVHZXR0ZXIobykpKTtcblxuICAgICAgICAvLyBBdXRvbWF0aWNhbGx5IHJlZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCBmb3IgYmV0dGVyIGtleWJvYXJkIGFjY2Vzc2liaWxpdHkuXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWxzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25RdWVyeUlucHV0S2V5ZG93bihldmVudDpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuQmFja3NwYWNlICYmIHRoaXMucXVlcnkgPT09IFwiXCIgJiYgdGhpcy5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gRGVzZWxlY3QgdGhlIHJpZ2h0bW9zdCBvcHRpb24gd2hlbiB0aGUgdXNlciBwcmVzc2VzIGJhY2tzcGFjZSBpbiB0aGUgc2VhcmNoIGlucHV0LlxuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbih0aGlzLnNlbGVjdGVkT3B0aW9uc1t0aGlzLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGRpcmVjdGl2ZSBmb3IgdGhlIHNlbGVjdCB0byBzdXBwb3J0IG5nTW9kZWwuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJzdWktbXVsdGktc2VsZWN0XCIsXG4gICAgaG9zdDoge1xuICAgICAgICBcIihzZWxlY3RlZE9wdGlvbnNDaGFuZ2UpXCI6IFwib25DaGFuZ2UoJGV2ZW50KVwiLFxuICAgICAgICBcIih0b3VjaGVkKVwiOiBcIm9uVG91Y2hlZCgpXCJcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW2N1c3RvbVZhbHVlQWNjZXNzb3JGYWN0b3J5KFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcildXG59KVxuZXhwb3J0IGNsYXNzIFN1aU11bHRpU2VsZWN0VmFsdWVBY2Nlc3NvcjxULCBVPiBleHRlbmRzIEN1c3RvbVZhbHVlQWNjZXNzb3I8VVtdLCBTdWlNdWx0aVNlbGVjdDxULCBVPj4ge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6U3VpTXVsdGlTZWxlY3Q8VCwgVT4pIHtcbiAgICAgICAgc3VwZXIoaG9zdCk7XG4gICAgfVxufVxuIl19