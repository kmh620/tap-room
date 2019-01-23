import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Beer } from './beer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class BeerService {

  private beersUrl = 'api/beer';

  constructor(
    private http: HttpClient) { }

    getBeers (): Observable<Beer[]> {
      return this.http.get<Beer[]>(this.beersUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getBeers', []))
      );
    }

//   addBeer (beer: Beer): Observable<Beer> {
//     return this.http.post<Beer>(this.beersUrl, beer, httpOptions).pipe( tap((beer: Beer) => this.log('added beer!')),
//
//
//     catchError(this.handleError<Beer>('addBeer'))
//   );
// }


}
