import { Component, OnInit, Output, EventEmitter } from '@angular/core'

import { GameOptionsService } from '../../shared/services/game-options.service'
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'yom-end-game',
  template: `
    <div class="endgame-panel" @child>
      <yom-title>Fin de partie</yom-title>
      <ul>
        <li
          *ngFor="let player of _options.players; let i = index"
          [ngClass]="{ best: player.isBest }"
        >
          Joueur {{ i + 1 }} : {{ player.score }}
        </li>
      </ul>
      <yom-button (action)="handleClick()">REJOUER</yom-button>
    </div>
  `,
  styleUrls: ['./end-game.component.scss'],
  animations: [
    trigger('child', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.25s'),
        style({ opacity: 1 })
      ])
    ])
  ]
})
export class EndGameComponent implements OnInit {
  constructor(public _options: GameOptionsService) {}

  @Output() rejouer = new EventEmitter<any>()

  ngOnInit() {}

  handleClick() {
    this.rejouer.emit(true)
  }
}
