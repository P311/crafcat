import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type NavbarTheme = 'purple' | 'deep_purple';
type CurrentSection =
  | 'intro'
  | 'service'
  | 'showcase'
  | 'contact-us'
  | 'community'
  | 'faq'
  | 'explore'
  | 'process'
  | 'game_team';

@Injectable()
export class Globals {
  public navbarTheme = new BehaviorSubject<NavbarTheme>('purple');
  public currentSection = new BehaviorSubject<CurrentSection>('intro');

  public setNavbarTheme(theme: NavbarTheme) {
    this.navbarTheme.next(theme);
  }

  public setCurrentSection(section: CurrentSection) {
    this.currentSection.next(section);
  }
}
