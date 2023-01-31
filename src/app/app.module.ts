import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxTweetModule } from 'ngx-tweet';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsListComponent } from './pages/news-list/news-list.component';
import { NewsDisplayComponent } from './pages/news-display/news-display.component';
import { SafeUrlPipe } from './shared/safeUrlPipe';
import { GuidesListComponent } from './pages/guides/guides-list/guides-list.component';
import { ProgrammationComponent } from './pages/programmation/programmation.component';
import { TeamComponent } from './pages/team/team.component';
import { ResultsComponent } from './pages/results/results.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsListComponent,
    NewsDisplayComponent,
    SafeUrlPipe,
    GuidesListComponent,
    ProgrammationComponent,
    TeamComponent,
    ResultsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTweetModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
