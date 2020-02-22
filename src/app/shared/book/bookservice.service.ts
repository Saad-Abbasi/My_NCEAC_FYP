import { Injectable } from '@angular/core';
import {Ibook} from './ibook'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable,throwError, from} from 'rxjs';
import {retry,catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class BookService {
  httpOptions={ 
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  }
  apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) { }
  addBook(book:Ibook): Observable<Ibook> {
    return this.http.post<Ibook>('/admin/book',JSON.stringify(book),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )};
    //Getting All the Books 

    getBooks(): Observable<Ibook> {
      return this.http.get<Ibook>('/admin/book',this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )};
//Deleting Specific Book

 // HttpClient API delete() method => Delete employee
  deleteCourse(id){
    return this.http.delete<Ibook>('/admin/' + id, this.httpOptions)
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
