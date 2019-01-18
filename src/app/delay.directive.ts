import { Directive, ViewContainerRef, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  private hasView = false;
  @Input() set appDelay(condition: boolean) { 
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
