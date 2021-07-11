import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin: boolean = false;
  constructor(private fb:FormBuilder, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }

  login(){
    console.log("Form details are:",this.loginForm.value);
    
  }
  
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
