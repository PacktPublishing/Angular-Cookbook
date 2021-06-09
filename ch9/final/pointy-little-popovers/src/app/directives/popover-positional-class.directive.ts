import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  Input,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appPopoverPositionalClass]',
})
export class PopoverPositionalClassDirective implements AfterViewInit {
  @Input() originY: string;
  @Input() targetSelector: string;
  @Input() inverseClass;
  @Input() initialDirection = 'bottom';
  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const requiredProps = ['originY', 'targetSelector'];
    requiredProps.forEach((prop) => {
      if (this[prop] === undefined) {
        throw new Error(`${prop} is required`);
      }
    });
    this.inverseClass = this.inverseClass || `${this.targetSelector}-inverse`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.originY) {
      if (changes.originY.currentValue !== changes.originY.previousValue) {
        // let the popover appear
        setTimeout(() => {
          this.applyClass(changes.originY.currentValue);
        }, 0);
      }
    }
  }

  applyClass(originY) {
    const target = document.querySelector(this.targetSelector);
    if (!target) {
      return;
    }
    if (originY !== this.initialDirection) {
      this.renderer.addClass(target, this.inverseClass);
    } else {
      this.renderer.removeClass(target, this.inverseClass);
    }
    this.cdRef.markForCheck();
  }
}
