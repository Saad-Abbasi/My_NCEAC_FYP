import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsession',
  templateUrl: './viewsession.component.html',
  styleUrls: ['./viewsession.component.css']
})
export class ViewsessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  delete(){
    alert("Do You Want to delete ?")
  }
}
