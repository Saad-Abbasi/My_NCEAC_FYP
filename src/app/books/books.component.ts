import { Component, OnInit } from '@angular/core';
import {BookService} from '../shared/book/bookservice.service'
import{Ibook} from '../shared/book/ibook'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books:Ibook;
  constructor(private bookservice:BookService) { }

  ngOnInit() {
    this.bookservice.getBooks().subscribe(
      (data)=> this.books = data,
      (err)=>{
        console.log(err)
      }
    )

  }
  delete(){
    
  }
}
