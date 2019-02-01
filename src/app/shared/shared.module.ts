import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UiModule } from '../ui/ui.module'
import { CardComponent } from './card/card.component'
import { PlayerComponent } from './player/player.component'

@NgModule({
  declarations: [CardComponent, PlayerComponent],
  imports: [CommonModule, UiModule],
  exports: [UiModule, CardComponent, PlayerComponent]
})
export class SharedModule {}
