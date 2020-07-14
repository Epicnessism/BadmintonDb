import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  //Todo create environments for this so we dont have to switch this all the time and everywhere
  // backendURL: String = 'http://localhost:3000/';
  backendURL: String = 'http://ec2-3-132-178-65.us-east-2.compute.amazonaws.com:3000/';

  constructor(private http: HttpClient) { }

  // getPlayerStats(id): Observable<any> {
  //   console.log(this.backendURL + `players/${id}`);
  //   return this.http.get<any>(this.backendURL + `players/${id}`);
  // } //TODO resolve playerID vs playerName

  insertGame(gameBody): Observable<any> {
    console.log(this.backendURL + `games`);
    console.log(gameBody);
    return this.http.post<any>(this.backendURL + `games`, gameBody, {withCredentials: true});
  }

}
