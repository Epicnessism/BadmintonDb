import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  //Todo create environments for this so we dont have to switch this all the time and everywhere

  constructor(private http: HttpClient) { }

  getPlayerStats(id): Observable<any> {
    console.log(environment.backendURL + `players/${id}`);
    return this.http.get<any>(environment.backendURL + `players/${id}`, {withCredentials: true});
  } //TODO resulve playerID vs playerName

}
