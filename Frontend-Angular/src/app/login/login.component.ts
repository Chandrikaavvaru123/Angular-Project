import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    console.log("Form details are:",this.loginForm.value);
    
  }

}
