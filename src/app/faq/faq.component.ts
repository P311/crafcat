import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('deep_purple');
    this.globals.setCurrentSection('faq');
  }
}
