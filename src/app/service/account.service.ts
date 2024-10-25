import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { HttpHeaders } from '@angular/common/http';
import { jwtDecode } from "jwt-decode";
import { catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';

const headers= new HttpHeaders()
.set('content-type', 'application/json')
.set('Access-Control-Allow-Origin', '*');

@Injectable({ providedIn: 'root' })
  
export class AccountService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient,
        public alertService: AlertService
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('token')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.userSubject.value;
    }

    isLoggedIn: boolean = false;
    
    login(username: string, password: string): any {
        return this.http.post<User>(`${environment.apiUrl}/users/login`, { username, password },{ 'headers': headers })
            .pipe(
                catchError(this.handleError),
                map((user:any) => {
                console.log('encoded', user.user);
                if(user.user){
               //     alert(user.user);
//                    this.router.navigate(['/login']);
                  //  return false;
               // }else{
                    let userData:any = JSON.stringify(user.user);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', userData);
                    this.isLoggedIn = true;
                    this.userSubject.next(userData);
                    return true;    
                }
            }),
            catchError((error:any) => {
             
              this.isLoggedIn = false;
              return of(false);
            })
        );
    }

    getDecodedAccessToken(token: any): any {
        try {
          return jwtDecode(token);
        } catch(Error) {
          return null;
        }
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('token');
        this.userSubject.next(null);
        this.router.navigate(['/']);
    }

    isAuthenticated(): boolean {
        return this.isLoggedIn;
      }

      private handleError(error: HttpErrorResponse) {


        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.

          console.log('errror',error);
          if(error.status === 404){
            alert('Some thing is wrong from server side');
          }

          if(error.status === 400){
            alert(error.error.error);
          }
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }  
}