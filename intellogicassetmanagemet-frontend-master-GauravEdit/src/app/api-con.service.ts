import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable, of, throwError } from 'rxjs';​

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';​

import { catchError, tap, map } from 'rxjs/operators';​


import { Userlogin, UserManagement } from './user.model'


const apiUrl = 'http://localhost:3000/api'

const httpOptions = {​

  headers: new HttpHeaders({'Content-Type': 'application/json'})​

};
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
  /*
  userCreate(user: UserManagement) {
    return this.http
      .post<any>(apiUrl + "/user", user)
      .subscribe(Response => {
        if (Response.token)
          this.router.navigate(["/login/dashboard"]), err => console.log(err);

      })
  }

  
  userCreate(user: UserManagement): Observable<UserManagement> {​

  return this.http.post<UserManagement>(apiUrl, user, httpOptions).pipe(​

    tap((use: UserManagement) => console.log(`added user w/ id=${user.firstname}`)),​

    catchError(this.handleError<UserManagement>('user'))​

  );​

} */
userCreate(data):Observable<any>{
  return this.http.post(apiUrl+"/user",data)
}
private handleError<T> (operation = 'operation', result?: T) {​

  return (error: any): Observable<T> => {​

​

    // TODO: send the error to remote logging infrastructure​

    console.error(error); // log to console instead​

​

    // Let the app keep running by returning an empty result.​

    return of(result as T);​

  };​

}


}
