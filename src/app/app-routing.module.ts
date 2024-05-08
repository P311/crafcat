import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ServiceComponent } from './service/service.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CommunityComponent } from './community/community.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', redirectTo: 'intro' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
