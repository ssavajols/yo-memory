import { Injectable } from '@angular/core';

import { Player } from '../classes/player';
import { Card } from '../classes/card';

type CardTheme = 'default' | 'disney' | 'cars' | 'random';

@Injectable({
  providedIn: 'root'
})
export class GameOptionsService {
  players: Player[] = [];

  cards: Card[] = [];
  cardBackSide: CardTheme = 'default';
  cardTheme: CardTheme = 'default';

  nbCards = 8;
  nbPlayers = 4;

  constructor() {}

  setPlayers(n: number) {
    this.nbPlayers = n;
    this.players.length = 0;
    for (let i = 0; i < n; i++) {
      this.players.push(new Player());
    }
  }

  setCards(n: number) {
    this.cards.length = 0;
    this.nbCards = n;

    for (let i = 0; i < n; i++) {
      const card1 = new Card(i);
      const card2 = new Card(i);

      this.cards.push(card1);
      this.cards.push(card2);
    }
  }
}
