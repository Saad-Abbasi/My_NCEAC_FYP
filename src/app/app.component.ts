import { Component } from '@angular/core';
import {ResApiService} from './res-api.service';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NCEAC';
  peoples;
  showFoot:boolean =true;
  constructor(private myservice: ResApiService,private httpClient: HttpClient,private router: Router,){

    
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'].includes('coursereport/')||event['url'].includes('report/')) {
          this.showFoot = false;
        } else {
          
          this.showFoot = true;
        }
      }
    });
  }
  
 
  ngOnint()
  {
   }
  }
