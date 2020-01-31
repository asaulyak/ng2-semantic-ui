import { Renderer2 } from "@angular/core";
import { CalendarView } from "./calendar-view";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as i0 from "@angular/core";
export declare class CalendarRangeYearService extends CalendarRangeService {
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarYearView extends CalendarView {
    get decadeStart(): number;
    constructor(renderer: Renderer2);
    pad(year: number): string;
    static ɵfac: i0.ɵɵFactoryDef<SuiCalendarYearView>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiCalendarYearView, "sui-calendar-year-view", never, {}, {}, never>;
}
