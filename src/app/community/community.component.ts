import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {
  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('deep_purple');
    this.globals.setCurrentSection('community');
  }
}
