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

  submitForm(id: number, name: string, brand: string, style: string, alcoholContent: number) {
    console.log(id,name, brand, style, alcoholContent);

     //this is not creating a bear object
   let newBeer: Beer = new Beer(parseInt(id), name, brand, style, parseInt(alcoholContent));

   this.sendBeer.emit(newBeer);
   console.log(newBeer);

 }



  constructor() { }

  ngOnInit() {
  }

}
