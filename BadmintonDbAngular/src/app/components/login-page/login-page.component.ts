import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

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
      this.router.navigate(['/', 'home']);
    });
  }

}
