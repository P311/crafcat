import { Component } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  readonly imgs: string[] = [
    'assets/bgs/service_bg1.png',
    'assets/bgs/service_bg2.png',
    'assets/bgs/service_bg3.png',
  ];

  container_height: number = 0;

  constructor(private globals: Globals) {
    this.globals.setNavbarTheme('white');
  }

  ngOnInit() {
    const element = document.getElementById('service-container');
    this.container_height = element ? element.clientHeight : 0;
    console.log(this.container_height);
  }
}
