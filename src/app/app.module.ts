import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Quote1Component } from './quote1/quote1.component';
// import { Quote1 } from './quote1.details/quote1.details.component';

@NgModule({
  declarations: [
    AppComponent,
    Quote1Component,
    // Quote1.DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
