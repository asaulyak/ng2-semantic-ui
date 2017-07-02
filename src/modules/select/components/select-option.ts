import {
    Component, Input, HostBinding, HostListener, EventEmitter, ViewContainerRef,
    ViewChild, Renderer2, ElementRef, Output, ChangeDetectorRef
} from "@angular/core";
import { SuiDropdownMenuItem } from "../../dropdown";
import { HandledEvent } from "../../../misc/util";

export interface ISelectRenderedOption<T> {
    value:T;
    isActive?:boolean;
    formatter:(o:T) => string;
    usesTemplate:boolean;
    templateSibling:ViewContainerRef;
}

@Component({
    selector: "sui-select-option",
    template: `
<span #templateSibling></span>
<span [innerHTML]="renderedText"></span>
`
})
export class SuiSelectOption<T> extends SuiDropdownMenuItem implements ISelectRenderedOption<T> {
    // Sets the Semantic UI classes on the host element.
    @HostBinding("class.item")
    private _optionClasses:boolean;

    @Input()
    public value:T;

    // Fires when the option is selected, whether by clicking or by keyboard.
    @Output()
    public onSelected:EventEmitter<T>;

    @HostBinding("class.active")
    public isActive:boolean;

    public renderedText?:string;

    public set formatter(formatter:(obj:T) => string) {
        if (!this.usesTemplate) {
            this.renderedText = formatter(this.value);
        } else {
            this.renderedText = undefined;
        }
    }

    public usesTemplate:boolean;

    // Placeholder to draw template beside.
    @ViewChild("templateSibling", { read: ViewContainerRef })
    public templateSibling:ViewContainerRef;

    constructor(renderer:Renderer2, element:ElementRef) {
        // We inherit SuiDropdownMenuItem to automatically gain all keyboard navigation functionality.
        // This is not done via adding the .item class because it isn't supported by Angular.
        super(renderer, element);

        this._optionClasses = true;
        this.isActive = false;
        this.onSelected = new EventEmitter<T>();

        // By default we make this function return an empty string, for the brief moment when it isn't displaying the correct label.
        this.formatter = o => "";

        this.usesTemplate = false;
    }

    @HostListener("click", ["$event"])
    public onClick(e:HandledEvent):void {
        e.eventHandled = true;

        setTimeout(() => this.onSelected.emit(this.value));
    }
}
