import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { Root } from '../interface/root';
import { Book } from '../classes/books/book';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  book: Book;
  // url = 'https://gfive.herokuapp.com/api/books/';
 readonly url = "http://127.0.0.1:8000/api/books/";

  // let /

  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.url);
  }
httpHeeaders=new HttpHeaders({'content-Type':'application/json'})
  
saveUser(book_data: any) {
    // return this.http.post(this.url, data);
    return this.http.post(this.url, book_data)
    
  }

  // getUsers = async (data) => {
  //   // const location = window.location.hostname;
  //   const settings = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   try {
  //     const fetchResponse = await fetch(
  //       `http://127.0.0.1:8000/api/books/` data,
  //       settings
  //     );
  //     const data = await fetchResponse.json();
  //     console.log(data)
  //     return data;
  //   } catch (e) {
  //     console.log();

  //     return e;
  //   }
  // };

  getUser(id: number = 1): Observable<Root> {
    return this.http.get<Root>(`${this.url + id}`);
  }
}
