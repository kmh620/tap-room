import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
