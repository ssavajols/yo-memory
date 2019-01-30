import { Component } from '@angular/core';

@Component({
  selector: 'yom-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'yo-memory';
}
