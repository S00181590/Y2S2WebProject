import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpcomingPageComponent } from './upcoming-page/upcoming-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpcomingPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
