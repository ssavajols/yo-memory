import { Component, OnInit } from '@angular/core';
import { GameOptionsService } from '../services/game-options.service';

@Component({
  selector: 'yom-options',
  template: `
    Nb cards : <input [(ngModel)]="_options.nbCards" /> Nb players :
    <input [(ngModel)]="_options.nbPlayers" />
  `,
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  constructor(private _options: GameOptionsService) {}

  ngOnInit() {}
}
