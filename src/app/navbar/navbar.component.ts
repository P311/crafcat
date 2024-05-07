import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  logo_style = 'white';

  constructor(private globals: Globals) {}

  ngOnInit() {
    this.globals.navbarTheme.subscribe(
      (navbarTheme) => (this.logo_style = navbarTheme),
    );
  }
}
