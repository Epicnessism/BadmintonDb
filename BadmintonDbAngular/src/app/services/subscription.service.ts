import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private loginRedirect = new Subject<any>();

  previousRoute: string;

  sendLoginRedirect(route: string) {
    console.log(route);
    this.previousRoute = route;
    this.loginRedirect.next( { route } );
  }

  getLoginRedirect(): Observable<any> {
    return this.loginRedirect.asObservable();
  }

  getCurrentPreviousRoute(): string {
    return this.previousRoute;
  }

  constructor() { }


}
