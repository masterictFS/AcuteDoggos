import { Injectable } from '@angular/core';
import {IHouse} from '../model/IHouse';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  allHousesUrl = 'api/doghouses.json';
  houseBaseUrl = 'api/doghouses/';

  errorHandler: (err: HttpErrorResponse) => Observable<any>;

  constructor(private http: HttpClient) {

    this.errorHandler = function (err: HttpErrorResponse): Observable<any> {
      let errorMessage = '';
      if (err instanceof ErrorEvent) {
        // client-side or network error
        errorMessage = 'Something bad happened. Save yourself.';
      } else {
        // server-side error
        errorMessage = 'The server goofed: ' + err.status + ' and says: ' + err.message;
      }
      return throwError(errorMessage);
    };
  }

  getAllHouses(): Observable<IHouse[]> {
    return this.http.get<IHouse[]>(this.allHousesUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.errorHandler)
    );
  }

  getHouse(id: number): Observable<IHouse> {
    return this.http.get<IHouse>(this.houseBaseUrl + id + '.json').pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.errorHandler)
    );
  }
}
