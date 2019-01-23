import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Beer } from './beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {

  constructor(
    private http: HttpClient) { }
//   addBeer (beer: Beer): Observable<Beer> {
//     return this.http.post<Beer>(this.beersUrl, beer, httpOptions).pipe( tap((beer: Beer) => this.log('added beer!')),
//
//
//     catchError(this.handleError<Beer>('addBeer'))
//   );
// }

getBeers (): Observable<Beer[]> {
  return this.http.get<Beer[]>(this.beersUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError('getBeers', []))
    );
}

}
