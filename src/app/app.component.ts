import { Component } from '@angular/core';
import { BEERS } from '../mock-beer';
import { NewBeerComponent } from './new-beer.component';
import { Beer } from './beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beir';
  currentTap: string = 'January Tap';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

 masterBeerList: Beer[] = [
   new Beer('Mr. Nice', 'Portland Beer Bash', 'IPA', 7),
   new Beer('Narco', 'Bombshell Brewery', 'IPA', 8),
   new Beer('Bombasto', 'Bombshell Brewery',  'Lager', 6),
   new Beer('Celeritas', 'Bombshell Brewery', 'Lite Ale', 5),
   new Beer('Magneta', 'SuzyQ Distillery', 'Lager', 4),
   new Beer('RubberMan', 'Pissed Apple Orchards', 'Cider', 9),
   new Beer('Dynama', 'Pissed Apple Orchards', 'Cider',  8),
  new Beer('Dr IQ', 'PortlandBeerBash', 'Porter', 12),
   new Beer('Magma', 'Kroger Foods', 'Stout', 16),
  new Beer ('Tornado', 'Kroger Foods', 'Pale Ale', 11)
];




  addBeer(newBeer: Beer) {
    this.masterBeerList.push(newBeer);
    console.log(this.masterBeerList);
  }
}
