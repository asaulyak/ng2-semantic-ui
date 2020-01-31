import { AfterContentInit } from "@angular/core";
import { SidebarService } from "../services/sidebar.service";
import { SuiSidebar } from "./sidebar";
import { SuiSidebarSibling } from "./sidebar-sibling";
import * as i0 from "@angular/core";
export declare class SuiSidebarContainer implements AfterContentInit {
    service: SidebarService;
    readonly hasClasses: boolean;
    sidebar: SuiSidebar;
    sibling: SuiSidebarSibling;
    constructor();
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<SuiSidebarContainer>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SuiSidebarContainer, "sui-sidebar-container", never, {}, {}, ["sidebar", "sibling"]>;
}
