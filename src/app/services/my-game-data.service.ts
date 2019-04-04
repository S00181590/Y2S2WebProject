import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyGameDataService {

  private _siteURL = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/?';
  private _key = '0189';

  constructor(private _http:HttpClient) { }

  getGameData(gameName): Observable<Response> {

    console.log("URL: "+this._siteURL);
    return this._http.get<Response>(this._siteURL).pipe(
    tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log('GameService: '+err.message);
    return Observable.throw(err.message);
  }
}
