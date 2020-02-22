import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { TeacherServiceService } from '../shared/teacher/teacher-service.service';
import{CourseServiceService} from '../shared/courses/course-service.service'
import {Teacher} from '../shared/teacher/teacher';
import {CourseInterface} from '../shared/courses/course-interface';


@Component({
  selector: 'app-t-home',
  templateUrl: './t-home.component.html',
  styleUrls: ['./t-home.component.css']
})
export class THomeComponent implements OnInit {
  teacher :Teacher;
  course : any;
  courses:CourseInterface;
  tid :any;
  

  constructor(private teacherService: TeacherServiceService,
    private route : ActivatedRoute,
    private _router : Router,
    private courseService:CourseServiceService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      const techId = params.get('id');
      if(techId){
       this.getTeacherr(techId);
       this.getCourses(techId);
      //  this.mapValues();
      }
    });
  }
  getTeacherr(techId:any){
    this.tid = techId;
    this.teacherService.getTeacher(techId).subscribe(
      (listTeacher)=> this.teacher = listTeacher,
      (err:any)=>{
        console.log(err);
      }
   )
  }
   
   getCourses(techId:any){
    this.courseService.showCourses(techId).subscribe(
      (Courses)=>
     this.course = Courses,
     (err:any)=>{
        console.log(err);
      }
      
   )}
  
  //  mapValues(){
  //    this.courses._id = this.course._id,
  //    this.courses.degreeProgram = this.course.degprog,
  //    this.courses.session = this.course.session,
  //    this.courses.semester = this.course.semester,
  //    this.courses.courseCode= this.course.c_code,
  //    this.courses.courseTitle= this.course.c_title,
  //    this.courses.creditHours = this.course.c_hours,
  //    this.courses.quiz = this.course.m_quiz,
  //    this.courses.assignment = this.course.m_assign,
  //    this.courses.courseCoordinator = this.course.c_coordinator,
  //    this.courses.url = this.course.c_url,
  //    this.courses.currentCatelogDescription = this.course.c_catelog,
  //    this.courses.textBook = this.course.c_tbook,
  //    this.courses.referenceMaterial = this.course.c_reference,
  //    this.courses.courseGoals = this.course.c_goals,
  //    this.courses.pre = this.course.c_pre,
  //    this.courses.lab = this.course.c_lab,
  //    this.courses.midTerm = this.course.m_mid,
  //    this.courses.finalTerm = this.course.m_final,
  //    this.courses.totalMarks = this.course.m_total


  //  }
  editTeacher(id:Teacher[]){
    this._router.navigate(['/edit',id]);
  }
  showPeroforma(id:Teacher){
    this._router.navigate(['/tperforma',id]);

  }
  dailyTopic(id:CourseInterface){
    this._router.navigate(['/tpsubmission',id]);
 }
 generateReport(id:CourseInterface){
   this._router.navigate(['/coursereport',id]);
 }
 //Topic Report
 generateTopicReport(id:CourseInterface){
  this._router.navigate(['/report',id]);
}
deleteCourse(cours_id){
this.courseService.deleteCourse(this.tid,cours_id).subscribe(
(data)=>{
  location.reload();
  alert("Course Delted Successfully");
}
)
}



}
