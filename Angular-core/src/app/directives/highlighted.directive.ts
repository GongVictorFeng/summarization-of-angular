import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]', // attribute selector
})
export class HighlightedDirective {
  @Input('highlighted')
  isHighlighted: boolean = false;

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
}
