import { ViewChild, HostBinding, ElementRef, HostListener, Input, ContentChildren, QueryList, TemplateRef, ContentChild, EventEmitter, Output, Directive } from "@angular/core";
import { DropdownService, SuiDropdownMenu } from "../../dropdown/internal";
import { SearchService } from "../../search/internal";
import { Util, HandledEvent, KeyCode } from "../../../misc/util/internal";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import { SuiSelectOption } from "../components/select-option";
import { SuiSelectSearch } from "../directives/select-search";
import * as i0 from "@angular/core";
import * as i1 from "../../../behaviors/localization/internal";
// We use generic type T to specify the type of the options we are working with,
// and U to specify the type of the property of the option used as the value.
export class SuiSelectBase {
    constructor(_element, _localizationService) {
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        // We do want an empty query to return all results.
        this.searchService = new SearchService(true);
        this.isSearchable = false;
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
        this._renderedSubscriptions = [];
        this.icon = "dropdown";
        this.transition = "slide down";
        this.transitionDuration = 200;
        this.onTouched = new EventEmitter();
        this.hasClasses = true;
    }
    get isActive() {
        return this.dropdownService.isOpen;
    }
    get isVisible() {
        return this._menu.isVisible;
    }
    get hasSearchClass() {
        return this.isSearchable && !this.isSearchExternal;
    }
    get isSearching() {
        return this.searchService.isSearching;
    }
    get searchInput() {
        return this._manualSearch || this._internalSearch;
    }
    get tabindex() {
        if (this.isDisabled) {
            // If disabled, remove from tabindex.
            return -1;
        }
        if (this.dropdownService.isOpen && this.isSearchExternal) {
            // If open & in menu search, remove from tabindex (as input always autofocusses).
            return -1;
        }
        if (this._tabIndex != undefined) {
            // If custom tabindex, default to that.
            return this._tabIndex;
        }
        if (this.hasSearchClass) {
            // If search input enabled, tab goes to input.
            return -1;
        }
        // Otherwise, return default of 0.
        return 0;
    }
    get isDisabled() {
        return this.dropdownService.isDisabled;
    }
    set isDisabled(value) {
        this.dropdownService.isDisabled = !!value;
    }
    set options(options) {
        if (options) {
            this.searchService.options = options;
            this.optionsUpdateHook();
        }
    }
    set optionsFilter(filter) {
        if (filter) {
            this.searchService.optionsFilter = filter;
            this.optionsUpdateHook();
        }
    }
    set optionsLookup(lookup) {
        if (lookup) {
            this.searchService.optionsLookup = lookup;
            this.optionsUpdateHook();
        }
    }
    get filteredOptions() {
        return this.searchService.results;
    }
    // Deprecated
    get availableOptions() {
        return this.filteredOptions;
    }
    get query() {
        return this.isSearchable ? this.searchService.query : undefined;
    }
    set query(query) {
        if (query != undefined) {
            this.queryUpdateHook();
            this.updateQuery(query);
            // Update the rendered text as query has changed.
            this._renderedOptions.forEach(ro => this.initialiseRenderedOption(ro));
            if (this.searchInput) {
                this.searchInput.query = query;
            }
        }
    }
    get labelField() {
        return this.searchService.optionsField;
    }
    set labelField(field) {
        this.searchService.optionsField = field;
    }
    get labelGetter() {
        // Helper function to retrieve the label from an item.
        return (obj) => {
            const label = Util.Object.readValue(obj, this.labelField);
            if (label != undefined) {
                return label.toString();
            }
            return "";
        };
    }
    get valueGetter() {
        // Helper function to retrieve the value from an item.
        return (obj) => Util.Object.readValue(obj, this.valueField);
    }
    get configuredFormatter() {
        if (this._optionFormatter) {
            return o => this._optionFormatter(o, this.isSearchable ? this.query : undefined);
        }
        else if (this.searchService.optionsLookup) {
            return o => this.labelGetter(o);
        }
        else {
            return o => this.searchService.highlightMatches(this.labelGetter(o), this.query || "");
        }
    }
    set optionFormatter(formatter) {
        this._optionFormatter = formatter;
    }
    get localeValues() {
        return this._localizationService.override(this._localeValues, this.localeOverrides);
    }
    ngAfterContentInit() {
        this._menu.service = this.dropdownService;
        // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
        this._menu.items = this._renderedOptions;
        this._menu.parentElement = this._element;
        if (this._manualSearch) {
            this.isSearchable = true;
            this.isSearchExternal = true;
        }
        if (this.searchInput) {
            this.searchInput.onQueryUpdated.subscribe((q) => this.query = q);
            this.searchInput.onQueryKeyDown.subscribe((e) => this.onQueryInputKeydown(e));
        }
        // We must call this immediately as changes doesn't fire when you subscribe.
        this.onAvailableOptionsRendered();
        this._renderedOptions.changes.subscribe(() => this.onAvailableOptionsRendered());
    }
    onLocaleUpdate() {
        this._localeValues = this._localizationService.get().select;
    }
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    optionsUpdateHook() { }
    // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
    queryUpdateHook() { }
    updateQuery(query) {
        // Update the query then open the dropdown, as after keyboard input it should always be open.
        this.searchService.updateQuery(query, () => this.dropdownService.setOpenState(true));
    }
    resetQuery(delayed = true) {
        // The search delay is set to the transition duration to ensure results
        // aren't rendered as the select closes as that causes a sudden flash.
        if (delayed) {
            this.searchService.searchDelay = this._menu.menuTransitionDuration;
            this.searchService.updateQueryDelayed("");
        }
        else {
            this.searchService.updateQuery("");
        }
        if (this.searchInput) {
            this.searchInput.query = "";
        }
    }
    onAvailableOptionsRendered() {
        // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
        this._renderedSubscriptions.forEach(rs => rs.unsubscribe());
        this._renderedSubscriptions = [];
        this._renderedOptions.forEach(ro => {
            // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
            setTimeout(() => this.initialiseRenderedOption(ro));
            this._renderedSubscriptions.push(ro.onSelected.subscribe(() => this.selectOption(ro.value)));
        });
        // If no options have been provided, autogenerate them from the rendered ones.
        if (this.searchService.options.length === 0 && !this.searchService.optionsLookup) {
            this.options = this._renderedOptions.map(ro => ro.value);
        }
    }
    initialiseRenderedOption(option) {
        option.usesTemplate = !!this.optionTemplate;
        option.formatter = this.configuredFormatter;
        if (option.usesTemplate) {
            this.drawTemplate(option.templateSibling, option.value);
        }
        option.changeDetector.markForCheck();
    }
    findOption(options, value) {
        // Tries to find an option in options array
        return options.find(o => value === this.valueGetter(o));
    }
    onCaretClick(e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (!this.dropdownService.isAnimating) {
                this.dropdownService.setOpenState(!this.dropdownService.isOpen);
                this.focus();
            }
        }
    }
    onClick(e) {
        if (!e.eventHandled && !this.dropdownService.isAnimating) {
            e.eventHandled = true;
            // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
            this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
            // Immediately focus the search input whenever clicking on the select.
            this.focus();
        }
    }
    onFocusIn() {
        if (!this.dropdownService.isOpen && !this.dropdownService.isAnimating) {
            this.dropdownService.setOpenState(true);
            this.focus();
        }
    }
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
            this.onTouched.emit();
        }
    }
    onKeyPress(e) {
        if (e.keyCode === KeyCode.Enter) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
        }
    }
    onKeyDown(e) {
        if (!this.dropdownService.isOpen && e.keyCode === KeyCode.Down) {
            // Enables support for focussing and opening with the keyboard alone.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this._element.nativeElement.click();
            e.preventDefault();
        }
    }
    onQueryInputKeydown(event) { }
    focus() {
        if (this.isSearchable && this.searchInput) {
            // Focusses the search input only when searchable.
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this.searchInput.focus();
        }
        else {
            this._element.nativeElement.focus();
        }
    }
    // Helper that draws the provided template beside the provided ViewContainerRef.
    drawTemplate(siblingRef, value) {
        siblingRef.clear();
        // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
        siblingRef.createEmbeddedView(this.optionTemplate, {
            $implicit: value,
            query: this.query
        });
    }
    ngOnDestroy() {
        this._renderedSubscriptions.forEach(s => s.unsubscribe());
    }
}
SuiSelectBase.ɵfac = function SuiSelectBase_Factory(t) { return new (t || SuiSelectBase)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.SuiLocalizationService)); };
SuiSelectBase.ɵdir = i0.ɵɵdefineDirective({ type: SuiSelectBase, contentQueries: function SuiSelectBase_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, SuiSelectSearch, true);
        i0.ɵɵcontentQuery(dirIndex, SuiSelectOption, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._manualSearch = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._renderedOptions = _t);
    } }, viewQuery: function SuiSelectBase_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(SuiDropdownMenu, true);
        i0.ɵɵstaticViewQuery(SuiSelectSearch, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._menu = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._internalSearch = _t.first);
    } }, hostVars: 15, hostBindings: function SuiSelectBase_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        i0.ɵɵlistener("click", function SuiSelectBase_click_HostBindingHandler($event) { return ctx.onClick($event); })("focusin", function SuiSelectBase_focusin_HostBindingHandler($event) { return ctx.onFocusIn(); })("focusout", function SuiSelectBase_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); })("keypress", function SuiSelectBase_keypress_HostBindingHandler($event) { return ctx.onKeyPress($event); })("keydown", function SuiSelectBase_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.tabindex);
        i0.ɵɵclassProp("ui", ctx.hasClasses)("dropdown", ctx.hasClasses)("active", ctx.isActive)("visible", ctx.isVisible)("search", ctx.hasSearchClass)("loading", ctx.isSearching)("disabled", ctx.isDisabled);
    } }, inputs: { isSearchable: "isSearchable", _tabIndex: ["tabindex", "_tabIndex"], isDisabled: "isDisabled", options: "options", optionsFilter: "optionsFilter", optionsLookup: "optionsLookup", labelField: "labelField", valueField: "valueField", optionTemplate: "optionTemplate", optionFormatter: "optionFormatter", icon: "icon", transition: "transition", transitionDuration: "transitionDuration" }, outputs: { onTouched: "touched" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiSelectBase, [{
        type: Directive
    }], function () { return [{ type: i0.ElementRef }, { type: i1.SuiLocalizationService }]; }, { _menu: [{
            type: ViewChild,
            args: [SuiDropdownMenu, { static: true }]
        }], _renderedOptions: [{
            type: ContentChildren,
            args: [SuiSelectOption, { descendants: true }]
        }], hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.dropdown"]
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }], isVisible: [{
            type: HostBinding,
            args: ["class.visible"]
        }], isSearchable: [{
            type: Input
        }], hasSearchClass: [{
            type: HostBinding,
            args: ["class.search"]
        }], isSearching: [{
            type: HostBinding,
            args: ["class.loading"]
        }], _internalSearch: [{
            type: ViewChild,
            args: [SuiSelectSearch, { static: true }]
        }], _manualSearch: [{
            type: ContentChild,
            args: [SuiSelectSearch, /* TODO: add static flag */ {}]
        }], _tabIndex: [{
            type: Input,
            args: ["tabindex"]
        }], tabindex: [{
            type: HostBinding,
            args: ["attr.tabindex"]
        }], isDisabled: [{
            type: HostBinding,
            args: ["class.disabled"]
        }, {
            type: Input
        }], options: [{
            type: Input
        }], optionsFilter: [{
            type: Input
        }], optionsLookup: [{
            type: Input
        }], labelField: [{
            type: Input
        }], valueField: [{
            type: Input
        }], optionTemplate: [{
            type: Input
        }], optionFormatter: [{
            type: Input
        }], icon: [{
            type: Input
        }], transition: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], onTouched: [{
            type: Output,
            args: ["touched"]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }], onFocusIn: [{
            type: HostListener,
            args: ["focusin"]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout", ["$event"]]
        }], onKeyPress: [{
            type: HostListener,
            args: ["keypress", ["$event"]]
        }], onKeyDown: [{
            type: HostListener,
            args: ["keydown", ["$event"]]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJtb2R1bGVzL3NlbGVjdC9jbGFzc2VzL3NlbGVjdC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQ3hGLFdBQVcsRUFBb0IsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBc0IsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsSUFBSSxFQUF1QixZQUFZLEVBQUUsT0FBTyxFQUFlLE1BQU0sNkJBQTZCLENBQUM7QUFDNUcsT0FBTyxFQUF5QyxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7OztBQU05RCxnRkFBZ0Y7QUFDaEYsNkVBQTZFO0FBRTdFLE1BQU0sT0FBZ0IsYUFBYTtJQWlOL0IsWUFBb0IsUUFBbUIsRUFBWSxvQkFBMkM7UUFBMUUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFZLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFDMUYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQzdDLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFPLElBQUksQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxj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OztrQkFJM0MsZUFBZTttQkFBQyxlQUFlLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOztrQkFPdEQsV0FBVzttQkFBQyxVQUFVOztrQkFDdEIsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUc1QixXQUFXO21CQUFDLGNBQWM7O2tCQUsxQixXQUFXO21CQUFDLGVBQWU7O2tCQUszQixLQUFLOztrQkFLTCxXQUFXO21CQUFDLGNBQWM7O2tCQUsxQixXQUFXO21CQUFDLGVBQWU7O2tCQUszQixTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUczQyxZQUFZO21CQUFDLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQyxFQUFFOztrQkFPNUQsS0FBSzttQkFBQyxVQUFVOztrQkFHaEIsV0FBVzttQkFBQyxlQUFlOztrQkFzQjNCLFdBQVc7bUJBQUMsZ0JBQWdCOztrQkFDNUIsS0FBSzs7a0JBU0wsS0FBSzs7a0JBU0wsS0FBSzs7a0JBU0wsS0FBSzs7a0JBbUNMLEtBQUs7O2tCQW9CTCxLQUFLOztrQkFRTCxLQUFLOztrQkFlTCxLQUFLOztrQkFZTCxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxLQUFLOztrQkFHTCxNQUFNO21CQUFDLFNBQVM7O2tCQTJIaEIsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQWFoQyxZQUFZO21CQUFDLFNBQVM7O2tCQVN0QixZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBUW5DLFlBQVk7bUJBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFTbkMsWUFBWTttQkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95LCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IERyb3Bkb3duU2VydmljZSwgU3VpRHJvcGRvd25NZW51IH0gZnJvbSBcIi4uLy4uL2Ryb3Bkb3duL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTZWFyY2hTZXJ2aWNlLCBMb29rdXBGbiwgRmlsdGVyRm4gfSBmcm9tIFwiLi4vLi4vc2VhcmNoL2ludGVybmFsXCI7XG5pbXBvcnQgeyBVdGlsLCBJVGVtcGxhdGVSZWZDb250ZXh0LCBIYW5kbGVkRXZlbnQsIEtleUNvZGUsIElGb2N1c0V2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL21pc2MvdXRpbC9pbnRlcm5hbFwiO1xuaW1wb3J0IHsgSVNlbGVjdExvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCwgU3VpTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9iZWhhdmlvcnMvbG9jYWxpemF0aW9uL2ludGVybmFsXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RPcHRpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWxlY3Qtb3B0aW9uXCI7XG5pbXBvcnQgeyBTdWlTZWxlY3RTZWFyY2ggfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9zZWxlY3Qtc2VhcmNoXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9wdGlvbkNvbnRleHQ8VD4gZXh0ZW5kcyBJVGVtcGxhdGVSZWZDb250ZXh0PFQ+IHtcbiAgICBxdWVyeT86c3RyaW5nO1xufVxuXG4vLyBXZSB1c2UgZ2VuZXJpYyB0eXBlIFQgdG8gc3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgb3B0aW9ucyB3ZSBhcmUgd29ya2luZyB3aXRoLFxuLy8gYW5kIFUgdG8gc3BlY2lmeSB0aGUgdHlwZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIG9wdGlvbiB1c2VkIGFzIHRoZSB2YWx1ZS5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1aVNlbGVjdEJhc2U8VCwgVT4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBkcm9wZG93blNlcnZpY2U6RHJvcGRvd25TZXJ2aWNlO1xuICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOlNlYXJjaFNlcnZpY2U8VCwgVT47XG5cbiAgICBAVmlld0NoaWxkKFN1aURyb3Bkb3duTWVudSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBwcm90ZWN0ZWQgX21lbnU6U3VpRHJvcGRvd25NZW51O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHJlbmRlcmVkIHNlbGVjdCBvcHRpb25zLiAoUmVuZGVyZWQgYnkgdGhlIHVzZXIgdXNpbmcgKm5nRm9yKS5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVNlbGVjdE9wdGlvbiwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICAgIHByb3RlY3RlZCBfcmVuZGVyZWRPcHRpb25zOlF1ZXJ5TGlzdDxTdWlTZWxlY3RPcHRpb248VD4+O1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBhbGwgb2YgdGhlIHN1YnNjcmlwdGlvbnMgdG8gdGhlIHNlbGVjdGVkIGV2ZW50cyBvbiB0aGUgcmVuZGVyZWQgb3B0aW9ucy5cbiAgICBwcml2YXRlIF9yZW5kZXJlZFN1YnNjcmlwdGlvbnM6U3Vic2NyaXB0aW9uW107XG5cbiAgICAvLyBTZXRzIHRoZSBTZW1hbnRpYyBVSSBjbGFzc2VzIG9uIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudWlcIilcbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5kcm9wZG93blwiKVxuICAgIHB1YmxpYyByZWFkb25seSBoYXNDbGFzc2VzOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5hY3RpdmVcIilcbiAgICBwdWJsaWMgZ2V0IGlzQWN0aXZlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duU2VydmljZS5pc09wZW47XG4gICAgfVxuXG4gICAgQEhvc3RCaW5kaW5nKFwiY2xhc3MudmlzaWJsZVwiKVxuICAgIHB1YmxpYyBnZXQgaXNWaXNpYmxlKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZW51LmlzVmlzaWJsZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBpc1NlYXJjaGFibGU6Ym9vbGVhbjtcblxuICAgIHB1YmxpYyBpc1NlYXJjaEV4dGVybmFsOmJvb2xlYW47XG5cbiAgICBASG9zdEJpbmRpbmcoXCJjbGFzcy5zZWFyY2hcIilcbiAgICBwdWJsaWMgZ2V0IGhhc1NlYXJjaENsYXNzKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VhcmNoYWJsZSAmJiAhdGhpcy5pc1NlYXJjaEV4dGVybmFsO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmxvYWRpbmdcIilcbiAgICBwdWJsaWMgZ2V0IGlzU2VhcmNoaW5nKCk6Ym9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2UuaXNTZWFyY2hpbmc7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChTdWlTZWxlY3RTZWFyY2gsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxTZWFyY2g/OlN1aVNlbGVjdFNlYXJjaDtcblxuICAgIEBDb250ZW50Q2hpbGQoU3VpU2VsZWN0U2VhcmNoLCAvKiBUT0RPOiBhZGQgc3RhdGljIGZsYWcgKi8ge30pXG4gICAgcHJpdmF0ZSBfbWFudWFsU2VhcmNoPzpTdWlTZWxlY3RTZWFyY2g7XG5cbiAgICBwdWJsaWMgZ2V0IHNlYXJjaElucHV0KCk6U3VpU2VsZWN0U2VhcmNoIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbnVhbFNlYXJjaCB8fCB0aGlzLl9pbnRlcm5hbFNlYXJjaDtcbiAgICB9XG5cbiAgICBASW5wdXQoXCJ0YWJpbmRleFwiKVxuICAgIHByaXZhdGUgX3RhYkluZGV4PzpudW1iZXI7XG5cbiAgICBASG9zdEJpbmRpbmcoXCJhdHRyLnRhYmluZGV4XCIpXG4gICAgcHVibGljIGdldCB0YWJpbmRleCgpOm51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIC8vIElmIGRpc2FibGVkLCByZW1vdmUgZnJvbSB0YWJpbmRleC5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuICYmIHRoaXMuaXNTZWFyY2hFeHRlcm5hbCkge1xuICAgICAgICAgICAgLy8gSWYgb3BlbiAmIGluIG1lbnUgc2VhcmNoLCByZW1vdmUgZnJvbSB0YWJpbmRleCAoYXMgaW5wdXQgYWx3YXlzIGF1dG9mb2N1c3NlcykuXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RhYkluZGV4ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gSWYgY3VzdG9tIHRhYmluZGV4LCBkZWZhdWx0IHRvIHRoYXQuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzU2VhcmNoQ2xhc3MpIHtcbiAgICAgICAgICAgIC8vIElmIHNlYXJjaCBpbnB1dCBlbmFibGVkLCB0YWIgZ29lcyB0byBpbnB1dC5cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHJldHVybiBkZWZhdWx0IG9mIDAuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIEBIb3N0QmluZGluZyhcImNsYXNzLmRpc2FibGVkXCIpXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgZ2V0IGlzRGlzYWJsZWQoKTpib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0Rpc2FibGVkKHZhbHVlOmJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UuaXNEaXNhYmxlZCA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnMob3B0aW9uczpUW10pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zVXBkYXRlSG9vaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgc2V0IG9wdGlvbnNGaWx0ZXIoZmlsdGVyOkZpbHRlckZuPFQ+IHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmlsdGVyID0gZmlsdGVyO1xuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNVcGRhdGVIb29rKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBzZXQgb3B0aW9uc0xvb2t1cChsb29rdXA6TG9va3VwRm48VCwgVT4gfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGxvb2t1cCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXAgPSBsb29rdXA7XG5cbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1VwZGF0ZUhvb2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZmlsdGVyZWRPcHRpb25zKCk6VFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5yZXN1bHRzO1xuICAgIH1cblxuICAgIC8vIERlcHJlY2F0ZWRcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU9wdGlvbnMoKTpUW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBxdWVyeSgpOnN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VhcmNoYWJsZSA/IHRoaXMuc2VhcmNoU2VydmljZS5xdWVyeSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHF1ZXJ5KHF1ZXJ5OnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocXVlcnkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5VXBkYXRlSG9vaygpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVRdWVyeShxdWVyeSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHJlbmRlcmVkIHRleHQgYXMgcXVlcnkgaGFzIGNoYW5nZWQuXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZE9wdGlvbnMuZm9yRWFjaChybyA9PiB0aGlzLmluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihybykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCBsYWJlbEZpZWxkKCk6c3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zRmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBsYWJlbEZpZWxkKGZpZWxkOnN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2Uub3B0aW9uc0ZpZWxkID0gZmllbGQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsYWJlbEdldHRlcigpOihvYmo6VCkgPT4gc3RyaW5nIHtcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBsYWJlbCBmcm9tIGFuIGl0ZW0uXG4gICAgICAgIHJldHVybiAob2JqOlQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gVXRpbC5PYmplY3QucmVhZFZhbHVlPFQsIHN0cmluZz4ob2JqLCB0aGlzLmxhYmVsRmllbGQpO1xuICAgICAgICAgICAgaWYgKGxhYmVsICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdmFsdWVGaWVsZDpzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IHZhbHVlR2V0dGVyKCk6KG9iajpUKSA9PiBVIHtcbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSB2YWx1ZSBmcm9tIGFuIGl0ZW0uXG4gICAgICAgIHJldHVybiAob2JqOlQpID0+IFV0aWwuT2JqZWN0LnJlYWRWYWx1ZTxULCBVPihvYmosIHRoaXMudmFsdWVGaWVsZCk7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgb3B0aW9uVGVtcGxhdGU6VGVtcGxhdGVSZWY8SU9wdGlvbkNvbnRleHQ8VD4+O1xuXG4gICAgcHJpdmF0ZSBfb3B0aW9uRm9ybWF0dGVyPzoobzpULCBxPzpzdHJpbmcpID0+IHN0cmluZztcblxuICAgIHB1YmxpYyBnZXQgY29uZmlndXJlZEZvcm1hdHRlcigpOihvcHRpb246VCkgPT4gc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbkZvcm1hdHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5fb3B0aW9uRm9ybWF0dGVyIShvLCB0aGlzLmlzU2VhcmNoYWJsZSA/IHRoaXMucXVlcnkgOiB1bmRlZmluZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zTG9va3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gbyA9PiB0aGlzLmxhYmVsR2V0dGVyKG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG8gPT4gdGhpcy5zZWFyY2hTZXJ2aWNlLmhpZ2hsaWdodE1hdGNoZXModGhpcy5sYWJlbEdldHRlcihvKSwgdGhpcy5xdWVyeSB8fCBcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBvcHRpb25Gb3JtYXR0ZXIoZm9ybWF0dGVyOigob3B0aW9uOlQsIHF1ZXJ5PzpzdHJpbmcpID0+IHN0cmluZykgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9uRm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvY2FsZVZhbHVlczpJU2VsZWN0TG9jYWxlVmFsdWVzO1xuICAgIHB1YmxpYyBsb2NhbGVPdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJU2VsZWN0TG9jYWxlVmFsdWVzPjtcblxuICAgIHB1YmxpYyBnZXQgbG9jYWxlVmFsdWVzKCk6SVNlbGVjdExvY2FsZVZhbHVlcyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGl6YXRpb25TZXJ2aWNlLm92ZXJyaWRlPFwic2VsZWN0XCI+KHRoaXMuX2xvY2FsZVZhbHVlcywgdGhpcy5sb2NhbGVPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGljb246c3RyaW5nO1xuXG4gICAgQElucHV0KClcbiAgICBwdWJsaWMgdHJhbnNpdGlvbjpzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyB0cmFuc2l0aW9uRHVyYXRpb246bnVtYmVyO1xuXG4gICAgQE91dHB1dChcInRvdWNoZWRcIilcbiAgICBwdWJsaWMgb25Ub3VjaGVkOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnQ6RWxlbWVudFJlZiwgcHJvdGVjdGVkIF9sb2NhbGl6YXRpb25TZXJ2aWNlOlN1aUxvY2FsaXphdGlvblNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2UgPSBuZXcgRHJvcGRvd25TZXJ2aWNlKCk7XG4gICAgICAgIC8vIFdlIGRvIHdhbnQgYW4gZW1wdHkgcXVlcnkgdG8gcmV0dXJuIGFsbCByZXN1bHRzLlxuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2UgPSBuZXcgU2VhcmNoU2VydmljZTxULCBVPih0cnVlKTtcblxuICAgICAgICB0aGlzLmlzU2VhcmNoYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Mb2NhbGVVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5vbkxhbmd1YWdlVXBkYXRlLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uTG9jYWxlVXBkYXRlKCkpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMgPSBbXTtcblxuICAgICAgICB0aGlzLmljb24gPSBcImRyb3Bkb3duXCI7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFwic2xpZGUgZG93blwiO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDIwMDtcblxuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLmhhc0NsYXNzZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbWVudS5zZXJ2aWNlID0gdGhpcy5kcm9wZG93blNlcnZpY2U7XG4gICAgICAgIC8vIFdlIG1hbnVhbGx5IHNwZWNpZnkgdGhlIG1lbnUgaXRlbXMgdG8gdGhlIG1lbnUgYmVjYXVzZSB0aGUgQENvbnRlbnRDaGlsZHJlbiBkb2Vzbid0IHBpY2sgdXAgb3VyIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGl0ZW1zLlxuICAgICAgICB0aGlzLl9tZW51Lml0ZW1zID0gdGhpcy5fcmVuZGVyZWRPcHRpb25zO1xuICAgICAgICB0aGlzLl9tZW51LnBhcmVudEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLl9tYW51YWxTZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hFeHRlcm5hbCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5vblF1ZXJ5VXBkYXRlZC5zdWJzY3JpYmUoKHE6c3RyaW5nKSA9PiB0aGlzLnF1ZXJ5ID0gcSk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm9uUXVlcnlLZXlEb3duLnN1YnNjcmliZSgoZTpLZXlib2FyZEV2ZW50KSA9PiB0aGlzLm9uUXVlcnlJbnB1dEtleWRvd24oZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgbXVzdCBjYWxsIHRoaXMgaW1tZWRpYXRlbHkgYXMgY2hhbmdlcyBkb2Vzbid0IGZpcmUgd2hlbiB5b3Ugc3Vic2NyaWJlLlxuICAgICAgICB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uQXZhaWxhYmxlT3B0aW9uc1JlbmRlcmVkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2NhbGVVcGRhdGUoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fbG9jYWxlVmFsdWVzID0gdGhpcy5fbG9jYWxpemF0aW9uU2VydmljZS5nZXQoKS5zZWxlY3Q7XG4gICAgfVxuXG4gICAgLy8gSG9vayBpcyBoZXJlIHNpbmNlIFR5cGVzY3JpcHQgZG9lc24ndCB5ZXQgc3VwcG9ydCBvdmVycmlkaW5nIGdldHRlcnMgJiBzZXR0ZXJzIHdoaWxlIHN0aWxsIGNhbGxpbmcgdGhlIHN1cGVyY2xhc3MuXG4gICAgcHJvdGVjdGVkIG9wdGlvbnNVcGRhdGVIb29rKCk6dm9pZCB7fVxuXG4gICAgLy8gSG9vayBpcyBoZXJlIHNpbmNlIFR5cGVzY3JpcHQgZG9lc24ndCB5ZXQgc3VwcG9ydCBvdmVycmlkaW5nIGdldHRlcnMgJiBzZXR0ZXJzIHdoaWxlIHN0aWxsIGNhbGxpbmcgdGhlIHN1cGVyY2xhc3MuXG4gICAgcHJvdGVjdGVkIHF1ZXJ5VXBkYXRlSG9vaygpOnZvaWQge31cblxuICAgIHByb3RlY3RlZCB1cGRhdGVRdWVyeShxdWVyeTpzdHJpbmcpOnZvaWQge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHF1ZXJ5IHRoZW4gb3BlbiB0aGUgZHJvcGRvd24sIGFzIGFmdGVyIGtleWJvYXJkIGlucHV0IGl0IHNob3VsZCBhbHdheXMgYmUgb3Blbi5cbiAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5KHF1ZXJ5LCAoKSA9PlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRRdWVyeShkZWxheWVkOmJvb2xlYW4gPSB0cnVlKTp2b2lkIHtcbiAgICAgICAgLy8gVGhlIHNlYXJjaCBkZWxheSBpcyBzZXQgdG8gdGhlIHRyYW5zaXRpb24gZHVyYXRpb24gdG8gZW5zdXJlIHJlc3VsdHNcbiAgICAgICAgLy8gYXJlbid0IHJlbmRlcmVkIGFzIHRoZSBzZWxlY3QgY2xvc2VzIGFzIHRoYXQgY2F1c2VzIGEgc3VkZGVuIGZsYXNoLlxuICAgICAgICBpZiAoZGVsYXllZCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnNlYXJjaERlbGF5ID0gdGhpcy5fbWVudS5tZW51VHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXJ2aWNlLnVwZGF0ZVF1ZXJ5RGVsYXllZChcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2VydmljZS51cGRhdGVRdWVyeShcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LnF1ZXJ5ID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkF2YWlsYWJsZU9wdGlvbnNSZW5kZXJlZCgpOnZvaWQge1xuICAgICAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGFsbCBwcmV2aW91cyBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIG1lbW9yeSBsZWFrcyBvbiBsYXJnZSBzZWxlY3RzLlxuICAgICAgICB0aGlzLl9yZW5kZXJlZFN1YnNjcmlwdGlvbnMuZm9yRWFjaChycyA9PiBycy51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRTdWJzY3JpcHRpb25zID0gW107XG5cbiAgICAgICAgdGhpcy5fcmVuZGVyZWRPcHRpb25zLmZvckVhY2gocm8gPT4ge1xuICAgICAgICAgICAgLy8gU2xpZ2h0bHkgZGVsYXkgaW5pdGlhbGlzYXRpb24gdG8gYXZvaWQgY2hhbmdlIGFmdGVyIGNoZWNrZWQgZXJyb3JzLiBUT0RPIC0gbG9vayBpbnRvIGF2b2lkaW5nIHRoaXMhXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdGlhbGlzZVJlbmRlcmVkT3B0aW9uKHJvKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucy5wdXNoKHJvLm9uU2VsZWN0ZWQuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2VsZWN0T3B0aW9uKHJvLnZhbHVlKSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJZiBubyBvcHRpb25zIGhhdmUgYmVlbiBwcm92aWRlZCwgYXV0b2dlbmVyYXRlIHRoZW0gZnJvbSB0aGUgcmVuZGVyZWQgb25lcy5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU2VydmljZS5vcHRpb25zLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5zZWFyY2hTZXJ2aWNlLm9wdGlvbnNMb29rdXApIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuX3JlbmRlcmVkT3B0aW9ucy5tYXAocm8gPT4gcm8udmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpc2VSZW5kZXJlZE9wdGlvbihvcHRpb246U3VpU2VsZWN0T3B0aW9uPFQ+KTp2b2lkIHtcbiAgICAgICAgb3B0aW9uLnVzZXNUZW1wbGF0ZSA9ICEhdGhpcy5vcHRpb25UZW1wbGF0ZTtcbiAgICAgICAgb3B0aW9uLmZvcm1hdHRlciA9IHRoaXMuY29uZmlndXJlZEZvcm1hdHRlcjtcblxuICAgICAgICBpZiAob3B0aW9uLnVzZXNUZW1wbGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGVtcGxhdGUob3B0aW9uLnRlbXBsYXRlU2libGluZywgb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbi5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2VsZWN0T3B0aW9uKG9wdGlvbjpUKTp2b2lkO1xuXG4gICAgcHJvdGVjdGVkIGZpbmRPcHRpb24ob3B0aW9uczpUW10sIHZhbHVlOlUpOlQgfCB1bmRlZmluZWQge1xuICAgICAgICAvLyBUcmllcyB0byBmaW5kIGFuIG9wdGlvbiBpbiBvcHRpb25zIGFycmF5XG4gICAgICAgIHJldHVybiBvcHRpb25zLmZpbmQobyA9PiB2YWx1ZSA9PT0gdGhpcy52YWx1ZUdldHRlcihvKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2FyZXRDbGljayhlOkhhbmRsZWRFdmVudCk6dm9pZCB7XG4gICAgICAgIGlmICghZS5ldmVudEhhbmRsZWQpIHtcbiAgICAgICAgICAgIGUuZXZlbnRIYW5kbGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uQ2xpY2soZTpIYW5kbGVkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIWUuZXZlbnRIYW5kbGVkICYmICF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgZS5ldmVudEhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZHJvcGRvd24gaXMgc2VhcmNoYWJsZSwgY2xpY2tpbmcgc2hvdWxkIGtlZXAgaXQgb3Blbiwgb3RoZXJ3aXNlIHdlIHRvZ2dsZSB0aGUgb3BlbiBzdGF0ZS5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnNldE9wZW5TdGF0ZSh0aGlzLmlzU2VhcmNoYWJsZSA/IHRydWUgOiAhdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuKTtcblxuICAgICAgICAgICAgLy8gSW1tZWRpYXRlbHkgZm9jdXMgdGhlIHNlYXJjaCBpbnB1dCB3aGVuZXZlciBjbGlja2luZyBvbiB0aGUgc2VsZWN0LlxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImZvY3VzaW5cIilcbiAgICBwdWJsaWMgb25Gb2N1c0luKCk6dm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5kcm9wZG93blNlcnZpY2UuaXNPcGVuICYmICF0aGlzLmRyb3Bkb3duU2VydmljZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNlcnZpY2Uuc2V0T3BlblN0YXRlKHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgW1wiJGV2ZW50XCJdKVxuICAgIHB1YmxpYyBvbkZvY3VzT3V0KGU6SUZvY3VzRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQuZW1pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcihcImtleXByZXNzXCIsIFtcIiRldmVudFwiXSlcbiAgICBwdWJsaWMgb25LZXlQcmVzcyhlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLkVudGVyKSB7XG4gICAgICAgICAgICAvLyBFbmFibGVzIHN1cHBvcnQgZm9yIGZvY3Vzc2luZyBhbmQgb3BlbmluZyB3aXRoIHRoZSBrZXlib2FyZCBhbG9uZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKFwia2V5ZG93blwiLCBbXCIkZXZlbnRcIl0pXG4gICAgcHVibGljIG9uS2V5RG93bihlOktleWJvYXJkRXZlbnQpOnZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd25TZXJ2aWNlLmlzT3BlbiAmJiBlLmtleUNvZGUgPT09IEtleUNvZGUuRG93bikge1xuXG4gICAgICAgICAgICAvLyBFbmFibGVzIHN1cHBvcnQgZm9yIGZvY3Vzc2luZyBhbmQgb3BlbmluZyB3aXRoIHRoZSBrZXlib2FyZCBhbG9uZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblF1ZXJ5SW5wdXRLZXlkb3duKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWQge31cblxuICAgIHByb3RlY3RlZCBmb2N1cygpOnZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1NlYXJjaGFibGUgJiYgdGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgICAgLy8gRm9jdXNzZXMgdGhlIHNlYXJjaCBpbnB1dCBvbmx5IHdoZW4gc2VhcmNoYWJsZS5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpcmVjdGx5IGJlY2F1c2UgUmVuZGVyZXIyIGRvZXNuJ3QgaGF2ZSBpbnZva2VFbGVtZW50TWV0aG9kIG1ldGhvZCBhbnltb3JlLlxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIZWxwZXIgdGhhdCBkcmF3cyB0aGUgcHJvdmlkZWQgdGVtcGxhdGUgYmVzaWRlIHRoZSBwcm92aWRlZCBWaWV3Q29udGFpbmVyUmVmLlxuICAgIHByb3RlY3RlZCBkcmF3VGVtcGxhdGUoc2libGluZ1JlZjpWaWV3Q29udGFpbmVyUmVmLCB2YWx1ZTpUKTp2b2lkIHtcbiAgICAgICAgc2libGluZ1JlZi5jbGVhcigpO1xuICAgICAgICAvLyBVc2Ugb2YgYCRpbXBsaWNpdGAgbWVhbnMgdXNlIG9mIDxuZy10ZW1wbGF0ZSBsZXQtb3B0aW9uPiBzeW50YXggaXMgc3VwcG9ydGVkLlxuICAgICAgICBzaWJsaW5nUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLm9wdGlvblRlbXBsYXRlLCB7XG4gICAgICAgICAgICAkaW1wbGljaXQ6IHZhbHVlLFxuICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=