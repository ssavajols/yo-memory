import { Component, OnInit, Input } from '@angular/core'

import { Player } from '../classes/player'

@Component({
  selector: 'yom-player',
  template: `
    <div
      class="container player-{{ playerNumber }}"
      [ngClass]="{ active: isActive }"
    >
      <div class="score">
        {{ player.score }}
      </div>
      <div class="label">Joueur {{ playerNumber }}</div>
    </div>
  `,
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player = new Player()
  @Input() isActive = false
  @Input() playerNumber = 1

  constructor() {}

  ngOnInit() {}
}
