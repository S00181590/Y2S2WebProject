import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyGameDataService {

  private _siteURL = 'https://api.thegamesdb.net/Games/ByGameName?apikey=';
  private _key = '0189';
  private _nameLink = '&name=';

  constructor(private _http:HttpClient) { }

  getGameData(gameName): Observable<Response> {

    console.log("URL: "+this._siteURL+this._key+this._nameLink+gameName);
    return this._http.get<Response>(this._siteURL+this._key+this._nameLink+gameName).pipe(
    tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log('OmdbApiService: '+err.message);
    return Observable.throw(err.message);
  }
}
