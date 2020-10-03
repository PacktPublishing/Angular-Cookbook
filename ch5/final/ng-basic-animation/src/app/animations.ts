import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

export const buttonTextAnimation = (animationName: string, textWidth: string) => {
  return trigger(animationName, [
    state('btn-active-text', style({
      width: textWidth,
      visibility: 'visible',
    })),
    state('btn-inactive-text', style({
      width: '0px',
      visibility: 'hidden',
    })),
    transition('btn-active-text => btn-inactive-text', [
      group([
        animate('0s', style({
          width: '0px'
        })),
        animate('0s', style({
          visibility: 'hidden'
        }))
      ])
    ]),
    transition('btn-inactive-text => btn-active-text', [
      animate('0.3s ease', style({
        width: textWidth
      })),
      animate('0.3s ease', style({
        visibility: 'visible'
      }))
    ]),
  ])
}
