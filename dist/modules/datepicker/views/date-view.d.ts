import { Renderer2 } from "@angular/core";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarView } from "./calendar-view";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as i0 from "@angular/core";
export declare class CalendarRangeDateService extends CalendarRangeService {
    calcStart(start: Date): Date;
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarDateView extends CalendarView {
    get days(): string[];
    get date(): string;
    constructor(renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDef<SuiCalendarDateView>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiCalendarDateView, "sui-calendar-date-view", never, {}, {}, never>;
}
