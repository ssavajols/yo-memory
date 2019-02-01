import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private _router: Router) {}

  home() {
    this._router.navigateByUrl('/');
  }

  config() {
    this._router.navigateByUrl('/config');
  }

  game() {
    this._router.navigateByUrl('/game');
  }
}
