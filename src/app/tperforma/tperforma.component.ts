import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms';
import { Location } from '@angular/common';
import {ActivatedRoute,Router} from '@angular/router';
import { CourseInterface } from '../shared/courses/course-interface';
import{CourseServiceService}from '../shared/courses/course-service.service';


@Component({
  selector: 'app-tperforma',
  templateUrl: './tperforma.component.html',
  styleUrls: ['./tperforma.component.css']
})
export class TperformaComponent implements OnInit {
  dForm:FormGroup;
  techid:any;
  course:CourseInterface;
  

  constructor(private fb: FormBuilder,
    private router : ActivatedRoute,
    private courseService :CourseServiceService,
    private location:Location
      
    
    ) { }

  ngOnInit() {
    this.dForm = this.fb.group({
      degreeProgram:[''],
      session:[''],
      semester:[''],
      courseTitle:[''],
      courseCode:[''],
      creditHours:[''],
      pre:[''],
      quiz:[''],
      midTerm:[''],
      finalTerm:[],
      assignment:[''],
      lab:[''],
      totalMarks:[''],
      courseCoordinator:[''],
      url:[''],
      currentCatelogDescription:[''],
      textBook:[''],
      referenceMaterial:[''],
      courseGoals:['']
    });
    this.router.paramMap.subscribe(result=>{
       this.techid  = result.get('id')
      console.log(this.techid);
      
    })
    
  }
  //Value Updating 

  
 //goback
 goback(){
   this.location.back();
 }
  createSubmitPerform(){
  this.course = this.dForm.value
  const id = this.techid;
  this.courseService.createCourse(id,this.course).subscribe(result=>{
      console.log("Course Registered");
      this.location.back()
      },
      (err =>{
        console.log(err)
      })
    )
  }
  // Fill Values
  fillValues(event){
    const val = event.target.value;
    if(val=="Object_Oriented_Programming"){
     this.dForm.get('courseCode').setValue('CS-1201');
     this.dForm.get('creditHours').setValue(4);
     this.dForm.get('pre').setValue('Introduction To Programming');
     this.dForm.get('lab').setValue(50);
     this.dForm.get('finalTerm').setValue(75);
     this.dForm.get('midTerm').setValue(45);
     this.dForm.get('assignment').setValue(20);
     this.dForm.get('quiz').setValue(10);
     this.dForm.get('totalMarks').setValue(200);
  
    }
    else if(val=="Introduction_To_Data_Base"){
     this.dForm.get('courseCode').setValue('CS-2204');
     this.dForm.get('creditHours').setValue(4);
     this.dForm.get('pre').setValue('Null');
     this.dForm.get('lab').setValue(50);
     this.dForm.get('finalTerm').setValue(75);
     this.dForm.get('midTerm').setValue(45);
     this.dForm.get('assignment').setValue(20);
     this.dForm.get('quiz').setValue(10);
     this.dForm.get('totalMarks').setValue(200);
    }
    else if(val=="Operating_System"){
      this.dForm.get('courseCode').setValue('CS-3102');
      this.dForm.get('creditHours').setValue(4);
      this.dForm.get('pre').setValue('Null');
      this.dForm.get('lab').setValue(50);
      this.dForm.get('finalTerm').setValue(75);
      this.dForm.get('midTerm').setValue(45);
      this.dForm.get('assignment').setValue(20);
      this.dForm.get('quiz').setValue(10);
      this.dForm.get('totalMarks').setValue(200);
     }
     else if(val=="Compiler_Construction"){
      this.dForm.get('courseCode').setValue('CS-3213');
      this.dForm.get('creditHours').setValue(3);
      this.dForm.get('pre').setValue('Null');
      this.dForm.get('lab').setValue(0);
      this.dForm.get('finalTerm').setValue(75);
      this.dForm.get('midTerm').setValue(45);
      this.dForm.get('assignment').setValue(20);
      this.dForm.get('quiz').setValue(10);
      this.dForm.get('totalMarks').setValue(150);
     }
     else if(val=="Data_Structure_Algorithm"){
      this.dForm.get('courseCode').setValue('CS-2101');
      this.dForm.get('creditHours').setValue(4);
      this.dForm.get('pre').setValue('Null');
      this.dForm.get('lab').setValue(50);
      this.dForm.get('finalTerm').setValue(75);
      this.dForm.get('midTerm').setValue(45);
      this.dForm.get('assignment').setValue(20);
      this.dForm.get('quiz').setValue(10);
      this.dForm.get('totalMarks').setValue(200);
     }
     else if(val=="Data_Communication"){
      this.dForm.get('courseCode').setValue('CS-2206');
      this.dForm.get('creditHours').setValue(3);
      this.dForm.get('pre').setValue('Null');
      this.dForm.get('lab').setValue('');
      this.dForm.get('finalTerm').setValue(75);
      this.dForm.get('midTerm').setValue(30);
      this.dForm.get('assignment').setValue(10);
      this.dForm.get('quiz').setValue(10);
      this.dForm.get('totalMarks').setValue(150);
     }
    else {
     this.dForm.get('courseCode').setValue('');
     this.dForm.get('creditHours').setValue('');
    }
  }
  // mapValuesToCourseModel(){
  //   this.course.degreeProgram =this.dForm.value.degreeProgram,
  //   this.course.session= this.dForm.value.session,
  //   this.course.semester=  this.dForm.value.semester,
  //  this.course.courseTitle=  this.dForm.value.courseTitle,
  //   this.course.courseCode= this.dForm.value.courseCode,
  //   this.course.creditHours=  this.dForm.value.creditHours,
  // this.course.pre=  this.dForm.value.pre,
  //  this.course. quiz=  this.dForm.value.quiz,
  //   this.course.midTerm=  this.dForm.value.midTerm,
  //  this.course. finalTerm=  this.dForm.value.finalTerm,
  //  this.course.assignment=  this.dForm.value.assignment,
  //  this.course.lab=  this.dForm.value.lab,
  // this.course.totalMarks=  this.dForm.value.totalMarks,
  //  this.course. courseCoordinator=  this.dForm.value.courseCoordinator,
  //   this.course.url= this.dForm.value.url,
  //  this.course. currentCatelogDescription=  this.dForm.value.currentCatelogDescription,
  //  this.course. textBook=  this.dForm.value.textBook,
  //   this.course.referenceMaterial= this.dForm.value.referenceMaterial,
  //   this.course.courseGoals=  this.dForm.value.courseGoals
  // }
}
