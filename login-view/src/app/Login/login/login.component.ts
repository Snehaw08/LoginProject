import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  // constructor(private loginService: LoginService, private router: Router) {}

  // msg;

  // ngOnInit(): void {}
  // check(uname: string, p: string) {
  //   if (this.loginService.checkUserNameAndPassword(uname, p)) {
  //     this.router.navigate(['../../logout']);
  //   } else {
  //     this.msg = 'Invalid username or password';
  //   }
  // }
  userEmail: String;
  userPassword: String;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.loginService
      .validate(this.userEmail, this.userPassword)
      .then((response) => {
        this.loginService.setUserInfo({ user: response['user'] });
        this.router.navigate(['home']);
      });
  }
}
