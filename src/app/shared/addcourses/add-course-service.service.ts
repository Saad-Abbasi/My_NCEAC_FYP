import { Injectable } from '@angular/core';
import{Icourse} from "./icourse"
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {retry,catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AddCourseServiceService {
  httpOptions={ 
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  }
  apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }
  addCourse(course:Icourse): Observable<Icourse> {
    return this.http.post<Icourse>('/admin/addCourse',JSON.stringify(course),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )};
    //Getting All the Courses 

    getCourses(): Observable<Icourse> {
      return this.http.get<Icourse>('/admin/addCourse',this.httpOptions)//addCourse((route name))
      .pipe(
        retry(1),
        catchError(this.handleError)
      )};
//Deleting Specific Course 

 // HttpClient API delete() method => Delete employee
  deleteCourse(id){
    return this.http.delete<Icourse>( '/admin/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

//Handle Error Custom Method 
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
