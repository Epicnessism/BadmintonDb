import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginFormGroup: FormGroup;
  subscription: Subscription;
  previousRoute: string = null;
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {
    this.subscription = this.subscriptionService.getLoginRedirect().subscribe( originalRoute => {
      console.log(originalRoute.route);
      this.previousRoute = originalRoute.route;
    })
  }

  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      username: [undefined || '', Validators.required],
      password: [undefined || '', Validators.required]
    });
  }

  login(): void {
    this.authService.login(this.loginFormGroup.value).subscribe( result => {
      console.log(result);
      console.log("successful login");

      if(this.previousRoute != null) {
        this.router.navigate([this.previousRoute]);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    //unsubscribe so no mem leaks
    this.subscription.unsubscribe();
  }

}
