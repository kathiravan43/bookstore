import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-AddBook',
  standalone:true,
  imports:[HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './AddBook.component.html',
  styleUrls: ['./AddBook.component.css']
})
export class AddBookComponent implements OnInit {
  books: any[] = [];
  bookForm!: FormGroup ;
  constructor(private db:DbService,private rout:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      id : ['', Validators.required],
      title: ['', Validators.required],
      description: ['',Validators.required]
    });


  }

  addNewbook(){
    const newbook={
       id: this.bookForm.value.id,
       title: this.bookForm.value.title,
       description: this.bookForm.value.description
    }
    this.db.addBook(newbook).subscribe(()=>{
      alert("bookAdded");
    })
  }

}
