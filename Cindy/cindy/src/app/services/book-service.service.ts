import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  url = 'https://gfive.herokuapp.com/api/books/';
  
  constructor(private http:HttpClient) {}

  addBook(book_data: any) {
    return this.http.post(this.url, book_data);
  }
}
