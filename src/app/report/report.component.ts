import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceService} from '../shared/topic/topic-service.service';
import { Itopic } from '../shared/topic/itopic';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  topics:any=[];
  

  constructor(private router:ActivatedRoute,
              private topicService:TopicServiceService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(result =>{
      const courseId = result.get('id');
      this.topicService.getTopic(courseId).subscribe((res)=>
      this.topics = res)
    })
  }
  
  

}
