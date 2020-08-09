import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ThrowStmt } from '@angular/compiler';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  mobileQuery: MediaQueryList;


  numNotifications: number = null;

  ngOnInit(): void {
    this.getNotifications();
  }

  private _mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private authService: AuthService,
    private notificationsService: NotificationsService
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  sideNavOptions = [{name:"Find a player", path: "findAPlayer"}, {name:"Add a game", path: "addAGame"}]


  goTo(route) {
    this.authService.routeTo(route);
  }

  signOut(): void {
    // this.authService.routeTo()
    this.authService.signOut();
  }

  getNotifications() {
    this.notificationsService.getActiveNotifications().subscribe( result => {
      console.log(result.length);
      this.numNotifications = result.length;
    })
  }

  goNotifications() {
    this.numNotifications = null;
    this.goTo('notifications');
  }


}
