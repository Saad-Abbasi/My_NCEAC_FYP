import { Component, OnInit } from '@angular/core'; 


@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  
  constructor( ) { }
 

  ngOnInit() {
    console.log("Its Working");
  }

}
