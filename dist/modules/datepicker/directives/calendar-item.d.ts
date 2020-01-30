import { EventEmitter, ChangeDetectorRef } from "@angular/core";
import * as i0 from "@angular/core";
export declare class CalendarItem {
    date: Date;
    humanReadable: string;
    isDisabled: boolean;
    isActive: boolean;
    isOutsideRange: boolean;
    isToday: boolean;
    isSelectable: boolean;
    constructor(date: Date);
}
export declare class SuiCalendarItem {
    changeDetector: ChangeDetectorRef;
    item: CalendarItem;
    get isSelectable(): boolean;
    get isActive(): boolean;
    get isToday(): boolean;
    hasFocus: boolean;
    onFocussed: EventEmitter<boolean>;
    constructor(changeDetector: ChangeDetectorRef);
    onMouseMove(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiCalendarItem>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SuiCalendarItem, "[calendarItem]", never, { "item": "calendarItem"; }, {}, never>;
}
