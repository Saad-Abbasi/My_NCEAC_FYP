import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Iblog } from './iblog';
import {Observable,throwError} from 'rxjs'
import {retry,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // Defining Api
 apiURL = 'http://localhost:3000';
//constructor
  constructor(private http:HttpClient) { }
//
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
   createBlog(blog:any): Observable<any> {
    return this.http.post<any>('/blog',blog)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getBlogs():Observable<Iblog>{
    return this.http.get<Iblog>('/blog')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }



   // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}

