import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Response } from './response';
import { Foo } from './foo';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class SmartTableService extends SmartTableData {
  foossList: Foo[] = [];

 response: Response = {
    fooList: this.foossList,
  };

  getData() {
    const data = [{
          id: 1,
          name: 'Mark'}];
    return data;
  }

  private url = 'http://localhost:8081/rest-server/api/foos';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient) { super(); }

  getFoos(): Observable<Response> {
    this.log('getfoos');
    return this.http.get<Response>(this.url)
      .pipe(
        tap(_ => this.log('fetched foos')),
        catchError(this.handleError<Response>('getfoos', this.response)),
      );
  }

 /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
//     console.log(message); // log to console instead

  }

}
