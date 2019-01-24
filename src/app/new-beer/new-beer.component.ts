import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Beer } from '../beer';
import { BEERS } from '../mock-beer';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent implements OnInit {
  @Output() sendBeer = new EventEmitter();

  // submitted = false;
  //  onSubmit() { this.submitted = true; }

  submitForm(name: string, brand: string, style: string, alcoholContent: number) {
   let newBeer: Beer = new Beer(name, brand, style, alcoholContent);

   this.sendBeer.emit(newBeer);
 }



  constructor() { }

  ngOnInit() {
  }

}
