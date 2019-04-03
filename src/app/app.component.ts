import { Component,ErrorHandler, Input } from '@angular/core';
import { MyGameDataService } from './services/my-game-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'GameSite';

  @Input() gameData:Response;
  errorMessage:ErrorHandler;
  imageHeight = 200;

  constructor(private _myGameDataService:MyGameDataService){

  }

  getGameDetails(gameName: string): boolean{
    this._myGameDataService.getGameData(gameName).subscribe(gameData => {
      this.gameData = gameData;
      console.log('getMovieDetails: ' + this.gameData);
    },
    error => this.errorMessage = <any>error);
    return false;
    
  }
}
