import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Todo create environments for this so we dont have to switch this all the time and everywhere

  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    console.log(environment.backendURL + `auth/authenticate`);
    return this.http.get<any>(environment.backendURL + `auth/authenticate`, {withCredentials: true});
  }

  login(body): Observable<any> {
    return this.http.post<any>(environment.backendURL + `auth/login`, body, {withCredentials: true});
  }

  signOut(): Observable<any> {
    return this.http.get<any>(environment.backendURL + `auth/logout`, {withCredentials: true});
  }

  signUp(body): Observable<any> {
    return this.http.post<any>(environment.backendURL + `auth/register`, body, {withCredentials: true});
  }

}
