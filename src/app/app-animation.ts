import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group
} from '@angular/animations'

export const routeAnimation = trigger('routeAnimations', [
  transition(':enter', []),
  transition(':enter, :leave', [
    // query(
    //   ':enter',
    //   // ':enter, :leave',
    //   style({
    //     // position: 'absolute',
    //     // top: 0,
    //     // left: 0
    //   })
    // ),
    // group([
    // query(':leave @child', animateChild(), {
    //   optional: true
    // }),
    query(':enter @child', animateChild(), {
      optional: true
    })
    // ])
  ])
])
