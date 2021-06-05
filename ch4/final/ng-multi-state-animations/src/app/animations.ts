import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
  state(
    'active',
    style({
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'white',
    })
  ),
  state(
    'hovered',
    style({
      transform: 'scale3d(1.05, 1.05, 1.05)',
      backgroundColor: '#333',
      color: 'white',
    })
  ),
  transition('void => active', [
    style({
      transform: 'translateX(-200px)',
      opacity: 0,
    }),
    animate(
      '0.2s ease',
      style({
        transform: 'translateX(0)',
        opacity: 1,
      })
    ),
  ]),
  transition('active => hovered', [
    animate(
      '0.3s 0s ease-out',
      style({
        transform: 'scale3d(1.05, 1.05, 1.05)',
        backgroundColor: '#333',
        color: 'white',
      })
    ),
  ]),
]);
