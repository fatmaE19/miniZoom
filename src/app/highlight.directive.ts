import { Directive, ElementRef, Renderer2, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  defaultColor = 'red';

  @Input('highlightColor') highlightColor: string;
  @Input('leaveColor') leaveColor: string;
  @Input()
   appDelay(time: number): void { }
  constructor(private el: ElementRef, private renderer: Renderer2, private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) {

    renderer.setStyle(el.nativeElement, 'color', 'red');
  }
  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {

    this.renderer.setStyle(this.el.nativeElement, 'color', this.highlightColor);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
    console.log('mouseleave');
    console.log(event);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.leaveColor);
  }
}
