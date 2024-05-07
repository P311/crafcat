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

  container_height: number = 0;

  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('purple');
    this.globals.setCurrentSection('showcase');
  }

  ngOnInit() {
    const element = document.getElementById('showcase-container');
    this.container_height = element ? element.clientHeight : 0;
    console.log(this.container_height);
  }
}
