import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

import { GameOptionsService } from './game-options.service'
import { Card } from '../classes/card'
import { Player } from '../classes/player'

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(public _options: GameOptionsService) {}

  cardFounded: Card[] = []
  cardsRemaining: number

  activePlayer$: BehaviorSubject<number> = new BehaviorSubject(0)
  changingPlayer$ = new Subject<any>()
  isEndGame$ = new Subject<boolean>()

  cards$ = new BehaviorSubject<Card[]>([])
  players$ = new BehaviorSubject<Player[]>([])

  startGameTime: Date = null
  endGameTime: Date = null

  startGame(numberOfPlayers: number, numberOfCards: number) {
    this._options.setPlayers(numberOfPlayers)
    this._options.setCards(numberOfCards)
    this.cardsRemaining = this._options.cards.length
    if (this._options.players.length === 0) {
      throw new Error('No players')
    }
    this.activePlayer$.next(0)
    this.players$.next(this._options.players)
    this.cards$.next(this._options.cards)
    this.resetFoundedCards()
    this.startGameTime = new Date()
    this.isEndGame$.next(false)

    if ((window as any).gtag) {
      ; (window as any).gtag('event', 'startGame', {
        event_category: 'game',
        event_label: 'start',
        value: `NbCards: ${this._options.nbPlayers} - NbPlayers: ${
          this._options.nbCards
        }`
      })
    }
  }

  playTurn(card1: Card, card2: Card) {
    this.getActivePlayer().turnPlayed += 1
    if (this.matchCards(card1, card2)) {
      this.foundCard(card1)
      this.turnSuccess()
      return
    }

    this.turnFailed()
  }

  foundCard(card) {
    this.cardFounded.push(card)
  }

  resetFoundedCards() {
    this.cardFounded.length = 0
  }

  matchCards(card1, card2) {
    return card1.number === card2.number && card1 !== card2
  }

  getActivePlayer() {
    return this.getPlayer(this.activePlayer$.value)
  }

  getPlayer(index: number) {
    return this._options.players[index]
  }

  setNextPlayer() {
    const lastPlayer = this.activePlayer$.value
    let activePlayer = this.activePlayer$.value + 1
    if (activePlayer >= this._options.players.length) {
      activePlayer = 0
    }
    const newPlayer = activePlayer
    if (newPlayer !== lastPlayer) {
      this.changingPlayer$.next({
        lastPlayer: lastPlayer,
        newPlayer: newPlayer
      })
    }
    this.activePlayer$.next(activePlayer)
  }

  turnSuccess() {
    this.cardsRemaining -= 2
    this.getActivePlayer().score += 1

    this.calcBestPlayer()

    if (this.cardsRemaining === 0) {
      this.endGame()
    }
  }

  turnFailed() {
    this.setNextPlayer()
  }

  calcBestPlayer() {
    let bestScore = 0
    this._options.players
      .map(player => {
        bestScore = Math.max(player.score, bestScore)
        return player
      })
      .map(player => {
        player.isBest = player.score === bestScore
      })
  }

  getGameDuration(): Date {
    const start = this.startGameTime
    const end = this.endGameTime || new Date()

    return new Date(end.getTime() - start.getTime())
  }

  endGame() {
    this.isEndGame$.next(true)
    this.endGameTime = new Date()
    if ((window as any).gtag) {
      ; (window as any).gtag('event', 'endGame', {
        event_category: 'game',
        event_label: 'end',
        value: `NbCards: ${this._options.nbPlayers} - NbPlayers: ${
          this._options.nbCards
        }`
      })
    }
  }
}
