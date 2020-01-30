import { Input, QueryList, ViewChildren, Renderer2, Directive } from "@angular/core";
import { KeyCode } from "../../../misc/util/internal";
import { SuiCalendarItem } from "../directives/calendar-item";
import { CalendarService } from "../services/calendar.service";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as i0 from "@angular/core";
import * as i1 from "../services/calendar-range.service";
export var CalendarViewType;
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
    CalendarView.ɵfac = function CalendarView_Factory(t) { return new (t || CalendarView)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(CalendarViewType), i0.ɵɵdirectiveInject(i1.CalendarRangeService)); };
    CalendarView.ɵdir = i0.ɵɵdefineDirective({ type: CalendarView, viewQuery: function CalendarView_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(SuiCalendarItem, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._renderedItems = _t);
        } }, inputs: { service: "service" } });
    return CalendarView;
}());
export { CalendarView };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalendarView, [{
        type: Directive
    }], function () { return [{ type: i0.Renderer2 }, { type: CalendarViewType }, { type: i1.CalendarRangeService }]; }, { _renderedItems: [{
            type: ViewChildren,
            args: [SuiCalendarItem]
        }], service: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdmlldy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zZW1hbnRpYy11aS8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvZGF0ZXBpY2tlci92aWV3cy9jYWxlbmRhci12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBK0IsU0FBUyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7OztBQUUxRSxNQUFNLENBQU4sSUFBWSxnQkFNWDtBQU5ELFdBQVksZ0JBQWdCO0lBQ3hCLHVEQUFRLENBQUE7SUFDUix5REFBUyxDQUFBO0lBQ1QsdURBQVEsQ0FBQTtJQUNSLHVEQUFRLENBQUE7SUFDUiwyREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQU5XLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFNM0I7QUFHRDtJQXNDSSxzQkFBWSxRQUFrQixFQUFFLFFBQXlCLEVBQUUsTUFBMkI7UUFBdEYsaUJBS0M7UUFKRyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQUMsQ0FBZSxJQUFLLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDM0gsQ0FBQztJQWxDRCxzQkFDVyxpQ0FBTzthQVlsQjtZQUNJLE9BQU8sSUFBSSxD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QyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUV6RSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFFNUQsSUFBSSxlQUFlLEVBQUU7Z0JBQ2pCLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNILGFBQWEsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQ3JDO1lBRUQsUUFBUSxHQUFHLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFFNUMsSUFBSSxRQUFRLENBQUMsVUFBVSxFQUFFO2dCQUNyQixPQUFPO2FBQ1Y7U0FDSjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDcEMsQ0FBQzs0RUE5S2lCLFlBQVksMkRBcUNXLGdCQUFnQjtxREFyQ3ZDLFlBQVk7MkJBSWhCLGVBQWU7Ozs7O3VCQXBCakM7Q0ErTEMsQUFoTEQsSUFnTEM7U0EvS3FCLFlBQVk7a0RBQVosWUFBWTtjQURqQyxTQUFTOzhEQXNDbUMsZ0JBQWdCO2tCQWpDeEQsWUFBWTttQkFBQyxlQUFlOztrQkFJNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIE9uRGVzdHJveSwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEtleUNvZGUgfSBmcm9tIFwiLi4vLi4vLi4vbWlzYy91dGlsL2ludGVybmFsXCI7XG5pbXBvcnQgeyBDYWxlbmRhckl0ZW0sIFN1aUNhbGVuZGFySXRlbSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2NhbGVuZGFyLWl0ZW1cIjtcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYWxlbmRhclJhbmdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jYWxlbmRhci1yYW5nZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBlbnVtIENhbGVuZGFyVmlld1R5cGUge1xuICAgIFllYXIgPSAwLFxuICAgIE1vbnRoID0gMSxcbiAgICBEYXRlID0gMixcbiAgICBIb3VyID0gMyxcbiAgICBNaW51dGUgPSA0XG59XG5leHBvcnQgdHlwZSBDYWxlbmRhclZpZXdSZXN1bHQgPSBbRGF0ZSwgQ2FsZW5kYXJWaWV3VHlwZV07XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbGVuZGFyVmlldyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfdHlwZTpDYWxlbmRhclZpZXdUeXBlO1xuICAgIHByaXZhdGUgX3NlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlO1xuXG4gICAgQFZpZXdDaGlsZHJlbihTdWlDYWxlbmRhckl0ZW0pXG4gICAgcHJpdmF0ZSBfcmVuZGVyZWRJdGVtczpRdWVyeUxpc3Q8U3VpQ2FsZW5kYXJJdGVtPjtcbiAgICBwcml2YXRlIF9oaWdobGlnaHRlZEl0ZW0/OkNhbGVuZGFySXRlbTtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIHNldCBzZXJ2aWNlKHNlcnZpY2U6Q2FsZW5kYXJTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2UgPSBzZXJ2aWNlO1xuICAgICAgICB0aGlzLnJhbmdlcy5sb2FkU2VydmljZShzZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2Uub25NYW51YWxVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJhbmdlcy5yZWZyZXNoKCk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9oaWdobGlnaHRlZEl0ZW07XG4gICAgICAgICAgICB0aGlzLmF1dG9IaWdobGlnaHQoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlcnZpY2UoKTpDYWxlbmRhclNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmFuZ2VzOkNhbGVuZGFyUmFuZ2VTZXJ2aWNlO1xuXG4gICAgcHVibGljIGdldCBjdXJyZW50RGF0ZSgpOkRhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmN1cnJlbnREYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWREYXRlKCk6RGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2Uuc2VsZWN0ZWREYXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RvY3VtZW50S2V5RG93bkxpc3RlbmVyOigpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZW5kZXJlcjpSZW5kZXJlcjIsIHZpZXdUeXBlOkNhbGVuZGFyVmlld1R5cGUsIHJhbmdlczpDYWxlbmRhclJhbmdlU2VydmljZSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdmlld1R5cGU7XG4gICAgICAgIHRoaXMucmFuZ2VzID0gcmFuZ2VzO1xuXG4gICAgICAgIHRoaXMuX2RvY3VtZW50S2V5RG93bkxpc3RlbmVyID0gcmVuZGVyZXIubGlzdGVuKFwiZG9jdW1lbnRcIiwgXCJrZXlkb3duXCIsIChlOktleWJvYXJkRXZlbnQpID0+IHRoaXMub25Eb2N1bWVudEtleURvd24oZSkpO1xuICAgIH1cblxuICAgIC8vIFRlbXBsYXRlIE1ldGhvZHNcblxuICAgIHB1YmxpYyBzZXREYXRlKGl0ZW06Q2FsZW5kYXJJdGVtKTp2b2lkIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmNoYW5nZURhdGUoaXRlbS5kYXRlLCB0aGlzLl90eXBlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgem9vbU91dCgpOnZvaWQge1xuICAgICAgICB0aGlzLnNlcnZpY2Uuem9vbU91dCh0aGlzLl90eXBlKTtcbiAgICB9XG5cbiAgICAvLyBLZXlib2FyZCBDb250cm9sXG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblJlbmRlcmVkSXRlbXNDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLm9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUmVuZGVyZWRJdGVtc0NoYW5nZWQoKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKGkgPT5cbiAgICAgICAgICAgIGkub25Gb2N1c3NlZC5zdWJzY3JpYmUoKGhhc0ZvY3VzOmJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRJdGVtKGkuaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodEl0ZW0odGhpcy5faGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1dG9IaWdobGlnaHQoKTp2b2lkIHtcbiAgICAgICAgbGV0IGRhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZSAmJiB0aGlzLnJhbmdlcy5jdXJyZW50LmNvbnRhaW5zRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSkgPyB0aGlzLnNlbGVjdGVkRGF0ZSA6IHRoaXMuY3VycmVudERhdGU7XG4gICAgICAgIGlmICh0aGlzLl9oaWdobGlnaHRlZEl0ZW0gJiYgdGhpcy5yYW5nZXMuY3VycmVudC5jb250YWluc0RhdGUodGhpcy5faGlnaGxpZ2h0ZWRJdGVtLmRhdGUpKSB7XG4gICAgICAgICAgICBkYXRlID0gdGhpcy5faGlnaGxpZ2h0ZWRJdGVtLmRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbml0aWFsbHlIaWdobGlnaHRlZCA9IHRoaXMucmFuZ2VzLmN1cnJlbnQuaXRlbXMuZmluZChpID0+IHRoaXMucmFuZ2VzLmRhdGVDb21wYXJlci5lcXVhbChpLmRhdGUsIGRhdGUpKTtcbiAgICAgICAgaWYgKGluaXRpYWxseUhpZ2hsaWdodGVkICYmICFpbml0aWFsbHlIaWdobGlnaHRlZC5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRlZEl0ZW0gPSBpbml0aWFsbHlIaWdobGlnaHRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGlnaGxpZ2h0SXRlbShpdGVtOkNhbGVuZGFySXRlbSB8IHVuZGVmaW5lZCk6dm9pZCB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaSA9PiBpLmhhc0ZvY3VzID0gZmFsc2UpO1xuICAgICAgICAgICAgY29uc3QgcmVuZGVyZWQgPSB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZpbmQocmkgPT4gcmkuaXRlbSA9PT0gaXRlbSk7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWQgJiYgIXJlbmRlcmVkLmhhc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyZWQuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlbmRlcmVkLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRJdGVtID0gaXRlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudEtleURvd24oZTpLZXlib2FyZEV2ZW50KTp2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2hpZ2hsaWdodGVkSXRlbSAmJiBlLmtleUNvZGUgPT09IEtleUNvZGUuRW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9oaWdobGlnaHRlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmRJbmRleCh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuICAgICAgICBsZXQgaXNNb3ZpbmdGb3J3YXJkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGRlbHRhID0gMDtcblxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlJpZ2h0OlxuICAgICAgICAgICAgICAgIGRlbHRhICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtleUNvZGUuTGVmdDpcbiAgICAgICAgICAgICAgICBkZWx0YSAtPSAxO1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkRvd246XG4gICAgICAgICAgICAgICAgZGVsdGEgKz0gdGhpcy5yYW5nZXMuY29sdW1ucztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5VcDpcbiAgICAgICAgICAgICAgICBkZWx0YSAtPSB0aGlzLnJhbmdlcy5jb2x1bW5zO1xuICAgICAgICAgICAgICAgIGlzTW92aW5nRm9yd2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9wIHRoZXNlIGtleXByZXNzZXMgYmVpbmcgY2FwdHVyZWQgZWxzZXdoZXJlLlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IG5leHRJdGVtID0gdGhpcy5yYW5nZXMuY3VycmVudC5pdGVtc1tpbmRleCArIGRlbHRhXTtcblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgbmV4dEl0ZW0uaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRJdGVtICYmICFuZXh0SXRlbS5pc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0SXRlbShuZXh0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dEl0ZW0gJiYgbmV4dEl0ZW0uaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCArIGRlbHRhID49IHRoaXMucmFuZ2VzLmN1cnJlbnQuaW5SYW5nZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpc01vdmluZ0ZvcndhcmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXh0SXRlbSkge1xuICAgICAgICAgICAgbGV0IGFkanVzdGVkSW5kZXggPSB0aGlzLnJhbmdlcy5jdXJyZW50LmZpbmRJbmRleCh0aGlzLl9oaWdobGlnaHRlZEl0ZW0pO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0SXRlbXMgPSB0aGlzLnJhbmdlcy5jYWxjKGlzTW92aW5nRm9yd2FyZCkuaW5SYW5nZTtcblxuICAgICAgICAgICAgaWYgKGlzTW92aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICAgIGFkanVzdGVkSW5kZXggLT0gdGhpcy5yYW5nZXMuY3VycmVudC5pblJhbmdlLmxlbmd0aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRqdXN0ZWRJbmRleCArPSBuZXh0SXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0SXRlbSA9IG5leHRJdGVtc1thZGp1c3RlZEluZGV4ICsgZGVsdGFdO1xuXG4gICAgICAgICAgICBpZiAobmV4dEl0ZW0uaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmFuZ2VzLm1vdmUoaXNNb3ZpbmdGb3J3YXJkKTtcbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5yYW5nZXMuY3VycmVudC5maW5kKG5leHRJdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnRLZXlEb3duTGlzdGVuZXIoKTtcbiAgICB9XG59XG4iXX0=