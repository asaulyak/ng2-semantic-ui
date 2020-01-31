import { EventEmitter, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵdirectiveInject, Renderer2, ElementRef, ChangeDetectorRef, ɵɵdefineDirective, ɵɵclassProp, Directive, Input, HostBinding, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵtemplate, ɵɵprojection, ɵɵclassMapInterpolate1, ɵɵproperty, ɵɵadvance, ɵɵdefineComponent, ɵɵprojectionDef, Component, Output, ɵɵelement, ɵɵtext, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵtextInterpolate1, ɵɵtextInterpolate, ɵɵNgOnChangesFeature, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ContentChildren, forwardRef, ReflectiveInjector, ɵɵinject, ApplicationRef, ComponentFactoryResolver, Injector, ɵɵstaticViewQuery, ɵɵattribute, ViewChild, HostListener, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵviewQuery, ViewChildren, ViewContainerRef, TemplateRef, Host, ɵɵtextInterpolate2, ɵɵsetComponentScope, ContentChild, ɵɵresolveDocument, ɵɵresolveWindow, ɵɵpureFunction1, ɵɵstyleProp, ɵɵsanitizeHtml, ɵɵtemplateRefExtractor, ɵɵreference } from '@angular/core';
import * as $extend from 'extend';
import $extend__default from 'extend';
import { CommonModule, NgIf, NgForOf, NgClass, NgComponentOutlet, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe } from '@angular/common';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, CheckboxControlValueAccessor, NgControlStatus, NgModel, FormsModule, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModelGroup, NgForm } from '@angular/forms';
import Popper from 'popper.js';
import { format, parse } from 'date-fns';
import * as defaultLocale from 'date-fns/locale/en-US';
import { mobile, tablet } from 'bowser';
import * as isUAWebView from 'is-ua-webview';
import isUAWebView__default from 'is-ua-webview';
import 'element-closest';

const enGB = {
    datepicker: {
        months: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
        monthsShort: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        weekdays: [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        weekdaysShort: [
            "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
        ],
        weekdaysNarrow: [
            "S", "M", "T", "W", "T", "F", "S"
        ],
        timesOfDay: [
            "a.m.", "p.m."
        ],
        timesOfDayUppercase: [
            "AM", "PM"
        ],
        timesOfDayLowercase: [
            "am", "pm"
        ],
        formats: {
            time: "h:mm A",
            datetime: "D MMMM YYYY h:mm A",
            date: "D MMMM YYYY",
            month: "MMMM YYYY",
            year: "YYYY"
        },
        firstDayOfWeek: 1
    },
    search: {
        placeholder: "Search...",
        noResults: {
            header: "No Results",
            message: "Your search returned no results."
        }
    },
    select: {
        noResultsMessage: "No results",
        single: {
            placeholder: "Select one"
        },
        multi: {
            placeholder: "Select...",
            maxSelectedMessage: "Max #{max} selections",
            selectedMessage: "#{count} selections"
        }
    }
};

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function deepExtend(target, source) {
    // Rollup...
    const extend = $extend__default || $extend;
    return extend(true, target, source);
}
function lang(language) {
    return language.toLowerCase().replace("-", "");
}
class SuiLocalizationService {
    constructor() {
        this.onLanguageUpdate = new EventEmitter();
        this._fallbackValues = enGB;
        this._values = {};
        this._language = "en-GB";
        this.load("en-GB", enGB);
    }
    get language() {
        return this._language;
    }
    setLanguage(language) {
        if (lang(this._language) !== lang(language)) {
            this._language = language;
            this.onLanguageUpdate.emit();
        }
    }
    get(language = this.language) {
        const values = deepClone(this._fallbackValues);
        if (!this._values[lang(language)]) {
            throw new Error(`Locale ${language} is not loaded`);
        }
        deepExtend(values, this._values[lang(language)]);
        return deepClone(values);
    }
    override(values, overrides) {
        return deepExtend(deepClone(values), overrides);
    }
    load(language, values) {
        this._values[lang(language)] = deepClone(values);
        this.onLanguageUpdate.emit();
    }
    patch(language, values) {
        deepExtend(this._values[lang(language)], values);
    }
    interpolate(value, variables) {
        return variables.reduce((s, [k, v]) => s.replace(new RegExp(`#{${k}}`, "g"), v), value);
    }
}
SuiLocalizationService.ɵfac = function SuiLocalizationService_Factory(t) { return new (t || SuiLocalizationService)(); };
SuiLocalizationService.ɵprov = ɵɵdefineInjectable({ token: SuiLocalizationService, factory: SuiLocalizationService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiLocalizationService, [{
        type: Injectable
    }], function () { return []; }, null); })();

class SuiLocalizationModule {
}
SuiLocalizationModule.ɵmod = ɵɵdefineNgModule({ type: SuiLocalizationModule });
SuiLocalizationModule.ɵinj = ɵɵdefineInjector({ factory: function SuiLocalizationModule_Factory(t) { return new (t || SuiLocalizationModule)(); }, providers: [SuiLocalizationService], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiLocalizationModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiLocalizationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                providers: [SuiLocalizationService]
            }]
    }], null, null); })();

// Possible directions for a transition.
var TransitionDirection;
(function (TransitionDirection) {
    TransitionDirection[TransitionDirection["In"] = 0] = "In";
    TransitionDirection[TransitionDirection["Out"] = 1] = "Out";
    TransitionDirection[TransitionDirection["Either"] = 2] = "Either";
    TransitionDirection[TransitionDirection["Static"] = 3] = "Static";
})(TransitionDirection || (TransitionDirection = {}));
class Transition {
    constructor(name, duration = 250, direction = TransitionDirection.Either, onComplete = () => { }) {
        this.type = name;
        // We set a minimum duration of 1ms, to give the appearance of an immediate transition
        // whilst allowing positioning calculations to happen without a visible flicker.
        this.duration = Math.max(duration, 1);
        this.direction = direction;
        this.classes = this.type.split(" ");
        this.onComplete = onComplete;
    }
    // Converts TransitionDirection to class name.
    get directionClass() {
        switch (this.direction) {
            case TransitionDirection.In: return "in";
            case TransitionDirection.Out: return "out";
        }
        return "";
    }
}

class TransitionController {
    constructor(isInitiallyVisible = true, display = "block") {
        // isInitiallyVisible sets whether the element starts out visible.
        this._isVisible = isInitiallyVisible;
        this._isHidden = !this._isVisible;
        this._display = display;
        this._queue = [];
        this._isAnimating = false;
    }
    // Used to delay animations until we have an element to animate.
    get _isReady() {
        return this._renderer != undefined && this._element != undefined && this._changeDetector != undefined;
    }
    get isAnimating() {
        return this._isAnimating;
    }
    get isVisible() {
        return this._isVisible;
    }
    get isHidden() {
        return this._isHidden;
    }
    // Gets the first transition in the queue.
    get _queueFirst() {
        return this._queue[0];
    }
    // Gets the last transition in the queue.
    get _queueLast() {
        return this._queue[this._queue.length - 1];
    }
    // Sets the renderer to be used for animating.
    registerRenderer(renderer) {
        this._renderer = renderer;
        this.performTransition();
    }
    // Sets the element to perform the animations on.
    registerElement(element) {
        this._element = element;
        this.performTransition();
    }
    // Sets the change detector to detect changes when using ChangeDetectionStrategy.OnPush.
    registerChangeDetector(changeDetector) {
        this._changeDetector = changeDetector;
        this.performTransition();
    }
    animate(transition) {
        // Test if transition is one of the list that doesn't change the visible state.
        // Should these eventually become classes?
        const isDirectionless = ["jiggle", "flash", "shake", "pulse", "tada", "bounce"].indexOf(transition.type) !== -1;
        if (isDirectionless) {
            transition.direction = TransitionDirection.Static;
        }
        else if (transition.direction == undefined || transition.direction === TransitionDirection.Either) {
            // Set the direction to the opposite of the current visible state automatically if not set, or set to either direction.
            transition.direction = this._isVisible ? TransitionDirection.Out : TransitionDirection.In;
            if (this._queueLast) {
                // If there is an transition in the queue already, set the direction to the opposite of the direction of that transition.
                if (this._queueLast.direction === TransitionDirection.In) {
                    transition.direction = TransitionDirection.Out;
                }
                else if (this._queueLast.direction === TransitionDirection.Out) {
                    transition.direction = TransitionDirection.In;
                }
            }
        }
        // Store the transition in the queue before attempting to perform it.
        this._queue.push(transition);
        this.performTransition();
    }
    performTransition() {
        if (!this._isReady || this._isAnimating || !this._queueFirst) {
            // Don't transition until we are ready, or if we are animating, or if there aren't any transitions in the queue.
            return;
        }
        this._isAnimating = true;
        const transition = this._queueFirst;
        // Set the Semantic UI classes for transitioning.
        transition.classes.forEach(c => this._renderer.addClass(this._element, c));
        this._renderer.addClass(this._element, `animating`);
        this._renderer.addClass(this._element, transition.directionClass);
        // Set the Semantic UI styles for transitioning.
        this._renderer.setStyle(this._element, `animationDuration`, `${transition.duration}ms`);
        this._renderer.setStyle(this._element, `display`, this._display);
        if (transition.direction === TransitionDirection.In) {
            // Unset hidden if we are transitioning in.
            this._isHidden = false;
        }
        // Wait the length of the animation before calling the complete callback.
        this._animationTimeout = window.setTimeout(() => this.finishTransition(transition), transition.duration);
    }
    // Called when a transition has completed.
    finishTransition(transition) {
        // Unset the Semantic UI classes & styles for transitioning.
        transition.classes.forEach(c => this._renderer.removeClass(this._element, c));
        this._renderer.removeClass(this._element, `animating`);
        this._renderer.removeClass(this._element, transition.directionClass);
        this._renderer.removeStyle(this._element, `animationDuration`);
        this._renderer.removeStyle(this._element, `display`);
        if (transition.direction === TransitionDirection.In) {
            // If we have just animated in, we are now visible.
            this._isVisible = true;
        }
        else if (transition.direction === TransitionDirection.Out) {
            // If we have transitioned out, we should be invisible and hidden.
            this._isVisible = false;
            this._isHidden = true;
        }
        if (transition.onComplete) {
            // Call the user-defined transition callback.
            transition.onComplete();
        }
        // Delete the transition from the queue.
        this._queue.shift();
        this._isAnimating = false;
        this._changeDetector.markForCheck();
        // Immediately attempt to perform another transition.
        this.performTransition();
    }
    // Stops the current transition, leaves the rest of the queue intact.
    stop(transition = this._queueFirst) {
        if (!transition || !this._isAnimating) {
            return;
        }
        clearTimeout(this._animationTimeout);
        this.finishTransition(transition);
    }
    // Stops the current transition, and empties the queue.
    stopAll() {
        this.clearQueue();
        this.stop();
    }
    // Empties the transition queue but carries on with the current transition.
    clearQueue() {
        if (this.isAnimating) {
            this._queue = [this._queueFirst];
            return;
        }
        this._queue = [];
    }
}

class SuiTransition {
    constructor(_renderer, _element, _changeDetector) {
        this._renderer = _renderer;
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.transitionClass = true;
    }
    set suiTransition(tC) {
        // Set the transition controller (e.g. '<div [suiTransition]="transitionController"></div>').
        this.setTransitionController(tC);
    }
    get isVisible() {
        if (this._controller) {
            return this._controller.isVisible;
        }
        return false;
    }
    get isHidden() {
        if (this._controller) {
            return this._controller.isHidden;
        }
        return false;
    }
    // Initialises the controller with the injected renderer and elementRef.
    setTransitionController(transitionController) {
        this._controller = transitionController;
        this._controller.registerRenderer(this._renderer);
        this._controller.registerElement(this._element.nativeElement);
        this._controller.registerChangeDetector(this._changeDetector);
    }
}
SuiTransition.ɵfac = function SuiTransition_Factory(t) { return new (t || SuiTransition)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
SuiTransition.ɵdir = ɵɵdefineDirective({ type: SuiTransition, selectors: [["", "suiTransition", ""]], hostVars: 6, hostBindings: function SuiTransition_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("transition", ctx.transitionClass)("visible", ctx.isVisible)("hidden", ctx.isHidden);
    } }, inputs: { suiTransition: "suiTransition" }, exportAs: ["transition"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiTransition, [{
        type: Directive,
        args: [{
                selector: "[suiTransition]",
                exportAs: "transition"
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { suiTransition: [{
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

class SuiTransitionModule {
}
SuiTransitionModule.ɵmod = ɵɵdefineNgModule({ type: SuiTransitionModule });
SuiTransitionModule.ɵinj = ɵɵdefineInjector({ factory: function SuiTransitionModule_Factory(t) { return new (t || SuiTransitionModule)(); }, providers: [], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiTransitionModule, { declarations: [SuiTransition], imports: [CommonModule], exports: [SuiTransition] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiTransitionModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    SuiTransition
                ],
                exports: [
                    SuiTransition
                ],
                providers: []
            }]
    }], null, null); })();

function SuiMessage_div_0_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 3);
    ɵɵlistener("click", function SuiMessage_div_0_i_1_Template_i_click_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(2); return ctx_r2.dismiss(); });
    ɵɵelementEnd();
} }
function SuiMessage_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, SuiMessage_div_0_i_1_Template, 1, 0, "i", 2);
    ɵɵprojection(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ui message ", ctx_r0.class, "");
    ɵɵproperty("suiTransition", ctx_r0.transitionController);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isDismissable);
} }
const _c0 = ["*"];
class SuiMessage {
    constructor() {
        this.isDismissable = true;
        this.onDismiss = new EventEmitter();
        this.isDismissed = false;
        this.transitionController = new TransitionController();
        this.transition = "fade";
        this.transitionDuration = 300;
        this.class = "";
    }
    dismiss() {
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, () => {
            this.isDismissed = true;
            this.onDismiss.emit(this);
        }));
    }
}
SuiMessage.ɵfac = function SuiMessage_Factory(t) { return new (t || SuiMessage)(); };
SuiMessage.ɵcmp = ɵɵdefineComponent({ type: SuiMessage, selectors: [["sui-message"]], inputs: { isDismissable: "isDismissable", transition: "transition", transitionDuration: "transitionDuration", class: "class" }, outputs: { onDismiss: "dismiss" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "class", "suiTransition", 4, "ngIf"], [3, "suiTransition"], ["class", "close icon", 3, "click", 4, "ngIf"], [1, "close", "icon", 3, "click"]], template: function SuiMessage_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, SuiMessage_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.isDismissed);
    } }, directives: [NgIf, SuiTransition], styles: [".ui.icon.visible.message[_ngcontent-%COMP%] {\n    display: flex !important;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiMessage, [{
        type: Component,
        args: [{
                selector: "sui-message",
                template: `
<div class="ui message {{ class }}" *ngIf="!isDismissed" [suiTransition]="transitionController">
    <i class="close icon" *ngIf="isDismissable" (click)="dismiss()"></i>
    <ng-content></ng-content>
</div>
`,
                styles: [`
/* Fix for CSS Bug */
.ui.icon.visible.message {
    display: flex !important;
}
`]
            }]
    }], function () { return []; }, { isDismissable: [{
            type: Input
        }], onDismiss: [{
            type: Output,
            args: ["dismiss"]
        }], transition: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], class: [{
            type: Input,
            args: ["class"]
        }] }); })();

class SuiMessageModule {
}
SuiMessageModule.ɵmod = ɵɵdefineNgModule({ type: SuiMessageModule });
SuiMessageModule.ɵinj = ɵɵdefineInjector({ factory: function SuiMessageModule_Factory(t) { return new (t || SuiMessageModule)(); }, imports: [[
            CommonModule,
            SuiTransitionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiMessageModule, { declarations: [SuiMessage], imports: [CommonModule,
        SuiTransitionModule], exports: [SuiMessage] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiMessageModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiMessage
                ],
                exports: [
                    SuiMessage
                ]
            }]
    }], null, null); })();

function SuiPagination_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function SuiPagination_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r12); const ctx_r11 = ɵɵnextContext(); return ctx_r11.setPage(1); });
    ɵɵelementStart(1, "span");
    ɵɵelement(2, "i", 4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("disabled", ctx_r4.page === 1);
} }
function SuiPagination_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function SuiPagination_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.setPage(ctx_r13.page - 1); });
    ɵɵelementStart(1, "span");
    ɵɵelement(2, "i", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassProp("disabled", !ctx_r5.hasPrevious());
} }
function SuiPagination_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function SuiPagination_ng_container_2_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(2); return ctx_r17.setPage(1); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2, "1");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function SuiPagination_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtext(1, "...");
    ɵɵelementEnd();
} }
function SuiPagination_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SuiPagination_ng_container_2_a_1_Template, 3, 0, "a", 6);
    ɵɵtemplate(2, SuiPagination_ng_container_2_a_2_Template, 2, 0, "a", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.pages[0] !== 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.pages[0] > 2);
} }
function SuiPagination_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function SuiPagination_a_3_Template_a_click_0_listener($event) { ɵɵrestoreView(_r21); const p_r19 = ctx.$implicit; const ctx_r20 = ɵɵnextContext(); return ctx_r20.setPage(p_r19); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const p_r19 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassProp("active", p_r19 === ctx_r7.page);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", p_r19, "\n");
} }
function SuiPagination_ng_container_4_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 8);
    ɵɵtext(1, "...");
    ɵɵelementEnd();
} }
function SuiPagination_ng_container_4_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function SuiPagination_ng_container_4_a_2_Template_a_click_0_listener($event) { ɵɵrestoreView(_r25); const ctx_r24 = ɵɵnextContext(2); return ctx_r24.setPage(ctx_r24.pageCount); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r23.pageCount);
} }
function SuiPagination_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SuiPagination_ng_container_4_a_1_Template, 2, 0, "a", 7);
    ɵɵtemplate(2, SuiPagination_ng_container_4_a_2_Template, 3, 1, "a", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.pages[ctx_r8.pages.length - 1] < ctx_r8.pageCount - 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.pages[ctx_r8.pages.length - 1] !== ctx_r8.pageCount);
} }
function SuiPagination_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function SuiPagination_a_5_Template_a_click_0_listener($event) { ɵɵrestoreView(_r27); const ctx_r26 = ɵɵnextContext(); return ctx_r26.setPage(ctx_r26.page + 1); });
    ɵɵelementStart(1, "span");
    ɵɵelement(2, "i", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵclassProp("disabled", !ctx_r9.hasNext());
} }
function SuiPagination_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function SuiPagination_a_6_Template_a_click_0_listener($event) { ɵɵrestoreView(_r29); const ctx_r28 = ɵɵnextContext(); return ctx_r28.setPage(ctx_r28.pageCount); });
    ɵɵelementStart(1, "span");
    ɵɵelement(2, "i", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵclassProp("disabled", ctx_r10.page === ctx_r10.pageCount);
} }
class SuiPagination {
    constructor() {
        this.hasClasses = true;
        this.pageChange = new EventEmitter();
        this.pageSize = 10;
        this._page = 1;
        this._pages = [];
        this.pageCount = 1;
        this.hasNavigationLinks = true;
        this.hasBoundaryLinks = false;
        this.canRotate = false;
        this.hasEllipses = true;
    }
    get maxSize() {
        return this._maxSize;
    }
    set maxSize(value) {
        this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
    }
    get collectionSize() {
        return this._collectionSize;
    }
    set collectionSize(value) {
        this._collectionSize = Math.max(value, 0);
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
    }
    get hasNavigationLinks() {
        const maxSize = this._maxSize || this.pageCount;
        return this._hasNavigationLinks || maxSize < this.pageCount;
    }
    set hasNavigationLinks(value) {
        this._hasNavigationLinks = value;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        this.setPage(value);
    }
    get pages() {
        return this._pages;
    }
    // Public methods
    hasPrevious() {
        return this.page > 1;
    }
    hasNext() {
        return this.page < this.pageCount;
    }
    setPage(newPage) {
        const value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
        if (value !== this._page) {
            this._page = value;
            this.pageChange.emit(this._page);
        }
    }
    // Lifecycle hooks
    ngOnChanges() {
        this.updatePages();
    }
    // Private methods
    updatePages() {
        this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
        const [start, end] = this.applyPagination();
        this._pages = Array(end - start)
            .fill(start + 1)
            .map((s, i) => s + i);
    }
    applyPagination() {
        const maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
        const page = Math.ceil(this.page / maxSize) - 1;
        let start = 0;
        let end = this.pageCount;
        if (this.canRotate) {
            const leftOffset = Math.floor(maxSize / 2);
            const rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
            if (this.page <= leftOffset) {
                end = maxSize;
            }
            else if (this.pageCount - this.page < leftOffset) {
                start = this.pageCount - maxSize;
            }
            else {
                start = this.page - leftOffset - 1;
                end = this.page + rightOffset;
            }
        }
        else {
            start = page * maxSize;
            end = start + maxSize;
        }
        return [start, Math.min(end, this.pageCount)];
    }
}
SuiPagination.ɵfac = function SuiPagination_Factory(t) { return new (t || SuiPagination)(); };
SuiPagination.ɵcmp = ɵɵdefineComponent({ type: SuiPagination, selectors: [["sui-pagination"]], hostVars: 6, hostBindings: function SuiPagination_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("pagination", ctx.hasClasses)("menu", ctx.hasClasses);
    } }, inputs: { maxSize: "maxSize", pageSize: "pageSize", collectionSize: "collectionSize", hasNavigationLinks: "hasNavigationLinks", hasBoundaryLinks: "hasBoundaryLinks", canRotate: "canRotate", hasEllipses: "hasEllipses", page: "page" }, outputs: { pageChange: "pageChange" }, features: [ɵɵNgOnChangesFeature()], decls: 7, vars: 7, consts: [["class", "item", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["class", "item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"], [1, "angle", "double", "left", "icon"], [1, "angle", "left", "icon"], ["class", "item", 3, "click", 4, "ngIf"], ["class", "disabled item", 4, "ngIf"], [1, "disabled", "item"], [1, "angle", "right", "icon"], [1, "angle", "double", "right", "icon"]], template: function SuiPagination_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SuiPagination_a_0_Template, 3, 2, "a", 0);
        ɵɵtemplate(1, SuiPagination_a_1_Template, 3, 2, "a", 0);
        ɵɵtemplate(2, SuiPagination_ng_container_2_Template, 3, 2, "ng-container", 1);
        ɵɵtemplate(3, SuiPagination_a_3_Template, 2, 3, "a", 2);
        ɵɵtemplate(4, SuiPagination_ng_container_4_Template, 3, 2, "ng-container", 1);
        ɵɵtemplate(5, SuiPagination_a_5_Template, 3, 2, "a", 0);
        ɵɵtemplate(6, SuiPagination_a_6_Template, 3, 2, "a", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.hasBoundaryLinks);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasNavigationLinks);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasEllipses);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.pages);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasEllipses);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasNavigationLinks);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasBoundaryLinks);
    } }, directives: [NgIf, NgForOf], styles: ["[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n    transition: none;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiPagination, [{
        type: Component,
        args: [{
                selector: "sui-pagination",
                template: `
<a *ngIf="hasBoundaryLinks" class="item"  (click)="setPage(1)" [class.disabled]="page===1">
    <span><i class="angle double left icon"></i></span>
</a>
<a *ngIf="hasNavigationLinks" class="item" (click)="setPage(page-1)" [class.disabled]="!hasPrevious()">
    <span><i class="angle left icon"></i></span>
</a>
<ng-container *ngIf="hasEllipses">
    <a class="item" (click)="setPage(1)" *ngIf="pages[0] !== 1">
        <span>1</span>
    </a>
    <a class="disabled item" *ngIf="pages[0] > 2">...</a>
</ng-container>
<a *ngFor="let p of pages" class="item" [class.active]="p===page" (click)="setPage(p)">
    {{ p }}
</a>
<ng-container *ngIf="hasEllipses">
    <a class="disabled item" *ngIf="pages[pages.length - 1] < pageCount - 1">...</a>
    <a class="item" (click)="setPage(pageCount)" *ngIf="pages[pages.length - 1] !== pageCount">
        <span>{{ pageCount }}</span>
    </a>
</ng-container>
<a *ngIf="hasNavigationLinks" class="item" (click)="setPage(page+1)" [class.disabled]="!hasNext()">
    <span><i class="angle right icon"></i></span>
</a>
<a *ngIf="hasBoundaryLinks" class="item"  (click)="setPage(pageCount)" [class.disabled]="page===pageCount">
    <span><i class="angle double right icon"></i></span>
</a>
`,
                styles: [`
:host .item {
    transition: none;
}
`]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.pagination"]
        }, {
            type: HostBinding,
            args: ["class.menu"]
        }], pageChange: [{
            type: Output
        }], maxSize: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], collectionSize: [{
            type: Input
        }], hasNavigationLinks: [{
            type: Input
        }], hasBoundaryLinks: [{
            type: Input
        }], canRotate: [{
            type: Input
        }], hasEllipses: [{
            type: Input
        }], page: [{
            type: Input
        }] }); })();

class SuiPaginationModule {
}
SuiPaginationModule.ɵmod = ɵɵdefineNgModule({ type: SuiPaginationModule });
SuiPaginationModule.ɵinj = ɵɵdefineInjector({ factory: function SuiPaginationModule_Factory(t) { return new (t || SuiPaginationModule)(); }, providers: [], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiPaginationModule, { declarations: [SuiPagination], imports: [CommonModule], exports: [SuiPagination] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiPaginationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [SuiPagination],
                declarations: [SuiPagination],
                providers: []
            }]
    }], null, null); })();

class SuiCollapse {
    constructor(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._pristine = true;
        // Collapse animation duration is 350ms by default.
        this.collapseDuration = 350;
        this._isExpanded = false;
        this._isCollapsing = false;
    }
    // Set when the collapse is open, and not animating.
    get isExpanded() {
        return this._isExpanded;
    }
    // Set when the collapse is closed, and not animating.
    get isCollapsed() {
        return !this.isExpanded && !this.isCollapsing;
    }
    // Set when the collapse is animating.
    get isCollapsing() {
        return this._isCollapsing;
    }
    get suiCollapse() {
        return this._isExpanded;
    }
    // Sets the state of the collapse, `true` is collapsed.
    set suiCollapse(value) {
        if (value) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    get _animationDuration() {
        return this._pristine ? 0 : this.collapseDuration;
    }
    hide() {
        this._isCollapsing = true;
        this._isExpanded = false;
        // Forcibly hide the overflow so that content is not visible past the boundaries of its container.
        this._renderer.setStyle(this._element.nativeElement, "overflow", "hidden");
        // Animate the host element from its scroll height to 0.
        this.animate(this._element.nativeElement.scrollHeight, 0, false, () => {
            this._isCollapsing = false;
        });
    }
    show() {
        this._isCollapsing = true;
        // Animate the host element from its offset height to its scroll height.
        this.animate(this._element.nativeElement.offsetHeight, this._element.nativeElement.scrollHeight, true, () => {
            // Remove the overflow override to enable user styling once again.
            this._renderer.removeStyle(this._element.nativeElement, "overflow");
            this._isCollapsing = false;
            this._isExpanded = true;
        });
    }
    animate(startHeight, endHeight, removeOnComplete = false, callback = () => { }) {
        const heightFrames = [
            {
                offset: 0,
                height: `${startHeight}px`
            },
            {
                offset: 1,
                height: `${endHeight}px`
            }
        ];
        if (removeOnComplete) {
            heightFrames.push({
                offset: 1,
                height: `auto`
            });
        }
        // Animate the collapse using the web animations API.
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this._element.nativeElement.animate(heightFrames, {
            delay: 0,
            // Disable animation on 1st collapse / expansion.
            duration: this._animationDuration,
            iterations: 1,
            easing: "ease",
            fill: "both"
        });
        if (this._pristine) {
            // Remove pristine flag when first hit.
            this._pristine = false;
        }
        setTimeout(() => callback(), this.collapseDuration);
    }
}
SuiCollapse.ɵfac = function SuiCollapse_Factory(t) { return new (t || SuiCollapse)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
SuiCollapse.ɵdir = ɵɵdefineDirective({ type: SuiCollapse, selectors: [["", "suiCollapse", ""]], hostVars: 6, hostBindings: function SuiCollapse_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("expanded", ctx.isExpanded)("collapsed", ctx.isCollapsed)("collapsing", ctx.isCollapsing);
    } }, inputs: { suiCollapse: "suiCollapse", collapseDuration: "collapseDuration" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCollapse, [{
        type: Directive,
        args: [{
                selector: "[suiCollapse]"
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { isExpanded: [{
            type: HostBinding,
            args: ["class.expanded"]
        }], isCollapsed: [{
            type: HostBinding,
            args: ["class.collapsed"]
        }], isCollapsing: [{
            type: HostBinding,
            args: ["class.collapsing"]
        }], suiCollapse: [{
            type: Input
        }], collapseDuration: [{
            type: Input
        }] }); })();

const _c0$1 = [[["", "title", ""]], [["", "content", ""]]];
const _c1 = ["[title]", "[content]"];
class SuiAccordionPanel {
    constructor(_changeDetector) {
        this._changeDetector = _changeDetector;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.isOpenChange = new EventEmitter(false);
    }
    set service(service) {
        this._service = service;
        this._changeDetector.detectChanges();
    }
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        // Convert to boolean (fixes false != undefined)
        const isOpen = !!value;
        if (isOpen !== this.isOpen) {
            // Only update if the value has changed.
            this._isOpen = isOpen;
            if (isOpen && this._service) {
                // If we are opening this panel, we must close the other ones.
                this._service.closeOtherPanels(this);
            }
            this.isOpenChange.emit(this.isOpen);
            // Cancel all current animations, and fade the contents. The direction is automatic.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration));
        }
    }
    get transition() {
        if (this._service) {
            return this._service.transition;
        }
        return "fade";
    }
    get transitionDuration() {
        if (this._service) {
            // Return the service defined transition duration.
            return this._service.transitionDuration;
        }
        // Revert to instantaneous if the service is not yet loaded.
        return 0;
    }
    toggle() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
SuiAccordionPanel.ɵfac = function SuiAccordionPanel_Factory(t) { return new (t || SuiAccordionPanel)(ɵɵdirectiveInject(ChangeDetectorRef)); };
SuiAccordionPanel.ɵcmp = ɵɵdefineComponent({ type: SuiAccordionPanel, selectors: [["sui-accordion-panel"]], inputs: { isDisabled: "isDisabled", isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, exportAs: ["suiAccordionPanel"], ngContentSelectors: _c1, decls: 5, vars: 7, consts: [[1, "title", 3, "click"], [3, "suiCollapse", "collapseDuration"], [1, "content", 3, "suiTransition"]], template: function SuiAccordionPanel_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c0$1);
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function SuiAccordionPanel_Template_div_click_0_listener($event) { return ctx.toggle(); });
        ɵɵprojection(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵprojection(4, 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("active", ctx.isOpen);
        ɵɵadvance(2);
        ɵɵproperty("suiCollapse", !ctx.isOpen)("collapseDuration", ctx.transitionDuration);
        ɵɵadvance(1);
        ɵɵclassProp("active", ctx.isOpen);
        ɵɵproperty("suiTransition", ctx.transitionController);
    } }, directives: [SuiCollapse, SuiTransition], styles: [".content[_ngcontent-%COMP%] {\n    padding: .5em 0 1em;\n}\n\n\n[_nghost-%COMP%]:first-child   .title[_ngcontent-%COMP%] {\n    border-top: none;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiAccordionPanel, [{
        type: Component,
        args: [{
                selector: "sui-accordion-panel",
                exportAs: "suiAccordionPanel",
                template: `
<!-- Title -->
<div class="title" [class.active]="isOpen" (click)="toggle()" >
    <ng-content select="[title]"></ng-content>
</div>
<!-- Content -->
<div [suiCollapse]="!isOpen" [collapseDuration]="transitionDuration">
    <div class="content" [class.active]="isOpen" [suiTransition]="transitionController">
        <ng-content select="[content]"></ng-content>
    </div>
</div>
`,
                styles: [`
/* Manual style as Semantic UI relies on > selector */
.content {
    padding: .5em 0 1em;
}

/* Another > selector fix */
:host:first-child .title {
    border-top: none;
}
`]
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { isDisabled: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], isOpenChange: [{
            type: Output
        }] }); })();

class SuiAccordionService {
    constructor() {
        this.closeOthers = true;
        this.transition = "fade";
        this.transitionDuration = 350;
        this.panels = [];
    }
    addPanel(panel) {
        panel.service = this;
        this.panels.push(panel);
    }
    closeOtherPanels(panel) {
        if (!this.closeOthers) {
            return;
        }
        this.panels.forEach(p => {
            if (p !== panel) {
                p.isOpen = false;
            }
        });
    }
}

const _c0$2 = ["*"];
class SuiAccordion {
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
SuiAccordion.ɵcmp = ɵɵdefineComponent({ type: SuiAccordion, selectors: [["sui-accordion"]], contentQueries: function SuiAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuiAccordionPanel, false);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._panels = _t);
    } }, hostVars: 4, hostBindings: function SuiAccordion_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("accordion", ctx.hasClasses);
    } }, inputs: { closeOthers: "closeOthers", transition: "transition", transitionDuration: "transitionDuration" }, ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function SuiAccordion_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}\n\n\n.styled[_nghost-%COMP%]   sui-accordion-panel[_ngcontent-%COMP%]:first-child   .title[_ngcontent-%COMP%] {\n    border-top: none\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiAccordion, [{
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

class SuiCollapseModule {
}
SuiCollapseModule.ɵmod = ɵɵdefineNgModule({ type: SuiCollapseModule });
SuiCollapseModule.ɵinj = ɵɵdefineInjector({ factory: function SuiCollapseModule_Factory(t) { return new (t || SuiCollapseModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiCollapseModule, { declarations: [SuiCollapse], imports: [CommonModule], exports: [SuiCollapse] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCollapseModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiCollapse
                ],
                exports: [
                    SuiCollapse
                ]
            }]
    }], null, null); })();

class SuiAccordionModule {
}
SuiAccordionModule.ɵmod = ɵɵdefineNgModule({ type: SuiAccordionModule });
SuiAccordionModule.ɵinj = ɵɵdefineInjector({ factory: function SuiAccordionModule_Factory(t) { return new (t || SuiAccordionModule)(); }, providers: [], imports: [[
            CommonModule,
            SuiCollapseModule,
            SuiTransitionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiAccordionModule, { declarations: [SuiAccordion,
        SuiAccordionPanel], imports: [CommonModule,
        SuiCollapseModule,
        SuiTransitionModule], exports: [SuiAccordion,
        SuiAccordionPanel] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiAccordionModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiCollapseModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiAccordion,
                    SuiAccordionPanel
                ],
                exports: [
                    SuiAccordion,
                    SuiAccordionPanel
                ],
                providers: []
            }]
    }], null, null); })();

class CustomValidator {
    constructor(_host) {
        this._host = _host;
        this.onValidatorChange = () => { };
    }
    validate(c) {
        return this._host.validate(c);
    }
    registerOnValidatorChange(fn) {
        this.onValidatorChange = fn;
    }
}
function customValidatorFactory(type) {
    return {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => type),
        multi: true
    };
}

class CustomValueAccessor {
    constructor(_host) {
        this._host = _host;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this._host.writeValue(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
function customValueAccessorFactory(type) {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => type),
        multi: true
    };
}

// Keyboard keycodes.
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Left"] = 37] = "Left";
    KeyCode[KeyCode["Up"] = 38] = "Up";
    KeyCode[KeyCode["Right"] = 39] = "Right";
    KeyCode[KeyCode["Down"] = 40] = "Down";
    KeyCode[KeyCode["Escape"] = 27] = "Escape";
    KeyCode[KeyCode["Enter"] = 13] = "Enter";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));
class HandledEvent {
}
const Util = {
    Array: {
        range(n, offset = 0) {
            return Array(n).fill(0).map((z, i) => i + offset);
        },
        group(items, groupLength) {
            const mutable = items.slice(0);
            const groups = [];
            while (mutable.length > 0) {
                groups.push(mutable.splice(0, groupLength));
            }
            return groups;
        },
        groupBy(items, field) {
            return items.reduce((groups, i) => {
                const fieldValue = i[field].toString();
                groups[fieldValue] = groups[fieldValue] || [];
                groups[fieldValue].push(i);
                return groups;
            }, Object());
        },
        flatten(items) {
            return items.reduce((is, i) => is.concat(i), []);
        }
    },
    String: {
        padLeft(str, length, padding) {
            let s = str;
            while (s.length < length) {
                s = padding + s;
            }
            return s;
        }
    },
    DOM: {
        parseBooleanAttribute(attributeValue) {
            let value = attributeValue;
            if (typeof attributeValue === "string") {
                value = true;
            }
            return value;
        }
    },
    Object: {
        readValue(object, path) {
            if (!path) {
                return object;
            }
            let recursed = object;
            for (let i = 0, p = path.split("."), len = p.length; i < len; i++) {
                recursed = recursed[p[i]];
            }
            return recursed;
        }
    },
    Math: {
        round(r, n) {
            return Math.round(r / n) * n;
        },
        roundUp(r, n) {
            return Math.ceil(r / n) * n;
        },
        roundDown(r, n) {
            return Math.floor(r / n) * n;
        },
        mod(r, n) {
            const rem = r % n;
            if (rem < 0) {
                return rem + n;
            }
            return rem;
        }
    }
};

var DatePrecision;
(function (DatePrecision) {
    DatePrecision[DatePrecision["Decade"] = 0] = "Decade";
    DatePrecision[DatePrecision["Year"] = 1] = "Year";
    DatePrecision[DatePrecision["Month"] = 2] = "Month";
    DatePrecision[DatePrecision["Date"] = 3] = "Date";
    DatePrecision[DatePrecision["Hour"] = 4] = "Hour";
    DatePrecision[DatePrecision["Minute"] = 5] = "Minute";
})(DatePrecision || (DatePrecision = {}));
const DateUtil = {
    startOf(precision, date, resetAll = false) {
        switch (precision) {
            case DatePrecision.Decade:
                const start = Math.floor(date.getFullYear() / 10) * 10 + 1;
                date.setFullYear(start);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Year:
                date.setMonth(0);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Month:
                date.setDate(1);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Date:
                date.setHours(0);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Hour:
                date.setMinutes(0);
                if (!resetAll) {
                    break;
                }
            // falls through
            case DatePrecision.Minute:
                date.setSeconds(0, 0);
        }
        return date;
    },
    endOf(precision, date) {
        switch (precision) {
            case DatePrecision.Year:
                date.setMonth(12, 0);
            // falls through
            case DatePrecision.Month:
                date.setMonth(date.getMonth() + 1, 0);
            // falls through
            case DatePrecision.Date:
                date.setHours(23, 59, 59, 999);
                break;
            case DatePrecision.Hour:
                date.setMinutes(59, 59, 999);
                break;
            case DatePrecision.Minute:
                date.setSeconds(59, 999);
                break;
        }
        return date;
    },
    equal(precision, a, b) {
        let equal = true;
        switch (precision) {
            case DatePrecision.Minute:
                equal = equal && a.getMinutes() === b.getMinutes();
            // falls through
            case DatePrecision.Hour:
                equal = equal && a.getHours() === b.getHours();
            // falls through
            case DatePrecision.Date:
                equal = equal && a.getDate() === b.getDate();
            // falls through
            case DatePrecision.Month:
                equal = equal && a.getMonth() === b.getMonth();
            // falls through
            case DatePrecision.Year:
                equal = equal && a.getFullYear() === b.getFullYear();
        }
        return equal;
    },
    next(precision, date) {
        return DateUtil.add(precision, date, 1);
    },
    add(precision, date, i) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        switch (precision) {
            case DatePrecision.Decade:
                date.setFullYear(year + i * 10);
                if (date.getMonth() !== month) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Year:
                date.setFullYear(year + i);
                if (date.getMonth() !== month) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Month:
                date.setMonth(month + i);
                if (date.getMonth() !== Util.Math.mod(month + i, 12)) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Date:
                date.setDate(day + i);
                break;
            case DatePrecision.Hour:
                date.setHours(date.getHours() + i);
                break;
            case DatePrecision.Minute:
                date.setMinutes(date.getMinutes() + i);
                break;
        }
        return date;
    },
    previous(precision, date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        switch (precision) {
            case DatePrecision.Decade:
                date.setFullYear(year - 10);
                if (date.getMonth() !== month) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Year:
                date.setFullYear(year - 1);
                if (date.getMonth() !== month) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Month:
                date.setMonth(month - 1);
                if (date.getMonth() !== Util.Math.mod(month - 1, 12)) {
                    date.setDate(0);
                }
                break;
            case DatePrecision.Date:
                date.setDate(day - 1);
                break;
            case DatePrecision.Hour:
                const hours = date.getHours();
                date.setHours(hours - 1);
                if (date.getHours() !== Util.Math.mod(hours - 1, 24)) {
                    date.setHours(hours - 2);
                }
                break;
            case DatePrecision.Minute:
                const minutes = date.getMinutes();
                date.setMinutes(minutes - 1);
        }
        return date;
    },
    clone(date) {
        return new Date(date.getTime());
    }
};

class SuiComponentFactory {
    constructor(_applicationRef, _componentFactoryResolver, _injector) {
        this._applicationRef = _applicationRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
    }
    createComponent(type, providers = []) {
        // Resolve a factory for creating components of type `type`.
        const factory = this._componentFactoryResolver.resolveComponentFactory(type);
        // Resolve and create an injector with the specified providers.
        const injector = ReflectiveInjector.resolveAndCreate(providers, this._injector);
        // Create a component using the previously resolved factory & injector.
        const componentRef = factory.create(injector);
        return componentRef;
    }
    createView(viewContainer, template, context) {
        viewContainer.createEmbeddedView(template, context);
    }
    // Inserts the component into the specified view container.
    attachToView(componentRef, viewContainer) {
        viewContainer.insert(componentRef.hostView, 0);
    }
    // Inserts the component in the root application node.
    attachToApplication(componentRef) {
        this._applicationRef.attachView(componentRef.hostView);
    }
    // Detaches the component from the root application node.
    detachFromApplication(componentRef) {
        this._applicationRef.detachView(componentRef.hostView);
    }
    // Moves the component to the specified DOM element.
    moveToElement(componentRef, element) {
        element.appendChild(componentRef.location.nativeElement);
    }
    // Moves the component to the document body.
    moveToDocumentBody(componentRef) {
        this.moveToElement(componentRef, document.querySelector("body"));
    }
    detachFromDocument(componentRef) {
        const element = componentRef.location.nativeElement;
        // We can't use `element.remove()` due to lack of IE11 support.
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
}
SuiComponentFactory.ɵfac = function SuiComponentFactory_Factory(t) { return new (t || SuiComponentFactory)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver), ɵɵinject(Injector)); };
SuiComponentFactory.ɵprov = ɵɵdefineInjectable({ token: SuiComponentFactory, factory: SuiComponentFactory.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiComponentFactory, [{
        type: Injectable
    }], function () { return [{ type: ApplicationRef }, { type: ComponentFactoryResolver }, { type: Injector }]; }, null); })();

const PositioningPlacement = {
    Auto: "auto",
    TopLeft: "top left",
    Top: "top",
    TopRight: "top right",
    LeftTop: "left top",
    Left: "left",
    LeftBottom: "left bottom",
    BottomLeft: "bottom left",
    Bottom: "bottom",
    BottomRight: "bottom right",
    RightTop: "right top",
    Right: "right",
    RightBottom: "right bottom"
};
function placementToPopper(placement) {
    if (!placement || placement === PositioningPlacement.Auto) {
        return "auto";
    }
    // All placements of the format: `direction alignment`, e.g. `top left`.
    const [direction, alignment] = placement.split(" ");
    // Direction alone covers case of just `top`, `left`, `bottom`, `right`.
    const chosenPlacement = [direction];
    // Add `start` / `end` to placement, depending on alignment direction.
    switch (alignment) {
        case "top":
        case "left":
            chosenPlacement.push("start");
            break;
        case "bottom":
        case "right":
            chosenPlacement.push("end");
            break;
    }
    // Join with hyphen to create Popper compatible placement.
    return chosenPlacement.join("-");
}
function popperToPlacement(popper) {
    if (!popper || popper === "auto") {
        return "auto";
    }
    const [direction, alignment] = popper.split("-");
    const chosenPlacement = [direction];
    switch (direction) {
        case "top":
        case "bottom":
            switch (alignment) {
                case "start":
                    chosenPlacement.push("left");
                    break;
                case "end":
                    chosenPlacement.push("right");
                    break;
            }
            break;
        case "left":
        case "right":
            switch (alignment) {
                case "start":
                    chosenPlacement.push("top");
                    break;
                case "end":
                    chosenPlacement.push("bottom");
                    break;
            }
            break;
    }
    return chosenPlacement.join(" ");
}
class PositioningService {
    constructor(anchor, subject, placement, arrowSelector) {
        this.anchor = anchor;
        this.subject = subject;
        this._placement = placement;
        this._arrowSelector = arrowSelector;
        this.init();
    }
    get placement() {
        return this._placement;
    }
    set placement(placement) {
        this._placement = placement;
        if (this._popper) {
            this._popper.options.placement = placementToPopper(placement);
        }
    }
    set hasArrow(hasArrow) {
        this._hasArrow = hasArrow;
    }
    get actualPlacement() {
        if (!this._popperState) {
            return PositioningPlacement.Auto;
        }
        return popperToPlacement(this._popperState.placement);
    }
    get state() {
        return this._popperState;
    }
    init() {
        const modifiers = {
            computeStyle: {
                gpuAcceleration: false
            },
            preventOverflow: {
                escapeWithReference: true,
                boundariesElement: document.body
            },
            arrow: {
                element: this._arrowSelector
            },
            offset: {
                fn: (data) => {
                    if (this._hasArrow) {
                        const offsets = this.calculateOffsets();
                        data.offsets.popper.left += offsets.left;
                        data.offsets.popper.top += offsets.top;
                    }
                    return data;
                }
            }
        };
        if (!this._arrowSelector) {
            delete modifiers.arrow;
        }
        this._popper = new Popper(this.anchor.nativeElement, this.subject.nativeElement, {
            placement: placementToPopper(this._placement),
            modifiers,
            onCreate: initial => this._popperState = initial,
            onUpdate: update => this._popperState = update
        });
    }
    update() {
        this._popper.update();
    }
    destroy() {
        this._popper.destroy();
    }
    calculateOffsets() {
        let left = 0;
        let top = 0;
        // To support correct positioning for all popup sizes we should calculate offset using em
        const fontSize = parseFloat(window.getComputedStyle(this.subject.nativeElement).getPropertyValue("font-size"));
        // The Semantic UI popup arrow width and height are 0.71428571em and the margin from the popup edge is 1em
        const arrowCenter = (0.71428571 / 2 + 1) * fontSize;
        if (this.anchor.nativeElement.offsetWidth <= arrowCenter * 2) {
            const anchorCenterWidth = this.anchor.nativeElement.offsetWidth / 2;
            if (this._placement === PositioningPlacement.TopLeft || this._placement === PositioningPlacement.BottomLeft) {
                left = anchorCenterWidth - arrowCenter;
            }
            if (this._placement === PositioningPlacement.TopRight || this._placement === PositioningPlacement.BottomRight) {
                left = arrowCenter - anchorCenterWidth;
            }
        }
        if (this.anchor.nativeElement.offsetHeight <= arrowCenter * 2) {
            const anchorCenterHeight = this.anchor.nativeElement.offsetHeight / 2;
            if (this._placement === PositioningPlacement.LeftTop || this._placement === PositioningPlacement.RightTop) {
                top = anchorCenterHeight - arrowCenter;
            }
            if (this._placement === PositioningPlacement.LeftBottom || this._placement === PositioningPlacement.RightBottom) {
                top = arrowCenter - anchorCenterHeight;
            }
        }
        return { top, left, width: 0, height: 0 };
    }
}

class SuiUtilityModule {
}
SuiUtilityModule.ɵmod = ɵɵdefineNgModule({ type: SuiUtilityModule });
SuiUtilityModule.ɵinj = ɵɵdefineInjector({ factory: function SuiUtilityModule_Factory(t) { return new (t || SuiUtilityModule)(); }, providers: [
        SuiComponentFactory
    ], imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiUtilityModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiUtilityModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                providers: [
                    SuiComponentFactory
                ]
            }]
    }], null, null); })();

const _c0$3 = ["checkbox"];
const _c1$1 = ["*"];
class SuiCheckbox {
    constructor() {
        this.isChecked = false;
        this.onCheckChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    get checkedAttribute() {
        return this.isChecked ? "" : undefined;
    }
    get isDisabledAttribute() {
        return this.isDisabled ? "disabled" : undefined;
    }
    onMouseDown(e) {
        e.preventDefault();
    }
    onClick() {
        if (!this.isDisabled && !this.isReadonly) {
            this.toggle();
            this.focusCheckbox();
        }
    }
    onFocusOut() {
        this.onTouched.emit();
    }
    toggle() {
        this.isChecked = !this.isChecked;
        this.onCheckChange.emit(this.isChecked);
    }
    writeValue(value) {
        this.isChecked = value;
    }
    focusCheckbox() {
        this._checkboxElement.nativeElement.focus();
    }
}
SuiCheckbox.ɵfac = function SuiCheckbox_Factory(t) { return new (t || SuiCheckbox)(); };
SuiCheckbox.ɵcmp = ɵɵdefineComponent({ type: SuiCheckbox, selectors: [["sui-checkbox"]], viewQuery: function SuiCheckbox_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._checkboxElement = _t.first);
    } }, hostVars: 8, hostBindings: function SuiCheckbox_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mousedown", function SuiCheckbox_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("click", function SuiCheckbox_click_HostBindingHandler($event) { return ctx.onClick(); })("focusout", function SuiCheckbox_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
    } if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("checkbox", ctx.hasClasses)("checked", ctx.isChecked)("read-only", ctx.isReadonly);
    } }, inputs: { name: "name", isDisabled: "isDisabled", isReadonly: "isReadonly" }, outputs: { onCheckChange: "checkChange", onTouched: "touched" }, exportAs: ["suiCheckbox"], ngContentSelectors: _c1$1, decls: 4, vars: 4, consts: [["type", "checkbox", 1, "hidden", 3, "ngModel", "ngModelChange"], ["checkbox", ""]], template: function SuiCheckbox_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "input", 0, 1);
        ɵɵlistener("ngModelChange", function SuiCheckbox_Template_input_ngModelChange_0_listener($event) { return ctx.isChecked = $event; });
        ɵɵelementEnd();
        ɵɵelementStart(2, "label");
        ɵɵprojection(3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngModel", ctx.isChecked);
        ɵɵattribute("name", ctx.name)("checked", ctx.checkedAttribute)("disabled", ctx.isDisabledAttribute);
    } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCheckbox, [{
        type: Component,
        args: [{
                selector: "sui-checkbox",
                exportAs: "suiCheckbox",
                template: `
<input class="hidden"
       type="checkbox"
       [attr.name]="name"
       [attr.checked]="checkedAttribute"
       [attr.disabled]="isDisabledAttribute"
       [(ngModel)]="isChecked"
       #checkbox>
<label>
    <ng-content></ng-content>
</label>
`
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.checkbox"]
        }], name: [{
            type: Input
        }], isChecked: [{
            type: HostBinding,
            args: ["class.checked"]
        }], onCheckChange: [{
            type: Output,
            args: ["checkChange"]
        }], onTouched: [{
            type: Output,
            args: ["touched"]
        }], isDisabled: [{
            type: Input
        }], isReadonly: [{
            type: HostBinding,
            args: ["class.read-only"]
        }, {
            type: Input
        }], _checkboxElement: [{
            type: ViewChild,
            args: ["checkbox", { static: true }]
        }], onMouseDown: [{
            type: HostListener,
            args: ["mousedown", ["$event"]]
        }], onClick: [{
            type: HostListener,
            args: ["click"]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout"]
        }] }); })();
class SuiCheckboxValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiCheckboxValueAccessor.ɵfac = function SuiCheckboxValueAccessor_Factory(t) { return new (t || SuiCheckboxValueAccessor)(ɵɵdirectiveInject(SuiCheckbox)); };
SuiCheckboxValueAccessor.ɵdir = ɵɵdefineDirective({ type: SuiCheckboxValueAccessor, selectors: [["sui-checkbox"]], hostBindings: function SuiCheckboxValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("checkChange", function SuiCheckboxValueAccessor_checkChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiCheckboxValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [ɵɵProvidersFeature([customValueAccessorFactory(SuiCheckboxValueAccessor)]), ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCheckboxValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-checkbox",
                host: {
                    "(checkChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiCheckboxValueAccessor)]
            }]
    }], function () { return [{ type: SuiCheckbox }]; }, null); })();

const _c0$4 = ["radio"];
const _c1$2 = ["*"];
class SuiRadio {
    constructor() {
        this.isChecked = false;
        this.onCurrentValueChange = new EventEmitter();
        this.onTouched = new EventEmitter();
        this.isDisabled = false;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    get checkedAttribute() {
        return this.isChecked ? "" : undefined;
    }
    get isDisabledAttribute() {
        return this.isDisabled ? "disabled" : undefined;
    }
    onMouseDown(e) {
        e.preventDefault();
    }
    onClick() {
        if (!this.isDisabled && !this.isReadonly) {
            this.currentValue = this.value;
            this.onCurrentValueChange.emit(this.currentValue);
            this.update();
            this.focusRadio();
        }
    }
    onFocusOut() {
        this.onTouched.emit();
    }
    update() {
        this.isChecked = this.currentValue === this.value;
    }
    writeValue(value) {
        this.currentValue = value;
        this.update();
    }
    focusRadio() {
        this._radioElement.nativeElement.focus();
    }
}
SuiRadio.ɵfac = function SuiRadio_Factory(t) { return new (t || SuiRadio)(); };
SuiRadio.ɵcmp = ɵɵdefineComponent({ type: SuiRadio, selectors: [["sui-radio-button"]], viewQuery: function SuiRadio_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$4, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._radioElement = _t.first);
    } }, hostVars: 10, hostBindings: function SuiRadio_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mousedown", function SuiRadio_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("click", function SuiRadio_click_HostBindingHandler($event) { return ctx.onClick(); })("focusout", function SuiRadio_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
    } if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("radio", ctx.hasClasses)("checkbox", ctx.hasClasses)("checked", ctx.isChecked)("read-only", ctx.isReadonly);
    } }, inputs: { name: "name", value: "value", isDisabled: "isDisabled", isReadonly: "isReadonly" }, outputs: { onCurrentValueChange: "currentValueChange", onTouched: "touched" }, ngContentSelectors: _c1$2, decls: 4, vars: 4, consts: [["type", "checkbox", 1, "hidden", 3, "ngModel"], ["radio", ""]], template: function SuiRadio_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "input", 0, 1);
        ɵɵlistener("ngModel", function SuiRadio_Template_input_ngModel_0_listener($event) { return ctx.currentValue = ctx.value; });
        ɵɵelementEnd();
        ɵɵelementStart(2, "label");
        ɵɵprojection(3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngModel", ctx.isChecked);
        ɵɵattribute("name", ctx.name)("checked", ctx.checkedAttribute)("disabled", ctx.isDisabledAttribute);
    } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiRadio, [{
        type: Component,
        args: [{
                selector: "sui-radio-button",
                template: `
<input class="hidden"
       type="checkbox"
       [attr.name]="name"
       [attr.checked]="checkedAttribute"
       [attr.disabled]="isDisabledAttribute"
       [ngModel]="isChecked"
       (ngModel)="currentValue = value"
       #radio>
<label>
    <ng-content></ng-content>
</label>
`
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.radio"]
        }, {
            type: HostBinding,
            args: ["class.checkbox"]
        }], name: [{
            type: Input
        }], value: [{
            type: Input
        }], isChecked: [{
            type: HostBinding,
            args: ["class.checked"]
        }], onCurrentValueChange: [{
            type: Output,
            args: ["currentValueChange"]
        }], onTouched: [{
            type: Output,
            args: ["touched"]
        }], isDisabled: [{
            type: Input
        }], isReadonly: [{
            type: HostBinding,
            args: ["class.read-only"]
        }, {
            type: Input
        }], _radioElement: [{
            type: ViewChild,
            args: ["radio", { static: true }]
        }], onMouseDown: [{
            type: HostListener,
            args: ["mousedown", ["$event"]]
        }], onClick: [{
            type: HostListener,
            args: ["click"]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout"]
        }] }); })();
class SuiRadioValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiRadioValueAccessor.ɵfac = function SuiRadioValueAccessor_Factory(t) { return new (t || SuiRadioValueAccessor)(ɵɵdirectiveInject(SuiRadio)); };
SuiRadioValueAccessor.ɵdir = ɵɵdefineDirective({ type: SuiRadioValueAccessor, selectors: [["sui-radio-button"]], hostBindings: function SuiRadioValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("currentValueChange", function SuiRadioValueAccessor_currentValueChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiRadioValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [ɵɵProvidersFeature([customValueAccessorFactory(SuiRadioValueAccessor)]), ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiRadioValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-radio-button",
                host: {
                    "(currentValueChange)": "onChange($event)",
                    "(touched)": "onTouched()"
                },
                providers: [customValueAccessorFactory(SuiRadioValueAccessor)]
            }]
    }], function () { return [{ type: SuiRadio }]; }, null); })();

class SuiRadioManager {
    constructor(element) {
        this.element = element;
        this.isNested = false;
        this._radioSubs = [];
    }
    ngAfterContentInit() {
        this.updateNesting();
        this._subManagers.changes.subscribe(() => this.updateNesting());
        this.updateRadios();
        this._renderedRadios.changes.subscribe(() => this.updateRadios());
    }
    updateNesting() {
        this._subManagers
            .filter(m => m !== this)
            .forEach(m => m.isNested = true);
    }
    updateRadios() {
        this._radioSubs.forEach(s => s.unsubscribe());
        this._radioSubs = [];
        const groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
        Object
            .keys(groups)
            .map(k => groups[k])
            .forEach(g => g
            .forEach(r => this._radioSubs
            .push(r.onCurrentValueChange
            .subscribe((v) => {
            if (!this.isNested) {
                g.forEach(radio => radio.writeValue(v));
            }
        }))));
    }
}
SuiRadioManager.ɵfac = function SuiRadioManager_Factory(t) { return new (t || SuiRadioManager)(ɵɵdirectiveInject(ElementRef)); };
SuiRadioManager.ɵdir = ɵɵdefineDirective({ type: SuiRadioManager, selectors: [["form", 3, "ngForm", "", 3, "ngForm", ""], ["ngForm"], ["", "ngForm", ""]], contentQueries: function SuiRadioManager_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuiRadioManager, true);
        ɵɵcontentQuery(dirIndex, SuiRadio, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._subManagers = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._renderedRadios = _t);
    } } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiRadioManager, [{
        type: Directive,
        args: [{
                selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
            }]
    }], function () { return [{ type: ElementRef }]; }, { _subManagers: [{
            type: ContentChildren,
            args: [SuiRadioManager, { descendants: true }]
        }], _renderedRadios: [{
            type: ContentChildren,
            args: [SuiRadio, { descendants: true }]
        }] }); })();

class SuiCheckboxModule {
}
SuiCheckboxModule.ɵmod = ɵɵdefineNgModule({ type: SuiCheckboxModule });
SuiCheckboxModule.ɵinj = ɵɵdefineInjector({ factory: function SuiCheckboxModule_Factory(t) { return new (t || SuiCheckboxModule)(); }, imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiCheckboxModule, { declarations: [SuiCheckbox,
        SuiCheckboxValueAccessor,
        SuiRadio,
        SuiRadioValueAccessor,
        SuiRadioManager], imports: [CommonModule,
        FormsModule], exports: [SuiCheckbox,
        SuiCheckboxValueAccessor,
        SuiRadio,
        SuiRadioValueAccessor,
        SuiRadioManager] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCheckboxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    SuiCheckbox,
                    SuiCheckboxValueAccessor,
                    SuiRadio,
                    SuiRadioValueAccessor,
                    SuiRadioManager
                ],
                exports: [
                    SuiCheckbox,
                    SuiCheckboxValueAccessor,
                    SuiRadio,
                    SuiRadioValueAccessor,
                    SuiRadioManager
                ]
            }]
    }], null, null); })();

var CalendarMode;
(function (CalendarMode) {
    CalendarMode[CalendarMode["DateOnly"] = 0] = "DateOnly";
    CalendarMode[CalendarMode["TimeOnly"] = 1] = "TimeOnly";
    CalendarMode[CalendarMode["Both"] = 2] = "Both";
})(CalendarMode || (CalendarMode = {}));
class CalendarService {
    constructor(config, localeValues) {
        this.localeValues = localeValues;
        this.onManualUpdate = () => { };
        this.config = config;
        this.currentDate = new Date();
        this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
        this.onDateChange = new EventEmitter();
        this.reset();
    }
    get config() {
        return this._config;
    }
    set config(config) {
        this._config = config;
        config.updateBounds(this._selectedDate || this.currentDate);
    }
    get inFinalView() {
        return this.currentView === this.config.mappings.finalView;
    }
    get selectedDate() {
        return this._selectedDate;
    }
    set selectedDate(date) {
        if (date) {
            this._selectedDate = DateUtil.clone(date);
            this.currentDate = DateUtil.clone(date);
        }
        else {
            this._selectedDate = undefined;
        }
        this.config.updateBounds(this._selectedDate || this.currentDate);
        this.onManualUpdate();
    }
    get minDate() {
        if (this._minDate && this.config.dateMinBound) {
            return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
        }
        return this._minDate || this.config.dateMinBound;
    }
    set minDate(min) {
        this._minDate = min;
    }
    get maxDate() {
        if (this._maxDate && this.config.dateMaxBound) {
            return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
        }
        return this._maxDate || this.config.dateMaxBound;
    }
    set maxDate(max) {
        this._maxDate = max;
    }
    get firstDayOfWeek() {
        return this._firstDayOfWeek;
    }
    set firstDayOfWeek(firstDayOfWeek) {
        if (firstDayOfWeek != undefined) {
            this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
        }
    }
    reset() {
        this.currentView = this.config.mappings.finalView;
        if (!this._selectedDate) {
            let current = this.currentDate.getTime();
            if (this._minDate) {
                current = Math.max(current, this._minDate.getTime());
            }
            if (this._maxDate) {
                current = Math.min(current, this._maxDate.getTime());
            }
            this.currentDate = new Date(current);
            this.config.updateBounds(this.currentDate);
            this.currentView = this.config.mappings.initialView;
        }
    }
    changeDate(date, fromView) {
        this.currentDate = date;
        if (fromView === this.config.mappings.finalView) {
            this.selectedDate = date;
            return this.onDateChange.emit(date);
        }
        this.updateView(this.config.mappings.changed, fromView);
    }
    zoomOut(fromView) {
        this.updateView(this.config.mappings.zoom, fromView);
    }
    updateView(mappings, fromView) {
        const mapping = mappings.get(fromView);
        if (mapping == undefined) {
            throw new Error("Unknown view type.");
        }
        this.currentView = mapping;
    }
}

class CalendarItem {
    constructor(date) {
        this.date = date;
    }
}
class SuiCalendarItem {
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
        this.hasFocus = false;
        this.onFocussed = new EventEmitter();
    }
    get isSelectable() {
        return this.item.isSelectable;
    }
    get isActive() {
        return this.item.isActive;
    }
    get isToday() {
        return this.item.isToday;
    }
    onMouseMove() {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.onFocussed.emit(this.hasFocus);
        }
    }
    onMouseLeave() {
        this.hasFocus = false;
        this.onFocussed.emit(this.hasFocus);
    }
}
SuiCalendarItem.ɵfac = function SuiCalendarItem_Factory(t) { return new (t || SuiCalendarItem)(ɵɵdirectiveInject(ChangeDetectorRef)); };
SuiCalendarItem.ɵdir = ɵɵdefineDirective({ type: SuiCalendarItem, selectors: [["", "calendarItem", ""]], hostVars: 8, hostBindings: function SuiCalendarItem_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mousemove", function SuiCalendarItem_mousemove_HostBindingHandler($event) { return ctx.onMouseMove(); })("mouseleave", function SuiCalendarItem_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); });
    } if (rf & 2) {
        ɵɵclassProp("disabled", ctx.isSelectable)("active", ctx.isActive)("today", ctx.isToday)("focus", ctx.hasFocus);
    } }, inputs: { item: ["calendarItem", "item"] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCalendarItem, [{
        type: Directive,
        args: [{
                selector: "[calendarItem]"
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { item: [{
            type: Input,
            args: ["calendarItem"]
        }], isSelectable: [{
            type: HostBinding,
            args: ["class.disabled"]
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }], isToday: [{
            type: HostBinding,
            args: ["class.today"]
        }], hasFocus: [{
            type: HostBinding,
            args: ["class.focus"]
        }], onMouseMove: [{
            type: HostListener,
            args: ["mousemove"]
        }], onMouseLeave: [{
            type: HostListener,
            args: ["mouseleave"]
        }] }); })();

class DateComparer {
    constructor(precision, isSmallest) {
        this._precision = precision;
        this._isSmallest = isSmallest;
    }
    equal(a, b) {
        if (this._precision === DatePrecision.Minute) {
            return !!b &&
                DateUtil.equal(DatePrecision.Hour, b, a) &&
                Util.Math.roundDown(b.getMinutes(), 5) === Util.Math.roundDown(a.getMinutes(), 5);
        }
        return !!b && DateUtil.equal(this._precision, a, b);
    }
    lessThan(a, b) {
        if (this._isSmallest) {
            return !b || (b >= a);
        }
        return !b || (DateUtil.endOf(this._precision, DateUtil.clone(b)) >= a);
    }
    greaterThan(a, b) {
        if (this._isSmallest) {
            return !b || (b <= a);
        }
        return !b || (DateUtil.startOf(this._precision, DateUtil.clone(b)) <= a);
    }
    between(date, left, right) {
        return this.greaterThan(date, left) && this.lessThan(date, right);
    }
}

class CalendarRange {
    constructor(start, dates, items, grouped, comparer) {
        this.start = start;
        this.dates = dates;
        this.items = items;
        this.groupedItems = grouped;
        this._comparer = comparer;
    }
    get inRange() {
        return this.items.filter(i => !i.isOutsideRange);
    }
    find(item) {
        return this.items.find(i => this._comparer.equal(i.date, item.date));
    }
    findIndex(item) {
        if (!item) {
            return -1;
        }
        return this.items.findIndex(i => this._comparer.equal(i.date, item.date));
    }
    containsDate(date) {
        return !!this.inRange.find(i => this._comparer.equal(i.date, date));
    }
}
class CalendarRangeService {
    constructor(interval, rows, columns) {
        this.interval = interval;
        this.marginal = interval + 1;
        this.rows = rows;
        this.columns = columns;
    }
    get dateComparer() {
        return new DateComparer(this.marginal, this.service.inFinalView);
    }
    get length() {
        return this.rows * this.columns;
    }
    get canMoveNext() {
        const firstItem = this.next.inRange[0];
        if (firstItem && this.service.maxDate) {
            return firstItem.date <= this.service.maxDate;
        }
        return true;
    }
    get canMovePrevious() {
        const lastItem = this.previous.inRange.slice(-1).pop();
        if (lastItem && this.service.minDate) {
            return lastItem.date >= this.service.minDate;
        }
        return true;
    }
    loadService(service) {
        this.service = service;
        this.refresh();
    }
    refresh() {
        this.current = this.calcRange(this.service.currentDate);
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    move(forwards) {
        if (forwards) {
            return this.moveNext();
        }
        return this.movePrevious();
    }
    moveNext() {
        DateUtil.next(this.interval, this.service.currentDate);
        this.previous = this.current;
        this.current = this.next;
        this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    movePrevious() {
        DateUtil.previous(this.interval, this.service.currentDate);
        this.next = this.current;
        this.current = this.previous;
        this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
    }
    calc(forwards) {
        if (forwards) {
            return this.next;
        }
        return this.previous;
    }
    calcRange(startDate) {
        const start = this.calcStart(startDate);
        if (this.service.inFinalView) {
            DateUtil.startOf(this.marginal, start, true);
        }
        const dates = this.calcDates(start);
        const items = this.calcItems(dates, startDate);
        return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
    }
    calcStart(date) {
        return DateUtil.startOf(this.interval, DateUtil.clone(date));
    }
    calcDates(rangeStart) {
        return Util.Array
            .range(this.length)
            .map(i => DateUtil.add(this.marginal, DateUtil.clone(rangeStart), i));
    }
    calcItems(dateRange, baseDate) {
        return dateRange.map(date => {
            const item = new CalendarItem(date);
            item.isDisabled = !this.dateComparer.between(item.date, this.service.minDate, this.service.maxDate);
            item.isActive = this.dateComparer.equal(item.date, this.service.selectedDate);
            item.isToday = this.dateComparer.equal(item.date, new Date());
            item.isSelectable = item.isDisabled;
            this.configureItem(item, baseDate);
            return item;
        });
    }
}

var CalendarViewType;
(function (CalendarViewType) {
    CalendarViewType[CalendarViewType["Year"] = 0] = "Year";
    CalendarViewType[CalendarViewType["Month"] = 1] = "Month";
    CalendarViewType[CalendarViewType["Date"] = 2] = "Date";
    CalendarViewType[CalendarViewType["Hour"] = 3] = "Hour";
    CalendarViewType[CalendarViewType["Minute"] = 4] = "Minute";
})(CalendarViewType || (CalendarViewType = {}));
class CalendarView {
    constructor(renderer, viewType, ranges) {
        this._type = viewType;
        this.ranges = ranges;
        this._documentKeyDownListener = renderer.listen("document", "keydown", (e) => this.onDocumentKeyDown(e));
    }
    set service(service) {
        this._service = service;
        this.ranges.loadService(service);
        this.service.onManualUpdate = () => {
            this.ranges.refresh();
            delete this._highlightedItem;
            this.autoHighlight();
        };
    }
    get service() {
        return this._service;
    }
    get currentDate() {
        return this.service.currentDate;
    }
    get selectedDate() {
        return this.service.selectedDate;
    }
    // Template Methods
    setDate(item) {
        this.service.changeDate(item.date, this._type);
    }
    zoomOut() {
        this.service.zoomOut(this._type);
    }
    // Keyboard Control
    ngAfterViewInit() {
        this._renderedItems.changes.subscribe(() => this.onRenderedItemsChanged());
        this.onRenderedItemsChanged();
    }
    onRenderedItemsChanged() {
        this._renderedItems.forEach(i => i.onFocussed.subscribe((hasFocus) => {
            if (hasFocus) {
                this.highlightItem(i.item);
            }
        }));
        this.autoHighlight();
        this.highlightItem(this._highlightedItem);
    }
    autoHighlight() {
        let date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
        if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
            date = this._highlightedItem.date;
        }
        const initiallyHighlighted = this.ranges.current.items.find(i => this.ranges.dateComparer.equal(i.date, date));
        if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
            this._highlightedItem = initiallyHighlighted;
        }
    }
    highlightItem(item) {
        if (item) {
            this._renderedItems.forEach(i => i.hasFocus = false);
            const rendered = this._renderedItems.find(ri => ri.item === item);
            if (rendered && !rendered.hasFocus) {
                rendered.hasFocus = true;
                rendered.changeDetector.detectChanges();
            }
            this._highlightedItem = item;
        }
    }
    onDocumentKeyDown(e) {
        if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
            this.setDate(this._highlightedItem);
            return;
        }
        if (!this._highlightedItem) {
            this.autoHighlight();
        }
        const index = this.ranges.current.findIndex(this._highlightedItem);
        let isMovingForward = true;
        let delta = 0;
        switch (e.keyCode) {
            case KeyCode.Right:
                delta += 1;
                break;
            case KeyCode.Left:
                delta -= 1;
                isMovingForward = false;
                break;
            case KeyCode.Down:
                delta += this.ranges.columns;
                break;
            case KeyCode.Up:
                delta -= this.ranges.columns;
                isMovingForward = false;
                break;
            default:
                return;
        }
        // Stop these keypresses being captured elsewhere.
        e.preventDefault();
        let nextItem = this.ranges.current.items[index + delta];
        if (nextItem && nextItem.isDisabled) {
            return;
        }
        if (nextItem && !nextItem.isOutsideRange) {
            return this.highlightItem(nextItem);
        }
        if (nextItem && nextItem.isOutsideRange) {
            if (index + delta >= this.ranges.current.inRange.length) {
                isMovingForward = true;
            }
        }
        if (!nextItem) {
            let adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
            const nextItems = this.ranges.calc(isMovingForward).inRange;
            if (isMovingForward) {
                adjustedIndex -= this.ranges.current.inRange.length;
            }
            else {
                adjustedIndex += nextItems.length;
            }
            nextItem = nextItems[adjustedIndex + delta];
            if (nextItem.isDisabled) {
                return;
            }
        }
        this.ranges.move(isMovingForward);
        this._highlightedItem = this.ranges.current.find(nextItem);
    }
    ngOnDestroy() {
        this._documentKeyDownListener();
    }
}
CalendarView.ɵfac = function CalendarView_Factory(t) { return new (t || CalendarView)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(CalendarViewType), ɵɵdirectiveInject(CalendarRangeService)); };
CalendarView.ɵdir = ɵɵdefineDirective({ type: CalendarView, viewQuery: function CalendarView_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(SuiCalendarItem, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._renderedItems = _t);
    } }, inputs: { service: "service" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalendarView, [{
        type: Directive
    }], function () { return [{ type: Renderer2 }, { type: CalendarViewType }, { type: CalendarRangeService }]; }, { _renderedItems: [{
            type: ViewChildren,
            args: [SuiCalendarItem]
        }], service: [{
            type: Input
        }] }); })();

class CalendarMappings {
}
class DateMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Date;
        this.finalView = CalendarViewType.Date;
        this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Date],
            [CalendarViewType.Date, CalendarViewType.Date]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Date],
            [CalendarViewType.Month, CalendarViewType.Year],
            [CalendarViewType.Date, CalendarViewType.Month]
        ]);
    }
}
class TimeMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Hour;
        this.finalView = CalendarViewType.Minute;
        this.changed = new Map([
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Minute]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Hour]
        ]);
    }
}
class DatetimeMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Date;
        this.finalView = CalendarViewType.Minute;
        this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Date],
            [CalendarViewType.Date, CalendarViewType.Hour],
            [CalendarViewType.Hour, CalendarViewType.Minute],
            [CalendarViewType.Minute, CalendarViewType.Minute]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Date],
            [CalendarViewType.Month, CalendarViewType.Year],
            [CalendarViewType.Date, CalendarViewType.Month],
            [CalendarViewType.Hour, CalendarViewType.Date],
            [CalendarViewType.Minute, CalendarViewType.Hour]
        ]);
    }
}
class MonthMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Month;
        this.finalView = CalendarViewType.Month;
        this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Month]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Month],
            [CalendarViewType.Month, CalendarViewType.Year]
        ]);
    }
}
class YearMappings extends CalendarMappings {
    constructor() {
        super();
        this.initialView = CalendarViewType.Year;
        this.finalView = CalendarViewType.Year;
        this.changed = new Map([
            [CalendarViewType.Year, CalendarViewType.Year]
        ]);
        this.zoom = new Map([
            [CalendarViewType.Year, CalendarViewType.Year]
        ]);
    }
}

class CalendarConfig {
    constructor(mode, precision, mappings, fallback) {
        this.mode = mode;
        this.precision = precision;
        this.mappings = mappings;
        this.fallback = fallback;
    }
    updateBounds(providedDate) {
        this.dateMinBound = DateUtil.startOf(DatePrecision.Year, new Date(), true);
        this.dateMinBound.setFullYear(0);
    }
}
class DateConfigBase extends CalendarConfig {
    constructor(precision, mappings, fallback) {
        super(CalendarMode.DateOnly, precision, mappings, fallback);
    }
}
class YearConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Year, new YearMappings(), "number");
    }
}
class MonthConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Month, new MonthMappings(), "month");
    }
}
class DateConfig extends DateConfigBase {
    constructor() {
        super(DatePrecision.Date, new DateMappings(), "date");
    }
}
class DatetimeConfig extends CalendarConfig {
    constructor() {
        super(CalendarMode.Both, DatePrecision.Minute, new DatetimeMappings(), "datetime-local");
    }
}
class TimeConfig extends CalendarConfig {
    constructor() {
        super(CalendarMode.TimeOnly, DatePrecision.Minute, new TimeMappings(), "time");
    }
    updateBounds(providedDate) {
        this.dateMaxBound = DateUtil.endOf(DatePrecision.Date, DateUtil.clone(providedDate));
        this.dateMinBound = DateUtil.previous(DatePrecision.Date, DateUtil.clone(this.dateMaxBound));
    }
}

function buildLocalizeFn(values, defaultType, indexCallback) {
    return (dirtyIndex, { type } = { type: defaultType }) => {
        const index = indexCallback ? indexCallback(dirtyIndex) : dirtyIndex;
        return type ? values[type][index] : "";
    };
}
function buildLocalizeArrayFn(values, defaultType) {
    return ({ type } = { type: defaultType }) => type ? values[type] : [];
}
function buildMatchFn(patterns, defaultType) {
    return (dirtyString, { type } = { type: defaultType }) => {
        if (type) {
            return dirtyString.match(`^(${patterns[type].join("|")})`);
        }
        // tslint:disable-next-line:no-null-keyword
        return null;
    };
}
function buildParseFn(patterns, defaultType) {
    return ([, result], { type } = { type: defaultType }) => type ? (patterns[type] || patterns[defaultType])
        .map(p => new RegExp(`^${p}`))
        .findIndex(pattern => pattern.test(result))
        : -1;
}
class DateFnsParser {
    constructor(locale) {
        this._weekStartsOn = locale.firstDayOfWeek;
        const weekdayValues = {
            long: locale.weekdays,
            short: locale.weekdaysShort,
            narrow: locale.weekdaysNarrow
        };
        const monthValues = {
            long: locale.months,
            short: locale.monthsShort
        };
        const timeOfDayValues = {
            long: locale.timesOfDay,
            uppercase: locale.timesOfDayUppercase,
            lowercase: locale.timesOfDayLowercase
        };
        const timeOfDayMatchValues = {
            long: locale.timesOfDay,
            short: locale.timesOfDayUppercase.concat(locale.timesOfDayLowercase)
        };
        this._locale = defaultLocale;
        this._locale.localize = Object.assign(Object.assign({}, this._locale.localize), {
            weekday: buildLocalizeFn(weekdayValues, "long"),
            weekdays: buildLocalizeArrayFn(weekdayValues, "long"),
            month: buildLocalizeFn(monthValues, "long"),
            months: buildLocalizeArrayFn(monthValues, "long"),
            timeOfDay: buildLocalizeFn(timeOfDayValues, "long", (hours) => {
                return hours / 12 >= 1 ? 1 : 0;
            }),
            timesOfDay: buildLocalizeArrayFn(timeOfDayValues, "long")
        });
        this._locale.match = Object.assign(Object.assign({}, this._locale.match), {
            weekdays: buildMatchFn(weekdayValues, "long"),
            weekday: buildParseFn(weekdayValues, "long"),
            months: buildMatchFn(monthValues, "long"),
            month: buildParseFn(monthValues, "long"),
            timesOfDay: buildMatchFn(timeOfDayMatchValues, "long"),
            timeOfDay: buildParseFn(timeOfDayMatchValues, "long")
        });
    }
    get _config() {
        return {
            weekStartsOn: this._weekStartsOn,
            locale: this._locale
        };
    }
    format(d, f) {
        return format(d, f, this._config);
    }
    parse(dS, f, bD) {
        return parse(dS, f, bD, this._config);
    }
}

class DateParser {
    constructor(format, locale) {
        this._format = format;
        this._parser = new DateFnsParser(locale);
    }
    format(date) {
        return this._parser.format(date, this._format);
    }
    parse(dateString, baseDate = new Date()) {
        return this._parser.parse(dateString, this._format, baseDate);
    }
}
class InternalDateParser extends DateParser {
    constructor(mode, locale) {
        const internalFormats = {
            time: "HH:mm",
            datetime: "YYYY-MM-DDTHH:mm",
            date: "YYYY-MM-DD",
            month: "YYYY-MM",
            year: "YYYY"
        };
        super(internalFormats[mode], locale);
    }
}

const _c0$5 = ["*"];
class SuiCalendarViewTitle {
    constructor() {
        this.onZoomOut = new EventEmitter();
    }
}
SuiCalendarViewTitle.ɵfac = function SuiCalendarViewTitle_Factory(t) { return new (t || SuiCalendarViewTitle)(); };
SuiCalendarViewTitle.ɵcmp = ɵɵdefineComponent({ type: SuiCalendarViewTitle, selectors: [["sui-calendar-view-title"]], inputs: { ranges: "ranges" }, outputs: { onZoomOut: "zoomOut" }, ngContentSelectors: _c0$5, decls: 6, vars: 4, consts: [[1, "title", "link", 3, "click"], [1, "prev", "link", 3, "click"], [1, "chevron", "left", "icon"], [1, "next", "link", 3, "click"], [1, "chevron", "right", "icon"]], template: function SuiCalendarViewTitle_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span", 0);
        ɵɵlistener("click", function SuiCalendarViewTitle_Template_span_click_0_listener($event) { return ctx.onZoomOut.emit(); });
        ɵɵprojection(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "span", 1);
        ɵɵlistener("click", function SuiCalendarViewTitle_Template_span_click_2_listener($event) { return ctx.ranges == null ? null : ctx.ranges.movePrevious(); });
        ɵɵelement(3, "i", 2);
        ɵɵelementEnd();
        ɵɵelementStart(4, "span", 3);
        ɵɵlistener("click", function SuiCalendarViewTitle_Template_span_click_4_listener($event) { return ctx.ranges == null ? null : ctx.ranges.moveNext(); });
        ɵɵelement(5, "i", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵclassProp("disabled", !(ctx.ranges == null ? null : ctx.ranges.canMovePrevious));
        ɵɵadvance(2);
        ɵɵclassProp("disabled", !(ctx.ranges == null ? null : ctx.ranges.canMoveNext));
    } }, styles: [".title.link[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCalendarViewTitle, [{
        type: Component,
        args: [{
                selector: "sui-calendar-view-title",
                template: `
<span class="title link" (click)="onZoomOut.emit()">
    <ng-content></ng-content>
</span>
<span class="prev link" [class.disabled]="!ranges?.canMovePrevious" (click)="ranges?.movePrevious()">
    <i class="chevron left icon"></i>
</span>
<span class="next link" [class.disabled]="!ranges?.canMoveNext" (click)="ranges?.moveNext()">
    <i class="chevron right icon"></i>
</span>
`,
                styles: [`
.title.link {
    display: inline-block;
    margin-left: 2rem;
    margin-right: 2rem;
}
`]
            }]
    }], function () { return []; }, { ranges: [{
            type: Input
        }], onZoomOut: [{
            type: Output,
            args: ["zoomOut"]
        }] }); })();

function SuiDatepicker_sui_calendar_year_view_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-calendar-year-view", 2);
} if (rf & 2) {
    const ctx_r32 = ɵɵnextContext();
    ɵɵproperty("service", ctx_r32.service);
} }
function SuiDatepicker_sui_calendar_month_view_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-calendar-month-view", 2);
} if (rf & 2) {
    const ctx_r33 = ɵɵnextContext();
    ɵɵproperty("service", ctx_r33.service);
} }
function SuiDatepicker_sui_calendar_date_view_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-calendar-date-view", 2);
} if (rf & 2) {
    const ctx_r34 = ɵɵnextContext();
    ɵɵproperty("service", ctx_r34.service);
} }
function SuiDatepicker_sui_calendar_hour_view_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-calendar-hour-view", 2);
} if (rf & 2) {
    const ctx_r35 = ɵɵnextContext();
    ɵɵproperty("service", ctx_r35.service);
} }
function SuiDatepicker_sui_calendar_minute_view_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-calendar-minute-view", 2);
} if (rf & 2) {
    const ctx_r36 = ɵɵnextContext();
    ɵɵproperty("service", ctx_r36.service);
} }
const DatepickerMode = {
    Year: "year",
    Month: "month",
    Date: "date",
    Datetime: "datetime",
    Time: "time"
};
class SuiDatepicker {
    constructor(localizationService) {
        this.service = new CalendarService(new DatetimeConfig(), localizationService.get().datepicker);
        this.hasClasses = true;
    }
    onMouseDown(e) {
        e.preventDefault();
    }
}
SuiDatepicker.ɵfac = function SuiDatepicker_Factory(t) { return new (t || SuiDatepicker)(ɵɵdirectiveInject(SuiLocalizationService)); };
SuiDatepicker.ɵcmp = ɵɵdefineComponent({ type: SuiDatepicker, selectors: [["sui-datepicker"]], hostVars: 6, hostBindings: function SuiDatepicker_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mousedown", function SuiDatepicker_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("active", ctx.hasClasses)("calendar", ctx.hasClasses);
    } }, decls: 6, vars: 6, consts: [[3, "ngSwitch"], [3, "service", 4, "ngSwitchCase"], [3, "service"]], template: function SuiDatepicker_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0, 0);
        ɵɵtemplate(1, SuiDatepicker_sui_calendar_year_view_1_Template, 1, 1, "sui-calendar-year-view", 1);
        ɵɵtemplate(2, SuiDatepicker_sui_calendar_month_view_2_Template, 1, 1, "sui-calendar-month-view", 1);
        ɵɵtemplate(3, SuiDatepicker_sui_calendar_date_view_3_Template, 1, 1, "sui-calendar-date-view", 1);
        ɵɵtemplate(4, SuiDatepicker_sui_calendar_hour_view_4_Template, 1, 1, "sui-calendar-hour-view", 1);
        ɵɵtemplate(5, SuiDatepicker_sui_calendar_minute_view_5_Template, 1, 1, "sui-calendar-minute-view", 1);
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵproperty("ngSwitch", ctx.service.currentView);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", 0);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", 1);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", 2);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", 3);
        ɵɵadvance(1);
        ɵɵproperty("ngSwitchCase", 4);
    } }, styles: ["[_nghost-%COMP%] {\n    user-select: none;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDatepicker, [{
        type: Component,
        args: [{
                selector: "sui-datepicker",
                template: `
<ng-container [ngSwitch]="service.currentView">
    <sui-calendar-year-view [service]="service" *ngSwitchCase="0"></sui-calendar-year-view>
    <sui-calendar-month-view [service]="service" *ngSwitchCase="1"></sui-calendar-month-view>    
    <sui-calendar-date-view [service]="service" *ngSwitchCase="2"></sui-calendar-date-view>    
    <sui-calendar-hour-view [service]="service" *ngSwitchCase="3"></sui-calendar-hour-view>    
    <sui-calendar-minute-view [service]="service" *ngSwitchCase="4"></sui-calendar-minute-view>    
</ng-container>
`,
                styles: [`
:host {
    user-select: none;
}
`]
            }]
    }], function () { return [{ type: SuiLocalizationService }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.active"]
        }, {
            type: HostBinding,
            args: ["class.calendar"]
        }], onMouseDown: [{
            type: HostListener,
            args: ["mousedown", ["$event"]]
        }] }); })();

const PopupTrigger = {
    Hover: "hover",
    Click: "click",
    OutsideClick: "outsideClick",
    Focus: "focus",
    Manual: "manual"
};
class PopupConfig {
    constructor(defaults = {}) {
        this.placement = PositioningPlacement.TopLeft;
        this.trigger = PopupTrigger.Hover;
        this.isInverted = false;
        this.delay = 0;
        this.isBasic = false;
        this.transition = "scale";
        this.transitionDuration = 200;
        this.isFlowing = false;
        this.isInline = false;
        Object.assign(this, defaults);
    }
}

function SuiPopupArrow_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 2);
} if (rf & 2) {
    const ctx_r42 = ɵɵnextContext();
    ɵɵattribute("direction", ctx_r42.direction);
} }
function SuiPopupArrow_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 3);
} if (rf & 2) {
    const ctx_r43 = ɵɵnextContext();
    ɵɵattribute("direction", ctx_r43.direction)("alignment", ctx_r43.alignment);
} }
class SuiPopupArrow {
    get direction() {
        if (this.placement) {
            return this.placement.split(" ").shift();
        }
    }
    get alignment() {
        if (this.placement) {
            const alignment = this.placement.split(" ").pop();
            if (alignment === this.direction) {
                return "center";
            }
            return alignment;
        }
    }
}
SuiPopupArrow.ɵfac = function SuiPopupArrow_Factory(t) { return new (t || SuiPopupArrow)(); };
SuiPopupArrow.ɵcmp = ɵɵdefineComponent({ type: SuiPopupArrow, selectors: [["sui-popup-arrow"]], hostVars: 2, hostBindings: function SuiPopupArrow_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("inverted", ctx.inverted);
    } }, inputs: { placement: "placement", inverted: "inverted" }, decls: 2, vars: 2, consts: [["class", "dynamic arrow", 4, "ngIf"], ["class", "static arrow", 4, "ngIf"], [1, "dynamic", "arrow"], [1, "static", "arrow"]], template: function SuiPopupArrow_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SuiPopupArrow_div_0_Template, 1, 1, "div", 0);
        ɵɵtemplate(1, SuiPopupArrow_div_1_Template, 1, 2, "div", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.alignment == "center");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.alignment != "center");
    } }, directives: [NgIf], styles: [".arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 0.71428571em;\n    height: 0.71428571em;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    z-index: 2;\n}\n\n.inverted[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    background: #1b1c1d;\n}\n\n.arrow[direction=\"top\"][_ngcontent-%COMP%] {\n    bottom: -0.30714286em;\n    box-shadow: 1px 1px 0 0 #bababc;\n}\n\n.arrow[direction=\"left\"][_ngcontent-%COMP%] {\n    right: -0.30714286em;\n    box-shadow: 1px -1px 1px 0 #bababc;\n}\n\n.arrow[direction=\"bottom\"][_ngcontent-%COMP%] {\n    top: -0.30714286em;\n    box-shadow: -1px -1px 0 0 #bababc;\n}\n\n.arrow[direction=\"right\"][_ngcontent-%COMP%] {\n    left: -0.30714286em;\n    box-shadow: -1px 1px 1px 0 #bababc;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"left\"][_ngcontent-%COMP%], .static.arrow[direction=\"top\"][alignment=\"left\"][_ngcontent-%COMP%] {\n    left: 1em;\n    right: auto;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"top\"][_ngcontent-%COMP%], .static.arrow[direction=\"right\"][alignment=\"top\"][_ngcontent-%COMP%] {\n    top: 1em;\n    bottom: auto;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"right\"][_ngcontent-%COMP%], .static.arrow[direction=\"top\"][alignment=\"right\"][_ngcontent-%COMP%] {\n    left: auto;\n    right: 1em;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"bottom\"][_ngcontent-%COMP%], .static.arrow[direction=\"right\"][alignment=\"bottom\"][_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 1em;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiPopupArrow, [{
        type: Component,
        args: [{
                selector: "sui-popup-arrow",
                template: `
<div class="dynamic arrow" [attr.direction]="direction" *ngIf="alignment == 'center'"></div>
<div class="static arrow" [attr.direction]="direction" [attr.alignment]="alignment" *ngIf="alignment != 'center'"></div>
`,
                styles: [`
.arrow {
    position: absolute;
    width: 0.71428571em;
    height: 0.71428571em;
    background: #ffffff;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    z-index: 2;
}

:host.inverted .arrow {
    background: #1b1c1d;
}

.arrow[direction="top"] {
    bottom: -0.30714286em;
    box-shadow: 1px 1px 0 0 #bababc;
}

.arrow[direction="left"] {
    right: -0.30714286em;
    box-shadow: 1px -1px 1px 0 #bababc;
}

.arrow[direction="bottom"] {
    top: -0.30714286em;
    box-shadow: -1px -1px 0 0 #bababc;
}

.arrow[direction="right"] {
    left: -0.30714286em;
    box-shadow: -1px 1px 1px 0 #bababc;
}

.static.arrow[direction="bottom"][alignment="left"],
.static.arrow[direction="top"][alignment="left"] {
    left: 1em;
    right: auto;
}

.static.arrow[direction="left"][alignment="top"],
.static.arrow[direction="right"][alignment="top"] {
    top: 1em;
    bottom: auto;
}

.static.arrow[direction="bottom"][alignment="right"],
.static.arrow[direction="top"][alignment="right"] {
    left: auto;
    right: 1em;
}

.static.arrow[direction="left"][alignment="bottom"],
.static.arrow[direction="right"][alignment="bottom"] {
    top: auto;
    bottom: 1em;
}
`]
            }]
    }], null, { placement: [{
            type: Input
        }], inverted: [{
            type: HostBinding,
            args: ["class.inverted"]
        }, {
            type: Input
        }] }); })();

const _c0$6 = ["container"];
const _c1$3 = ["templateSibling"];
function SuiPopup_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r41.config.header);
} }
function SuiPopup_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SuiPopup_ng_container_2_div_1_Template, 2, 1, "div", 5);
    ɵɵelementStart(2, "div", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r38 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r38.config.header);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r38.config.text);
} }
function SuiPopup_sui_popup_arrow_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "sui-popup-arrow", 8);
} if (rf & 2) {
    const ctx_r40 = ɵɵnextContext();
    ɵɵproperty("placement", ctx_r40.config.placement)("inverted", ctx_r40.config.isInverted);
} }
class SuiPopup {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.transitionController = new TransitionController(false);
        this._isOpen = false;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.tabindex = 0;
    }
    get isOpen() {
        return this._isOpen;
    }
    set anchor(anchor) {
        this._anchor = anchor;
    }
    // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
    get direction() {
        // We need to set direction attribute before popper init to allow correct positioning
        return this.config.placement.split(" ").shift();
    }
    // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
    get alignment() {
        return this.config.placement.split(" ").pop();
    }
    get dynamicClasses() {
        const classes = {};
        if (this.direction) {
            classes[this.direction] = true;
        }
        if (this.alignment) {
            classes[this.alignment] = true;
        }
        if (this.config.isInverted) {
            classes.inverted = true;
        }
        if (this.config.isBasic) {
            classes.basic = true;
        }
        if (this.config.isFlowing) {
            classes.flowing = true;
        }
        if (this.config.size) {
            classes[this.config.size] = true;
        }
        if (this.config.width) {
            classes[this.config.width] = true;
        }
        return classes;
    }
    open() {
        // Only attempt to open if currently closed.
        if (!this.isOpen) {
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Create positioning service after a brief delay.
            setTimeout(() => {
                this.positioningService = new PositioningService(this._anchor, this._container.element, this.config.placement, ".dynamic.arrow");
                this.positioningService.hasArrow = !this.config.isBasic;
            });
            // Cancel all other transitions, and initiate the opening transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.In, () => {
                // Focus any element with [autofocus] attribute.
                const autoFocus = this.elementRef.nativeElement.querySelector("[autofocus]");
                if (autoFocus) {
                    // Autofocus after the browser has had time to process other event handlers.
                    setTimeout(() => autoFocus.focus(), 10);
                    // Try to focus again when the modal has opened so that autofocus works in IE11.
                    setTimeout(() => autoFocus.focus(), this.config.transitionDuration);
                }
            }));
            // Finally, set the popup to be open.
            this._isOpen = true;
            this.onOpen.emit();
        }
    }
    toggle() {
        if (!this.isOpen) {
            return this.open();
        }
        return this.close();
    }
    close() {
        // Only attempt to close if currently open.
        if (this.isOpen) {
            // Cancel all other transitions, and initiate the closing transition.
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, TransitionDirection.Out));
            // Cancel the closing timer.
            clearTimeout(this.closingTimeout);
            // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
            this.closingTimeout = window.setTimeout(() => this.onClose.emit(), this.config.transitionDuration);
            // Finally, set the popup to be closed.
            this._isOpen = false;
        }
    }
    onClick(event) {
        // Makes sense here, as the popup shouldn't be attached to any DOM element.
        event.stopPropagation();
    }
}
SuiPopup.ɵfac = function SuiPopup_Factory(t) { return new (t || SuiPopup)(ɵɵdirectiveInject(ElementRef)); };
SuiPopup.ɵcmp = ɵɵdefineComponent({ type: SuiPopup, selectors: [["sui-popup"]], viewQuery: function SuiPopup_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$6, true, ViewContainerRef);
        ɵɵstaticViewQuery(_c1$3, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._container = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
    } }, hostVars: 1, hostBindings: function SuiPopup_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiPopup_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", ctx.tabindex);
    } }, decls: 6, vars: 5, consts: [[1, "ui", "popup", 3, "ngClass", "suiTransition"], ["container", ""], [4, "ngIf"], ["templateSibling", ""], [3, "placement", "inverted", 4, "ngIf"], ["class", "header", 4, "ngIf"], [1, "content"], [1, "header"], [3, "placement", "inverted"]], template: function SuiPopup_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵtemplate(2, SuiPopup_ng_container_2_Template, 4, 2, "ng-container", 2);
        ɵɵelement(3, "div", null, 3);
        ɵɵtemplate(5, SuiPopup_sui_popup_arrow_5_Template, 1, 2, "sui-popup-arrow", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.dynamicClasses)("suiTransition", ctx.transitionController);
        ɵɵattribute("direction", ctx.direction);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.config.template && (!!ctx.config.header || !!ctx.config.text));
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.config.isBasic);
    } }, directives: [NgClass, SuiTransition, NgIf, SuiPopupArrow], styles: [".ui.popup[_ngcontent-%COMP%] {\n    \n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup[_ngcontent-%COMP%] {\n    \n    pointer-events: none;\n}\n\n.ui.popup[_ngcontent-%COMP%]::before {\n    \n    display: none;\n}\n\n\n.ui.popup[direction=\"top\"][_ngcontent-%COMP%], .ui.popup[direction=\"bottom\"][_ngcontent-%COMP%] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n\n.ui.popup[direction=\"left\"][_ngcontent-%COMP%], .ui.popup[direction=\"right\"][_ngcontent-%COMP%] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiPopup, [{
        type: Component,
        args: [{
                selector: "sui-popup",
                template: `
<div class="ui popup"
     [ngClass]="dynamicClasses"
     [suiTransition]="transitionController"
     [attr.direction]="direction"
     #container>

    <ng-container *ngIf="!config.template && (!!config.header || !!config.text)">
        <div class="header" *ngIf="config.header">{{ config.header }}</div>
        <div class="content">{{ config.text }}</div>
    </ng-container>
    <div #templateSibling></div>

    <sui-popup-arrow *ngIf="!config.isBasic"
                     [placement]="config.placement"
                     [inverted]="config.isInverted"></sui-popup-arrow>
</div>
`,
                styles: [`
.ui.popup {
    /* Autofit popup to the contents. */
    right: auto;
    margin: 0;
}

.ui.animating.popup {
    /* When the popup is animating, it may not initially be in the correct position.
       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.
       Setting pointer-events to none while animating fixes this bug. */
    pointer-events: none;
}

.ui.popup::before {
    /* Hide the Semantic UI CSS arrow. */
    display: none;
}

/* Offset popup by 0.75em above and below when placed 'vertically'. */
.ui.popup[direction="top"],
.ui.popup[direction="bottom"] {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
}

/* Offset popup by 0.75em either side when placed 'horizontally'. */
.ui.popup[direction="left"],
.ui.popup[direction="right"] {
    margin-left: 0.75em;
    margin-right: 0.75em;
}
`]
            }]
    }], function () { return [{ type: ElementRef }]; }, { _container: [{
            type: ViewChild,
            args: ["container", { read: ViewContainerRef, static: true }]
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }], tabindex: [{
            type: HostBinding,
            args: ["attr.tabindex"]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();

class SuiPopupController {
    constructor(_renderer, _element, _componentFactory, config) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Generate a new SuiPopup component and attach it to the application view.
        this._componentRef = this._componentFactory.createComponent(SuiPopup);
        // Configure popup with provided config.
        this.popup.config = config;
        // When the popup is closed (onClose fires on animation complete),
        this.popup.onClose.subscribe(() => this.cleanup());
    }
    // Returns generated popup instance.
    get popup() {
        // Use non-null assertion as we only access this when a popup exists.
        return this._componentRef.instance;
    }
    configure(config) {
        if (config) {
            Object.assign(this.popup.config, config);
        }
    }
    openDelayed() {
        // Cancel the opening timer.
        clearTimeout(this._openingTimeout);
        // Start the popup opening after the specified delay interval.
        this._openingTimeout = window.setTimeout(() => this.open(), this.popup.config.delay);
    }
    open() {
        // Attach the generated component to the current application.
        this._componentFactory.attachToApplication(this._componentRef);
        if (this.popup.config.isInline) {
            this._componentFactory.moveToElement(this._componentRef, this._element.nativeElement.parentElement);
        }
        else {
            // Move the generated element to the body to avoid any positioning issues.
            this._componentFactory.moveToDocumentBody(this._componentRef);
        }
        // Attach a reference to the anchor element. We do it here because IE11 loves to complain.
        this.popup.anchor = this._element;
        // Add a listener to the document body to handle closing.
        this._documentListener = this._renderer
            .listen("document", "click", (e) => this.onDocumentClick(e));
        // Start popup open transition.
        this.popup.open();
        // Call lifecyle hook
        const lifecycle = this.popupOnOpen;
        if (lifecycle) {
            lifecycle.call(this);
        }
    }
    close() {
        // Cancel the opening timer to stop the popup opening after close has been called.
        clearTimeout(this._openingTimeout);
        if (this._componentRef) {
            // Start popup close transition.
            this.popup.close();
        }
        // Call lifecyle hook
        const lifecycle = this.popupOnClose;
        if (lifecycle) {
            lifecycle.call(this);
        }
    }
    toggleDelayed() {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.openDelayed();
        }
        // O'wise, close it.
        return this.close();
    }
    toggle() {
        // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
        if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
            return this.open();
        }
        // O'wise, close it.
        return this.close();
    }
    onMouseEnter() {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.openDelayed();
        }
    }
    onMouseLeave() {
        if (this.popup.config.trigger === PopupTrigger.Hover) {
            this.close();
        }
    }
    onClick() {
        if (this.popup.config.trigger === PopupTrigger.Click ||
            this.popup.config.trigger === PopupTrigger.OutsideClick) {
            // Repeated clicks require a toggle, rather than just opening the popup each time.
            this.toggleDelayed();
        }
        else if (this.popup.config.trigger === PopupTrigger.Focus &&
            (!this._componentRef || (this._componentRef && !this.popup.isOpen))) {
            // Repeated clicks with a focus trigger requires an open (as focus isn't ever lost on repeated click).
            this.openDelayed();
        }
    }
    onDocumentClick(e) {
        // If the popup trigger is outside click,
        if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
            const target = e.target;
            // Close the popup if the click is outside of the popup element.
            if (!this._element.nativeElement.contains(target)) {
                this.close();
            }
        }
    }
    onFocusIn() {
        if (this.popup.config.trigger === PopupTrigger.Focus) {
            this.openDelayed();
        }
    }
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget) &&
            !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
            this.popup.config.trigger === PopupTrigger.Focus) {
            this.close();
        }
    }
    cleanup() {
        clearTimeout(this._openingTimeout);
        if (this._componentRef.instance && this._componentRef.instance.positioningService) {
            this._componentRef.instance.positioningService.destroy();
        }
        this._componentFactory.detachFromApplication(this._componentRef);
        if (this._documentListener) {
            this._documentListener();
        }
    }
    ngOnDestroy() {
        this.cleanup();
    }
}
SuiPopupController.ɵfac = function SuiPopupController_Factory(t) { return new (t || SuiPopupController)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SuiComponentFactory), ɵɵdirectiveInject(PopupConfig)); };
SuiPopupController.ɵdir = ɵɵdefineDirective({ type: SuiPopupController, hostBindings: function SuiPopupController_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function SuiPopupController_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function SuiPopupController_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); })("click", function SuiPopupController_click_HostBindingHandler($event) { return ctx.onClick(); })("focusin", function SuiPopupController_focusin_HostBindingHandler($event) { return ctx.onFocusIn(); })("focusout", function SuiPopupController_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); });
    } } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiPopupController, [{
        type: Directive
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: SuiComponentFactory }, { type: PopupConfig }]; }, { onMouseEnter: [{
            type: HostListener,
            args: ["mouseenter"]
        }], onMouseLeave: [{
            type: HostListener,
            args: ["mouseleave"]
        }], onClick: [{
            type: HostListener,
            args: ["click"]
        }], onFocusIn: [{
            type: HostListener,
            args: ["focusin"]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout", ["$event"]]
        }] }); })();

class SuiPopupComponentController extends SuiPopupController {
    constructor(renderer, element, componentFactory, _component, config) {
        super(renderer, element, componentFactory, config);
        this._component = _component;
    }
    get componentInstance() {
        if (this._contentComponentRef) {
            return this._contentComponentRef.instance;
        }
    }
    open() {
        if (!this._contentComponentRef) {
            this._contentComponentRef = this._componentFactory.createComponent(this._component);
            this._componentFactory.attachToView(this._contentComponentRef, this.popup.templateSibling);
        }
        super.open();
    }
    cleanup() {
        super.cleanup();
        if (this._contentComponentRef) {
            this._contentComponentRef.destroy();
            this._contentComponentRef = undefined;
        }
    }
}

const templateRef = TemplateRef;
class TemplatePopupConfig extends PopupConfig {
}
class SuiPopupTemplateController extends SuiPopupController {
    constructor(renderer, element, componentFactory, config) {
        super(renderer, element, componentFactory, config);
    }
    configure(config) {
        super.configure(config);
        if (config) {
            this.template = config.template;
            this.context = config.context;
        }
    }
    open() {
        // If there is a template, inject it into the view.
        if (this.template) {
            this.popup.templateSibling.clear();
            this._componentFactory.createView(this.popup.templateSibling, this.template, {
                $implicit: this.popup,
                context: this.context
            });
        }
        super.open();
    }
}

class SuiPopupConfig extends PopupConfig {
    constructor() {
        // We use an empty constructor to ensure Angular DI works correctly.
        super();
    }
}
SuiPopupConfig.ɵfac = function SuiPopupConfig_Factory(t) { return new (t || SuiPopupConfig)(); };
SuiPopupConfig.ɵprov = ɵɵdefineInjectable({ token: SuiPopupConfig, factory: SuiPopupConfig.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiPopupConfig, [{
        type: Injectable
    }], function () { return []; }, null); })();

const templateRef$1 = TemplateRef;
class SuiPopupDirective extends SuiPopupTemplateController {
    constructor(renderer, element, componentFactory, popupDefaults) {
        super(renderer, element, componentFactory, new PopupConfig(popupDefaults));
    }
    set popupHeader(header) {
        this.popup.config.header = header;
    }
    set popupText(text) {
        this.popup.config.text = text;
    }
    set popupInverted(inverted) {
        this.popup.config.isInverted = Util.DOM.parseBooleanAttribute(inverted);
    }
    set popupBasic(basic) {
        this.popup.config.isBasic = Util.DOM.parseBooleanAttribute(basic);
    }
    set popupInline(inline) {
        this.popup.config.isInline = Util.DOM.parseBooleanAttribute(inline);
    }
    set popupFlowing(flowing) {
        this.popup.config.isFlowing = Util.DOM.parseBooleanAttribute(flowing);
    }
    set popupTransition(transition) {
        this.popup.config.transition = transition;
    }
    set popupTransitionDuration(duration) {
        this.popup.config.transitionDuration = duration;
    }
    set popupPlacement(placement) {
        this.popup.config.placement = placement;
    }
    set popupWidth(width) {
        this.popup.config.width = width;
    }
    set popupSize(size) {
        this.popup.config.size = size;
    }
    set popupDelay(delay) {
        this.popup.config.delay = delay;
    }
    get popupTrigger() {
        return this.popup.config.trigger;
    }
    set popupTrigger(trigger) {
        this.popup.config.trigger = trigger;
    }
    set popupTemplate(template) {
        this.template = template;
    }
    set popupTemplateContext(context) {
        this.context = context;
    }
    set popupConfig(config) {
        this.configure(config);
    }
}
SuiPopupDirective.ɵfac = function SuiPopupDirective_Factory(t) { return new (t || SuiPopupDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SuiComponentFactory), ɵɵdirectiveInject(SuiPopupConfig)); };
SuiPopupDirective.ɵdir = ɵɵdefineDirective({ type: SuiPopupDirective, selectors: [["", "suiPopup", ""]], inputs: { popupHeader: "popupHeader", popupText: "popupText", popupInverted: "popupInverted", popupBasic: "popupBasic", popupInline: "popupInline", popupFlowing: "popupFlowing", popupTransition: "popupTransition", popupTransitionDuration: "popupTransitionDuration", popupPlacement: "popupPlacement", popupWidth: "popupWidth", popupSize: "popupSize", popupDelay: "popupDelay", popupTrigger: "popupTrigger", popupTemplate: "popupTemplate", popupTemplateContext: "popupTemplateContext", popupConfig: "popupConfig" }, exportAs: ["suiPopup"], features: [ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiPopupDirective, [{
        type: Directive,
        args: [{
                selector: "[suiPopup]",
                exportAs: "suiPopup"
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: SuiComponentFactory }, { type: SuiPopupConfig }]; }, { popupHeader: [{
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

class SuiPopupModule {
}
SuiPopupModule.ɵmod = ɵɵdefineNgModule({ type: SuiPopupModule });
SuiPopupModule.ɵinj = ɵɵdefineInjector({ factory: function SuiPopupModule_Factory(t) { return new (t || SuiPopupModule)(); }, providers: [
        SuiPopupConfig
    ], imports: [[
            CommonModule,
            SuiTransitionModule,
            SuiUtilityModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiPopupModule, { declarations: [SuiPopupDirective,
        SuiPopupArrow,
        SuiPopup], imports: [CommonModule,
        SuiTransitionModule,
        SuiUtilityModule], exports: [SuiPopupDirective,
        SuiPopup] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiPopupModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule,
                    SuiUtilityModule
                ],
                declarations: [
                    SuiPopupDirective,
                    SuiPopupArrow,
                    SuiPopup
                ],
                exports: [
                    SuiPopupDirective,
                    SuiPopup
                ],
                providers: [
                    SuiPopupConfig
                ],
                entryComponents: [
                    SuiPopup
                ]
            }]
    }], null, null); })();

class SuiDatepickerDirective extends SuiPopupComponentController {
    constructor(renderer, element, componentFactory, localizationService) {
        super(renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
            trigger: PopupTrigger.Focus,
            placement: PositioningPlacement.BottomLeft,
            transition: "scale",
            transitionDuration: 200
        }));
        this.localizationService = localizationService;
        // This ensures the popup is drawn correctly (i.e. no border).
        this._renderer.addClass(this.popup.elementRef.nativeElement, "ui");
        this._renderer.addClass(this.popup.elementRef.nativeElement, "calendar");
        this.onLocaleUpdate();
        this.localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
        this.onSelectedDateChange = new EventEmitter();
        this.onValidatorChange = new EventEmitter();
        this.mode = DatepickerMode.Datetime;
    }
    get selectedDate() {
        return this._selectedDate;
    }
    set selectedDate(date) {
        this._selectedDate = date;
        this.onSelectedDateChange.emit(date);
    }
    get mode() {
        return this._mode;
    }
    set mode(mode) {
        this._mode = mode || DatepickerMode.Datetime;
        switch (this._mode) {
            case DatepickerMode.Year:
                this.config = new YearConfig();
                break;
            case DatepickerMode.Month:
                this.config = new MonthConfig();
                break;
            case DatepickerMode.Date:
            default:
                this.config = new DateConfig();
                break;
            case DatepickerMode.Datetime:
                this.config = new DatetimeConfig();
                break;
            case DatepickerMode.Time:
                this.config = new TimeConfig();
                break;
        }
        this.writeValue(this.selectedDate);
    }
    get localeValues() {
        return this.localizationService.override(this._localeValues, this.localeOverrides);
    }
    set placement(placement) {
        this.popup.config.placement = placement;
    }
    set transition(transition) {
        this.popup.config.transition = transition;
    }
    set transitionDuration(duration) {
        this.popup.config.transitionDuration = duration;
    }
    popupOnOpen() {
        if (this.componentInstance) {
            this.componentInstance.service.config = this.config;
            this.componentInstance.service.localeValues = this.localeValues;
            this.componentInstance.service.currentDate = this.initialDate || new Date();
            this.componentInstance.service.selectedDate = this.selectedDate;
            this.componentInstance.service.maxDate = this.maxDate;
            this.componentInstance.service.minDate = this.minDate;
            if (this.firstDayOfWeek != undefined) {
                this.componentInstance.service.firstDayOfWeek = this.firstDayOfWeek;
            }
            this.componentInstance.service.reset();
            this.componentInstance.service.onDateChange.subscribe((d) => {
                this.selectedDate = d;
                this.close();
            });
        }
    }
    ngOnChanges({ maxDate, minDate, mode }) {
        if (maxDate || minDate || mode) {
            this.onValidatorChange.emit();
        }
    }
    onLocaleUpdate() {
        this._localeValues = this.localizationService.get().datepicker;
    }
    validate(c) {
        const value = c.value;
        if (value != undefined) {
            // We post process the min & max date because sometimes this puts the date outside of the allowed range.
            if (this.minDate && value < this.minDate) {
                return { suiMinDate: { required: this.minDate, actual: value } };
            }
            if (this.maxDate && value > this.maxDate) {
                return { suiMaxDate: { required: this.maxDate, actual: value } };
            }
        }
        // Angular expects null
        // tslint:disable-next-line:no-null-keyword
        return null;
    }
    writeValue(value) {
        this.selectedDate = value;
        if (this.componentInstance) {
            this.componentInstance.service.selectedDate = value;
        }
    }
    onKeyDown(e) {
        if (e.keyCode === KeyCode.Escape) {
            this.close();
        }
    }
}
SuiDatepickerDirective.ɵfac = function SuiDatepickerDirective_Factory(t) { return new (t || SuiDatepickerDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SuiComponentFactory), ɵɵdirectiveInject(SuiLocalizationService)); };
SuiDatepickerDirective.ɵdir = ɵɵdefineDirective({ type: SuiDatepickerDirective, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function SuiDatepickerDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { mode: ["pickerMode", "mode"], initialDate: ["pickerInitialDate", "initialDate"], maxDate: ["pickerMaxDate", "maxDate"], minDate: ["pickerMinDate", "minDate"], firstDayOfWeek: ["pickerFirstDayOfWeek", "firstDayOfWeek"], localeOverrides: ["pickerLocaleOverrides", "localeOverrides"], placement: ["pickerPlacement", "placement"], transition: ["pickerTransition", "transition"], transitionDuration: ["pickerTransitionDuration", "transitionDuration"] }, outputs: { onSelectedDateChange: "pickerSelectedDateChange", onValidatorChange: "pickerValidatorChange" }, features: [ɵɵProvidersFeature([customValidatorFactory(SuiDatepickerDirective)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDatepickerDirective, [{
        type: Directive,
        args: [{
                selector: "[suiDatepicker]",
                providers: [customValidatorFactory(SuiDatepickerDirective)]
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: SuiComponentFactory }, { type: SuiLocalizationService }]; }, { mode: [{
            type: Input,
            args: ["pickerMode"]
        }], initialDate: [{
            type: Input,
            args: ["pickerInitialDate"]
        }], maxDate: [{
            type: Input,
            args: ["pickerMaxDate"]
        }], minDate: [{
            type: Input,
            args: ["pickerMinDate"]
        }], firstDayOfWeek: [{
            type: Input,
            args: ["pickerFirstDayOfWeek"]
        }], localeOverrides: [{
            type: Input,
            args: ["pickerLocaleOverrides"]
        }], placement: [{
            type: Input,
            args: ["pickerPlacement"]
        }], transition: [{
            type: Input,
            args: ["pickerTransition"]
        }], transitionDuration: [{
            type: Input,
            args: ["pickerTransitionDuration"]
        }], onSelectedDateChange: [{
            type: Output,
            args: ["pickerSelectedDateChange"]
        }], onValidatorChange: [{
            type: Output,
            args: ["pickerValidatorChange"]
        }], onKeyDown: [{
            type: HostListener,
            args: ["keydown", ["$event"]]
        }] }); })();
class SuiDatepickerDirectiveValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
        this.host = host;
    }
}
SuiDatepickerDirectiveValueAccessor.ɵfac = function SuiDatepickerDirectiveValueAccessor_Factory(t) { return new (t || SuiDatepickerDirectiveValueAccessor)(ɵɵdirectiveInject(SuiDatepickerDirective)); };
SuiDatepickerDirectiveValueAccessor.ɵdir = ɵɵdefineDirective({ type: SuiDatepickerDirectiveValueAccessor, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirectiveValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("pickerSelectedDateChange", function SuiDatepickerDirectiveValueAccessor_pickerSelectedDateChange_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, features: [ɵɵProvidersFeature([customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]), ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDatepickerDirectiveValueAccessor, [{
        type: Directive,
        args: [{
                selector: "[suiDatepicker]",
                host: { "(pickerSelectedDateChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]
            }]
    }], function () { return [{ type: SuiDatepickerDirective }]; }, null); })();
class SuiDatepickerDirectiveValidator extends CustomValidator {
    constructor(host) {
        super(host);
        this.host = host;
    }
}
SuiDatepickerDirectiveValidator.ɵfac = function SuiDatepickerDirectiveValidator_Factory(t) { return new (t || SuiDatepickerDirectiveValidator)(ɵɵdirectiveInject(SuiDatepickerDirective)); };
SuiDatepickerDirectiveValidator.ɵdir = ɵɵdefineDirective({ type: SuiDatepickerDirectiveValidator, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirectiveValidator_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("pickerValidatorChange", function SuiDatepickerDirectiveValidator_pickerValidatorChange_HostBindingHandler($event) { return ctx.onValidatorChange(); });
    } }, features: [ɵɵProvidersFeature([customValidatorFactory(SuiDatepickerDirectiveValidator)]), ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDatepickerDirectiveValidator, [{
        type: Directive,
        args: [{
                selector: "[suiDatepicker]",
                host: { "(pickerValidatorChange)": "onValidatorChange()" },
                providers: [customValidatorFactory(SuiDatepickerDirectiveValidator)]
            }]
    }], function () { return [{ type: SuiDatepickerDirective }]; }, null); })();

const isWebView = isUAWebView__default || isUAWebView;
class SuiDatepickerInputDirective {
    constructor(datepicker, valueAccessor, _renderer, _element, localizationService) {
        this.datepicker = datepicker;
        this.valueAccessor = valueAccessor;
        this._renderer = _renderer;
        this._element = _element;
        this.useNativeOnMobile = true;
        this.fallbackActive = false;
        // Whenever the datepicker value updates, update the input text alongside it.
        this.datepicker.onSelectedDateChange.subscribe(() => this.updateValue(this.selectedDateString));
        localizationService.onLanguageUpdate.subscribe(() => this.updateValue(this.selectedDateString));
    }
    get useNativeOnMobile() {
        return this._useNativeOnMobile;
    }
    set useNativeOnMobile(fallback) {
        this._useNativeOnMobile = fallback;
        const isOnMobile = mobile || tablet || isWebView(navigator.userAgent);
        this.fallbackActive = this.useNativeOnMobile && isOnMobile;
    }
    get fallbackActive() {
        return this._fallbackActive;
    }
    set fallbackActive(active) {
        this._fallbackActive = active;
        // If the fallback is active, then the trigger must be manual so the datepicker never opens.
        this.datepicker.popup.config.trigger = this.fallbackActive ? PopupTrigger.Manual : PopupTrigger.Focus;
        // Update the input value (this will insert the `T` as required).
        this.updateValue(this.selectedDateString);
    }
    get parser() {
        if (this.fallbackActive) {
            return new InternalDateParser(this.datepicker.mode, this.datepicker.localeValues);
        }
        return new DateParser(this.datepicker.localeValues.formats[this.datepicker.mode], this.datepicker.localeValues);
    }
    get selectedDateString() {
        if (this.datepicker.selectedDate) {
            return this.parser.format(this.datepicker.selectedDate);
        }
    }
    get type() {
        if (this.fallbackActive) {
            return this.datepicker.config.fallback;
        }
        return "text";
    }
    get max() {
        if (this.fallbackActive && this.datepicker.maxDate) {
            // Since HTML doesn't use a date object max is somewhat tricky.
            // Our Datepicker will always choose the 1st date on the provided precision,
            // meaning anything below the maxDate will work, hence endOf.
            const max = DateUtil.endOf(this.datepicker.config.precision, DateUtil.clone(this.datepicker.maxDate));
            return this.parser.format(max);
        }
    }
    get min() {
        if (this.fallbackActive && this.datepicker.minDate) {
            // Since HTML doesn't use a date object min is somewhat tricky.
            // We use 1 minute before the next date at the configured precision since
            // our Datepicker picks the first available date at that precision.
            const min = DateUtil.clone(this.datepicker.minDate);
            return this.parser.format(min);
        }
    }
    updateValue(value) {
        // Only update the current value if it is different to what it's being updated to.
        // This is so that the editing position isn't changed when manually typing the date.
        if (!this._lastUpdateTyped) {
            this._renderer.setProperty(this._element.nativeElement, "value", value || "");
        }
        this._lastUpdateTyped = false;
    }
    typeValue(value) {
        this._lastUpdateTyped = true;
        this._currentInputValue = value;
        if (!value) {
            // Delete the selected date if no date was entered manually.
            return this.datepicker.writeValue(undefined);
        }
        const parsed = this.parser.parse(value, this.datepicker.selectedDate);
        if (!isNaN(parsed.getTime()) && value === this.parser.format(parsed)) {
            return this.datepicker.writeValue(parsed);
        }
        return this.datepicker.writeValue(undefined);
    }
    onFocusOut() {
        this.valueAccessor.onTouched();
    }
}
SuiDatepickerInputDirective.ɵfac = function SuiDatepickerInputDirective_Factory(t) { return new (t || SuiDatepickerInputDirective)(ɵɵdirectiveInject(SuiDatepickerDirective, 1), ɵɵdirectiveInject(SuiDatepickerDirectiveValueAccessor, 1), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SuiLocalizationService)); };
SuiDatepickerInputDirective.ɵdir = ɵɵdefineDirective({ type: SuiDatepickerInputDirective, selectors: [["input", "suiDatepicker", ""]], hostVars: 3, hostBindings: function SuiDatepickerInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function SuiDatepickerInputDirective_input_HostBindingHandler($event) { return ctx.typeValue($event.target.value); })("focusout", function SuiDatepickerInputDirective_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
    } if (rf & 2) {
        ɵɵattribute("type", ctx.type)("max", ctx.max)("min", ctx.min);
    } }, inputs: { useNativeOnMobile: ["pickerUseNativeOnMobile", "useNativeOnMobile"] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDatepickerInputDirective, [{
        type: Directive,
        args: [{
                selector: "input[suiDatepicker]"
            }]
    }], function () { return [{ type: SuiDatepickerDirective, decorators: [{
                type: Host
            }] }, { type: SuiDatepickerDirectiveValueAccessor, decorators: [{
                type: Host
            }] }, { type: Renderer2 }, { type: ElementRef }, { type: SuiLocalizationService }]; }, { useNativeOnMobile: [{
            type: Input,
            args: ["pickerUseNativeOnMobile"]
        }], type: [{
            type: HostBinding,
            args: ["attr.type"]
        }], max: [{
            type: HostBinding,
            args: ["attr.max"]
        }], min: [{
            type: HostBinding,
            args: ["attr.min"]
        }], typeValue: [{
            type: HostListener,
            args: ["input", ["$event.target.value"]]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout"]
        }] }); })();

function SuiCalendarDateView_th_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r46 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(day_r46);
} }
function SuiCalendarDateView_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 5);
    ɵɵlistener("click", function SuiCalendarDateView_tr_9_td_1_Template_td_click_0_listener($event) { ɵɵrestoreView(_r51); const item_r49 = ctx.$implicit; const ctx_r50 = ɵɵnextContext(2); return ctx_r50.setDate(item_r49); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    ɵɵproperty("calendarItem", item_r49);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", item_r49.humanReadable, " ");
} }
function SuiCalendarDateView_tr_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, SuiCalendarDateView_tr_9_td_1_Template, 2, 2, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r47 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", group_r47);
} }
class CalendarRangeDateService extends CalendarRangeService {
    calcStart(start) {
        const monthStart = DateUtil.startOf(DatePrecision.Month, DateUtil.clone(start));
        monthStart.setDate((1 - monthStart.getDay() + this.service.firstDayOfWeek - 7) % 7);
        return monthStart;
    }
    configureItem(item, baseDate) {
        item.humanReadable = item.date.getDate().toString();
        item.isOutsideRange = item.date.getMonth() !== baseDate.getMonth();
        item.isSelectable = item.isDisabled;
    }
}
class SuiCalendarDateView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Date, new CalendarRangeDateService(DatePrecision.Month, 6, 7));
    }
    get days() {
        const days = this.service.localeValues.weekdaysNarrow;
        return days.map((d, i) => days[(i + this.service.firstDayOfWeek) % days.length]);
    }
    get date() {
        return new DateParser(this.service.localeValues.formats.month, this.service.localeValues).format(this.currentDate);
    }
}
SuiCalendarDateView.ɵfac = function SuiCalendarDateView_Factory(t) { return new (t || SuiCalendarDateView)(ɵɵdirectiveInject(Renderer2)); };
SuiCalendarDateView.ɵcmp = ɵɵdefineComponent({ type: SuiCalendarDateView, selectors: [["sui-calendar-date-view"]], features: [ɵɵInheritDefinitionFeature], decls: 10, vars: 4, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "seven", "column", "day"], ["colspan", "7"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarDateView_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementStart(1, "thead");
        ɵɵelementStart(2, "tr");
        ɵɵelementStart(3, "th", 1);
        ɵɵelementStart(4, "sui-calendar-view-title", 2);
        ɵɵlistener("zoomOut", function SuiCalendarDateView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "tr");
        ɵɵtemplate(7, SuiCalendarDateView_th_7_Template, 2, 1, "th", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "tbody");
        ɵɵtemplate(9, SuiCalendarDateView_tr_9_Template, 2, 1, "tr", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ranges", ctx.ranges);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.date, " ");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.days);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
    } }, directives: [SuiCalendarViewTitle, NgForOf, SuiCalendarItem], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCalendarDateView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-date-view",
                template: `
<table class="ui celled center aligned unstackable table seven column day">
<thead>
    <tr>
        <th colspan="7">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ date }}
            </sui-calendar-view-title>
        </th>
    </tr>
    <tr>
        <th *ngFor="let day of days">{{ day }}</th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            }]
    }], function () { return [{ type: Renderer2 }]; }, null); })();

function SuiCalendarHourView_thead_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "thead");
    ɵɵelementStart(1, "tr");
    ɵɵelementStart(2, "th", 3);
    ɵɵelementStart(3, "sui-calendar-view-title", 4);
    ɵɵlistener("zoomOut", function SuiCalendarHourView_thead_1_Template_sui_calendar_view_title_zoomOut_3_listener($event) { ɵɵrestoreView(_r55); const ctx_r54 = ɵɵnextContext(); return ctx_r54.zoomOut(); });
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ranges", ctx_r52.ranges);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r52.date, " ");
} }
function SuiCalendarHourView_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵlistener("click", function SuiCalendarHourView_tr_3_td_1_Template_td_click_0_listener($event) { ɵɵrestoreView(_r60); const item_r58 = ctx.$implicit; const ctx_r59 = ɵɵnextContext(2); return ctx_r59.setDate(item_r58); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    ɵɵproperty("calendarItem", item_r58);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", item_r58.humanReadable, " ");
} }
function SuiCalendarHourView_tr_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, SuiCalendarHourView_tr_3_td_1_Template, 2, 2, "td", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r56 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", group_r56);
} }
class CalendarRangeHourService extends CalendarRangeService {
    configureItem(item, baseDate) {
        // Set minutes and seconds to 0
        const customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
        item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    }
}
class SuiCalendarHourView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4));
    }
    get date() {
        return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
    }
}
SuiCalendarHourView.ɵfac = function SuiCalendarHourView_Factory(t) { return new (t || SuiCalendarHourView)(ɵɵdirectiveInject(Renderer2)); };
SuiCalendarHourView.ɵcmp = ɵɵdefineComponent({ type: SuiCalendarHourView, selectors: [["sui-calendar-hour-view"]], features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "four", "column", "hour"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "ranges", "zoomOut"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarHourView_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵtemplate(1, SuiCalendarHourView_thead_1_Template, 5, 2, "thead", 1);
        ɵɵelementStart(2, "tbody");
        ɵɵtemplate(3, SuiCalendarHourView_tr_3_Template, 2, 1, "tr", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.service.config.mode != 1);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
    } }, directives: [NgIf, NgForOf, SuiCalendarViewTitle, SuiCalendarItem], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCalendarHourView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-hour-view",
                template: `
<table class="ui celled center aligned unstackable table four column hour">
<thead *ngIf="service.config.mode != 1">
    <tr>
        <th colspan="4">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ date }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            }]
    }], function () { return [{ type: Renderer2 }]; }, null); })();

function SuiCalendarMinuteView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 5);
    ɵɵlistener("click", function SuiCalendarMinuteView_tr_7_td_1_Template_td_click_0_listener($event) { ɵɵrestoreView(_r66); const item_r64 = ctx.$implicit; const ctx_r65 = ɵɵnextContext(2); return ctx_r65.setDate(item_r64); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r64 = ctx.$implicit;
    ɵɵproperty("calendarItem", item_r64);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", item_r64.humanReadable, " ");
} }
function SuiCalendarMinuteView_tr_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, SuiCalendarMinuteView_tr_7_td_1_Template, 2, 2, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r62 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", group_r62);
} }
class CalendarRangeMinuteService extends CalendarRangeService {
    calcStart(start) {
        return DateUtil.startOf(DatePrecision.Hour, DateUtil.clone(start), true);
    }
    calcDates(start) {
        return Util.Array
            .range(this.length)
            .map(i => DateUtil.add(DatePrecision.Minute, DateUtil.clone(start), i * 5));
    }
    configureItem(item, baseDate) {
        item.humanReadable = new DateParser(this.service.localeValues.formats.time, this.service.localeValues).format(item.date);
        item.isOutsideRange = false;
    }
}
class SuiCalendarMinuteView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Minute, new CalendarRangeMinuteService(DatePrecision.Hour, 4, 3));
    }
    get date() {
        if (this.service.config.mode !== CalendarMode.TimeOnly) {
            // Set minutes and seconds to 0
            const dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
            return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
        }
        else {
            // Set minutes and seconds to 0
            const timeFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
            return new DateParser(timeFormat, this.service.localeValues).format(this.currentDate);
        }
    }
}
SuiCalendarMinuteView.ɵfac = function SuiCalendarMinuteView_Factory(t) { return new (t || SuiCalendarMinuteView)(ɵɵdirectiveInject(Renderer2)); };
SuiCalendarMinuteView.ɵcmp = ɵɵdefineComponent({ type: SuiCalendarMinuteView, selectors: [["sui-calendar-minute-view"]], features: [ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "minute"], ["colspan", "4"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarMinuteView_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementStart(1, "thead");
        ɵɵelementStart(2, "tr");
        ɵɵelementStart(3, "th", 1);
        ɵɵelementStart(4, "sui-calendar-view-title", 2);
        ɵɵlistener("zoomOut", function SuiCalendarMinuteView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "tbody");
        ɵɵtemplate(7, SuiCalendarMinuteView_tr_7_Template, 2, 1, "tr", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ranges", ctx.ranges);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.date, " ");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
    } }, directives: [SuiCalendarViewTitle, NgForOf, SuiCalendarItem], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCalendarMinuteView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-minute-view",
                template: `
<table class="ui celled center aligned unstackable table three column minute">
<thead>
    <tr>
        <th colspan="4">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ date }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            }]
    }], function () { return [{ type: Renderer2 }]; }, null); })();

function SuiCalendarMonthView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 5);
    ɵɵlistener("click", function SuiCalendarMonthView_tr_7_td_1_Template_td_click_0_listener($event) { ɵɵrestoreView(_r72); const item_r70 = ctx.$implicit; const ctx_r71 = ɵɵnextContext(2); return ctx_r71.setDate(item_r70); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r70 = ctx.$implicit;
    ɵɵproperty("calendarItem", item_r70);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", item_r70.humanReadable, " ");
} }
function SuiCalendarMonthView_tr_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, SuiCalendarMonthView_tr_7_td_1_Template, 2, 2, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r68 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", group_r68);
} }
class CalendarRangeMonthService extends CalendarRangeService {
    configureItem(item, baseDate) {
        item.humanReadable = this.service.localeValues.monthsShort[item.date.getMonth()];
        item.isOutsideRange = false;
    }
}
class SuiCalendarMonthView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Month, new CalendarRangeMonthService(DatePrecision.Year, 4, 3));
    }
    get year() {
        return new DateParser(this.service.localeValues.formats.year, this.service.localeValues).format(this.currentDate);
    }
}
SuiCalendarMonthView.ɵfac = function SuiCalendarMonthView_Factory(t) { return new (t || SuiCalendarMonthView)(ɵɵdirectiveInject(Renderer2)); };
SuiCalendarMonthView.ɵcmp = ɵɵdefineComponent({ type: SuiCalendarMonthView, selectors: [["sui-calendar-month-view"]], features: [ɵɵInheritDefinitionFeature], decls: 8, vars: 3, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "month"], ["colspan", "3"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarMonthView_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementStart(1, "thead");
        ɵɵelementStart(2, "tr");
        ɵɵelementStart(3, "th", 1);
        ɵɵelementStart(4, "sui-calendar-view-title", 2);
        ɵɵlistener("zoomOut", function SuiCalendarMonthView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "tbody");
        ɵɵtemplate(7, SuiCalendarMonthView_tr_7_Template, 2, 1, "tr", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ranges", ctx.ranges);
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ctx.year, " ");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
    } }, directives: [SuiCalendarViewTitle, NgForOf, SuiCalendarItem], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCalendarMonthView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-month-view",
                template: `
<table class="ui celled center aligned unstackable table three column month">
<thead>
    <tr>
        <th colspan="3">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ year }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            }]
    }], function () { return [{ type: Renderer2 }]; }, null); })();

function SuiCalendarYearView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 5);
    ɵɵlistener("click", function SuiCalendarYearView_tr_7_td_1_Template_td_click_0_listener($event) { ɵɵrestoreView(_r78); const item_r76 = ctx.$implicit; const ctx_r77 = ɵɵnextContext(2); return ctx_r77.setDate(item_r76); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    ɵɵproperty("calendarItem", item_r76);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", item_r76.humanReadable, " ");
} }
function SuiCalendarYearView_tr_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, SuiCalendarYearView_tr_7_td_1_Template, 2, 2, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r74 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", group_r74);
} }
class CalendarRangeYearService extends CalendarRangeService {
    configureItem(item, baseDate) {
        item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
        item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
    }
}
class SuiCalendarYearView extends CalendarView {
    constructor(renderer) {
        super(renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3));
    }
    get decadeStart() {
        return DateUtil
            .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
            .getFullYear();
    }
    pad(year) {
        return Util.String.padLeft(year.toString(), 4, "0");
    }
}
SuiCalendarYearView.ɵfac = function SuiCalendarYearView_Factory(t) { return new (t || SuiCalendarYearView)(ɵɵdirectiveInject(Renderer2)); };
SuiCalendarYearView.ɵcmp = ɵɵdefineComponent({ type: SuiCalendarYearView, selectors: [["sui-calendar-year-view"]], features: [ɵɵInheritDefinitionFeature], decls: 8, vars: 4, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "year"], ["colspan", "3"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarYearView_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementStart(1, "thead");
        ɵɵelementStart(2, "tr");
        ɵɵelementStart(3, "th", 1);
        ɵɵelementStart(4, "sui-calendar-view-title", 2);
        ɵɵlistener("zoomOut", function SuiCalendarYearView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
        ɵɵtext(5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "tbody");
        ɵɵtemplate(7, SuiCalendarYearView_tr_7_Template, 2, 1, "tr", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ranges", ctx.ranges);
        ɵɵadvance(1);
        ɵɵtextInterpolate2(" ", ctx.pad(ctx.decadeStart), " - ", ctx.pad(ctx.decadeStart + 10), " ");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.ranges.current.groupedItems);
    } }, directives: [SuiCalendarViewTitle, NgForOf, SuiCalendarItem], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiCalendarYearView, [{
        type: Component,
        args: [{
                selector: "sui-calendar-year-view",
                template: `
<table class="ui celled center aligned unstackable table three column year">
<thead>
    <tr>
        <th colspan="3">
            <sui-calendar-view-title [ranges]="ranges" (zoomOut)="zoomOut()">
                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}
            </sui-calendar-view-title>
        </th>
    </tr>
</thead>
<tbody>
    <tr *ngFor="let group of ranges.current.groupedItems">
        <td class="link"
            *ngFor="let item of group"
            [calendarItem]="item"
            (click)="setDate(item)">{{ item.humanReadable }}
        </td>
    </tr>
</tbody>
</table>
`
            }]
    }], function () { return [{ type: Renderer2 }]; }, null); })();

class SuiDatepickerModule {
}
SuiDatepickerModule.ɵmod = ɵɵdefineNgModule({ type: SuiDatepickerModule });
SuiDatepickerModule.ɵinj = ɵɵdefineInjector({ factory: function SuiDatepickerModule_Factory(t) { return new (t || SuiDatepickerModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            SuiPopupModule,
            SuiLocalizationModule,
            SuiUtilityModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiDatepickerModule, { declarations: [SuiCalendarItem,
        SuiCalendarViewTitle,
        SuiCalendarYearView,
        SuiCalendarMonthView,
        SuiCalendarDateView,
        SuiCalendarHourView,
        SuiCalendarMinuteView,
        SuiDatepicker,
        SuiDatepickerDirective,
        SuiDatepickerDirectiveValueAccessor,
        SuiDatepickerDirectiveValidator,
        SuiDatepickerInputDirective], imports: [CommonModule,
        FormsModule,
        SuiPopupModule,
        SuiLocalizationModule,
        SuiUtilityModule], exports: [SuiDatepickerDirective,
        SuiDatepickerDirectiveValueAccessor,
        SuiDatepickerDirectiveValidator,
        SuiDatepickerInputDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    SuiPopupModule,
                    SuiLocalizationModule,
                    SuiUtilityModule
                ],
                declarations: [
                    SuiCalendarItem,
                    SuiCalendarViewTitle,
                    SuiCalendarYearView,
                    SuiCalendarMonthView,
                    SuiCalendarDateView,
                    SuiCalendarHourView,
                    SuiCalendarMinuteView,
                    SuiDatepicker,
                    SuiDatepickerDirective,
                    SuiDatepickerDirectiveValueAccessor,
                    SuiDatepickerDirectiveValidator,
                    SuiDatepickerInputDirective
                ],
                exports: [
                    SuiDatepickerDirective,
                    SuiDatepickerDirectiveValueAccessor,
                    SuiDatepickerDirectiveValidator,
                    SuiDatepickerInputDirective
                ],
                entryComponents: [
                    SuiDatepicker
                ]
            }]
    }], null, null); })();
ɵɵsetComponentScope(SuiDatepicker, [SuiCalendarItem,
    SuiCalendarViewTitle,
    SuiCalendarYearView,
    SuiCalendarMonthView,
    SuiCalendarDateView,
    SuiCalendarHourView,
    SuiCalendarMinuteView,
    SuiDatepicker,
    SuiDatepickerDirective,
    SuiDatepickerDirectiveValueAccessor,
    SuiDatepickerDirectiveValidator,
    SuiDatepickerInputDirective, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, SuiPopupDirective, SuiPopup], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

const _c0$7 = ["*"];
class SuiDimmer extends SuiTransition {
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        this._isDimmed = false;
        this.isDimmedChange = new EventEmitter();
        this.isClickable = true;
        this.wrapContent = true;
        this.hasClasses = true;
    }
    get isDimmed() {
        return this._isDimmed;
    }
    set isDimmed(value) {
        const isDimmed = !!value;
        if (!this._transitionController) {
            // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
            this._transitionController = new TransitionController(isDimmed, "block");
            this.setTransitionController(this._transitionController);
            this._isDimmed = isDimmed;
        }
        else if (this._isDimmed !== isDimmed) {
            this._isDimmed = isDimmed;
            this._transitionController.stopAll();
            this._transitionController.animate(new Transition("fade", this.transitionDuration, isDimmed ? TransitionDirection.In : TransitionDirection.Out));
        }
    }
    onClick() {
        if (this.isClickable) {
            this.isDimmed = false;
            this.isDimmedChange.emit(this.isDimmed);
        }
    }
}
SuiDimmer.ɵfac = function SuiDimmer_Factory(t) { return new (t || SuiDimmer)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
SuiDimmer.ɵcmp = ɵɵdefineComponent({ type: SuiDimmer, selectors: [["sui-dimmer"]], hostVars: 6, hostBindings: function SuiDimmer_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiDimmer_click_HostBindingHandler($event) { return ctx.onClick(); });
    } if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("dimmer", ctx.hasClasses)("active", ctx.isDimmed);
    } }, inputs: { isDimmed: "isDimmed", isClickable: "isClickable", transition: "transition", transitionDuration: "transitionDuration", wrapContent: "wrapContent" }, outputs: { isDimmedChange: "isDimmedChange" }, features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$7, decls: 2, vars: 2, template: function SuiDimmer_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div");
        ɵɵprojection(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("content", ctx.wrapContent);
    } }, styles: [".dimmer[_nghost-%COMP%]:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDimmer, [{
        type: Component,
        args: [{
                selector: "sui-dimmer",
                template: `
<div [class.content]="wrapContent">
    <ng-content></ng-content>
</div>
`,
                styles: [`
:host.dimmer:not(.hidden) {
    transition: none;
    display: flex !important;
}
`]
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.dimmer"]
        }], isDimmed: [{
            type: HostBinding,
            args: ["class.active"]
        }, {
            type: Input
        }], isDimmedChange: [{
            type: Output
        }], isClickable: [{
            type: Input
        }], transition: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], wrapContent: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click"]
        }] }); })();

class SuiDimmerModule {
}
SuiDimmerModule.ɵmod = ɵɵdefineNgModule({ type: SuiDimmerModule });
SuiDimmerModule.ɵinj = ɵɵdefineInjector({ factory: function SuiDimmerModule_Factory(t) { return new (t || SuiDimmerModule)(); }, imports: [[
            CommonModule,
            SuiTransitionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiDimmerModule, { declarations: [SuiDimmer], imports: [CommonModule,
        SuiTransitionModule], exports: [SuiDimmer] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDimmerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiDimmer
                ],
                exports: [
                    SuiDimmer
                ]
            }]
    }], null, null); })();

// Creates essentially a 'string' enum.
const DropdownAutoCloseType = {
    ItemClick: "itemClick",
    OutsideClick: "outsideClick",
    Disabled: "disabled"
};
class DropdownService {
    constructor(autoCloseMode = DropdownAutoCloseType.ItemClick) {
        this.isOpen = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabled = false;
        this.autoCloseMode = autoCloseMode;
        this.children = [];
    }
    get isNested() {
        return !!this.parent;
    }
    setOpenState(isOpen, reflectInParent = false) {
        if (this.isOpen !== isOpen && !this.isDisabled) {
            // Only update the state if it has changed, and the dropdown isn't disabled.
            this.isOpen = !!isOpen;
            this.isAnimating = true;
            // We must delay the emitting to avoid the 'changed after checked' Angular errors.
            this.delay(() => this.isOpenChange.emit(this.isOpen));
            if (!this.isOpen) {
                // Close the child dropdowns when this one closes.
                this.children.forEach(c => c.setOpenState(this.isOpen));
            }
            if (this.parent && reflectInParent) {
                // Open the parent dropdowns when this one opens.
                this.parent.setOpenState(this.isOpen, true);
            }
        }
        else if (this.isOpen !== isOpen && this.isDisabled) {
            // If the state has changed, but the dropdown is disabled, re-emit the original isOpen value.
            this.delay(() => this.isOpenChange.emit(this.isOpen));
        }
    }
    setDisabledState(isDisabled) {
        if (this.isDisabled !== isDisabled) {
            if (!!isDisabled) {
                // Close the dropdown as it is now disabled
                this.setOpenState(false);
            }
            this.isDisabled = !!isDisabled;
        }
    }
    toggleOpenState() {
        this.setOpenState(!this.isOpen);
    }
    // Registers a dropdown service as a child of this service.
    registerChild(child) {
        if (!this.isChildRegistered(child)) {
            this.children.push(child);
            child.parent = this;
        }
    }
    // Recursive method to check if the provided dropdown is already registered as a child, or is a descendant of a child.
    isChildRegistered(child) {
        return this === child || !!this.children
            .find(c => !!c.children
            .find(cChild => cChild.isChildRegistered(child)));
    }
    // Wipes any nested data, so all services can be cleanly reattached.
    clearChildren() {
        this.children.forEach(c => {
            c.parent = undefined;
        });
        this.children = [];
    }
    // Method for delaying an event into the next tick, to avoid Angular "changed after checked" error.
    delay(callback) {
        setTimeout(() => callback());
    }
}

class SuiDropdownMenuItem {
    constructor(_renderer, element) {
        this._renderer = _renderer;
        this.element = element;
        this.isSelected = false;
        this.selectedClass = "selected";
    }
    get isDisabled() {
        // We must use nativeElement as Angular doesn't have a way of reading class information.
        const element = this.element.nativeElement;
        return element.classList.contains("disabled");
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        // Renderer is used to enable a dynamic class name.
        if (value) {
            this._renderer.addClass(this.element.nativeElement, this.selectedClass);
        }
        else {
            this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
        }
    }
    get hasChildDropdown() {
        return !!this.childDropdownMenu;
    }
    performClick() {
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this.element.nativeElement.click();
    }
}
SuiDropdownMenuItem.ɵfac = function SuiDropdownMenuItem_Factory(t) { return new (t || SuiDropdownMenuItem)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
SuiDropdownMenuItem.ɵdir = ɵɵdefineDirective({ type: SuiDropdownMenuItem, selectors: [["", 8, "item"]], contentQueries: function SuiDropdownMenuItem_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuiDropdownMenu, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.childDropdownMenu = _t.first);
    } } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDropdownMenuItem, [{
        type: Directive,
        args: [{
                // We must attach to every '.item' as Angular doesn't support > selectors.
                selector: ".item"
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { childDropdownMenu: [{
            type: ContentChild,
            args: [forwardRef(() => SuiDropdownMenu), /* TODO: add static flag */ {}]
        }] }); })();
class SuiDropdownMenu extends SuiTransition {
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        // Initialise transition functionality.
        this._transitionController = new TransitionController(false);
        this.setTransitionController(this._transitionController);
        this.menuTransition = "slide down";
        this.menuTransitionDuration = 200;
        this.menuAutoSelectFirst = false;
        this.menuSelectedItemClass = "selected";
        // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
        this._parentKeyDownListener = () => { };
    }
    get service() {
        return this._service;
    }
    set service(value) {
        this._service = value;
        let previousIsOpen = this._service.isOpen;
        this._service.isOpenChange.subscribe((isOpen) => {
            if (isOpen !== previousIsOpen) {
                // Only run transitions if the open state has changed.
                this._transitionController.stopAll();
                this._transitionController.animate(new Transition(this.menuTransition, this.menuTransitionDuration, TransitionDirection.Either, () => this._service.isAnimating = false));
            }
            if (!isOpen) {
                // Reset the item selections when a nested item is selected to avoid incosistent open states.
                if (this.selectedItems.length > 1) {
                    this.resetSelection();
                }
            }
            previousIsOpen = isOpen;
        });
    }
    set parentElement(value) {
        this._parentKeyDownListener = this._renderer
            .listen(value.nativeElement, "keydown", (e) => this.onParentKeyDown(e));
    }
    set items(items) {
        this._itemsQueryOverride = items;
    }
    get _itemsQuery() {
        return this._itemsQueryOverride || this._itemsQueryInternal;
    }
    // Get the list of items, ignoring those that are disabled.
    get _items() {
        return this._itemsQuery.filter(i => !i.isDisabled);
    }
    onClick(e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            if (this._service.autoCloseMode === DropdownAutoCloseType.ItemClick) {
                const target = e.target;
                if (this._element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                    // Once an item is selected, we can close the entire dropdown.
                    this._service.setOpenState(false, true);
                }
            }
        }
    }
    onParentKeyDown(e) {
        // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
        if (this._service && this._service.isOpen && !this._service.isNested) {
            // Stop document events like scrolling while open.
            const target = e.target;
            if (!/input/i.test(target.tagName) &&
                [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(kC => kC === e.keyCode)) {
                e.preventDefault();
            }
            // Gets the top selected item from the stack.
            const [selected] = this.selectedItems.slice(-1);
            // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
            let selectedContainer = this;
            if (this.selectedItems.length >= 2) {
                const [selectedParent] = this.selectedItems.slice(-2);
                selectedContainer = selectedParent.childDropdownMenu;
            }
            switch (e.keyCode) {
                // Escape : close the entire dropdown.
                case KeyCode.Escape: {
                    this._service.setOpenState(false);
                    break;
                }
                // Down : select the next item below the current one, or the 1st if none selected.
                case KeyCode.Down:
                // Up : select the next item above the current one, or the 1st if none selected.
                case KeyCode.Up: {
                    this.selectedItems.pop();
                    this.selectedItems.push(selectedContainer.updateSelection(selected, e.keyCode));
                    // Prevent default regardless of whether we are in an input, to stop jumping to the start or end of the query string.
                    e.preventDefault();
                    break;
                }
                // Enter : if the item doesn't contain a nested dropdown, 'click' it. Otherwise, fall through to 'Right' action.
                case KeyCode.Enter: {
                    if (selected && !selected.hasChildDropdown) {
                        selected.performClick();
                        break;
                    }
                }
                // falls through
                // Right : if the selected item contains a nested dropdown, open the dropdown & select the 1st item.
                case KeyCode.Right: {
                    if (selected && selected.hasChildDropdown) {
                        selected.childDropdownMenu.service.setOpenState(true);
                        this.selectedItems.push(selected.childDropdownMenu.updateSelection(selected, e.keyCode));
                    }
                    break;
                }
                // Left : if the selected item is in a nested dropdown, close it and select the containing item.
                case KeyCode.Left: {
                    if (this.selectedItems.length >= 2) {
                        this.selectedItems.pop();
                        const [selectedParent] = this.selectedItems.slice(-1);
                        selectedParent.childDropdownMenu.service.setOpenState(false);
                        selectedParent.isSelected = true;
                    }
                    break;
                }
            }
        }
    }
    resetSelection() {
        this.selectedItems = [];
        this._items.forEach(i => {
            i.selectedClass = this.menuSelectedItemClass;
            i.isSelected = false;
        });
        if (this.menuAutoSelectFirst && this._items.length > 0) {
            // Autoselect 1st item if required & possible.
            this._items[0].isSelected = true;
            this.scrollToItem(this._items[0]);
            this.selectedItems.push(this._itemsQuery.first);
        }
    }
    // Determines the item to next be selected, based on the keyboard input & the currently selected item.
    updateSelection(selectedItem, keyCode) {
        if (selectedItem) {
            // Remove the selected status on the previously selected item.
            selectedItem.isSelected = false;
        }
        let selectedIndex = this._items
            .findIndex(i => i === selectedItem);
        let newSelection;
        switch (keyCode) {
            case KeyCode.Enter:
            case KeyCode.Right:
            case KeyCode.Down:
                selectedIndex += 1;
                break;
            case KeyCode.Up:
                if (selectedIndex === -1) {
                    // If none are selected, select the 1st item. Should this be `this.items.last - 1`?
                    selectedIndex = 0;
                    break;
                }
                selectedIndex -= 1;
                break;
        }
        // Select the item at the updated index. The || is to stop us selecting past the start or end of the item list.
        newSelection = this._items[selectedIndex] || selectedItem;
        if (newSelection) {
            // Set the selected status on the newly selected item.
            newSelection.isSelected = true;
            // Set the current scroll position to the location of the newly selected item.
            this.scrollToItem(newSelection);
        }
        return newSelection;
    }
    scrollToItem(item) {
        const menu = this._element.nativeElement;
        const selectedRect = item.element.nativeElement.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();
        let scrollAmount = 0;
        if (selectedRect.bottom > menuRect.bottom) {
            scrollAmount = selectedRect.bottom - menuRect.bottom;
        }
        if (selectedRect.top < menuRect.top) {
            scrollAmount = selectedRect.top - menuRect.top;
        }
        menu.scrollTop += Math.round(scrollAmount);
    }
    ngAfterContentInit() {
        this.onItemsChanged();
        this._itemsQuery.changes.subscribe(() => this.onItemsChanged());
    }
    onItemsChanged() {
        // We use `_items` rather than `items` in case one or more have become disabled.
        this.resetSelection();
    }
    ngOnDestroy() {
        this._parentKeyDownListener();
    }
}
SuiDropdownMenu.ɵfac = function SuiDropdownMenu_Factory(t) { return new (t || SuiDropdownMenu)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
SuiDropdownMenu.ɵdir = ɵɵdefineDirective({ type: SuiDropdownMenu, selectors: [["", "suiDropdownMenu", ""]], contentQueries: function SuiDropdownMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuiDropdownMenuItem, false);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._itemsQueryInternal = _t);
    } }, hostBindings: function SuiDropdownMenu_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiDropdownMenu_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { menuTransition: "menuTransition", menuTransitionDuration: "menuTransitionDuration", menuAutoSelectFirst: "menuAutoSelectFirst", menuSelectedItemClass: "menuSelectedItemClass" }, features: [ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDropdownMenu, [{
        type: Directive,
        args: [{
                selector: "[suiDropdownMenu]"
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { menuTransition: [{
            type: Input
        }], menuTransitionDuration: [{
            type: Input
        }], _itemsQueryInternal: [{
            type: ContentChildren,
            args: [SuiDropdownMenuItem]
        }], menuAutoSelectFirst: [{
            type: Input
        }], menuSelectedItemClass: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();

class SuiDropdown {
    constructor(_element) {
        this._element = _element;
        this.service = new DropdownService();
        this.service.isOpenChange.subscribe(() => {
            if (this.service.isOpen) {
                this._element.nativeElement.focus();
            }
        });
    }
    get children() {
        // @ContentChildren includes the current element by default.
        return this._children.filter(c => c !== this);
    }
    get isOpenChange() {
        return this.service.isOpenChange;
    }
    get isActive() {
        // This is to ensure nested dropdowns don't get made bold.
        return this.service.isOpen && !this.service.isNested;
    }
    get isOpen() {
        return this.service.isOpen;
    }
    set isOpen(value) {
        // If we are opening the dropdown, we want to always open its parents.
        this.service.setOpenState(value, !!value);
    }
    get isDisabled() {
        return this.service.isDisabled;
    }
    set isDisabled(value) {
        this.service.setDisabledState(value);
    }
    get tabIndex() {
        if (this.isDisabled || this.service.isNested) {
            // If disabled, remove from tabindex.
            return undefined;
        }
        if (this._tabIndex != undefined) {
            // If custom tabindex, default to that.
            return this._tabIndex;
        }
        // Otherwise, return default of 0.
        return 0;
    }
    get autoClose() {
        return this.service.autoCloseMode;
    }
    set autoClose(value) {
        this.service.autoCloseMode = value;
    }
    ngAfterContentInit() {
        if (!this._menu) {
            throw new Error("You must set [suiDropdownMenu] on the menu element.");
        }
        this._menu.service = this.service;
        this._menu.parentElement = this._element;
        this.childrenUpdated();
        this._children.changes
            .subscribe(() => this.childrenUpdated());
    }
    childrenUpdated() {
        // Reregister child dropdowns each time the menu content changes.
        this.children
            .map(c => c.service)
            .forEach(s => this.service.registerChild(s));
    }
    onClick(e) {
        if (!e.eventHandled) {
            e.eventHandled = true;
            this.service.toggleOpenState();
        }
    }
    onFocusOut(e) {
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.externallyClose();
        }
    }
    onKeypress(e) {
        // Block the keyboard event from being fired on parent dropdowns.
        if (!e.eventHandled) {
            if (e.keyCode === KeyCode.Enter) {
                e.eventHandled = true;
                this.service.setOpenState(true);
            }
        }
    }
    externallyClose() {
        if (this.service.autoCloseMode === DropdownAutoCloseType.ItemClick ||
            this.service.autoCloseMode === DropdownAutoCloseType.OutsideClick) {
            // No need to reflect in parent since they are also bound to document.
            this.service.setOpenState(false);
        }
    }
}
SuiDropdown.ɵfac = function SuiDropdown_Factory(t) { return new (t || SuiDropdown)(ɵɵdirectiveInject(ElementRef)); };
SuiDropdown.ɵdir = ɵɵdefineDirective({ type: SuiDropdown, selectors: [["", "suiDropdown", ""]], contentQueries: function SuiDropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuiDropdownMenu, true);
        ɵɵcontentQuery(dirIndex, SuiDropdown, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menu = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._children = _t);
    } }, hostVars: 5, hostBindings: function SuiDropdown_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiDropdown_click_HostBindingHandler($event) { return ctx.onClick($event); })("focusout", function SuiDropdown_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); })("keypress", function SuiDropdown_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", ctx.tabIndex);
        ɵɵclassProp("active", ctx.isActive)("disabled", ctx.isDisabled);
    } }, inputs: { isOpen: "isOpen", isDisabled: "isDisabled", _tabIndex: ["tabindex", "_tabIndex"], autoClose: "autoClose" }, outputs: { isOpenChange: "isOpenChange" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDropdown, [{
        type: Directive,
        args: [{
                selector: "[suiDropdown]"
            }]
    }], function () { return [{ type: ElementRef }]; }, { _menu: [{
            type: ContentChild,
            args: [SuiDropdownMenu, /* TODO: add static flag */ {}]
        }], _children: [{
            type: ContentChildren,
            args: [SuiDropdown, { descendants: true }]
        }], isOpenChange: [{
            type: Output
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }], isOpen: [{
            type: Input
        }], isDisabled: [{
            type: HostBinding,
            args: ["class.disabled"]
        }, {
            type: Input
        }], _tabIndex: [{
            type: Input,
            args: ["tabindex"]
        }], tabIndex: [{
            type: HostBinding,
            args: ["attr.tabindex"]
        }], autoClose: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }], onFocusOut: [{
            type: HostListener,
            args: ["focusout", ["$event"]]
        }], onKeypress: [{
            type: HostListener,
            args: ["keypress", ["$event"]]
        }] }); })();

class SuiDropdownModule {
}
SuiDropdownModule.ɵmod = ɵɵdefineNgModule({ type: SuiDropdownModule });
SuiDropdownModule.ɵinj = ɵɵdefineInjector({ factory: function SuiDropdownModule_Factory(t) { return new (t || SuiDropdownModule)(); }, imports: [[
            CommonModule,
            SuiTransitionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiDropdownModule, { declarations: [SuiDropdown,
        SuiDropdownMenu,
        SuiDropdownMenuItem], imports: [CommonModule,
        SuiTransitionModule], exports: [SuiDropdown,
        SuiDropdownMenu,
        SuiDropdownMenuItem] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiTransitionModule
                ],
                declarations: [
                    SuiDropdown,
                    SuiDropdownMenu,
                    SuiDropdownMenuItem
                ],
                exports: [
                    SuiDropdown,
                    SuiDropdownMenu,
                    SuiDropdownMenuItem
                ]
            }]
    }], null, null); })();

// Helper class to support method chaining when calling `SuiModalService.open(...)`.
class ActiveModal {
    constructor(instance, componentRef) {
        this._config = instance;
        this._componentRef = componentRef;
        // Automatically destroy the modal component when it has been dismissed.
        this.component.onDismiss.subscribe(() => this._componentRef.destroy());
    }
    // Shorthand for direct access to the `SuiModal` instance.
    get component() {
        return this._componentRef.instance;
    }
    // Registers a callback for when `onApprove` is fired.
    onApprove(callback) {
        this.component.onApprove.subscribe((res) => callback(res));
        return this;
    }
    // Registers a callback for when `onDeny` is fired.
    onDeny(callback) {
        this.component.onDeny.subscribe((res) => callback(res));
        return this;
    }
    // Fires the approve event of the modal manually.
    approve(result) {
        this.component.approve(result);
    }
    // Fires the deny event of the modal manually.
    deny(result) {
        this.component.deny(result);
    }
    // Removes the modal component instantly, without transitions or firing any events.
    destroy() {
        this._componentRef.destroy();
    }
}

const ModalSize = {
    Mini: "mini",
    Tiny: "tiny",
    Small: "small",
    Normal: "normal",
    Large: "large"
};
// Stores a basic set of configuration options for a modal.
class ModalConfig {
    constructor(context = undefined, isClosable = true) {
        // Initialise with default values.
        this.isClosable = isClosable;
        this.context = context;
        this.size = ModalSize.Normal;
        this.isFullScreen = false;
        this.isBasic = false;
        this.isInverted = false;
        this.isCentered = true;
        this.mustScroll = false;
        this.transition = "scale";
        this.transitionDuration = 500;
    }
}
// Used when creating a modal from a `TemplateRef`.
class TemplateModalConfig extends ModalConfig {
    constructor(template, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.template = template;
    }
}
// Used when creating a modal from an existing component.
class ComponentModalConfig extends ModalConfig {
    constructor(component, context = undefined, isClosable = true) {
        super(context, isClosable);
        this.component = component;
    }
}

// Used to pass ability to control a modal to a component.
class ModalControls {
    constructor(approve, deny) {
        this.approve = approve;
        this.deny = deny;
    }
    // Use method here rather than arrow variables to make intellisense show they're methods.
    approve(result) { }
    deny(result) { }
}
// Injected into custom modal components, to allow control of the modal, and access to a context object.
class Modal extends ModalControls {
    constructor(controls, context) {
        // Instances of `ModalControls` are only created in the `SuiModal` constructor,
        // so we take an initialised instance rather than remaking one each time.
        super(controls.approve, controls.deny);
        this.context = context;
    }
}

// Shorthand for a modal template. Sets up ability to write: `<ng-template let-context let-modal="modal">...</ng-template>`
// We use an abstract class as ModalTemplate tends to be used within decorated properties, which means it needs to exist!
class ModalTemplate extends TemplateRef {
}

const _c0$8 = ["*"];
class SuiModalDimmer extends SuiDimmer {
    constructor(renderer, element, changeDetector) {
        super(renderer, element, changeDetector);
        this.hasClasses = true;
        this.isClickable = false;
    }
}
SuiModalDimmer.ɵfac = function SuiModalDimmer_Factory(t) { return new (t || SuiModalDimmer)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
SuiModalDimmer.ɵcmp = ɵɵdefineComponent({ type: SuiModalDimmer, selectors: [["sui-modal-dimmer"]], hostVars: 4, hostBindings: function SuiModalDimmer_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("page", ctx.hasClasses)("modals", ctx.hasClasses);
    } }, features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function SuiModalDimmer_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: [".ui.dimmer[_nghost-%COMP%]:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiModalDimmer, [{
        type: Component,
        args: [{
                selector: "sui-modal-dimmer",
                template: `<ng-content></ng-content>`,
                styles: [`
        :host.ui.dimmer:not(.hidden) {
            transition: none;
            overflow-y: auto;
            display: flex !important; 
        }
    `]
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.page"]
        }, {
            type: HostBinding,
            args: ["class.modals"]
        }] }); })();

const _c0$9 = ["modal"];
const _c1$4 = ["templateSibling"];
function SuiModal_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r83 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 5);
    ɵɵlistener("click", function SuiModal_i_3_Template_i_click_0_listener($event) { ɵɵrestoreView(_r83); const ctx_r82 = ɵɵnextContext(); return ctx_r82.close(); });
    ɵɵelementEnd();
} }
const _c2 = function (a0) { return { "top aligned": a0 }; };
const _c3 = ["*"];
class SuiModal {
    constructor(_renderer, _element, _componentFactory) {
        this._renderer = _renderer;
        this._element = _element;
        this._componentFactory = _componentFactory;
        // Initialise with default configuration from `ModalConfig` (to avoid writing defaults twice).
        const config = new ModalConfig();
        this.loadConfig(config);
        // Event emitters for each of the possible modal outcomes.
        this.onApprove = new EventEmitter();
        this.onDeny = new EventEmitter();
        this.onDismiss = new EventEmitter();
        // Initialise controls with actions for the `approve` and `deny` cases.
        this.controls = new ModalControls(res => this.dismiss(() => this.onApprove.emit(res)), res => this.dismiss(() => this.onDeny.emit(res)));
        // Internal variable initialisation.
        this.dimBackground = false;
        this._isClosing = false;
        this.transitionController = new TransitionController(false);
    }
    get approve() {
        return this.controls.approve;
    }
    get deny() {
        return this.controls.deny;
    }
    // Value to deny with when closing via `isClosable`.
    get isFullScreen() {
        return this._isFullScreen;
    }
    set isFullScreen(fullScreen) {
        this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
    }
    get mustScroll() {
        return this._mustScroll;
    }
    set mustScroll(mustScroll) {
        this._mustScroll = mustScroll;
        // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
        this._mustAlwaysScroll = mustScroll;
        this.updateScroll();
    }
    get isInverted() {
        return this._isInverted;
    }
    set isInverted(inverted) {
        this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
    }
    get dynamicClasses() {
        const classes = {};
        if (this.size) {
            classes[this.size] = true;
        }
        return classes;
    }
    ngOnInit() {
        // Transition the modal to be visible.
        this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.In));
        setTimeout(() => this.dimBackground = true);
    }
    ngAfterViewInit() {
        // Move the modal to the document body to ensure correct scrolling.
        this._originalContainer = this._element.nativeElement.parentNode;
        document.querySelector("body").appendChild(this._element.nativeElement);
        // Remove the #templateSibling element from the DOM to fix bottom border styles.
        const templateElement = this.templateSibling.element.nativeElement;
        if (templateElement.parentNode) {
            templateElement.parentNode.removeChild(templateElement);
        }
        const element = this._modalElement.nativeElement;
        setTimeout(() => this.updateScroll());
        // Focus any element with [autofocus] attribute.
        const autoFocus = element.querySelector("[autofocus]");
        if (autoFocus) {
            // Autofocus after the browser has had time to process other event handlers.
            setTimeout(() => autoFocus.focus(), 10);
            // Try to focus again when the modal has opened so that autofocus works in IE11.
            setTimeout(() => autoFocus.focus(), this.transitionDuration);
        }
    }
    // Updates the modal with the specified configuration.
    loadConfig(config) {
        this.isClosable = config.isClosable;
        this.closeResult = config.closeResult;
        this.size = config.size;
        this.isFullScreen = config.isFullScreen;
        this.isBasic = config.isBasic;
        this.isInverted = config.isInverted;
        this.isCentered = config.isCentered;
        this.mustScroll = config.mustScroll;
        this.transition = config.transition;
        this.transitionDuration = config.transitionDuration;
    }
    // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
    dismiss(callback = () => { }) {
        // If we aren't currently closing,
        if (!this._isClosing) {
            this._isClosing = true;
            // Transition the modal to be invisible.
            this.dimBackground = false;
            this.transitionController.stopAll();
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, TransitionDirection.Out, () => {
                // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                if (this._originalContainer) {
                    this._originalContainer.appendChild(this._element.nativeElement);
                }
                this.onDismiss.emit();
                callback();
            }));
        }
    }
    // Closes the modal with a 'deny' outcome, using the specified default reason.
    close() {
        if (this.isClosable) {
            // If we are allowed to close, fire the deny result with the default value.
            this.deny(this.closeResult);
        }
    }
    // Decides whether the modal needs to reposition to allow scrolling.
    updateScroll() {
        // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
        if (!this._mustAlwaysScroll && this._modalElement) {
            // Semantic UI modal margin and dimmer padding are 1rem, which is relative to the global font size, so for compatibility:
            const fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
            const margin = fontSize * 2;
            const element = this._modalElement.nativeElement;
            // The modal must scroll if the window height is smaller than the modal height + both margins.
            this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
        }
    }
    onClick(e) {
        // Makes sense here, as the modal shouldn't be attached to any DOM element.
        e.stopPropagation();
    }
    // Document listener is fine here because nobody will have enough modals open.
    onDocumentKeyUp(e) {
        if (e.keyCode === KeyCode.Escape) {
            // Close automatically covers case of `!isClosable`, so check not needed.
            this.close();
        }
    }
    onDocumentResize() {
        this.updateScroll();
    }
}
SuiModal.ɵfac = function SuiModal_Factory(t) { return new (t || SuiModal)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SuiComponentFactory)); };
SuiModal.ɵcmp = ɵɵdefineComponent({ type: SuiModal, selectors: [["sui-modal"]], viewQuery: function SuiModal_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$9, true);
        ɵɵstaticViewQuery(_c1$4, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._modalElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
    } }, hostBindings: function SuiModal_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keyup", function SuiModal_keyup_HostBindingHandler($event) { return ctx.onDocumentKeyUp($event); }, false, ɵɵresolveDocument)("resize", function SuiModal_resize_HostBindingHandler($event) { return ctx.onDocumentResize(); }, false, ɵɵresolveWindow);
    } }, inputs: { isClosable: "isClosable", closeResult: "closeResult", size: "size", isCentered: "isCentered", isFullScreen: "isFullScreen", isBasic: "isBasic", mustScroll: "mustScroll", isInverted: "isInverted", transition: "transition", transitionDuration: "transitionDuration" }, outputs: { onApprove: "approved", onDeny: "denied", onDismiss: "dismissed" }, ngContentSelectors: _c3, decls: 7, vars: 20, consts: [[3, "ngClass", "isDimmed", "transitionDuration", "isDimmedChange", "click"], [1, "ui", "modal", 3, "suiTransition", "ngClass", "click"], ["modal", ""], ["class", "close icon", 3, "click", 4, "ngIf"], ["templateSibling", ""], [1, "close", "icon", 3, "click"]], template: function SuiModal_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "sui-modal-dimmer", 0);
        ɵɵlistener("isDimmedChange", function SuiModal_Template_sui_modal_dimmer_isDimmedChange_0_listener($event) { return ctx.dimBackground = $event; })("click", function SuiModal_Template_sui_modal_dimmer_click_0_listener($event) { return ctx.close(); });
        ɵɵelementStart(1, "div", 1, 2);
        ɵɵlistener("click", function SuiModal_Template_div_click_1_listener($event) { return ctx.onClick($event); });
        ɵɵtemplate(3, SuiModal_i_3_Template, 1, 0, "i", 3);
        ɵɵprojection(4);
        ɵɵelement(5, "div", null, 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("inverted", ctx.isInverted);
        ɵɵproperty("ngClass", ɵɵpureFunction1(18, _c2, !ctx.isCentered))("isDimmed", ctx.dimBackground)("transitionDuration", ctx.transitionDuration);
        ɵɵadvance(1);
        ɵɵclassProp("active", ctx.transitionController == null ? null : ctx.transitionController.isVisible)("fullscreen", ctx.isFullScreen)("basic", ctx.isBasic)("scrolling", ctx.mustScroll)("inverted", ctx.isInverted);
        ɵɵproperty("suiTransition", ctx.transitionController)("ngClass", ctx.dynamicClasses);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.isClosable);
    } }, directives: [SuiModalDimmer, NgClass, SuiTransition, NgIf], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiModal, [{
        type: Component,
        args: [{
                selector: "sui-modal",
                template: `
<!-- Page dimmer for modal background. -->
<sui-modal-dimmer [ngClass]="{'top aligned': !isCentered}" 
                  [class.inverted]="isInverted"
                  [(isDimmed)]="dimBackground"
                  [transitionDuration]="transitionDuration"
                  (click)="close()">

    <!-- Modal component, with transition component attached -->
    <div class="ui modal"
         [suiTransition]="transitionController"
         [class.active]="transitionController?.isVisible"
         [class.fullscreen]="isFullScreen"
         [class.basic]="isBasic"
         [class.scrolling]="mustScroll"
         [class.inverted]="isInverted"
         [ngClass]="dynamicClasses"
         (click)="onClick($event)"
         #modal>

        <!-- Configurable close icon -->
        <i class="close icon" *ngIf="isClosable" (click)="close()"></i>
        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->
        <ng-content></ng-content>
        <!-- @ViewChild reference so we can insert elements beside this div. -->
        <div #templateSibling></div>
    </div>
</sui-modal-dimmer>
`,
                styles: [``]
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: SuiComponentFactory }]; }, { isClosable: [{
            type: Input
        }], closeResult: [{
            type: Input
        }], onApprove: [{
            type: Output,
            args: ["approved"]
        }], onDeny: [{
            type: Output,
            args: ["denied"]
        }], onDismiss: [{
            type: Output,
            args: ["dismissed"]
        }], _modalElement: [{
            type: ViewChild,
            args: ["modal", { static: true }]
        }], size: [{
            type: Input
        }], isCentered: [{
            type: Input
        }], isFullScreen: [{
            type: Input
        }], isBasic: [{
            type: Input
        }], mustScroll: [{
            type: Input
        }], isInverted: [{
            type: Input
        }], transition: [{
            type: Input
        }], transitionDuration: [{
            type: Input
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }], onDocumentKeyUp: [{
            type: HostListener,
            args: ["document:keyup", ["$event"]]
        }], onDocumentResize: [{
            type: HostListener,
            args: ["window:resize"]
        }] }); })();

class SuiModalService {
    constructor(_componentFactory) {
        this._componentFactory = _componentFactory;
    }
    open(modal) {
        // Generate the modal component to be shown.
        const componentRef = this._componentFactory.createComponent(SuiModal);
        // Shorthand for the created modal component instance.
        const modalComponent = componentRef.instance;
        if (modal instanceof TemplateModalConfig) {
            // Inject the template into the view.
            this._componentFactory.createView(modalComponent.templateSibling, modal.template, {
                // `let-context`
                $implicit: modal.context,
                // `let-modal="modal"`
                modal: componentRef.instance.controls
            });
        }
        else if (modal instanceof ComponentModalConfig) {
            // Generate the component to be used as the modal content,
            // injecting an instance of `Modal` to be used in the component constructor.
            const contentComponentRef = this._componentFactory.createComponent(modal.component, [
                {
                    provide: Modal,
                    useValue: new Modal(modalComponent.controls, modal.context)
                }
            ]);
            // Insert the new component into the content of the modal.
            this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
            // Shorthand for access to the content component's DOM element.
            const contentElement = contentComponentRef.location.nativeElement;
            // Move all of the DOM elements inside the component to the main modal element.
            // This is done so that CSS classes apply correctly. It does stop any custom styles from working however,
            // so other ways may have to be investigated.
            while (contentElement.hasChildNodes() && contentElement.parentElement && contentElement.firstChild) {
                contentElement.parentElement.appendChild(contentElement.removeChild(contentElement.firstChild));
            }
            // Remove the generated component's 'empty shell' from the DOM.
            this._componentFactory.detachFromDocument(contentComponentRef);
        }
        // Attach the new modal component to the application.
        // The component will move itself to the document body for correctl styling.
        this._componentFactory.attachToApplication(componentRef);
        // Initialise the generated modal with the provided config.
        modalComponent.loadConfig(modal);
        // Return an instance of an `ActiveModal`, so the user can control the new modal.
        return new ActiveModal(modal, componentRef);
    }
}
SuiModalService.ɵfac = function SuiModalService_Factory(t) { return new (t || SuiModalService)(ɵɵinject(SuiComponentFactory)); };
SuiModalService.ɵprov = ɵɵdefineInjectable({ token: SuiModalService, factory: SuiModalService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiModalService, [{
        type: Injectable
    }], function () { return [{ type: SuiComponentFactory }]; }, null); })();

class SuiModalModule {
}
SuiModalModule.ɵmod = ɵɵdefineNgModule({ type: SuiModalModule });
SuiModalModule.ɵinj = ɵɵdefineInjector({ factory: function SuiModalModule_Factory(t) { return new (t || SuiModalModule)(); }, providers: [
        SuiModalService
    ], imports: [[
            CommonModule,
            SuiDimmerModule,
            SuiTransitionModule,
            SuiUtilityModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiModalModule, { declarations: [SuiModal,
        SuiModalDimmer], imports: [CommonModule,
        SuiDimmerModule,
        SuiTransitionModule,
        SuiUtilityModule], exports: [SuiModal] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiModalModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SuiDimmerModule,
                    SuiTransitionModule,
                    SuiUtilityModule
                ],
                declarations: [
                    SuiModal,
                    SuiModalDimmer
                ],
                exports: [
                    SuiModal
                ],
                providers: [
                    SuiModalService
                ],
                entryComponents: [
                    SuiModal
                ]
            }]
    }], null, null); })();

function SuiProgress_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r84 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r84.percentage, "%");
} }
const _c0$a = ["*"];
class SuiProgress {
    constructor() {
        this.value = 0;
        this.maximum = 100;
        this.precision = 0;
        this._overrideSuccess = false;
        this.autoSuccess = true;
        this.showProgress = true;
        this.hasClasses = true;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._value = converted;
    }
    get maximum() {
        return this._maximum;
    }
    set maximum(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._maximum = converted;
    }
    get precision() {
        return this._precision;
    }
    set precision(value) {
        // Convert value from string to number where necessary.
        const converted = +value;
        if (Number.isNaN(converted)) {
            return;
        }
        this._precision = Math.min(Math.max(converted, 0), 20);
    }
    get reachedMaximum() {
        return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
    }
    get percentage() {
        const boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
        const percentage = (boundedValue / this.maximum) * 100;
        return percentage.toFixed(this.precision);
    }
    set classValue(classes) {
        if (classes.includes("attached") || classes.includes("tiny")) {
            this.showProgress = false;
        }
        if (classes.includes("success")) {
            this._overrideSuccess = true;
        }
    }
}
SuiProgress.ɵfac = function SuiProgress_Factory(t) { return new (t || SuiProgress)(); };
SuiProgress.ɵcmp = ɵɵdefineComponent({ type: SuiProgress, selectors: [["sui-progress"]], hostVars: 7, hostBindings: function SuiProgress_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("data-percent", ctx.percentage);
        ɵɵclassProp("ui", ctx.hasClasses)("progress", ctx.hasClasses)("success", ctx.reachedMaximum);
    } }, inputs: { autoSuccess: "autoSuccess", showProgress: "showProgress", value: "value", maximum: "maximum", precision: "precision", classValue: ["class", "classValue"] }, ngContentSelectors: _c0$a, decls: 4, vars: 3, consts: [[1, "bar"], ["class", "progress", 4, "ngIf"], [1, "label"], [1, "progress"]], template: function SuiProgress_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, SuiProgress_div_1_Template, 2, 1, "div", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleProp("width", ctx.percentage, "%");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showProgress);
    } }, directives: [NgIf], styles: [".bar[_ngcontent-%COMP%] {\n    transition-duration: 300ms !important;\n    z-index: 1;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiProgress, [{
        type: Component,
        args: [{
                selector: "sui-progress",
                template: `
<div class="bar" [style.width.%]="percentage">
    <div class="progress" *ngIf="showProgress">{{ percentage }}%</div>
</div>
<div class="label">
    <ng-content></ng-content>
</div>
`,
                styles: [`
.bar {
    transition-duration: 300ms !important;
    z-index: 1;
}
`]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.progress"]
        }], autoSuccess: [{
            type: Input
        }], showProgress: [{
            type: Input
        }], value: [{
            type: Input
        }], maximum: [{
            type: Input
        }], precision: [{
            type: Input
        }], reachedMaximum: [{
            type: HostBinding,
            args: ["class.success"]
        }], percentage: [{
            type: HostBinding,
            args: ["attr.data-percent"]
        }], classValue: [{
            type: Input,
            args: ["class"]
        }] }); })();

class SuiProgressModule {
}
SuiProgressModule.ɵmod = ɵɵdefineNgModule({ type: SuiProgressModule });
SuiProgressModule.ɵinj = ɵɵdefineInjector({ factory: function SuiProgressModule_Factory(t) { return new (t || SuiProgressModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiProgressModule, { declarations: [SuiProgress], imports: [CommonModule], exports: [SuiProgress] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiProgressModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiProgress
                ],
                exports: [
                    SuiProgress
                ]
            }]
    }], null, null); })();

function SuiRating_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r89 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 1);
    ɵɵlistener("mouseover", function SuiRating_i_0_Template_i_mouseover_0_listener($event) { ɵɵrestoreView(_r89); const i_r87 = ctx.index; const ctx_r88 = ɵɵnextContext(); return ctx_r88.onMouseover(i_r87); })("click", function SuiRating_i_0_Template_i_click_0_listener($event) { ɵɵrestoreView(_r89); const i_r87 = ctx.index; const ctx_r90 = ɵɵnextContext(); return ctx_r90.onClick(i_r87); });
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r87 = ctx.index;
    const ctx_r85 = ɵɵnextContext();
    ɵɵclassProp("selected", ctx_r85.hoveredIndex >= i_r87 && !ctx_r85.isReadonly)("active", ctx_r85.value > i_r87);
} }
class SuiRating {
    constructor() {
        this.hoveredIndex = -1;
        this.value = 0;
        this.valueChange = new EventEmitter();
        this.maximum = 5;
        this.isReadonly = false;
        this.hasClasses = true;
    }
    get maximum() {
        return this._maximum;
    }
    set maximum(value) {
        this._maximum = +value;
    }
    get icons() {
        // tslint:disable-next-line:prefer-literal
        return new Array(this.maximum);
    }
    onClick(i) {
        if (!this.isReadonly) {
            this.value = i + 1;
            this.valueChange.emit(this.value);
        }
    }
    onMouseover(i) {
        this.hoveredIndex = i;
    }
    onMouseout() {
        this.hoveredIndex = -1;
    }
    writeValue(value) {
        this.value = value;
    }
}
SuiRating.ɵfac = function SuiRating_Factory(t) { return new (t || SuiRating)(); };
SuiRating.ɵcmp = ɵɵdefineComponent({ type: SuiRating, selectors: [["sui-rating"]], hostVars: 6, hostBindings: function SuiRating_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseout", function SuiRating_mouseout_HostBindingHandler($event) { return ctx.onMouseout(); });
    } if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("rating", ctx.hasClasses)("read-only", ctx.isReadonly);
    } }, inputs: { maximum: "maximum", isReadonly: "isReadonly" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 1, consts: [["class", "icon", 3, "selected", "active", "mouseover", "click", 4, "ngFor", "ngForOf"], [1, "icon", 3, "mouseover", "click"]], template: function SuiRating_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, SuiRating_i_0_Template, 1, 4, "i", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.icons);
    } }, directives: [NgForOf], styles: [".read-only[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n    cursor: auto\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiRating, [{
        type: Component,
        args: [{
                selector: "sui-rating",
                template: `
<i class="icon"
   *ngFor="let icon of icons; let i = index"
   (mouseover)="onMouseover(i)"
   (click)="onClick(i)"
   [class.selected]="hoveredIndex >= i && !isReadonly"
   [class.active]="value > i">
</i>
`,
                styles: [`
:host.read-only .icon {
    cursor: auto
}
`]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.rating"]
        }], valueChange: [{
            type: Output
        }], maximum: [{
            type: Input
        }], isReadonly: [{
            type: HostBinding,
            args: ["class.read-only"]
        }, {
            type: Input
        }], onMouseout: [{
            type: HostListener,
            args: ["mouseout"]
        }] }); })();
class SuiRatingValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiRatingValueAccessor.ɵfac = function SuiRatingValueAccessor_Factory(t) { return new (t || SuiRatingValueAccessor)(ɵɵdirectiveInject(SuiRating)); };
SuiRatingValueAccessor.ɵdir = ɵɵdefineDirective({ type: SuiRatingValueAccessor, selectors: [["sui-rating"]], hostBindings: function SuiRatingValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("valueChange", function SuiRatingValueAccessor_valueChange_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, features: [ɵɵProvidersFeature([customValueAccessorFactory(SuiRatingValueAccessor)]), ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiRatingValueAccessor, [{
        type: Directive,
        args: [{
                selector: "sui-rating",
                host: { "(valueChange)": "onChange($event)" },
                providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
            }]
    }], function () { return [{ type: SuiRating }]; }, null); })();

class SuiRatingModule {
}
SuiRatingModule.ɵmod = ɵɵdefineNgModule({ type: SuiRatingModule });
SuiRatingModule.ɵinj = ɵɵdefineInjector({ factory: function SuiRatingModule_Factory(t) { return new (t || SuiRatingModule)(); }, imports: [[
            FormsModule,
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiRatingModule, { declarations: [SuiRating,
        SuiRatingValueAccessor], imports: [FormsModule,
        CommonModule], exports: [SuiRating,
        SuiRatingValueAccessor] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiRatingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    CommonModule
                ],
                declarations: [
                    SuiRating,
                    SuiRatingValueAccessor
                ],
                exports: [
                    SuiRating,
                    SuiRatingValueAccessor
                ]
            }]
    }], null, null); })();

const _c0$b = ["templateSibling"];
function SuiSearchResult_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const ctx_r98 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r98.formatter(ctx_r98.value, ctx_r98.query), ɵɵsanitizeHtml);
} }
// See https://github.com/Microsoft/TypeScript/issues/13449.
const templateRef$2 = TemplateRef;
class SuiSearchResult {
    constructor(componentFactory) {
        this.componentFactory = componentFactory;
        this.hasClasses = true;
        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = value => "";
    }
    get template() {
        return this._template;
    }
    set template(template) {
        this._template = template;
        if (this.template) {
            this.componentFactory.createView(this.templateSibling, this.template, {
                $implicit: this.value,
                query: this.query
            });
        }
    }
}
SuiSearchResult.ɵfac = function SuiSearchResult_Factory(t) { return new (t || SuiSearchResult)(ɵɵdirectiveInject(SuiComponentFactory)); };
SuiSearchResult.ɵcmp = ɵɵdefineComponent({ type: SuiSearchResult, selectors: [["sui-search-result"]], viewQuery: function SuiSearchResult_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$b, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
    } }, hostVars: 2, hostBindings: function SuiSearchResult_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("result", ctx.hasClasses);
    } }, inputs: { value: "value", query: "query", formatter: "formatter", template: "template" }, decls: 3, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]], template: function SuiSearchResult_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "span", null, 0);
        ɵɵtemplate(2, SuiSearchResult_span_2_Template, 1, 1, "span", 1);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.template);
    } }, directives: [NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSearchResult, [{
        type: Component,
        args: [{
                selector: "sui-search-result",
                template: `
<span #templateSibling></span>
<span *ngIf="!template" [innerHTML]="formatter(value, query)"></span>
`
            }]
    }], function () { return [{ type: SuiComponentFactory }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.result"]
        }], value: [{
            type: Input
        }], query: [{
            type: Input
        }], formatter: [{
            type: Input
        }], template: [{
            type: Input
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }] }); })();

class SearchService {
    constructor(allowEmptyQuery = false) {
        this._options = [];
        this.optionsFilter = (os, q) => {
            // Convert the query string to a RegExp.
            const regex = this.toRegex(this._query);
            if (regex instanceof RegExp) {
                // Only update the results if the query was valid regex.
                // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
                return os
                    // Filter on the options with a string match on the field we are testing.
                    .filter(o => Util.Object.readValue(o, this._optionsField)
                    .toString()
                    .match(regex));
            }
            // Don't update since it wasn't a valid regex.
            return false;
        };
        // Set default values and reset.
        this.allowEmptyQuery = allowEmptyQuery;
        this.searchDelay = 0;
        this.reset();
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this._options = options || [];
        // We cannot use both local & remote options simultaneously.
        this._optionsLookup = undefined;
        // Reset entire service with new options.
        this.reset();
    }
    get optionsLookup() {
        return this._optionsLookup;
    }
    set optionsLookup(lookupFn) {
        this._optionsLookup = lookupFn;
        // As before, cannot use local & remote options simultaneously.
        this._options = [];
        this.reset();
    }
    get hasItemLookup() {
        return !!this.optionsLookup && this.optionsLookup.length === 2;
    }
    get optionsField() {
        return this._optionsField;
    }
    set optionsField(field) {
        this._optionsField = field;
        // We need to reset otherwise we would now be showing invalid search results.
        this.reset();
    }
    get results() {
        return this._results;
    }
    get query() {
        return this._query;
    }
    get isSearching() {
        return this._isSearching;
    }
    // Updates the query after the specified search delay.
    updateQueryDelayed(query, callback = () => { }) {
        this._query = query;
        clearTimeout(this._searchDelayTimeout);
        this._searchDelayTimeout = window.setTimeout(() => {
            this.updateQuery(query, callback);
        }, this.searchDelay);
    }
    // Updates the current search query.
    updateQuery(query, callback = () => { }) {
        this._query = query;
        if (this._query === "" && !this.allowEmptyQuery) {
            // Don't update if the new query is empty (and we don't allow empty queries).
            // Don't reset so that when animating closed we don't get a judder.
            return callback();
        }
        if (this._resultsCache.hasOwnProperty(this._query)) {
            // If the query is already cached, make use of it.
            this._results = this._resultsCache[this._query];
            return callback();
        }
        if (this._optionsLookup) {
            this._isSearching = true;
            // Call the options lookup without a this context.
            const queryLookup = this._optionsLookup.call(undefined, this._query);
            queryLookup
                .then(results => {
                this._isSearching = false;
                this.updateResults(results);
                return callback();
            })
                .catch(error => {
                // Unset 'loading' state, and throw the returned error without updating the results.
                this._isSearching = false;
                return callback(error);
            });
            return;
        }
        const filtered = this.optionsFilter.call(undefined, this._options, this._query);
        if (filtered) {
            this.updateResults(filtered);
        }
        return callback();
    }
    // Updates & caches the new set of results.
    updateResults(results) {
        this._resultsCache[this._query] = results;
        this._results = results;
    }
    // tslint:disable-next-line:promise-function-async
    initialLookup(initial) {
        if (!this._optionsLookup) {
            return Promise.resolve([]);
        }
        if (initial instanceof Array) {
            return this._optionsLookup(undefined, initial);
        }
        return this._optionsLookup(undefined, initial);
    }
    // Converts a query string to regex without throwing an error.
    toRegex(query) {
        try {
            return new RegExp(query, "i");
        }
        catch (e) {
            return query;
        }
    }
    // Generates HTML for highlighted match text.
    highlightMatches(text, query) {
        const regex = this.toRegex(query);
        if (regex instanceof RegExp) {
            return text.replace(regex, match => `<b>${match}</b>`);
        }
        return text;
    }
    // Resets the search back to a pristine state.
    reset() {
        this._results = [];
        this._resultsCache = {};
        this._isSearching = false;
        this.updateQuery("");
    }
}

function SuiSearch_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 6);
} }
function SuiSearch_sui_search_result_4_Template(rf, ctx) { if (rf & 1) {
    const _r96 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "sui-search-result", 7);
    ɵɵlistener("click", function SuiSearch_sui_search_result_4_Template_sui_search_result_click_0_listener($event) { ɵɵrestoreView(_r96); const r_r94 = ctx.$implicit; const ctx_r95 = ɵɵnextContext(); return ctx_r95.select(r_r94); });
    ɵɵelementEnd();
} if (rf & 2) {
    const r_r94 = ctx.$implicit;
    const ctx_r92 = ɵɵnextContext();
    ɵɵproperty("value", r_r94)("query", ctx_r92.query)("formatter", ctx_r92.resultFormatter)("template", ctx_r92.resultTemplate);
} }
function SuiSearch_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "div", 9);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 10);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r93 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r93.localeValues.noResults.header);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r93.localeValues.noResults.message);
} }
class SuiSearch {
    constructor(_element, renderer, _localizationService) {
        this._element = _element;
        this._localizationService = _localizationService;
        this.dropdownService = new DropdownService();
        this.searchService = new SearchService();
        this.onLocaleUpdate();
        this._localizationService.onLanguageUpdate.subscribe(() => this.onLocaleUpdate());
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
    get isActive() {
        return this.dropdownService.isOpen;
    }
    // Gets & sets the placeholder text displayed inside the text input.
    get placeholder() {
        return this._placeholder || this.localeValues.placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    get localeValues() {
        return this._localizationService.override(this._localeValues, this.localeOverrides);
    }
    get query() {
        return this.searchService.query;
    }
    set query(query) {
        this.selectedResult = undefined;
        // Initialise a delayed search.
        this.searchService.updateQueryDelayed(query, () => 
        // Set the results open state depending on whether a query has been entered.
        this.dropdownService.setOpenState(this.searchService.query.length > 0));
    }
    set options(options) {
        if (options) {
            this.searchService.options = options;
        }
    }
    set optionsFilter(filter) {
        if (filter) {
            this.searchService.optionsFilter = filter;
        }
    }
    set optionsLookup(lookupFn) {
        this.searchService.optionsLookup = lookupFn;
    }
    set optionsField(field) {
        this.searchService.optionsField = field;
    }
    get resultFormatter() {
        if (this._resultFormatter) {
            return this._resultFormatter;
        }
        else if (this.searchService.optionsLookup) {
            return r => this.readValue(r);
        }
        else {
            return (r, q) => this.searchService.highlightMatches(this.readValue(r), q);
        }
    }
    set resultFormatter(formatter) {
        this._resultFormatter = formatter;
    }
    set searchDelay(delay) {
        this.searchService.searchDelay = delay;
    }
    get isSearching() {
        return this.searchService.isSearching;
    }
    get results() {
        return this.searchService.results.slice(0, this.maxResults);
    }
    ngAfterViewInit() {
        this._menu.service = this.dropdownService;
    }
    onLocaleUpdate() {
        this._localeValues = this._localizationService.get().search;
    }
    // Selects a result.
    select(result) {
        this.onResultSelected.emit(result);
        this.dropdownService.setOpenState(false);
        if (this.retainSelectedResult) {
            this.selectedResult = result;
            this.searchService.updateQuery(this.readValue(result));
        }
        else {
            this.searchService.updateQuery("");
        }
    }
    onClick(e) {
        this.open();
    }
    onFocusIn() {
        if (!this.dropdownService.isAnimating) {
            this.open();
        }
    }
    open() {
        if (this.searchService.query.length > 0) {
            // Only open on click when there is a query entered.
            this.dropdownService.setOpenState(true);
        }
    }
    onFocusOut(e) {
        console.log(e);
        if (!this._element.nativeElement.contains(e.relatedTarget)) {
            this.dropdownService.setOpenState(false);
        }
    }
    // Reads the specified field from an item.
    readValue(object) {
        return Util.Object.readValue(object, this.searchService.optionsField);
    }
}
SuiSearch.ɵfac = function SuiSearch_Factory(t) { return new (t || SuiSearch)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SuiLocalizationService)); };
SuiSearch.ɵcmp = ɵɵdefineComponent({ type: SuiSearch, selectors: [["sui-search"]], viewQuery: function SuiSearch_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(SuiDropdownMenu, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menu = _t.first);
    } }, hostVars: 9, hostBindings: function SuiSearch_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("focusin", function SuiSearch_focusin_HostBindingHandler($event) { return ctx.onFocusIn(); })("focusout", function SuiSearch_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", ctx.tabindex);
        ɵɵclassProp("ui", ctx.hasClasses)("search", ctx.hasClasses)("active", ctx.isActive)("loading", ctx.isSearching);
    } }, inputs: { hasIcon: "hasIcon", placeholder: "placeholder", options: "options", optionsFilter: "optionsFilter", optionsLookup: "optionsLookup", optionsField: "optionsField", resultFormatter: "resultFormatter", resultTemplate: "resultTemplate", retainSelectedResult: "retainSelectedResult", searchDelay: "searchDelay", maxResults: "maxResults", transition: "transition", transitionDuration: "transitionDuration" }, outputs: { onResultSelected: "resultSelected" }, decls: 6, vars: 9, consts: [[1, "ui", "input", 3, "click"], ["type", "text", "autocomplete", "off", 1, "prompt", 3, "ngModel", "ngModelChange"], ["class", "search icon", 4, "ngIf"], ["suiDropdownMenu", "", "menuSelectedItemClass", "active", 1, "results", 3, "menuTransition", "menuTransitionDuration"], ["class", "item", 3, "value", "query", "formatter", "template", "click", 4, "ngFor", "ngForOf"], ["class", "message empty", 4, "ngIf"], [1, "search", "icon"], [1, "item", 3, "value", "query", "formatter", "template", "click"], [1, "message", "empty"], [1, "header"], [1, "description"]], template: function SuiSearch_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function SuiSearch_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵɵelementStart(1, "input", 1);
        ɵɵlistener("ngModelChange", function SuiSearch_Template_input_ngModelChange_1_listener($event) { return ctx.query = $event; });
        ɵɵelementEnd();
        ɵɵtemplate(2, SuiSearch_i_2_Template, 1, 0, "i", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, SuiSearch_sui_search_result_4_Template, 1, 4, "sui-search-result", 4);
        ɵɵtemplate(5, SuiSearch_div_5_Template, 5, 2, "div", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("icon", ctx.hasIcon);
        ɵɵadvance(1);
        ɵɵproperty("ngModel", ctx.query);
        ɵɵattribute("placeholder", ctx.placeholder);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasIcon);
        ɵɵadvance(1);
        ɵɵproperty("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.results);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.results.length == 0);
    } }, styles: ["[_nghost-%COMP%] {\n    display: inline-block;\n    outline: 0;\n}\n\n\n.results[_ngcontent-%COMP%] {\n    margin-bottom: .5em;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSearch, [{
        type: Component,
        args: [{
                selector: "sui-search",
                template: `
<div class="ui input" [class.icon]="hasIcon" (click)="onClick($event)">
    <input class="prompt" type="text" [attr.placeholder]="placeholder" autocomplete="off" [(ngModel)]="query">
    <i *ngIf="hasIcon" class="search icon"></i>
</div>
<div class="results"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     menuSelectedItemClass="active">

    <sui-search-result *ngFor="let r of results"
                       class="item"
                       [value]="r"
                       [query]="query"
                       [formatter]="resultFormatter"
                       [template]="resultTemplate"
                       (click)="select(r)"></sui-search-result>

    <div *ngIf="results.length == 0" class="message empty">
        <div class="header">{{ localeValues.noResults.header }}</div>
        <div class="description">{{ localeValues.noResults.message }}</div>
    </div>
</div>
`,
                styles: [`
/* Ensures results div has margin. */
:host {
    display: inline-block;
    outline: 0;
}

/* Fixes positioning when results are pushed above the search. */
.results {
    margin-bottom: .5em;
}
`]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: SuiLocalizationService }]; }, { _menu: [{
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

class SuiSearchModule {
}
SuiSearchModule.ɵmod = ɵɵdefineNgModule({ type: SuiSearchModule });
SuiSearchModule.ɵinj = ɵɵdefineInjector({ factory: function SuiSearchModule_Factory(t) { return new (t || SuiSearchModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            SuiDropdownModule,
            SuiLocalizationModule,
            SuiUtilityModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiSearchModule, { declarations: [SuiSearch,
        SuiSearchResult], imports: [CommonModule,
        FormsModule,
        SuiDropdownModule,
        SuiLocalizationModule,
        SuiUtilityModule], exports: [SuiSearch] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSearchModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    SuiDropdownModule,
                    SuiLocalizationModule,
                    SuiUtilityModule
                ],
                declarations: [
                    SuiSearch,
                    SuiSearchResult
                ],
                exports: [
                    SuiSearch
                ]
            }]
    }], null, null); })();
ɵɵsetComponentScope(SuiSearch, [SuiSearch,
    SuiSearchResult, NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, ɵangular_packages_forms_forms_y, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, NgModel, NgModelGroup, NgForm, SuiDropdown, SuiDropdownMenu, SuiDropdownMenuItem], [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]);

const _c0$c = ["templateSibling"];
class SuiSelectOption extends SuiDropdownMenuItem {
    constructor(renderer, element, changeDetector) {
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        super(renderer, element);
        this.changeDetector = changeDetector;
        this.hasClasses = true;
        this.isActive = false;
        this.onSelected = new EventEmitter();
        // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
        this.renderedText = "";
        this.usesTemplate = false;
    }
    set formatter(formatter) {
        if (!this.usesTemplate) {
            this.renderedText = formatter(this.value);
        }
        else {
            this.renderedText = "";
        }
    }
    onClick(e) {
        e.eventHandled = true;
        setTimeout(() => this.onSelected.emit(this.value));
    }
}
SuiSelectOption.ɵfac = function SuiSelectOption_Factory(t) { return new (t || SuiSelectOption)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
SuiSelectOption.ɵcmp = ɵɵdefineComponent({ type: SuiSelectOption, selectors: [["sui-select-option"]], viewQuery: function SuiSelectOption_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$c, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
    } }, hostVars: 4, hostBindings: function SuiSelectOption_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiSelectOption_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵɵclassProp("item", ctx.hasClasses)("active", ctx.isActive);
    } }, inputs: { value: "value" }, outputs: { onSelected: "onSelected" }, features: [ɵɵInheritDefinitionFeature], decls: 3, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML"]], template: function SuiSelectOption_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "span", null, 0);
        ɵɵelement(2, "span", 1);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("innerHTML", ctx.renderedText, ɵɵsanitizeHtml);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSelectOption, [{
        type: Component,
        args: [{
                selector: "sui-select-option",
                template: `
<span #templateSibling></span>
<span [innerHTML]="renderedText"></span>
`
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.item"]
        }], value: [{
            type: Input
        }], onSelected: [{
            type: Output
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();

class SuiSelectSearch {
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.onQueryUpdated = new EventEmitter();
        this.onQueryKeyDown = new EventEmitter();
        this.hasClasses = true;
        this.autoComplete = "off";
    }
    set query(query) {
        this._renderer.setProperty(this._element.nativeElement, "value", query);
    }
    updateQuery(query) {
        this.onQueryUpdated.emit(query);
    }
    onKeyDown(e) {
        this.onQueryKeyDown.emit(e);
    }
    focus() {
        // Slightly delay to support in menu search.
        this._element.nativeElement.focus();
        setTimeout(() => this._element.nativeElement.focus());
    }
}
SuiSelectSearch.ɵfac = function SuiSelectSearch_Factory(t) { return new (t || SuiSelectSearch)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
SuiSelectSearch.ɵdir = ɵɵdefineDirective({ type: SuiSelectSearch, selectors: [["input", "suiSelectSearch", ""]], hostVars: 3, hostBindings: function SuiSelectSearch_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function SuiSelectSearch_input_HostBindingHandler($event) { return ctx.updateQuery($event.target.value); })("keydown", function SuiSelectSearch_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        ɵɵattribute("autocomplete", ctx.autoComplete);
        ɵɵclassProp("search", ctx.hasClasses);
    } } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSelectSearch, [{
        type: Directive,
        args: [{
                selector: "input[suiSelectSearch]"
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.search"]
        }], autoComplete: [{
            type: HostBinding,
            args: ["attr.autocomplete"]
        }], updateQuery: [{
            type: HostListener,
            args: ["input", ["$event.target.value"]]
        }], onKeyDown: [{
            type: HostListener,
            args: ["keydown", ["$event"]]
        }] }); })();

// We use generic type T to specify the type of the options we are working with,
// and U to specify the type of the property of the option used as the value.
class SuiSelectBase {
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
SuiSelectBase.ɵfac = function SuiSelectBase_Factory(t) { return new (t || SuiSelectBase)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SuiLocalizationService)); };
SuiSelectBase.ɵdir = ɵɵdefineDirective({ type: SuiSelectBase, contentQueries: function SuiSelectBase_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuiSelectSearch, true);
        ɵɵcontentQuery(dirIndex, SuiSelectOption, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._manualSearch = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._renderedOptions = _t);
    } }, viewQuery: function SuiSelectBase_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(SuiDropdownMenu, true);
        ɵɵstaticViewQuery(SuiSelectSearch, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menu = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._internalSearch = _t.first);
    } }, hostVars: 15, hostBindings: function SuiSelectBase_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiSelectBase_click_HostBindingHandler($event) { return ctx.onClick($event); })("focusin", function SuiSelectBase_focusin_HostBindingHandler($event) { return ctx.onFocusIn(); })("focusout", function SuiSelectBase_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); })("keypress", function SuiSelectBase_keypress_HostBindingHandler($event) { return ctx.onKeyPress($event); })("keydown", function SuiSelectBase_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", ctx.tabindex);
        ɵɵclassProp("ui", ctx.hasClasses)("dropdown", ctx.hasClasses)("active", ctx.isActive)("visible", ctx.isVisible)("search", ctx.hasSearchClass)("loading", ctx.isSearching)("disabled", ctx.isDisabled);
    } }, inputs: { isSearchable: "isSearchable", _tabIndex: ["tabindex", "_tabIndex"], isDisabled: "isDisabled", options: "options", optionsFilter: "optionsFilter", optionsLookup: "optionsLookup", labelField: "labelField", valueField: "valueField", optionTemplate: "optionTemplate", optionFormatter: "optionFormatter", icon: "icon", transition: "transition", transitionDuration: "transitionDuration" }, outputs: { onTouched: "touched" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSelectBase, [{
        type: Directive
    }], function () { return [{ type: ElementRef }, { type: SuiLocalizationService }]; }, { _menu: [{
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

const _c0$d = ["templateSibling"];
function SuiMultiSelectLabel_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const ctx_r101 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r101.formatter(ctx_r101.value), ɵɵsanitizeHtml);
} }
// See https://github.com/Microsoft/TypeScript/issues/13449.
const templateRef$3 = TemplateRef;
class SuiMultiSelectLabel extends SuiTransition {
    constructor(renderer, element, changeDetector, componentFactory) {
        super(renderer, element, changeDetector);
        this.componentFactory = componentFactory;
        // Initialise transition functionality.
        this._transitionController = new TransitionController(false, "inline-block");
        this.setTransitionController(this._transitionController);
        this.onDeselected = new EventEmitter();
        this.hasClasses = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.In));
    }
    get template() {
        return this._template;
    }
    set template(template) {
        this._template = template;
        if (this.template) {
            this.componentFactory.createView(this.templateSibling, this.template, {
                $implicit: this.value,
                query: this.query
            });
        }
    }
    deselectOption(e) {
        e.eventHandled = true;
        this._transitionController.animate(new Transition("scale", 100, TransitionDirection.Out, () => this.onDeselected.emit(this.value)));
    }
    onClick(e) {
        e.eventHandled = true;
    }
}
SuiMultiSelectLabel.ɵfac = function SuiMultiSelectLabel_Factory(t) { return new (t || SuiMultiSelectLabel)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(SuiComponentFactory)); };
SuiMultiSelectLabel.ɵcmp = ɵɵdefineComponent({ type: SuiMultiSelectLabel, selectors: [["sui-multi-select-label"]], viewQuery: function SuiMultiSelectLabel_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$d, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateSibling = _t.first);
    } }, hostVars: 4, hostBindings: function SuiMultiSelectLabel_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiMultiSelectLabel_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("label", ctx.hasClasses);
    } }, inputs: { value: "value", query: "query", formatter: "formatter", template: "template" }, outputs: { onDeselected: "deselected" }, features: [ɵɵInheritDefinitionFeature], decls: 4, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML", 4, "ngIf"], [1, "delete", "icon", 3, "click"], [3, "innerHTML"]], template: function SuiMultiSelectLabel_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "span", null, 0);
        ɵɵtemplate(2, SuiMultiSelectLabel_span_2_Template, 1, 1, "span", 1);
        ɵɵelementStart(3, "i", 2);
        ɵɵlistener("click", function SuiMultiSelectLabel_Template_i_click_3_listener($event) { return ctx.deselectOption($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.template);
    } }, directives: [NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiMultiSelectLabel, [{
        type: Component,
        args: [{
                selector: "sui-multi-select-label",
                template: `
<span #templateSibling></span>
<span *ngIf="!template" [innerHTML]="formatter(value)"></span>
<i class="delete icon" (click)="deselectOption($event)"></i>
`
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: SuiComponentFactory }]; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.ui"]
        }, {
            type: HostBinding,
            args: ["class.label"]
        }], value: [{
            type: Input
        }], query: [{
            type: Input
        }], onDeselected: [{
            type: Output,
            args: ["deselected"]
        }], formatter: [{
            type: Input
        }], template: [{
            type: Input
        }], templateSibling: [{
            type: ViewChild,
            args: ["templateSibling", { read: ViewContainerRef, static: true }]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();

function SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r110 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "sui-multi-select-label", 8);
    ɵɵlistener("deselected", function SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template_sui_multi_select_label_deselected_0_listener($event) { ɵɵrestoreView(_r110); const ctx_r109 = ɵɵnextContext(2); return ctx_r109.deselectOption($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const selected_r108 = ctx.$implicit;
    const ctx_r107 = ɵɵnextContext(2);
    ɵɵproperty("value", selected_r108)("query", ctx_r107.query)("formatter", ctx_r107.configuredFormatter)("template", ctx_r107.optionTemplate);
} }
function SuiMultiSelect_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template, 1, 4, "sui-multi-select-label", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r102 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r102.selectedOptions);
} }
function SuiMultiSelect_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r103 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r103.placeholder);
} }
function SuiMultiSelect_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const ctx_r105 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r105.selectedMessage, "");
} }
function SuiMultiSelect_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r111 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r111.localeValues.noResultsMessage);
} }
function SuiMultiSelect_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r112 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r112.maxSelectedMessage);
} }
function SuiMultiSelect_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SuiMultiSelect_ng_container_9_div_1_Template, 2, 1, "div", 9);
    ɵɵtemplate(2, SuiMultiSelect_ng_container_9_div_2_Template, 2, 1, "div", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r106 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r106.maxSelectedReached);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r106.maxSelectedReached);
} }
const _c0$e = ["*"];
class SuiMultiSelect extends SuiSelectBase {
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
SuiMultiSelect.ɵfac = function SuiMultiSelect_Factory(t) { return new (t || SuiMultiSelect)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SuiLocalizationService)); };
SuiMultiSelect.ɵcmp = ɵɵdefineComponent({ type: SuiMultiSelect, selectors: [["sui-multi-select"]], hostVars: 2, hostBindings: function SuiMultiSelect_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("multiple", ctx.hasClasses);
    } }, inputs: { hasLabels: "hasLabels", placeholder: "placeholder", maxSelected: "maxSelected" }, outputs: { selectedOptionsChange: "selectedOptionsChange" }, features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$e, decls: 10, vars: 15, consts: [[3, "click"], [4, "ngIf"], ["suiSelectSearch", "", "type", "text", 3, "hidden"], [1, "text"], [4, "ngIf", "ngIfElse"], ["selectedBlock", ""], ["suiDropdownMenu", "", 1, "menu", 3, "menuTransition", "menuTransitionDuration", "menuAutoSelectFirst"], [3, "value", "query", "formatter", "template", "deselected", 4, "ngFor", "ngForOf"], [3, "value", "query", "formatter", "template", "deselected"], ["class", "message", 4, "ngIf"], [1, "message"]], template: function SuiMultiSelect_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "i", 0);
        ɵɵlistener("click", function SuiMultiSelect_Template_i_click_0_listener($event) { return ctx.onCaretClick($event); });
        ɵɵelementEnd();
        ɵɵtemplate(1, SuiMultiSelect_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵelement(2, "input", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, SuiMultiSelect_ng_container_4_Template, 2, 1, "ng-container", 4);
        ɵɵtemplate(5, SuiMultiSelect_ng_template_5_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 6);
        ɵɵprojection(8);
        ɵɵtemplate(9, SuiMultiSelect_ng_container_9_Template, 3, 2, "ng-container", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r104 = ɵɵreference(6);
        ɵɵclassMapInterpolate1("", ctx.icon, " icon");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasLabels);
        ɵɵadvance(1);
        ɵɵproperty("hidden", !ctx.isSearchable || ctx.isSearchExternal);
        ɵɵadvance(1);
        ɵɵclassProp("default", ctx.hasLabels)("filtered", !!ctx.query && !ctx.isSearchExternal);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.hasLabels)("ngIfElse", _r104);
        ɵɵadvance(3);
        ɵɵproperty("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration)("menuAutoSelectFirst", true);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.availableOptions.length == 0);
    } }, directives: [NgIf, SuiSelectSearch, SuiDropdownMenu, NgForOf, SuiMultiSelectLabel], styles: ["[_nghost-%COMP%]   input.search[_ngcontent-%COMP%] {\n    width: 12em !important;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiMultiSelect, [{
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
    }], function () { return [{ type: ElementRef }, { type: SuiLocalizationService }]; }, { selectedOptionsChange: [{
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
class SuiMultiSelectValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiMultiSelectValueAccessor.ɵfac = function SuiMultiSelectValueAccessor_Factory(t) { return new (t || SuiMultiSelectValueAccessor)(ɵɵdirectiveInject(SuiMultiSelect)); };
SuiMultiSelectValueAccessor.ɵdir = ɵɵdefineDirective({ type: SuiMultiSelectValueAccessor, selectors: [["sui-multi-select"]], hostBindings: function SuiMultiSelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("selectedOptionsChange", function SuiMultiSelectValueAccessor_selectedOptionsChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiMultiSelectValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [ɵɵProvidersFeature([customValueAccessorFactory(SuiMultiSelectValueAccessor)]), ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiMultiSelectValueAccessor, [{
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

const _c0$f = ["optionTemplateSibling"];
function SuiSelect_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r113 = ɵɵnextContext();
    ɵɵclassProp("filtered", ctx_r113.query);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r113.placeholder);
} }
function SuiSelect_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 9);
} if (rf & 2) {
    const ctx_r115 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r115.configuredFormatter(ctx_r115.selectedOption), ɵɵsanitizeHtml);
} }
function SuiSelect_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r116 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r116.localeValues.noResultsMessage, " ");
} }
const _c1$5 = ["*"];
class SuiSelect extends SuiSelectBase {
    constructor(element, localizationService) {
        super(element, localizationService);
        this.selectedOptionChange = new EventEmitter();
    }
    get placeholder() {
        return this._placeholder || this.localeValues.single.placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    optionsUpdateHook() {
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
    }
    queryUpdateHook() {
        // When the query is updated, we just abandon the current selection.
        this.selectedOption = undefined;
    }
    selectOption(option) {
        // Choose and emit the selected option.
        this.selectedOption = option;
        this.selectedOptionChange.emit(this.valueGetter(option));
        this.dropdownService.setOpenState(false);
        this.resetQuery();
        this.drawSelectedOption();
        // Automatically refocus the search input for better keyboard accessibility.
        this.focus();
    }
    writeValue(value) {
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
                        .then(i => {
                        this.selectedOption = i;
                        this.drawSelectedOption();
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
    }
    initialiseRenderedOption(option) {
        super.initialiseRenderedOption(option);
        // Boldens the item so it appears selected in the dropdown.
        option.isActive = option.value === this.selectedOption;
    }
    drawSelectedOption() {
        // Updates the active class on the newly selected option.
        if (this._renderedOptions) {
            this.onAvailableOptionsRendered();
        }
        if (this.selectedOption != undefined && this.optionTemplate) {
            this.drawTemplate(this._optionTemplateSibling, this.selectedOption);
        }
    }
}
SuiSelect.ɵfac = function SuiSelect_Factory(t) { return new (t || SuiSelect)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SuiLocalizationService)); };
SuiSelect.ɵcmp = ɵɵdefineComponent({ type: SuiSelect, selectors: [["sui-select"]], viewQuery: function SuiSelect_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$f, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._optionTemplateSibling = _t.first);
    } }, inputs: { placeholder: "placeholder" }, outputs: { selectedOptionChange: "selectedOptionChange" }, features: [ɵɵInheritDefinitionFeature], ngContentSelectors: _c1$5, decls: 10, vars: 12, consts: [["suiSelectSearch", "", "type", "text", 3, "hidden"], ["class", "default text", 3, "filtered", 4, "ngIf"], [1, "text"], ["optionTemplateSibling", ""], [3, "innerHTML", 4, "ngIf"], [3, "click"], ["suiDropdownMenu", "", 1, "menu", 3, "menuTransition", "menuTransitionDuration", "menuAutoSelectFirst"], ["class", "message", 4, "ngIf"], [1, "default", "text"], [3, "innerHTML"], [1, "message"]], template: function SuiSelect_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelement(0, "input", 0);
        ɵɵtemplate(1, SuiSelect_div_1_Template, 2, 3, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "span", null, 3);
        ɵɵtemplate(5, SuiSelect_span_5_Template, 1, 1, "span", 4);
        ɵɵelementEnd();
        ɵɵelementStart(6, "i", 5);
        ɵɵlistener("click", function SuiSelect_Template_i_click_6_listener($event) { return ctx.onCaretClick($event); });
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 6);
        ɵɵprojection(8);
        ɵɵtemplate(9, SuiSelect_div_9_Template, 2, 1, "div", 7);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("hidden", !ctx.isSearchable || ctx.isSearchExternal);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.selectedOption == undefined);
        ɵɵadvance(1);
        ɵɵclassProp("filtered", ctx.query || ctx.selectedOption == undefined);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", !ctx.optionTemplate && ctx.selectedOption != undefined);
        ɵɵadvance(1);
        ɵɵclassMapInterpolate1("", ctx.icon, " icon");
        ɵɵadvance(1);
        ɵɵproperty("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration)("menuAutoSelectFirst", ctx.isSearchable);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.isSearchable && ctx.availableOptions.length === 0);
    } }, directives: [SuiSelectSearch, NgIf, SuiDropdownMenu], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSelect, [{
        type: Component,
        args: [{
                selector: "sui-select",
                template: `
<!-- Query input -->
<input suiSelectSearch
       type="text"
       [hidden]="!isSearchable || isSearchExternal">

<!-- Placeholder text -->
<div *ngIf="selectedOption == undefined" class="default text" [class.filtered]="query">{{ placeholder }}</div>
<!-- Selected item -->
<div class="text" [class.filtered]="query || selectedOption == undefined">
    <span #optionTemplateSibling></span>
    <span *ngIf="!optionTemplate && selectedOption != undefined" [innerHTML]="configuredFormatter(selectedOption)"></span>
</div>
<!-- Dropdown icon -->
<i class="{{ icon }} icon" (click)="onCaretClick($event)"></i>
<!-- Select dropdown menu -->
<div class="menu"
     suiDropdownMenu
     [menuTransition]="transition"
     [menuTransitionDuration]="transitionDuration"
     [menuAutoSelectFirst]="isSearchable">

    <ng-content></ng-content>
    <div *ngIf="isSearchable && availableOptions.length === 0" class="message">
        {{ localeValues.noResultsMessage }}
    </div>
</div>
`
            }]
    }], function () { return [{ type: ElementRef }, { type: SuiLocalizationService }]; }, { _optionTemplateSibling: [{
            type: ViewChild,
            args: ["optionTemplateSibling", { read: ViewContainerRef, static: true }]
        }], selectedOptionChange: [{
            type: Output
        }], placeholder: [{
            type: Input
        }] }); })();
// Value accessor directive for the select to support ngModel.
class SuiSelectValueAccessor extends CustomValueAccessor {
    constructor(host) {
        super(host);
    }
}
SuiSelectValueAccessor.ɵfac = function SuiSelectValueAccessor_Factory(t) { return new (t || SuiSelectValueAccessor)(ɵɵdirectiveInject(SuiSelect)); };
SuiSelectValueAccessor.ɵdir = ɵɵdefineDirective({ type: SuiSelectValueAccessor, selectors: [["sui-select"]], hostBindings: function SuiSelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("selectedOptionChange", function SuiSelectValueAccessor_selectedOptionChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiSelectValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
    } }, features: [ɵɵProvidersFeature([customValueAccessorFactory(SuiSelectValueAccessor)]), ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSelectValueAccessor, [{
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

class SuiSelectModule {
}
SuiSelectModule.ɵmod = ɵɵdefineNgModule({ type: SuiSelectModule });
SuiSelectModule.ɵinj = ɵɵdefineInjector({ factory: function SuiSelectModule_Factory(t) { return new (t || SuiSelectModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            SuiDropdownModule,
            SuiUtilityModule,
            SuiLocalizationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiSelectModule, { declarations: [SuiSelect,
        SuiSelectOption,
        SuiSelectSearch,
        SuiSelectValueAccessor,
        SuiMultiSelect,
        SuiMultiSelectLabel,
        SuiMultiSelectValueAccessor], imports: [CommonModule,
        FormsModule,
        SuiDropdownModule,
        SuiUtilityModule,
        SuiLocalizationModule], exports: [SuiSelect,
        SuiSelectOption,
        SuiSelectSearch,
        SuiSelectValueAccessor,
        SuiMultiSelect,
        SuiMultiSelectValueAccessor] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    SuiDropdownModule,
                    SuiUtilityModule,
                    SuiLocalizationModule
                ],
                declarations: [
                    SuiSelect,
                    SuiSelectOption,
                    SuiSelectSearch,
                    SuiSelectValueAccessor,
                    SuiMultiSelect,
                    SuiMultiSelectLabel,
                    SuiMultiSelectValueAccessor
                ],
                exports: [
                    SuiSelect,
                    SuiSelectOption,
                    SuiSelectSearch,
                    SuiSelectValueAccessor,
                    SuiMultiSelect,
                    SuiMultiSelectValueAccessor
                ]
            }]
    }], null, null); })();

const SidebarTransition = {
    Overlay: "overlay",
    Push: "push",
    ScaleDown: "scale down",
    Uncover: "uncover",
    SlideAlong: "slide along",
    SlideOut: "slide out"
};
const SidebarDirection = {
    Left: "left",
    Right: "right",
    Top: "top",
    Bottom: "bottom"
};
class SidebarService {
    constructor(isVisible = false) {
        this.isVisible = isVisible;
        this.isAnimating = false;
        this.wasJustOpened = false;
        this.isVisibleChange = new EventEmitter();
        this.widthChange = new EventEmitter();
        this.heightChange = new EventEmitter();
        this.width = 260;
        this.height = 0;
        this.transition = SidebarTransition.Uncover;
    }
    get width() {
        if (this.direction === SidebarDirection.Left) {
            return this._width;
        }
        if (this.direction === SidebarDirection.Right) {
            return -this._width;
        }
        return 0;
    }
    set width(width) {
        this._width = width;
        this.widthChange.emit();
    }
    get height() {
        if (this.direction === SidebarDirection.Top) {
            return this._height;
        }
        if (this.direction === SidebarDirection.Bottom) {
            return -this._height;
        }
        return 0;
    }
    set height(height) {
        this._height = height;
        this.heightChange.emit();
    }
    setVisibleState(isVisible) {
        if (this.isVisible !== isVisible) {
            this.isVisible = isVisible;
            this.isAnimating = true;
            this.wasJustOpened = true;
            this.isVisibleChange.emit(isVisible);
            setTimeout(() => this.wasJustOpened = false);
            clearTimeout(this._isAnimatingTimeout);
            this._isAnimatingTimeout = window.setTimeout(() => this.isAnimating = false, 500);
        }
    }
    toggleVisibleState() {
        this.setVisibleState(!this.isVisible);
    }
}

const _c0$g = ["*"];
class SuiSidebar {
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.service = new SidebarService();
        // We set the default here as well to force the classes to update.
        this.transition = SidebarTransition.Uncover;
        this.direction = SidebarDirection.Left;
        setTimeout(() => this.updateDimensions());
        this.service.isVisibleChange.subscribe(() => this.updateDimensions());
        this.hasClasses = true;
    }
    get transition() {
        return this.service.transition;
    }
    set transition(transition) {
        this.service.transition.split(" ").forEach(c => this.setClass(c, false));
        this.service.transition = transition;
        this.service.transition.split(" ").forEach(c => this.setClass(c, true));
    }
    get direction() {
        return this.service.direction;
    }
    set direction(direction) {
        this.setClass(this.service.direction, false);
        this.service.direction = direction;
        this.setClass(this.service.direction, true);
    }
    get isVisible() {
        return this.service.isVisible;
    }
    set isVisible(isVisible) {
        this.service.setVisibleState(isVisible);
    }
    get isVisibleChange() {
        return this.service.isVisibleChange;
    }
    get isAnimating() {
        return this.service.isAnimating;
    }
    updateDimensions() {
        this.service.width = this._element.nativeElement.offsetWidth;
        this.service.height = this._element.nativeElement.offsetHeight;
    }
    setClass(className, isAdd = true) {
        if (isAdd) {
            this._renderer.addClass(this._element.nativeElement, className);
        }
        else {
            this._renderer.removeClass(this._element.nativeElement, className);
        }
    }
    open() {
        this.service.setVisibleState(true);
    }
    close() {
        this.service.setVisibleState(false);
    }
    toggle() {
        this.service.toggleVisibleState();
    }
}
SuiSidebar.ɵfac = function SuiSidebar_Factory(t) { return new (t || SuiSidebar)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
SuiSidebar.ɵcmp = ɵɵdefineComponent({ type: SuiSidebar, selectors: [["sui-sidebar"]], hostVars: 10, hostBindings: function SuiSidebar_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ui", ctx.hasClasses)("sidebar", ctx.hasClasses)("menu", ctx.hasClasses)("visible", ctx.isVisible)("animating", ctx.isAnimating);
    } }, inputs: { transition: "transition", direction: "direction", isVisible: "isVisible" }, outputs: { isVisibleChange: "isVisibleChange" }, ngContentSelectors: _c0$g, decls: 1, vars: 0, template: function SuiSidebar_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSidebar, [{
        type: Component,
        args: [{
                selector: "sui-sidebar",
                template: `<ng-content></ng-content>`
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { hasClasses: [{
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

const _c0$h = ["*"];
class SuiSidebarSibling {
    constructor(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this.isDimmedWhenVisible = false;
        this.hasClasses = true;
    }
    get service() {
        return this._service;
    }
    set service(service) {
        this._service = service;
        setTimeout(() => this.updateTransform());
        this._service.isVisibleChange.subscribe(() => this.updateTransform());
    }
    get isVisible() {
        if (!this.service) {
            return false;
        }
        return this.service.isVisible;
    }
    get isDimmed() {
        if (!this.service) {
            return false;
        }
        return this.service.isVisible && this.isDimmedWhenVisible;
    }
    updateTransform() {
        this._renderer.removeStyle(this._element.nativeElement, "transform");
        this._renderer.removeStyle(this._element.nativeElement, "-webkit-transform");
        if (this.service.isVisible &&
            this.service.transition !== SidebarTransition.Overlay &&
            this.service.transition !== SidebarTransition.ScaleDown) {
            const translate = `translate3d(${this.service.width}px, ${this.service.height}px, 0)`;
            this._renderer.setStyle(this._element.nativeElement, "transform", translate);
            this._renderer.setStyle(this._element.nativeElement, "-webkit-transform", translate);
        }
    }
    onClick(event) {
        if (this.service.isVisible && !this.service.wasJustOpened) {
            this.service.setVisibleState(false);
        }
    }
}
SuiSidebarSibling.ɵfac = function SuiSidebarSibling_Factory(t) { return new (t || SuiSidebarSibling)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
SuiSidebarSibling.ɵcmp = ɵɵdefineComponent({ type: SuiSidebarSibling, selectors: [["sui-sidebar-sibling"]], hostVars: 6, hostBindings: function SuiSidebarSibling_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiSidebarSibling_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵɵclassProp("visible", ctx.isVisible)("dimmed", ctx.isDimmed)("pusher", ctx.hasClasses);
    } }, inputs: { isDimmedWhenVisible: "isDimmedWhenVisible" }, ngContentSelectors: _c0$h, decls: 1, vars: 0, template: function SuiSidebarSibling_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSidebarSibling, [{
        type: Component,
        args: [{
                selector: "sui-sidebar-sibling",
                template: `<ng-content></ng-content>`,
                styles: [`
:host {
    display: block;
}
`]
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { isDimmedWhenVisible: [{
            type: Input
        }], isVisible: [{
            type: HostBinding,
            args: ["class.visible"]
        }], isDimmed: [{
            type: HostBinding,
            args: ["class.dimmed"]
        }], hasClasses: [{
            type: HostBinding,
            args: ["class.pusher"]
        }], onClick: [{
            type: HostListener,
            args: ["click", ["$event"]]
        }] }); })();

const _c0$i = ["*"];
class SuiSidebarContainer {
    constructor() {
        this.hasClasses = true;
    }
    ngAfterContentInit() {
        if (!this.sidebar) {
            throw new Error("You must include a <sui-sidebar> element within the container.");
        }
        this.service = this.sidebar.service;
        if (!this.sibling) {
            throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
        }
        this.sibling.service = this.service;
    }
}
SuiSidebarContainer.ɵfac = function SuiSidebarContainer_Factory(t) { return new (t || SuiSidebarContainer)(); };
SuiSidebarContainer.ɵcmp = ɵɵdefineComponent({ type: SuiSidebarContainer, selectors: [["sui-sidebar-container"]], contentQueries: function SuiSidebarContainer_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuiSidebar, true);
        ɵɵcontentQuery(dirIndex, SuiSidebarSibling, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sidebar = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sibling = _t.first);
    } }, hostVars: 2, hostBindings: function SuiSidebarContainer_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("pushable", ctx.hasClasses);
    } }, ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function SuiSidebarContainer_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSidebarContainer, [{
        type: Component,
        args: [{
                selector: "sui-sidebar-container",
                template: `<ng-content></ng-content>`,
                styles: [`
:host {
    display: block;
}
`]
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.pushable"]
        }], sidebar: [{
            type: ContentChild,
            args: [SuiSidebar, /* TODO: add static flag */ {}]
        }], sibling: [{
            type: ContentChild,
            args: [SuiSidebarSibling, /* TODO: add static flag */ {}]
        }] }); })();

class SuiSidebarModule {
}
SuiSidebarModule.ɵmod = ɵɵdefineNgModule({ type: SuiSidebarModule });
SuiSidebarModule.ɵinj = ɵɵdefineInjector({ factory: function SuiSidebarModule_Factory(t) { return new (t || SuiSidebarModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiSidebarModule, { declarations: [SuiSidebar,
        SuiSidebarContainer,
        SuiSidebarSibling], imports: [CommonModule], exports: [SuiSidebar,
        SuiSidebarContainer,
        SuiSidebarSibling] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiSidebarModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiSidebar,
                    SuiSidebarContainer,
                    SuiSidebarSibling
                ],
                exports: [
                    SuiSidebar,
                    SuiSidebarContainer,
                    SuiSidebarSibling
                ]
            }]
    }], null, null); })();

class Tab {
    constructor(header, content) {
        this.id = header.id;
        this.header = header;
        this.content = content;
        // So that the header and content isActive properties are always in sync.
        this.header.isActiveChange
            .subscribe(() => this.content.isActive = this.isActive);
    }
    // Saves accessing .header.isActive every time.
    get isActive() {
        return this.header.isActive;
    }
    set isActive(active) {
        // Use `setActiveState` so as not to fire 'external changes' event.
        this.header.setActiveState(active);
    }
    // Saves accessing .header.isDisabled every time.
    get isDisabled() {
        return this.header.isDisabled;
    }
}

class SuiTabHeader {
    constructor() {
        this._isActive = false;
        this.isActiveChange = new EventEmitter();
        this.isActiveExternalChange = new EventEmitter();
        this.onActivate = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.isDisabled = false;
        this.hasClasses = true;
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(active) {
        let isActive = active;
        // Only used by @Input(), runs whenever user input changes `isActive`.
        // Run in timeout because `isDisabled` can prohibit user from changing `isActive`.
        // so update is delayed to avoid 'changed after checked' error.
        setTimeout(() => {
            // Only allow change if tab header is not disabled.
            isActive = !this.isDisabled ? active : false;
            this.setActiveState(isActive);
            // Fire 'external change' event as user input has occured.
            this.isActiveExternalChange.emit(isActive);
        });
    }
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(disabled) {
        // Only update if value provided is different to current one.
        if (this._isDisabled !== disabled) {
            this._isDisabled = disabled;
            // If now disabled, then tab header must be deactivated.
            if (this.isDisabled) {
                this.isActive = false;
            }
        }
    }
    // Internally update active state.
    setActiveState(active) {
        // If (cast) active value has changed:
        if (!!this._isActive !== active) {
            // Update to the new value.
            this._isActive = active;
            // Fire the appropriate activation event.
            if (active) {
                this.onActivate.emit();
            }
            else {
                this.onDeactivate.emit();
            }
        }
        // Regardless, emit a change to `isActive`, so [(isActive)] works correctly.
        this.isActiveChange.emit(active);
    }
    onClick() {
        if (!this.isDisabled) {
            // Activate the tab when clicked, so long as it isn't disabled.
            this.isActive = true;
        }
    }
}
SuiTabHeader.ɵfac = function SuiTabHeader_Factory(t) { return new (t || SuiTabHeader)(); };
SuiTabHeader.ɵdir = ɵɵdefineDirective({ type: SuiTabHeader, selectors: [["", "suiTabHeader", ""]], hostVars: 6, hostBindings: function SuiTabHeader_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function SuiTabHeader_click_HostBindingHandler($event) { return ctx.onClick(); });
    } if (rf & 2) {
        ɵɵclassProp("item", ctx.hasClasses)("active", ctx.isActive)("disabled", ctx.isDisabled);
    } }, inputs: { id: ["suiTabHeader", "id"], isActive: "isActive", isDisabled: "isDisabled" }, outputs: { isActiveChange: "isActiveChange", onActivate: "activate", onDeactivate: "deactivate" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiTabHeader, [{
        type: Directive,
        args: [{
                selector: "[suiTabHeader]"
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.item"]
        }], id: [{
            type: Input,
            args: ["suiTabHeader"]
        }], isActiveChange: [{
            type: Output
        }], onActivate: [{
            type: Output,
            args: ["activate"]
        }], onDeactivate: [{
            type: Output,
            args: ["deactivate"]
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }, {
            type: Input
        }], isDisabled: [{
            type: HostBinding,
            args: ["class.disabled"]
        }, {
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ["click"]
        }] }); })();

class SuiTabContent {
    constructor() {
        this.isActive = false;
        this.hasClasses = true;
    }
}
SuiTabContent.ɵfac = function SuiTabContent_Factory(t) { return new (t || SuiTabContent)(); };
SuiTabContent.ɵdir = ɵɵdefineDirective({ type: SuiTabContent, selectors: [["", "suiTabContent", ""]], hostVars: 4, hostBindings: function SuiTabContent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("tab", ctx.hasClasses)("active", ctx.isActive);
    } }, inputs: { id: ["suiTabContent", "id"] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiTabContent, [{
        type: Directive,
        args: [{
                selector: "[suiTabContent]"
            }]
    }], function () { return []; }, { hasClasses: [{
            type: HostBinding,
            args: ["class.tab"]
        }], id: [{
            type: Input,
            args: ["suiTabContent"]
        }], isActive: [{
            type: HostBinding,
            args: ["class.active"]
        }] }); })();

const _c0$j = ["*"];
class SuiTabset {
    constructor() {
        this.tabs = [];
        this._barrierCount = 0;
    }
    get activeTab() {
        return this._activeTab;
    }
    // When setting a tab as the currently active tab, it automatically gains
    // `isActive` status (saves littering `isActive = true` everywhere).
    set activeTab(tab) {
        this._activeTab = tab;
        tab.isActive = true;
    }
    ngAfterContentInit() {
        // Fire `internalComponentsUpdated` when the query lists change.
        this._tabHeaders.changes.subscribe(() => this.internalComponentsUpdated());
        this._tabContents.changes.subscribe(() => this.internalComponentsUpdated());
        // Initially load the tabs.
        this.loadTabs();
    }
    // Fires whenever either the tab headers or tab contents query lists update.
    internalComponentsUpdated() {
        // We are using a 'counting barrier of n = 2', i.e. the code within only runs after the method is called twice.
        // This is so that both the headers and contents query lists can update before we run code that matches the two up.
        this._barrierCount++;
        if (this._barrierCount === 2) {
            // Reset the barrier so it can be called again.
            this._barrierCount = 0;
            // Update the tabs.
            this.loadTabs();
        }
    }
    // Connects tab headers to tab contents, and creates a tab instance for each pairing.
    loadTabs() {
        // Remove any tabs that no longer have an associated header.
        this.tabs = this.tabs.filter(t => !!this._tabHeaders.find(tH => tH === t.header));
        this._tabHeaders
            // Filter out the loaded headers with attached tab instances.
            .filter(tH => !this.tabs.find(t => t.header === tH))
            .forEach(tH => {
            const content = this._tabContents.find(tC => tC.id === tH.id);
            if (!content) {
                // Error if an associated tab content cannot be found for the given header.
                throw new Error("A [suiTabHeader] must have a related [suiTabContent].");
            }
            // Create a new tab instance for this header & content combo.
            const tab = new Tab(tH, content);
            // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
            tab.header.isActiveExternalChange.subscribe(() => this.onHeaderActiveChanged(tab));
            // Add the new instance to the list of tabs.
            this.tabs.push(tab);
        });
        // Assign each tab an index (which denotes the order they physically appear in).
        this._tabHeaders
            .forEach((tH, i) => {
            const tab = this.tabs.find(t => t.header === tH);
            if (tab) {
                tab.index = i;
            }
        });
        // Sort the tabs by their index.
        this.tabs.sort((a, b) => a.index - b.index);
        if (!this.activeTab) { // Check if there are no current existing active tabs.
            // If so, we must activate the first available tab.
            this.activateFirstTab();
        }
        else if (!this.tabs.find(t => t === this.activeTab)) { // O'wise check if current active tab has been deleted.
            // If so, we must find the closest.
            // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
            setTimeout(() => this.activateClosestTab(this.activeTab));
        }
        if (this.tabs.length === 0) {
            // Error if there aren't any tabs in the tabset.
            throw new Error("You cannot have no tabs!");
        }
    }
    // Fires whenever a tab header's active state is externally changed.
    onHeaderActiveChanged(tab) {
        // If the tab has become activated, but was not previously the active tab:
        if (tab.isActive && this.activeTab !== tab) {
            // Deactivate all of the tabs.
            this.tabs.filter(t => t !== tab).forEach(t => t.isActive = false);
            // Set the currently active tab to this one.
            this.activeTab = tab;
        }
        // If the tab has become deactivated, but was previously the active tab:
        if (!tab.isActive && this.activeTab === tab) {
            // Activate the closest tab to it.
            this.activateClosestTab(tab);
        }
    }
    // Activate the first tab in the set.
    activateFirstTab() {
        this.activeTab = this.tabs[0];
    }
    // Activates the closest available tab to a given one.
    activateClosestTab(tab) {
        let nextAvailable;
        // When the exited tab's index is higher than all available tabs,
        if (tab.index >= this.tabs.length) {
            // Activate the last tab.
            nextAvailable = this.tabs[this.tabs.length - 1];
        }
        // If that didn't work, try the following cases:
        if (!nextAvailable) {
            if (!this.tabs.find(t => t === tab)) { // When the exited tab no longer exists,
                // Replace it with a tab at the same index.
                nextAvailable = this.tabs[tab.index];
            }
            else { // Or if the exited tab still exists,
                // Go to the tab immediately to the left.
                nextAvailable = this.tabs[Math.max(tab.index - 1, 0)];
            }
        }
        // However, if the chosen tab is disabled,
        if (nextAvailable.isDisabled) {
            // Activate the closest available tab to it.
            return this.activateClosestTab(nextAvailable);
        }
        this.activeTab = nextAvailable;
    }
}
SuiTabset.ɵfac = function SuiTabset_Factory(t) { return new (t || SuiTabset)(); };
SuiTabset.ɵcmp = ɵɵdefineComponent({ type: SuiTabset, selectors: [["sui-tabset"]], contentQueries: function SuiTabset_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SuiTabHeader, true);
        ɵɵcontentQuery(dirIndex, SuiTabContent, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabHeaders = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._tabContents = _t);
    } }, ngContentSelectors: _c0$j, decls: 1, vars: 0, template: function SuiTabset_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiTabset, [{
        type: Component,
        args: [{
                selector: "sui-tabset",
                template: `<ng-content></ng-content>`
            }]
    }], function () { return []; }, { _tabHeaders: [{
            type: ContentChildren,
            args: [SuiTabHeader, { descendants: true }]
        }], _tabContents: [{
            type: ContentChildren,
            args: [SuiTabContent, { descendants: true }]
        }] }); })();

class SuiTabsModule {
}
SuiTabsModule.ɵmod = ɵɵdefineNgModule({ type: SuiTabsModule });
SuiTabsModule.ɵinj = ɵɵdefineInjector({ factory: function SuiTabsModule_Factory(t) { return new (t || SuiTabsModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiTabsModule, { declarations: [SuiTabset,
        SuiTabHeader,
        SuiTabContent], imports: [CommonModule], exports: [SuiTabset,
        SuiTabHeader,
        SuiTabContent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiTabsModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SuiTabset,
                    SuiTabHeader,
                    SuiTabContent
                ],
                exports: [
                    SuiTabset,
                    SuiTabHeader,
                    SuiTabContent
                ]
            }]
    }], null, null); })();

class SuiModule {
}
SuiModule.ɵmod = ɵɵdefineNgModule({ type: SuiModule });
SuiModule.ɵinj = ɵɵdefineInjector({ factory: function SuiModule_Factory(t) { return new (t || SuiModule)(); }, imports: [
        // Collections
        SuiMessageModule,
        SuiPaginationModule,
        // Modules
        SuiAccordionModule,
        SuiCheckboxModule,
        SuiCollapseModule,
        SuiDatepickerModule,
        SuiDimmerModule,
        SuiDropdownModule,
        SuiModalModule,
        SuiPopupModule,
        SuiProgressModule,
        SuiRatingModule,
        SuiSearchModule,
        SuiSelectModule,
        SuiSidebarModule,
        SuiTabsModule,
        SuiTransitionModule,
        // Behaviors
        SuiLocalizationModule,
        // Misc
        SuiUtilityModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SuiModule, { exports: [
        // Collections
        SuiMessageModule,
        SuiPaginationModule,
        // Modules
        SuiAccordionModule,
        SuiCheckboxModule,
        SuiCollapseModule,
        SuiDatepickerModule,
        SuiDimmerModule,
        SuiDropdownModule,
        SuiModalModule,
        SuiPopupModule,
        SuiProgressModule,
        SuiRatingModule,
        SuiSearchModule,
        SuiSelectModule,
        SuiSidebarModule,
        SuiTabsModule,
        SuiTransitionModule,
        // Behaviors
        SuiLocalizationModule,
        // Misc
        SuiUtilityModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SuiModule, [{
        type: NgModule,
        args: [{
                exports: [
                    // Collections
                    SuiMessageModule,
                    SuiPaginationModule,
                    // Modules
                    SuiAccordionModule,
                    SuiCheckboxModule,
                    SuiCollapseModule,
                    SuiDatepickerModule,
                    SuiDimmerModule,
                    SuiDropdownModule,
                    SuiModalModule,
                    SuiPopupModule,
                    SuiProgressModule,
                    SuiRatingModule,
                    SuiSearchModule,
                    SuiSelectModule,
                    SuiSidebarModule,
                    SuiTabsModule,
                    SuiTransitionModule,
                    // Behaviors
                    SuiLocalizationModule,
                    // Misc
                    SuiUtilityModule
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ActiveModal, ComponentModalConfig, DatepickerMode, DropdownAutoCloseType, Modal, ModalConfig, ModalControls, ModalSize, ModalTemplate, PopupConfig, PositioningPlacement as PopupPlacement, PopupTrigger, PositioningPlacement, SearchService, SidebarDirection, SidebarTransition, SuiAccordion, SuiAccordionModule, SuiAccordionPanel, ActiveModal as SuiActiveModal, SuiCheckbox, SuiCheckboxModule, SuiCheckboxValueAccessor, SuiCollapse, SuiCollapseModule, SuiComponentFactory, SuiDatepickerDirective, SuiDatepickerDirectiveValidator, SuiDatepickerDirectiveValueAccessor, SuiDatepickerInputDirective, SuiDatepickerModule, SuiDimmer, SuiDimmerModule, SuiDropdown, SuiDropdownMenu, SuiDropdownMenuItem, SuiDropdownModule, SuiLocalizationModule, SuiLocalizationService, SuiMessage, SuiMessageModule, SuiModal, SuiModalModule, SuiModalService, SuiModule, SuiMultiSelect, SuiMultiSelectValueAccessor, SuiPagination, SuiPaginationModule, SuiPopup, SuiPopupConfig, SuiPopupDirective, SuiPopupModule, SuiPopupTemplateController, SuiProgress, SuiProgressModule, SuiRadio, SuiRadioManager, SuiRadioValueAccessor, SuiRating, SuiRatingModule, SuiRatingValueAccessor, SuiSearch, SuiSearchModule, SuiSelect, SuiSelectModule, SuiSelectOption, SuiSelectSearch, SuiSelectValueAccessor, SuiSidebar, SuiSidebarContainer, SuiSidebarModule, SuiSidebarSibling, SuiTabContent, SuiTabHeader, SuiTabsModule, SuiTabset, SuiTransition, SuiTransitionModule, SuiUtilityModule, TemplateModalConfig, Transition, TransitionController, TransitionDirection };
//# sourceMappingURL=ng2-semantic-ui.js.map
