import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  readonly imgs: string[] = [
    'assets/bgs/intro_bg1.png',
    'assets/bgs/intro_bg2.png',
    'assets/bgs/intro_bg3.png',
  ];
  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('white');
  }
}
