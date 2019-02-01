import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { GameComponent } from './game/game.component'
import { EndGameComponent } from './end-game/end-game.component'
import { SharedModule } from '../shared/shared.module';
import { PauseComponent } from './pause/pause.component';
import { ChangePlayerComponent } from './change-player/change-player.component'

@NgModule({
  declarations: [GameComponent, EndGameComponent, PauseComponent, ChangePlayerComponent],
  imports: [CommonModule, BrowserAnimationsModule, FormsModule, SharedModule],
  exports: [GameComponent]
})
export class MemoryModule {}
