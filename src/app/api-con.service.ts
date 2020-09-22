import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http'
import { FlashMessagesService } from 'angular2-flash-messages';

import { Userlogin, userData } from './user.model'


const apiUrl = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root',
})

export class ApiConService {
  constructor(private http: HttpClient, private router: Router, private _flashMessagesService: FlashMessagesService) {

  }

  token: any

  authUser(user: Userlogin) {
    return this.http
      .post<any>(apiUrl + "/login", user)
      .subscribe(Response => {
        {
          const token = Response.token;
          this.token = token;
          if (token) {
            console.log(token)
            // this.token = Response.token
            // console.log(this.token);
            this.router.navigate(["/login/dashboard"]), err => console.log(err);
          }
          else {
            console.log(JSON.stringify(Response.messages))
            this._flashMessagesService.show('Failure!', { cssClass: 'alert-danger' });
          }
        }
      })
  }



  createUser(newUser: userData) {
    return this.http
      .post<any>(apiUrl + "/user", newUser)
      .subscribe(Response => {
        if (Response.token)
          this.router.navigate(["/login/dashboard"]), err => console.log(err);
      })
  }



}
