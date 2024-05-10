import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('purple');
    this.globals.setCurrentSection('process');
  }
}
