import { Component, OnInit } from '@angular/core';
import {TeacherServiceService} from '../shared/teacher/teacher-service.service';
import {Teacher} from '../shared/teacher/teacher';
import {Router} from '@angular/router';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public teachers:Teacher[];

  constructor(private teacher: TeacherServiceService,
              private _router:    Router) { }
  
  

  ngOnInit() {
    this.teacher.showTeachers().subscribe(
      (listTeacher)=>{this.teachers = listTeacher} ,
      (err)=>{
        console.log(err)
      }
      
     )
    }
     delete(id:any){
      this.teacher.deleteTeacher(id).subscribe(data=>{
        location.reload();
        alert("Record Deleted Successfully");
      });
      
    }
    editTeacher(id:Teacher[]){
      this._router.navigate(['/edit',id]);
    }
  }


