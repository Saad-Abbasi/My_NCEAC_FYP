import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from'@angular/forms';
import {AddCourseServiceService} from '../shared/addcourses/add-course-service.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseAdd:FormGroup;
 

  constructor(private fb: FormBuilder,
              private addCourseService:AddCourseServiceService,
              private router: Router) { }

  ngOnInit() {
    this.courseAdd = this.fb.group({
      courseCode:[''],
      courseTitle:[''],
      lecCdtHrs:[''],
      labCdtHrs:[''],
      creditHours:[''],
      
        
      })
  }
  saveCourse(){
    this.addCourseService.addCourse(this.courseAdd.value).subscribe(result=>{
      this.router.navigate(['managecourse'])
    }
      
      ),(err:any)=>{
        console.log(err)
      }
    
  }
  

}
