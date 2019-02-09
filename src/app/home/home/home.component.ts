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
      <img class="logo" src="./assets/ui/logo.png" />
      <yom-button (action)="_navigation.config()">Jouer</yom-button>
      <a
        href="https://www.linkedin.com/in/sylvain-savajols-735a5215/"
        target="_blank"
        class="linkedin"
        (click)="track()"
        ><img src="assets/ui/linkedin.png" alt="linkedin"
      /></a>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('child', [
      transition(':enter', [
        query('img, yom-button', style({ opacity: 0.01 })),
        query('.linkedin', style({ transform: 'translateY(100px)' })),
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
          ),
          query(
            '.linkedin',
            [animate('0.5s ease-out'), style({ transform: 'translateY(0px)' })],
            { delay: '1.5s' }
          )
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor(public _navigation: NavigationService) {}

  ngOnInit() {}

  track() {
    if ((window as any).gtag) {
      ; (window as any).gtag('event', 'linkedin', {
        event_category: 'link',
        event_label: 'clicked'
      })
    }
  }
}
