import { Directive, ElementRef } from '@angular/core';
import { FontSizeDirective } from './font-size.directive';

@Directive({
  selector: '[appFontColor]',
  standalone: true,
  hostDirectives: [
    // FontSizeDirective
  ],
})
export class FontColorDirective {
  constructor(
    private elem: ElementRef,
  ) {
    this.elem.nativeElement.style.fontColor = 'red';
  }

}
