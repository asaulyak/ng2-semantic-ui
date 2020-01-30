import { Renderer2 } from "@angular/core";
import { CalendarView } from "./calendar-view";
import { CalendarItem } from "../directives/calendar-item";
import { CalendarRangeService } from "../services/calendar-range.service";
import * as i0 from "@angular/core";
export declare class CalendarRangeMonthService extends CalendarRangeService {
    configureItem(item: CalendarItem, baseDate: Date): void;
}
export declare class SuiCalendarMonthView extends CalendarView {
    get year(): string;
    constructor(renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDef<SuiCalendarMonthView>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiCalendarMonthView, "sui-calendar-month-view", never, {}, {}, never>;
}
