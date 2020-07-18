import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private loginRedirect = new Subject<any>();

  sendLoginRedirect(route: string) {
    this.loginRedirect.next( { route } );
  }

  getLoginRedirect(): Observable<any> {
    return this.loginRedirect.asObservable();
  }

  constructor() { }


}
