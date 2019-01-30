import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const PlayerAnimation = ({ duration = '0.25s' } = {}) =>
  trigger('player', [
    state(
      'playing',
      style({
        transformOrigin: '0 0',
        transform: 'scale(1)'
      })
    ),
    state(
      'notPlaying',
      style({
        transformOrigin: '0 0',
        transform: 'scale(0.5)'
      })
    ),
    transition('playing <=> notPlaying', [animate(duration)])
  ]);
