import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Itopic} from '../shared/topic/itopic';
import {TopicServiceService} from '../shared/topic/topic-service.service'


@Component({
  selector: 'app-tpsubmission',
  templateUrl: './tpsubmission.component.html',
  styleUrls: ['./tpsubmission.component.css']
})
export class TpsubmissionComponent implements OnInit {
  pSubForm:FormGroup;
  courseid:any;
  topic:Itopic;

 

  constructor(private fb: FormBuilder,
              private router:ActivatedRoute,
              private topicService :TopicServiceService,
              private location:Location) { }

  ngOnInit() {
    this.pSubForm = this.fb.group({
      date:[''],
      day:[''],
      week:[''],
      duration:[''],
      instrumentUsed:[''],
      topicCovered:[''],
      file:[]
     
    });
    this.router.paramMap.subscribe(result=>{
      this.courseid  = result.get('id')
     console.log(this.courseid);
});
}
createTopic(){
  this.topic = this.pSubForm.value
  const id = this.courseid;
  this.topicService.createTopic(id,this.topic).subscribe(result=>{
      console.log("Topic Registered");
      this.location.back()
      },
      (err =>{
        console.log(err)
      })
    )
 
}
goback(){
  this.location.back();
}
}
