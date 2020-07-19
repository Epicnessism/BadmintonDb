import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  mobileQuery: MediaQueryList;

  ngOnInit(): void {
  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService) {
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

}
