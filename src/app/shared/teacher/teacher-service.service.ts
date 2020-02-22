import { Injectable } from '@angular/core';
import {Teacher} from './teacher';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError, from} from 'rxjs';
import {retry,catchError} from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  // Headers
  httpOptions={ 
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  }
  //Api Address
  apiUrl = 'http://localhost:3000';
  
  constructor(private http:HttpClient) { }
  // Requests

  createTeacher(teacher:any) {

    return this.http.post('teacher',teacher)
     .pipe(
       retry(2),
       catchError(this.handleError)
     )};
   //Getting All the teacher
   showTeachers(): Observable <Teacher[]> {

    return this.http.get<Teacher[]>('teacher',)
     .pipe(
       retry(2),
       catchError(this.handleError)
     ) 
   
   };
  // get a Single Teacher
  getTeacher(id:any): Observable <Teacher>{
    return this.http.get<Teacher>('teacher/'+id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )};

    // Updating Teacher
    updateTeacher(teacher:any) {
      return this.http.put(`${this.apiUrl}/teacher/${teacher._id}`,JSON.stringify(teacher),this.httpOptions)
      .pipe(catchError(this.handleError));
      };
   //Deleting Single Teacher 
   deleteTeacher(id:any): Observable <Teacher[]>{
    return this.http.delete<Teacher[]>(this.apiUrl + '/teacher/'+id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )}
// Handling Error

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
