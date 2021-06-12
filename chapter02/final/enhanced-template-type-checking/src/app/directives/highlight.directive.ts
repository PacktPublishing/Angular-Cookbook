import { Directive, Input, SimpleChanges, OnChanges, ElementRef } from '@angular/core';

export enum HighlightColor {
  Yellow = 'yellow',
  LightGreen = 'lightgreen',
  LightCoral = 'lightcoral'
}

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() highlightColor: HighlightColor = HighlightColor.Yellow;
  originalHTML = '';
  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.highlightText.firstChange) {
      this.originalHTML = this.el.nativeElement.innerHTML;
      return;
    }
    const { currentValue } = changes.highlightText;
    if (currentValue) {
      const regExp = new RegExp(`(${currentValue})`, 'gi')
      this.el.nativeElement.innerHTML = this.originalHTML.replace(regExp, `<span style="background-color: ${this.highlightColor}">\$1</span>`)
    } else {
      this.el.nativeElement.innerHTML = this.originalHTML;
    }
  }

}
