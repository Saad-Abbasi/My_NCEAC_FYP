import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError, from} from 'rxjs';
import {retry,catchError} from'rxjs/operators';
import{Login} from './login'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:3000';

constructor(private http:HttpClient) { }

//httpOptions
httpOptions={ 
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}
//httpCrud Operations For RestFull Api
login(logindata:any): Observable <Login> {

 return this.http.post<Login>('teacher/login',JSON.stringify(logindata),this.httpOptions,)
  .pipe(
    retry(2),
    catchError(this.handleError)
  ) 
};
loginAdmin(logindata:any) {

  return this.http.post<any>('admin/login',JSON.stringify(logindata),this.httpOptions,)
   .pipe(
     retry(2),
     catchError(this.handleError)
   ) 
 };
  //for specific id 
  loginId(id): Observable <Login>{
    return this.http.get<Login>( 'login'+ id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )};
  register(login:any): Observable <Login> {
    return this.http.post<Login>('register',JSON.stringify(login),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )};
    updateuser(id:any , Login:any): Observable<Login> {
      return this.http.put<Login>('update/'+id,JSON.stringify(Login),this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )};
    deleteuser(id): Observable <Login>{
      return this.http.delete<Login>(this.apiUrl + '/deleteuser/'+id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )}
    isLoggedIn(){
      return !!localStorage.getItem('token')
    }
      handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\n Email or Password Incorrect`;
        }
        alert(errorMessage);
        return throwError(errorMessage);
     }

}
      //End Crud Opereations 
