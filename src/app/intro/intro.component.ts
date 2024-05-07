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
  container_height: number = 0;

  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('purple');
    this.globals.setCurrentSection('intro');
  }

  ngOnInit() {
    const element = document.getElementById('intro-container');
    this.container_height = element ? element.clientHeight : 0;
    console.log(this.container_height);
  }
}
