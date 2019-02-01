import { Component, OnInit } from '@angular/core'
import { NavigationService } from 'src/app/shared/services/navigation.service'
import { trigger, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'yom-config',
  template: `
    <div class="container" @child>
      <yom-title>Options de la partie</yom-title>
      <yom-options></yom-options>
      <yom-button (action)="_navigation.game()">Démarrer</yom-button>
    </div>
  `,
  styleUrls: ['./config.component.scss'],
  animations: [
    trigger('child', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(
          '0.5s ease-out',
          style({
            opacity: 1
          })
        )
      ])
    ])
  ]
})
export class ConfigComponent implements OnInit {
  constructor(public _navigation: NavigationService) {}

  ngOnInit() {}
}
