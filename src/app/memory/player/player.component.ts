import { Component, OnInit, Input } from '@angular/core';
import { PlayerAnimation } from './player-animation';
import { Player } from '../classes/player';

@Component({
  selector: 'yom-player',
  template: `
    <div
      [ngClass]="{ active: isActive }"
      [@player]="isActive ? 'playing' : 'notPlaying'"
    >
      {{ player.score }}
    </div>
  `,
  styleUrls: ['./player.component.scss'],
  animations: [PlayerAnimation()]
})
export class PlayerComponent implements OnInit {
  @Input() player: Player = new Player();
  @Input() isActive = false;

  constructor() {}

  ngOnInit() {}
}
