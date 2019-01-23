import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../beer.service';
import { BEERS } from '../mock-beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  beers = BEERS;
  selectedBeer: Beer;

  constructor() { }

  ngOnInit() {
    // this.getBeers();
  }


  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }
  // getBeers(): void {
  //   this.BeerService.getBeers()
  //   .subscribe(beers => this.beers = beers);
  // }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.BeerService.addBeer({ name } as Beer)
  //     .subscribe(beer => {
  //       this.beers.push(beer);
  //     });
  // }

}
