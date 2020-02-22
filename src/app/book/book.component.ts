import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms';
import{BookService} from '../shared/book/bookservice.service'
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
bookForm:FormGroup
  

  constructor(private fb: FormBuilder,private bookservice:BookService) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      b_id:[''],
      b_name:[''],
      b_author:[''],
      b_sec:[''],
      b_rec:['']
  
    })
  }
  saveBook(){
    this.bookservice.addBook(this.bookForm.value).subscribe(
      (data)=>console.log(data),
      (err)=>{
        console.log(err)
      }
      
    )
    console.log(this.bookForm.value);
  }

}