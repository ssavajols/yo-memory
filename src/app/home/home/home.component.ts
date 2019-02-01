import { Component, OnInit, Query } from '@angular/core'
import { NavigationService } from 'src/app/shared/services/navigation.service'
import {
  trigger,
  animate,
  style,
  transition,
  state,
  query,
  group
} from '@angular/animations'

@Component({
  selector: 'yom-home',
  template: `
    <div class="container" @child>
      <div class="overlay"></div>
      <img src="/assets/ui/logo.png" />
      <yom-button (action)="_navigation.config()">Jouer</yom-button>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('child', [
      transition(':enter', [
        query('img, yom-button', style({ opacity: 0.01 })),
        group([
          query('.overlay', [
            style({ transform: 'scale(2)' }),
            animate('1s ease-out'),
            style({ transform: 'scale(1)' })
          ]),
          query('img', [animate('0.5s ease-out'), style({ opacity: 1 })], {
            delay: '0.5s'
          }),
          query(
            'yom-button',
            [animate('0.5s ease-out'), style({ opacity: 1 })],
            { delay: '0.75s' }
          )
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor(public _navigation: NavigationService) {}

  ngOnInit() {}
}
