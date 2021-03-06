import { trigger, state, style, transition, animate } from '@angular/animations'

export const OptionsAnimation = [
  trigger('options', [
    state(
      'show',
      style({
        opacity: '1',
        pointerEvents: 'initial'
      })
    ),
    state(
      'hide',
      style({
        opacity: '0',
        pointerEvents: 'none'
      })
    ),
    transition('show <=> hide', [animate('0.25s')])
  ])
]
