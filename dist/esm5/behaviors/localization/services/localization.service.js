import { __read } from "tslib";
import { Injectable, EventEmitter } from "@angular/core";
import enGB from "../locales/en-GB";
import * as $extend from "extend";
import * as i0 from "@angular/core";
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function deepExtend(target, source) {
    // Rollup...
    var extend = $extend.default || $extend;
    return extend(true, target, source);
}
function lang(language) {
    return language.toLowerCase().replace("-", "");
}
var SuiLocalizationService = /** @class */ (function () {
    function SuiLocalizationService() {
        this.onLanguageUpdate = new EventEmitter();
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
    SuiLocalizationService.ɵprov = i0.ɵɵdefineInjectable({ token: SuiLocalizationService, factory: SuiLocalizationService.ɵfac });
    return SuiLocalizationService;
}());
export { SuiLocalizationService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiLocalizationService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc2VtYW50aWMtdWkvIiwic291cmNlcyI6WyJiZWhhdmlvcnMvbG9jYWxpemF0aW9uL3NlcnZpY2VzL2xvY2FsaXphdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQzs7QUFFbEMsU0FBUyxTQUFTLENBQUksR0FBSztJQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBTyxNQUFRLEVBQUUsTUFBUTtJQUN4QyxZQUFZO0lBQ1osSUFBTSxNQUFNLEdBQUksT0FBZSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUM7SUFDbkQsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsU0FBUyxJQUFJLENBQUMsUUFBZTtJQUN6QixPQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFNRDtJQWFJO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWJELHNCQUFXLDRDQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBYU0sNENBQVcsR0FBbEIsVUFBbUIsUUFBZTtRQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7SUFFTSxvQ0FBRyxHQUFWLFVBQVcsUUFBK0I7UUFBL0IseUJBQUEsRUFBQSxXQUFrQixJQUFJLENBQUMsUUFBUTtRQUN0QyxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBVSxRQUFRLG1CQUFnQixDQUFDLENBQUM7U0FDdkQ7UUFDRCxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0seUNBQVEsR0FBZixVQUNJLE1BQXVCLEVBQ3ZCLFNBQTRDO1FBRTVDLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0scUNBQUksR0FBWCxVQUFZLFFBQWUsRUFBRSxNQUEyQjtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLHNDQUFLLEdBQVosVUFBYSxRQUFlLEVBQUUsTUFBMkI7UUFDckQsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLDRDQUFXLEdBQWxCLFVBQW1CLEtBQVksRUFBRSxTQUE0QjtRQUN6RCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsRUFBTTtnQkFBTixrQkFBTSxFQUFMLFNBQUMsRUFBRSxTQUFDO1lBQU0sT0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQUssQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQXhDLENBQXdDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUYsQ0FBQztnR0F2RFEsc0JBQXNCO2tFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO2lDQXhCbkM7Q0FnRkMsQUF6REQsSUF5REM7U0F4RFksc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJTG9jYWxlVmFsdWVzLCBJUGFydGlhbExvY2FsZVZhbHVlcywgUmVjdXJzaXZlUGFydGlhbCB9IGZyb20gXCIuLi9sb2NhbGVzL2ludGVyZmFjZXMvdmFsdWVzXCI7XG5pbXBvcnQgZW5HQiBmcm9tIFwiLi4vbG9jYWxlcy9lbi1HQlwiO1xuaW1wb3J0ICogYXMgJGV4dGVuZCBmcm9tIFwiZXh0ZW5kXCI7XG5cbmZ1bmN0aW9uIGRlZXBDbG9uZTxUPihvYmo6VCk6VCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIGRlZXBFeHRlbmQ8VCwgVT4odGFyZ2V0OlQsIHNvdXJjZTpVKTpUICYgVSB7XG4gICAgLy8gUm9sbHVwLi4uXG4gICAgY29uc3QgZXh0ZW5kID0gKCRleHRlbmQgYXMgYW55KS5kZWZhdWx0IHx8ICRleHRlbmQ7XG4gICAgcmV0dXJuIGV4dGVuZCh0cnVlLCB0YXJnZXQsIHNvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIGxhbmcobGFuZ3VhZ2U6c3RyaW5nKTpzdHJpbmcge1xuICAgIHJldHVybiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCItXCIsIFwiXCIpO1xufVxuXG5pbnRlcmZhY2UgSUxvY2FsaXphdGlvblZhbHVlc0NvbnRhaW5lciB7XG4gICAgW25hbWU6c3RyaW5nXTpJUGFydGlhbExvY2FsZVZhbHVlcztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1aUxvY2FsaXphdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2xhbmd1YWdlOnN0cmluZztcblxuICAgIHByaXZhdGUgX2ZhbGxiYWNrVmFsdWVzOklMb2NhbGVWYWx1ZXM7XG4gICAgcHJpdmF0ZSBfdmFsdWVzOklMb2NhbGl6YXRpb25WYWx1ZXNDb250YWluZXI7XG5cbiAgICBwdWJsaWMgZ2V0IGxhbmd1YWdlKCk6c3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxhbmd1YWdlVXBkYXRlOkV2ZW50RW1pdHRlcjx2b2lkPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9uTGFuZ3VhZ2VVcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICAgICAgdGhpcy5fZmFsbGJhY2tWYWx1ZXMgPSBlbkdCO1xuICAgICAgICB0aGlzLl92YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2UgPSBcImVuLUdCXCI7XG4gICAgICAgIHRoaXMubG9hZChcImVuLUdCXCIsIGVuR0IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRMYW5ndWFnZShsYW5ndWFnZTpzdHJpbmcpOnZvaWQge1xuICAgICAgICBpZiAobGFuZyh0aGlzLl9sYW5ndWFnZSkgIT09IGxhbmcobGFuZ3VhZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLl9sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgICAgICAgICAgdGhpcy5vbkxhbmd1YWdlVXBkYXRlLmVtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQobGFuZ3VhZ2U6c3RyaW5nID0gdGhpcy5sYW5ndWFnZSk6SUxvY2FsZVZhbHVlcyB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGRlZXBDbG9uZSh0aGlzLl9mYWxsYmFja1ZhbHVlcyk7XG4gICAgICAgIGlmICghdGhpcy5fdmFsdWVzW2xhbmcobGFuZ3VhZ2UpXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMb2NhbGUgJHtsYW5ndWFnZX0gaXMgbm90IGxvYWRlZGApO1xuICAgICAgICB9XG4gICAgICAgIGRlZXBFeHRlbmQodmFsdWVzLCB0aGlzLl92YWx1ZXNbbGFuZyhsYW5ndWFnZSldKTtcbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh2YWx1ZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZTxUIGV4dGVuZHMga2V5b2YgSUxvY2FsZVZhbHVlcz4oXG4gICAgICAgIHZhbHVlczpJTG9jYWxlVmFsdWVzW1RdLFxuICAgICAgICBvdmVycmlkZXM6UmVjdXJzaXZlUGFydGlhbDxJTG9jYWxlVmFsdWVzW1RdPlxuICAgICk6SUxvY2FsZVZhbHVlc1tUXSB7XG4gICAgICAgIHJldHVybiBkZWVwRXh0ZW5kKGRlZXBDbG9uZSh2YWx1ZXMpLCBvdmVycmlkZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGxhbmd1YWdlOnN0cmluZywgdmFsdWVzOklQYXJ0aWFsTG9jYWxlVmFsdWVzKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fdmFsdWVzW2xhbmcobGFuZ3VhZ2UpXSA9IGRlZXBDbG9uZSh2YWx1ZXMpO1xuICAgICAgICB0aGlzLm9uTGFuZ3VhZ2VVcGRhdGUuZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwYXRjaChsYW5ndWFnZTpzdHJpbmcsIHZhbHVlczpJUGFydGlhbExvY2FsZVZhbHVlcyk6dm9pZCB7XG4gICAgICAgIGRlZXBFeHRlbmQodGhpcy5fdmFsdWVzW2xhbmcobGFuZ3VhZ2UpXSwgdmFsdWVzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW50ZXJwb2xhdGUodmFsdWU6c3RyaW5nLCB2YXJpYWJsZXM6W3N0cmluZywgc3RyaW5nXVtdKTpzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFyaWFibGVzLnJlZHVjZSgocywgW2ssIHZdKSA9PiBzLnJlcGxhY2UobmV3IFJlZ0V4cChgI3ske2t9fWAsIFwiZ1wiKSwgdiksIHZhbHVlKTtcbiAgICB9XG59XG4iXX0=