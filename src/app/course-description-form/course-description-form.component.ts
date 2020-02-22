import { Component, OnInit } from '@angular/core';
import {TopicServiceService} from '../shared/topic/topic-service.service';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-course-description-form',
  templateUrl: './course-description-form.component.html',
  styleUrls: ['./course-description-form.component.css']
})
export class CourseDescriptionFormComponent implements OnInit {
  courseid:any;
  course:any;
  index=0;
  constructor(private topicService:TopicServiceService,private router:ActivatedRoute) { }
  
  ngOnInit() {
    this.router.paramMap.subscribe(result=>{
      this.courseid = result.get('id');
      this.getCourse(this.courseid);
    })
    
  }
  getCourse(techId:any){
    this.topicService.getTopic(techId).subscribe(
      (Courses)=>{this.course = Courses
        console.log(this.course);
      }
      ,
     (err:any)=>{
        console.log(err);
      }
      
   )}
   

}
