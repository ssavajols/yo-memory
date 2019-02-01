import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ConfigComponent } from './config/config.component'
import { OptionsComponent } from './options/options.component'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [ConfigComponent, OptionsComponent],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class ConfigModule {}
