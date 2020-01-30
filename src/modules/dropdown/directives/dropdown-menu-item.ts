import { ContentChild, Directive, ElementRef, forwardRef, Renderer2 } from "@angular/core";
import { SuiDropdownMenu } from "./dropdown-menu";

@Directive({
    // We must attach to every '.item' as Angular doesn't support > selectors.
    selector: ".item"
})
export class SuiDropdownMenuItem {
    public get isDisabled():boolean {
        // We must use nativeElement as Angular doesn't have a way of reading class information.
        const element = this.element.nativeElement as Element;
        return element.classList.contains("disabled");
    }

    private _isSelected:boolean;

    public get isSelected():boolean {
        return this._isSelected;
    }

    public set isSelected(value:boolean) {
        // Renderer is used to enable a dynamic class name.
        if (value) {
            this._renderer.addClass(this.element.nativeElement, this.selectedClass);
        } else {
            this._renderer.removeClass(this.element.nativeElement, this.selectedClass);
        }
    }

    // Stores the class name used for a 'selected' item.
    public selectedClass:string;

    @ContentChild(forwardRef(() => SuiDropdownMenu), { static: true })
    public childDropdownMenu:any;

    public get hasChildDropdown():boolean {
        return !!this.childDropdownMenu;
    }

    constructor(private _renderer:Renderer2, public element:ElementRef) {
        this.isSelected = false;

        this.selectedClass = "selected";
    }

    public performClick():void {
        // Using directly because Renderer2 doesn't have invokeElementMethod method anymore.
        this.element.nativeElement.click();
    }
}
