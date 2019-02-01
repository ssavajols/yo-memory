import { Component, OnInit, OnDestroy } from '@angular/core'
import { GameOptionsService } from '../../shared/services/game-options.service'
import { fromEvent, Subscription } from 'rxjs'
import { OptionsAnimation } from './options-animation'

@Component({
  selector: 'yom-options',
  template: `
    <div class="option-panel">
      <div class="option">
        <span>Nombre de joueurs :</span>
        <yom-inline-select
          (select)="selectNbPlayers($event)"
          [selected]="_options.nbPlayers"
          [choices]="[1, 2, 3, 4]"
        ></yom-inline-select>
      </div>
      <div class="option">
        <span>Nombre de cartes :</span>
        <yom-inline-select
          (select)="selectNbCards($event)"
          [selected]="_options.nbCards"
          [choices]="[2, 4, 8, 16]"
        ></yom-inline-select>
      </div>
      <div class="option">
        <span>Theme :</span>
        <div class="theme-option">
          <div class="theme">
            <div class="theme-title">Recto</div>
            <yom-card
              [selected]="true"
              [cardTheme]="theme"
              [ngClass]="{ selected: _options.cardTheme === theme }"
              *ngFor="let theme of _options.cardThemes"
              (click)="selectThemeRecto(theme, _options.cardThemes)"
            ></yom-card>
          </div>
          <div class="theme">
            <div class="theme-title">Verso</div>
            <yom-card
              [selected]="false"
              [cardBackSide]="theme"
              [ngClass]="{ selected: _options.cardBackSide === theme }"
              *ngFor="let theme of _options.cardBackSides"
              (click)="selectThemeVerso(theme)"
            ></yom-card>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./options.component.scss'],
  animations: [OptionsAnimation()]
})
export class OptionsComponent implements OnInit, OnDestroy {
  constructor(private _options: GameOptionsService) {}
  show = false

  private _keyupEvent: Subscription

  ngOnInit() {
    this._keyupEvent = fromEvent(window, 'keyup').subscribe(
      (e: KeyboardEvent) => {
        if (e.keyCode === 27) {
          this.toggleOptions()
        }
      }
    )
  }

  ngOnDestroy() {
    this._keyupEvent.unsubscribe()
  }

  toggleOptions() {
    this.show = !this.show
  }

  selectNbCards(cards) {
    this._options.nbCards = cards
  }

  selectNbPlayers(players) {
    this._options.nbPlayers = players
  }

  selectThemeRecto(theme) {
    this._options.cardTheme = theme
  }

  selectThemeVerso(theme) {
    this._options.cardBackSide = theme
  }
}
