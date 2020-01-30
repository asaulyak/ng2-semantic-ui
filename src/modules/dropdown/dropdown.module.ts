import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiTransitionModule } from "../transition/index";
import { SuiDropdown } from "./directives/dropdown";
import { SuiDropdownMenu } from "./directives/dropdown-menu";
import { SuiDropdownMenuItem } from "./directives/dropdown-menu-item";

@NgModule({
    imports: [
        CommonModule,
        SuiTransitionModule
    ],
    declarations: [
        SuiDropdown,
        SuiDropdownMenu,
        SuiDropdownMenuItem
    ],
    exports: [
        SuiDropdown,
        SuiDropdownMenu,
        SuiDropdownMenuItem
    ]
})
export class SuiDropdownModule {}
