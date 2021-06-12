import {
  trigger,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

export const ROUTE_ANIMATION = trigger('routeAnimation', [
  transition('* <=> *', [
    style({
      position: 'relative',
    }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], {
      optional: true,
    }),
    query(':enter', [animate('300ms ease-in', style({ opacity: 1 }))], {
      optional: true,
    }),
  ]),
]);
