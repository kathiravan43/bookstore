import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { AddBookComponent } from './AddBook/AddBook.component';
import { ManagebookComponent } from './Managebook/Managebook.component';

export const routes: Routes = [

  {
    path:'',component : HomeComponent

  },
  {
    path:'add', component:AddBookComponent
  },
  {
    path:'manage',component:ManagebookComponent
  }
];
