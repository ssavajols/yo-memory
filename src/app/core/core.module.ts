import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MemoryModule } from '../memory/memory.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, CommonModule, MemoryModule],
  exports: [AppRoutingModule]
})
export class CoreModule {}
