import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiConService } from '../api-con.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})

export class LoginComponent {

  // get emailInput() { return this.signin.get('email'); }
  // get passwordInput() { return this.signin.get('password'); }


  hide = true;

  constructor(private router: Router, private service: ApiConService, private formBuilder: FormBuilder) { }

  signin: FormGroup

  ngOnInit() {
    this.signin = this.formBuilder.group({

      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],

    });
  }

  onSubmit() {
    console.log(this.signin.value)
    this.service.authUser(this.signin.value)
  }

}



