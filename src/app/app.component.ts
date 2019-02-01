import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { routeAnimation } from './app-animation'

@Component({
  selector: 'yom-root',
  template: `
    <div
      (touchmove)="touchmove($event)"
      [@routeAnimations]="prepareRoute(outlet)"
    >
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  animations: [routeAnimation]
})
export class AppComponent {
  title = 'yo-memory'

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }

  touchmove(event: any) {
    event.preventDefault()
  }
}
