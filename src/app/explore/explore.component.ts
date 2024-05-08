import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('deep_purple');
    this.globals.setCurrentSection('explore');
  }
}
