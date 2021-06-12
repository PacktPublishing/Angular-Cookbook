import {
  trigger,
  style,
  transition,
  query,
} from '@angular/animations';

const optional = { optional: true };

export const ROUTE_ANIMATION = trigger('routeAnimation', [
  transition('* <=> *', [
    style({
      position: 'relative'
    }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
      })
    ], optional),
    query(':enter', [
      style({
        opacity: 0,
      })
    ], optional)
  ])
])
