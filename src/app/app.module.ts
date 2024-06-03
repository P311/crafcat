import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ServiceComponent } from './service/service.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { Globals } from './globals';
import { CommunityComponent } from './community/community.component';
import { FaqComponent } from './faq/faq.component';
import { ExploreComponent } from './explore/explore.component';
import { ProcessComponent } from './process/process.component';
import { SampleComponent } from './sample/sample.component';
import { DevelopComponent } from './develop/develop.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ServiceComponent,
    ShowcaseComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    CommunityComponent,
    FaqComponent,
    ExploreComponent,
    ProcessComponent,
    SampleComponent,
    DevelopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [Globals],
  bootstrap: [AppComponent],
})
export class AppModule {}
