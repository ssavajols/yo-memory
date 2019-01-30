import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GameOptionsService } from '../services/game-options.service';
import { GameService } from '../services/game.service';
import { Card } from '../classes/card';
import { map } from 'rxjs/operators';

@Component({
  selector: 'yom-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @ViewChild('cardContainer') cardContainer: ElementRef;
  activePlayer$ = this._game.activePlayer$;
  cards$ = this._game.cards$.pipe(
    map(cards => cards.sort(() => (Math.round(Math.random()) ? 1 : -1)))
  );
  isEndGame$ = this._game.isEndGame$;
  players$ = this._game.players$;

  card1: Card;
  card2: Card;

  disablingPlayerActions = false;

  StyleContainer;
  StyleCard;

  constructor(
    private _options: GameOptionsService,
    private _game: GameService
  ) {}

  ngOnInit() {
    this.startNewGame();
  }

  containerSize() {
    const width = 800;
    const height = 600;
    return {
      marginTop: -height / 2 + 'px',
      marginLeft: -width / 2 + 'px',
      width: width + 'px',
      height: height + 'px'
    };
  }

  cardSize() {
    const nbLines = this.getNbLines(this._options.nbCards * 2);
    const cardsPerLine = Math.ceil((this._options.nbCards * 2) / nbLines);
    const margin = 1;

    const maxWidth = (100 - margin * cardsPerLine * 2) / cardsPerLine;
    const maxHeight = 100 / nbLines - margin * nbLines;

    return {
      width: maxWidth + '%',
      height: maxHeight + '%',
      margin: margin + '%'
    };
  }

  startNewGame() {
    this.StyleContainer = this.containerSize();
    this.StyleCard = this.cardSize();
    this._game.startGame(this._options.nbPlayers, this._options.nbCards);
  }

  isCardFounded(card: Card): boolean {
    return this._game.cardFounded.filter(c => c.src === card.src).length > 0;
  }

  selectCard(card: Card) {
    if (!this.card1) {
      return (this.card1 = card);
    }

    if (this.card1 === card) {
      return;
    }

    this.card2 = card;
    this.disablingPlayerActions = true;

    setTimeout(() => {
      this.disablingPlayerActions = false;
      this._game.playTurn(this.card1, this.card2);
      this.card1 = null;
      this.card2 = null;
    }, 1000);
  }

  getNbLines(nbCards: number) {
    return nbCards < 16 ? 2 : 4;
  }

  rejouer() {
    this.startNewGame();
  }
}
