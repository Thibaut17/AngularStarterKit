import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { Page1Component } from './routes/page1/page1.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { PrivacyComponent } from './routes/privacy/privacy.component';
import { TermsComponent } from './routes/terms/terms.component';
import { AboutComponent } from './routes/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    PrivacyComponent,
    TermsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
