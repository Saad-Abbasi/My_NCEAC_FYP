import { Component, OnInit } from '@angular/core';
import {AddCourseServiceService} from '../shared/addcourses/add-course-service.service'
import {Icourse} from '../shared/addcourses/icourse'
@Component({
  selector: 'app-managecourses',
  templateUrl: './managecourses.component.html',
  styleUrls: ['./managecourses.component.css']
})
export class ManagecoursesComponent implements OnInit {
  course:Icourse;
  total:Number;
  delete(id:Icourse){
   this.courseService.deleteCourse(id).subscribe(result=>{
    alert(" Course Deleted Succefully")
   }
   ),
   (err:any)=>{
     console.log(err);
   }
  }

  constructor(private courseService:AddCourseServiceService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
     (result)=> this.course = result
    ),(err:any)=>{
      console.log(err)
    }
  }
 

}
