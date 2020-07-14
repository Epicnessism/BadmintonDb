import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Todo create environments for this so we dont have to switch this all the time and everywhere
  // backendURL: String = 'http://localhost:3000/';
  backendURL: String = 'http://ec2-3-132-178-65.us-east-2.compute.amazonaws.com:3000/';

  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    console.log(this.backendURL + `auth/authenticate`);
    return this.http.get<any>(this.backendURL + `auth/authenticate`, {withCredentials: true});
  }

  login(body): Observable<any> {
    return this.http.post<any>(this.backendURL + `auth/login`, body, {withCredentials: true});
  }

  signOut(): Observable<any> {
    return this.http.get<any>(this.backendURL + `auth/logout`, {withCredentials: true});
  }

}
