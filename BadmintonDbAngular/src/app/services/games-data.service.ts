import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  //Todo create environments for this so we dont have to switch this all the time and everywhere

  constructor(
    private http: HttpClient
  ) { }

  // getPlayerStats(id): Observable<any> {
  //   console.log(this.backendURL + `players/${id}`);
  //   return this.http.get<any>(this.backendURL + `players/${id}`);
  // } //TODO resolve playerID vs playerName

  insertGame(gameBody): Observable<any> {
    console.log(`${environment.backendURL}games`);
    console.log(gameBody);
    return this.http.post<any>(`${environment.backendURL}games`, gameBody, { withCredentials: true });
  }

  getRecentGames(minutes = 60): Observable<any> {
    console.log(`${environment.backendURL}games/recent/${minutes}`);
    return this.http.get<any>(`${environment.backendURL}games/recent/${minutes}`, { withCredentials: true });
  }

  getGameBetween(newestMinutes = 0, oldestMinutes = 60): Observable<any> {
    console.log(`${environment.backendURL}games/recentBetween/${newestMinutes}/${oldestMinutes}`);
    return this.http.get<any>(`${environment.backendURL}games/recentBetween/${newestMinutes}/${oldestMinutes}`, { withCredentials: true });
  }

}
