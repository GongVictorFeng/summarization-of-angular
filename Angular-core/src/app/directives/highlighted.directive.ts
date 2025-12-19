import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlighted]', // attribute selector
})
export class HighlightedDirective {
  constructor() {}

  //use HostBinding decorator to write to the className of the DOM Property, the property must be existed
  @HostBinding('className')
  get cssClasses() {
    return 'highlighted'; //return the css classes we want to apply to the host element
  }

  //Alternative way
  // @HostBinding('class.highlighted')
  // get cssClasses() {
  //   return true;
  // }
}
