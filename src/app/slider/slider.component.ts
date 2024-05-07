import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  @Input({ required: true }) imgs!: string[];

  idx1 = 0;
  idx2 = 0;

  animationInProgress = false;

  state = true;

  imagesLoaded: number = 0;

  state1 = 0;
  state2 = 0;

  loading = false;

  subscription!: Subscription;

  lock = false;

  ngOnInit(): void {
    this.imgs.forEach((x, _) => {
      const image = new Image();
      image.onload = () => {
        this.imagesLoaded++;
        this.loading = this.imagesLoaded != this.imgs.length;
      };
      image.src = x;
    });
    this.loading = false;
    this.subscription = interval(10000).subscribe((_) =>
      this.lock ? null : this.right(),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async left() {
    if (!this.animationInProgress && !this.loading) {
      let currentIdx = this.state ? this.idx1 : this.idx2;
      let nextIdx = currentIdx == this.imgs.length - 1 ? 0 : currentIdx + 1;
      this.animationInProgress = true;
      if (this.state) {
        this.state2 = 100;
        this.idx2 = nextIdx;
        while (this.state2 != 0) {
          this.state1 -= 1;
          this.state2 -= 1;
          await this.delay(12);
        }
      } else {
        this.state1 = 100;
        this.idx1 = nextIdx;
        this.animationInProgress = true;
        while (this.state1 != 0) {
          this.state1 -= 1;
          this.state2 -= 1;
          await this.delay(12);
        }
      }
      this.state = !this.state;
      this.animationInProgress = false;
    }
  }

  async right() {
    if (!this.animationInProgress && !this.loading) {
      let currentIdx = this.state ? this.idx1 : this.idx2;
      let nextIdx = currentIdx == 0 ? this.imgs.length - 1 : currentIdx - 1;
      this.animationInProgress = true;
      if (this.state) {
        this.state2 = -100;
        this.idx2 = nextIdx;
        while (this.state2 != 0) {
          this.state1 += 1;
          this.state2 += 1;
          await this.delay(12);
        }
      } else {
        this.state1 = -100;
        this.idx1 = nextIdx;
        this.animationInProgress = true;
        while (this.state1 != 0) {
          this.state1 += 1;
          this.state2 += 1;
          await this.delay(12);
        }
      }
      this.state = !this.state;
      this.animationInProgress = false;
    }
  }
}
