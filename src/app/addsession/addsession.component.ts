import { Component, OnInit } from '@angular/core';
import{FormControl,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent implements OnInit {
  sessionForm = this.fb.group({
    s_id:[''],
    s_name:['']

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  saveSession(){
    console.log(this.sessionForm.value);
  }

}
