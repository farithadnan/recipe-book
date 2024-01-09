import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // It checks if the clicked element is within the element to which the directive is applied to.
    // If it is, it `toggles` the isOpen property; otherwise (click elsewhere), it sets isOpen to false.
    this.isOpen = this.elRef.nativeElement.contains(event.target) ?
    !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}
}
