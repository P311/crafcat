import { Component } from '@angular/core';
import { Globals } from '../globals';

interface media {
  name: string;
  content: string;
  update: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  medias: media[] = [
    {
      name: '小红书',
      content: 'xxxxxxxxx',
      update: 'xxxxxxxxx',
      icon: '../assets/contact_icons/redbook.svg',
      link: 'https://www.google.com/',
    },
    {
      name: '小红书',
      content: 'xxxxxxxxx',
      update: 'xxxxxxxxx',
      icon: '../assets/contact_icons/redbook.svg',
      link: 'https://www.google.com/',
    },
    {
      name: '小红书',
      content: 'xxxxxxxxx',
      update: 'xxxxxxxxx',
      icon: '../assets/contact_icons/redbook.svg',
      link: 'https://www.google.com/',
    },
    {
      name: '小红书',
      content: 'xxxxxxxxx',
      update: 'xxxxxxxxx',
      icon: '../assets/contact_icons/redbook.svg',
      link: 'https://www.google.com/',
    },
    {
      name: '小红书',
      content: 'xxxxxxxxx',
      update: 'xxxxxxxxx',
      icon: '../assets/contact_icons/redbook.svg',
      link: 'https://www.google.com/',
    },
  ];
  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('deep_purple');
  }
}
