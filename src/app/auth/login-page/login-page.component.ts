import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TelegramLoginData} from "../telegram-login-widget/telegram-login-widget.component";
import {AuthRequest} from "../auth-request";
import {AuthService} from "../auth.service";
import {UserService} from "../../users/user.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  referral: string | undefined;
  redirect: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.referral=params['referral'];
      this.redirect=params['redirect'];
    });
  }

  authUser(loginData: TelegramLoginData) {
    let authRequest = new AuthRequest();

    authRequest.id = loginData.id;
    authRequest.firstName = loginData.first_name;
    authRequest.lastName = loginData.last_name;
    authRequest.username = loginData.username;
    authRequest.photoUrl = loginData.photo_url;
    authRequest.authDate = loginData.auth_date;
    authRequest.hash = loginData.hash;
    authRequest.referralCode = this.referral;

    this.authService.auth(authRequest).subscribe(user => {
      this.userService.setUser(user);

      if (this.redirect)
        this.router.navigate(['/' + this.redirect]);
      else {
        let role = user.role;

        switch (role) {
          case "ROLE_STUDENT":
            this.router.navigate(['/profile']);
            break;
          case "ROLE_TUTOR":
            this.router.navigate(['/profile']);
            break;
          case "ROLE_ADMIN":
            this.router.navigate(['/courses']);
            break;
        }
      }
    }, error => {
      console.error('auth error:', error);
    });
  }
}
