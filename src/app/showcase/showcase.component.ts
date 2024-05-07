import { Component } from '@angular/core';

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
}
