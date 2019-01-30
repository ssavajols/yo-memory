import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameOptionsService } from '../services/game-options.service';

@Component({
  selector: 'yom-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent implements OnInit {
  constructor(private _options: GameOptionsService) {}

  @Output() rejouer = new EventEmitter<any>();

  ngOnInit() {}

  handleClick() {
    this.rejouer.emit(true);
  }
}
