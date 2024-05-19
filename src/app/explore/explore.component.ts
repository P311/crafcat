import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('purple');
    this.globals.setCurrentSection('explore');
  }

  show = [false, false, false, false, false, false, false, false];

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  openQuestionnaire(){
    window.open("https://uxljxnzrikr.feishu.cn/share/base/form/shrcn2M9nKUHtaunrgTJf9g7yth", '_blank');
  }
  
}
