import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Managebook',
  standalone:true,
  imports:[ReactiveFormsModule,FormsModule],
  templateUrl: './Managebook.component.html',
  styleUrls: ['./Managebook.component.css']
})
export class ManagebookComponent implements OnInit {
  bookDetails:any
  editDetails:any={
    id:Number,
    bookId:Number,
    title:String,
    Author:String,
    Year:Number,
    Descrption:String,
    image:String

  }
  constructor(private db:DbService,private route:Router) {

   }
   edit=false
   showDetails(id:number)
   {
    this.edit=true;
    this.editDetails=this.bookDetails.find((book: any)=>
    {
      return book.bookId===id
    })
   }
   saveChanges(id:any)
   {
     console.log(this.editDetails)
     this.db.editBookDetails(this.editDetails,id).subscribe(response=>
      {
        alert("Details Edited Successfully")
      })
     this.edit=false
     location.reload()
   }
   deleteBook(id:any)
   {
    if(window.confirm("Are you sure to delete this Book"))
    {
      this.db.deleteBook(id).subscribe(response=>
        {
          alert("Book Deleted Successfully")
        })
    }
    else
    {
      console.log("no");
    }
    location.reload()

   }

  ngOnInit() {
    this.db.getBooks() .subscribe(data=>
      {

        this.bookDetails=data
      })
  }

}
