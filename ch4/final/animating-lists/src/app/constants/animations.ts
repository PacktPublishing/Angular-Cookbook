import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query,
} from '@angular/animations';

export const ANIMATIONS = {
  LIST_ANIMATION: trigger('listAnimation', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({
            opacity: 0,
          }),
          stagger(100, [
            animate(
              '0.5s ease',
              style({
                opacity: 1,
              })
            ),
          ]),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          stagger(100, [
            animate(
              '0.5s ease',
              style({
                opacity: 0,
              })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]),
};
