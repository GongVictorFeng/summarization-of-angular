import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]', // attribute selector
})
export class HighlightedDirective {
  @Input('highlighted')
  isHighlighted!: boolean;

  constructor() {}

  //use HostBinding decorator to write to the className of the DOM Property, the property must be existed
  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted'; //return the css classes we want to apply to the host element
  // }

  //Alternative way
  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return 'true';
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event: MouseEvent) {
    console.log($event);
    this.isHighlighted = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
  }
}
