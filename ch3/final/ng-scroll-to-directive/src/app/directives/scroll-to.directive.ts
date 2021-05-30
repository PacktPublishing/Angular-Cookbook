import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
})
export class ScrollToDirective {
  @Input() target = '';
  @HostListener('click')
  onClick() {
    const targetElement = document.querySelector(this.target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  constructor() {}
}
