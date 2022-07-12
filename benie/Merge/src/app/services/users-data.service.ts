import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../interface/root';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = 'https://gfive.herokuapp.com/api/books/';

  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
  saveUser(data: any) {
    return this.http.post(this.url, data);
  }
  getUser(id: number = 1): Observable<Root> {
    return this.http.get<Root>(`${this.url}`);
  }
}
