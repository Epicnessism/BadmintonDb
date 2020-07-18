import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private subscriptionService: SubscriptionService
    ) { }

  ngOnInit(): void {
    this.subscriptionService.sendLoginRedirect('profilePage');
    this.authService.authenticate().subscribe( result => {
      console.log('adfadsf: ',result.status);
    })
  }

}
