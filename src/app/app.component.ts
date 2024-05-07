import { Component, HostListener } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  Event,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crafcat';

  showOverlay = true;

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  }

  constructor(public router: Router) {
    router.events
      .pipe(
        filter(
          (e: Event | RouterEvent): e is RouterEvent =>
            e instanceof RouterEvent,
        ),
      )
      .subscribe((e: RouterEvent) => {
        this.navigationInterceptor(e);
      });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }
}
