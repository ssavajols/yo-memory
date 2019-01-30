import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../classes/card';
import { GameOptionsService } from '../services/game-options.service';

@Component({
  selector: 'yom-card',
  template: `
    <div class="card" [ngClass]="{ selected: isVisible() }" *ngIf="card">
      <div
        class="back side"
        [style.background-image]="
          'url(assets/' + _options.cardBackSide + '/card-back.jpg)'
        "
      ></div>
      <div
        class="front side"
        [style.background-image]="
          'url(assets/' + _options.cardTheme + '/' + card.src + ')'
        "
      ></div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() selected: boolean;
  @Input() visible: boolean;

  constructor(private _options: GameOptionsService) {}

  ngOnInit() {}

  isVisible() {
    return this.visible || this.selected;
  }
}
