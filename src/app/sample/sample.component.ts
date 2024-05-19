import { Component } from '@angular/core';
import { Globals } from '../globals';
import { samples, sample } from './samples';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
})
export class SampleComponent {
  selectedTags = new Set();

  readonly usage: string[] = [
    '放松体验',
    '趣味成就',
    '纪念自己',
    '纪念情谊',
    '情谊联结',
    '团队建设',
    '原创故事',
    '二创故事',
  ];
  readonly principle: string[] = [];
  readonly content: string[] = [];
  readonly mech: string[] = [];
  readonly art: string[] = [];

  readonly pageSize = 4;

  readonly samples = samples;

  currentPage: number = 0;

  currentSample = samples;

  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('deep_purple');
    this.globals.setCurrentSection('sample');
  }

  updateItem(item: string) {
    if (this.selectedTags.has(item)) {
      this.selectedTags.delete(item);
    } else {
      this.selectedTags.add(item);
    }
    console.log(this.selectedTags);
    this.updateSample();
  }

  updateSample() {
    if (this.selectedTags.size == 0) {
      this.currentSample = samples;
    } else {
      let current = [];
      for (let sample of samples) {
        for (let tag of sample.tags) {
          if (this.selectedTags.has(tag)) {
            current.push(sample);
            break;
          }
        }
      }
      this.currentSample = current;
    }
    this.currentPage = 0;
  }

  hasItem(item: string): boolean {
    return this.selectedTags.has(item);
  }

  prevPage() {
    this.currentPage -= 1;
  }

  nextPage() {
    this.currentPage += 1;
  }

  openQuestionnaire(){
    window.open("https://uxljxnzrikr.feishu.cn/share/base/form/shrcn2M9nKUHtaunrgTJf9g7yth", '_blank');
  }
}
