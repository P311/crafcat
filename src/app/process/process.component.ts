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

  openQuestionnaire(){
    window.open("https://uxljxnzrikr.feishu.cn/share/base/form/shrcn2M9nKUHtaunrgTJf9g7yth", '_blank');
  }
}
