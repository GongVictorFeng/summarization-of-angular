import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
})
export class NgxUnlessDirective {
  isVisible: boolean = false;
  constructor(
    private tempRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.isVisible) {
      this.viewContainer.createEmbeddedView(this.tempRef);
      this.isVisible = true;
      return;
    }
    this.viewContainer.clear();
    this.isVisible = false;
  }
}
