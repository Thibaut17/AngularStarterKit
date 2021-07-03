import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { Page1Component } from './routes/page1/page1.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { PrivacyComponent } from './routes/privacy/privacy.component';
import { TermsComponent } from './routes/terms/terms.component';
import { AboutComponent } from './routes/about/about.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'about', component: AboutComponent },
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
