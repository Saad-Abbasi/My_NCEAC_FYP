
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

  

@Injectable({
  providedIn: 'root'
})
export class ResApiService {

  constructor(private httpClient: HttpClient) { }
  
  fetchPeople() : Observable<object> {
    return this.httpClient.get('http://localhost:3000/employees');
  }
  
}
