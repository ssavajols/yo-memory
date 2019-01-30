import { Injectable, EventEmitter } from '@angular/core';
import { GameOptionsService } from './game-options.service';

import { Card } from '../classes/card';
import { BehaviorSubject, Subject } from 'rxjs';
import { Player } from '../classes/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private _options: GameOptionsService) {}
  activePlayer$: BehaviorSubject<number> = new BehaviorSubject(0);
  cardsRemaining: number;
  isEndGame$ = new Subject<boolean>();
  cardFounded: Card[] = [];

  cards$ = new BehaviorSubject<Card[]>([]);
  players$ = new BehaviorSubject<Player[]>([]);

  startGame(numberOfPlayers: number, numberOfCards: number) {
    this._options.setPlayers(numberOfPlayers);
    this._options.setCards(numberOfCards);
    this.cardsRemaining = this._options.cards.length;
    if (this._options.players.length === 0) {
      throw new Error('No players');
    }
    this.activePlayer$.next(0);
    this.players$.next(this._options.players);
    this.cards$.next(this._options.cards);
    this.resetFoundedCards();
    this.isEndGame$.next(false);
  }

  playTurn(card1: Card, card2: Card) {
    if (this.matchCards(card1, card2)) {
      this.foundCard(card1);
      this.turnSuccess();
      return;
    }

    this.turnFailed();
  }

  foundCard(card) {
    this.cardFounded.push(card);
  }

  resetFoundedCards() {
    this.cardFounded.length = 0;
  }

  matchCards(card1, card2) {
    return card1.src === card2.src && card1 !== card2;
  }

  getActivePlayer() {
    return this.getPlayer(this.activePlayer$.value);
  }

  getPlayer(index: number) {
    return this._options.players[index];
  }

  setNextPlayer() {
    let activePlayer = this.activePlayer$.value + 1;
    if (activePlayer >= this._options.players.length) {
      activePlayer = 0;
    }
    this.activePlayer$.next(activePlayer);
  }

  turnSuccess() {
    this.cardsRemaining -= 2;
    this.getActivePlayer().score += 1;

    if (this.cardsRemaining === 0) {
      this.endGame();
    }
  }

  turnFailed() {
    this.setNextPlayer();
  }

  endGame() {
    this.isEndGame$.next(true);
  }
}
