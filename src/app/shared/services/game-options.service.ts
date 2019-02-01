import { Injectable } from '@angular/core'

import { Player } from '../classes/player'
import { Card } from '../classes/card'

export type CardTheme = 'default' | 'disney' | 'video-game' | 'random'

@Injectable({
  providedIn: 'root'
})
export class GameOptionsService {
  players: Player[] = []

  cards: Card[] = []

  cardBackSides: CardTheme[] = ['default', 'disney', 'video-game']
  cardThemes: CardTheme[] = ['default', 'disney', 'video-game']

  get cardBackSide() {
    return window.localStorage.getItem('cardBackSide')
  }

  get cardTheme() {
    return window.localStorage.getItem('cardTheme')
  }

  set cardBackSide(value: any) {
    window.localStorage.setItem('cardBackSide', value)
  }

  set cardTheme(value: any) {
    window.localStorage.setItem('cardTheme', value)
  }

  get nbCards() {
    return Number(window.localStorage.getItem('nbCards'))
  }

  get nbPlayers() {
    return Number(window.localStorage.getItem('nbPlayers'))
  }

  set nbCards(value: any) {
    window.localStorage.setItem('nbCards', value)
  }

  set nbPlayers(value: any) {
    window.localStorage.setItem('nbPlayers', value)
  }

  constructor() {
    if (!window.localStorage.getItem('nbCards')) {
      window.localStorage.setItem('nbCards', '8')
    }
    if (!window.localStorage.getItem('nbPlayers')) {
      window.localStorage.setItem('nbPlayers', '2')
    }
    if (!window.localStorage.getItem('cardBackSide')) {
      window.localStorage.setItem('cardBackSide', 'default')
    }
    if (!window.localStorage.getItem('cardTheme')) {
      window.localStorage.setItem('cardTheme', 'default')
    }
  }

  setPlayers(n: number) {
    this.nbPlayers = n
    this.players.length = 0
    for (let i = 0; i < n; i++) {
      this.players.push(new Player())
    }
  }

  setCards(n: number) {
    this.cards.length = 0
    this.nbCards = n

    for (let i = 0; i < n; i++) {
      const card1 = new Card(i)
      const card2 = new Card(i)

      this.cards.push(card1)
      this.cards.push(card2)
    }
  }
}
