import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'yom-change-player',
  template: `
    <div class="container" [ngClass]="{ active: isActive }">
      <div class="player">J{{ lastPlayer }}</div>
      <img src="./assets/ui/rotate.png" />
      <div class="player">J{{ newPlayer }}</div>
    </div>
  `,
  styleUrls: ['./change-player.component.scss']
})
export class ChangePlayerComponent implements OnInit {
  @Input() isActive: boolean
  @Input() lastPlayer = 0
  @Input() newPlayer = 0

  constructor() {}

  ngOnInit() {}
}
