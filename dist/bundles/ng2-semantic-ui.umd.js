(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('extend'), require('@angular/common'), require('@angular/forms'), require('popper.js'), require('date-fns'), require('date-fns/locale/en-US'), require('bowser'), require('is-ua-webview'), require('element-closest')) :
    typeof define === 'function' && define.amd ? define('ng2-semantic-ui', ['exports', '@angular/core', 'extend', '@angular/common', '@angular/forms', 'popper.js', 'date-fns', 'date-fns/locale/en-US', 'bowser', 'is-ua-webview', 'element-closest'], factory) :
    (global = global || self, factory(global['ng2-semantic-ui'] = {}, global.ng.core, global.$extend__default, global.ng.common, global.ng.forms, global.Popper, global.dateFns, global.defaultLocale, global.bowser, global.isUAWebView__default));
}(this, (function (exports, core, $extend__default, common, forms, Popper, dateFns, defaultLocale, bowser, isUAWebView__default) { 'use strict';

    var $extend__default__default = 'default' in $extend__default ? $extend__default['default'] : $extend__default;
    Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
    var isUAWebView__default__default = 'default' in isUAWebView__default ? isUAWebView__default['default'] : isUAWebView__default;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var enGB = {
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
        var extend = $extend__default__default || $extend__default;
        return extend(true, target, source);
    }
    function lang(language) {
        return language.toLowerCase().replace("-", "");
    }
    var SuiLocalizationService = /** @class */ (function () {
        function SuiLocalizationService() {
            this.onLanguageUpdate = new core.EventEmitter();
            this._fallbackValues = enGB;
            this._values = {};
            this._language = "en-GB";
            this.load("en-GB", enGB);
        }
        Object.defineProperty(SuiLocalizationService.prototype, "language", {
            get: function () {
                return this._language;
            },
            enumerable: true,
            configurable: true
        });
        SuiLocalizationService.prototype.setLanguage = function (language) {
            if (lang(this._language) !== lang(language)) {
                this._language = language;
                this.onLanguageUpdate.emit();
            }
        };
        SuiLocalizationService.prototype.get = function (language) {
            if (language === void 0) { language = this.language; }
            var values = deepClone(this._fallbackValues);
            if (!this._values[lang(language)]) {
                throw new Error("Locale " + language + " is not loaded");
            }
            deepExtend(values, this._values[lang(language)]);
            return deepClone(values);
        };
        SuiLocalizationService.prototype.override = function (values, overrides) {
            return deepExtend(deepClone(values), overrides);
        };
        SuiLocalizationService.prototype.load = function (language, values) {
            this._values[lang(language)] = deepClone(values);
            this.onLanguageUpdate.emit();
        };
        SuiLocalizationService.prototype.patch = function (language, values) {
            deepExtend(this._values[lang(language)], values);
        };
        SuiLocalizationService.prototype.interpolate = function (value, variables) {
            return variables.reduce(function (s, _a) {
                var _b = __read(_a, 2), k = _b[0], v = _b[1];
                return s.replace(new RegExp("#{" + k + "}", "g"), v);
            }, value);
        };
        SuiLocalizationService.ɵfac = function SuiLocalizationService_Factory(t) { return new (t || SuiLocalizationService)(); };
        SuiLocalizationService.ɵprov = core["ɵɵdefineInjectable"]({ token: SuiLocalizationService, factory: SuiLocalizationService.ɵfac });
        return SuiLocalizationService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiLocalizationService, [{
            type: core.Injectable
        }], function () { return []; }, null); })();

    var SuiLocalizationModule = /** @class */ (function () {
        function SuiLocalizationModule() {
        }
        SuiLocalizationModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiLocalizationModule });
        SuiLocalizationModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiLocalizationModule_Factory(t) { return new (t || SuiLocalizationModule)(); }, providers: [SuiLocalizationService], imports: [[common.CommonModule]] });
        return SuiLocalizationModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiLocalizationModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiLocalizationModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule],
                    providers: [SuiLocalizationService]
                }]
        }], null, null); })();

    // Possible directions for a transition.

    (function (TransitionDirection) {
        TransitionDirection[TransitionDirection["In"] = 0] = "In";
        TransitionDirection[TransitionDirection["Out"] = 1] = "Out";
        TransitionDirection[TransitionDirection["Either"] = 2] = "Either";
        TransitionDirection[TransitionDirection["Static"] = 3] = "Static";
    })(exports.TransitionDirection || (exports.TransitionDirection = {}));
    var Transition = /** @class */ (function () {
        function Transition(name, duration, direction, onComplete) {
            if (duration === void 0) { duration = 250; }
            if (direction === void 0) { direction = exports.TransitionDirection.Either; }
            if (onComplete === void 0) { onComplete = function () { }; }
            this.type = name;
            // We set a minimum duration of 1ms, to give the appearance of an immediate transition
            // whilst allowing positioning calculations to happen without a visible flicker.
            this.duration = Math.max(duration, 1);
            this.direction = direction;
            this.classes = this.type.split(" ");
            this.onComplete = onComplete;
        }
        Object.defineProperty(Transition.prototype, "directionClass", {
            // Converts TransitionDirection to class name.
            get: function () {
                switch (this.direction) {
                    case exports.TransitionDirection.In: return "in";
                    case exports.TransitionDirection.Out: return "out";
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        return Transition;
    }());

    var TransitionController = /** @class */ (function () {
        function TransitionController(isInitiallyVisible, display) {
            if (isInitiallyVisible === void 0) { isInitiallyVisible = true; }
            if (display === void 0) { display = "block"; }
            // isInitiallyVisible sets whether the element starts out visible.
            this._isVisible = isInitiallyVisible;
            this._isHidden = !this._isVisible;
            this._display = display;
            this._queue = [];
            this._isAnimating = false;
        }
        Object.defineProperty(TransitionController.prototype, "_isReady", {
            // Used to delay animations until we have an element to animate.
            get: function () {
                return this._renderer != undefined && this._element != undefined && this._changeDetector != undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "isAnimating", {
            get: function () {
                return this._isAnimating;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "isVisible", {
            get: function () {
                return this._isVisible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "isHidden", {
            get: function () {
                return this._isHidden;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "_queueFirst", {
            // Gets the first transition in the queue.
            get: function () {
                return this._queue[0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionController.prototype, "_queueLast", {
            // Gets the last transition in the queue.
            get: function () {
                return this._queue[this._queue.length - 1];
            },
            enumerable: true,
            configurable: true
        });
        // Sets the renderer to be used for animating.
        TransitionController.prototype.registerRenderer = function (renderer) {
            this._renderer = renderer;
            this.performTransition();
        };
        // Sets the element to perform the animations on.
        TransitionController.prototype.registerElement = function (element) {
            this._element = element;
            this.performTransition();
        };
        // Sets the change detector to detect changes when using ChangeDetectionStrategy.OnPush.
        TransitionController.prototype.registerChangeDetector = function (changeDetector) {
            this._changeDetector = changeDetector;
            this.performTransition();
        };
        TransitionController.prototype.animate = function (transition) {
            // Test if transition is one of the list that doesn't change the visible state.
            // Should these eventually become classes?
            var isDirectionless = ["jiggle", "flash", "shake", "pulse", "tada", "bounce"].indexOf(transition.type) !== -1;
            if (isDirectionless) {
                transition.direction = exports.TransitionDirection.Static;
            }
            else if (transition.direction == undefined || transition.direction === exports.TransitionDirection.Either) {
                // Set the direction to the opposite of the current visible state automatically if not set, or set to either direction.
                transition.direction = this._isVisible ? exports.TransitionDirection.Out : exports.TransitionDirection.In;
                if (this._queueLast) {
                    // If there is an transition in the queue already, set the direction to the opposite of the direction of that transition.
                    if (this._queueLast.direction === exports.TransitionDirection.In) {
                        transition.direction = exports.TransitionDirection.Out;
                    }
                    else if (this._queueLast.direction === exports.TransitionDirection.Out) {
                        transition.direction = exports.TransitionDirection.In;
                    }
                }
            }
            // Store the transition in the queue before attempting to perform it.
            this._queue.push(transition);
            this.performTransition();
        };
        TransitionController.prototype.performTransition = function () {
            var _this = this;
            if (!this._isReady || this._isAnimating || !this._queueFirst) {
                // Don't transition until we are ready, or if we are animating, or if there aren't any transitions in the queue.
                return;
            }
            this._isAnimating = true;
            var transition = this._queueFirst;
            // Set the Semantic UI classes for transitioning.
            transition.classes.forEach(function (c) { return _this._renderer.addClass(_this._element, c); });
            this._renderer.addClass(this._element, "animating");
            this._renderer.addClass(this._element, transition.directionClass);
            // Set the Semantic UI styles for transitioning.
            this._renderer.setStyle(this._element, "animationDuration", transition.duration + "ms");
            this._renderer.setStyle(this._element, "display", this._display);
            if (transition.direction === exports.TransitionDirection.In) {
                // Unset hidden if we are transitioning in.
                this._isHidden = false;
            }
            // Wait the length of the animation before calling the complete callback.
            this._animationTimeout = window.setTimeout(function () { return _this.finishTransition(transition); }, transition.duration);
        };
        // Called when a transition has completed.
        TransitionController.prototype.finishTransition = function (transition) {
            var _this = this;
            // Unset the Semantic UI classes & styles for transitioning.
            transition.classes.forEach(function (c) { return _this._renderer.removeClass(_this._element, c); });
            this._renderer.removeClass(this._element, "animating");
            this._renderer.removeClass(this._element, transition.directionClass);
            this._renderer.removeStyle(this._element, "animationDuration");
            this._renderer.removeStyle(this._element, "display");
            if (transition.direction === exports.TransitionDirection.In) {
                // If we have just animated in, we are now visible.
                this._isVisible = true;
            }
            else if (transition.direction === exports.TransitionDirection.Out) {
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
        };
        // Stops the current transition, leaves the rest of the queue intact.
        TransitionController.prototype.stop = function (transition) {
            if (transition === void 0) { transition = this._queueFirst; }
            if (!transition || !this._isAnimating) {
                return;
            }
            clearTimeout(this._animationTimeout);
            this.finishTransition(transition);
        };
        // Stops the current transition, and empties the queue.
        TransitionController.prototype.stopAll = function () {
            this.clearQueue();
            this.stop();
        };
        // Empties the transition queue but carries on with the current transition.
        TransitionController.prototype.clearQueue = function () {
            if (this.isAnimating) {
                this._queue = [this._queueFirst];
                return;
            }
            this._queue = [];
        };
        return TransitionController;
    }());

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
        SuiTransition.ɵfac = function SuiTransition_Factory(t) { return new (t || SuiTransition)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        SuiTransition.ɵdir = core["ɵɵdefineDirective"]({ type: SuiTransition, selectors: [["", "suiTransition", ""]], hostVars: 6, hostBindings: function SuiTransition_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("transition", ctx.transitionClass)("visible", ctx.isVisible)("hidden", ctx.isHidden);
            } }, inputs: { suiTransition: "suiTransition" }, exportAs: ["transition"] });
        return SuiTransition;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiTransition, [{
            type: core.Directive,
            args: [{
                    selector: "[suiTransition]",
                    exportAs: "transition"
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }]; }, { suiTransition: [{
                type: core.Input
            }], transitionClass: [{
                type: core.HostBinding,
                args: ["class.transition"]
            }], isVisible: [{
                type: core.HostBinding,
                args: ["class.visible"]
            }], isHidden: [{
                type: core.HostBinding,
                args: ["class.hidden"]
            }] }); })();

    var SuiTransitionModule = /** @class */ (function () {
        function SuiTransitionModule() {
        }
        SuiTransitionModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiTransitionModule });
        SuiTransitionModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiTransitionModule_Factory(t) { return new (t || SuiTransitionModule)(); }, providers: [], imports: [[common.CommonModule]] });
        return SuiTransitionModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiTransitionModule, { declarations: [SuiTransition], imports: [common.CommonModule], exports: [SuiTransition] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiTransitionModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule],
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
        var _r120 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "i", 3);
        core["ɵɵlistener"]("click", function SuiMessage_div_0_i_1_Template_i_click_0_listener($event) { core["ɵɵrestoreView"](_r120); var ctx_r119 = core["ɵɵnextContext"](2); return ctx_r119.dismiss(); });
        core["ɵɵelementEnd"]();
    } }
    function SuiMessage_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 1);
        core["ɵɵtemplate"](1, SuiMessage_div_0_i_1_Template, 1, 0, "i", 2);
        core["ɵɵprojection"](2);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r117 = core["ɵɵnextContext"]();
        core["ɵɵclassMapInterpolate1"]("ui message ", ctx_r117.class, "");
        core["ɵɵproperty"]("suiTransition", ctx_r117.transitionController);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r117.isDismissable);
    } }
    var _c0 = ["*"];
    var SuiMessage = /** @class */ (function () {
        function SuiMessage() {
            this.isDismissable = true;
            this.onDismiss = new core.EventEmitter();
            this.isDismissed = false;
            this.transitionController = new TransitionController();
            this.transition = "fade";
            this.transitionDuration = 300;
            this.class = "";
        }
        SuiMessage.prototype.dismiss = function () {
            var _this = this;
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, exports.TransitionDirection.Out, function () {
                _this.isDismissed = true;
                _this.onDismiss.emit(_this);
            }));
        };
        SuiMessage.ɵfac = function SuiMessage_Factory(t) { return new (t || SuiMessage)(); };
        SuiMessage.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiMessage, selectors: [["sui-message"]], inputs: { isDismissable: "isDismissable", transition: "transition", transitionDuration: "transitionDuration", class: "class" }, outputs: { onDismiss: "dismiss" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "class", "suiTransition", 4, "ngIf"], [3, "suiTransition"], ["class", "close icon", 3, "click", 4, "ngIf"], [1, "close", "icon", 3, "click"]], template: function SuiMessage_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵtemplate"](0, SuiMessage_div_0_Template, 3, 5, "div", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", !ctx.isDismissed);
            } }, directives: [common.NgIf, SuiTransition], styles: [".ui.icon.visible.message[_ngcontent-%COMP%] {\n    display: flex !important;\n}"] });
        return SuiMessage;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiMessage, [{
            type: core.Component,
            args: [{
                    selector: "sui-message",
                    template: "\n<div class=\"ui message {{ class }}\" *ngIf=\"!isDismissed\" [suiTransition]=\"transitionController\">\n    <i class=\"close icon\" *ngIf=\"isDismissable\" (click)=\"dismiss()\"></i>\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["\n/* Fix for CSS Bug */\n.ui.icon.visible.message {\n    display: flex !important;\n}\n"]
                }]
        }], function () { return []; }, { isDismissable: [{
                type: core.Input
            }], onDismiss: [{
                type: core.Output,
                args: ["dismiss"]
            }], transition: [{
                type: core.Input
            }], transitionDuration: [{
                type: core.Input
            }], class: [{
                type: core.Input,
                args: ["class"]
            }] }); })();

    var SuiMessageModule = /** @class */ (function () {
        function SuiMessageModule() {
        }
        SuiMessageModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiMessageModule });
        SuiMessageModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiMessageModule_Factory(t) { return new (t || SuiMessageModule)(); }, imports: [[
                    common.CommonModule,
                    SuiTransitionModule
                ]] });
        return SuiMessageModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiMessageModule, { declarations: [SuiMessage], imports: [common.CommonModule,
            SuiTransitionModule], exports: [SuiMessage] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiMessageModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
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
        var _r129 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 3);
        core["ɵɵlistener"]("click", function SuiPagination_a_0_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r129); var ctx_r128 = core["ɵɵnextContext"](); return ctx_r128.setPage(1); });
        core["ɵɵelementStart"](1, "span");
        core["ɵɵelement"](2, "i", 4);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r121 = core["ɵɵnextContext"]();
        core["ɵɵclassProp"]("disabled", ctx_r121.page === 1);
    } }
    function SuiPagination_a_1_Template(rf, ctx) { if (rf & 1) {
        var _r131 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 3);
        core["ɵɵlistener"]("click", function SuiPagination_a_1_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r131); var ctx_r130 = core["ɵɵnextContext"](); return ctx_r130.setPage(ctx_r130.page - 1); });
        core["ɵɵelementStart"](1, "span");
        core["ɵɵelement"](2, "i", 5);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r122 = core["ɵɵnextContext"]();
        core["ɵɵclassProp"]("disabled", !ctx_r122.hasPrevious());
    } }
    function SuiPagination_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
        var _r135 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 3);
        core["ɵɵlistener"]("click", function SuiPagination_ng_container_2_a_1_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r135); var ctx_r134 = core["ɵɵnextContext"](2); return ctx_r134.setPage(1); });
        core["ɵɵelementStart"](1, "span");
        core["ɵɵtext"](2, "1");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } }
    function SuiPagination_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "a", 8);
        core["ɵɵtext"](1, "...");
        core["ɵɵelementEnd"]();
    } }
    function SuiPagination_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, SuiPagination_ng_container_2_a_1_Template, 3, 0, "a", 6);
        core["ɵɵtemplate"](2, SuiPagination_ng_container_2_a_2_Template, 2, 0, "a", 7);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r123 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r123.pages[0] !== 1);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r123.pages[0] > 2);
    } }
    function SuiPagination_a_3_Template(rf, ctx) { if (rf & 1) {
        var _r138 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 3);
        core["ɵɵlistener"]("click", function SuiPagination_a_3_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r138); var p_r136 = ctx.$implicit; var ctx_r137 = core["ɵɵnextContext"](); return ctx_r137.setPage(p_r136); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var p_r136 = ctx.$implicit;
        var ctx_r124 = core["ɵɵnextContext"]();
        core["ɵɵclassProp"]("active", p_r136 === ctx_r124.page);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", p_r136, "\n");
    } }
    function SuiPagination_ng_container_4_a_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "a", 8);
        core["ɵɵtext"](1, "...");
        core["ɵɵelementEnd"]();
    } }
    function SuiPagination_ng_container_4_a_2_Template(rf, ctx) { if (rf & 1) {
        var _r142 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 3);
        core["ɵɵlistener"]("click", function SuiPagination_ng_container_4_a_2_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r142); var ctx_r141 = core["ɵɵnextContext"](2); return ctx_r141.setPage(ctx_r141.pageCount); });
        core["ɵɵelementStart"](1, "span");
        core["ɵɵtext"](2);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r140 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](ctx_r140.pageCount);
    } }
    function SuiPagination_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, SuiPagination_ng_container_4_a_1_Template, 2, 0, "a", 7);
        core["ɵɵtemplate"](2, SuiPagination_ng_container_4_a_2_Template, 3, 1, "a", 6);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r125 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r125.pages[ctx_r125.pages.length - 1] < ctx_r125.pageCount - 1);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r125.pages[ctx_r125.pages.length - 1] !== ctx_r125.pageCount);
    } }
    function SuiPagination_a_5_Template(rf, ctx) { if (rf & 1) {
        var _r144 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 3);
        core["ɵɵlistener"]("click", function SuiPagination_a_5_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r144); var ctx_r143 = core["ɵɵnextContext"](); return ctx_r143.setPage(ctx_r143.page + 1); });
        core["ɵɵelementStart"](1, "span");
        core["ɵɵelement"](2, "i", 9);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r126 = core["ɵɵnextContext"]();
        core["ɵɵclassProp"]("disabled", !ctx_r126.hasNext());
    } }
    function SuiPagination_a_6_Template(rf, ctx) { if (rf & 1) {
        var _r146 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 3);
        core["ɵɵlistener"]("click", function SuiPagination_a_6_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r146); var ctx_r145 = core["ɵɵnextContext"](); return ctx_r145.setPage(ctx_r145.pageCount); });
        core["ɵɵelementStart"](1, "span");
        core["ɵɵelement"](2, "i", 10);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r127 = core["ɵɵnextContext"]();
        core["ɵɵclassProp"]("disabled", ctx_r127.page === ctx_r127.pageCount);
    } }
    var SuiPagination = /** @class */ (function () {
        function SuiPagination() {
            this.hasClasses = true;
            this.pageChange = new core.EventEmitter();
            this.pageSize = 10;
            this._page = 1;
            this._pages = [];
            this.pageCount = 1;
            this.hasNavigationLinks = true;
            this.hasBoundaryLinks = false;
            this.canRotate = false;
            this.hasEllipses = true;
        }
        Object.defineProperty(SuiPagination.prototype, "maxSize", {
            get: function () {
                return this._maxSize;
            },
            set: function (value) {
                this._maxSize = (value != undefined) ? Math.max(value, 1) : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPagination.prototype, "collectionSize", {
            get: function () {
                return this._collectionSize;
            },
            set: function (value) {
                this._collectionSize = Math.max(value, 0);
                this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPagination.prototype, "hasNavigationLinks", {
            get: function () {
                var maxSize = this._maxSize || this.pageCount;
                return this._hasNavigationLinks || maxSize < this.pageCount;
            },
            set: function (value) {
                this._hasNavigationLinks = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPagination.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (value) {
                this.setPage(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPagination.prototype, "pages", {
            get: function () {
                return this._pages;
            },
            enumerable: true,
            configurable: true
        });
        // Public methods
        SuiPagination.prototype.hasPrevious = function () {
            return this.page > 1;
        };
        SuiPagination.prototype.hasNext = function () {
            return this.page < this.pageCount;
        };
        SuiPagination.prototype.setPage = function (newPage) {
            var value = (Number.isInteger(newPage)) ? Math.min(Math.max(newPage, 1), this.pageCount) : 1;
            if (value !== this._page) {
                this._page = value;
                this.pageChange.emit(this._page);
            }
        };
        // Lifecycle hooks
        SuiPagination.prototype.ngOnChanges = function () {
            this.updatePages();
        };
        // Private methods
        SuiPagination.prototype.updatePages = function () {
            this.pageCount = Math.max(1, Math.ceil(this._collectionSize / this.pageSize));
            var _a = __read(this.applyPagination(), 2), start = _a[0], end = _a[1];
            this._pages = Array(end - start)
                .fill(start + 1)
                .map(function (s, i) { return s + i; });
        };
        SuiPagination.prototype.applyPagination = function () {
            var maxSize = (this.maxSize != undefined) ? Math.min(this.maxSize, this.pageCount) : this.pageCount;
            var page = Math.ceil(this.page / maxSize) - 1;
            var start = 0;
            var end = this.pageCount;
            if (this.canRotate) {
                var leftOffset = Math.floor(maxSize / 2);
                var rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
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
        };
        SuiPagination.ɵfac = function SuiPagination_Factory(t) { return new (t || SuiPagination)(); };
        SuiPagination.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiPagination, selectors: [["sui-pagination"]], hostVars: 6, hostBindings: function SuiPagination_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("pagination", ctx.hasClasses)("menu", ctx.hasClasses);
            } }, inputs: { maxSize: "maxSize", pageSize: "pageSize", collectionSize: "collectionSize", hasNavigationLinks: "hasNavigationLinks", hasBoundaryLinks: "hasBoundaryLinks", canRotate: "canRotate", hasEllipses: "hasEllipses", page: "page" }, outputs: { pageChange: "pageChange" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 7, vars: 7, consts: [["class", "item", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["class", "item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"], [1, "angle", "double", "left", "icon"], [1, "angle", "left", "icon"], ["class", "item", 3, "click", 4, "ngIf"], ["class", "disabled item", 4, "ngIf"], [1, "disabled", "item"], [1, "angle", "right", "icon"], [1, "angle", "double", "right", "icon"]], template: function SuiPagination_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, SuiPagination_a_0_Template, 3, 2, "a", 0);
                core["ɵɵtemplate"](1, SuiPagination_a_1_Template, 3, 2, "a", 0);
                core["ɵɵtemplate"](2, SuiPagination_ng_container_2_Template, 3, 2, "ng-container", 1);
                core["ɵɵtemplate"](3, SuiPagination_a_3_Template, 2, 3, "a", 2);
                core["ɵɵtemplate"](4, SuiPagination_ng_container_4_Template, 3, 2, "ng-container", 1);
                core["ɵɵtemplate"](5, SuiPagination_a_5_Template, 3, 2, "a", 0);
                core["ɵɵtemplate"](6, SuiPagination_a_6_Template, 3, 2, "a", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.hasBoundaryLinks);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.hasNavigationLinks);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.hasEllipses);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.pages);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.hasEllipses);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.hasNavigationLinks);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.hasBoundaryLinks);
            } }, directives: [common.NgIf, common.NgForOf], styles: ["[_nghost-%COMP%]   .item[_ngcontent-%COMP%] {\n    transition: none;\n}"] });
        return SuiPagination;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiPagination, [{
            type: core.Component,
            args: [{
                    selector: "sui-pagination",
                    template: "\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(1)\" [class.disabled]=\"page===1\">\n    <span><i class=\"angle double left icon\"></i></span>\n</a>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page-1)\" [class.disabled]=\"!hasPrevious()\">\n    <span><i class=\"angle left icon\"></i></span>\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"item\" (click)=\"setPage(1)\" *ngIf=\"pages[0] !== 1\">\n        <span>1</span>\n    </a>\n    <a class=\"disabled item\" *ngIf=\"pages[0] > 2\">...</a>\n</ng-container>\n<a *ngFor=\"let p of pages\" class=\"item\" [class.active]=\"p===page\" (click)=\"setPage(p)\">\n    {{ p }}\n</a>\n<ng-container *ngIf=\"hasEllipses\">\n    <a class=\"disabled item\" *ngIf=\"pages[pages.length - 1] < pageCount - 1\">...</a>\n    <a class=\"item\" (click)=\"setPage(pageCount)\" *ngIf=\"pages[pages.length - 1] !== pageCount\">\n        <span>{{ pageCount }}</span>\n    </a>\n</ng-container>\n<a *ngIf=\"hasNavigationLinks\" class=\"item\" (click)=\"setPage(page+1)\" [class.disabled]=\"!hasNext()\">\n    <span><i class=\"angle right icon\"></i></span>\n</a>\n<a *ngIf=\"hasBoundaryLinks\" class=\"item\"  (click)=\"setPage(pageCount)\" [class.disabled]=\"page===pageCount\">\n    <span><i class=\"angle double right icon\"></i></span>\n</a>\n",
                    styles: ["\n:host .item {\n    transition: none;\n}\n"]
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.pagination"]
            }, {
                type: core.HostBinding,
                args: ["class.menu"]
            }], pageChange: [{
                type: core.Output
            }], maxSize: [{
                type: core.Input
            }], pageSize: [{
                type: core.Input
            }], collectionSize: [{
                type: core.Input
            }], hasNavigationLinks: [{
                type: core.Input
            }], hasBoundaryLinks: [{
                type: core.Input
            }], canRotate: [{
                type: core.Input
            }], hasEllipses: [{
                type: core.Input
            }], page: [{
                type: core.Input
            }] }); })();

    var SuiPaginationModule = /** @class */ (function () {
        function SuiPaginationModule() {
        }
        SuiPaginationModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiPaginationModule });
        SuiPaginationModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiPaginationModule_Factory(t) { return new (t || SuiPaginationModule)(); }, providers: [], imports: [[common.CommonModule]] });
        return SuiPaginationModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiPaginationModule, { declarations: [SuiPagination], imports: [common.CommonModule], exports: [SuiPagination] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiPaginationModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule],
                    exports: [SuiPagination],
                    declarations: [SuiPagination],
                    providers: []
                }]
        }], null, null); })();

    var SuiCollapse = /** @class */ (function () {
        function SuiCollapse(_element, _renderer) {
            this._element = _element;
            this._renderer = _renderer;
            this._pristine = true;
            // Collapse animation duration is 350ms by default.
            this.collapseDuration = 350;
            this._isExpanded = false;
            this._isCollapsing = false;
        }
        Object.defineProperty(SuiCollapse.prototype, "isExpanded", {
            // Set when the collapse is open, and not animating.
            get: function () {
                return this._isExpanded;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCollapse.prototype, "isCollapsed", {
            // Set when the collapse is closed, and not animating.
            get: function () {
                return !this.isExpanded && !this.isCollapsing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCollapse.prototype, "isCollapsing", {
            // Set when the collapse is animating.
            get: function () {
                return this._isCollapsing;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCollapse.prototype, "suiCollapse", {
            get: function () {
                return this._isExpanded;
            },
            // Sets the state of the collapse, `true` is collapsed.
            set: function (value) {
                if (value) {
                    this.hide();
                }
                else {
                    this.show();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCollapse.prototype, "_animationDuration", {
            get: function () {
                return this._pristine ? 0 : this.collapseDuration;
            },
            enumerable: true,
            configurable: true
        });
        SuiCollapse.prototype.hide = function () {
            var _this = this;
            this._isCollapsing = true;
            this._isExpanded = false;
            // Forcibly hide the overflow so that content is not visible past the boundaries of its container.
            this._renderer.setStyle(this._element.nativeElement, "overflow", "hidden");
            // Animate the host element from its scroll height to 0.
            this.animate(this._element.nativeElement.scrollHeight, 0, false, function () {
                _this._isCollapsing = false;
            });
        };
        SuiCollapse.prototype.show = function () {
            var _this = this;
            this._isCollapsing = true;
            // Animate the host element from its offset height to its scroll height.
            this.animate(this._element.nativeElement.offsetHeight, this._element.nativeElement.scrollHeight, true, function () {
                // Remove the overflow override to enable user styling once again.
                _this._renderer.removeStyle(_this._element.nativeElement, "overflow");
                _this._isCollapsing = false;
                _this._isExpanded = true;
            });
        };
        SuiCollapse.prototype.animate = function (startHeight, endHeight, removeOnComplete, callback) {
            if (removeOnComplete === void 0) { removeOnComplete = false; }
            if (callback === void 0) { callback = function () { }; }
            var heightFrames = [
                {
                    offset: 0,
                    height: startHeight + "px"
                },
                {
                    offset: 1,
                    height: endHeight + "px"
                }
            ];
            if (removeOnComplete) {
                heightFrames.push({
                    offset: 1,
                    height: "auto"
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
            setTimeout(function () { return callback(); }, this.collapseDuration);
        };
        SuiCollapse.ɵfac = function SuiCollapse_Factory(t) { return new (t || SuiCollapse)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.Renderer2)); };
        SuiCollapse.ɵdir = core["ɵɵdefineDirective"]({ type: SuiCollapse, selectors: [["", "suiCollapse", ""]], hostVars: 6, hostBindings: function SuiCollapse_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("expanded", ctx.isExpanded)("collapsed", ctx.isCollapsed)("collapsing", ctx.isCollapsing);
            } }, inputs: { suiCollapse: "suiCollapse", collapseDuration: "collapseDuration" } });
        return SuiCollapse;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCollapse, [{
            type: core.Directive,
            args: [{
                    selector: "[suiCollapse]"
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }]; }, { isExpanded: [{
                type: core.HostBinding,
                args: ["class.expanded"]
            }], isCollapsed: [{
                type: core.HostBinding,
                args: ["class.collapsed"]
            }], isCollapsing: [{
                type: core.HostBinding,
                args: ["class.collapsing"]
            }], suiCollapse: [{
                type: core.Input
            }], collapseDuration: [{
                type: core.Input
            }] }); })();

    var _c0$1 = [[["", "title", ""]], [["", "content", ""]]];
    var _c1 = ["[title]", "[content]"];
    var SuiAccordionPanel = /** @class */ (function () {
        function SuiAccordionPanel(_changeDetector) {
            this._changeDetector = _changeDetector;
            this.transitionController = new TransitionController(false);
            this._isOpen = false;
            this.isOpenChange = new core.EventEmitter(false);
        }
        Object.defineProperty(SuiAccordionPanel.prototype, "service", {
            set: function (service) {
                this._service = service;
                this._changeDetector.detectChanges();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiAccordionPanel.prototype, "isOpen", {
            get: function () {
                return this._isOpen;
            },
            set: function (value) {
                // Convert to boolean (fixes false != undefined)
                var isOpen = !!value;
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiAccordionPanel.prototype, "transition", {
            get: function () {
                if (this._service) {
                    return this._service.transition;
                }
                return "fade";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiAccordionPanel.prototype, "transitionDuration", {
            get: function () {
                if (this._service) {
                    // Return the service defined transition duration.
                    return this._service.transitionDuration;
                }
                // Revert to instantaneous if the service is not yet loaded.
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        SuiAccordionPanel.prototype.toggle = function () {
            if (!this.isDisabled) {
                this.isOpen = !this.isOpen;
            }
        };
        SuiAccordionPanel.ɵfac = function SuiAccordionPanel_Factory(t) { return new (t || SuiAccordionPanel)(core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        SuiAccordionPanel.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiAccordionPanel, selectors: [["sui-accordion-panel"]], inputs: { isDisabled: "isDisabled", isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, exportAs: ["suiAccordionPanel"], ngContentSelectors: _c1, decls: 5, vars: 7, consts: [[1, "title", 3, "click"], [3, "suiCollapse", "collapseDuration"], [1, "content", 3, "suiTransition"]], template: function SuiAccordionPanel_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"](_c0$1);
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵlistener"]("click", function SuiAccordionPanel_Template_div_click_0_listener($event) { return ctx.toggle(); });
                core["ɵɵprojection"](1);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "div", 1);
                core["ɵɵelementStart"](3, "div", 2);
                core["ɵɵprojection"](4, 1);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵclassProp"]("active", ctx.isOpen);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("suiCollapse", !ctx.isOpen)("collapseDuration", ctx.transitionDuration);
                core["ɵɵadvance"](1);
                core["ɵɵclassProp"]("active", ctx.isOpen);
                core["ɵɵproperty"]("suiTransition", ctx.transitionController);
            } }, directives: [SuiCollapse, SuiTransition], styles: [".content[_ngcontent-%COMP%] {\n    padding: .5em 0 1em;\n}\n\n\n[_nghost-%COMP%]:first-child   .title[_ngcontent-%COMP%] {\n    border-top: none;\n}"] });
        return SuiAccordionPanel;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiAccordionPanel, [{
            type: core.Component,
            args: [{
                    selector: "sui-accordion-panel",
                    exportAs: "suiAccordionPanel",
                    template: "\n<!-- Title -->\n<div class=\"title\" [class.active]=\"isOpen\" (click)=\"toggle()\" >\n    <ng-content select=\"[title]\"></ng-content>\n</div>\n<!-- Content -->\n<div [suiCollapse]=\"!isOpen\" [collapseDuration]=\"transitionDuration\">\n    <div class=\"content\" [class.active]=\"isOpen\" [suiTransition]=\"transitionController\">\n        <ng-content select=\"[content]\"></ng-content>\n    </div>\n</div>\n",
                    styles: ["\n/* Manual style as Semantic UI relies on > selector */\n.content {\n    padding: .5em 0 1em;\n}\n\n/* Another > selector fix */\n:host:first-child .title {\n    border-top: none;\n}\n"]
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { isDisabled: [{
                type: core.Input
            }], isOpen: [{
                type: core.Input
            }], isOpenChange: [{
                type: core.Output
            }] }); })();

    var SuiAccordionService = /** @class */ (function () {
        function SuiAccordionService() {
            this.closeOthers = true;
            this.transition = "fade";
            this.transitionDuration = 350;
            this.panels = [];
        }
        SuiAccordionService.prototype.addPanel = function (panel) {
            panel.service = this;
            this.panels.push(panel);
        };
        SuiAccordionService.prototype.closeOtherPanels = function (panel) {
            if (!this.closeOthers) {
                return;
            }
            this.panels.forEach(function (p) {
                if (p !== panel) {
                    p.isOpen = false;
                }
            });
        };
        return SuiAccordionService;
    }());

    var _c0$2 = ["*"];
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
        SuiAccordion.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiAccordion, selectors: [["sui-accordion"]], contentQueries: function SuiAccordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, SuiAccordionPanel, false);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._panels = _t);
            } }, hostVars: 4, hostBindings: function SuiAccordion_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("accordion", ctx.hasClasses);
            } }, inputs: { closeOthers: "closeOthers", transition: "transition", transitionDuration: "transitionDuration" }, ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function SuiAccordion_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵprojection"](0);
            } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}\n\n\n.styled[_nghost-%COMP%]   sui-accordion-panel[_ngcontent-%COMP%]:first-child   .title[_ngcontent-%COMP%] {\n    border-top: none\n}"] });
        return SuiAccordion;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiAccordion, [{
            type: core.Component,
            args: [{
                    selector: "sui-accordion",
                    template: "\n<ng-content></ng-content>\n",
                    styles: ["\n/* Fix for general styling issues */\n:host {\n    display: block;\n}\n\n/* Fix for styled border issue */\n:host.styled sui-accordion-panel:first-child .title {\n    border-top: none\n}\n"]
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.accordion"]
            }], closeOthers: [{
                type: core.Input
            }], transition: [{
                type: core.Input
            }], transitionDuration: [{
                type: core.Input
            }], _panels: [{
                type: core.ContentChildren,
                args: [SuiAccordionPanel]
            }] }); })();

    var SuiCollapseModule = /** @class */ (function () {
        function SuiCollapseModule() {
        }
        SuiCollapseModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiCollapseModule });
        SuiCollapseModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiCollapseModule_Factory(t) { return new (t || SuiCollapseModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return SuiCollapseModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiCollapseModule, { declarations: [SuiCollapse], imports: [common.CommonModule], exports: [SuiCollapse] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCollapseModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        SuiCollapse
                    ],
                    exports: [
                        SuiCollapse
                    ]
                }]
        }], null, null); })();

    var SuiAccordionModule = /** @class */ (function () {
        function SuiAccordionModule() {
        }
        SuiAccordionModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiAccordionModule });
        SuiAccordionModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiAccordionModule_Factory(t) { return new (t || SuiAccordionModule)(); }, providers: [], imports: [[
                    common.CommonModule,
                    SuiCollapseModule,
                    SuiTransitionModule
                ]] });
        return SuiAccordionModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiAccordionModule, { declarations: [SuiAccordion,
            SuiAccordionPanel], imports: [common.CommonModule,
            SuiCollapseModule,
            SuiTransitionModule], exports: [SuiAccordion,
            SuiAccordionPanel] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiAccordionModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
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

    var CustomValidator = /** @class */ (function () {
        function CustomValidator(_host) {
            this._host = _host;
            this.onValidatorChange = function () { };
        }
        CustomValidator.prototype.validate = function (c) {
            return this._host.validate(c);
        };
        CustomValidator.prototype.registerOnValidatorChange = function (fn) {
            this.onValidatorChange = fn;
        };
        return CustomValidator;
    }());
    function customValidatorFactory(type) {
        return {
            provide: forms.NG_VALIDATORS,
            useExisting: core.forwardRef(function () { return type; }),
            multi: true
        };
    }

    var CustomValueAccessor = /** @class */ (function () {
        function CustomValueAccessor(_host) {
            this._host = _host;
            this.onChange = function () { };
            this.onTouched = function () { };
        }
        CustomValueAccessor.prototype.writeValue = function (value) {
            this._host.writeValue(value);
        };
        CustomValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CustomValueAccessor.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        return CustomValueAccessor;
    }());
    function customValueAccessorFactory(type) {
        return {
            provide: forms.NG_VALUE_ACCESSOR,
            useExisting: core.forwardRef(function () { return type; }),
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
    var HandledEvent = /** @class */ (function () {
        function HandledEvent() {
        }
        return HandledEvent;
    }());
    var Util = {
        Array: {
            range: function (n, offset) {
                if (offset === void 0) { offset = 0; }
                return Array(n).fill(0).map(function (z, i) { return i + offset; });
            },
            group: function (items, groupLength) {
                var mutable = items.slice(0);
                var groups = [];
                while (mutable.length > 0) {
                    groups.push(mutable.splice(0, groupLength));
                }
                return groups;
            },
            groupBy: function (items, field) {
                return items.reduce(function (groups, i) {
                    var fieldValue = i[field].toString();
                    groups[fieldValue] = groups[fieldValue] || [];
                    groups[fieldValue].push(i);
                    return groups;
                }, Object());
            },
            flatten: function (items) {
                return items.reduce(function (is, i) { return is.concat(i); }, []);
            }
        },
        String: {
            padLeft: function (str, length, padding) {
                var s = str;
                while (s.length < length) {
                    s = padding + s;
                }
                return s;
            }
        },
        DOM: {
            parseBooleanAttribute: function (attributeValue) {
                var value = attributeValue;
                if (typeof attributeValue === "string") {
                    value = true;
                }
                return value;
            }
        },
        Object: {
            readValue: function (object, path) {
                if (!path) {
                    return object;
                }
                var recursed = object;
                for (var i = 0, p = path.split("."), len = p.length; i < len; i++) {
                    recursed = recursed[p[i]];
                }
                return recursed;
            }
        },
        Math: {
            round: function (r, n) {
                return Math.round(r / n) * n;
            },
            roundUp: function (r, n) {
                return Math.ceil(r / n) * n;
            },
            roundDown: function (r, n) {
                return Math.floor(r / n) * n;
            },
            mod: function (r, n) {
                var rem = r % n;
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
    var DateUtil = {
        startOf: function (precision, date, resetAll) {
            if (resetAll === void 0) { resetAll = false; }
            switch (precision) {
                case DatePrecision.Decade:
                    var start = Math.floor(date.getFullYear() / 10) * 10 + 1;
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
        endOf: function (precision, date) {
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
        equal: function (precision, a, b) {
            var equal = true;
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
        next: function (precision, date) {
            return DateUtil.add(precision, date, 1);
        },
        add: function (precision, date, i) {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
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
        previous: function (precision, date) {
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
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
                    var hours = date.getHours();
                    date.setHours(hours - 1);
                    if (date.getHours() !== Util.Math.mod(hours - 1, 24)) {
                        date.setHours(hours - 2);
                    }
                    break;
                case DatePrecision.Minute:
                    var minutes = date.getMinutes();
                    date.setMinutes(minutes - 1);
            }
            return date;
        },
        clone: function (date) {
            return new Date(date.getTime());
        }
    };

    var SuiComponentFactory = /** @class */ (function () {
        function SuiComponentFactory(_applicationRef, _componentFactoryResolver, _injector) {
            this._applicationRef = _applicationRef;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._injector = _injector;
        }
        SuiComponentFactory.prototype.createComponent = function (type, providers) {
            if (providers === void 0) { providers = []; }
            // Resolve a factory for creating components of type `type`.
            var factory = this._componentFactoryResolver.resolveComponentFactory(type);
            // Resolve and create an injector with the specified providers.
            var injector = core.ReflectiveInjector.resolveAndCreate(providers, this._injector);
            // Create a component using the previously resolved factory & injector.
            var componentRef = factory.create(injector);
            return componentRef;
        };
        SuiComponentFactory.prototype.createView = function (viewContainer, template, context) {
            viewContainer.createEmbeddedView(template, context);
        };
        // Inserts the component into the specified view container.
        SuiComponentFactory.prototype.attachToView = function (componentRef, viewContainer) {
            viewContainer.insert(componentRef.hostView, 0);
        };
        // Inserts the component in the root application node.
        SuiComponentFactory.prototype.attachToApplication = function (componentRef) {
            this._applicationRef.attachView(componentRef.hostView);
        };
        // Detaches the component from the root application node.
        SuiComponentFactory.prototype.detachFromApplication = function (componentRef) {
            this._applicationRef.detachView(componentRef.hostView);
        };
        // Moves the component to the specified DOM element.
        SuiComponentFactory.prototype.moveToElement = function (componentRef, element) {
            element.appendChild(componentRef.location.nativeElement);
        };
        // Moves the component to the document body.
        SuiComponentFactory.prototype.moveToDocumentBody = function (componentRef) {
            this.moveToElement(componentRef, document.querySelector("body"));
        };
        SuiComponentFactory.prototype.detachFromDocument = function (componentRef) {
            var element = componentRef.location.nativeElement;
            // We can't use `element.remove()` due to lack of IE11 support.
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            }
        };
        SuiComponentFactory.ɵfac = function SuiComponentFactory_Factory(t) { return new (t || SuiComponentFactory)(core["ɵɵinject"](core.ApplicationRef), core["ɵɵinject"](core.ComponentFactoryResolver), core["ɵɵinject"](core.Injector)); };
        SuiComponentFactory.ɵprov = core["ɵɵdefineInjectable"]({ token: SuiComponentFactory, factory: SuiComponentFactory.ɵfac });
        return SuiComponentFactory;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiComponentFactory, [{
            type: core.Injectable
        }], function () { return [{ type: core.ApplicationRef }, { type: core.ComponentFactoryResolver }, { type: core.Injector }]; }, null); })();

    var PositioningPlacement = {
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
        var _a = __read(placement.split(" "), 2), direction = _a[0], alignment = _a[1];
        // Direction alone covers case of just `top`, `left`, `bottom`, `right`.
        var chosenPlacement = [direction];
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
        var _a = __read(popper.split("-"), 2), direction = _a[0], alignment = _a[1];
        var chosenPlacement = [direction];
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
    var PositioningService = /** @class */ (function () {
        function PositioningService(anchor, subject, placement, arrowSelector) {
            this.anchor = anchor;
            this.subject = subject;
            this._placement = placement;
            this._arrowSelector = arrowSelector;
            this.init();
        }
        Object.defineProperty(PositioningService.prototype, "placement", {
            get: function () {
                return this._placement;
            },
            set: function (placement) {
                this._placement = placement;
                if (this._popper) {
                    this._popper.options.placement = placementToPopper(placement);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PositioningService.prototype, "hasArrow", {
            set: function (hasArrow) {
                this._hasArrow = hasArrow;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PositioningService.prototype, "actualPlacement", {
            get: function () {
                if (!this._popperState) {
                    return PositioningPlacement.Auto;
                }
                return popperToPlacement(this._popperState.placement);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PositioningService.prototype, "state", {
            get: function () {
                return this._popperState;
            },
            enumerable: true,
            configurable: true
        });
        PositioningService.prototype.init = function () {
            var _this = this;
            var modifiers = {
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
                    fn: function (data) {
                        if (_this._hasArrow) {
                            var offsets = _this.calculateOffsets();
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
                modifiers: modifiers,
                onCreate: function (initial) { return _this._popperState = initial; },
                onUpdate: function (update) { return _this._popperState = update; }
            });
        };
        PositioningService.prototype.update = function () {
            this._popper.update();
        };
        PositioningService.prototype.destroy = function () {
            this._popper.destroy();
        };
        PositioningService.prototype.calculateOffsets = function () {
            var left = 0;
            var top = 0;
            // To support correct positioning for all popup sizes we should calculate offset using em
            var fontSize = parseFloat(window.getComputedStyle(this.subject.nativeElement).getPropertyValue("font-size"));
            // The Semantic UI popup arrow width and height are 0.71428571em and the margin from the popup edge is 1em
            var arrowCenter = (0.71428571 / 2 + 1) * fontSize;
            if (this.anchor.nativeElement.offsetWidth <= arrowCenter * 2) {
                var anchorCenterWidth = this.anchor.nativeElement.offsetWidth / 2;
                if (this._placement === PositioningPlacement.TopLeft || this._placement === PositioningPlacement.BottomLeft) {
                    left = anchorCenterWidth - arrowCenter;
                }
                if (this._placement === PositioningPlacement.TopRight || this._placement === PositioningPlacement.BottomRight) {
                    left = arrowCenter - anchorCenterWidth;
                }
            }
            if (this.anchor.nativeElement.offsetHeight <= arrowCenter * 2) {
                var anchorCenterHeight = this.anchor.nativeElement.offsetHeight / 2;
                if (this._placement === PositioningPlacement.LeftTop || this._placement === PositioningPlacement.RightTop) {
                    top = anchorCenterHeight - arrowCenter;
                }
                if (this._placement === PositioningPlacement.LeftBottom || this._placement === PositioningPlacement.RightBottom) {
                    top = arrowCenter - anchorCenterHeight;
                }
            }
            return { top: top, left: left, width: 0, height: 0 };
        };
        return PositioningService;
    }());

    var SuiUtilityModule = /** @class */ (function () {
        function SuiUtilityModule() {
        }
        SuiUtilityModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiUtilityModule });
        SuiUtilityModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiUtilityModule_Factory(t) { return new (t || SuiUtilityModule)(); }, providers: [
                SuiComponentFactory
            ], imports: [[common.CommonModule]] });
        return SuiUtilityModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiUtilityModule, { imports: [common.CommonModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiUtilityModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule],
                    providers: [
                        SuiComponentFactory
                    ]
                }]
        }], null, null); })();

    var _c0$3 = ["checkbox"];
    var _c1$1 = ["*"];
    var SuiCheckbox = /** @class */ (function () {
        function SuiCheckbox() {
            this.isChecked = false;
            this.onCheckChange = new core.EventEmitter();
            this.onTouched = new core.EventEmitter();
            this.isDisabled = false;
            this.isReadonly = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiCheckbox.prototype, "checkedAttribute", {
            get: function () {
                return this.isChecked ? "" : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCheckbox.prototype, "isDisabledAttribute", {
            get: function () {
                return this.isDisabled ? "disabled" : undefined;
            },
            enumerable: true,
            configurable: true
        });
        SuiCheckbox.prototype.onMouseDown = function (e) {
            e.preventDefault();
        };
        SuiCheckbox.prototype.onClick = function () {
            if (!this.isDisabled && !this.isReadonly) {
                this.toggle();
                this.focusCheckbox();
            }
        };
        SuiCheckbox.prototype.onFocusOut = function () {
            this.onTouched.emit();
        };
        SuiCheckbox.prototype.toggle = function () {
            this.isChecked = !this.isChecked;
            this.onCheckChange.emit(this.isChecked);
        };
        SuiCheckbox.prototype.writeValue = function (value) {
            this.isChecked = value;
        };
        SuiCheckbox.prototype.focusCheckbox = function () {
            this._checkboxElement.nativeElement.focus();
        };
        SuiCheckbox.ɵfac = function SuiCheckbox_Factory(t) { return new (t || SuiCheckbox)(); };
        SuiCheckbox.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiCheckbox, selectors: [["sui-checkbox"]], viewQuery: function SuiCheckbox_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$3, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._checkboxElement = _t.first);
            } }, hostVars: 8, hostBindings: function SuiCheckbox_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("mousedown", function SuiCheckbox_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("click", function SuiCheckbox_click_HostBindingHandler($event) { return ctx.onClick(); })("focusout", function SuiCheckbox_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("checkbox", ctx.hasClasses)("checked", ctx.isChecked)("read-only", ctx.isReadonly);
            } }, inputs: { name: "name", isDisabled: "isDisabled", isReadonly: "isReadonly" }, outputs: { onCheckChange: "checkChange", onTouched: "touched" }, exportAs: ["suiCheckbox"], ngContentSelectors: _c1$1, decls: 4, vars: 4, consts: [["type", "checkbox", 1, "hidden", 3, "ngModel", "ngModelChange"], ["checkbox", ""]], template: function SuiCheckbox_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "input", 0, 1);
                core["ɵɵlistener"]("ngModelChange", function SuiCheckbox_Template_input_ngModelChange_0_listener($event) { return ctx.isChecked = $event; });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "label");
                core["ɵɵprojection"](3);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngModel", ctx.isChecked);
                core["ɵɵattribute"]("name", ctx.name)("checked", ctx.checkedAttribute)("disabled", ctx.isDisabledAttribute);
            } }, directives: [forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel], encapsulation: 2 });
        return SuiCheckbox;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCheckbox, [{
            type: core.Component,
            args: [{
                    selector: "sui-checkbox",
                    exportAs: "suiCheckbox",
                    template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [(ngModel)]=\"isChecked\"\n       #checkbox>\n<label>\n    <ng-content></ng-content>\n</label>\n"
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.checkbox"]
            }], name: [{
                type: core.Input
            }], isChecked: [{
                type: core.HostBinding,
                args: ["class.checked"]
            }], onCheckChange: [{
                type: core.Output,
                args: ["checkChange"]
            }], onTouched: [{
                type: core.Output,
                args: ["touched"]
            }], isDisabled: [{
                type: core.Input
            }], isReadonly: [{
                type: core.HostBinding,
                args: ["class.read-only"]
            }, {
                type: core.Input
            }], _checkboxElement: [{
                type: core.ViewChild,
                args: ["checkbox", { static: true }]
            }], onMouseDown: [{
                type: core.HostListener,
                args: ["mousedown", ["$event"]]
            }], onClick: [{
                type: core.HostListener,
                args: ["click"]
            }], onFocusOut: [{
                type: core.HostListener,
                args: ["focusout"]
            }] }); })();
    var SuiCheckboxValueAccessor = /** @class */ (function (_super) {
        __extends(SuiCheckboxValueAccessor, _super);
        function SuiCheckboxValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiCheckboxValueAccessor.ɵfac = function SuiCheckboxValueAccessor_Factory(t) { return new (t || SuiCheckboxValueAccessor)(core["ɵɵdirectiveInject"](SuiCheckbox)); };
        SuiCheckboxValueAccessor.ɵdir = core["ɵɵdefineDirective"]({ type: SuiCheckboxValueAccessor, selectors: [["sui-checkbox"]], hostBindings: function SuiCheckboxValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("checkChange", function SuiCheckboxValueAccessor_checkChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiCheckboxValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
            } }, features: [core["ɵɵProvidersFeature"]([customValueAccessorFactory(SuiCheckboxValueAccessor)]), core["ɵɵInheritDefinitionFeature"]] });
        return SuiCheckboxValueAccessor;
    }(CustomValueAccessor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCheckboxValueAccessor, [{
            type: core.Directive,
            args: [{
                    selector: "sui-checkbox",
                    host: {
                        "(checkChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiCheckboxValueAccessor)]
                }]
        }], function () { return [{ type: SuiCheckbox }]; }, null); })();

    var _c0$4 = ["radio"];
    var _c1$2 = ["*"];
    var SuiRadio = /** @class */ (function () {
        function SuiRadio() {
            this.isChecked = false;
            this.onCurrentValueChange = new core.EventEmitter();
            this.onTouched = new core.EventEmitter();
            this.isDisabled = false;
            this.isReadonly = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiRadio.prototype, "checkedAttribute", {
            get: function () {
                return this.isChecked ? "" : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiRadio.prototype, "isDisabledAttribute", {
            get: function () {
                return this.isDisabled ? "disabled" : undefined;
            },
            enumerable: true,
            configurable: true
        });
        SuiRadio.prototype.onMouseDown = function (e) {
            e.preventDefault();
        };
        SuiRadio.prototype.onClick = function () {
            if (!this.isDisabled && !this.isReadonly) {
                this.currentValue = this.value;
                this.onCurrentValueChange.emit(this.currentValue);
                this.update();
                this.focusRadio();
            }
        };
        SuiRadio.prototype.onFocusOut = function () {
            this.onTouched.emit();
        };
        SuiRadio.prototype.update = function () {
            this.isChecked = this.currentValue === this.value;
        };
        SuiRadio.prototype.writeValue = function (value) {
            this.currentValue = value;
            this.update();
        };
        SuiRadio.prototype.focusRadio = function () {
            this._radioElement.nativeElement.focus();
        };
        SuiRadio.ɵfac = function SuiRadio_Factory(t) { return new (t || SuiRadio)(); };
        SuiRadio.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiRadio, selectors: [["sui-radio-button"]], viewQuery: function SuiRadio_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$4, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._radioElement = _t.first);
            } }, hostVars: 10, hostBindings: function SuiRadio_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("mousedown", function SuiRadio_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("click", function SuiRadio_click_HostBindingHandler($event) { return ctx.onClick(); })("focusout", function SuiRadio_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("radio", ctx.hasClasses)("checkbox", ctx.hasClasses)("checked", ctx.isChecked)("read-only", ctx.isReadonly);
            } }, inputs: { name: "name", value: "value", isDisabled: "isDisabled", isReadonly: "isReadonly" }, outputs: { onCurrentValueChange: "currentValueChange", onTouched: "touched" }, ngContentSelectors: _c1$2, decls: 4, vars: 4, consts: [["type", "checkbox", 1, "hidden", 3, "ngModel"], ["radio", ""]], template: function SuiRadio_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "input", 0, 1);
                core["ɵɵlistener"]("ngModel", function SuiRadio_Template_input_ngModel_0_listener($event) { return ctx.currentValue = ctx.value; });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "label");
                core["ɵɵprojection"](3);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngModel", ctx.isChecked);
                core["ɵɵattribute"]("name", ctx.name)("checked", ctx.checkedAttribute)("disabled", ctx.isDisabledAttribute);
            } }, directives: [forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel], encapsulation: 2 });
        return SuiRadio;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiRadio, [{
            type: core.Component,
            args: [{
                    selector: "sui-radio-button",
                    template: "\n<input class=\"hidden\"\n       type=\"checkbox\"\n       [attr.name]=\"name\"\n       [attr.checked]=\"checkedAttribute\"\n       [attr.disabled]=\"isDisabledAttribute\"\n       [ngModel]=\"isChecked\"\n       (ngModel)=\"currentValue = value\"\n       #radio>\n<label>\n    <ng-content></ng-content>\n</label>\n"
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.radio"]
            }, {
                type: core.HostBinding,
                args: ["class.checkbox"]
            }], name: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], isChecked: [{
                type: core.HostBinding,
                args: ["class.checked"]
            }], onCurrentValueChange: [{
                type: core.Output,
                args: ["currentValueChange"]
            }], onTouched: [{
                type: core.Output,
                args: ["touched"]
            }], isDisabled: [{
                type: core.Input
            }], isReadonly: [{
                type: core.HostBinding,
                args: ["class.read-only"]
            }, {
                type: core.Input
            }], _radioElement: [{
                type: core.ViewChild,
                args: ["radio", { static: true }]
            }], onMouseDown: [{
                type: core.HostListener,
                args: ["mousedown", ["$event"]]
            }], onClick: [{
                type: core.HostListener,
                args: ["click"]
            }], onFocusOut: [{
                type: core.HostListener,
                args: ["focusout"]
            }] }); })();
    var SuiRadioValueAccessor = /** @class */ (function (_super) {
        __extends(SuiRadioValueAccessor, _super);
        function SuiRadioValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiRadioValueAccessor.ɵfac = function SuiRadioValueAccessor_Factory(t) { return new (t || SuiRadioValueAccessor)(core["ɵɵdirectiveInject"](SuiRadio)); };
        SuiRadioValueAccessor.ɵdir = core["ɵɵdefineDirective"]({ type: SuiRadioValueAccessor, selectors: [["sui-radio-button"]], hostBindings: function SuiRadioValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("currentValueChange", function SuiRadioValueAccessor_currentValueChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiRadioValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
            } }, features: [core["ɵɵProvidersFeature"]([customValueAccessorFactory(SuiRadioValueAccessor)]), core["ɵɵInheritDefinitionFeature"]] });
        return SuiRadioValueAccessor;
    }(CustomValueAccessor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiRadioValueAccessor, [{
            type: core.Directive,
            args: [{
                    selector: "sui-radio-button",
                    host: {
                        "(currentValueChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiRadioValueAccessor)]
                }]
        }], function () { return [{ type: SuiRadio }]; }, null); })();

    var SuiRadioManager = /** @class */ (function () {
        function SuiRadioManager(element) {
            this.element = element;
            this.isNested = false;
            this._radioSubs = [];
        }
        SuiRadioManager.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.updateNesting();
            this._subManagers.changes.subscribe(function () { return _this.updateNesting(); });
            this.updateRadios();
            this._renderedRadios.changes.subscribe(function () { return _this.updateRadios(); });
        };
        SuiRadioManager.prototype.updateNesting = function () {
            var _this = this;
            this._subManagers
                .filter(function (m) { return m !== _this; })
                .forEach(function (m) { return m.isNested = true; });
        };
        SuiRadioManager.prototype.updateRadios = function () {
            var _this = this;
            this._radioSubs.forEach(function (s) { return s.unsubscribe(); });
            this._radioSubs = [];
            var groups = Util.Array.groupBy(this._renderedRadios.toArray(), "name");
            Object
                .keys(groups)
                .map(function (k) { return groups[k]; })
                .forEach(function (g) { return g
                .forEach(function (r) { return _this._radioSubs
                .push(r.onCurrentValueChange
                .subscribe(function (v) {
                if (!_this.isNested) {
                    g.forEach(function (radio) { return radio.writeValue(v); });
                }
            })); }); });
        };
        SuiRadioManager.ɵfac = function SuiRadioManager_Factory(t) { return new (t || SuiRadioManager)(core["ɵɵdirectiveInject"](core.ElementRef)); };
        SuiRadioManager.ɵdir = core["ɵɵdefineDirective"]({ type: SuiRadioManager, selectors: [["form", 3, "ngForm", "", 3, "ngForm", ""], ["ngForm"], ["", "ngForm", ""]], contentQueries: function SuiRadioManager_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, SuiRadioManager, true);
                core["ɵɵcontentQuery"](dirIndex, SuiRadio, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._subManagers = _t);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._renderedRadios = _t);
            } } });
        return SuiRadioManager;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiRadioManager, [{
            type: core.Directive,
            args: [{
                    selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { _subManagers: [{
                type: core.ContentChildren,
                args: [SuiRadioManager, { descendants: true }]
            }], _renderedRadios: [{
                type: core.ContentChildren,
                args: [SuiRadio, { descendants: true }]
            }] }); })();

    var SuiCheckboxModule = /** @class */ (function () {
        function SuiCheckboxModule() {
        }
        SuiCheckboxModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiCheckboxModule });
        SuiCheckboxModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiCheckboxModule_Factory(t) { return new (t || SuiCheckboxModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule
                ]] });
        return SuiCheckboxModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiCheckboxModule, { declarations: [SuiCheckbox,
            SuiCheckboxValueAccessor,
            SuiRadio,
            SuiRadioValueAccessor,
            SuiRadioManager], imports: [common.CommonModule,
            forms.FormsModule], exports: [SuiCheckbox,
            SuiCheckboxValueAccessor,
            SuiRadio,
            SuiRadioValueAccessor,
            SuiRadioManager] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCheckboxModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule
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
    var CalendarService = /** @class */ (function () {
        function CalendarService(config, localeValues) {
            this.localeValues = localeValues;
            this.onManualUpdate = function () { };
            this.config = config;
            this.currentDate = new Date();
            this.firstDayOfWeek = this.localeValues.firstDayOfWeek;
            this.onDateChange = new core.EventEmitter();
            this.reset();
        }
        Object.defineProperty(CalendarService.prototype, "config", {
            get: function () {
                return this._config;
            },
            set: function (config) {
                this._config = config;
                config.updateBounds(this._selectedDate || this.currentDate);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "inFinalView", {
            get: function () {
                return this.currentView === this.config.mappings.finalView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "selectedDate", {
            get: function () {
                return this._selectedDate;
            },
            set: function (date) {
                if (date) {
                    this._selectedDate = DateUtil.clone(date);
                    this.currentDate = DateUtil.clone(date);
                }
                else {
                    this._selectedDate = undefined;
                }
                this.config.updateBounds(this._selectedDate || this.currentDate);
                this.onManualUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "minDate", {
            get: function () {
                if (this._minDate && this.config.dateMinBound) {
                    return this._minDate > this.config.dateMinBound ? this._minDate : this.config.dateMinBound;
                }
                return this._minDate || this.config.dateMinBound;
            },
            set: function (min) {
                this._minDate = min;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "maxDate", {
            get: function () {
                if (this._maxDate && this.config.dateMaxBound) {
                    return this._maxDate < this.config.dateMaxBound ? this._maxDate : this.config.dateMaxBound;
                }
                return this._maxDate || this.config.dateMaxBound;
            },
            set: function (max) {
                this._maxDate = max;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarService.prototype, "firstDayOfWeek", {
            get: function () {
                return this._firstDayOfWeek;
            },
            set: function (firstDayOfWeek) {
                if (firstDayOfWeek != undefined) {
                    this._firstDayOfWeek = Math.max(0, Math.min(6, firstDayOfWeek));
                }
            },
            enumerable: true,
            configurable: true
        });
        CalendarService.prototype.reset = function () {
            this.currentView = this.config.mappings.finalView;
            if (!this._selectedDate) {
                var current = this.currentDate.getTime();
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
        };
        CalendarService.prototype.changeDate = function (date, fromView) {
            this.currentDate = date;
            if (fromView === this.config.mappings.finalView) {
                this.selectedDate = date;
                return this.onDateChange.emit(date);
            }
            this.updateView(this.config.mappings.changed, fromView);
        };
        CalendarService.prototype.zoomOut = function (fromView) {
            this.updateView(this.config.mappings.zoom, fromView);
        };
        CalendarService.prototype.updateView = function (mappings, fromView) {
            var mapping = mappings.get(fromView);
            if (mapping == undefined) {
                throw new Error("Unknown view type.");
            }
            this.currentView = mapping;
        };
        return CalendarService;
    }());

    var CalendarItem = /** @class */ (function () {
        function CalendarItem(date) {
            this.date = date;
        }
        return CalendarItem;
    }());
    var SuiCalendarItem = /** @class */ (function () {
        function SuiCalendarItem(changeDetector) {
            this.changeDetector = changeDetector;
            this.hasFocus = false;
            this.onFocussed = new core.EventEmitter();
        }
        Object.defineProperty(SuiCalendarItem.prototype, "isSelectable", {
            get: function () {
                return this.item.isSelectable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCalendarItem.prototype, "isActive", {
            get: function () {
                return this.item.isActive;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCalendarItem.prototype, "isToday", {
            get: function () {
                return this.item.isToday;
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarItem.prototype.onMouseMove = function () {
            if (!this.hasFocus) {
                this.hasFocus = true;
                this.onFocussed.emit(this.hasFocus);
            }
        };
        SuiCalendarItem.prototype.onMouseLeave = function () {
            this.hasFocus = false;
            this.onFocussed.emit(this.hasFocus);
        };
        SuiCalendarItem.ɵfac = function SuiCalendarItem_Factory(t) { return new (t || SuiCalendarItem)(core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        SuiCalendarItem.ɵdir = core["ɵɵdefineDirective"]({ type: SuiCalendarItem, selectors: [["", "calendarItem", ""]], hostVars: 8, hostBindings: function SuiCalendarItem_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("mousemove", function SuiCalendarItem_mousemove_HostBindingHandler($event) { return ctx.onMouseMove(); })("mouseleave", function SuiCalendarItem_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("disabled", ctx.isSelectable)("active", ctx.isActive)("today", ctx.isToday)("focus", ctx.hasFocus);
            } }, inputs: { item: ["calendarItem", "item"] } });
        return SuiCalendarItem;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCalendarItem, [{
            type: core.Directive,
            args: [{
                    selector: "[calendarItem]"
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { item: [{
                type: core.Input,
                args: ["calendarItem"]
            }], isSelectable: [{
                type: core.HostBinding,
                args: ["class.disabled"]
            }], isActive: [{
                type: core.HostBinding,
                args: ["class.active"]
            }], isToday: [{
                type: core.HostBinding,
                args: ["class.today"]
            }], hasFocus: [{
                type: core.HostBinding,
                args: ["class.focus"]
            }], onMouseMove: [{
                type: core.HostListener,
                args: ["mousemove"]
            }], onMouseLeave: [{
                type: core.HostListener,
                args: ["mouseleave"]
            }] }); })();

    var DateComparer = /** @class */ (function () {
        function DateComparer(precision, isSmallest) {
            this._precision = precision;
            this._isSmallest = isSmallest;
        }
        DateComparer.prototype.equal = function (a, b) {
            if (this._precision === DatePrecision.Minute) {
                return !!b &&
                    DateUtil.equal(DatePrecision.Hour, b, a) &&
                    Util.Math.roundDown(b.getMinutes(), 5) === Util.Math.roundDown(a.getMinutes(), 5);
            }
            return !!b && DateUtil.equal(this._precision, a, b);
        };
        DateComparer.prototype.lessThan = function (a, b) {
            if (this._isSmallest) {
                return !b || (b >= a);
            }
            return !b || (DateUtil.endOf(this._precision, DateUtil.clone(b)) >= a);
        };
        DateComparer.prototype.greaterThan = function (a, b) {
            if (this._isSmallest) {
                return !b || (b <= a);
            }
            return !b || (DateUtil.startOf(this._precision, DateUtil.clone(b)) <= a);
        };
        DateComparer.prototype.between = function (date, left, right) {
            return this.greaterThan(date, left) && this.lessThan(date, right);
        };
        return DateComparer;
    }());

    var CalendarRange = /** @class */ (function () {
        function CalendarRange(start, dates, items, grouped, comparer) {
            this.start = start;
            this.dates = dates;
            this.items = items;
            this.groupedItems = grouped;
            this._comparer = comparer;
        }
        Object.defineProperty(CalendarRange.prototype, "inRange", {
            get: function () {
                return this.items.filter(function (i) { return !i.isOutsideRange; });
            },
            enumerable: true,
            configurable: true
        });
        CalendarRange.prototype.find = function (item) {
            var _this = this;
            return this.items.find(function (i) { return _this._comparer.equal(i.date, item.date); });
        };
        CalendarRange.prototype.findIndex = function (item) {
            var _this = this;
            if (!item) {
                return -1;
            }
            return this.items.findIndex(function (i) { return _this._comparer.equal(i.date, item.date); });
        };
        CalendarRange.prototype.containsDate = function (date) {
            var _this = this;
            return !!this.inRange.find(function (i) { return _this._comparer.equal(i.date, date); });
        };
        return CalendarRange;
    }());
    var CalendarRangeService = /** @class */ (function () {
        function CalendarRangeService(interval, rows, columns) {
            this.interval = interval;
            this.marginal = interval + 1;
            this.rows = rows;
            this.columns = columns;
        }
        Object.defineProperty(CalendarRangeService.prototype, "dateComparer", {
            get: function () {
                return new DateComparer(this.marginal, this.service.inFinalView);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarRangeService.prototype, "length", {
            get: function () {
                return this.rows * this.columns;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarRangeService.prototype, "canMoveNext", {
            get: function () {
                var firstItem = this.next.inRange[0];
                if (firstItem && this.service.maxDate) {
                    return firstItem.date <= this.service.maxDate;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarRangeService.prototype, "canMovePrevious", {
            get: function () {
                var lastItem = this.previous.inRange.slice(-1).pop();
                if (lastItem && this.service.minDate) {
                    return lastItem.date >= this.service.minDate;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        CalendarRangeService.prototype.loadService = function (service) {
            this.service = service;
            this.refresh();
        };
        CalendarRangeService.prototype.refresh = function () {
            this.current = this.calcRange(this.service.currentDate);
            this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
            this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
        };
        CalendarRangeService.prototype.move = function (forwards) {
            if (forwards) {
                return this.moveNext();
            }
            return this.movePrevious();
        };
        CalendarRangeService.prototype.moveNext = function () {
            DateUtil.next(this.interval, this.service.currentDate);
            this.previous = this.current;
            this.current = this.next;
            this.next = this.calcRange(DateUtil.next(this.interval, DateUtil.clone(this.service.currentDate)));
        };
        CalendarRangeService.prototype.movePrevious = function () {
            DateUtil.previous(this.interval, this.service.currentDate);
            this.next = this.current;
            this.current = this.previous;
            this.previous = this.calcRange(DateUtil.previous(this.interval, DateUtil.clone(this.service.currentDate)));
        };
        CalendarRangeService.prototype.calc = function (forwards) {
            if (forwards) {
                return this.next;
            }
            return this.previous;
        };
        CalendarRangeService.prototype.calcRange = function (startDate) {
            var start = this.calcStart(startDate);
            if (this.service.inFinalView) {
                DateUtil.startOf(this.marginal, start, true);
            }
            var dates = this.calcDates(start);
            var items = this.calcItems(dates, startDate);
            return new CalendarRange(start, dates, items, Util.Array.group(items, this.columns), this.dateComparer);
        };
        CalendarRangeService.prototype.calcStart = function (date) {
            return DateUtil.startOf(this.interval, DateUtil.clone(date));
        };
        CalendarRangeService.prototype.calcDates = function (rangeStart) {
            var _this = this;
            return Util.Array
                .range(this.length)
                .map(function (i) { return DateUtil.add(_this.marginal, DateUtil.clone(rangeStart), i); });
        };
        CalendarRangeService.prototype.calcItems = function (dateRange, baseDate) {
            var _this = this;
            return dateRange.map(function (date) {
                var item = new CalendarItem(date);
                item.isDisabled = !_this.dateComparer.between(item.date, _this.service.minDate, _this.service.maxDate);
                item.isActive = _this.dateComparer.equal(item.date, _this.service.selectedDate);
                item.isToday = _this.dateComparer.equal(item.date, new Date());
                item.isSelectable = item.isDisabled;
                _this.configureItem(item, baseDate);
                return item;
            });
        };
        return CalendarRangeService;
    }());

    var CalendarViewType;
    (function (CalendarViewType) {
        CalendarViewType[CalendarViewType["Year"] = 0] = "Year";
        CalendarViewType[CalendarViewType["Month"] = 1] = "Month";
        CalendarViewType[CalendarViewType["Date"] = 2] = "Date";
        CalendarViewType[CalendarViewType["Hour"] = 3] = "Hour";
        CalendarViewType[CalendarViewType["Minute"] = 4] = "Minute";
    })(CalendarViewType || (CalendarViewType = {}));
    var CalendarView = /** @class */ (function () {
        function CalendarView(renderer, viewType, ranges) {
            var _this = this;
            this._type = viewType;
            this.ranges = ranges;
            this._documentKeyDownListener = renderer.listen("document", "keydown", function (e) { return _this.onDocumentKeyDown(e); });
        }
        Object.defineProperty(CalendarView.prototype, "service", {
            get: function () {
                return this._service;
            },
            set: function (service) {
                var _this = this;
                this._service = service;
                this.ranges.loadService(service);
                this.service.onManualUpdate = function () {
                    _this.ranges.refresh();
                    delete _this._highlightedItem;
                    _this.autoHighlight();
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarView.prototype, "currentDate", {
            get: function () {
                return this.service.currentDate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CalendarView.prototype, "selectedDate", {
            get: function () {
                return this.service.selectedDate;
            },
            enumerable: true,
            configurable: true
        });
        // Template Methods
        CalendarView.prototype.setDate = function (item) {
            this.service.changeDate(item.date, this._type);
        };
        CalendarView.prototype.zoomOut = function () {
            this.service.zoomOut(this._type);
        };
        // Keyboard Control
        CalendarView.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._renderedItems.changes.subscribe(function () { return _this.onRenderedItemsChanged(); });
            this.onRenderedItemsChanged();
        };
        CalendarView.prototype.onRenderedItemsChanged = function () {
            var _this = this;
            this._renderedItems.forEach(function (i) {
                return i.onFocussed.subscribe(function (hasFocus) {
                    if (hasFocus) {
                        _this.highlightItem(i.item);
                    }
                });
            });
            this.autoHighlight();
            this.highlightItem(this._highlightedItem);
        };
        CalendarView.prototype.autoHighlight = function () {
            var _this = this;
            var date = this.selectedDate && this.ranges.current.containsDate(this.selectedDate) ? this.selectedDate : this.currentDate;
            if (this._highlightedItem && this.ranges.current.containsDate(this._highlightedItem.date)) {
                date = this._highlightedItem.date;
            }
            var initiallyHighlighted = this.ranges.current.items.find(function (i) { return _this.ranges.dateComparer.equal(i.date, date); });
            if (initiallyHighlighted && !initiallyHighlighted.isDisabled) {
                this._highlightedItem = initiallyHighlighted;
            }
        };
        CalendarView.prototype.highlightItem = function (item) {
            if (item) {
                this._renderedItems.forEach(function (i) { return i.hasFocus = false; });
                var rendered = this._renderedItems.find(function (ri) { return ri.item === item; });
                if (rendered && !rendered.hasFocus) {
                    rendered.hasFocus = true;
                    rendered.changeDetector.detectChanges();
                }
                this._highlightedItem = item;
            }
        };
        CalendarView.prototype.onDocumentKeyDown = function (e) {
            if (this._highlightedItem && e.keyCode === KeyCode.Enter) {
                this.setDate(this._highlightedItem);
                return;
            }
            if (!this._highlightedItem) {
                this.autoHighlight();
            }
            var index = this.ranges.current.findIndex(this._highlightedItem);
            var isMovingForward = true;
            var delta = 0;
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
            var nextItem = this.ranges.current.items[index + delta];
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
                var adjustedIndex = this.ranges.current.findIndex(this._highlightedItem);
                var nextItems = this.ranges.calc(isMovingForward).inRange;
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
        };
        CalendarView.prototype.ngOnDestroy = function () {
            this._documentKeyDownListener();
        };
        CalendarView.ɵfac = function CalendarView_Factory(t) { return new (t || CalendarView)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](CalendarViewType), core["ɵɵdirectiveInject"](CalendarRangeService)); };
        CalendarView.ɵdir = core["ɵɵdefineDirective"]({ type: CalendarView, viewQuery: function CalendarView_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵviewQuery"](SuiCalendarItem, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._renderedItems = _t);
            } }, inputs: { service: "service" } });
        return CalendarView;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CalendarView, [{
            type: core.Directive
        }], function () { return [{ type: core.Renderer2 }, { type: CalendarViewType }, { type: CalendarRangeService }]; }, { _renderedItems: [{
                type: core.ViewChildren,
                args: [SuiCalendarItem]
            }], service: [{
                type: core.Input
            }] }); })();

    var CalendarMappings = /** @class */ (function () {
        function CalendarMappings() {
        }
        return CalendarMappings;
    }());
    var DateMappings = /** @class */ (function (_super) {
        __extends(DateMappings, _super);
        function DateMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Date;
            _this.finalView = CalendarViewType.Date;
            _this.changed = new Map([
                [CalendarViewType.Year, CalendarViewType.Month],
                [CalendarViewType.Month, CalendarViewType.Date],
                [CalendarViewType.Date, CalendarViewType.Date]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Year, CalendarViewType.Date],
                [CalendarViewType.Month, CalendarViewType.Year],
                [CalendarViewType.Date, CalendarViewType.Month]
            ]);
            return _this;
        }
        return DateMappings;
    }(CalendarMappings));
    var TimeMappings = /** @class */ (function (_super) {
        __extends(TimeMappings, _super);
        function TimeMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Hour;
            _this.finalView = CalendarViewType.Minute;
            _this.changed = new Map([
                [CalendarViewType.Hour, CalendarViewType.Minute],
                [CalendarViewType.Minute, CalendarViewType.Minute]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Hour, CalendarViewType.Minute],
                [CalendarViewType.Minute, CalendarViewType.Hour]
            ]);
            return _this;
        }
        return TimeMappings;
    }(CalendarMappings));
    var DatetimeMappings = /** @class */ (function (_super) {
        __extends(DatetimeMappings, _super);
        function DatetimeMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Date;
            _this.finalView = CalendarViewType.Minute;
            _this.changed = new Map([
                [CalendarViewType.Year, CalendarViewType.Month],
                [CalendarViewType.Month, CalendarViewType.Date],
                [CalendarViewType.Date, CalendarViewType.Hour],
                [CalendarViewType.Hour, CalendarViewType.Minute],
                [CalendarViewType.Minute, CalendarViewType.Minute]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Year, CalendarViewType.Date],
                [CalendarViewType.Month, CalendarViewType.Year],
                [CalendarViewType.Date, CalendarViewType.Month],
                [CalendarViewType.Hour, CalendarViewType.Date],
                [CalendarViewType.Minute, CalendarViewType.Hour]
            ]);
            return _this;
        }
        return DatetimeMappings;
    }(CalendarMappings));
    var MonthMappings = /** @class */ (function (_super) {
        __extends(MonthMappings, _super);
        function MonthMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Month;
            _this.finalView = CalendarViewType.Month;
            _this.changed = new Map([
                [CalendarViewType.Year, CalendarViewType.Month],
                [CalendarViewType.Month, CalendarViewType.Month]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Year, CalendarViewType.Month],
                [CalendarViewType.Month, CalendarViewType.Year]
            ]);
            return _this;
        }
        return MonthMappings;
    }(CalendarMappings));
    var YearMappings = /** @class */ (function (_super) {
        __extends(YearMappings, _super);
        function YearMappings() {
            var _this = _super.call(this) || this;
            _this.initialView = CalendarViewType.Year;
            _this.finalView = CalendarViewType.Year;
            _this.changed = new Map([
                [CalendarViewType.Year, CalendarViewType.Year]
            ]);
            _this.zoom = new Map([
                [CalendarViewType.Year, CalendarViewType.Year]
            ]);
            return _this;
        }
        return YearMappings;
    }(CalendarMappings));

    var CalendarConfig = /** @class */ (function () {
        function CalendarConfig(mode, precision, mappings, fallback) {
            this.mode = mode;
            this.precision = precision;
            this.mappings = mappings;
            this.fallback = fallback;
        }
        CalendarConfig.prototype.updateBounds = function (providedDate) {
            this.dateMinBound = DateUtil.startOf(DatePrecision.Year, new Date(), true);
            this.dateMinBound.setFullYear(0);
        };
        return CalendarConfig;
    }());
    var DateConfigBase = /** @class */ (function (_super) {
        __extends(DateConfigBase, _super);
        function DateConfigBase(precision, mappings, fallback) {
            return _super.call(this, CalendarMode.DateOnly, precision, mappings, fallback) || this;
        }
        return DateConfigBase;
    }(CalendarConfig));
    var YearConfig = /** @class */ (function (_super) {
        __extends(YearConfig, _super);
        function YearConfig() {
            return _super.call(this, DatePrecision.Year, new YearMappings(), "number") || this;
        }
        return YearConfig;
    }(DateConfigBase));
    var MonthConfig = /** @class */ (function (_super) {
        __extends(MonthConfig, _super);
        function MonthConfig() {
            return _super.call(this, DatePrecision.Month, new MonthMappings(), "month") || this;
        }
        return MonthConfig;
    }(DateConfigBase));
    var DateConfig = /** @class */ (function (_super) {
        __extends(DateConfig, _super);
        function DateConfig() {
            return _super.call(this, DatePrecision.Date, new DateMappings(), "date") || this;
        }
        return DateConfig;
    }(DateConfigBase));
    var DatetimeConfig = /** @class */ (function (_super) {
        __extends(DatetimeConfig, _super);
        function DatetimeConfig() {
            return _super.call(this, CalendarMode.Both, DatePrecision.Minute, new DatetimeMappings(), "datetime-local") || this;
        }
        return DatetimeConfig;
    }(CalendarConfig));
    var TimeConfig = /** @class */ (function (_super) {
        __extends(TimeConfig, _super);
        function TimeConfig() {
            return _super.call(this, CalendarMode.TimeOnly, DatePrecision.Minute, new TimeMappings(), "time") || this;
        }
        TimeConfig.prototype.updateBounds = function (providedDate) {
            this.dateMaxBound = DateUtil.endOf(DatePrecision.Date, DateUtil.clone(providedDate));
            this.dateMinBound = DateUtil.previous(DatePrecision.Date, DateUtil.clone(this.dateMaxBound));
        };
        return TimeConfig;
    }(CalendarConfig));

    function buildLocalizeFn(values, defaultType, indexCallback) {
        return function (dirtyIndex, _a) {
            var type = (_a === void 0 ? { type: defaultType } : _a).type;
            var index = indexCallback ? indexCallback(dirtyIndex) : dirtyIndex;
            return type ? values[type][index] : "";
        };
    }
    function buildLocalizeArrayFn(values, defaultType) {
        return function (_a) {
            var type = (_a === void 0 ? { type: defaultType } : _a).type;
            return type ? values[type] : [];
        };
    }
    function buildMatchFn(patterns, defaultType) {
        return function (dirtyString, _a) {
            var type = (_a === void 0 ? { type: defaultType } : _a).type;
            if (type) {
                return dirtyString.match("^(" + patterns[type].join("|") + ")");
            }
            // tslint:disable-next-line:no-null-keyword
            return null;
        };
    }
    function buildParseFn(patterns, defaultType) {
        return function (_a, _b) {
            var _c = __read(_a, 2), result = _c[1];
            var type = (_b === void 0 ? { type: defaultType } : _b).type;
            return type ? (patterns[type] || patterns[defaultType])
                .map(function (p) { return new RegExp("^" + p); })
                .findIndex(function (pattern) { return pattern.test(result); })
                : -1;
        };
    }
    var DateFnsParser = /** @class */ (function () {
        function DateFnsParser(locale) {
            this._weekStartsOn = locale.firstDayOfWeek;
            var weekdayValues = {
                long: locale.weekdays,
                short: locale.weekdaysShort,
                narrow: locale.weekdaysNarrow
            };
            var monthValues = {
                long: locale.months,
                short: locale.monthsShort
            };
            var timeOfDayValues = {
                long: locale.timesOfDay,
                uppercase: locale.timesOfDayUppercase,
                lowercase: locale.timesOfDayLowercase
            };
            var timeOfDayMatchValues = {
                long: locale.timesOfDay,
                short: locale.timesOfDayUppercase.concat(locale.timesOfDayLowercase)
            };
            this._locale = defaultLocale;
            this._locale.localize = __assign(__assign({}, this._locale.localize), {
                weekday: buildLocalizeFn(weekdayValues, "long"),
                weekdays: buildLocalizeArrayFn(weekdayValues, "long"),
                month: buildLocalizeFn(monthValues, "long"),
                months: buildLocalizeArrayFn(monthValues, "long"),
                timeOfDay: buildLocalizeFn(timeOfDayValues, "long", function (hours) {
                    return hours / 12 >= 1 ? 1 : 0;
                }),
                timesOfDay: buildLocalizeArrayFn(timeOfDayValues, "long")
            });
            this._locale.match = __assign(__assign({}, this._locale.match), {
                weekdays: buildMatchFn(weekdayValues, "long"),
                weekday: buildParseFn(weekdayValues, "long"),
                months: buildMatchFn(monthValues, "long"),
                month: buildParseFn(monthValues, "long"),
                timesOfDay: buildMatchFn(timeOfDayMatchValues, "long"),
                timeOfDay: buildParseFn(timeOfDayMatchValues, "long")
            });
        }
        Object.defineProperty(DateFnsParser.prototype, "_config", {
            get: function () {
                return {
                    weekStartsOn: this._weekStartsOn,
                    locale: this._locale
                };
            },
            enumerable: true,
            configurable: true
        });
        DateFnsParser.prototype.format = function (d, f) {
            return dateFns.format(d, f, this._config);
        };
        DateFnsParser.prototype.parse = function (dS, f, bD) {
            return dateFns.parse(dS, f, bD, this._config);
        };
        return DateFnsParser;
    }());

    var DateParser = /** @class */ (function () {
        function DateParser(format, locale) {
            this._format = format;
            this._parser = new DateFnsParser(locale);
        }
        DateParser.prototype.format = function (date) {
            return this._parser.format(date, this._format);
        };
        DateParser.prototype.parse = function (dateString, baseDate) {
            if (baseDate === void 0) { baseDate = new Date(); }
            return this._parser.parse(dateString, this._format, baseDate);
        };
        return DateParser;
    }());
    var InternalDateParser = /** @class */ (function (_super) {
        __extends(InternalDateParser, _super);
        function InternalDateParser(mode, locale) {
            var _this = this;
            var internalFormats = {
                time: "HH:mm",
                datetime: "YYYY-MM-DDTHH:mm",
                date: "YYYY-MM-DD",
                month: "YYYY-MM",
                year: "YYYY"
            };
            _this = _super.call(this, internalFormats[mode], locale) || this;
            return _this;
        }
        return InternalDateParser;
    }(DateParser));

    var _c0$5 = ["*"];
    var SuiCalendarViewTitle = /** @class */ (function () {
        function SuiCalendarViewTitle() {
            this.onZoomOut = new core.EventEmitter();
        }
        SuiCalendarViewTitle.ɵfac = function SuiCalendarViewTitle_Factory(t) { return new (t || SuiCalendarViewTitle)(); };
        SuiCalendarViewTitle.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiCalendarViewTitle, selectors: [["sui-calendar-view-title"]], inputs: { ranges: "ranges" }, outputs: { onZoomOut: "zoomOut" }, ngContentSelectors: _c0$5, decls: 6, vars: 4, consts: [[1, "title", "link", 3, "click"], [1, "prev", "link", 3, "click"], [1, "chevron", "left", "icon"], [1, "next", "link", 3, "click"], [1, "chevron", "right", "icon"]], template: function SuiCalendarViewTitle_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "span", 0);
                core["ɵɵlistener"]("click", function SuiCalendarViewTitle_Template_span_click_0_listener($event) { return ctx.onZoomOut.emit(); });
                core["ɵɵprojection"](1);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "span", 1);
                core["ɵɵlistener"]("click", function SuiCalendarViewTitle_Template_span_click_2_listener($event) { return ctx.ranges == null ? null : ctx.ranges.movePrevious(); });
                core["ɵɵelement"](3, "i", 2);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](4, "span", 3);
                core["ɵɵlistener"]("click", function SuiCalendarViewTitle_Template_span_click_4_listener($event) { return ctx.ranges == null ? null : ctx.ranges.moveNext(); });
                core["ɵɵelement"](5, "i", 4);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](2);
                core["ɵɵclassProp"]("disabled", !(ctx.ranges == null ? null : ctx.ranges.canMovePrevious));
                core["ɵɵadvance"](2);
                core["ɵɵclassProp"]("disabled", !(ctx.ranges == null ? null : ctx.ranges.canMoveNext));
            } }, styles: [".title.link[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}"] });
        return SuiCalendarViewTitle;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCalendarViewTitle, [{
            type: core.Component,
            args: [{
                    selector: "sui-calendar-view-title",
                    template: "\n<span class=\"title link\" (click)=\"onZoomOut.emit()\">\n    <ng-content></ng-content>\n</span>\n<span class=\"prev link\" [class.disabled]=\"!ranges?.canMovePrevious\" (click)=\"ranges?.movePrevious()\">\n    <i class=\"chevron left icon\"></i>\n</span>\n<span class=\"next link\" [class.disabled]=\"!ranges?.canMoveNext\" (click)=\"ranges?.moveNext()\">\n    <i class=\"chevron right icon\"></i>\n</span>\n",
                    styles: ["\n.title.link {\n    display: inline-block;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n"]
                }]
        }], function () { return []; }, { ranges: [{
                type: core.Input
            }], onZoomOut: [{
                type: core.Output,
                args: ["zoomOut"]
            }] }); })();

    function SuiDatepicker_sui_calendar_year_view_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "sui-calendar-year-view", 2);
    } if (rf & 2) {
        var ctx_r149 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("service", ctx_r149.service);
    } }
    function SuiDatepicker_sui_calendar_month_view_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "sui-calendar-month-view", 2);
    } if (rf & 2) {
        var ctx_r150 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("service", ctx_r150.service);
    } }
    function SuiDatepicker_sui_calendar_date_view_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "sui-calendar-date-view", 2);
    } if (rf & 2) {
        var ctx_r151 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("service", ctx_r151.service);
    } }
    function SuiDatepicker_sui_calendar_hour_view_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "sui-calendar-hour-view", 2);
    } if (rf & 2) {
        var ctx_r152 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("service", ctx_r152.service);
    } }
    function SuiDatepicker_sui_calendar_minute_view_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "sui-calendar-minute-view", 2);
    } if (rf & 2) {
        var ctx_r153 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("service", ctx_r153.service);
    } }
    var DatepickerMode = {
        Year: "year",
        Month: "month",
        Date: "date",
        Datetime: "datetime",
        Time: "time"
    };
    var SuiDatepicker = /** @class */ (function () {
        function SuiDatepicker(localizationService) {
            this.service = new CalendarService(new DatetimeConfig(), localizationService.get().datepicker);
            this.hasClasses = true;
        }
        SuiDatepicker.prototype.onMouseDown = function (e) {
            e.preventDefault();
        };
        SuiDatepicker.ɵfac = function SuiDatepicker_Factory(t) { return new (t || SuiDatepicker)(core["ɵɵdirectiveInject"](SuiLocalizationService)); };
        SuiDatepicker.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiDatepicker, selectors: [["sui-datepicker"]], hostVars: 6, hostBindings: function SuiDatepicker_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("mousedown", function SuiDatepicker_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("active", ctx.hasClasses)("calendar", ctx.hasClasses);
            } }, decls: 6, vars: 6, consts: [[3, "ngSwitch"], [3, "service", 4, "ngSwitchCase"], [3, "service"]], template: function SuiDatepicker_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, SuiDatepicker_sui_calendar_year_view_1_Template, 1, 1, "sui-calendar-year-view", 1);
                core["ɵɵtemplate"](2, SuiDatepicker_sui_calendar_month_view_2_Template, 1, 1, "sui-calendar-month-view", 1);
                core["ɵɵtemplate"](3, SuiDatepicker_sui_calendar_date_view_3_Template, 1, 1, "sui-calendar-date-view", 1);
                core["ɵɵtemplate"](4, SuiDatepicker_sui_calendar_hour_view_4_Template, 1, 1, "sui-calendar-hour-view", 1);
                core["ɵɵtemplate"](5, SuiDatepicker_sui_calendar_minute_view_5_Template, 1, 1, "sui-calendar-minute-view", 1);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngSwitch", ctx.service.currentView);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", 0);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", 1);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", 2);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", 3);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", 4);
            } }, styles: ["[_nghost-%COMP%] {\n    user-select: none;\n}"] });
        return SuiDatepicker;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDatepicker, [{
            type: core.Component,
            args: [{
                    selector: "sui-datepicker",
                    template: "\n<ng-container [ngSwitch]=\"service.currentView\">\n    <sui-calendar-year-view [service]=\"service\" *ngSwitchCase=\"0\"></sui-calendar-year-view>\n    <sui-calendar-month-view [service]=\"service\" *ngSwitchCase=\"1\"></sui-calendar-month-view>    \n    <sui-calendar-date-view [service]=\"service\" *ngSwitchCase=\"2\"></sui-calendar-date-view>    \n    <sui-calendar-hour-view [service]=\"service\" *ngSwitchCase=\"3\"></sui-calendar-hour-view>    \n    <sui-calendar-minute-view [service]=\"service\" *ngSwitchCase=\"4\"></sui-calendar-minute-view>    \n</ng-container>\n",
                    styles: ["\n:host {\n    user-select: none;\n}\n"]
                }]
        }], function () { return [{ type: SuiLocalizationService }]; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.active"]
            }, {
                type: core.HostBinding,
                args: ["class.calendar"]
            }], onMouseDown: [{
                type: core.HostListener,
                args: ["mousedown", ["$event"]]
            }] }); })();

    var PopupTrigger = {
        Hover: "hover",
        Click: "click",
        OutsideClick: "outsideClick",
        Focus: "focus",
        Manual: "manual"
    };
    var PopupConfig = /** @class */ (function () {
        function PopupConfig(defaults) {
            if (defaults === void 0) { defaults = {}; }
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
        return PopupConfig;
    }());

    function SuiPopupArrow_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "div", 2);
    } if (rf & 2) {
        var ctx_r159 = core["ɵɵnextContext"]();
        core["ɵɵattribute"]("direction", ctx_r159.direction);
    } }
    function SuiPopupArrow_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "div", 3);
    } if (rf & 2) {
        var ctx_r160 = core["ɵɵnextContext"]();
        core["ɵɵattribute"]("direction", ctx_r160.direction)("alignment", ctx_r160.alignment);
    } }
    var SuiPopupArrow = /** @class */ (function () {
        function SuiPopupArrow() {
        }
        Object.defineProperty(SuiPopupArrow.prototype, "direction", {
            get: function () {
                if (this.placement) {
                    return this.placement.split(" ").shift();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopupArrow.prototype, "alignment", {
            get: function () {
                if (this.placement) {
                    var alignment = this.placement.split(" ").pop();
                    if (alignment === this.direction) {
                        return "center";
                    }
                    return alignment;
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiPopupArrow.ɵfac = function SuiPopupArrow_Factory(t) { return new (t || SuiPopupArrow)(); };
        SuiPopupArrow.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiPopupArrow, selectors: [["sui-popup-arrow"]], hostVars: 2, hostBindings: function SuiPopupArrow_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("inverted", ctx.inverted);
            } }, inputs: { placement: "placement", inverted: "inverted" }, decls: 2, vars: 2, consts: [["class", "dynamic arrow", 4, "ngIf"], ["class", "static arrow", 4, "ngIf"], [1, "dynamic", "arrow"], [1, "static", "arrow"]], template: function SuiPopupArrow_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, SuiPopupArrow_div_0_Template, 1, 1, "div", 0);
                core["ɵɵtemplate"](1, SuiPopupArrow_div_1_Template, 1, 2, "div", 1);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.alignment == "center");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.alignment != "center");
            } }, directives: [common.NgIf], styles: [".arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 0.71428571em;\n    height: 0.71428571em;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    z-index: 2;\n}\n\n.inverted[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    background: #1b1c1d;\n}\n\n.arrow[direction=\"top\"][_ngcontent-%COMP%] {\n    bottom: -0.30714286em;\n    box-shadow: 1px 1px 0 0 #bababc;\n}\n\n.arrow[direction=\"left\"][_ngcontent-%COMP%] {\n    right: -0.30714286em;\n    box-shadow: 1px -1px 1px 0 #bababc;\n}\n\n.arrow[direction=\"bottom\"][_ngcontent-%COMP%] {\n    top: -0.30714286em;\n    box-shadow: -1px -1px 0 0 #bababc;\n}\n\n.arrow[direction=\"right\"][_ngcontent-%COMP%] {\n    left: -0.30714286em;\n    box-shadow: -1px 1px 1px 0 #bababc;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"left\"][_ngcontent-%COMP%], .static.arrow[direction=\"top\"][alignment=\"left\"][_ngcontent-%COMP%] {\n    left: 1em;\n    right: auto;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"top\"][_ngcontent-%COMP%], .static.arrow[direction=\"right\"][alignment=\"top\"][_ngcontent-%COMP%] {\n    top: 1em;\n    bottom: auto;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"right\"][_ngcontent-%COMP%], .static.arrow[direction=\"top\"][alignment=\"right\"][_ngcontent-%COMP%] {\n    left: auto;\n    right: 1em;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"bottom\"][_ngcontent-%COMP%], .static.arrow[direction=\"right\"][alignment=\"bottom\"][_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 1em;\n}"] });
        return SuiPopupArrow;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiPopupArrow, [{
            type: core.Component,
            args: [{
                    selector: "sui-popup-arrow",
                    template: "\n<div class=\"dynamic arrow\" [attr.direction]=\"direction\" *ngIf=\"alignment == 'center'\"></div>\n<div class=\"static arrow\" [attr.direction]=\"direction\" [attr.alignment]=\"alignment\" *ngIf=\"alignment != 'center'\"></div>\n",
                    styles: ["\n.arrow {\n    position: absolute;\n    width: 0.71428571em;\n    height: 0.71428571em;\n    background: #ffffff;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    z-index: 2;\n}\n\n:host.inverted .arrow {\n    background: #1b1c1d;\n}\n\n.arrow[direction=\"top\"] {\n    bottom: -0.30714286em;\n    box-shadow: 1px 1px 0 0 #bababc;\n}\n\n.arrow[direction=\"left\"] {\n    right: -0.30714286em;\n    box-shadow: 1px -1px 1px 0 #bababc;\n}\n\n.arrow[direction=\"bottom\"] {\n    top: -0.30714286em;\n    box-shadow: -1px -1px 0 0 #bababc;\n}\n\n.arrow[direction=\"right\"] {\n    left: -0.30714286em;\n    box-shadow: -1px 1px 1px 0 #bababc;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"left\"],\n.static.arrow[direction=\"top\"][alignment=\"left\"] {\n    left: 1em;\n    right: auto;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"top\"],\n.static.arrow[direction=\"right\"][alignment=\"top\"] {\n    top: 1em;\n    bottom: auto;\n}\n\n.static.arrow[direction=\"bottom\"][alignment=\"right\"],\n.static.arrow[direction=\"top\"][alignment=\"right\"] {\n    left: auto;\n    right: 1em;\n}\n\n.static.arrow[direction=\"left\"][alignment=\"bottom\"],\n.static.arrow[direction=\"right\"][alignment=\"bottom\"] {\n    top: auto;\n    bottom: 1em;\n}\n"]
                }]
        }], null, { placement: [{
                type: core.Input
            }], inverted: [{
                type: core.HostBinding,
                args: ["class.inverted"]
            }, {
                type: core.Input
            }] }); })();

    var _c0$6 = ["container"];
    var _c1$3 = ["templateSibling"];
    function SuiPopup_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 7);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r158 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r158.config.header);
    } }
    function SuiPopup_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, SuiPopup_ng_container_2_div_1_Template, 2, 1, "div", 5);
        core["ɵɵelementStart"](2, "div", 6);
        core["ɵɵtext"](3);
        core["ɵɵelementEnd"]();
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r155 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r155.config.header);
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](ctx_r155.config.text);
    } }
    function SuiPopup_sui_popup_arrow_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "sui-popup-arrow", 8);
    } if (rf & 2) {
        var ctx_r157 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("placement", ctx_r157.config.placement)("inverted", ctx_r157.config.isInverted);
    } }
    var SuiPopup = /** @class */ (function () {
        function SuiPopup(elementRef) {
            this.elementRef = elementRef;
            this.transitionController = new TransitionController(false);
            this._isOpen = false;
            this.onOpen = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.tabindex = 0;
        }
        Object.defineProperty(SuiPopup.prototype, "isOpen", {
            get: function () {
                return this._isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopup.prototype, "anchor", {
            set: function (anchor) {
                this._anchor = anchor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopup.prototype, "direction", {
            // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
            get: function () {
                // We need to set direction attribute before popper init to allow correct positioning
                return this.config.placement.split(" ").shift();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopup.prototype, "alignment", {
            // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
            get: function () {
                return this.config.placement.split(" ").pop();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiPopup.prototype, "dynamicClasses", {
            get: function () {
                var classes = {};
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
            },
            enumerable: true,
            configurable: true
        });
        SuiPopup.prototype.open = function () {
            var _this = this;
            // Only attempt to open if currently closed.
            if (!this.isOpen) {
                // Cancel the closing timer.
                clearTimeout(this.closingTimeout);
                // Create positioning service after a brief delay.
                setTimeout(function () {
                    _this.positioningService = new PositioningService(_this._anchor, _this._container.element, _this.config.placement, ".dynamic.arrow");
                    _this.positioningService.hasArrow = !_this.config.isBasic;
                });
                // Cancel all other transitions, and initiate the opening transition.
                this.transitionController.stopAll();
                this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, exports.TransitionDirection.In, function () {
                    // Focus any element with [autofocus] attribute.
                    var autoFocus = _this.elementRef.nativeElement.querySelector("[autofocus]");
                    if (autoFocus) {
                        // Autofocus after the browser has had time to process other event handlers.
                        setTimeout(function () { return autoFocus.focus(); }, 10);
                        // Try to focus again when the modal has opened so that autofocus works in IE11.
                        setTimeout(function () { return autoFocus.focus(); }, _this.config.transitionDuration);
                    }
                }));
                // Finally, set the popup to be open.
                this._isOpen = true;
                this.onOpen.emit();
            }
        };
        SuiPopup.prototype.toggle = function () {
            if (!this.isOpen) {
                return this.open();
            }
            return this.close();
        };
        SuiPopup.prototype.close = function () {
            var _this = this;
            // Only attempt to close if currently open.
            if (this.isOpen) {
                // Cancel all other transitions, and initiate the closing transition.
                this.transitionController.stopAll();
                this.transitionController.animate(new Transition(this.config.transition, this.config.transitionDuration, exports.TransitionDirection.Out));
                // Cancel the closing timer.
                clearTimeout(this.closingTimeout);
                // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
                this.closingTimeout = window.setTimeout(function () { return _this.onClose.emit(); }, this.config.transitionDuration);
                // Finally, set the popup to be closed.
                this._isOpen = false;
            }
        };
        SuiPopup.prototype.onClick = function (event) {
            // Makes sense here, as the popup shouldn't be attached to any DOM element.
            event.stopPropagation();
        };
        SuiPopup.ɵfac = function SuiPopup_Factory(t) { return new (t || SuiPopup)(core["ɵɵdirectiveInject"](core.ElementRef)); };
        SuiPopup.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiPopup, selectors: [["sui-popup"]], viewQuery: function SuiPopup_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$6, true, core.ViewContainerRef);
                core["ɵɵstaticViewQuery"](_c1$3, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._container = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.templateSibling = _t.first);
            } }, hostVars: 1, hostBindings: function SuiPopup_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiPopup_click_HostBindingHandler($event) { return ctx.onClick($event); });
            } if (rf & 2) {
                core["ɵɵattribute"]("tabindex", ctx.tabindex);
            } }, decls: 6, vars: 5, consts: [[1, "ui", "popup", 3, "ngClass", "suiTransition"], ["container", ""], [4, "ngIf"], ["templateSibling", ""], [3, "placement", "inverted", 4, "ngIf"], ["class", "header", 4, "ngIf"], [1, "content"], [1, "header"], [3, "placement", "inverted"]], template: function SuiPopup_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0, 1);
                core["ɵɵtemplate"](2, SuiPopup_ng_container_2_Template, 4, 2, "ng-container", 2);
                core["ɵɵelement"](3, "div", null, 3);
                core["ɵɵtemplate"](5, SuiPopup_sui_popup_arrow_5_Template, 1, 2, "sui-popup-arrow", 4);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngClass", ctx.dynamicClasses)("suiTransition", ctx.transitionController);
                core["ɵɵattribute"]("direction", ctx.direction);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", !ctx.config.template && (!!ctx.config.header || !!ctx.config.text));
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngIf", !ctx.config.isBasic);
            } }, directives: [common.NgClass, SuiTransition, common.NgIf, SuiPopupArrow], styles: [".ui.popup[_ngcontent-%COMP%] {\n    \n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup[_ngcontent-%COMP%] {\n    \n    pointer-events: none;\n}\n\n.ui.popup[_ngcontent-%COMP%]::before {\n    \n    display: none;\n}\n\n\n.ui.popup[direction=\"top\"][_ngcontent-%COMP%], .ui.popup[direction=\"bottom\"][_ngcontent-%COMP%] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n\n.ui.popup[direction=\"left\"][_ngcontent-%COMP%], .ui.popup[direction=\"right\"][_ngcontent-%COMP%] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}"] });
        return SuiPopup;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiPopup, [{
            type: core.Component,
            args: [{
                    selector: "sui-popup",
                    template: "\n<div class=\"ui popup\"\n     [ngClass]=\"dynamicClasses\"\n     [suiTransition]=\"transitionController\"\n     [attr.direction]=\"direction\"\n     #container>\n\n    <ng-container *ngIf=\"!config.template && (!!config.header || !!config.text)\">\n        <div class=\"header\" *ngIf=\"config.header\">{{ config.header }}</div>\n        <div class=\"content\">{{ config.text }}</div>\n    </ng-container>\n    <div #templateSibling></div>\n\n    <sui-popup-arrow *ngIf=\"!config.isBasic\"\n                     [placement]=\"config.placement\"\n                     [inverted]=\"config.isInverted\"></sui-popup-arrow>\n</div>\n",
                    styles: ["\n.ui.popup {\n    /* Autofit popup to the contents. */\n    right: auto;\n    margin: 0;\n}\n\n.ui.animating.popup {\n    /* When the popup is animating, it may not initially be in the correct position.\n       This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.\n       Setting pointer-events to none while animating fixes this bug. */\n    pointer-events: none;\n}\n\n.ui.popup::before {\n    /* Hide the Semantic UI CSS arrow. */\n    display: none;\n}\n\n/* Offset popup by 0.75em above and below when placed 'vertically'. */\n.ui.popup[direction=\"top\"],\n.ui.popup[direction=\"bottom\"] {\n    margin-top: 0.75em;\n    margin-bottom: 0.75em;\n}\n\n/* Offset popup by 0.75em either side when placed 'horizontally'. */\n.ui.popup[direction=\"left\"],\n.ui.popup[direction=\"right\"] {\n    margin-left: 0.75em;\n    margin-right: 0.75em;\n}\n"]
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { _container: [{
                type: core.ViewChild,
                args: ["container", { read: core.ViewContainerRef, static: true }]
            }], templateSibling: [{
                type: core.ViewChild,
                args: ["templateSibling", { read: core.ViewContainerRef, static: true }]
            }], tabindex: [{
                type: core.HostBinding,
                args: ["attr.tabindex"]
            }], onClick: [{
                type: core.HostListener,
                args: ["click", ["$event"]]
            }] }); })();

    var SuiPopupController = /** @class */ (function () {
        function SuiPopupController(_renderer, _element, _componentFactory, config) {
            var _this = this;
            this._renderer = _renderer;
            this._element = _element;
            this._componentFactory = _componentFactory;
            // Generate a new SuiPopup component and attach it to the application view.
            this._componentRef = this._componentFactory.createComponent(SuiPopup);
            // Configure popup with provided config.
            this.popup.config = config;
            // When the popup is closed (onClose fires on animation complete),
            this.popup.onClose.subscribe(function () { return _this.cleanup(); });
        }
        Object.defineProperty(SuiPopupController.prototype, "popup", {
            // Returns generated popup instance.
            get: function () {
                // Use non-null assertion as we only access this when a popup exists.
                return this._componentRef.instance;
            },
            enumerable: true,
            configurable: true
        });
        SuiPopupController.prototype.configure = function (config) {
            if (config) {
                Object.assign(this.popup.config, config);
            }
        };
        SuiPopupController.prototype.openDelayed = function () {
            var _this = this;
            // Cancel the opening timer.
            clearTimeout(this._openingTimeout);
            // Start the popup opening after the specified delay interval.
            this._openingTimeout = window.setTimeout(function () { return _this.open(); }, this.popup.config.delay);
        };
        SuiPopupController.prototype.open = function () {
            var _this = this;
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
                .listen("document", "click", function (e) {
                return _this.onDocumentClick(e);
            });
            // Start popup open transition.
            this.popup.open();
            // Call lifecyle hook
            var lifecycle = this.popupOnOpen;
            if (lifecycle) {
                lifecycle.call(this);
            }
        };
        SuiPopupController.prototype.close = function () {
            // Cancel the opening timer to stop the popup opening after close has been called.
            clearTimeout(this._openingTimeout);
            if (this._componentRef) {
                // Start popup close transition.
                this.popup.close();
            }
            // Call lifecyle hook
            var lifecycle = this.popupOnClose;
            if (lifecycle) {
                lifecycle.call(this);
            }
        };
        SuiPopupController.prototype.toggleDelayed = function () {
            // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
            if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
                return this.openDelayed();
            }
            // O'wise, close it.
            return this.close();
        };
        SuiPopupController.prototype.toggle = function () {
            // If the popup hasn't been created, or it has but it isn't currently open, open the popup.
            if (!this._componentRef || (this._componentRef && !this.popup.isOpen)) {
                return this.open();
            }
            // O'wise, close it.
            return this.close();
        };
        SuiPopupController.prototype.onMouseEnter = function () {
            if (this.popup.config.trigger === PopupTrigger.Hover) {
                this.openDelayed();
            }
        };
        SuiPopupController.prototype.onMouseLeave = function () {
            if (this.popup.config.trigger === PopupTrigger.Hover) {
                this.close();
            }
        };
        SuiPopupController.prototype.onClick = function () {
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
        };
        SuiPopupController.prototype.onDocumentClick = function (e) {
            // If the popup trigger is outside click,
            if (this._componentRef && this.popup.config.trigger === PopupTrigger.OutsideClick) {
                var target = e.target;
                // Close the popup if the click is outside of the popup element.
                if (!this._element.nativeElement.contains(target)) {
                    this.close();
                }
            }
        };
        SuiPopupController.prototype.onFocusIn = function () {
            if (this.popup.config.trigger === PopupTrigger.Focus) {
                this.openDelayed();
            }
        };
        SuiPopupController.prototype.onFocusOut = function (e) {
            if (!this._element.nativeElement.contains(e.relatedTarget) &&
                !this.popup.elementRef.nativeElement.contains(e.relatedTarget) &&
                this.popup.config.trigger === PopupTrigger.Focus) {
                this.close();
            }
        };
        SuiPopupController.prototype.cleanup = function () {
            clearTimeout(this._openingTimeout);
            if (this._componentRef.instance && this._componentRef.instance.positioningService) {
                this._componentRef.instance.positioningService.destroy();
            }
            this._componentFactory.detachFromApplication(this._componentRef);
            if (this._documentListener) {
                this._documentListener();
            }
        };
        SuiPopupController.prototype.ngOnDestroy = function () {
            this.cleanup();
        };
        SuiPopupController.ɵfac = function SuiPopupController_Factory(t) { return new (t || SuiPopupController)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](SuiComponentFactory), core["ɵɵdirectiveInject"](PopupConfig)); };
        SuiPopupController.ɵdir = core["ɵɵdefineDirective"]({ type: SuiPopupController, hostBindings: function SuiPopupController_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("mouseenter", function SuiPopupController_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function SuiPopupController_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); })("click", function SuiPopupController_click_HostBindingHandler($event) { return ctx.onClick(); })("focusin", function SuiPopupController_focusin_HostBindingHandler($event) { return ctx.onFocusIn(); })("focusout", function SuiPopupController_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); });
            } } });
        return SuiPopupController;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiPopupController, [{
            type: core.Directive
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: SuiComponentFactory }, { type: PopupConfig }]; }, { onMouseEnter: [{
                type: core.HostListener,
                args: ["mouseenter"]
            }], onMouseLeave: [{
                type: core.HostListener,
                args: ["mouseleave"]
            }], onClick: [{
                type: core.HostListener,
                args: ["click"]
            }], onFocusIn: [{
                type: core.HostListener,
                args: ["focusin"]
            }], onFocusOut: [{
                type: core.HostListener,
                args: ["focusout", ["$event"]]
            }] }); })();

    var SuiPopupComponentController = /** @class */ (function (_super) {
        __extends(SuiPopupComponentController, _super);
        function SuiPopupComponentController(renderer, element, componentFactory, _component, config) {
            var _this = _super.call(this, renderer, element, componentFactory, config) || this;
            _this._component = _component;
            return _this;
        }
        Object.defineProperty(SuiPopupComponentController.prototype, "componentInstance", {
            get: function () {
                if (this._contentComponentRef) {
                    return this._contentComponentRef.instance;
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiPopupComponentController.prototype.open = function () {
            if (!this._contentComponentRef) {
                this._contentComponentRef = this._componentFactory.createComponent(this._component);
                this._componentFactory.attachToView(this._contentComponentRef, this.popup.templateSibling);
            }
            _super.prototype.open.call(this);
        };
        SuiPopupComponentController.prototype.cleanup = function () {
            _super.prototype.cleanup.call(this);
            if (this._contentComponentRef) {
                this._contentComponentRef.destroy();
                this._contentComponentRef = undefined;
            }
        };
        return SuiPopupComponentController;
    }(SuiPopupController));

    var templateRef = core.TemplateRef;
    var TemplatePopupConfig = /** @class */ (function (_super) {
        __extends(TemplatePopupConfig, _super);
        function TemplatePopupConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return TemplatePopupConfig;
    }(PopupConfig));
    var SuiPopupTemplateController = /** @class */ (function (_super) {
        __extends(SuiPopupTemplateController, _super);
        function SuiPopupTemplateController(renderer, element, componentFactory, config) {
            return _super.call(this, renderer, element, componentFactory, config) || this;
        }
        SuiPopupTemplateController.prototype.configure = function (config) {
            _super.prototype.configure.call(this, config);
            if (config) {
                this.template = config.template;
                this.context = config.context;
            }
        };
        SuiPopupTemplateController.prototype.open = function () {
            // If there is a template, inject it into the view.
            if (this.template) {
                this.popup.templateSibling.clear();
                this._componentFactory.createView(this.popup.templateSibling, this.template, {
                    $implicit: this.popup,
                    context: this.context
                });
            }
            _super.prototype.open.call(this);
        };
        return SuiPopupTemplateController;
    }(SuiPopupController));

    var SuiPopupConfig = /** @class */ (function (_super) {
        __extends(SuiPopupConfig, _super);
        function SuiPopupConfig() {
            // We use an empty constructor to ensure Angular DI works correctly.
            return _super.call(this) || this;
        }
        SuiPopupConfig.ɵfac = function SuiPopupConfig_Factory(t) { return new (t || SuiPopupConfig)(); };
        SuiPopupConfig.ɵprov = core["ɵɵdefineInjectable"]({ token: SuiPopupConfig, factory: SuiPopupConfig.ɵfac });
        return SuiPopupConfig;
    }(PopupConfig));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiPopupConfig, [{
            type: core.Injectable
        }], function () { return []; }, null); })();

    var templateRef$1 = core.TemplateRef;
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
        SuiPopupDirective.ɵfac = function SuiPopupDirective_Factory(t) { return new (t || SuiPopupDirective)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](SuiComponentFactory), core["ɵɵdirectiveInject"](SuiPopupConfig)); };
        SuiPopupDirective.ɵdir = core["ɵɵdefineDirective"]({ type: SuiPopupDirective, selectors: [["", "suiPopup", ""]], inputs: { popupHeader: "popupHeader", popupText: "popupText", popupInverted: "popupInverted", popupBasic: "popupBasic", popupInline: "popupInline", popupFlowing: "popupFlowing", popupTransition: "popupTransition", popupTransitionDuration: "popupTransitionDuration", popupPlacement: "popupPlacement", popupWidth: "popupWidth", popupSize: "popupSize", popupDelay: "popupDelay", popupTrigger: "popupTrigger", popupTemplate: "popupTemplate", popupTemplateContext: "popupTemplateContext", popupConfig: "popupConfig" }, exportAs: ["suiPopup"], features: [core["ɵɵInheritDefinitionFeature"]] });
        return SuiPopupDirective;
    }(SuiPopupTemplateController));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiPopupDirective, [{
            type: core.Directive,
            args: [{
                    selector: "[suiPopup]",
                    exportAs: "suiPopup"
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: SuiComponentFactory }, { type: SuiPopupConfig }]; }, { popupHeader: [{
                type: core.Input
            }], popupText: [{
                type: core.Input
            }], popupInverted: [{
                type: core.Input
            }], popupBasic: [{
                type: core.Input
            }], popupInline: [{
                type: core.Input
            }], popupFlowing: [{
                type: core.Input
            }], popupTransition: [{
                type: core.Input
            }], popupTransitionDuration: [{
                type: core.Input
            }], popupPlacement: [{
                type: core.Input
            }], popupWidth: [{
                type: core.Input
            }], popupSize: [{
                type: core.Input
            }], popupDelay: [{
                type: core.Input
            }], popupTrigger: [{
                type: core.Input
            }], popupTemplate: [{
                type: core.Input
            }], popupTemplateContext: [{
                type: core.Input
            }], popupConfig: [{
                type: core.Input
            }] }); })();

    var SuiPopupModule = /** @class */ (function () {
        function SuiPopupModule() {
        }
        SuiPopupModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiPopupModule });
        SuiPopupModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiPopupModule_Factory(t) { return new (t || SuiPopupModule)(); }, providers: [
                SuiPopupConfig
            ], imports: [[
                    common.CommonModule,
                    SuiTransitionModule,
                    SuiUtilityModule
                ]] });
        return SuiPopupModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiPopupModule, { declarations: [SuiPopupDirective,
            SuiPopupArrow,
            SuiPopup], imports: [common.CommonModule,
            SuiTransitionModule,
            SuiUtilityModule], exports: [SuiPopupDirective,
            SuiPopup] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiPopupModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
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

    var SuiDatepickerDirective = /** @class */ (function (_super) {
        __extends(SuiDatepickerDirective, _super);
        function SuiDatepickerDirective(renderer, element, componentFactory, localizationService) {
            var _this = _super.call(this, renderer, element, componentFactory, SuiDatepicker, new PopupConfig({
                trigger: PopupTrigger.Focus,
                placement: PositioningPlacement.BottomLeft,
                transition: "scale",
                transitionDuration: 200
            })) || this;
            _this.localizationService = localizationService;
            // This ensures the popup is drawn correctly (i.e. no border).
            _this._renderer.addClass(_this.popup.elementRef.nativeElement, "ui");
            _this._renderer.addClass(_this.popup.elementRef.nativeElement, "calendar");
            _this.onLocaleUpdate();
            _this.localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
            _this.onSelectedDateChange = new core.EventEmitter();
            _this.onValidatorChange = new core.EventEmitter();
            _this.mode = DatepickerMode.Datetime;
            return _this;
        }
        Object.defineProperty(SuiDatepickerDirective.prototype, "selectedDate", {
            get: function () {
                return this._selectedDate;
            },
            set: function (date) {
                this._selectedDate = date;
                this.onSelectedDateChange.emit(date);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "mode", {
            get: function () {
                return this._mode;
            },
            set: function (mode) {
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "localeValues", {
            get: function () {
                return this.localizationService.override(this._localeValues, this.localeOverrides);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "placement", {
            set: function (placement) {
                this.popup.config.placement = placement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "transition", {
            set: function (transition) {
                this.popup.config.transition = transition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerDirective.prototype, "transitionDuration", {
            set: function (duration) {
                this.popup.config.transitionDuration = duration;
            },
            enumerable: true,
            configurable: true
        });
        SuiDatepickerDirective.prototype.popupOnOpen = function () {
            var _this = this;
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
                this.componentInstance.service.onDateChange.subscribe(function (d) {
                    _this.selectedDate = d;
                    _this.close();
                });
            }
        };
        SuiDatepickerDirective.prototype.ngOnChanges = function (_a) {
            var maxDate = _a.maxDate, minDate = _a.minDate, mode = _a.mode;
            if (maxDate || minDate || mode) {
                this.onValidatorChange.emit();
            }
        };
        SuiDatepickerDirective.prototype.onLocaleUpdate = function () {
            this._localeValues = this.localizationService.get().datepicker;
        };
        SuiDatepickerDirective.prototype.validate = function (c) {
            var value = c.value;
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
        };
        SuiDatepickerDirective.prototype.writeValue = function (value) {
            this.selectedDate = value;
            if (this.componentInstance) {
                this.componentInstance.service.selectedDate = value;
            }
        };
        SuiDatepickerDirective.prototype.onKeyDown = function (e) {
            if (e.keyCode === KeyCode.Escape) {
                this.close();
            }
        };
        SuiDatepickerDirective.ɵfac = function SuiDatepickerDirective_Factory(t) { return new (t || SuiDatepickerDirective)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](SuiComponentFactory), core["ɵɵdirectiveInject"](SuiLocalizationService)); };
        SuiDatepickerDirective.ɵdir = core["ɵɵdefineDirective"]({ type: SuiDatepickerDirective, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("keydown", function SuiDatepickerDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
            } }, inputs: { mode: ["pickerMode", "mode"], initialDate: ["pickerInitialDate", "initialDate"], maxDate: ["pickerMaxDate", "maxDate"], minDate: ["pickerMinDate", "minDate"], firstDayOfWeek: ["pickerFirstDayOfWeek", "firstDayOfWeek"], localeOverrides: ["pickerLocaleOverrides", "localeOverrides"], placement: ["pickerPlacement", "placement"], transition: ["pickerTransition", "transition"], transitionDuration: ["pickerTransitionDuration", "transitionDuration"] }, outputs: { onSelectedDateChange: "pickerSelectedDateChange", onValidatorChange: "pickerValidatorChange" }, features: [core["ɵɵProvidersFeature"]([customValidatorFactory(SuiDatepickerDirective)]), core["ɵɵInheritDefinitionFeature"], core["ɵɵNgOnChangesFeature"]()] });
        return SuiDatepickerDirective;
    }(SuiPopupComponentController));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDatepickerDirective, [{
            type: core.Directive,
            args: [{
                    selector: "[suiDatepicker]",
                    providers: [customValidatorFactory(SuiDatepickerDirective)]
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: SuiComponentFactory }, { type: SuiLocalizationService }]; }, { mode: [{
                type: core.Input,
                args: ["pickerMode"]
            }], initialDate: [{
                type: core.Input,
                args: ["pickerInitialDate"]
            }], maxDate: [{
                type: core.Input,
                args: ["pickerMaxDate"]
            }], minDate: [{
                type: core.Input,
                args: ["pickerMinDate"]
            }], firstDayOfWeek: [{
                type: core.Input,
                args: ["pickerFirstDayOfWeek"]
            }], localeOverrides: [{
                type: core.Input,
                args: ["pickerLocaleOverrides"]
            }], placement: [{
                type: core.Input,
                args: ["pickerPlacement"]
            }], transition: [{
                type: core.Input,
                args: ["pickerTransition"]
            }], transitionDuration: [{
                type: core.Input,
                args: ["pickerTransitionDuration"]
            }], onSelectedDateChange: [{
                type: core.Output,
                args: ["pickerSelectedDateChange"]
            }], onValidatorChange: [{
                type: core.Output,
                args: ["pickerValidatorChange"]
            }], onKeyDown: [{
                type: core.HostListener,
                args: ["keydown", ["$event"]]
            }] }); })();
    var SuiDatepickerDirectiveValueAccessor = /** @class */ (function (_super) {
        __extends(SuiDatepickerDirectiveValueAccessor, _super);
        function SuiDatepickerDirectiveValueAccessor(host) {
            var _this = _super.call(this, host) || this;
            _this.host = host;
            return _this;
        }
        SuiDatepickerDirectiveValueAccessor.ɵfac = function SuiDatepickerDirectiveValueAccessor_Factory(t) { return new (t || SuiDatepickerDirectiveValueAccessor)(core["ɵɵdirectiveInject"](SuiDatepickerDirective)); };
        SuiDatepickerDirectiveValueAccessor.ɵdir = core["ɵɵdefineDirective"]({ type: SuiDatepickerDirectiveValueAccessor, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirectiveValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("pickerSelectedDateChange", function SuiDatepickerDirectiveValueAccessor_pickerSelectedDateChange_HostBindingHandler($event) { return ctx.onChange($event); });
            } }, features: [core["ɵɵProvidersFeature"]([customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]), core["ɵɵInheritDefinitionFeature"]] });
        return SuiDatepickerDirectiveValueAccessor;
    }(CustomValueAccessor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDatepickerDirectiveValueAccessor, [{
            type: core.Directive,
            args: [{
                    selector: "[suiDatepicker]",
                    host: { "(pickerSelectedDateChange)": "onChange($event)" },
                    providers: [customValueAccessorFactory(SuiDatepickerDirectiveValueAccessor)]
                }]
        }], function () { return [{ type: SuiDatepickerDirective }]; }, null); })();
    var SuiDatepickerDirectiveValidator = /** @class */ (function (_super) {
        __extends(SuiDatepickerDirectiveValidator, _super);
        function SuiDatepickerDirectiveValidator(host) {
            var _this = _super.call(this, host) || this;
            _this.host = host;
            return _this;
        }
        SuiDatepickerDirectiveValidator.ɵfac = function SuiDatepickerDirectiveValidator_Factory(t) { return new (t || SuiDatepickerDirectiveValidator)(core["ɵɵdirectiveInject"](SuiDatepickerDirective)); };
        SuiDatepickerDirectiveValidator.ɵdir = core["ɵɵdefineDirective"]({ type: SuiDatepickerDirectiveValidator, selectors: [["", "suiDatepicker", ""]], hostBindings: function SuiDatepickerDirectiveValidator_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("pickerValidatorChange", function SuiDatepickerDirectiveValidator_pickerValidatorChange_HostBindingHandler($event) { return ctx.onValidatorChange(); });
            } }, features: [core["ɵɵProvidersFeature"]([customValidatorFactory(SuiDatepickerDirectiveValidator)]), core["ɵɵInheritDefinitionFeature"]] });
        return SuiDatepickerDirectiveValidator;
    }(CustomValidator));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDatepickerDirectiveValidator, [{
            type: core.Directive,
            args: [{
                    selector: "[suiDatepicker]",
                    host: { "(pickerValidatorChange)": "onValidatorChange()" },
                    providers: [customValidatorFactory(SuiDatepickerDirectiveValidator)]
                }]
        }], function () { return [{ type: SuiDatepickerDirective }]; }, null); })();

    var isWebView = isUAWebView__default__default || isUAWebView__default;
    var SuiDatepickerInputDirective = /** @class */ (function () {
        function SuiDatepickerInputDirective(datepicker, valueAccessor, _renderer, _element, localizationService) {
            var _this = this;
            this.datepicker = datepicker;
            this.valueAccessor = valueAccessor;
            this._renderer = _renderer;
            this._element = _element;
            this.useNativeOnMobile = true;
            this.fallbackActive = false;
            // Whenever the datepicker value updates, update the input text alongside it.
            this.datepicker.onSelectedDateChange.subscribe(function () {
                return _this.updateValue(_this.selectedDateString);
            });
            localizationService.onLanguageUpdate.subscribe(function () {
                return _this.updateValue(_this.selectedDateString);
            });
        }
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "useNativeOnMobile", {
            get: function () {
                return this._useNativeOnMobile;
            },
            set: function (fallback) {
                this._useNativeOnMobile = fallback;
                var isOnMobile = bowser.mobile || bowser.tablet || isWebView(navigator.userAgent);
                this.fallbackActive = this.useNativeOnMobile && isOnMobile;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "fallbackActive", {
            get: function () {
                return this._fallbackActive;
            },
            set: function (active) {
                this._fallbackActive = active;
                // If the fallback is active, then the trigger must be manual so the datepicker never opens.
                this.datepicker.popup.config.trigger = this.fallbackActive ? PopupTrigger.Manual : PopupTrigger.Focus;
                // Update the input value (this will insert the `T` as required).
                this.updateValue(this.selectedDateString);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "parser", {
            get: function () {
                if (this.fallbackActive) {
                    return new InternalDateParser(this.datepicker.mode, this.datepicker.localeValues);
                }
                return new DateParser(this.datepicker.localeValues.formats[this.datepicker.mode], this.datepicker.localeValues);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "selectedDateString", {
            get: function () {
                if (this.datepicker.selectedDate) {
                    return this.parser.format(this.datepicker.selectedDate);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "type", {
            get: function () {
                if (this.fallbackActive) {
                    return this.datepicker.config.fallback;
                }
                return "text";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "max", {
            get: function () {
                if (this.fallbackActive && this.datepicker.maxDate) {
                    // Since HTML doesn't use a date object max is somewhat tricky.
                    // Our Datepicker will always choose the 1st date on the provided precision,
                    // meaning anything below the maxDate will work, hence endOf.
                    var max = DateUtil.endOf(this.datepicker.config.precision, DateUtil.clone(this.datepicker.maxDate));
                    return this.parser.format(max);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDatepickerInputDirective.prototype, "min", {
            get: function () {
                if (this.fallbackActive && this.datepicker.minDate) {
                    // Since HTML doesn't use a date object min is somewhat tricky.
                    // We use 1 minute before the next date at the configured precision since
                    // our Datepicker picks the first available date at that precision.
                    var min = DateUtil.clone(this.datepicker.minDate);
                    return this.parser.format(min);
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiDatepickerInputDirective.prototype.updateValue = function (value) {
            // Only update the current value if it is different to what it's being updated to.
            // This is so that the editing position isn't changed when manually typing the date.
            if (!this._lastUpdateTyped) {
                this._renderer.setProperty(this._element.nativeElement, "value", value || "");
            }
            this._lastUpdateTyped = false;
        };
        SuiDatepickerInputDirective.prototype.typeValue = function (value) {
            this._lastUpdateTyped = true;
            this._currentInputValue = value;
            if (!value) {
                // Delete the selected date if no date was entered manually.
                return this.datepicker.writeValue(undefined);
            }
            var parsed = this.parser.parse(value, this.datepicker.selectedDate);
            if (!isNaN(parsed.getTime()) && value === this.parser.format(parsed)) {
                return this.datepicker.writeValue(parsed);
            }
            return this.datepicker.writeValue(undefined);
        };
        SuiDatepickerInputDirective.prototype.onFocusOut = function () {
            this.valueAccessor.onTouched();
        };
        SuiDatepickerInputDirective.ɵfac = function SuiDatepickerInputDirective_Factory(t) { return new (t || SuiDatepickerInputDirective)(core["ɵɵdirectiveInject"](SuiDatepickerDirective, 1), core["ɵɵdirectiveInject"](SuiDatepickerDirectiveValueAccessor, 1), core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](SuiLocalizationService)); };
        SuiDatepickerInputDirective.ɵdir = core["ɵɵdefineDirective"]({ type: SuiDatepickerInputDirective, selectors: [["input", "suiDatepicker", ""]], hostVars: 3, hostBindings: function SuiDatepickerInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("input", function SuiDatepickerInputDirective_input_HostBindingHandler($event) { return ctx.typeValue($event.target.value); })("focusout", function SuiDatepickerInputDirective_focusout_HostBindingHandler($event) { return ctx.onFocusOut(); });
            } if (rf & 2) {
                core["ɵɵattribute"]("type", ctx.type)("max", ctx.max)("min", ctx.min);
            } }, inputs: { useNativeOnMobile: ["pickerUseNativeOnMobile", "useNativeOnMobile"] } });
        return SuiDatepickerInputDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDatepickerInputDirective, [{
            type: core.Directive,
            args: [{
                    selector: "input[suiDatepicker]"
                }]
        }], function () { return [{ type: SuiDatepickerDirective, decorators: [{
                    type: core.Host
                }] }, { type: SuiDatepickerDirectiveValueAccessor, decorators: [{
                    type: core.Host
                }] }, { type: core.Renderer2 }, { type: core.ElementRef }, { type: SuiLocalizationService }]; }, { useNativeOnMobile: [{
                type: core.Input,
                args: ["pickerUseNativeOnMobile"]
            }], type: [{
                type: core.HostBinding,
                args: ["attr.type"]
            }], max: [{
                type: core.HostBinding,
                args: ["attr.max"]
            }], min: [{
                type: core.HostBinding,
                args: ["attr.min"]
            }], typeValue: [{
                type: core.HostListener,
                args: ["input", ["$event.target.value"]]
            }], onFocusOut: [{
                type: core.HostListener,
                args: ["focusout"]
            }] }); })();

    function SuiCalendarDateView_th_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "th");
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var day_r163 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](day_r163);
    } }
    function SuiCalendarDateView_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
        var _r168 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 5);
        core["ɵɵlistener"]("click", function SuiCalendarDateView_tr_9_td_1_Template_td_click_0_listener($event) { core["ɵɵrestoreView"](_r168); var item_r166 = ctx.$implicit; var ctx_r167 = core["ɵɵnextContext"](2); return ctx_r167.setDate(item_r166); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r166 = ctx.$implicit;
        core["ɵɵproperty"]("calendarItem", item_r166);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"]("", item_r166.humanReadable, " ");
    } }
    function SuiCalendarDateView_tr_9_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tr");
        core["ɵɵtemplate"](1, SuiCalendarDateView_tr_9_td_1_Template, 2, 2, "td", 4);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var group_r164 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", group_r164);
    } }
    var CalendarRangeDateService = /** @class */ (function (_super) {
        __extends(CalendarRangeDateService, _super);
        function CalendarRangeDateService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CalendarRangeDateService.prototype.calcStart = function (start) {
            var monthStart = DateUtil.startOf(DatePrecision.Month, DateUtil.clone(start));
            monthStart.setDate((1 - monthStart.getDay() + this.service.firstDayOfWeek - 7) % 7);
            return monthStart;
        };
        CalendarRangeDateService.prototype.configureItem = function (item, baseDate) {
            item.humanReadable = item.date.getDate().toString();
            item.isOutsideRange = item.date.getMonth() !== baseDate.getMonth();
            item.isSelectable = item.isDisabled;
        };
        return CalendarRangeDateService;
    }(CalendarRangeService));
    var SuiCalendarDateView = /** @class */ (function (_super) {
        __extends(SuiCalendarDateView, _super);
        function SuiCalendarDateView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Date, new CalendarRangeDateService(DatePrecision.Month, 6, 7)) || this;
        }
        Object.defineProperty(SuiCalendarDateView.prototype, "days", {
            get: function () {
                var _this = this;
                var days = this.service.localeValues.weekdaysNarrow;
                return days.map(function (d, i) { return days[(i + _this.service.firstDayOfWeek) % days.length]; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiCalendarDateView.prototype, "date", {
            get: function () {
                return new DateParser(this.service.localeValues.formats.month, this.service.localeValues).format(this.currentDate);
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarDateView.ɵfac = function SuiCalendarDateView_Factory(t) { return new (t || SuiCalendarDateView)(core["ɵɵdirectiveInject"](core.Renderer2)); };
        SuiCalendarDateView.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiCalendarDateView, selectors: [["sui-calendar-date-view"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "seven", "column", "day"], ["colspan", "7"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarDateView_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "table", 0);
                core["ɵɵelementStart"](1, "thead");
                core["ɵɵelementStart"](2, "tr");
                core["ɵɵelementStart"](3, "th", 1);
                core["ɵɵelementStart"](4, "sui-calendar-view-title", 2);
                core["ɵɵlistener"]("zoomOut", function SuiCalendarDateView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
                core["ɵɵtext"](5);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](6, "tr");
                core["ɵɵtemplate"](7, SuiCalendarDateView_th_7_Template, 2, 1, "th", 3);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](8, "tbody");
                core["ɵɵtemplate"](9, SuiCalendarDateView_tr_9_Template, 2, 1, "tr", 3);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](4);
                core["ɵɵproperty"]("ranges", ctx.ranges);
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"](" ", ctx.date, " ");
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngForOf", ctx.days);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngForOf", ctx.ranges.current.groupedItems);
            } }, directives: [SuiCalendarViewTitle, common.NgForOf, SuiCalendarItem], encapsulation: 2 });
        return SuiCalendarDateView;
    }(CalendarView));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCalendarDateView, [{
            type: core.Component,
            args: [{
                    selector: "sui-calendar-date-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table seven column day\">\n<thead>\n    <tr>\n        <th colspan=\"7\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n    <tr>\n        <th *ngFor=\"let day of days\">{{ day }}</th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                }]
        }], function () { return [{ type: core.Renderer2 }]; }, null); })();

    function SuiCalendarHourView_thead_1_Template(rf, ctx) { if (rf & 1) {
        var _r172 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "thead");
        core["ɵɵelementStart"](1, "tr");
        core["ɵɵelementStart"](2, "th", 3);
        core["ɵɵelementStart"](3, "sui-calendar-view-title", 4);
        core["ɵɵlistener"]("zoomOut", function SuiCalendarHourView_thead_1_Template_sui_calendar_view_title_zoomOut_3_listener($event) { core["ɵɵrestoreView"](_r172); var ctx_r171 = core["ɵɵnextContext"](); return ctx_r171.zoomOut(); });
        core["ɵɵtext"](4);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r169 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](3);
        core["ɵɵproperty"]("ranges", ctx_r169.ranges);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", ctx_r169.date, " ");
    } }
    function SuiCalendarHourView_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
        var _r177 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 6);
        core["ɵɵlistener"]("click", function SuiCalendarHourView_tr_3_td_1_Template_td_click_0_listener($event) { core["ɵɵrestoreView"](_r177); var item_r175 = ctx.$implicit; var ctx_r176 = core["ɵɵnextContext"](2); return ctx_r176.setDate(item_r175); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r175 = ctx.$implicit;
        core["ɵɵproperty"]("calendarItem", item_r175);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"]("", item_r175.humanReadable, " ");
    } }
    function SuiCalendarHourView_tr_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tr");
        core["ɵɵtemplate"](1, SuiCalendarHourView_tr_3_td_1_Template, 2, 2, "td", 5);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var group_r173 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", group_r173);
    } }
    var CalendarRangeHourService = /** @class */ (function (_super) {
        __extends(CalendarRangeHourService, _super);
        function CalendarRangeHourService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CalendarRangeHourService.prototype.configureItem = function (item, baseDate) {
            // Set minutes and seconds to 0
            var customFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
            item.humanReadable = new DateParser(customFormat, this.service.localeValues).format(item.date);
            item.isOutsideRange = false;
        };
        return CalendarRangeHourService;
    }(CalendarRangeService));
    var SuiCalendarHourView = /** @class */ (function (_super) {
        __extends(SuiCalendarHourView, _super);
        function SuiCalendarHourView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Hour, new CalendarRangeHourService(DatePrecision.Date, 6, 4)) || this;
        }
        Object.defineProperty(SuiCalendarHourView.prototype, "date", {
            get: function () {
                return new DateParser(this.service.localeValues.formats.date, this.service.localeValues).format(this.currentDate);
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarHourView.ɵfac = function SuiCalendarHourView_Factory(t) { return new (t || SuiCalendarHourView)(core["ɵɵdirectiveInject"](core.Renderer2)); };
        SuiCalendarHourView.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiCalendarHourView, selectors: [["sui-calendar-hour-view"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "four", "column", "hour"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "ranges", "zoomOut"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarHourView_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "table", 0);
                core["ɵɵtemplate"](1, SuiCalendarHourView_thead_1_Template, 5, 2, "thead", 1);
                core["ɵɵelementStart"](2, "tbody");
                core["ɵɵtemplate"](3, SuiCalendarHourView_tr_3_Template, 2, 1, "tr", 2);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.service.config.mode != 1);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngForOf", ctx.ranges.current.groupedItems);
            } }, directives: [common.NgIf, common.NgForOf, SuiCalendarViewTitle, SuiCalendarItem], encapsulation: 2 });
        return SuiCalendarHourView;
    }(CalendarView));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCalendarHourView, [{
            type: core.Component,
            args: [{
                    selector: "sui-calendar-hour-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table four column hour\">\n<thead *ngIf=\"service.config.mode != 1\">\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                }]
        }], function () { return [{ type: core.Renderer2 }]; }, null); })();

    function SuiCalendarMinuteView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
        var _r183 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 5);
        core["ɵɵlistener"]("click", function SuiCalendarMinuteView_tr_7_td_1_Template_td_click_0_listener($event) { core["ɵɵrestoreView"](_r183); var item_r181 = ctx.$implicit; var ctx_r182 = core["ɵɵnextContext"](2); return ctx_r182.setDate(item_r181); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r181 = ctx.$implicit;
        core["ɵɵproperty"]("calendarItem", item_r181);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"]("", item_r181.humanReadable, " ");
    } }
    function SuiCalendarMinuteView_tr_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tr");
        core["ɵɵtemplate"](1, SuiCalendarMinuteView_tr_7_td_1_Template, 2, 2, "td", 4);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var group_r179 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", group_r179);
    } }
    var CalendarRangeMinuteService = /** @class */ (function (_super) {
        __extends(CalendarRangeMinuteService, _super);
        function CalendarRangeMinuteService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CalendarRangeMinuteService.prototype.calcStart = function (start) {
            return DateUtil.startOf(DatePrecision.Hour, DateUtil.clone(start), true);
        };
        CalendarRangeMinuteService.prototype.calcDates = function (start) {
            return Util.Array
                .range(this.length)
                .map(function (i) { return DateUtil.add(DatePrecision.Minute, DateUtil.clone(start), i * 5); });
        };
        CalendarRangeMinuteService.prototype.configureItem = function (item, baseDate) {
            item.humanReadable = new DateParser(this.service.localeValues.formats.time, this.service.localeValues).format(item.date);
            item.isOutsideRange = false;
        };
        return CalendarRangeMinuteService;
    }(CalendarRangeService));
    var SuiCalendarMinuteView = /** @class */ (function (_super) {
        __extends(SuiCalendarMinuteView, _super);
        function SuiCalendarMinuteView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Minute, new CalendarRangeMinuteService(DatePrecision.Hour, 4, 3)) || this;
        }
        Object.defineProperty(SuiCalendarMinuteView.prototype, "date", {
            get: function () {
                if (this.service.config.mode !== CalendarMode.TimeOnly) {
                    // Set minutes and seconds to 0
                    var dateTimeFormat = this.service.localeValues.formats.datetime.replace(/[ms]/g, "0");
                    return new DateParser(dateTimeFormat, this.service.localeValues).format(this.currentDate);
                }
                else {
                    // Set minutes and seconds to 0
                    var timeFormat = this.service.localeValues.formats.time.replace(/[ms]/g, "0");
                    return new DateParser(timeFormat, this.service.localeValues).format(this.currentDate);
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarMinuteView.ɵfac = function SuiCalendarMinuteView_Factory(t) { return new (t || SuiCalendarMinuteView)(core["ɵɵdirectiveInject"](core.Renderer2)); };
        SuiCalendarMinuteView.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiCalendarMinuteView, selectors: [["sui-calendar-minute-view"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "minute"], ["colspan", "4"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarMinuteView_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "table", 0);
                core["ɵɵelementStart"](1, "thead");
                core["ɵɵelementStart"](2, "tr");
                core["ɵɵelementStart"](3, "th", 1);
                core["ɵɵelementStart"](4, "sui-calendar-view-title", 2);
                core["ɵɵlistener"]("zoomOut", function SuiCalendarMinuteView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
                core["ɵɵtext"](5);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](6, "tbody");
                core["ɵɵtemplate"](7, SuiCalendarMinuteView_tr_7_Template, 2, 1, "tr", 3);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](4);
                core["ɵɵproperty"]("ranges", ctx.ranges);
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"](" ", ctx.date, " ");
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngForOf", ctx.ranges.current.groupedItems);
            } }, directives: [SuiCalendarViewTitle, common.NgForOf, SuiCalendarItem], encapsulation: 2 });
        return SuiCalendarMinuteView;
    }(CalendarView));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCalendarMinuteView, [{
            type: core.Component,
            args: [{
                    selector: "sui-calendar-minute-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table three column minute\">\n<thead>\n    <tr>\n        <th colspan=\"4\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ date }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                }]
        }], function () { return [{ type: core.Renderer2 }]; }, null); })();

    function SuiCalendarMonthView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
        var _r189 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 5);
        core["ɵɵlistener"]("click", function SuiCalendarMonthView_tr_7_td_1_Template_td_click_0_listener($event) { core["ɵɵrestoreView"](_r189); var item_r187 = ctx.$implicit; var ctx_r188 = core["ɵɵnextContext"](2); return ctx_r188.setDate(item_r187); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r187 = ctx.$implicit;
        core["ɵɵproperty"]("calendarItem", item_r187);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"]("", item_r187.humanReadable, " ");
    } }
    function SuiCalendarMonthView_tr_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tr");
        core["ɵɵtemplate"](1, SuiCalendarMonthView_tr_7_td_1_Template, 2, 2, "td", 4);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var group_r185 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", group_r185);
    } }
    var CalendarRangeMonthService = /** @class */ (function (_super) {
        __extends(CalendarRangeMonthService, _super);
        function CalendarRangeMonthService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CalendarRangeMonthService.prototype.configureItem = function (item, baseDate) {
            item.humanReadable = this.service.localeValues.monthsShort[item.date.getMonth()];
            item.isOutsideRange = false;
        };
        return CalendarRangeMonthService;
    }(CalendarRangeService));
    var SuiCalendarMonthView = /** @class */ (function (_super) {
        __extends(SuiCalendarMonthView, _super);
        function SuiCalendarMonthView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Month, new CalendarRangeMonthService(DatePrecision.Year, 4, 3)) || this;
        }
        Object.defineProperty(SuiCalendarMonthView.prototype, "year", {
            get: function () {
                return new DateParser(this.service.localeValues.formats.year, this.service.localeValues).format(this.currentDate);
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarMonthView.ɵfac = function SuiCalendarMonthView_Factory(t) { return new (t || SuiCalendarMonthView)(core["ɵɵdirectiveInject"](core.Renderer2)); };
        SuiCalendarMonthView.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiCalendarMonthView, selectors: [["sui-calendar-month-view"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 3, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "month"], ["colspan", "3"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarMonthView_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "table", 0);
                core["ɵɵelementStart"](1, "thead");
                core["ɵɵelementStart"](2, "tr");
                core["ɵɵelementStart"](3, "th", 1);
                core["ɵɵelementStart"](4, "sui-calendar-view-title", 2);
                core["ɵɵlistener"]("zoomOut", function SuiCalendarMonthView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
                core["ɵɵtext"](5);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](6, "tbody");
                core["ɵɵtemplate"](7, SuiCalendarMonthView_tr_7_Template, 2, 1, "tr", 3);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](4);
                core["ɵɵproperty"]("ranges", ctx.ranges);
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"](" ", ctx.year, " ");
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngForOf", ctx.ranges.current.groupedItems);
            } }, directives: [SuiCalendarViewTitle, common.NgForOf, SuiCalendarItem], encapsulation: 2 });
        return SuiCalendarMonthView;
    }(CalendarView));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCalendarMonthView, [{
            type: core.Component,
            args: [{
                    selector: "sui-calendar-month-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table three column month\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ year }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                }]
        }], function () { return [{ type: core.Renderer2 }]; }, null); })();

    function SuiCalendarYearView_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
        var _r195 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 5);
        core["ɵɵlistener"]("click", function SuiCalendarYearView_tr_7_td_1_Template_td_click_0_listener($event) { core["ɵɵrestoreView"](_r195); var item_r193 = ctx.$implicit; var ctx_r194 = core["ɵɵnextContext"](2); return ctx_r194.setDate(item_r193); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r193 = ctx.$implicit;
        core["ɵɵproperty"]("calendarItem", item_r193);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"]("", item_r193.humanReadable, " ");
    } }
    function SuiCalendarYearView_tr_7_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tr");
        core["ɵɵtemplate"](1, SuiCalendarYearView_tr_7_td_1_Template, 2, 2, "td", 4);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var group_r191 = ctx.$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", group_r191);
    } }
    var CalendarRangeYearService = /** @class */ (function (_super) {
        __extends(CalendarRangeYearService, _super);
        function CalendarRangeYearService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CalendarRangeYearService.prototype.configureItem = function (item, baseDate) {
            item.humanReadable = Util.String.padLeft(item.date.getFullYear().toString(), 4, "0");
            item.isOutsideRange = item.date.getFullYear() >= this.calcStart(baseDate).getFullYear() + 10;
        };
        return CalendarRangeYearService;
    }(CalendarRangeService));
    var SuiCalendarYearView = /** @class */ (function (_super) {
        __extends(SuiCalendarYearView, _super);
        function SuiCalendarYearView(renderer) {
            return _super.call(this, renderer, CalendarViewType.Year, new CalendarRangeYearService(DatePrecision.Decade, 4, 3)) || this;
        }
        Object.defineProperty(SuiCalendarYearView.prototype, "decadeStart", {
            get: function () {
                return DateUtil
                    .startOf(DatePrecision.Decade, DateUtil.clone(this.service.currentDate))
                    .getFullYear();
            },
            enumerable: true,
            configurable: true
        });
        SuiCalendarYearView.prototype.pad = function (year) {
            return Util.String.padLeft(year.toString(), 4, "0");
        };
        SuiCalendarYearView.ɵfac = function SuiCalendarYearView_Factory(t) { return new (t || SuiCalendarYearView)(core["ɵɵdirectiveInject"](core.Renderer2)); };
        SuiCalendarYearView.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiCalendarYearView, selectors: [["sui-calendar-year-view"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 4, consts: [[1, "ui", "celled", "center", "aligned", "unstackable", "table", "three", "column", "year"], ["colspan", "3"], [3, "ranges", "zoomOut"], [4, "ngFor", "ngForOf"], ["class", "link", 3, "calendarItem", "click", 4, "ngFor", "ngForOf"], [1, "link", 3, "calendarItem", "click"]], template: function SuiCalendarYearView_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "table", 0);
                core["ɵɵelementStart"](1, "thead");
                core["ɵɵelementStart"](2, "tr");
                core["ɵɵelementStart"](3, "th", 1);
                core["ɵɵelementStart"](4, "sui-calendar-view-title", 2);
                core["ɵɵlistener"]("zoomOut", function SuiCalendarYearView_Template_sui_calendar_view_title_zoomOut_4_listener($event) { return ctx.zoomOut(); });
                core["ɵɵtext"](5);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](6, "tbody");
                core["ɵɵtemplate"](7, SuiCalendarYearView_tr_7_Template, 2, 1, "tr", 3);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](4);
                core["ɵɵproperty"]("ranges", ctx.ranges);
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate2"](" ", ctx.pad(ctx.decadeStart), " - ", ctx.pad(ctx.decadeStart + 10), " ");
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngForOf", ctx.ranges.current.groupedItems);
            } }, directives: [SuiCalendarViewTitle, common.NgForOf, SuiCalendarItem], encapsulation: 2 });
        return SuiCalendarYearView;
    }(CalendarView));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiCalendarYearView, [{
            type: core.Component,
            args: [{
                    selector: "sui-calendar-year-view",
                    template: "\n<table class=\"ui celled center aligned unstackable table three column year\">\n<thead>\n    <tr>\n        <th colspan=\"3\">\n            <sui-calendar-view-title [ranges]=\"ranges\" (zoomOut)=\"zoomOut()\">\n                {{ pad(decadeStart) }} - {{ pad(decadeStart + 10) }}\n            </sui-calendar-view-title>\n        </th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let group of ranges.current.groupedItems\">\n        <td class=\"link\"\n            *ngFor=\"let item of group\"\n            [calendarItem]=\"item\"\n            (click)=\"setDate(item)\">{{ item.humanReadable }}\n        </td>\n    </tr>\n</tbody>\n</table>\n"
                }]
        }], function () { return [{ type: core.Renderer2 }]; }, null); })();

    var SuiDatepickerModule = /** @class */ (function () {
        function SuiDatepickerModule() {
        }
        SuiDatepickerModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiDatepickerModule });
        SuiDatepickerModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiDatepickerModule_Factory(t) { return new (t || SuiDatepickerModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    SuiPopupModule,
                    SuiLocalizationModule,
                    SuiUtilityModule
                ]] });
        return SuiDatepickerModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiDatepickerModule, { declarations: [SuiCalendarItem,
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
            SuiDatepickerInputDirective], imports: [common.CommonModule,
            forms.FormsModule,
            SuiPopupModule,
            SuiLocalizationModule,
            SuiUtilityModule], exports: [SuiDatepickerDirective,
            SuiDatepickerDirectiveValueAccessor,
            SuiDatepickerDirectiveValidator,
            SuiDatepickerInputDirective] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDatepickerModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
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
    core["ɵɵsetComponentScope"](SuiDatepicker, [SuiCalendarItem,
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
        SuiDatepickerInputDirective, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, forms["ɵangular_packages_forms_forms_y"], forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"], forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, SuiPopupDirective, SuiPopup], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);

    var _c0$7 = ["*"];
    var SuiDimmer = /** @class */ (function (_super) {
        __extends(SuiDimmer, _super);
        function SuiDimmer(renderer, element, changeDetector) {
            var _this = _super.call(this, renderer, element, changeDetector) || this;
            _this._isDimmed = false;
            _this.isDimmedChange = new core.EventEmitter();
            _this.isClickable = true;
            _this.wrapContent = true;
            _this.hasClasses = true;
            return _this;
        }
        Object.defineProperty(SuiDimmer.prototype, "isDimmed", {
            get: function () {
                return this._isDimmed;
            },
            set: function (value) {
                var isDimmed = !!value;
                if (!this._transitionController) {
                    // Initialise transition functionality when first setting dimmed, to ensure initial state doesn't transition.
                    this._transitionController = new TransitionController(isDimmed, "block");
                    this.setTransitionController(this._transitionController);
                    this._isDimmed = isDimmed;
                }
                else if (this._isDimmed !== isDimmed) {
                    this._isDimmed = isDimmed;
                    this._transitionController.stopAll();
                    this._transitionController.animate(new Transition("fade", this.transitionDuration, isDimmed ? exports.TransitionDirection.In : exports.TransitionDirection.Out));
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiDimmer.prototype.onClick = function () {
            if (this.isClickable) {
                this.isDimmed = false;
                this.isDimmedChange.emit(this.isDimmed);
            }
        };
        SuiDimmer.ɵfac = function SuiDimmer_Factory(t) { return new (t || SuiDimmer)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        SuiDimmer.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiDimmer, selectors: [["sui-dimmer"]], hostVars: 6, hostBindings: function SuiDimmer_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiDimmer_click_HostBindingHandler($event) { return ctx.onClick(); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("dimmer", ctx.hasClasses)("active", ctx.isDimmed);
            } }, inputs: { isDimmed: "isDimmed", isClickable: "isClickable", transition: "transition", transitionDuration: "transitionDuration", wrapContent: "wrapContent" }, outputs: { isDimmedChange: "isDimmedChange" }, features: [core["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0$7, decls: 2, vars: 2, template: function SuiDimmer_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "div");
                core["ɵɵprojection"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵclassProp"]("content", ctx.wrapContent);
            } }, styles: [".dimmer[_nghost-%COMP%]:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}"] });
        return SuiDimmer;
    }(SuiTransition));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDimmer, [{
            type: core.Component,
            args: [{
                    selector: "sui-dimmer",
                    template: "\n<div [class.content]=\"wrapContent\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["\n:host.dimmer:not(.hidden) {\n    transition: none;\n    display: flex !important;\n}\n"]
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }]; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.dimmer"]
            }], isDimmed: [{
                type: core.HostBinding,
                args: ["class.active"]
            }, {
                type: core.Input
            }], isDimmedChange: [{
                type: core.Output
            }], isClickable: [{
                type: core.Input
            }], transition: [{
                type: core.Input
            }], transitionDuration: [{
                type: core.Input
            }], wrapContent: [{
                type: core.Input
            }], onClick: [{
                type: core.HostListener,
                args: ["click"]
            }] }); })();

    var SuiDimmerModule = /** @class */ (function () {
        function SuiDimmerModule() {
        }
        SuiDimmerModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiDimmerModule });
        SuiDimmerModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiDimmerModule_Factory(t) { return new (t || SuiDimmerModule)(); }, imports: [[
                    common.CommonModule,
                    SuiTransitionModule
                ]] });
        return SuiDimmerModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiDimmerModule, { declarations: [SuiDimmer], imports: [common.CommonModule,
            SuiTransitionModule], exports: [SuiDimmer] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDimmerModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
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
    var DropdownAutoCloseType = {
        ItemClick: "itemClick",
        OutsideClick: "outsideClick",
        Disabled: "disabled"
    };
    var DropdownService = /** @class */ (function () {
        function DropdownService(autoCloseMode) {
            if (autoCloseMode === void 0) { autoCloseMode = DropdownAutoCloseType.ItemClick; }
            this.isOpen = false;
            this.isOpenChange = new core.EventEmitter();
            this.isDisabled = false;
            this.autoCloseMode = autoCloseMode;
            this.children = [];
        }
        Object.defineProperty(DropdownService.prototype, "isNested", {
            get: function () {
                return !!this.parent;
            },
            enumerable: true,
            configurable: true
        });
        DropdownService.prototype.setOpenState = function (isOpen, reflectInParent) {
            var _this = this;
            if (reflectInParent === void 0) { reflectInParent = false; }
            if (this.isOpen !== isOpen && !this.isDisabled) {
                // Only update the state if it has changed, and the dropdown isn't disabled.
                this.isOpen = !!isOpen;
                this.isAnimating = true;
                // We must delay the emitting to avoid the 'changed after checked' Angular errors.
                this.delay(function () { return _this.isOpenChange.emit(_this.isOpen); });
                if (!this.isOpen) {
                    // Close the child dropdowns when this one closes.
                    this.children.forEach(function (c) { return c.setOpenState(_this.isOpen); });
                }
                if (this.parent && reflectInParent) {
                    // Open the parent dropdowns when this one opens.
                    this.parent.setOpenState(this.isOpen, true);
                }
            }
            else if (this.isOpen !== isOpen && this.isDisabled) {
                // If the state has changed, but the dropdown is disabled, re-emit the original isOpen value.
                this.delay(function () { return _this.isOpenChange.emit(_this.isOpen); });
            }
        };
        DropdownService.prototype.setDisabledState = function (isDisabled) {
            if (this.isDisabled !== isDisabled) {
                if (!!isDisabled) {
                    // Close the dropdown as it is now disabled
                    this.setOpenState(false);
                }
                this.isDisabled = !!isDisabled;
            }
        };
        DropdownService.prototype.toggleOpenState = function () {
            this.setOpenState(!this.isOpen);
        };
        // Registers a dropdown service as a child of this service.
        DropdownService.prototype.registerChild = function (child) {
            if (!this.isChildRegistered(child)) {
                this.children.push(child);
                child.parent = this;
            }
        };
        // Recursive method to check if the provided dropdown is already registered as a child, or is a descendant of a child.
        DropdownService.prototype.isChildRegistered = function (child) {
            return this === child || !!this.children
                .find(function (c) { return !!c.children
                .find(function (cChild) { return cChild.isChildRegistered(child); }); });
        };
        // Wipes any nested data, so all services can be cleanly reattached.
        DropdownService.prototype.clearChildren = function () {
            this.children.forEach(function (c) {
                c.parent = undefined;
            });
            this.children = [];
        };
        // Method for delaying an event into the next tick, to avoid Angular "changed after checked" error.
        DropdownService.prototype.delay = function (callback) {
            setTimeout(function () { return callback(); });
        };
        return DropdownService;
    }());

    var SuiDropdownMenuItem = /** @class */ (function () {
        function SuiDropdownMenuItem(_renderer, element) {
            this._renderer = _renderer;
            this.element = element;
            this.isSelected = false;
            this.selectedClass = "selected";
        }
        Object.defineProperty(SuiDropdownMenuItem.prototype, "isDisabled", {
            get: function () {
                // We must use nativeElement as Angular doesn't have a way of reading class information.
                var element = this.element.nativeElement;
                return element.classList.contains("disabled");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenuItem.prototype, "isSelected", {
            get: function () {
                return this._isSelected;
            },
            set: function (value) {
                // Renderer is used to enable a dynamic class name.
                if (value) {
                    this._renderer.addClass(this.element.nativeElement, this.selectedClass);
                }
                else {
                    this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenuItem.prototype, "hasChildDropdown", {
            get: function () {
                return !!this.childDropdownMenu;
            },
            enumerable: true,
            configurable: true
        });
        SuiDropdownMenuItem.prototype.performClick = function () {
            // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
            this.element.nativeElement.click();
        };
        SuiDropdownMenuItem.ɵfac = function SuiDropdownMenuItem_Factory(t) { return new (t || SuiDropdownMenuItem)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef)); };
        SuiDropdownMenuItem.ɵdir = core["ɵɵdefineDirective"]({ type: SuiDropdownMenuItem, selectors: [["", 8, "item"]], contentQueries: function SuiDropdownMenuItem_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, SuiDropdownMenu, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.childDropdownMenu = _t.first);
            } } });
        return SuiDropdownMenuItem;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDropdownMenuItem, [{
            type: core.Directive,
            args: [{
                    // We must attach to every '.item' as Angular doesn't support > selectors.
                    selector: ".item"
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }]; }, { childDropdownMenu: [{
                type: core.ContentChild,
                args: [core.forwardRef(function () { return SuiDropdownMenu; }), /* TODO: add static flag */ {}]
            }] }); })();
    var SuiDropdownMenu = /** @class */ (function (_super) {
        __extends(SuiDropdownMenu, _super);
        function SuiDropdownMenu(renderer, element, changeDetector) {
            var _this = _super.call(this, renderer, element, changeDetector) || this;
            // Initialise transition functionality.
            _this._transitionController = new TransitionController(false);
            _this.setTransitionController(_this._transitionController);
            _this.menuTransition = "slide down";
            _this.menuTransitionDuration = 200;
            _this.menuAutoSelectFirst = false;
            _this.menuSelectedItemClass = "selected";
            // In case the dropdown menu is destroyed before it has a chance to be fully initialised.
            _this._parentKeyDownListener = function () { };
            return _this;
        }
        Object.defineProperty(SuiDropdownMenu.prototype, "service", {
            get: function () {
                return this._service;
            },
            set: function (value) {
                var _this = this;
                this._service = value;
                var previousIsOpen = this._service.isOpen;
                this._service.isOpenChange.subscribe(function (isOpen) {
                    if (isOpen !== previousIsOpen) {
                        // Only run transitions if the open state has changed.
                        _this._transitionController.stopAll();
                        _this._transitionController.animate(new Transition(_this.menuTransition, _this.menuTransitionDuration, exports.TransitionDirection.Either, function () { return _this._service.isAnimating = false; }));
                    }
                    if (!isOpen) {
                        // Reset the item selections when a nested item is selected to avoid incosistent open states.
                        if (_this.selectedItems.length > 1) {
                            _this.resetSelection();
                        }
                    }
                    previousIsOpen = isOpen;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenu.prototype, "parentElement", {
            set: function (value) {
                var _this = this;
                this._parentKeyDownListener = this._renderer
                    .listen(value.nativeElement, "keydown", function (e) {
                    return _this.onParentKeyDown(e);
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenu.prototype, "items", {
            set: function (items) {
                this._itemsQueryOverride = items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenu.prototype, "_itemsQuery", {
            get: function () {
                return this._itemsQueryOverride || this._itemsQueryInternal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdownMenu.prototype, "_items", {
            // Get the list of items, ignoring those that are disabled.
            get: function () {
                return this._itemsQuery.filter(function (i) { return !i.isDisabled; });
            },
            enumerable: true,
            configurable: true
        });
        SuiDropdownMenu.prototype.onClick = function (e) {
            if (!e.eventHandled) {
                e.eventHandled = true;
                if (this._service.autoCloseMode === DropdownAutoCloseType.ItemClick) {
                    var target = e.target;
                    if (this._element.nativeElement.contains(target.closest(".item")) && !/input|textarea/i.test(target.tagName)) {
                        // Once an item is selected, we can close the entire dropdown.
                        this._service.setOpenState(false, true);
                    }
                }
            }
        };
        SuiDropdownMenu.prototype.onParentKeyDown = function (e) {
            // Only the root dropdown (i.e. not nested dropdowns) is responsible for keeping track of the currently selected item.
            if (this._service && this._service.isOpen && !this._service.isNested) {
                // Stop document events like scrolling while open.
                var target = e.target;
                if (!/input/i.test(target.tagName) &&
                    [KeyCode.Escape, KeyCode.Enter, KeyCode.Up, KeyCode.Down, KeyCode.Left, KeyCode.Right].find(function (kC) { return kC === e.keyCode; })) {
                    e.preventDefault();
                }
                // Gets the top selected item from the stack.
                var _a = __read(this.selectedItems.slice(-1), 1), selected = _a[0];
                // Keeping track of the menu containing the currently selected element allows us to easily determine its siblings.
                var selectedContainer = this;
                if (this.selectedItems.length >= 2) {
                    var _b = __read(this.selectedItems.slice(-2), 1), selectedParent = _b[0];
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
                            var _c = __read(this.selectedItems.slice(-1), 1), selectedParent = _c[0];
                            selectedParent.childDropdownMenu.service.setOpenState(false);
                            selectedParent.isSelected = true;
                        }
                        break;
                    }
                }
            }
        };
        SuiDropdownMenu.prototype.resetSelection = function () {
            var _this = this;
            this.selectedItems = [];
            this._items.forEach(function (i) {
                i.selectedClass = _this.menuSelectedItemClass;
                i.isSelected = false;
            });
            if (this.menuAutoSelectFirst && this._items.length > 0) {
                // Autoselect 1st item if required & possible.
                this._items[0].isSelected = true;
                this.scrollToItem(this._items[0]);
                this.selectedItems.push(this._itemsQuery.first);
            }
        };
        // Determines the item to next be selected, based on the keyboard input & the currently selected item.
        SuiDropdownMenu.prototype.updateSelection = function (selectedItem, keyCode) {
            if (selectedItem) {
                // Remove the selected status on the previously selected item.
                selectedItem.isSelected = false;
            }
            var selectedIndex = this._items
                .findIndex(function (i) { return i === selectedItem; });
            var newSelection;
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
        };
        SuiDropdownMenu.prototype.scrollToItem = function (item) {
            var menu = this._element.nativeElement;
            var selectedRect = item.element.nativeElement.getBoundingClientRect();
            var menuRect = menu.getBoundingClientRect();
            var scrollAmount = 0;
            if (selectedRect.bottom > menuRect.bottom) {
                scrollAmount = selectedRect.bottom - menuRect.bottom;
            }
            if (selectedRect.top < menuRect.top) {
                scrollAmount = selectedRect.top - menuRect.top;
            }
            menu.scrollTop += Math.round(scrollAmount);
        };
        SuiDropdownMenu.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.onItemsChanged();
            this._itemsQuery.changes.subscribe(function () { return _this.onItemsChanged(); });
        };
        SuiDropdownMenu.prototype.onItemsChanged = function () {
            // We use `_items` rather than `items` in case one or more have become disabled.
            this.resetSelection();
        };
        SuiDropdownMenu.prototype.ngOnDestroy = function () {
            this._parentKeyDownListener();
        };
        SuiDropdownMenu.ɵfac = function SuiDropdownMenu_Factory(t) { return new (t || SuiDropdownMenu)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        SuiDropdownMenu.ɵdir = core["ɵɵdefineDirective"]({ type: SuiDropdownMenu, selectors: [["", "suiDropdownMenu", ""]], contentQueries: function SuiDropdownMenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, SuiDropdownMenuItem, false);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._itemsQueryInternal = _t);
            } }, hostBindings: function SuiDropdownMenu_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiDropdownMenu_click_HostBindingHandler($event) { return ctx.onClick($event); });
            } }, inputs: { menuTransition: "menuTransition", menuTransitionDuration: "menuTransitionDuration", menuAutoSelectFirst: "menuAutoSelectFirst", menuSelectedItemClass: "menuSelectedItemClass" }, features: [core["ɵɵInheritDefinitionFeature"]] });
        return SuiDropdownMenu;
    }(SuiTransition));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDropdownMenu, [{
            type: core.Directive,
            args: [{
                    selector: "[suiDropdownMenu]"
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }]; }, { menuTransition: [{
                type: core.Input
            }], menuTransitionDuration: [{
                type: core.Input
            }], _itemsQueryInternal: [{
                type: core.ContentChildren,
                args: [SuiDropdownMenuItem]
            }], menuAutoSelectFirst: [{
                type: core.Input
            }], menuSelectedItemClass: [{
                type: core.Input
            }], onClick: [{
                type: core.HostListener,
                args: ["click", ["$event"]]
            }] }); })();

    var SuiDropdown = /** @class */ (function () {
        function SuiDropdown(_element) {
            var _this = this;
            this._element = _element;
            this.service = new DropdownService();
            this.service.isOpenChange.subscribe(function () {
                if (_this.service.isOpen) {
                    _this._element.nativeElement.focus();
                }
            });
        }
        Object.defineProperty(SuiDropdown.prototype, "children", {
            get: function () {
                var _this = this;
                // @ContentChildren includes the current element by default.
                return this._children.filter(function (c) { return c !== _this; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "isOpenChange", {
            get: function () {
                return this.service.isOpenChange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "isActive", {
            get: function () {
                // This is to ensure nested dropdowns don't get made bold.
                return this.service.isOpen && !this.service.isNested;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "isOpen", {
            get: function () {
                return this.service.isOpen;
            },
            set: function (value) {
                // If we are opening the dropdown, we want to always open its parents.
                this.service.setOpenState(value, !!value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "isDisabled", {
            get: function () {
                return this.service.isDisabled;
            },
            set: function (value) {
                this.service.setDisabledState(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "tabIndex", {
            get: function () {
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiDropdown.prototype, "autoClose", {
            get: function () {
                return this.service.autoCloseMode;
            },
            set: function (value) {
                this.service.autoCloseMode = value;
            },
            enumerable: true,
            configurable: true
        });
        SuiDropdown.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this._menu) {
                throw new Error("You must set [suiDropdownMenu] on the menu element.");
            }
            this._menu.service = this.service;
            this._menu.parentElement = this._element;
            this.childrenUpdated();
            this._children.changes
                .subscribe(function () { return _this.childrenUpdated(); });
        };
        SuiDropdown.prototype.childrenUpdated = function () {
            var _this = this;
            // Reregister child dropdowns each time the menu content changes.
            this.children
                .map(function (c) { return c.service; })
                .forEach(function (s) { return _this.service.registerChild(s); });
        };
        SuiDropdown.prototype.onClick = function (e) {
            if (!e.eventHandled) {
                e.eventHandled = true;
                this.service.toggleOpenState();
            }
        };
        SuiDropdown.prototype.onFocusOut = function (e) {
            if (!this._element.nativeElement.contains(e.relatedTarget)) {
                this.externallyClose();
            }
        };
        SuiDropdown.prototype.onKeypress = function (e) {
            // Block the keyboard event from being fired on parent dropdowns.
            if (!e.eventHandled) {
                if (e.keyCode === KeyCode.Enter) {
                    e.eventHandled = true;
                    this.service.setOpenState(true);
                }
            }
        };
        SuiDropdown.prototype.externallyClose = function () {
            if (this.service.autoCloseMode === DropdownAutoCloseType.ItemClick ||
                this.service.autoCloseMode === DropdownAutoCloseType.OutsideClick) {
                // No need to reflect in parent since they are also bound to document.
                this.service.setOpenState(false);
            }
        };
        SuiDropdown.ɵfac = function SuiDropdown_Factory(t) { return new (t || SuiDropdown)(core["ɵɵdirectiveInject"](core.ElementRef)); };
        SuiDropdown.ɵdir = core["ɵɵdefineDirective"]({ type: SuiDropdown, selectors: [["", "suiDropdown", ""]], contentQueries: function SuiDropdown_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, SuiDropdownMenu, true);
                core["ɵɵcontentQuery"](dirIndex, SuiDropdown, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._menu = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._children = _t);
            } }, hostVars: 5, hostBindings: function SuiDropdown_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiDropdown_click_HostBindingHandler($event) { return ctx.onClick($event); })("focusout", function SuiDropdown_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); })("keypress", function SuiDropdown_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); });
            } if (rf & 2) {
                core["ɵɵattribute"]("tabindex", ctx.tabIndex);
                core["ɵɵclassProp"]("active", ctx.isActive)("disabled", ctx.isDisabled);
            } }, inputs: { isOpen: "isOpen", isDisabled: "isDisabled", _tabIndex: ["tabindex", "_tabIndex"], autoClose: "autoClose" }, outputs: { isOpenChange: "isOpenChange" } });
        return SuiDropdown;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDropdown, [{
            type: core.Directive,
            args: [{
                    selector: "[suiDropdown]"
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { _menu: [{
                type: core.ContentChild,
                args: [SuiDropdownMenu, /* TODO: add static flag */ {}]
            }], _children: [{
                type: core.ContentChildren,
                args: [SuiDropdown, { descendants: true }]
            }], isOpenChange: [{
                type: core.Output
            }], isActive: [{
                type: core.HostBinding,
                args: ["class.active"]
            }], isOpen: [{
                type: core.Input
            }], isDisabled: [{
                type: core.HostBinding,
                args: ["class.disabled"]
            }, {
                type: core.Input
            }], _tabIndex: [{
                type: core.Input,
                args: ["tabindex"]
            }], tabIndex: [{
                type: core.HostBinding,
                args: ["attr.tabindex"]
            }], autoClose: [{
                type: core.Input
            }], onClick: [{
                type: core.HostListener,
                args: ["click", ["$event"]]
            }], onFocusOut: [{
                type: core.HostListener,
                args: ["focusout", ["$event"]]
            }], onKeypress: [{
                type: core.HostListener,
                args: ["keypress", ["$event"]]
            }] }); })();

    var SuiDropdownModule = /** @class */ (function () {
        function SuiDropdownModule() {
        }
        SuiDropdownModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiDropdownModule });
        SuiDropdownModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiDropdownModule_Factory(t) { return new (t || SuiDropdownModule)(); }, imports: [[
                    common.CommonModule,
                    SuiTransitionModule
                ]] });
        return SuiDropdownModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiDropdownModule, { declarations: [SuiDropdown,
            SuiDropdownMenu,
            SuiDropdownMenuItem], imports: [common.CommonModule,
            SuiTransitionModule], exports: [SuiDropdown,
            SuiDropdownMenu,
            SuiDropdownMenuItem] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiDropdownModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
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
    var ActiveModal = /** @class */ (function () {
        function ActiveModal(instance, componentRef) {
            var _this = this;
            this._config = instance;
            this._componentRef = componentRef;
            // Automatically destroy the modal component when it has been dismissed.
            this.component.onDismiss.subscribe(function () { return _this._componentRef.destroy(); });
        }
        Object.defineProperty(ActiveModal.prototype, "component", {
            // Shorthand for direct access to the `SuiModal` instance.
            get: function () {
                return this._componentRef.instance;
            },
            enumerable: true,
            configurable: true
        });
        // Registers a callback for when `onApprove` is fired.
        ActiveModal.prototype.onApprove = function (callback) {
            this.component.onApprove.subscribe(function (res) { return callback(res); });
            return this;
        };
        // Registers a callback for when `onDeny` is fired.
        ActiveModal.prototype.onDeny = function (callback) {
            this.component.onDeny.subscribe(function (res) { return callback(res); });
            return this;
        };
        // Fires the approve event of the modal manually.
        ActiveModal.prototype.approve = function (result) {
            this.component.approve(result);
        };
        // Fires the deny event of the modal manually.
        ActiveModal.prototype.deny = function (result) {
            this.component.deny(result);
        };
        // Removes the modal component instantly, without transitions or firing any events.
        ActiveModal.prototype.destroy = function () {
            this._componentRef.destroy();
        };
        return ActiveModal;
    }());

    var ModalSize = {
        Mini: "mini",
        Tiny: "tiny",
        Small: "small",
        Normal: "normal",
        Large: "large"
    };
    // Stores a basic set of configuration options for a modal.
    var ModalConfig = /** @class */ (function () {
        function ModalConfig(context, isClosable) {
            if (context === void 0) { context = undefined; }
            if (isClosable === void 0) { isClosable = true; }
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
        return ModalConfig;
    }());
    // Used when creating a modal from a `TemplateRef`.
    var TemplateModalConfig = /** @class */ (function (_super) {
        __extends(TemplateModalConfig, _super);
        function TemplateModalConfig(template, context, isClosable) {
            if (context === void 0) { context = undefined; }
            if (isClosable === void 0) { isClosable = true; }
            var _this = _super.call(this, context, isClosable) || this;
            _this.template = template;
            return _this;
        }
        return TemplateModalConfig;
    }(ModalConfig));
    // Used when creating a modal from an existing component.
    var ComponentModalConfig = /** @class */ (function (_super) {
        __extends(ComponentModalConfig, _super);
        function ComponentModalConfig(component, context, isClosable) {
            if (context === void 0) { context = undefined; }
            if (isClosable === void 0) { isClosable = true; }
            var _this = _super.call(this, context, isClosable) || this;
            _this.component = component;
            return _this;
        }
        return ComponentModalConfig;
    }(ModalConfig));

    // Used to pass ability to control a modal to a component.
    var ModalControls = /** @class */ (function () {
        function ModalControls(approve, deny) {
            this.approve = approve;
            this.deny = deny;
        }
        // Use method here rather than arrow variables to make intellisense show they're methods.
        ModalControls.prototype.approve = function (result) { };
        ModalControls.prototype.deny = function (result) { };
        return ModalControls;
    }());
    // Injected into custom modal components, to allow control of the modal, and access to a context object.
    var Modal = /** @class */ (function (_super) {
        __extends(Modal, _super);
        function Modal(controls, context) {
            var _this = 
            // Instances of `ModalControls` are only created in the `SuiModal` constructor,
            // so we take an initialised instance rather than remaking one each time.
            _super.call(this, controls.approve, controls.deny) || this;
            _this.context = context;
            return _this;
        }
        return Modal;
    }(ModalControls));

    // Shorthand for a modal template. Sets up ability to write: `<ng-template let-context let-modal="modal">...</ng-template>`
    // We use an abstract class as ModalTemplate tends to be used within decorated properties, which means it needs to exist!
    var ModalTemplate = /** @class */ (function (_super) {
        __extends(ModalTemplate, _super);
        function ModalTemplate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ModalTemplate;
    }(core.TemplateRef));

    var _c0$8 = ["*"];
    var SuiModalDimmer = /** @class */ (function (_super) {
        __extends(SuiModalDimmer, _super);
        function SuiModalDimmer(renderer, element, changeDetector) {
            var _this = _super.call(this, renderer, element, changeDetector) || this;
            _this.hasClasses = true;
            _this.isClickable = false;
            return _this;
        }
        SuiModalDimmer.ɵfac = function SuiModalDimmer_Factory(t) { return new (t || SuiModalDimmer)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        SuiModalDimmer.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiModalDimmer, selectors: [["sui-modal-dimmer"]], hostVars: 4, hostBindings: function SuiModalDimmer_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("page", ctx.hasClasses)("modals", ctx.hasClasses);
            } }, features: [core["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function SuiModalDimmer_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵprojection"](0);
            } }, styles: [".ui.dimmer[_nghost-%COMP%]:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }"] });
        return SuiModalDimmer;
    }(SuiDimmer));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiModalDimmer, [{
            type: core.Component,
            args: [{
                    selector: "sui-modal-dimmer",
                    template: "<ng-content></ng-content>",
                    styles: ["\n        :host.ui.dimmer:not(.hidden) {\n            transition: none;\n            overflow-y: auto;\n            display: flex !important; \n        }\n    "]
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }]; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.page"]
            }, {
                type: core.HostBinding,
                args: ["class.modals"]
            }] }); })();

    var _c0$9 = ["modal"];
    var _c1$4 = ["templateSibling"];
    function SuiModal_i_3_Template(rf, ctx) { if (rf & 1) {
        var _r200 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "i", 5);
        core["ɵɵlistener"]("click", function SuiModal_i_3_Template_i_click_0_listener($event) { core["ɵɵrestoreView"](_r200); var ctx_r199 = core["ɵɵnextContext"](); return ctx_r199.close(); });
        core["ɵɵelementEnd"]();
    } }
    var _c2 = function (a0) { return { "top aligned": a0 }; };
    var _c3 = ["*"];
    var SuiModal = /** @class */ (function () {
        function SuiModal(_renderer, _element, _componentFactory) {
            var _this = this;
            this._renderer = _renderer;
            this._element = _element;
            this._componentFactory = _componentFactory;
            // Initialise with default configuration from `ModalConfig` (to avoid writing defaults twice).
            var config = new ModalConfig();
            this.loadConfig(config);
            // Event emitters for each of the possible modal outcomes.
            this.onApprove = new core.EventEmitter();
            this.onDeny = new core.EventEmitter();
            this.onDismiss = new core.EventEmitter();
            // Initialise controls with actions for the `approve` and `deny` cases.
            this.controls = new ModalControls(function (res) { return _this.dismiss(function () { return _this.onApprove.emit(res); }); }, function (res) { return _this.dismiss(function () { return _this.onDeny.emit(res); }); });
            // Internal variable initialisation.
            this.dimBackground = false;
            this._isClosing = false;
            this.transitionController = new TransitionController(false);
        }
        Object.defineProperty(SuiModal.prototype, "approve", {
            get: function () {
                return this.controls.approve;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "deny", {
            get: function () {
                return this.controls.deny;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "isFullScreen", {
            // Value to deny with when closing via `isClosable`.
            get: function () {
                return this._isFullScreen;
            },
            set: function (fullScreen) {
                this._isFullScreen = Util.DOM.parseBooleanAttribute(fullScreen);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "mustScroll", {
            get: function () {
                return this._mustScroll;
            },
            set: function (mustScroll) {
                this._mustScroll = mustScroll;
                // 'Cache' value in _mustAlwaysScroll so that if `true`, _mustScroll isn't ever auto-updated.
                this._mustAlwaysScroll = mustScroll;
                this.updateScroll();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "isInverted", {
            get: function () {
                return this._isInverted;
            },
            set: function (inverted) {
                this._isInverted = Util.DOM.parseBooleanAttribute(inverted);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiModal.prototype, "dynamicClasses", {
            get: function () {
                var classes = {};
                if (this.size) {
                    classes[this.size] = true;
                }
                return classes;
            },
            enumerable: true,
            configurable: true
        });
        SuiModal.prototype.ngOnInit = function () {
            var _this = this;
            // Transition the modal to be visible.
            this.transitionController.animate(new Transition(this.transition, this.transitionDuration, exports.TransitionDirection.In));
            setTimeout(function () { return _this.dimBackground = true; });
        };
        SuiModal.prototype.ngAfterViewInit = function () {
            var _this = this;
            // Move the modal to the document body to ensure correct scrolling.
            this._originalContainer = this._element.nativeElement.parentNode;
            document.querySelector("body").appendChild(this._element.nativeElement);
            // Remove the #templateSibling element from the DOM to fix bottom border styles.
            var templateElement = this.templateSibling.element.nativeElement;
            if (templateElement.parentNode) {
                templateElement.parentNode.removeChild(templateElement);
            }
            var element = this._modalElement.nativeElement;
            setTimeout(function () { return _this.updateScroll(); });
            // Focus any element with [autofocus] attribute.
            var autoFocus = element.querySelector("[autofocus]");
            if (autoFocus) {
                // Autofocus after the browser has had time to process other event handlers.
                setTimeout(function () { return autoFocus.focus(); }, 10);
                // Try to focus again when the modal has opened so that autofocus works in IE11.
                setTimeout(function () { return autoFocus.focus(); }, this.transitionDuration);
            }
        };
        // Updates the modal with the specified configuration.
        SuiModal.prototype.loadConfig = function (config) {
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
        };
        // Dismisses the modal with a transition, firing the callback after the modal has finished transitioning.
        SuiModal.prototype.dismiss = function (callback) {
            var _this = this;
            if (callback === void 0) { callback = function () { }; }
            // If we aren't currently closing,
            if (!this._isClosing) {
                this._isClosing = true;
                // Transition the modal to be invisible.
                this.dimBackground = false;
                this.transitionController.stopAll();
                this.transitionController.animate(new Transition(this.transition, this.transitionDuration, exports.TransitionDirection.Out, function () {
                    // When done, move the modal back to its original location, emit a dismiss event, and fire the callback.
                    if (_this._originalContainer) {
                        _this._originalContainer.appendChild(_this._element.nativeElement);
                    }
                    _this.onDismiss.emit();
                    callback();
                }));
            }
        };
        // Closes the modal with a 'deny' outcome, using the specified default reason.
        SuiModal.prototype.close = function () {
            if (this.isClosable) {
                // If we are allowed to close, fire the deny result with the default value.
                this.deny(this.closeResult);
            }
        };
        // Decides whether the modal needs to reposition to allow scrolling.
        SuiModal.prototype.updateScroll = function () {
            // _mustAlwaysScroll works by stopping _mustScroll from being automatically updated, so it stays `true`.
            if (!this._mustAlwaysScroll && this._modalElement) {
                // Semantic UI modal margin and dimmer padding are 1rem, which is relative to the global font size, so for compatibility:
                var fontSize = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("font-size"));
                var margin = fontSize * 2;
                var element = this._modalElement.nativeElement;
                // The modal must scroll if the window height is smaller than the modal height + both margins.
                this._mustScroll = window.innerHeight < element.clientHeight + margin * 2;
            }
        };
        SuiModal.prototype.onClick = function (e) {
            // Makes sense here, as the modal shouldn't be attached to any DOM element.
            e.stopPropagation();
        };
        // Document listener is fine here because nobody will have enough modals open.
        SuiModal.prototype.onDocumentKeyUp = function (e) {
            if (e.keyCode === KeyCode.Escape) {
                // Close automatically covers case of `!isClosable`, so check not needed.
                this.close();
            }
        };
        SuiModal.prototype.onDocumentResize = function () {
            this.updateScroll();
        };
        SuiModal.ɵfac = function SuiModal_Factory(t) { return new (t || SuiModal)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](SuiComponentFactory)); };
        SuiModal.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiModal, selectors: [["sui-modal"]], viewQuery: function SuiModal_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$9, true);
                core["ɵɵstaticViewQuery"](_c1$4, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._modalElement = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.templateSibling = _t.first);
            } }, hostBindings: function SuiModal_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("keyup", function SuiModal_keyup_HostBindingHandler($event) { return ctx.onDocumentKeyUp($event); }, false, core["ɵɵresolveDocument"])("resize", function SuiModal_resize_HostBindingHandler($event) { return ctx.onDocumentResize(); }, false, core["ɵɵresolveWindow"]);
            } }, inputs: { isClosable: "isClosable", closeResult: "closeResult", size: "size", isCentered: "isCentered", isFullScreen: "isFullScreen", isBasic: "isBasic", mustScroll: "mustScroll", isInverted: "isInverted", transition: "transition", transitionDuration: "transitionDuration" }, outputs: { onApprove: "approved", onDeny: "denied", onDismiss: "dismissed" }, ngContentSelectors: _c3, decls: 7, vars: 20, consts: [[3, "ngClass", "isDimmed", "transitionDuration", "isDimmedChange", "click"], [1, "ui", "modal", 3, "suiTransition", "ngClass", "click"], ["modal", ""], ["class", "close icon", 3, "click", 4, "ngIf"], ["templateSibling", ""], [1, "close", "icon", 3, "click"]], template: function SuiModal_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "sui-modal-dimmer", 0);
                core["ɵɵlistener"]("isDimmedChange", function SuiModal_Template_sui_modal_dimmer_isDimmedChange_0_listener($event) { return ctx.dimBackground = $event; })("click", function SuiModal_Template_sui_modal_dimmer_click_0_listener($event) { return ctx.close(); });
                core["ɵɵelementStart"](1, "div", 1, 2);
                core["ɵɵlistener"]("click", function SuiModal_Template_div_click_1_listener($event) { return ctx.onClick($event); });
                core["ɵɵtemplate"](3, SuiModal_i_3_Template, 1, 0, "i", 3);
                core["ɵɵprojection"](4);
                core["ɵɵelement"](5, "div", null, 4);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵclassProp"]("inverted", ctx.isInverted);
                core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](18, _c2, !ctx.isCentered))("isDimmed", ctx.dimBackground)("transitionDuration", ctx.transitionDuration);
                core["ɵɵadvance"](1);
                core["ɵɵclassProp"]("active", ctx.transitionController == null ? null : ctx.transitionController.isVisible)("fullscreen", ctx.isFullScreen)("basic", ctx.isBasic)("scrolling", ctx.mustScroll)("inverted", ctx.isInverted);
                core["ɵɵproperty"]("suiTransition", ctx.transitionController)("ngClass", ctx.dynamicClasses);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", ctx.isClosable);
            } }, directives: [SuiModalDimmer, common.NgClass, SuiTransition, common.NgIf], styles: [""] });
        return SuiModal;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiModal, [{
            type: core.Component,
            args: [{
                    selector: "sui-modal",
                    template: "\n<!-- Page dimmer for modal background. -->\n<sui-modal-dimmer [ngClass]=\"{'top aligned': !isCentered}\" \n                  [class.inverted]=\"isInverted\"\n                  [(isDimmed)]=\"dimBackground\"\n                  [transitionDuration]=\"transitionDuration\"\n                  (click)=\"close()\">\n\n    <!-- Modal component, with transition component attached -->\n    <div class=\"ui modal\"\n         [suiTransition]=\"transitionController\"\n         [class.active]=\"transitionController?.isVisible\"\n         [class.fullscreen]=\"isFullScreen\"\n         [class.basic]=\"isBasic\"\n         [class.scrolling]=\"mustScroll\"\n         [class.inverted]=\"isInverted\"\n         [ngClass]=\"dynamicClasses\"\n         (click)=\"onClick($event)\"\n         #modal>\n\n        <!-- Configurable close icon -->\n        <i class=\"close icon\" *ngIf=\"isClosable\" (click)=\"close()\"></i>\n        <!-- <ng-content> so that <sui-modal> can be used as a normal component. -->\n        <ng-content></ng-content>\n        <!-- @ViewChild reference so we can insert elements beside this div. -->\n        <div #templateSibling></div>\n    </div>\n</sui-modal-dimmer>\n",
                    styles: [""]
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: SuiComponentFactory }]; }, { isClosable: [{
                type: core.Input
            }], closeResult: [{
                type: core.Input
            }], onApprove: [{
                type: core.Output,
                args: ["approved"]
            }], onDeny: [{
                type: core.Output,
                args: ["denied"]
            }], onDismiss: [{
                type: core.Output,
                args: ["dismissed"]
            }], _modalElement: [{
                type: core.ViewChild,
                args: ["modal", { static: true }]
            }], size: [{
                type: core.Input
            }], isCentered: [{
                type: core.Input
            }], isFullScreen: [{
                type: core.Input
            }], isBasic: [{
                type: core.Input
            }], mustScroll: [{
                type: core.Input
            }], isInverted: [{
                type: core.Input
            }], transition: [{
                type: core.Input
            }], transitionDuration: [{
                type: core.Input
            }], templateSibling: [{
                type: core.ViewChild,
                args: ["templateSibling", { read: core.ViewContainerRef, static: true }]
            }], onDocumentKeyUp: [{
                type: core.HostListener,
                args: ["document:keyup", ["$event"]]
            }], onDocumentResize: [{
                type: core.HostListener,
                args: ["window:resize"]
            }] }); })();

    var SuiModalService = /** @class */ (function () {
        function SuiModalService(_componentFactory) {
            this._componentFactory = _componentFactory;
        }
        SuiModalService.prototype.open = function (modal) {
            // Generate the modal component to be shown.
            var componentRef = this._componentFactory.createComponent(SuiModal);
            // Shorthand for the created modal component instance.
            var modalComponent = componentRef.instance;
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
                var contentComponentRef = this._componentFactory.createComponent(modal.component, [
                    {
                        provide: Modal,
                        useValue: new Modal(modalComponent.controls, modal.context)
                    }
                ]);
                // Insert the new component into the content of the modal.
                this._componentFactory.attachToView(contentComponentRef, modalComponent.templateSibling);
                // Shorthand for access to the content component's DOM element.
                var contentElement = contentComponentRef.location.nativeElement;
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
        };
        SuiModalService.ɵfac = function SuiModalService_Factory(t) { return new (t || SuiModalService)(core["ɵɵinject"](SuiComponentFactory)); };
        SuiModalService.ɵprov = core["ɵɵdefineInjectable"]({ token: SuiModalService, factory: SuiModalService.ɵfac });
        return SuiModalService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiModalService, [{
            type: core.Injectable
        }], function () { return [{ type: SuiComponentFactory }]; }, null); })();

    var SuiModalModule = /** @class */ (function () {
        function SuiModalModule() {
        }
        SuiModalModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiModalModule });
        SuiModalModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiModalModule_Factory(t) { return new (t || SuiModalModule)(); }, providers: [
                SuiModalService
            ], imports: [[
                    common.CommonModule,
                    SuiDimmerModule,
                    SuiTransitionModule,
                    SuiUtilityModule
                ]] });
        return SuiModalModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiModalModule, { declarations: [SuiModal,
            SuiModalDimmer], imports: [common.CommonModule,
            SuiDimmerModule,
            SuiTransitionModule,
            SuiUtilityModule], exports: [SuiModal] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiModalModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
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
        core["ɵɵelementStart"](0, "div", 3);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r201 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"]("", ctx_r201.percentage, "%");
    } }
    var _c0$a = ["*"];
    var SuiProgress = /** @class */ (function () {
        function SuiProgress() {
            this.value = 0;
            this.maximum = 100;
            this.precision = 0;
            this._overrideSuccess = false;
            this.autoSuccess = true;
            this.showProgress = true;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiProgress.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                // Convert value from string to number where necessary.
                var converted = +value;
                if (Number.isNaN(converted)) {
                    return;
                }
                this._value = converted;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "maximum", {
            get: function () {
                return this._maximum;
            },
            set: function (value) {
                // Convert value from string to number where necessary.
                var converted = +value;
                if (Number.isNaN(converted)) {
                    return;
                }
                this._maximum = converted;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "precision", {
            get: function () {
                return this._precision;
            },
            set: function (value) {
                // Convert value from string to number where necessary.
                var converted = +value;
                if (Number.isNaN(converted)) {
                    return;
                }
                this._precision = Math.min(Math.max(converted, 0), 20);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "reachedMaximum", {
            get: function () {
                return this._overrideSuccess || ((this.value >= this.maximum) && this.autoSuccess);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "percentage", {
            get: function () {
                var boundedValue = Math.min(Math.max(this.value, 0), this.maximum);
                var percentage = (boundedValue / this.maximum) * 100;
                return percentage.toFixed(this.precision);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiProgress.prototype, "classValue", {
            set: function (classes) {
                if (classes.includes("attached") || classes.includes("tiny")) {
                    this.showProgress = false;
                }
                if (classes.includes("success")) {
                    this._overrideSuccess = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiProgress.ɵfac = function SuiProgress_Factory(t) { return new (t || SuiProgress)(); };
        SuiProgress.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiProgress, selectors: [["sui-progress"]], hostVars: 7, hostBindings: function SuiProgress_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵattribute"]("data-percent", ctx.percentage);
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("progress", ctx.hasClasses)("success", ctx.reachedMaximum);
            } }, inputs: { autoSuccess: "autoSuccess", showProgress: "showProgress", value: "value", maximum: "maximum", precision: "precision", classValue: ["class", "classValue"] }, ngContentSelectors: _c0$a, decls: 4, vars: 3, consts: [[1, "bar"], ["class", "progress", 4, "ngIf"], [1, "label"], [1, "progress"]], template: function SuiProgress_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtemplate"](1, SuiProgress_div_1_Template, 2, 1, "div", 1);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "div", 2);
                core["ɵɵprojection"](3);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵstyleProp"]("width", ctx.percentage, "%");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.showProgress);
            } }, directives: [common.NgIf], styles: [".bar[_ngcontent-%COMP%] {\n    transition-duration: 300ms !important;\n    z-index: 1;\n}"] });
        return SuiProgress;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiProgress, [{
            type: core.Component,
            args: [{
                    selector: "sui-progress",
                    template: "\n<div class=\"bar\" [style.width.%]=\"percentage\">\n    <div class=\"progress\" *ngIf=\"showProgress\">{{ percentage }}%</div>\n</div>\n<div class=\"label\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["\n.bar {\n    transition-duration: 300ms !important;\n    z-index: 1;\n}\n"]
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.progress"]
            }], autoSuccess: [{
                type: core.Input
            }], showProgress: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], maximum: [{
                type: core.Input
            }], precision: [{
                type: core.Input
            }], reachedMaximum: [{
                type: core.HostBinding,
                args: ["class.success"]
            }], percentage: [{
                type: core.HostBinding,
                args: ["attr.data-percent"]
            }], classValue: [{
                type: core.Input,
                args: ["class"]
            }] }); })();

    var SuiProgressModule = /** @class */ (function () {
        function SuiProgressModule() {
        }
        SuiProgressModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiProgressModule });
        SuiProgressModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiProgressModule_Factory(t) { return new (t || SuiProgressModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return SuiProgressModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiProgressModule, { declarations: [SuiProgress], imports: [common.CommonModule], exports: [SuiProgress] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiProgressModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
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
        var _r206 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "i", 1);
        core["ɵɵlistener"]("mouseover", function SuiRating_i_0_Template_i_mouseover_0_listener($event) { core["ɵɵrestoreView"](_r206); var i_r204 = ctx.index; var ctx_r205 = core["ɵɵnextContext"](); return ctx_r205.onMouseover(i_r204); })("click", function SuiRating_i_0_Template_i_click_0_listener($event) { core["ɵɵrestoreView"](_r206); var i_r204 = ctx.index; var ctx_r207 = core["ɵɵnextContext"](); return ctx_r207.onClick(i_r204); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var i_r204 = ctx.index;
        var ctx_r202 = core["ɵɵnextContext"]();
        core["ɵɵclassProp"]("selected", ctx_r202.hoveredIndex >= i_r204 && !ctx_r202.isReadonly)("active", ctx_r202.value > i_r204);
    } }
    var SuiRating = /** @class */ (function () {
        function SuiRating() {
            this.hoveredIndex = -1;
            this.value = 0;
            this.valueChange = new core.EventEmitter();
            this.maximum = 5;
            this.isReadonly = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiRating.prototype, "maximum", {
            get: function () {
                return this._maximum;
            },
            set: function (value) {
                this._maximum = +value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiRating.prototype, "icons", {
            get: function () {
                // tslint:disable-next-line:prefer-literal
                return new Array(this.maximum);
            },
            enumerable: true,
            configurable: true
        });
        SuiRating.prototype.onClick = function (i) {
            if (!this.isReadonly) {
                this.value = i + 1;
                this.valueChange.emit(this.value);
            }
        };
        SuiRating.prototype.onMouseover = function (i) {
            this.hoveredIndex = i;
        };
        SuiRating.prototype.onMouseout = function () {
            this.hoveredIndex = -1;
        };
        SuiRating.prototype.writeValue = function (value) {
            this.value = value;
        };
        SuiRating.ɵfac = function SuiRating_Factory(t) { return new (t || SuiRating)(); };
        SuiRating.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiRating, selectors: [["sui-rating"]], hostVars: 6, hostBindings: function SuiRating_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("mouseout", function SuiRating_mouseout_HostBindingHandler($event) { return ctx.onMouseout(); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("rating", ctx.hasClasses)("read-only", ctx.isReadonly);
            } }, inputs: { maximum: "maximum", isReadonly: "isReadonly" }, outputs: { valueChange: "valueChange" }, decls: 1, vars: 1, consts: [["class", "icon", 3, "selected", "active", "mouseover", "click", 4, "ngFor", "ngForOf"], [1, "icon", 3, "mouseover", "click"]], template: function SuiRating_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, SuiRating_i_0_Template, 1, 4, "i", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngForOf", ctx.icons);
            } }, directives: [common.NgForOf], styles: [".read-only[_nghost-%COMP%]   .icon[_ngcontent-%COMP%] {\n    cursor: auto\n}"] });
        return SuiRating;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiRating, [{
            type: core.Component,
            args: [{
                    selector: "sui-rating",
                    template: "\n<i class=\"icon\"\n   *ngFor=\"let icon of icons; let i = index\"\n   (mouseover)=\"onMouseover(i)\"\n   (click)=\"onClick(i)\"\n   [class.selected]=\"hoveredIndex >= i && !isReadonly\"\n   [class.active]=\"value > i\">\n</i>\n",
                    styles: ["\n:host.read-only .icon {\n    cursor: auto\n}\n"]
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.rating"]
            }], valueChange: [{
                type: core.Output
            }], maximum: [{
                type: core.Input
            }], isReadonly: [{
                type: core.HostBinding,
                args: ["class.read-only"]
            }, {
                type: core.Input
            }], onMouseout: [{
                type: core.HostListener,
                args: ["mouseout"]
            }] }); })();
    var SuiRatingValueAccessor = /** @class */ (function (_super) {
        __extends(SuiRatingValueAccessor, _super);
        function SuiRatingValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiRatingValueAccessor.ɵfac = function SuiRatingValueAccessor_Factory(t) { return new (t || SuiRatingValueAccessor)(core["ɵɵdirectiveInject"](SuiRating)); };
        SuiRatingValueAccessor.ɵdir = core["ɵɵdefineDirective"]({ type: SuiRatingValueAccessor, selectors: [["sui-rating"]], hostBindings: function SuiRatingValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("valueChange", function SuiRatingValueAccessor_valueChange_HostBindingHandler($event) { return ctx.onChange($event); });
            } }, features: [core["ɵɵProvidersFeature"]([customValueAccessorFactory(SuiRatingValueAccessor)]), core["ɵɵInheritDefinitionFeature"]] });
        return SuiRatingValueAccessor;
    }(CustomValueAccessor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiRatingValueAccessor, [{
            type: core.Directive,
            args: [{
                    selector: "sui-rating",
                    host: { "(valueChange)": "onChange($event)" },
                    providers: [customValueAccessorFactory(SuiRatingValueAccessor)]
                }]
        }], function () { return [{ type: SuiRating }]; }, null); })();

    var SuiRatingModule = /** @class */ (function () {
        function SuiRatingModule() {
        }
        SuiRatingModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiRatingModule });
        SuiRatingModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiRatingModule_Factory(t) { return new (t || SuiRatingModule)(); }, imports: [[
                    forms.FormsModule,
                    common.CommonModule
                ]] });
        return SuiRatingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiRatingModule, { declarations: [SuiRating,
            SuiRatingValueAccessor], imports: [forms.FormsModule,
            common.CommonModule], exports: [SuiRating,
            SuiRatingValueAccessor] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiRatingModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        forms.FormsModule,
                        common.CommonModule
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

    var _c0$b = ["templateSibling"];
    function SuiSearchResult_span_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "span", 2);
    } if (rf & 2) {
        var ctx_r215 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("innerHTML", ctx_r215.formatter(ctx_r215.value, ctx_r215.query), core["ɵɵsanitizeHtml"]);
    } }
    // See https://github.com/Microsoft/TypeScript/issues/13449.
    var templateRef$2 = core.TemplateRef;
    var SuiSearchResult = /** @class */ (function () {
        function SuiSearchResult(componentFactory) {
            this.componentFactory = componentFactory;
            this.hasClasses = true;
            // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
            this.formatter = function (value) { return ""; };
        }
        Object.defineProperty(SuiSearchResult.prototype, "template", {
            get: function () {
                return this._template;
            },
            set: function (template) {
                this._template = template;
                if (this.template) {
                    this.componentFactory.createView(this.templateSibling, this.template, {
                        $implicit: this.value,
                        query: this.query
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiSearchResult.ɵfac = function SuiSearchResult_Factory(t) { return new (t || SuiSearchResult)(core["ɵɵdirectiveInject"](SuiComponentFactory)); };
        SuiSearchResult.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiSearchResult, selectors: [["sui-search-result"]], viewQuery: function SuiSearchResult_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$b, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.templateSibling = _t.first);
            } }, hostVars: 2, hostBindings: function SuiSearchResult_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("result", ctx.hasClasses);
            } }, inputs: { value: "value", query: "query", formatter: "formatter", template: "template" }, decls: 3, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]], template: function SuiSearchResult_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "span", null, 0);
                core["ɵɵtemplate"](2, SuiSearchResult_span_2_Template, 1, 1, "span", 1);
            } if (rf & 2) {
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", !ctx.template);
            } }, directives: [common.NgIf], encapsulation: 2 });
        return SuiSearchResult;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSearchResult, [{
            type: core.Component,
            args: [{
                    selector: "sui-search-result",
                    template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value, query)\"></span>\n"
                }]
        }], function () { return [{ type: SuiComponentFactory }]; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.result"]
            }], value: [{
                type: core.Input
            }], query: [{
                type: core.Input
            }], formatter: [{
                type: core.Input
            }], template: [{
                type: core.Input
            }], templateSibling: [{
                type: core.ViewChild,
                args: ["templateSibling", { read: core.ViewContainerRef, static: true }]
            }] }); })();

    var SearchService = /** @class */ (function () {
        function SearchService(allowEmptyQuery) {
            var _this = this;
            if (allowEmptyQuery === void 0) { allowEmptyQuery = false; }
            this._options = [];
            this.optionsFilter = function (os, q) {
                // Convert the query string to a RegExp.
                var regex = _this.toRegex(_this._query);
                if (regex instanceof RegExp) {
                    // Only update the results if the query was valid regex.
                    // This avoids the results suddenly becoming empty if an invalid regex string is inputted.
                    return os
                        // Filter on the options with a string match on the field we are testing.
                        .filter(function (o) { return Util.Object.readValue(o, _this._optionsField)
                        .toString()
                        .match(regex); });
                }
                // Don't update since it wasn't a valid regex.
                return false;
            };
            // Set default values and reset.
            this.allowEmptyQuery = allowEmptyQuery;
            this.searchDelay = 0;
            this.reset();
        }
        Object.defineProperty(SearchService.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (options) {
                this._options = options || [];
                // We cannot use both local & remote options simultaneously.
                this._optionsLookup = undefined;
                // Reset entire service with new options.
                this.reset();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "optionsLookup", {
            get: function () {
                return this._optionsLookup;
            },
            set: function (lookupFn) {
                this._optionsLookup = lookupFn;
                // As before, cannot use local & remote options simultaneously.
                this._options = [];
                this.reset();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "hasItemLookup", {
            get: function () {
                return !!this.optionsLookup && this.optionsLookup.length === 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "optionsField", {
            get: function () {
                return this._optionsField;
            },
            set: function (field) {
                this._optionsField = field;
                // We need to reset otherwise we would now be showing invalid search results.
                this.reset();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "results", {
            get: function () {
                return this._results;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "query", {
            get: function () {
                return this._query;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchService.prototype, "isSearching", {
            get: function () {
                return this._isSearching;
            },
            enumerable: true,
            configurable: true
        });
        // Updates the query after the specified search delay.
        SearchService.prototype.updateQueryDelayed = function (query, callback) {
            var _this = this;
            if (callback === void 0) { callback = function () { }; }
            this._query = query;
            clearTimeout(this._searchDelayTimeout);
            this._searchDelayTimeout = window.setTimeout(function () {
                _this.updateQuery(query, callback);
            }, this.searchDelay);
        };
        // Updates the current search query.
        SearchService.prototype.updateQuery = function (query, callback) {
            var _this = this;
            if (callback === void 0) { callback = function () { }; }
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
                var queryLookup = this._optionsLookup.call(undefined, this._query);
                queryLookup
                    .then(function (results) {
                    _this._isSearching = false;
                    _this.updateResults(results);
                    return callback();
                })
                    .catch(function (error) {
                    // Unset 'loading' state, and throw the returned error without updating the results.
                    _this._isSearching = false;
                    return callback(error);
                });
                return;
            }
            var filtered = this.optionsFilter.call(undefined, this._options, this._query);
            if (filtered) {
                this.updateResults(filtered);
            }
            return callback();
        };
        // Updates & caches the new set of results.
        SearchService.prototype.updateResults = function (results) {
            this._resultsCache[this._query] = results;
            this._results = results;
        };
        // tslint:disable-next-line:promise-function-async
        SearchService.prototype.initialLookup = function (initial) {
            if (!this._optionsLookup) {
                return Promise.resolve([]);
            }
            if (initial instanceof Array) {
                return this._optionsLookup(undefined, initial);
            }
            return this._optionsLookup(undefined, initial);
        };
        // Converts a query string to regex without throwing an error.
        SearchService.prototype.toRegex = function (query) {
            try {
                return new RegExp(query, "i");
            }
            catch (e) {
                return query;
            }
        };
        // Generates HTML for highlighted match text.
        SearchService.prototype.highlightMatches = function (text, query) {
            var regex = this.toRegex(query);
            if (regex instanceof RegExp) {
                return text.replace(regex, function (match) { return "<b>" + match + "</b>"; });
            }
            return text;
        };
        // Resets the search back to a pristine state.
        SearchService.prototype.reset = function () {
            this._results = [];
            this._resultsCache = {};
            this._isSearching = false;
            this.updateQuery("");
        };
        return SearchService;
    }());

    function SuiSearch_i_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "i", 6);
    } }
    function SuiSearch_sui_search_result_4_Template(rf, ctx) { if (rf & 1) {
        var _r213 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "sui-search-result", 7);
        core["ɵɵlistener"]("click", function SuiSearch_sui_search_result_4_Template_sui_search_result_click_0_listener($event) { core["ɵɵrestoreView"](_r213); var r_r211 = ctx.$implicit; var ctx_r212 = core["ɵɵnextContext"](); return ctx_r212.select(r_r211); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var r_r211 = ctx.$implicit;
        var ctx_r209 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("value", r_r211)("query", ctx_r209.query)("formatter", ctx_r209.resultFormatter)("template", ctx_r209.resultTemplate);
    } }
    function SuiSearch_div_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 8);
        core["ɵɵelementStart"](1, "div", 9);
        core["ɵɵtext"](2);
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](3, "div", 10);
        core["ɵɵtext"](4);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r210 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](ctx_r210.localeValues.noResults.header);
        core["ɵɵadvance"](2);
        core["ɵɵtextInterpolate"](ctx_r210.localeValues.noResults.message);
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
            this.onResultSelected = new core.EventEmitter();
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
        SuiSearch.ɵfac = function SuiSearch_Factory(t) { return new (t || SuiSearch)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](SuiLocalizationService)); };
        SuiSearch.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiSearch, selectors: [["sui-search"]], viewQuery: function SuiSearch_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](SuiDropdownMenu, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._menu = _t.first);
            } }, hostVars: 9, hostBindings: function SuiSearch_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("focusin", function SuiSearch_focusin_HostBindingHandler($event) { return ctx.onFocusIn(); })("focusout", function SuiSearch_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); });
            } if (rf & 2) {
                core["ɵɵattribute"]("tabindex", ctx.tabindex);
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("search", ctx.hasClasses)("active", ctx.isActive)("loading", ctx.isSearching);
            } }, inputs: { hasIcon: "hasIcon", placeholder: "placeholder", options: "options", optionsFilter: "optionsFilter", optionsLookup: "optionsLookup", optionsField: "optionsField", resultFormatter: "resultFormatter", resultTemplate: "resultTemplate", retainSelectedResult: "retainSelectedResult", searchDelay: "searchDelay", maxResults: "maxResults", transition: "transition", transitionDuration: "transitionDuration" }, outputs: { onResultSelected: "resultSelected" }, decls: 6, vars: 9, consts: [[1, "ui", "input", 3, "click"], ["type", "text", "autocomplete", "off", 1, "prompt", 3, "ngModel", "ngModelChange"], ["class", "search icon", 4, "ngIf"], ["suiDropdownMenu", "", "menuSelectedItemClass", "active", 1, "results", 3, "menuTransition", "menuTransitionDuration"], ["class", "item", 3, "value", "query", "formatter", "template", "click", 4, "ngFor", "ngForOf"], ["class", "message empty", 4, "ngIf"], [1, "search", "icon"], [1, "item", 3, "value", "query", "formatter", "template", "click"], [1, "message", "empty"], [1, "header"], [1, "description"]], template: function SuiSearch_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵlistener"]("click", function SuiSearch_Template_div_click_0_listener($event) { return ctx.onClick($event); });
                core["ɵɵelementStart"](1, "input", 1);
                core["ɵɵlistener"]("ngModelChange", function SuiSearch_Template_input_ngModelChange_1_listener($event) { return ctx.query = $event; });
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](2, SuiSearch_i_2_Template, 1, 0, "i", 2);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](3, "div", 3);
                core["ɵɵtemplate"](4, SuiSearch_sui_search_result_4_Template, 1, 4, "sui-search-result", 4);
                core["ɵɵtemplate"](5, SuiSearch_div_5_Template, 5, 2, "div", 5);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵclassProp"]("icon", ctx.hasIcon);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngModel", ctx.query);
                core["ɵɵattribute"]("placeholder", ctx.placeholder);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.hasIcon);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.results);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.results.length == 0);
            } }, styles: ["[_nghost-%COMP%] {\n    display: inline-block;\n    outline: 0;\n}\n\n\n.results[_ngcontent-%COMP%] {\n    margin-bottom: .5em;\n}"] });
        return SuiSearch;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSearch, [{
            type: core.Component,
            args: [{
                    selector: "sui-search",
                    template: "\n<div class=\"ui input\" [class.icon]=\"hasIcon\" (click)=\"onClick($event)\">\n    <input class=\"prompt\" type=\"text\" [attr.placeholder]=\"placeholder\" autocomplete=\"off\" [(ngModel)]=\"query\">\n    <i *ngIf=\"hasIcon\" class=\"search icon\"></i>\n</div>\n<div class=\"results\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     menuSelectedItemClass=\"active\">\n\n    <sui-search-result *ngFor=\"let r of results\"\n                       class=\"item\"\n                       [value]=\"r\"\n                       [query]=\"query\"\n                       [formatter]=\"resultFormatter\"\n                       [template]=\"resultTemplate\"\n                       (click)=\"select(r)\"></sui-search-result>\n\n    <div *ngIf=\"results.length == 0\" class=\"message empty\">\n        <div class=\"header\">{{ localeValues.noResults.header }}</div>\n        <div class=\"description\">{{ localeValues.noResults.message }}</div>\n    </div>\n</div>\n",
                    styles: ["\n/* Ensures results div has margin. */\n:host {\n    display: inline-block;\n    outline: 0;\n}\n\n/* Fixes positioning when results are pushed above the search. */\n.results {\n    margin-bottom: .5em;\n}\n"]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }, { type: SuiLocalizationService }]; }, { _menu: [{
                type: core.ViewChild,
                args: [SuiDropdownMenu, { static: true }]
            }], hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.search"]
            }], tabindex: [{
                type: core.HostBinding,
                args: ["attr.tabindex"]
            }], isActive: [{
                type: core.HostBinding,
                args: ["class.active"]
            }], hasIcon: [{
                type: core.Input
            }], placeholder: [{
                type: core.Input
            }], options: [{
                type: core.Input
            }], optionsFilter: [{
                type: core.Input
            }], optionsLookup: [{
                type: core.Input
            }], optionsField: [{
                type: core.Input
            }], resultFormatter: [{
                type: core.Input
            }], resultTemplate: [{
                type: core.Input
            }], retainSelectedResult: [{
                type: core.Input
            }], searchDelay: [{
                type: core.Input
            }], isSearching: [{
                type: core.HostBinding,
                args: ["class.loading"]
            }], maxResults: [{
                type: core.Input
            }], onResultSelected: [{
                type: core.Output,
                args: ["resultSelected"]
            }], transition: [{
                type: core.Input
            }], transitionDuration: [{
                type: core.Input
            }], onFocusIn: [{
                type: core.HostListener,
                args: ["focusin"]
            }], onFocusOut: [{
                type: core.HostListener,
                args: ["focusout", ["$event"]]
            }] }); })();

    var SuiSearchModule = /** @class */ (function () {
        function SuiSearchModule() {
        }
        SuiSearchModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiSearchModule });
        SuiSearchModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiSearchModule_Factory(t) { return new (t || SuiSearchModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    SuiDropdownModule,
                    SuiLocalizationModule,
                    SuiUtilityModule
                ]] });
        return SuiSearchModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiSearchModule, { declarations: [SuiSearch,
            SuiSearchResult], imports: [common.CommonModule,
            forms.FormsModule,
            SuiDropdownModule,
            SuiLocalizationModule,
            SuiUtilityModule], exports: [SuiSearch] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSearchModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
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
    core["ɵɵsetComponentScope"](SuiSearch, [SuiSearch,
        SuiSearchResult, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, forms["ɵangular_packages_forms_forms_y"], forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"], forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, SuiDropdown, SuiDropdownMenu, SuiDropdownMenuItem], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe]);

    var _c0$c = ["templateSibling"];
    var SuiSelectOption = /** @class */ (function (_super) {
        __extends(SuiSelectOption, _super);
        function SuiSelectOption(renderer, element, changeDetector) {
            var _this = 
            // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
            // This is not done via adding the .item class because it isn't supported by Angular.
            _super.call(this, renderer, element) || this;
            _this.changeDetector = changeDetector;
            _this.hasClasses = true;
            _this.isActive = false;
            _this.onSelected = new core.EventEmitter();
            // By default we make the default text an empty label, for the brief moment when it isn't displaying the correct one.
            _this.renderedText = "";
            _this.usesTemplate = false;
            return _this;
        }
        Object.defineProperty(SuiSelectOption.prototype, "formatter", {
            set: function (formatter) {
                if (!this.usesTemplate) {
                    this.renderedText = formatter(this.value);
                }
                else {
                    this.renderedText = "";
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiSelectOption.prototype.onClick = function (e) {
            var _this = this;
            e.eventHandled = true;
            setTimeout(function () { return _this.onSelected.emit(_this.value); });
        };
        SuiSelectOption.ɵfac = function SuiSelectOption_Factory(t) { return new (t || SuiSelectOption)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef)); };
        SuiSelectOption.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiSelectOption, selectors: [["sui-select-option"]], viewQuery: function SuiSelectOption_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$c, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.templateSibling = _t.first);
            } }, hostVars: 4, hostBindings: function SuiSelectOption_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiSelectOption_click_HostBindingHandler($event) { return ctx.onClick($event); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("item", ctx.hasClasses)("active", ctx.isActive);
            } }, inputs: { value: "value" }, outputs: { onSelected: "onSelected" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML"]], template: function SuiSelectOption_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "span", null, 0);
                core["ɵɵelement"](2, "span", 1);
            } if (rf & 2) {
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("innerHTML", ctx.renderedText, core["ɵɵsanitizeHtml"]);
            } }, encapsulation: 2 });
        return SuiSelectOption;
    }(SuiDropdownMenuItem));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSelectOption, [{
            type: core.Component,
            args: [{
                    selector: "sui-select-option",
                    template: "\n<span #templateSibling></span>\n<span [innerHTML]=\"renderedText\"></span>\n"
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }]; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.item"]
            }], value: [{
                type: core.Input
            }], onSelected: [{
                type: core.Output
            }], isActive: [{
                type: core.HostBinding,
                args: ["class.active"]
            }], templateSibling: [{
                type: core.ViewChild,
                args: ["templateSibling", { read: core.ViewContainerRef, static: true }]
            }], onClick: [{
                type: core.HostListener,
                args: ["click", ["$event"]]
            }] }); })();

    var SuiSelectSearch = /** @class */ (function () {
        function SuiSelectSearch(_renderer, _element) {
            this._renderer = _renderer;
            this._element = _element;
            this.onQueryUpdated = new core.EventEmitter();
            this.onQueryKeyDown = new core.EventEmitter();
            this.hasClasses = true;
            this.autoComplete = "off";
        }
        Object.defineProperty(SuiSelectSearch.prototype, "query", {
            set: function (query) {
                this._renderer.setProperty(this._element.nativeElement, "value", query);
            },
            enumerable: true,
            configurable: true
        });
        SuiSelectSearch.prototype.updateQuery = function (query) {
            this.onQueryUpdated.emit(query);
        };
        SuiSelectSearch.prototype.onKeyDown = function (e) {
            this.onQueryKeyDown.emit(e);
        };
        SuiSelectSearch.prototype.focus = function () {
            var _this = this;
            // Slightly delay to support in menu search.
            this._element.nativeElement.focus();
            setTimeout(function () { return _this._element.nativeElement.focus(); });
        };
        SuiSelectSearch.ɵfac = function SuiSelectSearch_Factory(t) { return new (t || SuiSelectSearch)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef)); };
        SuiSelectSearch.ɵdir = core["ɵɵdefineDirective"]({ type: SuiSelectSearch, selectors: [["input", "suiSelectSearch", ""]], hostVars: 3, hostBindings: function SuiSelectSearch_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("input", function SuiSelectSearch_input_HostBindingHandler($event) { return ctx.updateQuery($event.target.value); })("keydown", function SuiSelectSearch_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
            } if (rf & 2) {
                core["ɵɵattribute"]("autocomplete", ctx.autoComplete);
                core["ɵɵclassProp"]("search", ctx.hasClasses);
            } } });
        return SuiSelectSearch;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSelectSearch, [{
            type: core.Directive,
            args: [{
                    selector: "input[suiSelectSearch]"
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }]; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.search"]
            }], autoComplete: [{
                type: core.HostBinding,
                args: ["attr.autocomplete"]
            }], updateQuery: [{
                type: core.HostListener,
                args: ["input", ["$event.target.value"]]
            }], onKeyDown: [{
                type: core.HostListener,
                args: ["keydown", ["$event"]]
            }] }); })();

    // We use generic type T to specify the type of the options we are working with,
    // and U to specify the type of the property of the option used as the value.
    var SuiSelectBase = /** @class */ (function () {
        function SuiSelectBase(_element, _localizationService) {
            var _this = this;
            this._element = _element;
            this._localizationService = _localizationService;
            this.dropdownService = new DropdownService();
            // We do want an empty query to return all results.
            this.searchService = new SearchService(true);
            this.isSearchable = false;
            this.onLocaleUpdate();
            this._localizationService.onLanguageUpdate.subscribe(function () { return _this.onLocaleUpdate(); });
            this._renderedSubscriptions = [];
            this.icon = "dropdown";
            this.transition = "slide down";
            this.transitionDuration = 200;
            this.onTouched = new core.EventEmitter();
            this.hasClasses = true;
        }
        Object.defineProperty(SuiSelectBase.prototype, "isActive", {
            get: function () {
                return this.dropdownService.isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "isVisible", {
            get: function () {
                return this._menu.isVisible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "hasSearchClass", {
            get: function () {
                return this.isSearchable && !this.isSearchExternal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "isSearching", {
            get: function () {
                return this.searchService.isSearching;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "searchInput", {
            get: function () {
                return this._manualSearch || this._internalSearch;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "tabindex", {
            get: function () {
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "isDisabled", {
            get: function () {
                return this.dropdownService.isDisabled;
            },
            set: function (value) {
                this.dropdownService.isDisabled = !!value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "options", {
            set: function (options) {
                if (options) {
                    this.searchService.options = options;
                    this.optionsUpdateHook();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "optionsFilter", {
            set: function (filter) {
                if (filter) {
                    this.searchService.optionsFilter = filter;
                    this.optionsUpdateHook();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "optionsLookup", {
            set: function (lookup) {
                if (lookup) {
                    this.searchService.optionsLookup = lookup;
                    this.optionsUpdateHook();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "filteredOptions", {
            get: function () {
                return this.searchService.results;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "availableOptions", {
            // Deprecated
            get: function () {
                return this.filteredOptions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "query", {
            get: function () {
                return this.isSearchable ? this.searchService.query : undefined;
            },
            set: function (query) {
                var _this = this;
                if (query != undefined) {
                    this.queryUpdateHook();
                    this.updateQuery(query);
                    // Update the rendered text as query has changed.
                    this._renderedOptions.forEach(function (ro) { return _this.initialiseRenderedOption(ro); });
                    if (this.searchInput) {
                        this.searchInput.query = query;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "labelField", {
            get: function () {
                return this.searchService.optionsField;
            },
            set: function (field) {
                this.searchService.optionsField = field;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "labelGetter", {
            get: function () {
                var _this = this;
                // Helper function to retrieve the label from an item.
                return function (obj) {
                    var label = Util.Object.readValue(obj, _this.labelField);
                    if (label != undefined) {
                        return label.toString();
                    }
                    return "";
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "valueGetter", {
            get: function () {
                var _this = this;
                // Helper function to retrieve the value from an item.
                return function (obj) { return Util.Object.readValue(obj, _this.valueField); };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "configuredFormatter", {
            get: function () {
                var _this = this;
                if (this._optionFormatter) {
                    return function (o) { return _this._optionFormatter(o, _this.isSearchable ? _this.query : undefined); };
                }
                else if (this.searchService.optionsLookup) {
                    return function (o) { return _this.labelGetter(o); };
                }
                else {
                    return function (o) { return _this.searchService.highlightMatches(_this.labelGetter(o), _this.query || ""); };
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "optionFormatter", {
            set: function (formatter) {
                this._optionFormatter = formatter;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSelectBase.prototype, "localeValues", {
            get: function () {
                return this._localizationService.override(this._localeValues, this.localeOverrides);
            },
            enumerable: true,
            configurable: true
        });
        SuiSelectBase.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._menu.service = this.dropdownService;
            // We manually specify the menu items to the menu because the @ContentChildren doesn't pick up our dynamically rendered items.
            this._menu.items = this._renderedOptions;
            this._menu.parentElement = this._element;
            if (this._manualSearch) {
                this.isSearchable = true;
                this.isSearchExternal = true;
            }
            if (this.searchInput) {
                this.searchInput.onQueryUpdated.subscribe(function (q) { return _this.query = q; });
                this.searchInput.onQueryKeyDown.subscribe(function (e) { return _this.onQueryInputKeydown(e); });
            }
            // We must call this immediately as changes doesn't fire when you subscribe.
            this.onAvailableOptionsRendered();
            this._renderedOptions.changes.subscribe(function () { return _this.onAvailableOptionsRendered(); });
        };
        SuiSelectBase.prototype.onLocaleUpdate = function () {
            this._localeValues = this._localizationService.get().select;
        };
        // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
        SuiSelectBase.prototype.optionsUpdateHook = function () { };
        // Hook is here since Typescript doesn't yet support overriding getters & setters while still calling the superclass.
        SuiSelectBase.prototype.queryUpdateHook = function () { };
        SuiSelectBase.prototype.updateQuery = function (query) {
            var _this = this;
            // Update the query then open the dropdown, as after keyboard input it should always be open.
            this.searchService.updateQuery(query, function () {
                return _this.dropdownService.setOpenState(true);
            });
        };
        SuiSelectBase.prototype.resetQuery = function (delayed) {
            if (delayed === void 0) { delayed = true; }
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
        };
        SuiSelectBase.prototype.onAvailableOptionsRendered = function () {
            var _this = this;
            // Unsubscribe from all previous subscriptions to avoid memory leaks on large selects.
            this._renderedSubscriptions.forEach(function (rs) { return rs.unsubscribe(); });
            this._renderedSubscriptions = [];
            this._renderedOptions.forEach(function (ro) {
                // Slightly delay initialisation to avoid change after checked errors. TODO - look into avoiding this!
                setTimeout(function () { return _this.initialiseRenderedOption(ro); });
                _this._renderedSubscriptions.push(ro.onSelected.subscribe(function () { return _this.selectOption(ro.value); }));
            });
            // If no options have been provided, autogenerate them from the rendered ones.
            if (this.searchService.options.length === 0 && !this.searchService.optionsLookup) {
                this.options = this._renderedOptions.map(function (ro) { return ro.value; });
            }
        };
        SuiSelectBase.prototype.initialiseRenderedOption = function (option) {
            option.usesTemplate = !!this.optionTemplate;
            option.formatter = this.configuredFormatter;
            if (option.usesTemplate) {
                this.drawTemplate(option.templateSibling, option.value);
            }
            option.changeDetector.markForCheck();
        };
        SuiSelectBase.prototype.findOption = function (options, value) {
            var _this = this;
            // Tries to find an option in options array
            return options.find(function (o) { return value === _this.valueGetter(o); });
        };
        SuiSelectBase.prototype.onCaretClick = function (e) {
            if (!e.eventHandled) {
                e.eventHandled = true;
                if (!this.dropdownService.isAnimating) {
                    this.dropdownService.setOpenState(!this.dropdownService.isOpen);
                    this.focus();
                }
            }
        };
        SuiSelectBase.prototype.onClick = function (e) {
            if (!e.eventHandled && !this.dropdownService.isAnimating) {
                e.eventHandled = true;
                // If the dropdown is searchable, clicking should keep it open, otherwise we toggle the open state.
                this.dropdownService.setOpenState(this.isSearchable ? true : !this.dropdownService.isOpen);
                // Immediately focus the search input whenever clicking on the select.
                this.focus();
            }
        };
        SuiSelectBase.prototype.onFocusIn = function () {
            if (!this.dropdownService.isOpen && !this.dropdownService.isAnimating) {
                this.dropdownService.setOpenState(true);
                this.focus();
            }
        };
        SuiSelectBase.prototype.onFocusOut = function (e) {
            if (!this._element.nativeElement.contains(e.relatedTarget)) {
                this.dropdownService.setOpenState(false);
                this.onTouched.emit();
            }
        };
        SuiSelectBase.prototype.onKeyPress = function (e) {
            if (e.keyCode === KeyCode.Enter) {
                // Enables support for focussing and opening with the keyboard alone.
                // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
                this._element.nativeElement.click();
            }
        };
        SuiSelectBase.prototype.onKeyDown = function (e) {
            if (!this.dropdownService.isOpen && e.keyCode === KeyCode.Down) {
                // Enables support for focussing and opening with the keyboard alone.
                // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
                this._element.nativeElement.click();
                e.preventDefault();
            }
        };
        SuiSelectBase.prototype.onQueryInputKeydown = function (event) { };
        SuiSelectBase.prototype.focus = function () {
            if (this.isSearchable && this.searchInput) {
                // Focusses the search input only when searchable.
                // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
                this.searchInput.focus();
            }
            else {
                this._element.nativeElement.focus();
            }
        };
        // Helper that draws the provided template beside the provided ViewContainerRef.
        SuiSelectBase.prototype.drawTemplate = function (siblingRef, value) {
            siblingRef.clear();
            // Use of `$implicit` means use of <ng-template let-option> syntax is supported.
            siblingRef.createEmbeddedView(this.optionTemplate, {
                $implicit: value,
                query: this.query
            });
        };
        SuiSelectBase.prototype.ngOnDestroy = function () {
            this._renderedSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        };
        SuiSelectBase.ɵfac = function SuiSelectBase_Factory(t) { return new (t || SuiSelectBase)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](SuiLocalizationService)); };
        SuiSelectBase.ɵdir = core["ɵɵdefineDirective"]({ type: SuiSelectBase, contentQueries: function SuiSelectBase_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, SuiSelectSearch, true);
                core["ɵɵcontentQuery"](dirIndex, SuiSelectOption, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._manualSearch = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._renderedOptions = _t);
            } }, viewQuery: function SuiSelectBase_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](SuiDropdownMenu, true);
                core["ɵɵstaticViewQuery"](SuiSelectSearch, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._menu = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._internalSearch = _t.first);
            } }, hostVars: 15, hostBindings: function SuiSelectBase_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiSelectBase_click_HostBindingHandler($event) { return ctx.onClick($event); })("focusin", function SuiSelectBase_focusin_HostBindingHandler($event) { return ctx.onFocusIn(); })("focusout", function SuiSelectBase_focusout_HostBindingHandler($event) { return ctx.onFocusOut($event); })("keypress", function SuiSelectBase_keypress_HostBindingHandler($event) { return ctx.onKeyPress($event); })("keydown", function SuiSelectBase_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
            } if (rf & 2) {
                core["ɵɵattribute"]("tabindex", ctx.tabindex);
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("dropdown", ctx.hasClasses)("active", ctx.isActive)("visible", ctx.isVisible)("search", ctx.hasSearchClass)("loading", ctx.isSearching)("disabled", ctx.isDisabled);
            } }, inputs: { isSearchable: "isSearchable", _tabIndex: ["tabindex", "_tabIndex"], isDisabled: "isDisabled", options: "options", optionsFilter: "optionsFilter", optionsLookup: "optionsLookup", labelField: "labelField", valueField: "valueField", optionTemplate: "optionTemplate", optionFormatter: "optionFormatter", icon: "icon", transition: "transition", transitionDuration: "transitionDuration" }, outputs: { onTouched: "touched" } });
        return SuiSelectBase;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSelectBase, [{
            type: core.Directive
        }], function () { return [{ type: core.ElementRef }, { type: SuiLocalizationService }]; }, { _menu: [{
                type: core.ViewChild,
                args: [SuiDropdownMenu, { static: true }]
            }], _renderedOptions: [{
                type: core.ContentChildren,
                args: [SuiSelectOption, { descendants: true }]
            }], hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.dropdown"]
            }], isActive: [{
                type: core.HostBinding,
                args: ["class.active"]
            }], isVisible: [{
                type: core.HostBinding,
                args: ["class.visible"]
            }], isSearchable: [{
                type: core.Input
            }], hasSearchClass: [{
                type: core.HostBinding,
                args: ["class.search"]
            }], isSearching: [{
                type: core.HostBinding,
                args: ["class.loading"]
            }], _internalSearch: [{
                type: core.ViewChild,
                args: [SuiSelectSearch, { static: true }]
            }], _manualSearch: [{
                type: core.ContentChild,
                args: [SuiSelectSearch, /* TODO: add static flag */ {}]
            }], _tabIndex: [{
                type: core.Input,
                args: ["tabindex"]
            }], tabindex: [{
                type: core.HostBinding,
                args: ["attr.tabindex"]
            }], isDisabled: [{
                type: core.HostBinding,
                args: ["class.disabled"]
            }, {
                type: core.Input
            }], options: [{
                type: core.Input
            }], optionsFilter: [{
                type: core.Input
            }], optionsLookup: [{
                type: core.Input
            }], labelField: [{
                type: core.Input
            }], valueField: [{
                type: core.Input
            }], optionTemplate: [{
                type: core.Input
            }], optionFormatter: [{
                type: core.Input
            }], icon: [{
                type: core.Input
            }], transition: [{
                type: core.Input
            }], transitionDuration: [{
                type: core.Input
            }], onTouched: [{
                type: core.Output,
                args: ["touched"]
            }], onClick: [{
                type: core.HostListener,
                args: ["click", ["$event"]]
            }], onFocusIn: [{
                type: core.HostListener,
                args: ["focusin"]
            }], onFocusOut: [{
                type: core.HostListener,
                args: ["focusout", ["$event"]]
            }], onKeyPress: [{
                type: core.HostListener,
                args: ["keypress", ["$event"]]
            }], onKeyDown: [{
                type: core.HostListener,
                args: ["keydown", ["$event"]]
            }] }); })();

    var _c0$d = ["templateSibling"];
    function SuiMultiSelectLabel_span_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "span", 3);
    } if (rf & 2) {
        var ctx_r218 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("innerHTML", ctx_r218.formatter(ctx_r218.value), core["ɵɵsanitizeHtml"]);
    } }
    // See https://github.com/Microsoft/TypeScript/issues/13449.
    var templateRef$3 = core.TemplateRef;
    var SuiMultiSelectLabel = /** @class */ (function (_super) {
        __extends(SuiMultiSelectLabel, _super);
        function SuiMultiSelectLabel(renderer, element, changeDetector, componentFactory) {
            var _this = _super.call(this, renderer, element, changeDetector) || this;
            _this.componentFactory = componentFactory;
            // Initialise transition functionality.
            _this._transitionController = new TransitionController(false, "inline-block");
            _this.setTransitionController(_this._transitionController);
            _this.onDeselected = new core.EventEmitter();
            _this.hasClasses = true;
            _this._transitionController.animate(new Transition("scale", 100, exports.TransitionDirection.In));
            return _this;
        }
        Object.defineProperty(SuiMultiSelectLabel.prototype, "template", {
            get: function () {
                return this._template;
            },
            set: function (template) {
                this._template = template;
                if (this.template) {
                    this.componentFactory.createView(this.templateSibling, this.template, {
                        $implicit: this.value,
                        query: this.query
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        SuiMultiSelectLabel.prototype.deselectOption = function (e) {
            var _this = this;
            e.eventHandled = true;
            this._transitionController.animate(new Transition("scale", 100, exports.TransitionDirection.Out, function () {
                return _this.onDeselected.emit(_this.value);
            }));
        };
        SuiMultiSelectLabel.prototype.onClick = function (e) {
            e.eventHandled = true;
        };
        SuiMultiSelectLabel.ɵfac = function SuiMultiSelectLabel_Factory(t) { return new (t || SuiMultiSelectLabel)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ChangeDetectorRef), core["ɵɵdirectiveInject"](SuiComponentFactory)); };
        SuiMultiSelectLabel.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiMultiSelectLabel, selectors: [["sui-multi-select-label"]], viewQuery: function SuiMultiSelectLabel_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$d, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.templateSibling = _t.first);
            } }, hostVars: 4, hostBindings: function SuiMultiSelectLabel_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiMultiSelectLabel_click_HostBindingHandler($event) { return ctx.onClick($event); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("label", ctx.hasClasses);
            } }, inputs: { value: "value", query: "query", formatter: "formatter", template: "template" }, outputs: { onDeselected: "deselected" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 1, consts: [["templateSibling", ""], [3, "innerHTML", 4, "ngIf"], [1, "delete", "icon", 3, "click"], [3, "innerHTML"]], template: function SuiMultiSelectLabel_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "span", null, 0);
                core["ɵɵtemplate"](2, SuiMultiSelectLabel_span_2_Template, 1, 1, "span", 1);
                core["ɵɵelementStart"](3, "i", 2);
                core["ɵɵlistener"]("click", function SuiMultiSelectLabel_Template_i_click_3_listener($event) { return ctx.deselectOption($event); });
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", !ctx.template);
            } }, directives: [common.NgIf], encapsulation: 2 });
        return SuiMultiSelectLabel;
    }(SuiTransition));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiMultiSelectLabel, [{
            type: core.Component,
            args: [{
                    selector: "sui-multi-select-label",
                    template: "\n<span #templateSibling></span>\n<span *ngIf=\"!template\" [innerHTML]=\"formatter(value)\"></span>\n<i class=\"delete icon\" (click)=\"deselectOption($event)\"></i>\n"
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }, { type: core.ChangeDetectorRef }, { type: SuiComponentFactory }]; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.label"]
            }], value: [{
                type: core.Input
            }], query: [{
                type: core.Input
            }], onDeselected: [{
                type: core.Output,
                args: ["deselected"]
            }], formatter: [{
                type: core.Input
            }], template: [{
                type: core.Input
            }], templateSibling: [{
                type: core.ViewChild,
                args: ["templateSibling", { read: core.ViewContainerRef, static: true }]
            }], onClick: [{
                type: core.HostListener,
                args: ["click", ["$event"]]
            }] }); })();

    function SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template(rf, ctx) { if (rf & 1) {
        var _r227 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "sui-multi-select-label", 8);
        core["ɵɵlistener"]("deselected", function SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template_sui_multi_select_label_deselected_0_listener($event) { core["ɵɵrestoreView"](_r227); var ctx_r226 = core["ɵɵnextContext"](2); return ctx_r226.deselectOption($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var selected_r225 = ctx.$implicit;
        var ctx_r224 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("value", selected_r225)("query", ctx_r224.query)("formatter", ctx_r224.configuredFormatter)("template", ctx_r224.optionTemplate);
    } }
    function SuiMultiSelect_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, SuiMultiSelect_ng_container_1_sui_multi_select_label_1_Template, 1, 4, "sui-multi-select-label", 7);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r219 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r219.selectedOptions);
    } }
    function SuiMultiSelect_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtext"](1);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r220 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r220.placeholder);
    } }
    function SuiMultiSelect_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtext"](0);
    } if (rf & 2) {
        var ctx_r222 = core["ɵɵnextContext"]();
        core["ɵɵtextInterpolate1"](" ", ctx_r222.selectedMessage, "");
    } }
    function SuiMultiSelect_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 10);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r228 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r228.localeValues.noResultsMessage);
    } }
    function SuiMultiSelect_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 10);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r229 = core["ɵɵnextContext"](2);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r229.maxSelectedMessage);
    } }
    function SuiMultiSelect_ng_container_9_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementContainerStart"](0);
        core["ɵɵtemplate"](1, SuiMultiSelect_ng_container_9_div_1_Template, 2, 1, "div", 9);
        core["ɵɵtemplate"](2, SuiMultiSelect_ng_container_9_div_2_Template, 2, 1, "div", 9);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var ctx_r223 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !ctx_r223.maxSelectedReached);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r223.maxSelectedReached);
    } }
    var _c0$e = ["*"];
    var SuiMultiSelect = /** @class */ (function (_super) {
        __extends(SuiMultiSelect, _super);
        function SuiMultiSelect(element, localizationService) {
            var _this = _super.call(this, element, localizationService) || this;
            _this.selectedOptions = [];
            _this.selectedOptionsChange = new core.EventEmitter();
            _this.hasLabels = true;
            _this.hasClasses = true;
            return _this;
        }
        Object.defineProperty(SuiMultiSelect.prototype, "filteredOptions", {
            get: function () {
                var _this = this;
                if (this.maxSelectedReached) {
                    // If we have reached the maximum number of selections, then empty the results completely.
                    return [];
                }
                var searchResults = this.searchService.results;
                if (!this.hasLabels) {
                    return searchResults;
                }
                else {
                    // Returns the search results \ selected options.
                    return searchResults
                        .filter(function (r) { return _this.selectedOptions.find(function (o) { return r === o; }) == undefined; });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "availableOptions", {
            get: function () {
                return this.filteredOptions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "hasLabels", {
            get: function () {
                return this._hasLabels;
            },
            set: function (hasLabels) {
                this._hasLabels = hasLabels;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "placeholder", {
            get: function () {
                return this._placeholder || this.localeValues.multi.placeholder;
            },
            set: function (placeholder) {
                this._placeholder = placeholder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedReached", {
            get: function () {
                if (this.maxSelected == undefined) {
                    // If there is no maximum then we can immediately return.
                    return false;
                }
                return this.selectedOptions.length === this.maxSelected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "maxSelectedMessage", {
            get: function () {
                return this._localizationService.interpolate(this.localeValues.multi.maxSelectedMessage, [["max", this.maxSelected.toString()]]);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiMultiSelect.prototype, "selectedMessage", {
            get: function () {
                return this._localizationService.interpolate(this.localeValues.multi.selectedMessage, [["count", this.selectedOptions.length.toString()]]);
            },
            enumerable: true,
            configurable: true
        });
        SuiMultiSelect.prototype.optionsUpdateHook = function () {
            var _this = this;
            if (!this._writtenOptions && this.selectedOptions.length > 0) {
                // We need to check the options still exist.
                this.writeValue(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
            }
            if (this._writtenOptions && this.searchService.options.length > 0) {
                // If there were values written by ngModel before the options had been loaded, this runs to fix it.
                this.selectedOptions = this._writtenOptions
                    // non-null assertion added here because Typescript doesn't recognise the non-null filter.
                    .map(function (v) { return _this.findOption(_this.searchService.options, v); })
                    .filter(function (v) { return v != undefined; });
                if (this.selectedOptions.length === this._writtenOptions.length) {
                    this._writtenOptions = undefined;
                }
            }
        };
        SuiMultiSelect.prototype.initialiseRenderedOption = function (option) {
            _super.prototype.initialiseRenderedOption.call(this, option);
            // Boldens the item so it appears selected in the dropdown.
            option.isActive = !this.hasLabels && this.selectedOptions.indexOf(option.value) !== -1;
        };
        SuiMultiSelect.prototype.selectOption = function (option) {
            var _this = this;
            if (this.selectedOptions.indexOf(option) !== -1) {
                this.deselectOption(option);
                return;
            }
            this.selectedOptions.push(option);
            this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
            this.resetQuery(false);
            // Automatically refocus the search input for better keyboard accessibility.
            this.focus();
            if (!this.hasLabels) {
                this.onAvailableOptionsRendered();
            }
        };
        SuiMultiSelect.prototype.writeValue = function (values) {
            var _this = this;
            if (values instanceof Array) {
                if (this.searchService.options.length > 0) {
                    // If the options have already been loaded, we can immediately match the ngModel values to options.
                    this.selectedOptions = values
                        // non-null assertion added here because Typescript doesn't recognise the non-null filter.
                        .map(function (v) { return _this.findOption(_this.searchService.options, v); })
                        .filter(function (v) { return v != undefined; });
                }
                if (values.length > 0 && this.selectedOptions.length === 0) {
                    if (this.valueField && this.searchService.hasItemLookup) {
                        // If the search service has a selected lookup function, make use of that to load the initial values.
                        this.searchService
                            .initialLookup(values)
                            .then(function (items) { return _this.selectedOptions = items; });
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
        };
        SuiMultiSelect.prototype.deselectOption = function (option) {
            var _this = this;
            // Update selected options to the previously selected options \ {option}.
            this.selectedOptions = this.selectedOptions.filter(function (so) { return so !== option; });
            this.selectedOptionsChange.emit(this.selectedOptions.map(function (o) { return _this.valueGetter(o); }));
            // Automatically refocus the search input for better keyboard accessibility.
            this.focus();
            if (!this.hasLabels) {
                this.onAvailableOptionsRendered();
            }
        };
        SuiMultiSelect.prototype.onQueryInputKeydown = function (event) {
            if (event.keyCode === KeyCode.Backspace && this.query === "" && this.selectedOptions.length > 0) {
                // Deselect the rightmost option when the user presses backspace in the search input.
                this.deselectOption(this.selectedOptions[this.selectedOptions.length - 1]);
            }
        };
        SuiMultiSelect.ɵfac = function SuiMultiSelect_Factory(t) { return new (t || SuiMultiSelect)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](SuiLocalizationService)); };
        SuiMultiSelect.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiMultiSelect, selectors: [["sui-multi-select"]], hostVars: 2, hostBindings: function SuiMultiSelect_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("multiple", ctx.hasClasses);
            } }, inputs: { hasLabels: "hasLabels", placeholder: "placeholder", maxSelected: "maxSelected" }, outputs: { selectedOptionsChange: "selectedOptionsChange" }, features: [core["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0$e, decls: 10, vars: 15, consts: [[3, "click"], [4, "ngIf"], ["suiSelectSearch", "", "type", "text", 3, "hidden"], [1, "text"], [4, "ngIf", "ngIfElse"], ["selectedBlock", ""], ["suiDropdownMenu", "", 1, "menu", 3, "menuTransition", "menuTransitionDuration", "menuAutoSelectFirst"], [3, "value", "query", "formatter", "template", "deselected", 4, "ngFor", "ngForOf"], [3, "value", "query", "formatter", "template", "deselected"], ["class", "message", 4, "ngIf"], [1, "message"]], template: function SuiMultiSelect_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelementStart"](0, "i", 0);
                core["ɵɵlistener"]("click", function SuiMultiSelect_Template_i_click_0_listener($event) { return ctx.onCaretClick($event); });
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](1, SuiMultiSelect_ng_container_1_Template, 2, 1, "ng-container", 1);
                core["ɵɵelement"](2, "input", 2);
                core["ɵɵelementStart"](3, "div", 3);
                core["ɵɵtemplate"](4, SuiMultiSelect_ng_container_4_Template, 2, 1, "ng-container", 4);
                core["ɵɵtemplate"](5, SuiMultiSelect_ng_template_5_Template, 1, 1, "ng-template", null, 5, core["ɵɵtemplateRefExtractor"]);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](7, "div", 6);
                core["ɵɵprojection"](8);
                core["ɵɵtemplate"](9, SuiMultiSelect_ng_container_9_Template, 3, 2, "ng-container", 1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                var _r221 = core["ɵɵreference"](6);
                core["ɵɵclassMapInterpolate1"]("", ctx.icon, " icon");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.hasLabels);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("hidden", !ctx.isSearchable || ctx.isSearchExternal);
                core["ɵɵadvance"](1);
                core["ɵɵclassProp"]("default", ctx.hasLabels)("filtered", !!ctx.query && !ctx.isSearchExternal);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.hasLabels)("ngIfElse", _r221);
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration)("menuAutoSelectFirst", true);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", ctx.availableOptions.length == 0);
            } }, directives: [common.NgIf, SuiSelectSearch, SuiDropdownMenu, common.NgForOf, SuiMultiSelectLabel], styles: ["[_nghost-%COMP%]   input.search[_ngcontent-%COMP%] {\n    width: 12em !important;\n}"] });
        return SuiMultiSelect;
    }(SuiSelectBase));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiMultiSelect, [{
            type: core.Component,
            args: [{
                    selector: "sui-multi-select",
                    template: "\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n\n<ng-container *ngIf=\"hasLabels\">\n<!-- Multi-select labels -->\n    <sui-multi-select-label *ngFor=\"let selected of selectedOptions;\"\n                            [value]=\"selected\"\n                            [query]=\"query\"\n                            [formatter]=\"configuredFormatter\"\n                            [template]=\"optionTemplate\"\n                            (deselected)=\"deselectOption($event)\"></sui-multi-select-label>\n</ng-container>\n\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Helper text -->\n<div class=\"text\"\n     [class.default]=\"hasLabels\"\n     [class.filtered]=\"!!query && !isSearchExternal\">\n    \n    <!-- Placeholder text -->\n    <ng-container *ngIf=\"hasLabels; else selectedBlock\">{{ placeholder }}</ng-container>\n    \n    <!-- Summary shown when labels are hidden -->\n    <ng-template #selectedBlock> {{ selectedMessage }}</ng-template>\n</div>\n\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"true\">\n\n    <ng-content></ng-content>\n    <ng-container *ngIf=\"availableOptions.length == 0 \">\n        <div *ngIf=\"!maxSelectedReached\" class=\"message\">{{ localeValues.noResultsMessage }}</div>\n        <div *ngIf=\"maxSelectedReached\" class=\"message\">{{ maxSelectedMessage }}</div>\n    </ng-container>\n</div>\n",
                    styles: ["\n:host input.search {\n    width: 12em !important;\n}\n"]
                }]
        }], function () { return [{ type: core.ElementRef }, { type: SuiLocalizationService }]; }, { selectedOptionsChange: [{
                type: core.Output
            }], hasLabels: [{
                type: core.Input
            }], placeholder: [{
                type: core.Input
            }], maxSelected: [{
                type: core.Input
            }], hasClasses: [{
                type: core.HostBinding,
                args: ["class.multiple"]
            }] }); })();
    // Value accessor directive for the select to support ngModel.
    var SuiMultiSelectValueAccessor = /** @class */ (function (_super) {
        __extends(SuiMultiSelectValueAccessor, _super);
        function SuiMultiSelectValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiMultiSelectValueAccessor.ɵfac = function SuiMultiSelectValueAccessor_Factory(t) { return new (t || SuiMultiSelectValueAccessor)(core["ɵɵdirectiveInject"](SuiMultiSelect)); };
        SuiMultiSelectValueAccessor.ɵdir = core["ɵɵdefineDirective"]({ type: SuiMultiSelectValueAccessor, selectors: [["sui-multi-select"]], hostBindings: function SuiMultiSelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("selectedOptionsChange", function SuiMultiSelectValueAccessor_selectedOptionsChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiMultiSelectValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
            } }, features: [core["ɵɵProvidersFeature"]([customValueAccessorFactory(SuiMultiSelectValueAccessor)]), core["ɵɵInheritDefinitionFeature"]] });
        return SuiMultiSelectValueAccessor;
    }(CustomValueAccessor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiMultiSelectValueAccessor, [{
            type: core.Directive,
            args: [{
                    selector: "sui-multi-select",
                    host: {
                        "(selectedOptionsChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiMultiSelectValueAccessor)]
                }]
        }], function () { return [{ type: SuiMultiSelect }]; }, null); })();

    var _c0$f = ["optionTemplateSibling"];
    function SuiSelect_div_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 8);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r230 = core["ɵɵnextContext"]();
        core["ɵɵclassProp"]("filtered", ctx_r230.query);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r230.placeholder);
    } }
    function SuiSelect_span_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "span", 9);
    } if (rf & 2) {
        var ctx_r232 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("innerHTML", ctx_r232.configuredFormatter(ctx_r232.selectedOption), core["ɵɵsanitizeHtml"]);
    } }
    function SuiSelect_div_9_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 10);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r233 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", ctx_r233.localeValues.noResultsMessage, " ");
    } }
    var _c1$5 = ["*"];
    var SuiSelect = /** @class */ (function (_super) {
        __extends(SuiSelect, _super);
        function SuiSelect(element, localizationService) {
            var _this = _super.call(this, element, localizationService) || this;
            _this.selectedOptionChange = new core.EventEmitter();
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
        SuiSelect.ɵfac = function SuiSelect_Factory(t) { return new (t || SuiSelect)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](SuiLocalizationService)); };
        SuiSelect.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiSelect, selectors: [["sui-select"]], viewQuery: function SuiSelect_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$f, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._optionTemplateSibling = _t.first);
            } }, inputs: { placeholder: "placeholder" }, outputs: { selectedOptionChange: "selectedOptionChange" }, features: [core["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1$5, decls: 10, vars: 12, consts: [["suiSelectSearch", "", "type", "text", 3, "hidden"], ["class", "default text", 3, "filtered", 4, "ngIf"], [1, "text"], ["optionTemplateSibling", ""], [3, "innerHTML", 4, "ngIf"], [3, "click"], ["suiDropdownMenu", "", 1, "menu", 3, "menuTransition", "menuTransitionDuration", "menuAutoSelectFirst"], ["class", "message", 4, "ngIf"], [1, "default", "text"], [3, "innerHTML"], [1, "message"]], template: function SuiSelect_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵelement"](0, "input", 0);
                core["ɵɵtemplate"](1, SuiSelect_div_1_Template, 2, 3, "div", 1);
                core["ɵɵelementStart"](2, "div", 2);
                core["ɵɵelement"](3, "span", null, 3);
                core["ɵɵtemplate"](5, SuiSelect_span_5_Template, 1, 1, "span", 4);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](6, "i", 5);
                core["ɵɵlistener"]("click", function SuiSelect_Template_i_click_6_listener($event) { return ctx.onCaretClick($event); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](7, "div", 6);
                core["ɵɵprojection"](8);
                core["ɵɵtemplate"](9, SuiSelect_div_9_Template, 2, 1, "div", 7);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("hidden", !ctx.isSearchable || ctx.isSearchExternal);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.selectedOption == undefined);
                core["ɵɵadvance"](1);
                core["ɵɵclassProp"]("filtered", ctx.query || ctx.selectedOption == undefined);
                core["ɵɵadvance"](3);
                core["ɵɵproperty"]("ngIf", !ctx.optionTemplate && ctx.selectedOption != undefined);
                core["ɵɵadvance"](1);
                core["ɵɵclassMapInterpolate1"]("", ctx.icon, " icon");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("menuTransition", ctx.transition)("menuTransitionDuration", ctx.transitionDuration)("menuAutoSelectFirst", ctx.isSearchable);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngIf", ctx.isSearchable && ctx.availableOptions.length === 0);
            } }, directives: [SuiSelectSearch, common.NgIf, SuiDropdownMenu], encapsulation: 2 });
        return SuiSelect;
    }(SuiSelectBase));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSelect, [{
            type: core.Component,
            args: [{
                    selector: "sui-select",
                    template: "\n<!-- Query input -->\n<input suiSelectSearch\n       type=\"text\"\n       [hidden]=\"!isSearchable || isSearchExternal\">\n\n<!-- Placeholder text -->\n<div *ngIf=\"selectedOption == undefined\" class=\"default text\" [class.filtered]=\"query\">{{ placeholder }}</div>\n<!-- Selected item -->\n<div class=\"text\" [class.filtered]=\"query || selectedOption == undefined\">\n    <span #optionTemplateSibling></span>\n    <span *ngIf=\"!optionTemplate && selectedOption != undefined\" [innerHTML]=\"configuredFormatter(selectedOption)\"></span>\n</div>\n<!-- Dropdown icon -->\n<i class=\"{{ icon }} icon\" (click)=\"onCaretClick($event)\"></i>\n<!-- Select dropdown menu -->\n<div class=\"menu\"\n     suiDropdownMenu\n     [menuTransition]=\"transition\"\n     [menuTransitionDuration]=\"transitionDuration\"\n     [menuAutoSelectFirst]=\"isSearchable\">\n\n    <ng-content></ng-content>\n    <div *ngIf=\"isSearchable && availableOptions.length === 0\" class=\"message\">\n        {{ localeValues.noResultsMessage }}\n    </div>\n</div>\n"
                }]
        }], function () { return [{ type: core.ElementRef }, { type: SuiLocalizationService }]; }, { _optionTemplateSibling: [{
                type: core.ViewChild,
                args: ["optionTemplateSibling", { read: core.ViewContainerRef, static: true }]
            }], selectedOptionChange: [{
                type: core.Output
            }], placeholder: [{
                type: core.Input
            }] }); })();
    // Value accessor directive for the select to support ngModel.
    var SuiSelectValueAccessor = /** @class */ (function (_super) {
        __extends(SuiSelectValueAccessor, _super);
        function SuiSelectValueAccessor(host) {
            return _super.call(this, host) || this;
        }
        SuiSelectValueAccessor.ɵfac = function SuiSelectValueAccessor_Factory(t) { return new (t || SuiSelectValueAccessor)(core["ɵɵdirectiveInject"](SuiSelect)); };
        SuiSelectValueAccessor.ɵdir = core["ɵɵdefineDirective"]({ type: SuiSelectValueAccessor, selectors: [["sui-select"]], hostBindings: function SuiSelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("selectedOptionChange", function SuiSelectValueAccessor_selectedOptionChange_HostBindingHandler($event) { return ctx.onChange($event); })("touched", function SuiSelectValueAccessor_touched_HostBindingHandler($event) { return ctx.onTouched(); });
            } }, features: [core["ɵɵProvidersFeature"]([customValueAccessorFactory(SuiSelectValueAccessor)]), core["ɵɵInheritDefinitionFeature"]] });
        return SuiSelectValueAccessor;
    }(CustomValueAccessor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSelectValueAccessor, [{
            type: core.Directive,
            args: [{
                    selector: "sui-select",
                    host: {
                        "(selectedOptionChange)": "onChange($event)",
                        "(touched)": "onTouched()"
                    },
                    providers: [customValueAccessorFactory(SuiSelectValueAccessor)]
                }]
        }], function () { return [{ type: SuiSelect }]; }, null); })();

    var SuiSelectModule = /** @class */ (function () {
        function SuiSelectModule() {
        }
        SuiSelectModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiSelectModule });
        SuiSelectModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiSelectModule_Factory(t) { return new (t || SuiSelectModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    SuiDropdownModule,
                    SuiUtilityModule,
                    SuiLocalizationModule
                ]] });
        return SuiSelectModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiSelectModule, { declarations: [SuiSelect,
            SuiSelectOption,
            SuiSelectSearch,
            SuiSelectValueAccessor,
            SuiMultiSelect,
            SuiMultiSelectLabel,
            SuiMultiSelectValueAccessor], imports: [common.CommonModule,
            forms.FormsModule,
            SuiDropdownModule,
            SuiUtilityModule,
            SuiLocalizationModule], exports: [SuiSelect,
            SuiSelectOption,
            SuiSelectSearch,
            SuiSelectValueAccessor,
            SuiMultiSelect,
            SuiMultiSelectValueAccessor] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSelectModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
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

    var SidebarTransition = {
        Overlay: "overlay",
        Push: "push",
        ScaleDown: "scale down",
        Uncover: "uncover",
        SlideAlong: "slide along",
        SlideOut: "slide out"
    };
    var SidebarDirection = {
        Left: "left",
        Right: "right",
        Top: "top",
        Bottom: "bottom"
    };
    var SidebarService = /** @class */ (function () {
        function SidebarService(isVisible) {
            if (isVisible === void 0) { isVisible = false; }
            this.isVisible = isVisible;
            this.isAnimating = false;
            this.wasJustOpened = false;
            this.isVisibleChange = new core.EventEmitter();
            this.widthChange = new core.EventEmitter();
            this.heightChange = new core.EventEmitter();
            this.width = 260;
            this.height = 0;
            this.transition = SidebarTransition.Uncover;
        }
        Object.defineProperty(SidebarService.prototype, "width", {
            get: function () {
                if (this.direction === SidebarDirection.Left) {
                    return this._width;
                }
                if (this.direction === SidebarDirection.Right) {
                    return -this._width;
                }
                return 0;
            },
            set: function (width) {
                this._width = width;
                this.widthChange.emit();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SidebarService.prototype, "height", {
            get: function () {
                if (this.direction === SidebarDirection.Top) {
                    return this._height;
                }
                if (this.direction === SidebarDirection.Bottom) {
                    return -this._height;
                }
                return 0;
            },
            set: function (height) {
                this._height = height;
                this.heightChange.emit();
            },
            enumerable: true,
            configurable: true
        });
        SidebarService.prototype.setVisibleState = function (isVisible) {
            var _this = this;
            if (this.isVisible !== isVisible) {
                this.isVisible = isVisible;
                this.isAnimating = true;
                this.wasJustOpened = true;
                this.isVisibleChange.emit(isVisible);
                setTimeout(function () { return _this.wasJustOpened = false; });
                clearTimeout(this._isAnimatingTimeout);
                this._isAnimatingTimeout = window.setTimeout(function () { return _this.isAnimating = false; }, 500);
            }
        };
        SidebarService.prototype.toggleVisibleState = function () {
            this.setVisibleState(!this.isVisible);
        };
        return SidebarService;
    }());

    var _c0$g = ["*"];
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
        SuiSidebar.ɵfac = function SuiSidebar_Factory(t) { return new (t || SuiSidebar)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef)); };
        SuiSidebar.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiSidebar, selectors: [["sui-sidebar"]], hostVars: 10, hostBindings: function SuiSidebar_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("ui", ctx.hasClasses)("sidebar", ctx.hasClasses)("menu", ctx.hasClasses)("visible", ctx.isVisible)("animating", ctx.isAnimating);
            } }, inputs: { transition: "transition", direction: "direction", isVisible: "isVisible" }, outputs: { isVisibleChange: "isVisibleChange" }, ngContentSelectors: _c0$g, decls: 1, vars: 0, template: function SuiSidebar_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵprojection"](0);
            } }, encapsulation: 2 });
        return SuiSidebar;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSidebar, [{
            type: core.Component,
            args: [{
                    selector: "sui-sidebar",
                    template: "<ng-content></ng-content>"
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }]; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.ui"]
            }, {
                type: core.HostBinding,
                args: ["class.sidebar"]
            }, {
                type: core.HostBinding,
                args: ["class.menu"]
            }], transition: [{
                type: core.Input
            }], direction: [{
                type: core.Input
            }], isVisible: [{
                type: core.HostBinding,
                args: ["class.visible"]
            }, {
                type: core.Input
            }], isVisibleChange: [{
                type: core.Output
            }], isAnimating: [{
                type: core.HostBinding,
                args: ["class.animating"]
            }] }); })();

    var _c0$h = ["*"];
    var SuiSidebarSibling = /** @class */ (function () {
        function SuiSidebarSibling(_renderer, _element) {
            this._renderer = _renderer;
            this._element = _element;
            this.isDimmedWhenVisible = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiSidebarSibling.prototype, "service", {
            get: function () {
                return this._service;
            },
            set: function (service) {
                var _this = this;
                this._service = service;
                setTimeout(function () { return _this.updateTransform(); });
                this._service.isVisibleChange.subscribe(function () { return _this.updateTransform(); });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSidebarSibling.prototype, "isVisible", {
            get: function () {
                if (!this.service) {
                    return false;
                }
                return this.service.isVisible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiSidebarSibling.prototype, "isDimmed", {
            get: function () {
                if (!this.service) {
                    return false;
                }
                return this.service.isVisible && this.isDimmedWhenVisible;
            },
            enumerable: true,
            configurable: true
        });
        SuiSidebarSibling.prototype.updateTransform = function () {
            this._renderer.removeStyle(this._element.nativeElement, "transform");
            this._renderer.removeStyle(this._element.nativeElement, "-webkit-transform");
            if (this.service.isVisible &&
                this.service.transition !== SidebarTransition.Overlay &&
                this.service.transition !== SidebarTransition.ScaleDown) {
                var translate = "translate3d(" + this.service.width + "px, " + this.service.height + "px, 0)";
                this._renderer.setStyle(this._element.nativeElement, "transform", translate);
                this._renderer.setStyle(this._element.nativeElement, "-webkit-transform", translate);
            }
        };
        SuiSidebarSibling.prototype.onClick = function (event) {
            if (this.service.isVisible && !this.service.wasJustOpened) {
                this.service.setVisibleState(false);
            }
        };
        SuiSidebarSibling.ɵfac = function SuiSidebarSibling_Factory(t) { return new (t || SuiSidebarSibling)(core["ɵɵdirectiveInject"](core.Renderer2), core["ɵɵdirectiveInject"](core.ElementRef)); };
        SuiSidebarSibling.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiSidebarSibling, selectors: [["sui-sidebar-sibling"]], hostVars: 6, hostBindings: function SuiSidebarSibling_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiSidebarSibling_click_HostBindingHandler($event) { return ctx.onClick($event); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("visible", ctx.isVisible)("dimmed", ctx.isDimmed)("pusher", ctx.hasClasses);
            } }, inputs: { isDimmedWhenVisible: "isDimmedWhenVisible" }, ngContentSelectors: _c0$h, decls: 1, vars: 0, template: function SuiSidebarSibling_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵprojection"](0);
            } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}"] });
        return SuiSidebarSibling;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSidebarSibling, [{
            type: core.Component,
            args: [{
                    selector: "sui-sidebar-sibling",
                    template: "<ng-content></ng-content>",
                    styles: ["\n:host {\n    display: block;\n}\n"]
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }]; }, { isDimmedWhenVisible: [{
                type: core.Input
            }], isVisible: [{
                type: core.HostBinding,
                args: ["class.visible"]
            }], isDimmed: [{
                type: core.HostBinding,
                args: ["class.dimmed"]
            }], hasClasses: [{
                type: core.HostBinding,
                args: ["class.pusher"]
            }], onClick: [{
                type: core.HostListener,
                args: ["click", ["$event"]]
            }] }); })();

    var _c0$i = ["*"];
    var SuiSidebarContainer = /** @class */ (function () {
        function SuiSidebarContainer() {
            this.hasClasses = true;
        }
        SuiSidebarContainer.prototype.ngAfterContentInit = function () {
            if (!this.sidebar) {
                throw new Error("You must include a <sui-sidebar> element within the container.");
            }
            this.service = this.sidebar.service;
            if (!this.sibling) {
                throw new Error("You must include a <sui-sidebar-sibling> element within the container.");
            }
            this.sibling.service = this.service;
        };
        SuiSidebarContainer.ɵfac = function SuiSidebarContainer_Factory(t) { return new (t || SuiSidebarContainer)(); };
        SuiSidebarContainer.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiSidebarContainer, selectors: [["sui-sidebar-container"]], contentQueries: function SuiSidebarContainer_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, SuiSidebar, true);
                core["ɵɵcontentQuery"](dirIndex, SuiSidebarSibling, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.sidebar = _t.first);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.sibling = _t.first);
            } }, hostVars: 2, hostBindings: function SuiSidebarContainer_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("pushable", ctx.hasClasses);
            } }, ngContentSelectors: _c0$i, decls: 1, vars: 0, template: function SuiSidebarContainer_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵprojection"](0);
            } }, styles: ["[_nghost-%COMP%] {\n    display: block;\n}"] });
        return SuiSidebarContainer;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSidebarContainer, [{
            type: core.Component,
            args: [{
                    selector: "sui-sidebar-container",
                    template: "<ng-content></ng-content>",
                    styles: ["\n:host {\n    display: block;\n}\n"]
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.pushable"]
            }], sidebar: [{
                type: core.ContentChild,
                args: [SuiSidebar, /* TODO: add static flag */ {}]
            }], sibling: [{
                type: core.ContentChild,
                args: [SuiSidebarSibling, /* TODO: add static flag */ {}]
            }] }); })();

    var SuiSidebarModule = /** @class */ (function () {
        function SuiSidebarModule() {
        }
        SuiSidebarModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiSidebarModule });
        SuiSidebarModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiSidebarModule_Factory(t) { return new (t || SuiSidebarModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return SuiSidebarModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiSidebarModule, { declarations: [SuiSidebar,
            SuiSidebarContainer,
            SuiSidebarSibling], imports: [common.CommonModule], exports: [SuiSidebar,
            SuiSidebarContainer,
            SuiSidebarSibling] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiSidebarModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
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

    var Tab = /** @class */ (function () {
        function Tab(header, content) {
            var _this = this;
            this.id = header.id;
            this.header = header;
            this.content = content;
            // So that the header and content isActive properties are always in sync.
            this.header.isActiveChange
                .subscribe(function () { return _this.content.isActive = _this.isActive; });
        }
        Object.defineProperty(Tab.prototype, "isActive", {
            // Saves accessing .header.isActive every time.
            get: function () {
                return this.header.isActive;
            },
            set: function (active) {
                // Use `setActiveState` so as not to fire 'external changes' event.
                this.header.setActiveState(active);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tab.prototype, "isDisabled", {
            // Saves accessing .header.isDisabled every time.
            get: function () {
                return this.header.isDisabled;
            },
            enumerable: true,
            configurable: true
        });
        return Tab;
    }());

    var SuiTabHeader = /** @class */ (function () {
        function SuiTabHeader() {
            this._isActive = false;
            this.isActiveChange = new core.EventEmitter();
            this.isActiveExternalChange = new core.EventEmitter();
            this.onActivate = new core.EventEmitter();
            this.onDeactivate = new core.EventEmitter();
            this.isDisabled = false;
            this.hasClasses = true;
        }
        Object.defineProperty(SuiTabHeader.prototype, "isActive", {
            get: function () {
                return this._isActive;
            },
            set: function (active) {
                var _this = this;
                var isActive = active;
                // Only used by @Input(), runs whenever user input changes `isActive`.
                // Run in timeout because `isDisabled` can prohibit user from changing `isActive`.
                // so update is delayed to avoid 'changed after checked' error.
                setTimeout(function () {
                    // Only allow change if tab header is not disabled.
                    isActive = !_this.isDisabled ? active : false;
                    _this.setActiveState(isActive);
                    // Fire 'external change' event as user input has occured.
                    _this.isActiveExternalChange.emit(isActive);
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SuiTabHeader.prototype, "isDisabled", {
            get: function () {
                return this._isDisabled;
            },
            set: function (disabled) {
                // Only update if value provided is different to current one.
                if (this._isDisabled !== disabled) {
                    this._isDisabled = disabled;
                    // If now disabled, then tab header must be deactivated.
                    if (this.isDisabled) {
                        this.isActive = false;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        // Internally update active state.
        SuiTabHeader.prototype.setActiveState = function (active) {
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
        };
        SuiTabHeader.prototype.onClick = function () {
            if (!this.isDisabled) {
                // Activate the tab when clicked, so long as it isn't disabled.
                this.isActive = true;
            }
        };
        SuiTabHeader.ɵfac = function SuiTabHeader_Factory(t) { return new (t || SuiTabHeader)(); };
        SuiTabHeader.ɵdir = core["ɵɵdefineDirective"]({ type: SuiTabHeader, selectors: [["", "suiTabHeader", ""]], hostVars: 6, hostBindings: function SuiTabHeader_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("click", function SuiTabHeader_click_HostBindingHandler($event) { return ctx.onClick(); });
            } if (rf & 2) {
                core["ɵɵclassProp"]("item", ctx.hasClasses)("active", ctx.isActive)("disabled", ctx.isDisabled);
            } }, inputs: { id: ["suiTabHeader", "id"], isActive: "isActive", isDisabled: "isDisabled" }, outputs: { isActiveChange: "isActiveChange", onActivate: "activate", onDeactivate: "deactivate" } });
        return SuiTabHeader;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiTabHeader, [{
            type: core.Directive,
            args: [{
                    selector: "[suiTabHeader]"
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.item"]
            }], id: [{
                type: core.Input,
                args: ["suiTabHeader"]
            }], isActiveChange: [{
                type: core.Output
            }], onActivate: [{
                type: core.Output,
                args: ["activate"]
            }], onDeactivate: [{
                type: core.Output,
                args: ["deactivate"]
            }], isActive: [{
                type: core.HostBinding,
                args: ["class.active"]
            }, {
                type: core.Input
            }], isDisabled: [{
                type: core.HostBinding,
                args: ["class.disabled"]
            }, {
                type: core.Input
            }], onClick: [{
                type: core.HostListener,
                args: ["click"]
            }] }); })();

    var SuiTabContent = /** @class */ (function () {
        function SuiTabContent() {
            this.isActive = false;
            this.hasClasses = true;
        }
        SuiTabContent.ɵfac = function SuiTabContent_Factory(t) { return new (t || SuiTabContent)(); };
        SuiTabContent.ɵdir = core["ɵɵdefineDirective"]({ type: SuiTabContent, selectors: [["", "suiTabContent", ""]], hostVars: 4, hostBindings: function SuiTabContent_HostBindings(rf, ctx) { if (rf & 2) {
                core["ɵɵclassProp"]("tab", ctx.hasClasses)("active", ctx.isActive);
            } }, inputs: { id: ["suiTabContent", "id"] } });
        return SuiTabContent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiTabContent, [{
            type: core.Directive,
            args: [{
                    selector: "[suiTabContent]"
                }]
        }], function () { return []; }, { hasClasses: [{
                type: core.HostBinding,
                args: ["class.tab"]
            }], id: [{
                type: core.Input,
                args: ["suiTabContent"]
            }], isActive: [{
                type: core.HostBinding,
                args: ["class.active"]
            }] }); })();

    var _c0$j = ["*"];
    var SuiTabset = /** @class */ (function () {
        function SuiTabset() {
            this.tabs = [];
            this._barrierCount = 0;
        }
        Object.defineProperty(SuiTabset.prototype, "activeTab", {
            get: function () {
                return this._activeTab;
            },
            // When setting a tab as the currently active tab, it automatically gains
            // `isActive` status (saves littering `isActive = true` everywhere).
            set: function (tab) {
                this._activeTab = tab;
                tab.isActive = true;
            },
            enumerable: true,
            configurable: true
        });
        SuiTabset.prototype.ngAfterContentInit = function () {
            var _this = this;
            // Fire `internalComponentsUpdated` when the query lists change.
            this._tabHeaders.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
            this._tabContents.changes.subscribe(function () { return _this.internalComponentsUpdated(); });
            // Initially load the tabs.
            this.loadTabs();
        };
        // Fires whenever either the tab headers or tab contents query lists update.
        SuiTabset.prototype.internalComponentsUpdated = function () {
            // We are using a 'counting barrier of n = 2', i.e. the code within only runs after the method is called twice.
            // This is so that both the headers and contents query lists can update before we run code that matches the two up.
            this._barrierCount++;
            if (this._barrierCount === 2) {
                // Reset the barrier so it can be called again.
                this._barrierCount = 0;
                // Update the tabs.
                this.loadTabs();
            }
        };
        // Connects tab headers to tab contents, and creates a tab instance for each pairing.
        SuiTabset.prototype.loadTabs = function () {
            var _this = this;
            // Remove any tabs that no longer have an associated header.
            this.tabs = this.tabs.filter(function (t) { return !!_this._tabHeaders.find(function (tH) { return tH === t.header; }); });
            this._tabHeaders
                // Filter out the loaded headers with attached tab instances.
                .filter(function (tH) { return !_this.tabs.find(function (t) { return t.header === tH; }); })
                .forEach(function (tH) {
                var content = _this._tabContents.find(function (tC) { return tC.id === tH.id; });
                if (!content) {
                    // Error if an associated tab content cannot be found for the given header.
                    throw new Error("A [suiTabHeader] must have a related [suiTabContent].");
                }
                // Create a new tab instance for this header & content combo.
                var tab = new Tab(tH, content);
                // Subscribe to any external changes in the tab header's active state. External changes are triggered by user input.
                tab.header.isActiveExternalChange.subscribe(function () { return _this.onHeaderActiveChanged(tab); });
                // Add the new instance to the list of tabs.
                _this.tabs.push(tab);
            });
            // Assign each tab an index (which denotes the order they physically appear in).
            this._tabHeaders
                .forEach(function (tH, i) {
                var tab = _this.tabs.find(function (t) { return t.header === tH; });
                if (tab) {
                    tab.index = i;
                }
            });
            // Sort the tabs by their index.
            this.tabs.sort(function (a, b) { return a.index - b.index; });
            if (!this.activeTab) { // Check if there are no current existing active tabs.
                // If so, we must activate the first available tab.
                this.activateFirstTab();
            }
            else if (!this.tabs.find(function (t) { return t === _this.activeTab; })) { // O'wise check if current active tab has been deleted.
                // If so, we must find the closest.
                // Use `setTimeout` as this causes a 'changed after checked' error o'wise.
                setTimeout(function () { return _this.activateClosestTab(_this.activeTab); });
            }
            if (this.tabs.length === 0) {
                // Error if there aren't any tabs in the tabset.
                throw new Error("You cannot have no tabs!");
            }
        };
        // Fires whenever a tab header's active state is externally changed.
        SuiTabset.prototype.onHeaderActiveChanged = function (tab) {
            // If the tab has become activated, but was not previously the active tab:
            if (tab.isActive && this.activeTab !== tab) {
                // Deactivate all of the tabs.
                this.tabs.filter(function (t) { return t !== tab; }).forEach(function (t) { return t.isActive = false; });
                // Set the currently active tab to this one.
                this.activeTab = tab;
            }
            // If the tab has become deactivated, but was previously the active tab:
            if (!tab.isActive && this.activeTab === tab) {
                // Activate the closest tab to it.
                this.activateClosestTab(tab);
            }
        };
        // Activate the first tab in the set.
        SuiTabset.prototype.activateFirstTab = function () {
            this.activeTab = this.tabs[0];
        };
        // Activates the closest available tab to a given one.
        SuiTabset.prototype.activateClosestTab = function (tab) {
            var nextAvailable;
            // When the exited tab's index is higher than all available tabs,
            if (tab.index >= this.tabs.length) {
                // Activate the last tab.
                nextAvailable = this.tabs[this.tabs.length - 1];
            }
            // If that didn't work, try the following cases:
            if (!nextAvailable) {
                if (!this.tabs.find(function (t) { return t === tab; })) { // When the exited tab no longer exists,
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
        };
        SuiTabset.ɵfac = function SuiTabset_Factory(t) { return new (t || SuiTabset)(); };
        SuiTabset.ɵcmp = core["ɵɵdefineComponent"]({ type: SuiTabset, selectors: [["sui-tabset"]], contentQueries: function SuiTabset_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core["ɵɵcontentQuery"](dirIndex, SuiTabHeader, true);
                core["ɵɵcontentQuery"](dirIndex, SuiTabContent, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._tabHeaders = _t);
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx._tabContents = _t);
            } }, ngContentSelectors: _c0$j, decls: 1, vars: 0, template: function SuiTabset_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵprojectionDef"]();
                core["ɵɵprojection"](0);
            } }, encapsulation: 2 });
        return SuiTabset;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiTabset, [{
            type: core.Component,
            args: [{
                    selector: "sui-tabset",
                    template: "<ng-content></ng-content>"
                }]
        }], function () { return []; }, { _tabHeaders: [{
                type: core.ContentChildren,
                args: [SuiTabHeader, { descendants: true }]
            }], _tabContents: [{
                type: core.ContentChildren,
                args: [SuiTabContent, { descendants: true }]
            }] }); })();

    var SuiTabsModule = /** @class */ (function () {
        function SuiTabsModule() {
        }
        SuiTabsModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiTabsModule });
        SuiTabsModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiTabsModule_Factory(t) { return new (t || SuiTabsModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return SuiTabsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiTabsModule, { declarations: [SuiTabset,
            SuiTabHeader,
            SuiTabContent], imports: [common.CommonModule], exports: [SuiTabset,
            SuiTabHeader,
            SuiTabContent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiTabsModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule
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

    var SuiModule = /** @class */ (function () {
        function SuiModule() {
        }
        SuiModule.ɵmod = core["ɵɵdefineNgModule"]({ type: SuiModule });
        SuiModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function SuiModule_Factory(t) { return new (t || SuiModule)(); }, imports: [
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
        return SuiModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](SuiModule, { exports: [
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
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SuiModule, [{
            type: core.NgModule,
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

    exports.ActiveModal = ActiveModal;
    exports.ComponentModalConfig = ComponentModalConfig;
    exports.DatepickerMode = DatepickerMode;
    exports.DropdownAutoCloseType = DropdownAutoCloseType;
    exports.Modal = Modal;
    exports.ModalConfig = ModalConfig;
    exports.ModalControls = ModalControls;
    exports.ModalSize = ModalSize;
    exports.ModalTemplate = ModalTemplate;
    exports.PopupConfig = PopupConfig;
    exports.PopupPlacement = PositioningPlacement;
    exports.PopupTrigger = PopupTrigger;
    exports.PositioningPlacement = PositioningPlacement;
    exports.SearchService = SearchService;
    exports.SidebarDirection = SidebarDirection;
    exports.SidebarTransition = SidebarTransition;
    exports.SuiAccordion = SuiAccordion;
    exports.SuiAccordionModule = SuiAccordionModule;
    exports.SuiAccordionPanel = SuiAccordionPanel;
    exports.SuiActiveModal = ActiveModal;
    exports.SuiCheckbox = SuiCheckbox;
    exports.SuiCheckboxModule = SuiCheckboxModule;
    exports.SuiCheckboxValueAccessor = SuiCheckboxValueAccessor;
    exports.SuiCollapse = SuiCollapse;
    exports.SuiCollapseModule = SuiCollapseModule;
    exports.SuiComponentFactory = SuiComponentFactory;
    exports.SuiDatepickerDirective = SuiDatepickerDirective;
    exports.SuiDatepickerDirectiveValidator = SuiDatepickerDirectiveValidator;
    exports.SuiDatepickerDirectiveValueAccessor = SuiDatepickerDirectiveValueAccessor;
    exports.SuiDatepickerInputDirective = SuiDatepickerInputDirective;
    exports.SuiDatepickerModule = SuiDatepickerModule;
    exports.SuiDimmer = SuiDimmer;
    exports.SuiDimmerModule = SuiDimmerModule;
    exports.SuiDropdown = SuiDropdown;
    exports.SuiDropdownMenu = SuiDropdownMenu;
    exports.SuiDropdownMenuItem = SuiDropdownMenuItem;
    exports.SuiDropdownModule = SuiDropdownModule;
    exports.SuiLocalizationModule = SuiLocalizationModule;
    exports.SuiLocalizationService = SuiLocalizationService;
    exports.SuiMessage = SuiMessage;
    exports.SuiMessageModule = SuiMessageModule;
    exports.SuiModal = SuiModal;
    exports.SuiModalModule = SuiModalModule;
    exports.SuiModalService = SuiModalService;
    exports.SuiModule = SuiModule;
    exports.SuiMultiSelect = SuiMultiSelect;
    exports.SuiMultiSelectValueAccessor = SuiMultiSelectValueAccessor;
    exports.SuiPagination = SuiPagination;
    exports.SuiPaginationModule = SuiPaginationModule;
    exports.SuiPopup = SuiPopup;
    exports.SuiPopupConfig = SuiPopupConfig;
    exports.SuiPopupDirective = SuiPopupDirective;
    exports.SuiPopupModule = SuiPopupModule;
    exports.SuiPopupTemplateController = SuiPopupTemplateController;
    exports.SuiProgress = SuiProgress;
    exports.SuiProgressModule = SuiProgressModule;
    exports.SuiRadio = SuiRadio;
    exports.SuiRadioManager = SuiRadioManager;
    exports.SuiRadioValueAccessor = SuiRadioValueAccessor;
    exports.SuiRating = SuiRating;
    exports.SuiRatingModule = SuiRatingModule;
    exports.SuiRatingValueAccessor = SuiRatingValueAccessor;
    exports.SuiSearch = SuiSearch;
    exports.SuiSearchModule = SuiSearchModule;
    exports.SuiSelect = SuiSelect;
    exports.SuiSelectModule = SuiSelectModule;
    exports.SuiSelectOption = SuiSelectOption;
    exports.SuiSelectSearch = SuiSelectSearch;
    exports.SuiSelectValueAccessor = SuiSelectValueAccessor;
    exports.SuiSidebar = SuiSidebar;
    exports.SuiSidebarContainer = SuiSidebarContainer;
    exports.SuiSidebarModule = SuiSidebarModule;
    exports.SuiSidebarSibling = SuiSidebarSibling;
    exports.SuiTabContent = SuiTabContent;
    exports.SuiTabHeader = SuiTabHeader;
    exports.SuiTabsModule = SuiTabsModule;
    exports.SuiTabset = SuiTabset;
    exports.SuiTransition = SuiTransition;
    exports.SuiTransitionModule = SuiTransitionModule;
    exports.SuiUtilityModule = SuiUtilityModule;
    exports.TemplateModalConfig = TemplateModalConfig;
    exports.Transition = Transition;
    exports.TransitionController = TransitionController;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-semantic-ui.umd.js.map
