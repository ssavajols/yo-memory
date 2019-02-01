import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { map } from 'rxjs/operators'

import { GameOptionsService } from '../../shared/services/game-options.service'
import { GameService } from '../../shared/services/game.service'
import { Card } from '../../shared/classes/card'
import { NavigationService } from 'src/app/shared/services/navigation.service'
import { transition, style, animate, trigger } from '@angular/animations'
import { fromEvent } from 'rxjs'

@Component({
  selector: 'yom-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('child', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(
          '0.5s ease-out',
          style({
            opacity: 1
          })
        )
      ])
    ])
  ]
})
export class GameComponent implements OnInit {
  @ViewChild('cardContainer') cardContainer: ElementRef
  activePlayer$ = this._game.activePlayer$
  cards$ = this._game.cards$.pipe(
    map(cards => cards.sort(() => (Math.round(Math.random()) ? 1 : -1)))
  )
  isEndGame$ = this._game.isEndGame$
  players$ = this._game.players$

  lastPlayer = 0
  newPlayer = 0

  isChangingPlayer = false

  card1: Card
  card2: Card

  disablingPlayerActions = false

  StyleContainer
  StyleCard

  constructor(
    private _options: GameOptionsService,
    private _game: GameService,
    private _navigation: NavigationService
  ) {}

  ngOnInit() {
    this.startNewGame()
    fromEvent(window, 'resize').subscribe(() => {
      this.setCardSizes()
    })

    this._game.changingPlayer$.subscribe(({ lastPlayer, newPlayer }) => {
      this.lastPlayer = lastPlayer
      this.newPlayer = newPlayer
      this.isChangingPlayer = true
      setTimeout(() => {
        this.isChangingPlayer = false
      }, 500)
    })
  }

  containerSize() {
    const width = Math.min(800, window.innerWidth - 100)
    const height = Math.min(550, window.innerWidth - 100)
    return {
      marginTop: -height / 2 + 'px',
      marginLeft: -width / 2 + 'px',
      width: width + 'px',
      height: height + 'px'
    }
  }

  cardSize() {
    const nbLines = this.getNbLines(this._options.nbCards * 2)
    const cardsPerLine = Math.ceil((this._options.nbCards * 2) / nbLines)
    const margin = 1

    const maxWidth = (100 - margin * cardsPerLine * 2) / cardsPerLine
    const maxHeight = 100 / nbLines - margin * nbLines

    return {
      width: maxWidth + '%',
      height: maxHeight + '%',
      margin: margin + '%'
    }
  }

  setCardSizes() {
    this.StyleContainer = this.containerSize()
    this.StyleCard = this.cardSize()
  }

  startNewGame() {
    this.setCardSizes()
    this.card1 = null
    this.card2 = null
    this._game.startGame(this._options.nbPlayers, this._options.nbCards)
  }

  isCardFounded(card: Card): boolean {
    return (
      this._game.cardFounded.filter(c => c.number === card.number).length > 0
    )
  }

  selectCard(card: Card) {
    if (this.isCardFounded(card)) {
      return
    }
    if (!this.card1) {
      return (this.card1 = card)
    }

    if (this.card1 === card) {
      return
    }

    this.card2 = card
    this.disablingPlayerActions = true

    setTimeout(() => {
      this.disablingPlayerActions = false
      this._game.playTurn(this.card1, this.card2)
      this.card1 = null
      this.card2 = null
    }, 1000)
  }

  getNbLines(nbCards: number) {
    return nbCards < 16 ? 2 : 4
  }

  rejouer() {
    this.startNewGame()
  }
}
