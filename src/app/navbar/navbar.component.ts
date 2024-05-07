import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  logoStyle = 'white';
  currentSection = 'intro';

  constructor(private globals: Globals) {}

  ngOnInit() {
    this.globals.navbarTheme.subscribe(
      (navbarTheme) => (this.logoStyle = navbarTheme),
    );
    this.globals.currentSection.subscribe(
      (section) => (this.currentSection = section),
    );
  }
}
