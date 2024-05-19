import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  openQuestionnaire(){
    window.open("https://uxljxnzrikr.feishu.cn/share/base/form/shrcn2M9nKUHtaunrgTJf9g7yth", '_blank');
  }
}
