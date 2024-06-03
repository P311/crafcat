import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrl: './develop.component.scss',
})
export class DevelopComponent {
  readonly imgs: string[] = ['assets/bgs/develop_bg.png'];
  container_height: number = 0;

  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('purple');
    this.globals.setCurrentSection('develop');
  }

  ngOnInit() {
    const element = document.getElementById('intro-container');
    this.container_height = element ? element.clientHeight : 0;
    console.log(this.container_height);
  }

  openQuestionnaire() {
    window.open(
      'https://uxljxnzrikr.feishu.cn/share/base/form/shrcn2M9nKUHtaunrgTJf9g7yth',
      '_blank',
    );
  }
}
