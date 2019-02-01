import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { NavigationService } from 'src/app/shared/services/navigation.service'

@Component({
  selector: 'yom-pause',
  template: `
    <div
      class="button"
      (click)="handleTogglePause()"
      [ngClass]="{ active: isActive }"
    >
      <span></span><span></span>
    </div>

    <div class="pause-panel" [ngClass]="{ active: isActive }">
      <yom-title>Pause</yom-title>
      <yom-button (action)="handleResetGame()">RECOMMENCER</yom-button>
      <yom-button (action)="_navigation.home()">ACCUEIL</yom-button>
      <yom-button (action)="handleTogglePause()" class="resume"
        >CONTINUE</yom-button
      >
    </div>
  `,
  styleUrls: ['./pause.component.scss']
})
export class PauseComponent implements OnInit {
  @Output() resetGame = new EventEmitter()

  isActive = false

  constructor(public _navigation: NavigationService) {}

  ngOnInit() {}

  handleResetGame() {
    this.resetGame.emit()
    this.handleTogglePause()
  }

  handleTogglePause() {
    this.isActive = !this.isActive
  }
}
