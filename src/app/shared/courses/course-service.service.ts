import { Injectable } from '@angular/core';
import {CourseInterface} from '../courses/course-interface';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {retry,catchError} from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
   // Headers
   httpOptions={ 
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  }
  //Api Address
  apiUrl = 'http://localhost:3000/teacher/';///teacher/:teacherId/course
  
  constructor(private http:HttpClient) { }
  // Requests

  createCourse(id:any , course:any): Observable<CourseInterface> {
    return this.http.post<CourseInterface>('teacher/'+id+'/course',JSON.stringify(course),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )};

    showCourses(id:any): Observable <CourseInterface[]> {

      return this.http.get<CourseInterface[]>('teacher/'+id+'/course')
       .pipe(
         retry(2),
         catchError(this.handleError)
       ) 
     
     };
     showCourse(id:any): Observable <CourseInterface[]> {

      return this.http.get<CourseInterface[]>('teacher/course'+id)
       .pipe(
         retry(2),
         catchError(this.handleError)
       ) 
     
     };
   //Deleteing Course
  deleteCourse(id:any,cid:any){
    return this.http.delete('/teacher/'+id+'/course'+cid)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

 
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
