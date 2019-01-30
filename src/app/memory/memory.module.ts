import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { CardComponent } from './card/card.component';
import { EndGameComponent } from './end-game/end-game.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [GameComponent, PlayerComponent, CardComponent, EndGameComponent, OptionsComponent],
  imports: [CommonModule, BrowserAnimationsModule, FormsModule],
  exports: [GameComponent]
})
export class MemoryModule {}
