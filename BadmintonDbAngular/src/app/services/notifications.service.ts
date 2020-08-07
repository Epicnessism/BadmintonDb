import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private http: HttpClient
  ) { }

  getActiveNotifications(): Observable<any> {
    console.log(`${environment.backendURL}players/notifications/active`);
    return this.http.get<any>(`${environment.backendURL}players/notifications/active`, {withCredentials: true});
  }
}
