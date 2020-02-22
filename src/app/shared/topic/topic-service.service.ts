import { Injectable } from '@angular/core';
import {Itopic} from '../topic/itopic';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError, from} from 'rxjs';
import {retry,catchError} from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {
 
    // Headers
    httpOptions={ 
     headers: new HttpHeaders({
       'content-type':'application/json'
     })
   }
   //Api Address
   apiUrl = 'http://localhost:3000/teacher/';///teacher/:teacherId/course
   
   constructor(private http:HttpClient) { }
   // Requests/teacher/:courseId/topic
 
   createTopic(id:any , topic:any): Observable<Itopic> {
     return this.http.post<Itopic>(this.apiUrl+id+'/topic',JSON.stringify(topic),this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.handleError)
     )};
      getTopic(id:any):Observable<any> {
        return this.http.get<any>(this.apiUrl+'course/'+id,this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
      }

     //Handling Error
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
