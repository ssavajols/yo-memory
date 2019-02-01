import { NgModule } from '@angular/core'
import { ButtonComponent } from './button/button.component'
import { TitleComponent } from './title/title.component'
import { InlineSelectComponent } from './inline-select/inline-select.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ButtonComponent, TitleComponent, InlineSelectComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, TitleComponent, InlineSelectComponent]
})
export class UiModule {}
