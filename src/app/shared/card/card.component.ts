import { Component, OnInit, Input } from '@angular/core'
import {
  GameOptionsService,
  CardTheme
} from '../../shared/services/game-options.service'

@Component({
  selector: 'yom-card',
  template: `
    <div class="card" [ngClass]="{ selected: isVisible() }">
      <div
        class="back side {{ cardBackSide }}"
        [style.background-image]="
          'url(assets/' + cardBackSide + '/card-back.jpg)'
        "
      ></div>
      <div
        class="front side {{ cardTheme }}"
        [style.background-image]="
          'url(assets/' + cardTheme + '/card-' + number + '.png)'
        "
      ></div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() number = 0
  @Input() cardBackSide: CardTheme = 'default'
  @Input() cardTheme: CardTheme = 'default'
  @Input() selected = false
  @Input() visible = false

  constructor(private _options: GameOptionsService) {}

  ngOnInit() {}

  isVisible() {
    return this.visible || this.selected
  }
}
