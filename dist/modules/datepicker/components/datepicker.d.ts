import { CalendarService } from "./../services/calendar.service";
import { SuiLocalizationService } from "../../../behaviors/localization/internal";
import * as i0 from "@angular/core";
export declare type DatepickerMode = "year" | "month" | "date" | "datetime" | "time";
export declare const DatepickerMode: {
    Year: "time" | "year" | "month" | "date" | "datetime";
    Month: "time" | "year" | "month" | "date" | "datetime";
    Date: "time" | "year" | "month" | "date" | "datetime";
    Datetime: "time" | "year" | "month" | "date" | "datetime";
    Time: "time" | "year" | "month" | "date" | "datetime";
};
export declare class SuiDatepicker {
    readonly hasClasses: boolean;
    service: CalendarService;
    constructor(localizationService: SuiLocalizationService);
    onMouseDown(e: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiDatepicker>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiDatepicker, "sui-datepicker", never, {}, {}, never>;
}
