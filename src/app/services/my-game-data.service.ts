import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyGameDataService {

  private _siteURL = 'https://api-v3.igdb.com/games/';
  private _key = '8adb617b216639bf0abaf930a8ca14b8';

  constructor(private _http:HttpClient) { }

  getGameData(gameName): Observable<Response> {

    console.log("URL: "+this._siteURL+gameName+this._key);
    return this._http.get<Response>(this._siteURL+gameName+this._key).pipe(
    tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log('OmdbApiService: '+err.message);
    return Observable.throw(err.message);
  }
}
