import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
})
export class ShowcaseComponent {
  readonly imgs: string[] = [
    'assets/bgs/showcase_bg1.png',
    'assets/bgs/showcase_bg2.png',
    'assets/bgs/showcase_bg3.png',
  ];

  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('white');
  }
}
