import { Component } from '@angular/core';
import { BEERS } from '../mock-beer';

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

masterBeerList: Beer[] = [];

masterBeerList.push(BEERS);

  addBeer(newBeer: Beer) {
    this.masterBeerList.push(newBeer);
  }
}
