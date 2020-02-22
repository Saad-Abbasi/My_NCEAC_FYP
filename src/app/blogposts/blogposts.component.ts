import { Component, OnInit } from '@angular/core';
import{BlogService} from '../shared/blog/blog.service';
import {Iblog} from '../shared/blog/iblog'


@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {
  Blogs:Iblog;

  constructor(private blogService:BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      (result)=>{
        this.Blogs = result;
        
      },
      (err)=>console.log(err)
    )
  }

}
