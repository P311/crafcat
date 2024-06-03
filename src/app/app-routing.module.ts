import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ServiceComponent } from './service/service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CommunityComponent } from './community/community.component';
import { FaqComponent } from './faq/faq.component';
import { ExploreComponent } from './explore/explore.component';
import { ProcessComponent } from './process/process.component';
import { SampleComponent } from './sample/sample.component';
import { DevelopComponent } from './develop/develop.component';
import { Guard } from './guard';

const routes: Routes = [
  { path: 'intro', component: IntroComponent, canActivate: [Guard] },
  { path: 'service', component: ServiceComponent, canActivate: [Guard] },
  { path: 'contact-us', component: ContactUsComponent, canActivate: [Guard] },
  { path: 'showcase', component: ShowcaseComponent, canActivate: [Guard] },
  { path: 'community', component: CommunityComponent, canActivate: [Guard] },
  { path: 'faq', component: FaqComponent, canActivate: [Guard] },
  { path: 'explore', component: ExploreComponent, canActivate: [Guard] },
  { path: 'process', component: ProcessComponent, canActivate: [Guard] },
  { path: 'sample', component: SampleComponent, canActivate: [Guard] },
  { path: 'develop', component: DevelopComponent },
  { path: '**', redirectTo: 'intro' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
