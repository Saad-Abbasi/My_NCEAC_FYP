import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import {BlogService} from '../shared/blog/blog.service'


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogForm:any

  constructor(private http : HttpClient,
              private fb :FormBuilder,
              private blog :BlogService) { }

  ngOnInit() {
    this.blogForm = this.fb.group({
      title:[''],
      content:[''],
      file:['']
    
    })
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const File = event.target.files[0];
      this.blogForm.get('file').setValue(File);
    }
  }
  saveBlog(){
    const formData = new FormData;
    formData.append('file',this.blogForm.get('file').value);
    formData.append('title' ,this.blogForm.get('title').value);
    formData.append('content',this.blogForm.get('content').value);
    this.blog.createBlog(formData).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    )
  }

}
