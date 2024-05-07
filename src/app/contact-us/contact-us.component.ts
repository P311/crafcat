import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('deep_purple');
  }
}
