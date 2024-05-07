import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type NavbarTheme = 'white' | 'deep_purple';

@Injectable()
export class Globals {
  public navbarTheme = new BehaviorSubject<NavbarTheme>('white');

  public setNavbarTheme(theme: NavbarTheme) {
    this.navbarTheme.next(theme);
  }
}
