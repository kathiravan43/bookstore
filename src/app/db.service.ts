import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  private api_URL="http://localhost:3000/post";
constructor(private http:HttpClient) {

 }

 getBooks(){
  return this.http.get<any>(this.api_URL);
 }
 addBook(book:any){
  return this.http.post<any>(this.api_URL,book);
}
editBookDetails(data:any,id:any) {
  return this.http.patch("http://localhost:3000/post/"+id,data,id)
}
deleteBook(id:any){
  return this.http.delete("http://localhost:3000/post/"+id,id)
}


}

