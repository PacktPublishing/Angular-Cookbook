import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
  state('active', style({
    color: 'rgb(51, 51, 51)',
    backgroundColor: 'white'
  })),
  transition('void => *', [
    style({
      transform: 'translateX(-200px)',
      opacity: 0
    }),
    animate('0.2s ease', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ]),
])
