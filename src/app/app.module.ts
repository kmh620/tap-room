import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { NewBeerComponent } from './new-beer/new-beer.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    BeerDetailComponent,
    NewBeerComponent,
    AboutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
