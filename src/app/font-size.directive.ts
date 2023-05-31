import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true,
})
export class FontSizeDirective {
  constructor(
    private elem: ElementRef,
  ) {
    this.elem.nativeElement.style.fontSize = '20px';
  }

}
