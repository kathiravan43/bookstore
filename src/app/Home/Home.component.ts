import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-Home',
  standalone:true,
  imports:[HttpClientModule],
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  bookDetails:any;
  description:boolean[]=[false];
  content:any;
  button:boolean[]=[];
  constructor(private db:DbService) {
    this.db.getBooks().subscribe(result =>{
      console.log(this.bookDetails);
     this.bookDetails=result;
     this.content=this.bookDetails.description;

    })
  }

  ngOnInit() {

  }

  viewDescription(index:any){
    this.button[index]=true;
    this.description[index]=true;

  }
  hideDescription(index:any){
    this.button[index]=false;
    this.description[index]=false;

  }


}
