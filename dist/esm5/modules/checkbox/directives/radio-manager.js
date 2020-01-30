import { Directive, ContentChildren, QueryList, ElementRef } from "@angular/core";
import { SuiRadio } from "../components/radio";
import { Util } from "../../../misc/util/internal";
import * as i0 from "@angular/core";
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
    SuiRadioManager.ɵfac = function SuiRadioManager_Factory(t) { return new (t || SuiRadioManager)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    SuiRadioManager.ɵdir = i0.ɵɵdefineDirective({ type: SuiRadioManager, selectors: [["form", 3, "ngForm", "", 3, "ngForm", ""], ["ngForm"], ["", "ngForm", ""]], contentQueries: function SuiRadioManager_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SuiRadioManager, true);
            i0.ɵɵcontentQuery(dirIndex, SuiRadio, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._subManagers = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._renderedRadios = _t);
        } } });
    return SuiRadioManager;
}());
export { SuiRadioManager };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SuiRadioManager, [{
        type: Directive,
        args: [{
                selector: "form:not([ngForm]):not([[ngForm]]),ngForm,[ngForm]"
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { _subManagers: [{
            type: ContentChildren,
            args: [SuiRadioManager, { descendants: true }]
        }], _renderedRadios: [{
            type: ContentChildren,
            args: [SuiRadio, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY2hlY2tib3gvZGlyZWN0aXZlcy9yYWRpby1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRW5EO0lBZUkseUJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLDRDQUFrQixHQUF6QjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLHVDQUFhLEdBQXJCO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsWUFBWTthQUNaLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxLQUFJLEVBQVYsQ0FBVSxDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLHNDQUFZLEdBQXBCO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxRSxNQUFNO2FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBVCxDQUFTLENBQUM7YUFDbkIsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQzthQUNWLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVO2FBQ3hCLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CO2FBQ3ZCLFNBQVMsQ0FBQyxVQUFDLENBQUc7WUFDWCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUMsQ0FBQyxDQUFDLEVBTkcsQ0FNSCxDQUFDLEVBUEYsQ0FPRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztrRkEvQ1EsZUFBZTt3REFBZixlQUFlO3dDQUlQLGVBQWU7d0NBR2YsUUFBUTs7Ozs7OzBCQWY3QjtDQXdEQyxBQW5ERCxJQW1EQztTQWhEWSxlQUFlO2tEQUFmLGVBQWU7Y0FIM0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxvREFBb0Q7YUFDakU7O2tCQUtJLGVBQWU7bUJBQUMsZUFBZSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7a0JBR3RELGVBQWU7bUJBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3VpUmFkaW8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9yYWRpb1wiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcImZvcm06bm90KFtuZ0Zvcm1dKTpub3QoW1tuZ0Zvcm1dXSksbmdGb3JtLFtuZ0Zvcm1dXCJcbn0pXG5leHBvcnQgY2xhc3MgU3VpUmFkaW9NYW5hZ2VyPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBwdWJsaWMgaXNOZXN0ZWQ6Ym9vbGVhbjtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oU3VpUmFkaW9NYW5hZ2VyLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfc3ViTWFuYWdlcnM6UXVlcnlMaXN0PFN1aVJhZGlvTWFuYWdlcjxUPj47XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFN1aVJhZGlvLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRSYWRpb3M6UXVlcnlMaXN0PFN1aVJhZGlvPFQ+PjtcblxuICAgIHByaXZhdGUgX3JhZGlvU3ViczpTdWJzY3JpcHRpb25bXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5pc05lc3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9yYWRpb1N1YnMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlTmVzdGluZygpO1xuICAgICAgICB0aGlzLl9zdWJNYW5hZ2Vycy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZU5lc3RpbmcoKSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVSYWRpb3MoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRSYWRpb3MuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSYWRpb3MoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVOZXN0aW5nKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3N1Yk1hbmFnZXJzXG4gICAgICAgICAgICAuZmlsdGVyKG0gPT4gbSAhPT0gdGhpcylcbiAgICAgICAgICAgIC5mb3JFYWNoKG0gPT4gbS5pc05lc3RlZCA9IHRydWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlUmFkaW9zKCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JhZGlvU3Vicy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5fcmFkaW9TdWJzID0gW107XG5cbiAgICAgICAgY29uc3QgZ3JvdXBzID0gVXRpbC5BcnJheS5ncm91cEJ5KHRoaXMuX3JlbmRlcmVkUmFkaW9zLnRvQXJyYXkoKSwgXCJuYW1lXCIpO1xuICAgICAgICBPYmplY3RcbiAgICAgICAgICAgIC5rZXlzKGdyb3VwcylcbiAgICAgICAgICAgIC5tYXAoayA9PiBncm91cHNba10pXG4gICAgICAgICAgICAuZm9yRWFjaChnID0+IGdcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChyID0+IHRoaXMuX3JhZGlvU3Vic1xuICAgICAgICAgICAgICAgICAgICAucHVzaChyLm9uQ3VycmVudFZhbHVlQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCh2OlQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNOZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5mb3JFYWNoKHJhZGlvID0+IHJhZGlvLndyaXRlVmFsdWUodikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSkpO1xuICAgIH1cbn1cbiJdfQ==