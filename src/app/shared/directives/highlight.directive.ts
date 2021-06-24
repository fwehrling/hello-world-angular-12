import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hlwHighlight]',
})
export class HighlightDirective {
  @Input() hlwHighlight!: string;

  constructor(private el: ElementRef) {
    console.log('highlight');
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
    console.log('highlight', this.hlwHighlight);
    this.el.nativeElement.style.color = this.hlwHighlight;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
    this.el.nativeElement.style.color = 'black';
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    this.el.nativeElement.style.backgroundColor = this.hlwHighlight;
  }
}
