import { EventEmitter } from "@angular/core";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as i0 from "@angular/core";
export declare class SuiCalendarViewTitle {
    ranges: CalendarRangeService;
    onZoomOut: EventEmitter<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<SuiCalendarViewTitle>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiCalendarViewTitle, "sui-calendar-view-title", never, { "ranges": "ranges"; }, { "onZoomOut": "zoomOut"; }, never>;
}
