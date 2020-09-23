import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http'

import { Userlogin } from './user.model'


const apiUrl = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root',
})

export class ApiConService {
  constructor(private http: HttpClient, private router: Router) {

  }



  authUser(user: Userlogin) {
    return this.http
      .post<any>(apiUrl + "/login", user)
      .subscribe(Response => {
        if (Response.token)
          this.router.navigate(["/login/dashboard"]), err => console.log(err);

      })
  }



}
