import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

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
}
