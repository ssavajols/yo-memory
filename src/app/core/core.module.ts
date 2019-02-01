import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

import { MemoryModule } from '../memory/memory.module'
import { AppRoutingModule } from '../app-routing.module'
import { ConfigModule } from '../config/config.module'
import { HomeModule } from '../home/home.module'
import { SharedModule } from '../shared/shared.module'
import { UiModule } from '../ui/ui.module'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MemoryModule,
    SharedModule,
    ConfigModule,
    HomeModule,
    UiModule
  ],
  exports: [AppRoutingModule]
})
export class CoreModule {}
